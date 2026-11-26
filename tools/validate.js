#!/usr/bin/env node
/* tools/validate.js – kiểm tra dữ liệu.
   node tools/validate.js                 -> kiểm tra mọi file data/*.js khai báo trong index.html + đối chiếu số câu
   node tools/validate.js data/de-x.js    -> chỉ kiểm tra file đó (cùng meta.js) */
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.resolve(__dirname, '..');
const katex = require(path.join(__dirname, 'npm', 'node_modules', 'katex'));
const Schema = require(path.join(ROOT, 'assets', 'js', 'schema.js'));
const ER = require(path.join(ROOT, 'assets', 'js', 'er-svg.js'));

const argFiles = process.argv.slice(2).filter(a => !a.startsWith('--'));
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const declared = [...html.matchAll(/src="(data\/[^"]+\.js)"/g)].map(m => m[1]);
const files = argFiles.length ? ['data/meta.js', ...argFiles.map(f => path.relative(ROOT, path.resolve(f)).replace(/\\/g, '/'))] : declared;

const sandbox = { console };
sandbox.window = sandbox; sandbox.globalThis = sandbox; vm.createContext(sandbox);
const errors = [], warns = [];
const perFile = {};
for (const f of files) {
  const p = path.join(ROOT, f);
  if (!fs.existsSync(p)) { (argFiles.length ? errors : warns).push(`Thiếu file ${f}`); continue; }
  const before = snapshot();
  try { vm.runInContext(fs.readFileSync(p, 'utf8').replace(/^\uFEFF/, ''), sandbox, { filename: f }); }
  catch (e) { errors.push(`${f}: LỖI CÚ PHÁP – ${e.message}`); continue; }
  if (f === 'data/meta.js') { /* DB là biến toàn cục */ }
  const after = snapshot();
  perFile[f] = Object.fromEntries(Object.keys(after).map(k => [k, after[k] - (before[k] || 0)]));
}
function snapshot() { const D = sandbox.window.DB; if (!D) return {}; return { questions: D.questions.length, flashcards: D.flashcards.length, summary: D.summary.length, essays: D.essays.length }; }
const DB = sandbox.window.DB;
if (!DB) { console.error('Không nạp được data/meta.js'); process.exit(1); }

// ---- KaTeX + nghi vấn thiếu dấu \ trong chuỗi JS
const SUSPECT = /(^|[^\\a-zA-Z])(sigma|pi|bowtie|times|div|cup|cap|rightarrow|to|rho|mathcal|text|emptyset|subseteq|subset|supseteq|in|notin|forall|exists|land|lor|neg|mathrm|frac|cdot|leq|geq|neq|Rightarrow|Leftrightarrow|setminus|langle|rangle)\b/;
function checkText(s, where) {
  if (typeof s !== 'string') return;
  const dollars = (s.replace(/\\\$/g, '').match(/\$/g) || []).length;
  if (dollars % 2) errors.push(`${where}: số dấu $ lẻ (công thức KaTeX chưa đóng)`);
  const re = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g; let m;
  while ((m = re.exec(s))) {
    const tex = m[1] || m[2];
    try { katex.renderToString(tex, { throwOnError: true, strict: 'ignore' }); }
    catch (e) { errors.push(`${where}: KaTeX lỗi "${tex.slice(0, 60)}" – ${e.message.slice(0, 90)}`); }
    if (SUSPECT.test(tex.replace(/\\[a-zA-Z]+/g, ' ')) && /\b(sigma|pi|bowtie|rightarrow|cup|cap|times)\b/.test(tex.replace(/\\[a-zA-Z]+/g, ' '))) warns.push(`${where}: có thể thiếu dấu \\ trong "${tex.slice(0, 50)}"`);
  }
  if (/\t|\u0008|\u000c/.test(s)) errors.push(`${where}: có ký tự điều khiển (\\t, \\b, \\f) – có thể do viết "\\times", "\\beta", "\\frac" với 1 dấu \\ trong chuỗi JS`);
  const plain = s.replace(/\$\$[\s\S]+?\$\$|\$[^$\n]+?\$/g, '');
  if (/<\/?(u|b|i|br|p|div|span|sub|sup|strong|em)\b[^>]*>/i.test(plain)) warns.push(`${where}: có thẻ HTML thô (sẽ bị escape thành chữ) – dùng **$...$**, \`\\underline{...}\`, \`**...**\``);
}
function walk(obj, where) {
  if (typeof obj === 'string') return checkText(obj, where);
  if (Array.isArray(obj)) return obj.forEach((x, i) => walk(x, `${where}[${i}]`));
  if (obj && typeof obj === 'object') for (const k of Object.keys(obj)) { if (k === 'spec' || k === 'diagram') continue; walk(obj[k], `${where}.${k}`); }
}
function renderFigures(obj, where) {
  if (!obj || typeof obj !== 'object') return;
  if (obj.type === 'er' && obj.spec) { try { ER.render(obj.spec); } catch (e) { errors.push(`${where}: vẽ sơ đồ lỗi – ${e.message}`); } }
  if (obj.diagram) { try { ER.render(obj.diagram); } catch (e) { errors.push(`${where}: vẽ sơ đồ lỗi – ${e.message}`); } }
  for (const k of Object.keys(obj)) if (typeof obj[k] === 'object') renderFigures(obj[k], where + '.' + k);
}

