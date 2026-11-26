/* Tab 1 – Tóm tắt & Công thức theo chương */
(function () {
  let state = { chapter: 'all', q: '', showMatrix: false };
  let scrollHandler = null;

  function renderBlock(b) {
    switch (b.t) {
      case 'p':
        return `<div class="rich">${U.fmt(b.text)}</div>`;
      case 'def':
        return `<dl class="def"><dt>${U.fmtInline(b.term)}</dt><dd class="rich">${U.fmt(b.text)}</dd></dl>`;
      case 'list':
        return `<div class="rich"><ul>${(b.items || []).map(x => `<li>${U.fmtInline(x)}</li>`).join('')}</ul></div>`;
      case 'table':
        return `<div class="table-wrap"><table class="book">` +
          (b.caption ? `<caption>${U.fmtInline(b.caption)}</caption>` : '') +
          `<thead><tr>${(b.head || []).map(h => `<th>${U.fmtInline(h)}</th>`).join('')}</tr></thead>` +
          `<tbody>${(b.rows || []).map(r => `<tr>${r.map(c => `<td>${U.fmtInline(c)}</td>`).join('')}</tr>`).join('')}</tbody>` +
          `</table></div>`;
      case 'steps':
        return (b.title ? `<div class="steps-title">${U.fmtInline(b.title)}</div>` : '') +
          `<ol class="steps">${(b.items || []).map(x => `<li class="rich">${U.fmtInline(x)}</li>`).join('')}</ol>`;
      case 'tip':
        return `<aside class="tip"><div class="tip-title">${icon('lightbulb', 14)}<span>${U.esc(b.title || 'Mẹo làm bài')}</span></div><div class="rich">${U.fmt(b.text)}</div></aside>`;
      case 'example':
        return `<details class="example"><summary>${icon('chevron-right', 15)}<span>${U.fmtInline(b.title || 'Ví dụ minh họa')}</span></summary>` +
          `<div class="ex-body"><div class="ex-label">Đề bài</div><div class="rich">${U.fmt(b.prompt)}</div>` +
          `<div class="ex-label">Lời giải</div><div class="rich">${U.fmt(b.solution)}</div></div></details>`;
      case 'figure':
        return U.figureHtml({ type: 'er', spec: b.spec, caption: b.caption });
      case 'note':
        return `<div class="note-outside rich">${U.fmt(b.text)}</div>`;
      default:
        return '';
    }
  }

  function renderMatrix() {
    const rows = (window.DB.matrix || []).map(m =>
      `<tr><td class="mono">${U.esc(m.code)}</td><td>${U.chapterOf(m.chapter).short}</td>` +
      `<td><span class="chip solid">${U.esc(m.level)}</span></td>` +
      `<td class="mono">${m.n}</td><td>${U.esc(m.title)}</td></tr>`
    ).join('');
    const total = (window.DB.matrix || []).reduce((s, m) => s + (m.n || 0), 0);
    return `<section class="part"><h2><span>Ma trận đề thi tham khảo (2023)</span></h2>` +
      `<p class="small muted">Trích Ngân hàng câu hỏi Lý thuyết CSDL – Học viện KTMM (cột P1: <strong>${total} câu / 60 phút</strong>, không sử dụng tài liệu). Mức độ: NB = Nhận biết, TH = Thông hiểu, VD = Vận dụng, VDC = Vận dụng cao.</p>` +
      `<div class="table-wrap"><table class="book"><thead><tr><th>Mã</th><th>Chương</th><th>Mức</th><th>SL</th><th>Nội dung</th></tr></thead>` +
      `<tbody>${rows}</tbody></table></div></section>`;
  }

  function matchSection(sec, query) {
    if (!query) return true;
    const nq = U.norm(query);
    if (!nq) return true;
    if (U.norm(sec.title).includes(nq)) return true;
    return (sec.blocks || []).some(b =>
      U.norm([b.term, b.title, b.text, b.prompt, b.solution, b.caption,
        ...(b.items || []), ...(b.head || []), ...((b.rows || []).flat())].filter(Boolean).join(' ')).includes(nq)
    );
  }

  function render(root) {
    const chOrder = id => (DB.chapters.find(c => c.id === id) || { no: 99 }).no;
    const parts = (DB.summary || []).slice().sort((a, b) => chOrder(a.chapter) - chOrder(b.chapter) || (a.order || 0) - (b.order || 0));

    const filteredParts = parts
      .filter(p => state.chapter === 'all' || p.chapter === state.chapter)
      .map(p => ({ ...p, sections: (p.sections || []).filter(s => matchSection(s, state.q)) }))
      .filter(p => p.sections.length > 0);

    const SHORT_CH = { ch1: 'Ch.1 Tổng quan', ch2: 'Ch.2 ER / EER', ch3: 'Ch.3 Quan hệ & ĐSQH', ch4: 'Ch.4 Thiết kế CSDL' };
    const chapBtns = [{ id: 'all', label: 'Tất cả' }]
      .concat(DB.chapters.map(c => ({ id: c.id, label: SHORT_CH[c.id] || c.short })));

    const tocHtml = filteredParts.map(p =>
      `<div class="toc-ch" data-jump="part-${p.id}"><span class="chno">${U.chapterOf(p.chapter).short}</span><span>${U.esc(p.title)}</span></div>` +
      p.sections.map(s => `<a href="#sec-${s.id}" data-sec="${s.id}">${U.esc(s.title)}</a>`).join('')
    ).join('');

    const contentHtml = (state.showMatrix ? renderMatrix() : '') + (
      filteredParts.length ? filteredParts.map(p =>
        `<section class="part" id="part-${p.id}">` +
        `<h2><span class="chno">${U.chapterOf(p.chapter).short}</span><span>${U.esc(p.title)}</span></h2>` +
        p.sections.map(s =>
          `<article class="sec" id="sec-${s.id}">` +
          `<h3>${U.fmtInline(s.title)}${s.outside ? ' <span class="chip">Ngoài slide</span>' : ''}</h3>` +
          `<div class="sec-body">${(s.blocks || []).map(renderBlock).join('')}</div>` +
          (s.source ? `<div class="src">${U.esc(s.source)}</div>` : '') +
          `</article>`
        ).join('') +
        `</section>`
      ).join('') : `<div class="empty">Không tìm thấy mục nào khớp “${U.esc(state.q)}”.</div>`
    );

    root.innerHTML = `
      <div class="page-head">
        <div class="eyebrow">Phần 1 · Giáo trình &amp; Sổ tay công thức</div>
        <h1>Tóm tắt kiến thức trọng tâm</h1>
        <p>Hệ thống theo 4 chương từ slide bài giảng, kèm mẹo làm bài ở lề phải và phần kiến thức bổ sung cho các câu ngoài slide.</p>
      </div>
      <div class="toolbar">
        <div class="chap-tabs" style="margin:0">
          ${chapBtns.map(b => `<button class="${state.chapter === b.id ? 'on' : ''}" data-ch="${b.id}">${U.esc(b.label)}</button>`).join('')}
        </div>
        <div class="grow"></div>
        <div style="display:flex;gap:.5rem;align-items:center;flex-wrap:wrap">
          <input type="search" id="sum-search" placeholder="Tìm khái niệm, công thức..." value="${U.esc(state.q)}">
          <button class="btn sm ${state.showMatrix ? 'primary' : ''}" id="btn-matrix">${icon('table-2', 14)}<span>Ma trận đề 2023</span></button>
        </div>
      </div>
      <div class="sum-layout">
        <aside class="toc" aria-label="Mục lục">${tocHtml || '<span class="muted small">Không có mục lục</span>'}</aside>
        <div class="sum-content">${contentHtml}</div>
      </div>`;

    U.$$('.chap-tabs button', root).forEach(btn => btn.addEventListener('click', () => { state.chapter = btn.dataset.ch; render(root); }));
    const searchEl = U.$('#sum-search', root);
    let t = null;
    searchEl.addEventListener('input', () => {
      clearTimeout(t);
      t = setTimeout(() => {
        const pos = searchEl.selectionStart;
        state.q = searchEl.value;
        render(root);
        const s2 = U.$('#sum-search', root);
        if (s2) { s2.focus(); try { s2.setSelectionRange(pos, pos); } catch (e) {} }
      }, 160);
    });
    U.$('#btn-matrix', root).addEventListener('click', () => { state.showMatrix = !state.showMatrix; render(root); });

    // Nhảy mục lục mượt mà không đổi hash router
    U.$$('.toc a', root).forEach(a => a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.getElementById('sec-' + a.dataset.sec);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }));
    U.$$('.toc .toc-ch', root).forEach(d => d.addEventListener('click', () => {
      const target = document.getElementById(d.dataset.jump);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }));

    // Đánh dấu mục đang đọc trên thanh mục lục
    destroy();
    const secs = U.$$('.sec', root);
    const links = new Map(U.$$('.toc a', root).map(a => [a.dataset.sec, a]));
    scrollHandler = () => {
      let cur = null;
      for (const el of secs) {
        if (el.getBoundingClientRect().top <= 130) cur = el.id.slice(4);
        else break;
      }
      links.forEach((a, id) => a.classList.toggle('on', id === cur));
    };
    window.addEventListener('scroll', scrollHandler, { passive: true });
    scrollHandler();
  }

  function destroy() {
    if (scrollHandler) { window.removeEventListener('scroll', scrollHandler); scrollHandler = null; }
  }

  window.SummaryView = { render, destroy };
})();
