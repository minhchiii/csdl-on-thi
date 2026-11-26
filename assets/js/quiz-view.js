/* Tab 3 – Giao diện Luyện tập, Thi thử & Ôn lại câu sai */
(function () {
  let cfg = { mode: 'practice', by: 'chapter', chapter: 'all', exam: 'all', shuffle: false, count: 50, minutes: 60 };
  let session = null;   // { mode, title, items, idx, answers, revealed, flags, startedAt, durationSec, timerId, result }
  let keyHandler = null;
  let rootRef = null;

  function stopTimer() { if (session && session.timerId) { clearInterval(session.timerId); session.timerId = null; } }

  function renderExplain(q, picked, showVerdict) {
    let verdict = '';
    if (showVerdict) {
      if (q.incomplete || q.answer == null) verdict = `<div class="verdict muted">${icon('triangle-alert', 16)}<span>Câu thiếu dữ liệu gốc – không tính điểm</span></div>`;
      else if (picked === q.answer) verdict = `<div class="verdict ok">${icon('circle-check', 16)}<span>Chính xác (Đáp án ${q.answer})</span></div>`;
      else if (picked == null) verdict = `<div class="verdict bad">${icon('circle-x', 16)}<span>Chưa trả lời · Đáp án: ${q.answer}</span></div>`;
      else verdict = `<div class="verdict bad">${icon('circle-x', 16)}<span>Chưa đúng · Bạn chọn ${picked}, đáp án là ${q.answer}</span></div>`;
    }
    const chips = [
      `<span class="chip solid">Đáp án tự giải</span>`,
      q.outside ? `<span class="chip">Ngoài slide</span>` : '',
      q.marked ? `<span class="chip" title="Dấu chọn của thí sinh hoặc ghi chú tay trên ảnh gốc, có thể sai">Trong ảnh gốc khoanh: ${U.esc(q.marked)}</span>` : ''
    ].filter(Boolean).join(' ');
    const src = Array.isArray(q.source) ? q.source.join(' · ') : (q.source || '');
    const dups = (q._dups && q._dups.length)
      ? `<div class="also">Câu này cũng có ở: ${q._dups.map(d => `${U.esc(U.examOf(d.exam).short)} (câu ${d.no || '?'})`).join(', ')}</div>` : '';

    return `<div class="explain">${verdict}
      <h4><span>Giải thích</span> ${chips}</h4>
      ${q.incomplete ? `<p class="small muted">Ghi chú ảnh gốc: ${U.esc(q.incomplete)}</p>` : ''}
      ${q.note ? `<p class="small muted">${U.fmtInline(q.note)}</p>` : ''}
      <div class="rich">${U.fmt(q.explanation)}</div>
      ${src ? `<div class="src">${U.esc(src)}</div>` : ''}${dups}</div>`;
  }

  function startQuiz(opts) {
    const hideDup = Store.pref('hideDup'), hideIncomplete = Store.pref('hideIncomplete');
    const all = QuizCore.indexDuplicates(QuizCore.allQuestions());
    let pool = opts.customItems || QuizCore.filterPool({
      by: cfg.by, chapter: cfg.chapter, exam: cfg.exam, wrongOnly: opts.wrongOnly, hideDup, hideIncomplete
    });
    if (!pool.length) return U.toast('Không có câu nào trong lựa chọn hiện tại');
    if (cfg.shuffle || opts.wrongOnly) pool = U.shuffle(pool);
    const limit = opts.mode === 'exam' && !opts.customItems ? Math.min(pool.length, Math.max(1, Number(cfg.count) || pool.length)) : pool.length;
    pool = pool.slice(0, limit);

    const mins = Math.max(1, Number(cfg.minutes) || QuizCore.defaultMinutes(pool.length, cfg.by, cfg.exam, pool.length));
    let title = opts.title;
    if (!title) {
      if (opts.wrongOnly) title = 'Ôn lại các câu làm sai';
      else if (cfg.by === 'chapter') title = cfg.chapter === 'all' ? 'Tất cả các chương' : U.chapterOf(cfg.chapter).short + ' – ' + U.chapterOf(cfg.chapter).title;
      else title = cfg.exam === 'all' ? 'Tất cả các đề' : (QuizCore.examList(all).find(e => e.id === cfg.exam) || { label: cfg.exam }).label;
    }

    stopTimer();
    session = {
      mode: opts.mode, title, items: pool, idx: 0,
      answers: {}, revealed: {}, flags: {},
      startedAt: Date.now(), durationSec: mins * 60, timerId: null, result: null
    };
    if (opts.mode === 'exam') {
      session.timerId = setInterval(() => {
        if (!session || session.result) return stopTimer();
        const left = Math.ceil((session.startedAt + session.durationSec * 1000 - Date.now()) / 1000);
        const el = U.$('#qz-timer');
        if (el) { el.textContent = U.fmtTime(left); el.classList.toggle('low', left <= 300); }
        if (left <= 0) submitExam(true);
      }, 500);
    }
    render(rootRef);
  }

  function submitExam(auto) {
    if (!session || session.result) return;
    stopTimer();
    const usedSec = Math.min(session.durationSec, Math.round((Date.now() - session.startedAt) / 1000));
    session.result = { ...QuizCore.gradeExam(session, usedSec), filter: 'all' };
    if (auto) U.toast('Hết giờ làm bài, hệ thống đã tự nộp.');
    render(rootRef);
  }

  function renderSetup(root) {
    const all = QuizCore.indexDuplicates(QuizCore.allQuestions());
    const hideDup = Store.pref('hideDup'), hideInc = Store.pref('hideIncomplete');
    cfg.by = Store.pref('by') || 'chapter';
    const basePool = QuizCore.filterPool({ by: 'chapter', chapter: 'all', hideDup, hideIncomplete: hideInc });
    const selectedPool = QuizCore.filterPool({ by: cfg.by, chapter: cfg.chapter, exam: cfg.exam, hideDup, hideIncomplete: hideInc });
    const exams = QuizCore.examList(all);
    const wrongCount = Store.wrongIds().filter(id => all.some(q => q.id === id)).length;

    const validTotal = all.filter(q => !q.incomplete && q.answer != null).length;
    const okCount = all.filter(q => !q.incomplete && q.answer != null && (Store.qStat(q.id) || {}).ok === true).length;
    const pctOk = validTotal ? (okCount / validTotal) * 100 : 0;
    const pctBad = validTotal ? (wrongCount / validTotal) * 100 : 0;

    if (cfg.mode === 'exam') {
      const defN = cfg.by === 'exam' && cfg.exam !== 'all' ? selectedPool.length : Math.min(50, selectedPool.length);
      if (!cfg._editedCount) cfg.count = defN || 50;
      if (!cfg._editedMin) cfg.minutes = QuizCore.defaultMinutes(cfg.count, cfg.by, cfg.exam, selectedPool.length);
    }

    const chList = [{ id: 'all', label: 'Tất cả 4 chương' }].concat(DB.chapters.map(c => ({ id: c.id, label: `${c.short} · ${c.title}` })));
    const countOf = (by, id) => QuizCore.filterPool({ by, chapter: id, exam: id, hideDup, hideIncomplete: hideInc }).length;

    const hist = Store.state.exams || [];

    root.innerHTML = `
      <div class="page-head">
        <div class="eyebrow">Phần 3 · Trắc nghiệm (${all.length} câu từ ${exams.length} bộ đề/bài tập)</div>
        <h1>Luyện tập &amp; Thi thử trắc nghiệm</h1>
        <p>Tất cả câu đều có lời giải chi tiết tự giải dựa trên slide. Đề thi thật 50 câu trong 60 phút.</p>
      </div>
      <div class="toolbar">
        <div class="seg">
          <button class="${cfg.mode === 'practice' ? 'on' : ''}" data-mode="practice">Luyện tập (chấm ngay)</button>
          <button class="${cfg.mode === 'exam' ? 'on' : ''}" data-mode="exam">Thi thử (tính giờ)</button>
        </div>
        <button class="btn ${wrongCount ? 'accent' : ''}" id="qz-wrong" ${wrongCount ? '' : 'disabled'}>
          ${icon('rotate-ccw', 15)}<span>Ôn lại các câu làm sai (${wrongCount})</span>
        </button>
        <div class="grow"></div>
        <div class="progress">
          <div class="progress-label"><span>Đã đúng <b>${okCount}/${validTotal}</b></span><span>Đang sai <b>${wrongCount}</b></span></div>
          <div class="bar"><span class="b-ok" style="width:${pctOk}%"></span><span class="b-bad" style="width:${pctBad}%"></span></div>
        </div>
      </div>

      <div class="qz-setup">
        <div class="panel">
          <div class="field">
            <span class="lbl">Chọn nguồn câu hỏi</span>
            <div class="seg">
              <button class="${cfg.by === 'chapter' ? 'on' : ''}" data-by="chapter">Theo Chương</button>
              <button class="${cfg.by === 'exam' ? 'on' : ''}" data-by="exam">Theo Đề / Năm thi</button>
            </div>
          </div>
          <div class="field">
            <div class="pick-list">
              ${cfg.by === 'chapter' ? chList.map(c => `
                <label class="pick">
                  <input type="radio" name="qz-pick" value="${c.id}" ${cfg.chapter === c.id ? 'checked' : ''}>
                  <span>${U.esc(c.label)}</span>
                  <span class="cnt">${countOf('chapter', c.id)} câu</span>
                </label>`).join('') :
                `<label class="pick"><input type="radio" name="qz-pick" value="all" ${cfg.exam === 'all' ? 'checked' : ''}><span>Tất cả các đề</span><span class="cnt">${basePool.length} câu</span></label>` +
                exams.map(e => `
                  <label class="pick">
                    <input type="radio" name="qz-pick" value="${e.id}" ${cfg.exam === e.id ? 'checked' : ''}>
                    <span>${U.esc(e.label)}</span>
                    <span class="cnt">${countOf('exam', e.id)} câu</span>
                  </label>`).join('')}
            </div>
          </div>
          <div class="field opts-row">
            <span class="lbl">Tuỳ chọn</span>
            <label class="check"><input type="checkbox" id="opt-dup" ${hideDup ? 'checked' : ''}> Ẩn câu trùng (giữ 1 câu mỗi nhóm giống nhau)</label>
            <label class="check"><input type="checkbox" id="opt-inc" ${hideInc ? 'checked' : ''}> Ẩn câu thiếu dữ liệu (ảnh gốc mờ hoặc bị cắt)</label>
            <label class="check"><input type="checkbox" id="opt-shuf" ${cfg.shuffle ? 'checked' : ''}> Xáo trộn thứ tự câu</label>
          </div>
          ${cfg.mode === 'exam' ? `
            <div class="field" style="display:flex;gap:1rem;flex-wrap:wrap;align-items:center">
              <label class="small">Số câu: <input type="number" id="opt-cnt" min="1" max="${Math.max(1, selectedPool.length)}" value="${Math.min(cfg.count, Math.max(1, selectedPool.length))}" style="width:76px"></label>
              <label class="small">Thời gian (phút): <input type="number" id="opt-min" min="1" max="180" value="${cfg.minutes}" style="width:76px"></label>
            </div>` : ''}
          <button class="btn primary" id="qz-start" ${selectedPool.length ? '' : 'disabled'}>
            ${icon('play', 15)}<span>Bắt đầu (${cfg.mode === 'exam' ? Math.min(cfg.count, selectedPool.length) : selectedPool.length} câu)</span>
          </button>
        </div>

        <div class="panel">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.6rem">
            <h3 style="margin:0">Lịch sử thi thử</h3>
            ${hist.length ? `<button class="btn sm ghost" id="qz-clr-hist">${icon('trash-2', 13)}<span>Xoá</span></button>` : ''}
          </div>
          ${hist.length ? hist.slice(0, 10).map(h => `
            <div class="hist-item">
              <div><div>${U.esc(h.title)}</div><div class="small muted">${U.fmtDate(h.at)} · ${h.correct}/${h.scoredTotal} câu đúng</div></div>
              <div class="hist-score">${h.score.toFixed(1)}/10</div>
            </div>`).join('') : '<p class="small muted">Chưa có bài thi thử nào. Chuyển sang chế độ Thi thử để làm bài tính giờ.</p>'}
          <hr>
          <div style="display:flex;justify-content:space-between;align-items:center">
            <span class="small muted">Đã lưu trạng thái ${Object.keys(Store.state.q).length} câu</span>
            <button class="btn sm ghost" id="qz-clr-q">Xoá tiến độ câu</button>
          </div>
        </div>
      </div>`;

    U.$$('[data-mode]', root).forEach(b => b.addEventListener('click', () => { cfg.mode = b.dataset.mode; cfg._editedCount = false; cfg._editedMin = false; render(root); }));
    U.$$('[data-by]', root).forEach(b => b.addEventListener('click', () => { cfg.by = b.dataset.by; Store.pref('by', cfg.by); cfg._editedCount = false; cfg._editedMin = false; render(root); }));
    U.$$('input[name="qz-pick"]', root).forEach(r => r.addEventListener('change', () => {
      if (cfg.by === 'chapter') cfg.chapter = r.value; else cfg.exam = r.value;
      cfg._editedCount = false; cfg._editedMin = false; render(root);
    }));
    U.$('#opt-dup', root).addEventListener('change', e => { Store.pref('hideDup', e.target.checked); cfg._editedCount = false; render(root); });
    U.$('#opt-inc', root).addEventListener('change', e => { Store.pref('hideIncomplete', e.target.checked); cfg._editedCount = false; render(root); });
    U.$('#opt-shuf', root).addEventListener('change', e => { cfg.shuffle = e.target.checked; });
    const cntEl = U.$('#opt-cnt', root), minEl = U.$('#opt-min', root);
    if (cntEl) cntEl.addEventListener('change', () => {
      cfg.count = Math.max(1, Math.min(selectedPool.length, +cntEl.value || 1));
      cfg._editedCount = true;
      if (!cfg._editedMin) { cfg.minutes = QuizCore.defaultMinutes(cfg.count, cfg.by, cfg.exam, selectedPool.length); }
      render(root);
    });
    if (minEl) minEl.addEventListener('change', () => { cfg.minutes = Math.max(1, +minEl.value || 1); cfg._editedMin = true; });
    U.$('#qz-start', root).addEventListener('click', () => startQuiz({ mode: cfg.mode }));
    U.$('#qz-wrong', root).addEventListener('click', () => startQuiz({ mode: 'practice', wrongOnly: true, title: 'Ôn lại các câu làm sai' }));
    const clrH = U.$('#qz-clr-hist', root);
    if (clrH) clrH.addEventListener('click', () => { Store.clearExams(); render(root); });
    U.$('#qz-clr-q', root).addEventListener('click', () => { Store.clearQ(); render(root); U.toast('Đã xoá lịch sử đúng/sai từng câu'); });
  }

  function renderRun(root) {
    const q = session.items[session.idx];
    const picked = session.answers[session.idx] || null;
    const revealed = session.mode === 'practice' && !!session.revealed[session.idx];
    const isExam = session.mode === 'exam';
    const leftSec = isExam ? Math.ceil((session.startedAt + session.durationSec * 1000 - Date.now()) / 1000) : 0;

    root.innerHTML = `
      <div class="qz-bar">
        <span class="chip accent">${isExam ? 'Thi thử' : 'Luyện tập'}</span>
        <span class="title">${U.esc(session.title)}</span>
        <span class="mono small muted">Câu ${session.idx + 1}/${session.items.length}</span>
        <div class="grow"></div>
        ${isExam ? `<span class="timer ${leftSec <= 300 ? 'low' : ''}" id="qz-timer">${U.fmtTime(leftSec)}</span>` : ''}
        <button class="btn sm ${session.flags[session.idx] ? 'accent' : ''}" id="qz-flag">${icon('flag', 14)}<span>Đánh dấu</span></button>
        ${isExam ? `<button class="btn sm primary" id="qz-submit">Nộp bài</button>` : ''}
        <button class="btn sm ghost" id="qz-exit">Thoát</button>
      </div>

      <div class="qz-run">
        <div class="q-card">
          <div class="q-meta">
            <span class="q-no">Câu ${session.idx + 1}</span>
            <span class="chip">${U.chapterOf(q.chapter).short}</span>
            <span class="chip">${U.esc(U.examOf(q.exam).short)}${q.no ? ' · câu ' + q.no : ''}</span>
            ${q.outside ? '<span class="chip">Ngoài slide</span>' : ''}
            ${q.incomplete ? '<span class="chip accent">Ảnh gốc thiếu – không tính điểm</span>' : ''}
          </div>
          <div class="q-stem rich">${U.fmt(q.stem)}</div>
          ${U.figureHtml(q.figure)}

          <div class="q-opts">
            ${(q.options || []).map(o => {
              let cls = 'q-opt';
              if (revealed) {
                if (o.key === q.answer) cls += ' right';
                else if (o.key === picked) cls += ' wrong';
              } else if (picked === o.key) cls += ' picked';
              return `<button class="${cls}" data-k="${o.key}" ${revealed ? 'disabled' : ''}>
                <span class="q-key">${o.key}</span>
                <span class="q-text">${o.text ? U.fmtInline(o.text) : ''}${U.figureHtml(o.figure, { maxWidth: 420, bare: true })}</span>
              </button>`;
            }).join('')}
          </div>

          ${!isExam && !revealed && q.incomplete ? `<p><button class="btn sm" id="qz-reveal">Xem ghi chú &amp; giải thích phần đọc được</button></p>` : ''}
          ${revealed ? renderExplain(q, picked, true) : ''}

          <div class="q-nav">
            <button class="btn" id="qz-prev" ${session.idx === 0 ? 'disabled' : ''}>${icon('chevron-left', 15)}<span>Câu trước</span></button>
            <button class="btn" id="qz-next" ${session.idx >= session.items.length - 1 ? 'disabled' : ''}><span>Câu tiếp</span>${icon('chevron-right', 15)}</button>
          </div>
        </div>

        <aside class="panel grid-nav">
          <div class="small" style="font-weight:600">Danh sách câu (${Object.keys(session.answers).length}/${session.items.length})</div>
          <div class="cells">
            ${session.items.map((it, i) => {
              let cls = 'cell';
              if (i === session.idx) cls += ' cur';
              if (session.flags[i]) cls += ' flag';
              if (it.incomplete) cls += ' inc';
              if (session.mode === 'practice' && session.revealed[i]) {
                if (it.answer != null && session.answers[i] === it.answer) cls += ' ok';
                else if (it.answer != null) cls += ' bad';
              } else if (session.answers[i]) cls += ' done';
              return `<button class="${cls}" data-go="${i}">${i + 1}</button>`;
            }).join('')}
          </div>
          <div class="legend">
            <span>Nét đứt: thiếu dữ liệu (không tính điểm)</span>
            <span>Gạch chân đỏ: đã đánh dấu xem lại</span>
          </div>
        </aside>
      </div>`;

    const pick = k => {
      if (session.mode === 'practice' && session.revealed[session.idx]) return;
      session.answers[session.idx] = k;
      if (session.mode === 'practice') {
        session.revealed[session.idx] = true;
        if (!q.incomplete && q.answer != null) Store.recordAnswer(q.id, k, k === q.answer);
      }
      render(root);
    };

    U.$$('.q-opt', root).forEach(b => b.addEventListener('click', () => pick(b.dataset.k)));
    const revBtn = U.$('#qz-reveal', root);
    if (revBtn) revBtn.addEventListener('click', () => { session.revealed[session.idx] = true; render(root); });
    U.$('#qz-flag', root).addEventListener('click', () => { session.flags[session.idx] = !session.flags[session.idx]; render(root); });
    U.$('#qz-prev', root).addEventListener('click', () => { if (session.idx > 0) { session.idx--; render(root); } });
    U.$('#qz-next', root).addEventListener('click', () => { if (session.idx < session.items.length - 1) { session.idx++; render(root); } });
    U.$$('[data-go]', root).forEach(b => b.addEventListener('click', () => { session.idx = +b.dataset.go; render(root); }));
    U.$('#qz-exit', root).addEventListener('click', () => { stopTimer(); session = null; render(root); });
    const subBtn = U.$('#qz-submit', root);
    if (subBtn) subBtn.addEventListener('click', () => {
      const done = Object.keys(session.answers).length;
      if (done < session.items.length && !confirm(`Bạn mới làm ${done}/${session.items.length} câu. Nộp bài luôn?`)) return;
      submitExam(false);
    });
  }

  function renderResult(root) {
    const r = session.result, f = r.filter || 'all';
    const wrongItems = session.items.filter((q, i) => !q.incomplete && q.answer != null && session.answers[i] !== q.answer);
    const list = session.items.map((q, i) => ({ q, i, picked: session.answers[i] || null })).filter(x => {
      if (f === 'wrong') return !x.q.incomplete && x.q.answer != null && x.picked !== x.q.answer;
      if (f === 'flag') return !!session.flags[x.i];
      return true;
    });

    root.innerHTML = `
      <div class="result-head">
        <div>
          <div class="eyebrow">Kết quả · ${U.esc(session.title)}</div>
          <div class="score-big">${r.score.toFixed(1)}<span class="muted" style="font-size:1.3rem"> / 10</span></div>
        </div>
        <div class="small">
          <div>Đúng: <strong>${r.correct}</strong> · Sai: <strong>${r.wrong}</strong> · Bỏ trống: <strong>${r.blank}</strong> (trên ${r.scoredTotal} câu tính điểm)</div>
          ${r.unscored ? `<div class="muted">Bỏ qua không tính điểm: ${r.unscored} câu thiếu dữ liệu gốc</div>` : ''}
          <div class="muted">Thời gian làm: ${U.fmtTime(r.usedSec)} / ${U.fmtTime(r.durationSec)}</div>
        </div>
        <div class="grow"></div>
        <div style="display:flex;gap:.5rem;flex-wrap:wrap">
          ${wrongItems.length ? `<button class="btn accent" id="res-retry-wrong">${icon('rotate-ccw', 15)}<span>Làm lại ${wrongItems.length} câu sai</span></button>` : ''}
          <button class="btn" id="res-again">Thi lại đề này</button>
          <button class="btn primary" id="res-back">Về chọn đề</button>
        </div>
      </div>

      <div class="toolbar">
        <div class="seg">
          <button class="${f === 'all' ? 'on' : ''}" data-rf="all">Tất cả (${session.items.length})</button>
          <button class="${f === 'wrong' ? 'on' : ''}" data-rf="wrong">Sai / bỏ trống (${wrongItems.length})</button>
          <button class="${f === 'flag' ? 'on' : ''}" data-rf="flag">Đã đánh dấu (${Object.values(session.flags).filter(Boolean).length})</button>
        </div>
      </div>

      <div class="q-card">
        ${list.length ? list.map(({ q, i, picked }) => `
          <div class="review-item">
            <div class="q-meta">
              <span class="q-no">Câu ${i + 1}</span>
              <span class="chip">${U.chapterOf(q.chapter).short}</span>
              <span class="chip">${U.esc(U.examOf(q.exam).short)}${q.no ? ' · câu ' + q.no : ''}</span>
              ${q.outside ? '<span class="chip">Ngoài slide</span>' : ''}
            </div>
            <div class="q-stem rich">${U.fmt(q.stem)}</div>
            ${U.figureHtml(q.figure)}
            <div class="q-opts">
              ${(q.options || []).map(o => {
                let cls = 'q-opt';
                if (o.key === q.answer) cls += ' right';
                else if (o.key === picked) cls += ' wrong';
                return `<div class="${cls}"><span class="q-key">${o.key}</span><span class="q-text">${o.text ? U.fmtInline(o.text) : ''}${U.figureHtml(o.figure, { maxWidth: 400, bare: true })}</span></div>`;
              }).join('')}
            </div>
            ${renderExplain(q, picked, true)}
          </div>`).join('') : '<div class="empty">Không có câu nào trong mục lọc này.</div>'}
      </div>`;

    U.$$('[data-rf]', root).forEach(b => b.addEventListener('click', () => { session.result.filter = b.dataset.rf; render(root); }));
    const retry = U.$('#res-retry-wrong', root);
    if (retry) retry.addEventListener('click', () => startQuiz({ mode: 'practice', customItems: wrongItems, title: 'Làm lại câu sai – ' + session.title }));
    U.$('#res-again', root).addEventListener('click', () => startQuiz({ mode: 'exam', customItems: session.items, title: session.title }));
    U.$('#res-back', root).addEventListener('click', () => { session = null; render(root); });
  }

  function render(root) {
    rootRef = root;
    destroyKey();
    if (!session) return renderSetup(root);
    if (session.result) return renderResult(root);
    renderRun(root);
    keyHandler = e => {
      if (!session || session.result || !U.$('#modal').hidden) return;
      if (/^(INPUT|SELECT|TEXTAREA)$/.test((document.activeElement || {}).tagName)) return;
      if (e.key === 'ArrowLeft' && session.idx > 0) { session.idx--; render(root); }
      else if (e.key === 'ArrowRight' && session.idx < session.items.length - 1) { session.idx++; render(root); }
      else if (/^[a-dA-D1-4]$/.test(e.key)) {
        const k = { '1': 'A', '2': 'B', '3': 'C', '4': 'D' }[e.key] || e.key.toUpperCase();
        const btn = U.$(`.q-opt[data-k="${k}"]:not(:disabled)`, root);
        btn && btn.click();
      }
    };
    window.addEventListener('keydown', keyHandler);
  }

  function destroyKey() { if (keyHandler) { window.removeEventListener('keydown', keyHandler); keyHandler = null; } }
  function destroy() { stopTimer(); destroyKey(); }

  window.QuizView = { render, destroy };
})();