// ---- schema + id
const ids = new Map();
const dupId = (id, kind) => { if (!id) return; if (ids.has(id)) errors.push(`id trùng: ${id} (${ids.get(id)} và ${kind})`); else ids.set(id, kind); };
DB.questions.forEach((q, i) => { Schema.question(q, i).forEach(e => errors.push(e)); dupId(q.id, 'question'); walk(q, q.id); renderFigures(q, q.id);
  if (q.exam && !DB.exams.some(e => e.id === q.exam)) errors.push(`${q.id}: exam "${q.exam}" không có trong meta.js`);
  if (q.topic && !DB.matrix.some(m => m.code === q.topic)) warns.push(`${q.id}: topic "${q.topic}" không có trong ma trận`); });
DB.flashcards.forEach((c, i) => { Schema.flashcard(c, i).forEach(e => errors.push(e)); dupId(c.id, 'flashcard'); walk(c, c.id); });
DB.essays.forEach((e, i) => { Schema.essay(e, i).forEach(x => errors.push(x)); dupId(e.id, 'essay'); walk(e, e.id); renderFigures(e, e.id); });
DB.summary.forEach((p, i) => { Schema.summaryPart(p, i).forEach(x => errors.push(x)); dupId(p.id, 'summary'); walk(p, p.id); renderFigures(p, p.id);
  (p.sections || []).forEach(s => { dupId(p.id + '/' + s.id, 'section'); (s.blocks || []).forEach(b => { if (b.t === 'figure') { try { ER.render(b.spec); } catch (e) { errors.push(`${p.id}/${s.id}: vẽ hình lỗi – ${e.message}`); } } }); }); });

// ---- thống kê
console.log('\nFile                          câu  thẻ  tóm tắt  tự luận');
for (const [f, c] of Object.entries(perFile)) console.log(f.padEnd(30), String(c.questions || 0).padStart(4), String(c.flashcards || 0).padStart(4), String(c.summary || 0).padStart(8), String(c.essays || 0).padStart(8));
console.log('\nĐề                 có   cần  khớp  (tự giải / thiếu dữ liệu / ngoài slide)');
let totalHave = 0, totalNeed = 0;
for (const e of DB.exams) {
  const qs = DB.questions.filter(q => q.exam === e.id);
  if (argFiles.length && !qs.length) continue;
  totalHave += qs.length; totalNeed += e.total;
  const nos = qs.map(q => q.no); const dupNo = nos.filter((n, i) => nos.indexOf(n) !== i);
  if (dupNo.length) errors.push(`${e.id}: số câu bị lặp: ${[...new Set(dupNo)].join(', ')}`);
  console.log(e.id.padEnd(16), String(qs.length).padStart(4), String(e.total).padStart(5), qs.length === e.total ? '  OK ' : '  LỆCH',
    `  (${qs.length} / ${qs.filter(q => q.incomplete).length} / ${qs.filter(q => q.outside).length})`);
}
console.log(`Tổng câu trắc nghiệm: ${totalHave} / ${totalNeed}`);
console.log(`Flashcard: ${DB.flashcards.length} · Phần tóm tắt: ${DB.summary.length} · Tự luận: ${DB.essays.length}`);
if (warns.length) { console.log(`\nCẢNH BÁO (${warns.length}):`); warns.slice(0, 80).forEach(w => console.log('  - ' + w)); }
if (errors.length) { console.log(`\nLỖI (${errors.length}):`); errors.slice(0, 150).forEach(e => console.log('  - ' + e)); process.exit(1); }
console.log('\nKhông có lỗi.');
