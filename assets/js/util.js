/* Tiện ích chung: DOM, định dạng văn bản + KaTeX, modal, toast */
(function () {
  const U = {};
  U.$ = (sel, root) => (root || document).querySelector(sel);
  U.$$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  U.esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  U.h = function (html) { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; };

  function katexHtml(tex, display) {
    try { return window.katex.renderToString(tex, { throwOnError: false, displayMode: display, strict: 'ignore', trust: false }); }
    catch (e) { return '<code>' + U.esc(tex) + '</code>'; }
  }
  U.tex = katexHtml;

  // Định dạng nội tuyến: **đậm**, *nghiêng*, ==bút dạ quang==, `code`
  function inline(s) {
    const codes = [];
    s = s.replace(/`([^`]+)`/g, (m, c) => { codes.push(c); return '\u0001' + (codes.length - 1) + '\u0001'; });
    s = s
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^\w*])\*([^\s*](?:[^*\n]*?[^\s*])?)\*(?=[^\w*]|$)/g, '$1<em>$2</em>')
      .replace(/==([^=]+)==/g, '<mark>$1</mark>');
    return s.replace(/\u0001(\d+)\u0001/g, (m, i) => '<code>' + codes[+i] + '</code>');
  }

  /* fmt: chuỗi dữ liệu -> HTML.
     Hỗ trợ $...$ / $$...$$ (KaTeX), dòng bắt đầu "- " (danh sách), "1. " (danh sách số), dòng trống = đoạn mới. */
  U.fmt = function (src, opts) {
    if (src == null) return '';
    opts = opts || {};
    const maths = [];
    let s = String(src).replace(/\$\$([\s\S]+?)\$\$/g, (m, t) => { maths.push([t, true]); return '\u0000' + (maths.length - 1) + '\u0000'; })
      .replace(/(^|[^\\])\$([^$\n]+?)\$/g, (m, pre, t) => { maths.push([t, false]); return pre + '\u0000' + (maths.length - 1) + '\u0000'; })
      .replace(/\\\$/g, '$');
    s = U.esc(s);
    const lines = s.split('\n');
    const out = []; let list = null, para = [];
    const flushPara = () => { if (para.length) { out.push(opts.inline ? para.join('<br>') : '<p>' + para.join('<br>') + '</p>'); para = []; } };
    const flushList = () => { if (list) { out.push('<' + list.tag + '>' + list.items.map(i => '<li>' + i + '</li>').join('') + '</' + list.tag + '>'); list = null; } };
    for (const raw of lines) {
      const line = raw.replace(/\s+$/, '');
      let m;
      if ((m = line.match(/^\s*[-•]\s+(.*)$/))) { flushPara(); if (!list || list.tag !== 'ul') { flushList(); list = { tag: 'ul', items: [] }; } list.items.push(inline(m[1])); }
      else if ((m = line.match(/^\s*(\d+)[.)]\s+(.*)$/)) && !opts.noOl) { flushPara(); if (!list || list.tag !== 'ol') { flushList(); list = { tag: 'ol', items: [] }; } list.items.push(inline(m[2])); }
      else if (!line.trim()) { flushList(); flushPara(); }
      else { flushList(); para.push(inline(line)); }
    }
    flushList(); flushPara();
    let html = out.join('');
    if (opts.inline && out.length === 1) html = html.replace(/^<p>|<\/p>$/g, '');
    return html.replace(/\u0000(\d+)\u0000/g, (m, i) => katexHtml(maths[+i][0], maths[+i][1]));
  };
  U.fmtInline = s => U.fmt(s, { inline: true, noOl: true });

  // Chuẩn hóa để so câu trùng
  U.norm = function (s) {
    return String(s || '').normalize('NFC').toLowerCase()
      .replace(/\$|\\[a-z]+|[{}_^]/g, ' ')
      .replace(/^\s*(câu|question)\s*\d+\s*[.:)]?/i, '')
      .replace(/[^0-9a-zà-ỹđ→]+/g, ' ').trim();
  };

  U.shuffle = function (a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  U.fmtTime = function (sec) { sec = Math.max(0, Math.round(sec)); const m = Math.floor(sec / 60), s = sec % 60; return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0'); };
  U.fmtDate = ts => new Date(ts).toLocaleString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });

  // Modal
  let lastFocus = null;
  U.openModal = function (title, bodyNode, opts) {
    const m = U.$('#modal');
    U.$('#modal-title').textContent = title;
    const body = U.$('#modal-body'); body.innerHTML = '';
    if (typeof bodyNode === 'string') body.innerHTML = bodyNode; else body.appendChild(bodyNode);
    m.querySelector('.modal-box').style.width = (opts && opts.width) || '';
    lastFocus = document.activeElement;
    m.hidden = false; document.body.style.overflow = 'hidden';
    setTimeout(() => { const b = m.querySelector('[data-close].icon-btn'); b && b.focus(); }, 30);
    return body;
  };
  U.closeModal = function () { const m = U.$('#modal'); if (m.hidden) return; m.hidden = true; document.body.style.overflow = ''; lastFocus && lastFocus.focus && lastFocus.focus(); };

  let toastTimer = null;
  U.toast = function (msg, ms) {
    const t = U.$('#toast'); t.textContent = msg; t.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), ms || 2200);
  };

  U.download = function (filename, text) {
    const blob = new Blob([text], { type: 'application/json;charset=utf-8' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = filename;
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  };

  U.chapterOf = id => (window.DB.chapters.find(c => c.id === id) || { short: '?', title: '' });
  U.examOf = id => (window.DB.exams.find(e => e.id === id) || { short: id, label: id });

  // Hình minh họa: sơ đồ ER, bảng, khung chữ
  U.figureHtml = function (fig, opts) {
    if (!fig) return '';
    if (Array.isArray(fig)) return fig.map(f => U.figureHtml(f, opts)).join('');
    opts = opts || {};
    let inner = '';
    if (fig.type === 'er') inner = window.ER.render(fig.spec, { maxWidth: opts.maxWidth, title: fig.caption });
    else if (fig.type === 'table') {
      inner = '<div class="table-wrap"><table class="book q-table">' + (fig.caption ? '<caption>' + U.fmtInline(fig.caption) + '</caption>' : '') +
        '<thead><tr>' + fig.head.map(c => '<th>' + U.fmtInline(c) + '</th>').join('') + '</tr></thead><tbody>' +
        fig.rows.map(r => '<tr>' + r.map(c => '<td>' + U.fmtInline(c) + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
    } else if (fig.type === 'text') inner = '<div class="rich">' + U.fmt(fig.text) + '</div>';
    const cap = fig.caption && fig.type !== 'table' ? '<figcaption>' + U.fmtInline(fig.caption) + '</figcaption>' : '';
    return '<figure class="figure' + (opts.bare ? ' bare' : '') + '">' + inner + cap + '</figure>';
  };

  window.U = U;
})();
