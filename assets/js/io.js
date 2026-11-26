/* Quản lý Nhập / Xuất JSON (nạp thêm câu hỏi mới + sao lưu tiến độ localStorage) */
(function () {
  const SAMPLE_JSON = {
    questions: [
      {
        id: 'custom-01',
        exam: 'custom-bo-sung',
        no: 1,
        chapter: 'ch4',
        stem: 'Cho lược đồ $R(A,B,C)$ và $F = \\{A \\to B, B \\to C\\}$. Bao đóng $A^+$ là:',
        options: [
          { key: 'A', text: '$A$' },
          { key: 'B', text: '$AB$' },
          { key: 'C', text: '$ABC$' },
          { key: 'D', text: '$AC$' }
        ],
        answer: 'C',
        explanation: 'Từ $A$, dùng $A \\to B$ được $AB$, tiếp tục dùng $B \\to C$ được $ABC$. Vậy $A^+ = ABC$.',
        source: ['Slide Ch.4 Phụ thuộc hàm – tr.16']
      }
    ]
  };

  function open() {
    const imp = Store.state.imported || { questions: [], flashcards: [], essays: [] };
    const impCount = (imp.questions || []).length + (imp.flashcards || []).length + (imp.essays || []).length;
    const doneQ = Object.keys(Store.state.q || {}).length;
    const doneFc = Object.keys(Store.state.fc || {}).length;
    const doneEx = (Store.state.exams || []).length;

    const el = U.h(`<div>
      <h3>1. Nạp thêm câu hỏi / flashcard / tự luận từ JSON</h3>
      <p class="small muted">Dùng để bổ sung đề mới mà không cần sửa code. Hỗ trợ <code>{ "questions": [...], "flashcards": [...], "essays": [...] }</code> (có kiểm tra định dạng và báo lỗi từng mục).</p>
      <div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:.6rem;align-items:center">
        <input type="file" id="io-file" accept=".json,application/json">
        <button class="btn sm" id="io-sample">${icon('download', 14)}<span>Tải JSON mẫu</span></button>
      </div>
      <textarea id="io-text" placeholder='Dán nội dung JSON vào đây hoặc chọn file .json ở trên...'></textarea>
      <div id="io-errors" class="small" style="color:var(--accent);margin:.5rem 0"></div>
      <div style="display:flex;gap:.5rem;flex-wrap:wrap;align-items:center;margin-top:.5rem">
        <button class="btn primary" id="io-import">${icon('upload', 15)}<span>Kiểm tra &amp; Nhập dữ liệu</span></button>
        ${impCount ? `<button class="btn sm ghost" id="io-clear-imp">${icon('trash-2', 14)}<span>Xoá ${impCount} mục đã nhập thêm</span></button>` : ''}
        <span class="small muted">Hiện có thêm: ${(imp.questions || []).length} câu hỏi, ${(imp.flashcards || []).length} thẻ, ${(imp.essays || []).length} bài tự luận.</span>
      </div>

      <hr>
      <h3>2. Sao lưu &amp; khôi phục tiến độ (<code>localStorage</code>)</h3>
      <p class="small muted">Đang lưu: ${doneFc} thẻ đã đánh dấu, ${doneQ} câu đã làm, ${doneEx} lượt thi thử.</p>
      <div style="display:flex;gap:.5rem;flex-wrap:wrap;align-items:center">
        <button class="btn" id="io-exp-prog">${icon('download', 15)}<span>Xuất tiến độ (.json)</span></button>
        <label class="btn" style="cursor:pointer">${icon('upload', 15)}<span>Khôi phục tiến độ</span><input type="file" id="io-imp-prog" accept=".json" hidden></label>
        <button class="btn" id="io-exp-bank">${icon('file-json', 15)}<span>Xuất toàn bộ ngân hàng JSON</span></button>
        <button class="btn ghost" id="io-reset">${icon('rotate-ccw', 15)}<span>Xoá toàn bộ tiến độ</span></button>
      </div>
    </div>`);

    const errBox = U.$('#io-errors', el);
    const textEl = U.$('#io-text', el);

    U.$('#io-file', el).addEventListener('change', e => {
      const f = e.target.files && e.target.files[0];
      if (!f) return;
      const r = new FileReader();
      r.onload = () => { textEl.value = r.result; errBox.textContent = ''; };
      r.readAsText(f, 'utf-8');
    });

    U.$('#io-sample', el).addEventListener('click', () => {
      U.download('mau-cau-hoi-csdl.json', JSON.stringify(SAMPLE_JSON, null, 2));
    });

    U.$('#io-import', el).addEventListener('click', () => {
      errBox.innerHTML = '';
      const raw = textEl.value.trim();
      if (!raw) { errBox.textContent = 'Chưa có nội dung JSON.'; return; }
      let obj;
      try { obj = JSON.parse(raw); }
      catch (e) { errBox.textContent = 'Lỗi cú pháp JSON: ' + e.message; return; }

      const res = Schema.bundle(obj);
      if (!res.ok) {
        errBox.innerHTML = `<strong>Phát hiện ${res.errors.length} lỗi định dạng:</strong><ul>` +
          res.errors.slice(0, 30).map(x => `<li>${U.esc(x)}</li>`).join('') +
          (res.errors.length > 30 ? `<li>… và ${res.errors.length - 30} lỗi nữa</li>` : '') + `</ul>`;
        return;
      }

      const existingIds = new Set([
        ...(DB.questions || []).map(x => x.id),
        ...(DB.flashcards || []).map(x => x.id),
        ...(DB.essays || []).map(x => x.id)
      ]);
      const badBuiltIn = ['questions', 'flashcards', 'essays'].flatMap(k => (obj[k] || []).filter(x => existingIds.has(x.id)));
      if (badBuiltIn.length) {
        errBox.textContent = `id "${badBuiltIn[0].id}" trùng với dữ liệu gốc trong hệ thống. Hãy đổi id khác.`;
        return;
      }
      const msgs = [];
      ['questions', 'flashcards', 'essays'].forEach(k => {
        if (obj[k] && obj[k].length) {
          const st = Store.addImported(k, obj[k]);
          msgs.push(`${k}: +${st.added} mới` + (st.replaced ? `, cập nhật ${st.replaced}` : ''));
        }
      });
      U.closeModal();
      App.refresh();
      U.toast('Đã nhập thành công (' + msgs.join(' · ') + ')', 3200);
    });

    const clrImp = U.$('#io-clear-imp', el);
    if (clrImp) clrImp.addEventListener('click', () => {
      if (!confirm('Xoá toàn bộ câu hỏi/thẻ/bài tự luận đã nhập thêm?')) return;
      Store.clearImported(); U.closeModal(); App.refresh(); U.toast('Đã xoá dữ liệu nhập thêm');
    });

    U.$('#io-exp-prog', el).addEventListener('click', () => {
      U.download('tiendo-csdl-' + new Date().toISOString().slice(0, 10) + '.json', JSON.stringify(Store.exportProgress(), null, 2));
    });

    U.$('#io-imp-prog', el).addEventListener('change', e => {
      const f = e.target.files && e.target.files[0];
      if (!f) return;
      const r = new FileReader();
      r.onload = () => {
        try {
          const obj = JSON.parse(r.result);
          if (!obj || obj.type !== 'csdl-ontap-progress' || !obj.data) throw new Error('Không phải file sao lưu tiến độ của ứng dụng này.');
          Store.importProgress(obj);
          if (obj.data.theme) App.applyTheme(obj.data.theme);
          U.closeModal(); App.refresh(); U.toast('Đã khôi phục tiến độ thành công');
        } catch (err) { U.toast('Lỗi khôi phục: ' + err.message, 3200); }
      };
      r.readAsText(f, 'utf-8');
    });

    U.$('#io-exp-bank', el).addEventListener('click', () => {
      const dump = {
        questions: (DB.questions || []).concat(imp.questions || []),
        flashcards: (DB.flashcards || []).concat(imp.flashcards || []),
        essays: (DB.essays || []).concat(imp.essays || [])
      };
      U.download('ngan-hang-csdl.json', JSON.stringify(dump, null, 2));
    });

    U.$('#io-reset', el).addEventListener('click', () => {
      if (!confirm('Xoá toàn bộ tiến độ flashcard, lịch sử câu hỏi, điểm thi thử và ghi chú tự luận?')) return;
      Store.resetAll(); U.closeModal(); App.refresh(); U.toast('Đã đặt lại toàn bộ tiến độ');
    });

    U.openModal('Nhập / Xuất dữ liệu JSON', el, { width: '760px' });
  }

  window.IOView = { open };
})();
