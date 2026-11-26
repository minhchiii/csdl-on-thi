/* er-svg.js – vẽ sơ đồ ER/EER theo ký hiệu Chen từ spec JSON.
   spec = {
     entities: [{ id, label, x, y, weak?, side?, attrs?: [Attr] }],
     rels:     [{ id, label, x, y, ident?, side?, attrs?: [Attr], links: [{ to, card?, total?, role?, bend? }] }],
     specs:    [{ id, x, y, kind: 'd'|'o'|'U'|null, parent, total?, children: [entityId] }],
     notes:    [{ text, x, y }]
   }
   Attr = { label, kind?: 'key'|'partial'|'multi'|'derived'|'composite'|'', parts?: [Attr], dx?, dy? }
   side = 'top' | 'bottom' | 'left' | 'right' (hướng xếp thuộc tính quanh thực thể/liên kết). */
(function (root) {
  const FONT = 12.5, FAMILY = "Inter, system-ui, sans-serif";
  let ctx = null;
  function tw(text, bold) {
    text = String(text || '');
    if (typeof document !== 'undefined') {
      if (!ctx) ctx = document.createElement('canvas').getContext('2d');
      ctx.font = (bold ? '600 ' : '') + FONT + 'px ' + FAMILY;
      return ctx.measureText(text).width;
    }
    let w = 0; for (const ch of text) w += /[A-ZĐ]/.test(ch) ? 8.4 : /[\s.,:;|il]/.test(ch) ? 3.8 : 6.8;
    return w * (bold ? 1.06 : 1);
  }
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const f = n => Math.round(n * 10) / 10;

  // điểm trên biên của hình theo hướng (dx, dy) tính từ tâm
  function clip(node, dx, dy) {
    if (!dx && !dy) return { x: node.x, y: node.y };
    let t;
    if (node.shape === 'rect') t = Math.min(node.w / 2 / Math.abs(dx || 1e-9), node.h / 2 / Math.abs(dy || 1e-9));
    else if (node.shape === 'diamond') t = 1 / (Math.abs(dx) / (node.w / 2) + Math.abs(dy) / (node.h / 2));
    else if (node.shape === 'ellipse') t = 1 / Math.sqrt(dx * dx / (node.rx * node.rx) + dy * dy / (node.ry * node.ry));
    else t = node.r / Math.hypot(dx, dy);
    return { x: node.x + dx * t, y: node.y + dy * t };
  }

  function render(spec, opts) {
    opts = opts || {};
    const nodes = {}, out = [], box = { x0: 1e9, y0: 1e9, x1: -1e9, y1: -1e9 };
    const grow = (x0, y0, x1, y1) => { box.x0 = Math.min(box.x0, x0); box.y0 = Math.min(box.y0, y0); box.x1 = Math.max(box.x1, x1); box.y1 = Math.max(box.y1, y1); };
    const shapes = [], lines = [], labels = [];

    // ---- thực thể, liên kết, vòng chuyên biệt hóa
    (spec.entities || []).forEach(e => {
      const w = Math.max(84, tw(e.label, true) + 28), h = 36;
      nodes[e.id] = { x: e.x, y: e.y, w, h, shape: 'rect', src: e, type: 'entity' };
    });
    (spec.rels || []).forEach(r => {
      const w = Math.max(88, tw(r.label) + 50), h = 50;
      nodes[r.id] = { x: r.x, y: r.y, w, h, shape: 'diamond', src: r, type: 'rel' };
    });
    (spec.specs || []).forEach(s => { nodes[s.id] = { x: s.x, y: s.y, r: 13, shape: 'circle', src: s, type: 'spec' }; });

    // ---- thuộc tính
    let attrSeq = 0;
    function attrNode(a, x, y) {
      const rx = Math.max(30, tw(a.label) / 2 + (a.kind === 'multi' ? 18 : 13)), ry = a.kind === 'multi' ? 17 : 15;
      const n = { x, y, rx, ry, shape: 'ellipse', src: a, type: 'attr', id: 'a' + (attrSeq++) };
      nodes[n.id] = n; return n;
    }
    function placeAttrs(owner, list, side, depth) {
      if (!list || !list.length) return;
      side = side || 'top';
      const auto = list.filter(a => a.dx == null || a.dy == null);
      const sizes = auto.map(a => Math.max(30, tw(a.label) / 2 + 13));
      const vertical = side === 'top' || side === 'bottom';
      const sign = side === 'top' || side === 'left' ? -1 : 1;
      let idx = 0;
      if (vertical) {
        const gap = 10, total = sizes.reduce((s, r) => s + 2 * r + gap, -gap);
        let cx = owner.x - total / 2;
        const base = (owner.h ? owner.h / 2 : owner.ry || 15) + (depth ? 34 : 46);
        auto.forEach((a, i) => {
          const r = sizes[i]; const x = cx + r; cx += 2 * r + gap;
          const t = total > 0 ? (x - owner.x) / Math.max(total / 2, 1) : 0;
          const y = owner.y + sign * (base - Math.min(1, t * t) * (depth ? 6 : 14));
          a._pos = { x, y };
        });
      } else {
        const gap = 7, total = auto.length * 30 + (auto.length - 1) * gap;
        let cy = owner.y - total / 2;
        const ow = owner.w ? owner.w / 2 : owner.rx || 30;
        auto.forEach((a, i) => { a._pos = { x: owner.x + sign * (ow + 22 + sizes[i]), y: cy + 15 }; cy += 30 + gap; });
      }
      list.forEach(a => {
        const p = (a.dx != null && a.dy != null) ? { x: owner.x + a.dx, y: owner.y + a.dy } : a._pos;
        const n = attrNode(a, p.x, p.y);
        lines.push({ a: owner, b: n, dbl: false });
        if (a.parts && a.parts.length) placeAttrs(n, a.parts, a.side || side, (depth || 0) + 1);
        idx++;
      });
    }
    (spec.entities || []).forEach(e => placeAttrs(nodes[e.id], e.attrs, e.side, 0));
    (spec.rels || []).forEach(r => placeAttrs(nodes[r.id], r.attrs, r.side, 0));

    // ---- đường nối liên kết - thực thể
    (spec.rels || []).forEach(r => {
      const counts = {};
      (r.links || []).forEach(l => { counts[l.to] = (counts[l.to] || 0) + 1; });
      const seen = {};
      (r.links || []).forEach(l => {
        const b = nodes[l.to]; if (!b) return;
        let bend = l.bend;
        if (bend == null && counts[l.to] > 1) { seen[l.to] = (seen[l.to] || 0) + 1; bend = seen[l.to] === 1 ? -34 : 34; }
        lines.push({ a: nodes[r.id], b, dbl: !!l.total, card: l.card, role: l.role, bend: bend || 0, cardAt: 'b' });
      });
    });
    // ---- chuyên biệt hóa
    (spec.specs || []).forEach(s => {
      const c = nodes[s.id], p = nodes[s.parent]; if (!c || !p) return;
      lines.push({ a: p, b: c, dbl: !!s.total });
      (s.children || []).forEach(ch => { const k = nodes[ch]; if (k) lines.push({ a: c, b: k, dbl: false, subset: s.subset !== false }); });
    });

    // ---- vẽ đường
    lines.forEach(L => {
      const A = L.a, B = L.b;
      const dx = B.x - A.x, dy = B.y - A.y, len = Math.hypot(dx, dy) || 1;
      const px = -dy / len, py = dx / len;
      let p1, p2, path;
      if (L.bend) {
        const mx = (A.x + B.x) / 2 + px * L.bend, my = (A.y + B.y) / 2 + py * L.bend;
        p1 = clip(A, mx - A.x, my - A.y); p2 = clip(B, mx - B.x, my - B.y);
        const mk = o => `M${f(p1.x + px * o)},${f(p1.y + py * o)} Q${f(mx + px * o)},${f(my + py * o)} ${f(p2.x + px * o)},${f(p2.y + py * o)}`;
        path = L.dbl ? mk(2.2) + ' ' + mk(-2.2) : mk(0);
        L.mid = { x: (p1.x + 2 * mx + p2.x) / 4, y: (p1.y + 2 * my + p2.y) / 4 };
        L.ends = { p1, p2, ux: (mx - B.x), uy: (my - B.y) };
      } else {
        p1 = clip(A, dx, dy); p2 = clip(B, -dx, -dy);
        const mk = o => `M${f(p1.x + px * o)},${f(p1.y + py * o)} L${f(p2.x + px * o)},${f(p2.y + py * o)}`;
        path = L.dbl ? mk(2.2) + ' ' + mk(-2.2) : mk(0);
        L.mid = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
        L.ends = { p1, p2, ux: -dx, uy: -dy };
      }
      out.push(`<path class="er-line" d="${path}"/>`);
      grow(Math.min(p1.x, p2.x), Math.min(p1.y, p2.y), Math.max(p1.x, p2.x), Math.max(p1.y, p2.y));
      if (L.card != null && L.card !== '') {
        const ul = Math.hypot(L.ends.ux, L.ends.uy) || 1, ux = L.ends.ux / ul, uy = L.ends.uy / ul;
        const cx = L.ends.p2.x + ux * 15 + (-uy) * 9, cy = L.ends.p2.y + uy * 15 + ux * 9;
        labels.push({ x: cx, y: cy, text: L.card, cls: 'er-card' });
      }
      if (L.role) {
        const sg = L.bend ? Math.sign(L.bend) : 1, off = (tw(L.role) / 2 + 6) * Math.abs(px) + 10;
        labels.push({ x: L.mid.x + px * sg * off, y: L.mid.y + py * sg * 12, text: L.role, cls: 'er-role' });
      }
      if (L.subset) {
        // ký hiệu ⊂ ở giữa đường, phía mở hướng về vòng tròn (lớp cha)
        const ux = (A.x - B.x) / len, uy = (A.y - B.y) / len, m = L.mid, r = 7;
        const a1 = { x: m.x + (-uy) * r + ux * 3, y: m.y + ux * r + uy * 3 }, a2 = { x: m.x - (-uy) * r + ux * 3, y: m.y - ux * r + uy * 3 };
        const c = { x: m.x - ux * r * 1.7, y: m.y - uy * r * 1.7 };
        out.push(`<path class="er-subset" d="M${f(a1.x)},${f(a1.y)} Q${f(c.x)},${f(c.y)} ${f(a2.x)},${f(a2.y)}"/>`);
      }
    });

    // ---- vẽ hình
    Object.values(nodes).forEach(n => {
      const s = n.src;
      if (n.type === 'entity') {
        out.push(`<rect class="er-shape" x="${f(n.x - n.w / 2)}" y="${f(n.y - n.h / 2)}" width="${f(n.w)}" height="${n.h}"/>`);
        if (s.weak) out.push(`<rect class="er-shape" x="${f(n.x - n.w / 2 + 4)}" y="${f(n.y - n.h / 2 + 4)}" width="${f(n.w - 8)}" height="${n.h - 8}"/>`);
        out.push(`<text class="er-text er-ent" x="${f(n.x)}" y="${f(n.y)}">${esc(s.label)}</text>`);
        grow(n.x - n.w / 2, n.y - n.h / 2, n.x + n.w / 2, n.y + n.h / 2);
      } else if (n.type === 'rel') {
        const d = (w, h) => `M${f(n.x)},${f(n.y - h / 2)} L${f(n.x + w / 2)},${f(n.y)} L${f(n.x)},${f(n.y + h / 2)} L${f(n.x - w / 2)},${f(n.y)} Z`;
        out.push(`<path class="er-shape" d="${d(n.w, n.h)}"/>`);
        if (s.ident) out.push(`<path class="er-shape" d="${d(n.w - 14, n.h - 9)}"/>`);
        out.push(`<text class="er-text" x="${f(n.x)}" y="${f(n.y)}">${esc(s.label)}</text>`);
        grow(n.x - n.w / 2, n.y - n.h / 2, n.x + n.w / 2, n.y + n.h / 2);
      } else if (n.type === 'spec') {
        out.push(`<circle class="er-shape" cx="${f(n.x)}" cy="${f(n.y)}" r="${n.r}"/>`);
        const k = s.kind === 'U' ? '∪' : (s.kind || '');
        if (k) out.push(`<text class="er-text er-spec" x="${f(n.x)}" y="${f(n.y)}">${esc(k)}</text>`);
        grow(n.x - n.r, n.y - n.r, n.x + n.r, n.y + n.r);
      } else if (n.type === 'attr') {
        const k = s.kind || '';
        out.push(`<ellipse class="er-shape${k === 'derived' ? ' er-dash' : ''}" cx="${f(n.x)}" cy="${f(n.y)}" rx="${f(n.rx)}" ry="${n.ry}"/>`);
        if (k === 'multi') out.push(`<ellipse class="er-shape" cx="${f(n.x)}" cy="${f(n.y)}" rx="${f(n.rx - 4)}" ry="${n.ry - 4}"/>`);
        out.push(`<text class="er-text" x="${f(n.x)}" y="${f(n.y)}">${esc(s.label)}</text>`);
        if (k === 'key' || k === 'partial') {
          const w = tw(s.label) / 2;
          out.push(`<path class="er-line${k === 'partial' ? ' er-dash' : ''}" d="M${f(n.x - w)},${f(n.y + 8)} L${f(n.x + w)},${f(n.y + 8)}"/>`);
        }
        grow(n.x - n.rx, n.y - n.ry, n.x + n.rx, n.y + n.ry);
      }
    });
    labels.forEach(l => {
      out.push(`<text class="er-text ${l.cls}" x="${f(l.x)}" y="${f(l.y)}">${esc(l.text)}</text>`);
      const w = tw(l.text) / 2 + 2; grow(l.x - w, l.y - 9, l.x + w, l.y + 9);
    });
    (spec.notes || []).forEach(nt => {
      out.push(`<text class="er-text er-note" x="${f(nt.x)}" y="${f(nt.y)}">${esc(nt.text)}</text>`);
      const w = tw(nt.text) / 2; grow(nt.x - w, nt.y - 9, nt.x + w, nt.y + 9);
    });

    if (box.x0 > box.x1) return '<svg class="er" viewBox="0 0 10 10"></svg>';
    const pad = opts.pad == null ? 10 : opts.pad;
    const vx = box.x0 - pad, vy = box.y0 - pad, vw = box.x1 - box.x0 + 2 * pad, vh = box.y1 - box.y0 + 2 * pad;
    const maxW = opts.maxWidth || Math.round(vw * (opts.scale || 1));
    const title = opts.title ? `<title>${esc(opts.title)}</title>` : '';
    return `<svg class="er" xmlns="http://www.w3.org/2000/svg" viewBox="${f(vx)} ${f(vy)} ${f(vw)} ${f(vh)}" style="max-width:${maxW}px" role="img"${opts.title ? ` aria-label="${esc(opts.title)}"` : ''}>${title}${out.join('')}</svg>`;
  }

  const api = { render, measure: tw };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.ER = api;
})(typeof window !== 'undefined' ? window : globalThis);
