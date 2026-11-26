/* Tab 4 – Tự luận bổ trợ (ER/EER, chuyển quan hệ, ĐSQH, Ch.4) */
(function () {
  let state = { kind: 'all', cur: null, shown: {} };
  const KINDS = {
    er: 'Vẽ ER & Chuyển quan hệ',
    eer: 'Vẽ EER & Chuyển quan hệ',
    dsqh: 'Đại số quan hệ',
    ch4: 'Thiết kế & Chuẩn hóa Ch.4'
  };

  function allEssays() {
    return (DB.essays || []).concat((Store.state.imported && Store.state.imported.essays) || []);
  }

  function renderRelations(rels) {
    if (!rels || !rels.length) return '';
    return `<div class="ex-label">Chuyển sang lược đồ quan hệ (PK gạch chân, FK in nghiêng kèm #)</div>
      <div class="rel-list">${rels.map(r => {
        const attrs = (r.attrs || []).map(a => {
          const obj = typeof a === 'string' ? { n: a } : a;
          const cls = [obj.pk ? 'pk' : '', obj.fk ? 'fk' : ''].filter(Boolean).join(' ');
          return `<span${cls ? ` class="${cls}"` : ''}${obj.fk ? ` title="Khoá ngoại tham chiếu ${U.esc(obj.fk)}"` : ''}>${U.esc(obj.n)}</span>`;
        }).join(', ');
        return `<div><strong>${U.esc(r.name)}</strong> ( ${attrs} )</div>`;
      }).join('')}</div>`;
  }

  function renderAnswer(e) {
    const a = e.answer || {};
    const parts = [];
    if (a.diagram) {
      parts.push(`<div class="ex-label">Sơ đồ ER / EER lời giải</div>` +
        U.figureHtml({ type: 'er', spec: a.diagram }, { maxWidth: 840 }));
    }
    if (a.steps && a.steps.length) {
      parts.push(`<div class="ex-label">Các bước lập luận</div><ol class="steps">${a.steps.map(s => `<li class="rich">${U.fmtInline(s)}</li>`).join('')}</ol>`);
    }
    if (a.relations && a.relations.length) {
      parts.push(renderRelations(a.relations));
    }
    if (a.parts && a.parts.length) {
      parts.push(a.parts.map(p =>
        `<div style="margin:.8rem 0;padding-top:.5rem;border-top:1px dashed var(--rule)">` +
        `<div class="rich" style="font-weight:500">${U.fmt(p.q)}</div>` +
        `<div class="rich" style="margin-top:.3rem">${U.fmt(p.a)}</div>` +
        `</div>`
      ).join(''));
    }
    return parts.join('');
  }

  function render(root) {
    const all = allEssays();
    const list = all.filter(e => {
      if (state.kind === 'all') return true;
      if (state.kind === 'er') return e.kind === 'er' || e.kind === 'eer';
      return e.kind === state.kind;
    });
    if (!state.cur || !list.some(e => e.id === state.cur)) state.cur = list[0] ? list[0].id : null;
    const item = list.find(e => e.id === state.cur);

    const total = all.length;
    const doneCount = all.filter(e => Store.essayDone(e.id)).length;
    const pct = total ? (doneCount / total) * 100 : 0;

    root.innerHTML = `
      <div class="page-head">
        <div class="eyebrow">Phần 4 · Bổ trợ thực hành (Đề thi chính thức thi trắc nghiệm)</div>
        <h1>Bài tập tự luận ER/EER, ĐSQH &amp; Chuẩn hóa</h1>
        <p>Tự nháp lời giải trước khi mở đáp án. Với bài vẽ ER/EER, đáp án có cả sơ đồ SVG chuẩn ký hiệu Chen và lược đồ quan hệ sau chuyển đổi.</p>
      </div>

      <div class="toolbar">
        <div class="seg">
          <button class="${state.kind === 'all' ? 'on' : ''}" data-k="all">Tất cả (${all.length})</button>
          <button class="${state.kind === 'er' ? 'on' : ''}" data-k="er">ER / EER (${all.filter(x => x.kind === 'er' || x.kind === 'eer').length})</button>
          <button class="${state.kind === 'dsqh' ? 'on' : ''}" data-k="dsqh">ĐSQH (${all.filter(x => x.kind === 'dsqh').length})</button>
          <button class="${state.kind === 'ch4' ? 'on' : ''}" data-k="ch4">Ch.4 (${all.filter(x => x.kind === 'ch4').length})</button>
        </div>
        <div class="grow"></div>
        <div class="progress">
          <div class="progress-label"><span>Đã luyện <b>${doneCount}/${total}</b> bài</span></div>
          <div class="bar"><span class="b-ok" style="width:${pct}%"></span></div>
        </div>
      </div>

      ${list.length ? `
        <div class="es-layout">
          <aside class="es-list panel" style="padding:.5rem">
            ${list.map(e => `
              <button class="es-item ${e.id === state.cur ? 'on' : ''}" data-id="${e.id}">
                <span class="k">${U.esc(KINDS[e.kind] || e.kind)} ${Store.essayDone(e.id) ? '· đã luyện' : ''}</span>
                <span>${U.esc(e.title)}</span>
              </button>`).join('')}
          </aside>

          <section class="panel">
            ${item ? (() => {
              const isOpen = !!state.shown[item.id];
              const isDone = Store.essayDone(item.id);
              return `
                <div style="display:flex;gap:.5rem;align-items:center;flex-wrap:wrap;margin-bottom:.7rem">
                  <span class="chip">${U.esc(KINDS[item.kind] || item.kind)}</span>
                  <span class="chip solid">${item.answerStatus === 'co-san' ? 'Có lời giải từ slide' : 'Đáp án tự giải'}</span>
                  <div class="grow"></div>
                  <button class="btn sm ${isDone ? 'primary' : ''}" id="es-done">${icon('check', 14)}<span>${isDone ? 'Đã luyện' : 'Đánh dấu đã luyện'}</span></button>
                </div>
                <h2>${U.esc(item.title)}</h2>
                <div class="rich">${U.fmt(item.prompt)}</div>
                ${U.figureHtml(item.figures)}
                ${item.source ? `<div class="src">${U.esc(item.source)}</div>` : ''}

                <div class="field" style="margin-top:1rem">
                  <label class="lbl" for="es-note">Ghi chú / Nháp của bạn (tự lưu vào trình duyệt)</label>
                  <textarea id="es-note" placeholder="Liệt kê các tập thực thể, liên kết, bản số, hoặc viết biểu thức ĐSQH nháp vào đây...">${U.esc(Store.note(item.id))}</textarea>
                </div>

                <button class="btn ${isOpen ? '' : 'primary'}" id="es-toggle">
                  ${icon(isOpen ? 'eye-off' : 'eye', 15)}<span>${isOpen ? 'Ẩn đáp án' : 'Xem đáp án'}</span>
                </button>

                ${isOpen ? `<div class="es-answer">${renderAnswer(item)}</div>` : ''}
              `;
            })() : ''}
          </section>
        </div>
      ` : '<div class="empty">Chưa có bài tự luận nào trong mục này.</div>'}`;

    U.$$('[data-k]', root).forEach(b => b.addEventListener('click', () => { state.kind = b.dataset.k; state.cur = null; render(root); }));
    U.$$('.es-item', root).forEach(b => b.addEventListener('click', () => { state.cur = b.dataset.id; render(root); }));

    if (item) {
      U.$('#es-note', root).addEventListener('input', e => Store.note(item.id, e.target.value));
      U.$('#es-toggle', root).addEventListener('click', () => { state.shown[item.id] = !state.shown[item.id]; render(root); });
      U.$('#es-done', root).addEventListener('click', () => { Store.essayDone(item.id, !Store.essayDone(item.id)); render(root); });
    }
  }

  function destroy() {}
  window.EssaysView = { render, destroy };
})();
