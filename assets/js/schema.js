/* schema.js – kiểm tra định dạng dữ liệu (dùng chung cho nút Import và tools/validate.js) */
(function (root) {
  const KEYS = ['A', 'B', 'C', 'D', 'E'];
  const CH = ['ch1', 'ch2', 'ch3', 'ch4'];
  const isStr = v => typeof v === 'string';
  const nonEmpty = v => isStr(v) && v.trim().length > 0;

  function checkFigure(fig, where, errs) {
    if (fig == null) return;
    const list = Array.isArray(fig) ? fig : [fig];
    list.forEach((f, i) => {
      const w = where + (Array.isArray(fig) ? `[${i}]` : '');
      if (typeof f !== 'object') return errs.push(`${w}: figure phải là object`);
      if (f.type === 'er') {
        const s = f.spec;
        if (!s || typeof s !== 'object') return errs.push(`${w}: thiếu spec của sơ đồ ER`);
        const ids = new Set();
        ['entities', 'rels', 'specs'].forEach(k => (s[k] || []).forEach(n => {
          if (!n.id) errs.push(`${w}: một ${k} thiếu id`);
          if (ids.has(n.id)) errs.push(`${w}: id "${n.id}" bị trùng trong sơ đồ`);
          ids.add(n.id);
          if (typeof n.x !== 'number' || typeof n.y !== 'number') errs.push(`${w}: "${n.id}" thiếu toạ độ x, y`);
        }));
        (s.rels || []).forEach(r => (r.links || []).forEach(l => { if (!ids.has(l.to)) errs.push(`${w}: liên kết "${r.id}" nối tới "${l.to}" không tồn tại`); }));
        (s.specs || []).forEach(p => {
          if (!ids.has(p.parent)) errs.push(`${w}: chuyên biệt hóa "${p.id}" có parent "${p.parent}" không tồn tại`);
          (p.children || []).forEach(c => { if (!ids.has(c)) errs.push(`${w}: chuyên biệt hóa "${p.id}" có con "${c}" không tồn tại`); });
        });
      } else if (f.type === 'table') {
        if (!Array.isArray(f.head) || !Array.isArray(f.rows)) errs.push(`${w}: bảng cần head[] và rows[][]`);
      } else if (f.type === 'text') {
        if (!nonEmpty(f.text)) errs.push(`${w}: figure text rỗng`);
      } else errs.push(`${w}: type "${f.type}" không hỗ trợ (chỉ có er | table | text)`);
    });
  }

  function question(q, i) {
    const errs = [], w = `Câu #${i + 1}${q && q.id ? ` (id ${q.id})` : ''}`;
    if (!q || typeof q !== 'object') return [`${w}: không phải object`];
    if (!nonEmpty(q.id)) errs.push(`${w}: thiếu trường id`);
    if (!nonEmpty(q.exam)) errs.push(`${w}: thiếu trường exam (mã đề hoặc tên bộ câu hỏi)`);
    if (!CH.includes(q.chapter)) errs.push(`${w}: chapter phải là một trong ${CH.join(', ')}`);
    if (!nonEmpty(q.stem)) errs.push(`${w}: thiếu trường stem (đề bài)`);
    if (!Array.isArray(q.options) || q.options.length < 2) errs.push(`${w}: options phải là mảng có ít nhất 2 phương án`);
    else {
      const seen = new Set();
      q.options.forEach((o, j) => {
        if (!o || !KEYS.includes(o.key)) errs.push(`${w}: phương án thứ ${j + 1} có key không hợp lệ (A–E)`);
        else if (seen.has(o.key)) errs.push(`${w}: key "${o.key}" bị trùng`);
        else seen.add(o.key);
        if (!isStr(o.text) && !o.figure) errs.push(`${w}: phương án ${o && o.key} thiếu text`);
        checkFigure(o && o.figure, `${w} phương án ${o && o.key}`, errs);
      });
      if (q.answer == null) { if (!q.incomplete) errs.push(`${w}: thiếu answer (chỉ được để trống khi có incomplete)`); }
      else if (!q.options.some(o => o && o.key === q.answer)) errs.push(`${w}: answer "${q.answer}" không nằm trong các phương án`);
    }
    if (!nonEmpty(q.explanation)) errs.push(`${w}: thiếu trường explanation (mọi câu đều phải có giải thích)`);
    if (q.source != null && !Array.isArray(q.source) && !isStr(q.source)) errs.push(`${w}: source phải là chuỗi hoặc mảng chuỗi`);
    if (q.no != null && typeof q.no !== 'number') errs.push(`${w}: no phải là số`);
    checkFigure(q.figure, w, errs);
    return errs;
  }

  function flashcard(c, i) {
    const errs = [], w = `Thẻ #${i + 1}${c && c.id ? ` (id ${c.id})` : ''}`;
    if (!c || typeof c !== 'object') return [`${w}: không phải object`];
    if (!nonEmpty(c.id)) errs.push(`${w}: thiếu id`);
    if (!CH.includes(c.chapter)) errs.push(`${w}: chapter phải là một trong ${CH.join(', ')}`);
    if (!nonEmpty(c.front)) errs.push(`${w}: thiếu front (mặt trước)`);
    if (!nonEmpty(c.back)) errs.push(`${w}: thiếu back (mặt sau)`);
    return errs;
  }

  function essay(e, i) {
    const errs = [], w = `Bài #${i + 1}${e && e.id ? ` (id ${e.id})` : ''}`;
    if (!e || typeof e !== 'object') return [`${w}: không phải object`];
    if (!nonEmpty(e.id)) errs.push(`${w}: thiếu id`);
    if (!['er', 'eer', 'dsqh', 'ch4'].includes(e.kind)) errs.push(`${w}: kind phải là er | eer | dsqh | ch4`);
    if (!nonEmpty(e.title)) errs.push(`${w}: thiếu title`);
    if (!nonEmpty(e.prompt)) errs.push(`${w}: thiếu prompt (đề bài)`);
    const a = e.answer;
    if (!a || typeof a !== 'object') errs.push(`${w}: thiếu answer`);
    else {
      if (!Array.isArray(a.steps) && !Array.isArray(a.parts)) errs.push(`${w}: answer cần steps[] hoặc parts[]`);
      if (a.diagram) checkFigure({ type: 'er', spec: a.diagram }, `${w} sơ đồ đáp án`, errs);
      (a.relations || []).forEach((r, j) => { if (!nonEmpty(r.name) || !Array.isArray(r.attrs)) errs.push(`${w}: lược đồ quan hệ #${j + 1} cần name và attrs[]`); });
      (a.parts || []).forEach((p, j) => { if (!nonEmpty(p.q) || !nonEmpty(p.a)) errs.push(`${w}: ý #${j + 1} cần q và a`); });
    }
    return errs;
  }

  function summaryPart(p, i) {
    const errs = [], w = `Phần tóm tắt #${i + 1}${p && p.id ? ` (id ${p.id})` : ''}`;
    if (!p || !nonEmpty(p.id) || !CH.includes(p.chapter) || !nonEmpty(p.title)) errs.push(`${w}: cần id, chapter, title`);
    if (!Array.isArray(p.sections) || !p.sections.length) errs.push(`${w}: cần sections[]`);
    else p.sections.forEach((s, j) => {
      if (!nonEmpty(s.id) || !nonEmpty(s.title) || !Array.isArray(s.blocks)) errs.push(`${w} mục #${j + 1}: cần id, title, blocks[]`);
      (s.blocks || []).forEach((b, k) => {
        const T = ['p', 'def', 'list', 'table', 'steps', 'tip', 'example', 'figure', 'note'];
        if (!b || !T.includes(b.t)) errs.push(`${w} mục ${s.id} khối #${k + 1}: t phải là ${T.join('|')}`);
        if (b && b.t === 'figure') checkFigure({ type: 'er', spec: b.spec }, `${w} mục ${s.id} hình`, errs);
      });
    });
    return errs;
  }

  /* Kiểm tra file import: { questions?, flashcards?, essays? } */
  function bundle(obj) {
    const errs = [];
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return { ok: false, errors: ['File phải là một object JSON dạng { "questions": [...], "flashcards": [...], "essays": [...] }'] };
    const known = ['questions', 'flashcards', 'essays', 'type', 'version', 'name', 'exams'];
    Object.keys(obj).forEach(k => { if (!known.includes(k)) errs.push(`Trường "${k}" không được hỗ trợ (bỏ qua hoặc xoá đi)`); });
    if (!obj.questions && !obj.flashcards && !obj.essays) errs.push('Không thấy mảng questions, flashcards hoặc essays nào');
    const ids = new Set();
    const run = (arr, fn, label) => {
      if (arr == null) return;
      if (!Array.isArray(arr)) return errs.push(`"${label}" phải là mảng`);
      arr.forEach((x, i) => {
        errs.push(...fn(x, i));
        if (x && x.id) { if (ids.has(x.id)) errs.push(`id "${x.id}" bị trùng trong file`); ids.add(x.id); }
      });
    };
    run(obj.questions, question, 'questions');
    run(obj.flashcards, flashcard, 'flashcards');
    run(obj.essays, essay, 'essays');
    return { ok: errs.length === 0, errors: errs };
  }

  const api = { question, flashcard, essay, summaryPart, bundle, checkFigure };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.Schema = api;
})(typeof window !== 'undefined' ? window : globalThis);
