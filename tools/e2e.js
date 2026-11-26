#!/usr/bin/env node
/* tools/e2e.js – Kiểm thử tự động trên Edge headless (file://, 0 server) qua CDP + Node WebSocket.
   Chạy: node tools/e2e.js */
const fs = require('fs'), path = require('path'), os = require('os'), cp = require('child_process');
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(__dirname, 'out', 'e2e');
fs.mkdirSync(OUT, { recursive: true });

const edge = [
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe'
].find(fs.existsSync);
if (!edge) { console.error('Không tìm thấy msedge.exe'); process.exit(1); }

const PORT = 9237;
const userDir = fs.mkdtempSync(path.join(os.tmpdir(), 'csdl-e2e-'));
const INDEX_URL = 'file:///' + path.join(ROOT, 'index.html').replace(/\\/g, '/');

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function waitForDebugger(port, timeoutMs = 15000) {
  const t0 = Date.now();
  while (Date.now() - t0 < timeoutMs) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/list`);
      const list = await res.json();
      const page = list.find(x => x.type === 'page' && x.webSocketDebuggerUrl);
      if (page) return page.webSocketDebuggerUrl;
    } catch (_) {}
    await sleep(150);
  }
  throw new Error('Edge CDP không phản hồi');
}

class CDP {
  constructor(ws) {
    this.ws = ws; this.seq = 0; this.pending = new Map(); this.listeners = [];
    ws.addEventListener('message', ev => {
      const msg = JSON.parse(ev.data);
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        if (msg.error) reject(new Error(msg.error.message)); else resolve(msg.result);
      } else if (msg.method) {
        this.listeners.forEach(fn => fn(msg));
      }
    });
  }
  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = ++this.seq;
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }
  on(fn) { this.listeners.push(fn); }
  async eval(expr) {
    const res = await this.send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
    if (res.exceptionDetails) {
      const ex = res.exceptionDetails;
      throw new Error('JS Eval Error: ' + (ex.exception && ex.exception.description ? ex.exception.description : ex.text));
    }
    return res.result ? res.result.value : undefined;
  }
  async shot(filename, fullPage = false) {
    const res = await this.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: fullPage });
    const p = path.join(OUT, filename);
    fs.writeFileSync(p, Buffer.from(res.data, 'base64'));
    return p;
  }
}

(async () => {
  const proc = cp.spawn(edge, [
    '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
    `--remote-debugging-port=${PORT}`, `--user-data-dir=${userDir}`, 'about:blank'
  ], { stdio: 'ignore' });

  const failures = [];
  const pageErrors = [];
  const consoleErrors = [];
  const assert = (cond, msg) => { if (!cond) { failures.push(msg); console.error('FAIL:', msg); } else console.log('PASS:', msg); };

  try {
    const wsUrl = await waitForDebugger(PORT);
    const ws = new WebSocket(wsUrl);
    await new Promise((res, rej) => { ws.addEventListener('open', res); ws.addEventListener('error', rej); });
    const cdp = new CDP(ws);
    cdp.on(m => {
      if (m.method === 'Runtime.exceptionThrown') {
        const d = m.params.exceptionDetails;
        pageErrors.push(d.exception ? d.exception.description : d.text);
      }
      if (m.method === 'Runtime.consoleAPICalled' && m.params.type === 'error') {
        consoleErrors.push(m.params.args.map(a => a.value || a.description).join(' '));
      }
    });

    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');
    await cdp.send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-color-scheme', value: 'light' }] });
    await cdp.send('Emulation.setDeviceMetricsOverride', { width: 1366, height: 900, deviceScaleFactor: 1, mobile: false });

    await cdp.send('Page.navigate', { url: INDEX_URL });
    await sleep(1200);

    // 1. Data loaded
    const counts = await cdp.eval(`({
      q: (window.DB && DB.questions.length) || 0,
      fc: (window.DB && DB.flashcards.length) || 0,
      sum: (window.DB && DB.summary.length) || 0,
      es: (window.DB && DB.essays.length) || 0,
      katex: typeof window.katex === 'object',
      theme: document.documentElement.getAttribute('data-theme')
    })`);
    assert(counts.katex, 'KaTeX offline nạp thành công');
    assert(counts.theme === 'light', `Khởi tạo Light mode mặc định (${counts.theme})`);
    assert(counts.q === 572, `Tổng câu trắc nghiệm trên web = ${counts.q} (cần 572)`);
    assert(counts.fc === 210, `Tổng flashcard trên web = ${counts.fc} (cần 210)`);
    assert(counts.sum === 6, `Tổng phần tóm tắt = ${counts.sum} (cần 6)`);
    assert(counts.es === 23, `Tổng bài tự luận = ${counts.es} (cần 23)`);

    // 2. Tab 1 – Summary (chuyển qua từng chương kiểm tra KaTeX + svg.er)
    const t1 = await cdp.eval(`(() => {
      const navBtns = [...document.querySelectorAll('.toc a, [data-ch]')];
      document.querySelectorAll('details.example').forEach(d => d.open = true);
      const kErr = document.querySelectorAll('.katex-error').length;
      const svgs = [...document.querySelectorAll('#app svg.er')];
      const badSvg = svgs.filter(s => { const r = s.getBoundingClientRect(); return r.width < 40 || r.height < 20; }).length;
      return { kErr, svgCount: svgs.length, badSvg, sw: document.documentElement.scrollWidth, iw: window.innerWidth };
    })()`);
    assert(t1.kErr === 0, `Tab 1 Tóm tắt: ${t1.kErr} lỗi KaTeX`);
    assert(t1.svgCount >= 1 && t1.badSvg === 0, `Tab 1 sơ đồ svg.er: ${t1.svgCount} hình, ${t1.badSvg} hình lỗi kích thước`);
    assert(t1.sw <= t1.iw + 2, `Desktop Tab 1 không tràn ngang (${t1.sw} <= ${t1.iw})`);
    await cdp.shot('desktop-tab1-light.png');

    // 3. Tab 2 – Flashcards + Dark mode persistence
    await cdp.eval(`location.hash = '#flashcard'`);
    await sleep(300);
    const t2 = await cdp.eval(`(() => {
      const kErr = document.querySelectorAll('.katex-error').length;
      document.getElementById('fc-card').click();
      document.getElementById('fc-mark-ok').click();
      document.getElementById('fc-mark-rev').click();
      document.getElementById('btn-theme').click();
      return { kErr, theme: document.documentElement.getAttribute('data-theme'), fc: Object.keys(Store.state.fc || {}) };
    })()`);
    assert(t2.kErr === 0, `Tab 2 Flashcard: ${t2.kErr} lỗi KaTeX`);
    assert(t2.theme === 'dark', `Chuyển Dark mode -> ${t2.theme}`);
    await sleep(260);
    await cdp.shot('desktop-tab2-dark.png');

    await cdp.send('Page.reload');
    await sleep(1000);
    const afterReload = await cdp.eval(`({
      theme: document.documentElement.getAttribute('data-theme'),
      fcKeys: Object.keys((Store.state && Store.state.fc) || {}).length
    })`);
    assert(afterReload.theme === 'dark', `Dark mode nhớ sau reload (${afterReload.theme})`);
    assert(afterReload.fcKeys >= 2, `Trạng thái Flashcard lưu localStorage (${afterReload.fcKeys} thẻ)`);
    await cdp.eval(`document.getElementById('btn-theme').click()`); // back to light
    await sleep(250);

    // 4. Tab 3 – Quiz Practice, duplicate/incomplete filters, Wrong review, Mock exam
    await cdp.eval(`location.hash = '#trac-nghiem'`);
    await sleep(350);
    const t3Filter = await cdp.eval(`(() => {
      const countTxt = () => (document.getElementById('qz-start') || {}).textContent || '';
      const raw = countTxt();
      document.getElementById('opt-dup').click();
      const afterDup = countTxt();
      document.getElementById('opt-inc').click();
      const afterInc = countTxt();
      document.getElementById('opt-inc').click();
      document.getElementById('opt-dup').click();
      const restored = countTxt();
      return { raw, afterDup, afterInc, restored };
    })()`);
    assert(t3Filter.raw.includes('572') && t3Filter.afterDup !== t3Filter.raw && t3Filter.afterInc !== t3Filter.afterDup && t3Filter.restored === t3Filter.raw,
      `Bộ lọc Ẩn trùng / Ẩn thiếu dữ liệu hoạt động (${t3Filter.raw.trim()} -> ${t3Filter.afterDup.trim()} -> ${t3Filter.afterInc.trim()})`);

    const t3Practice = await cdp.eval(`(() => {
      document.querySelector('[data-by="exam"]').click();
      const r = document.querySelector('input[name="qz-pick"][value="de-mau-720"]');
      r.checked = true; r.dispatchEvent(new Event('change'));
      document.getElementById('qz-start').click();
      // Cố ý chọn đáp án SAI để kích hoạt chức năng Ôn lại các câu làm sai
      const firstId = [...document.querySelectorAll('.q-opt')].map(b => b.dataset.k);
      const q0 = QuizCore.allQuestions().find(q => q.exam === 'de-mau-720' && q.no === 1);
      const wrongKey = firstId.find(k => !q0 || k !== q0.answer) || firstId[0];
      document.querySelector('.q-opt[data-k="' + wrongKey + '"]').click();
      const hasExplain = !!document.querySelector('.explain');
      const kErr = document.querySelectorAll('.katex-error').length;
      const savedQ = Object.keys(Store.state.q || {}).length;
      return { hasExplain, kErr, savedQ, wrongKey, ans: q0 ? q0.answer : '?' };
    })()`);
    assert(t3Practice.hasExplain, 'Tab 3 Luyện tập: chọn đáp án hiện ngay giải thích');
    assert(t3Practice.kErr === 0, `Tab 3 Luyện tập: ${t3Practice.kErr} lỗi KaTeX`);
    assert(t3Practice.savedQ >= 1, `Tab 3 lưu lịch sử câu làm vào localStorage (${t3Practice.savedQ})`);
    await cdp.shot('desktop-tab3-light.png');

    // Wrong-review & Mock exam default timer check (60 min for de-mau-720, 30 min for giuaki-1)
    const mockRes = await cdp.eval(`(() => {
      document.getElementById('qz-exit').click();
      const wrongBtn = document.getElementById('qz-wrong');
      const wrongEnabled = wrongBtn && !wrongBtn.disabled;
      wrongBtn.click();
      const inWrongSession = document.querySelector('.qz-bar .title') ? document.querySelector('.qz-bar .title').textContent : '';
      document.getElementById('qz-exit').click();

      document.querySelector('[data-mode="exam"]').click();
      const r720 = document.querySelector('input[name="qz-pick"][value="de-mau-720"]');
      r720.checked = true; r720.dispatchEvent(new Event('change'));
      const min720 = Number(document.getElementById('opt-min').value);

      const rgk = document.querySelector('input[name="qz-pick"][value="giuaki-1"]');
      rgk.checked = true; rgk.dispatchEvent(new Event('change'));
      const minGk = Number(document.getElementById('opt-min').value);

      document.getElementById('qz-start').click();
      const timerTxt = document.getElementById('qz-timer') ? document.getElementById('qz-timer').textContent : '';
      window.confirm = () => true;
      document.getElementById('qz-submit').click();
      const hasScore = !!document.querySelector('.score-big');
      const lastExam = (Store.state.exams || [])[0] || {};
      const backBtn = document.getElementById('res-back'); if (backBtn) backBtn.click();
      return { wrongEnabled, inWrongSession, min720, minGk, timerTxt, hasScore, examsSaved: (Store.state.exams || []).length, unscored: lastExam.unscored };
    })()`);
    assert(mockRes.wrongEnabled && mockRes.inWrongSession.includes('sai'), `Nút Ôn lại câu sai hoạt động (${mockRes.inWrongSession})`);
    assert(mockRes.min720 === 60, `Thi thử Đề mẫu 720 mặc định ${mockRes.min720} phút (cần 60)`);
    assert(mockRes.minGk === 30, `Thi thử Giữa kì K17 mặc định ${mockRes.minGk} phút (cần 30)`);
    assert(mockRes.hasScore && mockRes.examsSaved >= 1 && mockRes.unscored === 6,
      `Nộp bài thi thử chấm điểm, loại 6 câu thiếu dữ liệu & lưu lịch sử (${mockRes.examsSaved} lượt)`);

    // 5. Tab 4 – Essays (mở đáp án tất cả 23 bài, kiểm tra KaTeX + svg.er + ghi chú)
    await cdp.eval(`location.hash = '#tu-luan'`);
    await sleep(300);
    const t4 = await cdp.eval(`(() => {
      const ids = [...document.querySelectorAll('.es-item')].map(b => b.dataset.id);
      let kErr = 0, erSvgs = 0, badSvgs = 0;
      for (const id of ids) {
        const cur = document.querySelector('.es-item[data-id="' + id + '"]');
        if (cur) cur.click();
        const tog = document.getElementById('es-toggle');
        if (tog && tog.textContent.includes('Xem')) tog.click();
        kErr += document.querySelectorAll('.katex-error').length;
        const svgs = [...document.querySelectorAll('.es-answer svg.er')];
        svgs.forEach(s => {
          erSvgs++;
          const r = s.getBoundingClientRect();
          if (r.width < 50 || r.height < 30) badSvgs++;
        });
      }
      const first = document.querySelector('.es-item');
      if (first) first.click();
      const tog0 = document.getElementById('es-toggle');
      if (tog0 && tog0.textContent.includes('Xem')) tog0.click();
      const note = document.getElementById('es-note');
      if (note) { note.value = 'Nháp kiểm thử E2E'; note.dispatchEvent(new Event('input')); }
      const done = document.getElementById('es-done'); if (done) done.click();
      const erEl = document.querySelector('.es-answer svg.er');
      if (erEl) erEl.scrollIntoView({ block: 'center' });
      return { count: ids.length, kErr, erSvgs, badSvgs, noteSaved: first ? Store.note(first.dataset.id) : '' };
    })()`);
    assert(t4.count === 23, `Tab 4 hiển thị đủ ${t4.count} bài tự luận`);
    assert(t4.kErr === 0, `Tab 4 Tự luận (mở toàn bộ 23 bài): ${t4.kErr} lỗi KaTeX`);
    assert(t4.erSvgs >= 11 && t4.badSvgs === 0, `Tab 4 sơ đồ ER/EER svg.er: ${t4.erSvgs} sơ đồ, ${t4.badSvgs} lỗi`);
    assert(t4.noteSaved === 'Nháp kiểm thử E2E', 'Tab 4 ghi chú tự lưu localStorage');
    await cdp.shot('desktop-tab4-light.png');

    // 6. Cheat Sheet modal (cả 3 tab con: er, ra, rules)
    const cs = await cdp.eval(`(() => {
      document.getElementById('btn-cheat').click();
      const erRows = [...document.querySelectorAll('#modal svg.er')].filter(s => s.getBoundingClientRect().width > 20).length;
      document.querySelector('#modal [data-t="ra"]').click();
      const kRa = document.querySelectorAll('#modal .katex-error').length;
      document.querySelector('#modal [data-t="rules"]').click();
      const kRules = document.querySelectorAll('#modal .katex-error').length;
      document.querySelector('#modal [data-t="er"]').click();
      return { erRows, kErr: kRa + kRules };
    })()`);
    assert(cs.erRows === 13, `Cheat sheet ER/EER: ${cs.erRows}/13 hình SVG hiển thị`);
    assert(cs.kErr === 0, `Cheat sheet ĐSQH & Quy tắc: ${cs.kErr} lỗi KaTeX`);
    await sleep(260);
    await cdp.shot('desktop-cheat-light.png');
    await cdp.eval(`U.closeModal()`);

    // 7. Import / Export JSON validation
    const io = await cdp.eval(`(() => {
      document.getElementById('btn-data').click();
      const txt = document.getElementById('io-text');
      const imp = document.getElementById('io-import');
      const err = document.getElementById('io-errors');
      txt.value = '{ bad json'; imp.click();
      const syntaxMsg = err.textContent;
      txt.value = JSON.stringify({ questions: [{ id: 'bad-q1' }] }); imp.click();
      const schemaMsg = err.textContent;
      const validPayload = {
        questions: [{
          id: 'e2e-custom-01', exam: 'custom-e2e', no: 1, chapter: 'ch1',
          stem: 'Câu kiểm thử nhập JSON: CSDL quan hệ lưu dữ liệu dưới dạng nào?',
          options: [{ key: 'A', text: 'Bảng (quan hệ)' }, { key: 'B', text: 'Đồ thị' }],
          answer: 'A', explanation: 'Theo Slide Ch.1, mô hình quan hệ lưu dưới dạng bảng.', source: ['Slide Ch.1 Tổng quan']
        }]
      };
      txt.value = JSON.stringify(validPayload); imp.click();
      const importedCount = (Store.state.imported.questions || []).length;
      const totalWithImp = QuizCore.allQuestions().length;
      const exported = Store.exportProgress();
      Store.clearImported();
      Store.resetAll();
      return { syntaxMsg, schemaMsg, importedCount, totalWithImp, exportedOk: exported && exported.type === 'csdl-ontap-progress' };
    })()`);
    assert(io.syntaxMsg.includes('Lỗi cú pháp JSON'), 'Import JSON báo lỗi cú pháp rõ ràng');
    assert(io.schemaMsg.includes('lỗi định dạng'), 'Import JSON báo lỗi schema từng mục rõ ràng');
    assert(io.importedCount === 1 && io.totalWithImp === 573, 'Import JSON hợp lệ nạp vào ngân hàng câu hỏi');
    assert(io.exportedOk, 'Export tiến độ JSON đúng định dạng');
    await sleep(250);

    // 8. Mobile responsive check (390x844, Light + Dark)
    await cdp.send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
    await cdp.eval(`document.getElementById('toast').classList.remove('show'); location.hash = '#tom-tat'; App.refresh(); window.scrollTo(0, 0);`);
    await sleep(350);
    const mob1 = await cdp.eval(`({ sw: document.documentElement.scrollWidth, iw: window.innerWidth, theme: document.documentElement.getAttribute('data-theme') })`);
    assert(mob1.sw <= mob1.iw + 2 && mob1.iw <= 392, `Mobile Tab 1 (${mob1.theme}) không tràn ngang (${mob1.sw} <= ${mob1.iw})`);
    await cdp.shot('mobile-tab1-light.png');

    await cdp.eval(`location.hash = '#trac-nghiem'; window.scrollTo(0, 0);`);
    await sleep(350);
    const mob3 = await cdp.eval(`({ sw: document.documentElement.scrollWidth, iw: window.innerWidth })`);
    assert(mob3.sw <= mob3.iw + 2 && mob3.iw <= 392, `Mobile Tab 3 không tràn ngang (${mob3.sw} <= ${mob3.iw})`);
    await cdp.shot('mobile-tab3-light.png');

    await cdp.eval(`document.getElementById('btn-theme').click(); location.hash = '#tu-luan';`);
    await sleep(350);
    await cdp.eval(`(() => {
      const tog = document.getElementById('es-toggle');
      if (tog && tog.textContent.includes('Xem')) tog.click();
      const erEl = document.querySelector('.es-answer svg.er');
      if (erEl) erEl.scrollIntoView({ block: 'center' });
    })()`);
    await sleep(250);
    const mob4 = await cdp.eval(`({ sw: document.documentElement.scrollWidth, iw: window.innerWidth, theme: document.documentElement.getAttribute('data-theme') })`);
    assert(mob4.sw <= mob4.iw + 2 && mob4.iw <= 392, `Mobile Tab 4 (${mob4.theme}) không tràn ngang (${mob4.sw} <= ${mob4.iw})`);
    await cdp.shot('mobile-tab4-dark.png');

    assert(pageErrors.length === 0, `Page uncaught errors = ${pageErrors.length}`);
    assert(consoleErrors.length === 0, `Console errors = ${consoleErrors.length}`);
    if (pageErrors.length) console.error('Page errors:', pageErrors);
    if (consoleErrors.length) console.error('Console errors:', consoleErrors);

    ws.close();
  } finally {
    try { proc.kill(); } catch (_) {}
    try { fs.rmSync(userDir, { recursive: true, force: true }); } catch (_) {}
  }

  console.log(`\nKết thúc E2E: ${failures.length ? failures.length + ' lỗi' : 'TẤT CẢ ĐẠT'}. Ảnh chụp ở: ${OUT}`);
  process.exit(failures.length ? 1 : 0);
})();
