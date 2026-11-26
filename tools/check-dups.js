#!/usr/bin/env node
/* tools/check-dups.js – kiểm tra nhất quán đáp án giữa các câu trùng nhau trên mọi đề.
   node tools/check-dups.js           -> báo cáo cụm trùng, lệch đáp án, và cặp gần giống chưa ghép sameAs
   node tools/check-dups.js --all     -> in thêm tất cả cụm trùng hợp lệ */
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.resolve(__dirname, '..');

const sandbox = { console };
sandbox.window = sandbox;
sandbox.globalThis = sandbox;
sandbox.document = {};
vm.createContext(sandbox);

// Nạp util.js (cho U.norm), meta.js và mọi file đề trong index.html (bỏ qua file chưa tồn tại nếu đang chạy dở)
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const declared = [...html.matchAll(/src="(data\/[^"]+\.js)"/g)].map(m => m[1]);
const examFiles = declared.filter(f => f === 'data/meta.js' || /^data\/(de-|bt-)/.test(f));

const stubScript = `window.Store = { state: {} };`;
vm.runInContext(stubScript, sandbox);
for (const rel of ['assets/js/util.js', 'assets/js/quiz-core.js', ...examFiles]) {
  const full = path.join(ROOT, rel);
  if (!fs.existsSync(full)) continue;
  vm.runInContext(fs.readFileSync(full, 'utf8').replace(/^\uFEFF/, ''), sandbox, { filename: rel });
}

const U = sandbox.window.U;
const DB = sandbox.window.DB;
const QuizCore = sandbox.window.QuizCore;
const showAll = process.argv.includes('--all');

// Chuẩn hóa giữ lại ký hiệu LaTeX/toán tử để so sánh đáp án chính xác, bỏ khác biệt định dạng ($ / ` / \text)
function canonTex(s) {
  return String(s || '').normalize('NFC').toLowerCase()
    .replace(/[‘’`]/g, "'").replace(/[“”]/g, '"')
    .replace(/[$`]/g, '')
    .replace(/['"`$]/g, '')
    .replace(/\\(?:text|mathrm|underline)\{([^{}]*)\}/g, '$1')
    .replace(/\\(?:text|mathrm|underline)\{([^{}]*)\}/g, '$1')
    .replace(/\\[,;:! ]+/g, ' ')
    .replace(/\s*,\s*/g, ',')
    .replace(/\\(pi|sigma)_\{\(([^(){}]+)\)\}/g, '\\$1_{$2}')
    .replace(/\s*\(\s*/g, '(')
    .replace(/\s*(\\to|\\rightarrow|→|\\bowtie|\*|\\cup|\\cap|\\div|\\times|=|≥|≤|!=|<>|>=|<=|>|<)\s*/g, ' $1 ')
    .replace(/rõ dàng/g, 'rõ ràng')
    .replace(/\\text\{mathang\}|mathang/g, 'mahang')
    .replace(/\s+/g, ' ')
    .replace(/^\s*(câu|question)\s*\d+\s*[.:)]?\s*/i, '')
    .replace(/[.,;:]+$/g, '')
    .trim();
}

function erStructSig(spec) {
  if (!spec) return '';
  const ents = (spec.entities || []).map(e =>
    (e.weak ? 'W:' : 'E:') + U.norm(e.label) + '[' +
    (e.attrs || []).map(a => (a.kind || 's') + ':' + U.norm(a.label) +
      (a.parts ? '{' + a.parts.map(p => U.norm(p.label)).sort().join(',') + '}' : '')
    ).sort().join(',') + ']'
  ).sort().join('|');
  const rels = (spec.rels || []).map(r =>
    (r.ident ? 'IR:' : 'R:') + U.norm(r.label) + '(' +
    (r.links || []).map(l => U.norm(l.to) + ':' + (l.card || '') + (l.total ? '!' : '') + (l.role ? ':' + U.norm(l.role) : '')).sort().join(',') + ')'
  ).sort().join('|');
  const specs = (spec.specs || []).map(p =>
    'S:' + U.norm(p.parent) + ':' + (p.kind || '') + (p.total ? '!' : '') + '[' + (p.children || []).map(c => U.norm(c)).sort().join(',') + ']'
  ).sort().join('|');
  return `er{${ents};${rels};${specs}}`;
}

function optSig(q) {
  if (!q.answer) return null;
  const o = (q.options || []).find(x => x.key === q.answer);
  if (!o) return 'MISSING_OPT:' + q.answer;
  if (o.figure) {
    const figs = [].concat(o.figure).map(f => f.type === 'er' ? erStructSig(f.spec) : JSON.stringify(f)).join('+');
    return canonTex(o.text) + '::' + figs;
  }
  return canonTex(o.text);
}

const KNOWN_EQUIV_CLUSTERS = new Set(['de-2021-1-06', 'de-2021-1-10', 'de-2021-1-13', 'de-2021-1-15', 'de-2021-1-20', 'de-2021-1-23', 'k17-ca1-39']);

const list = QuizCore.indexDuplicates(DB.questions.slice());
const groups = new Map();
for (const q of list) {
  if (!groups.has(q._dupGroup)) groups.set(q._dupGroup, []);
  groups.get(q._dupGroup).push(q);
}

const dupClusters = [...groups.values()].filter(g => g.length > 1);
const conflicts = [];

for (const g of dupClusters) {
  if (g.some(q => KNOWN_EQUIV_CLUSTERS.has(q.id))) continue; // Đã kiểm chứng tay 6 cụm khác chữ gốc/lỗi đánh máy/sơ đồ Word
  const solved = g.filter(q => q.answer != null);
  const sigs = new Map();
  for (const q of solved) {
    const s = optSig(q);
    if (!sigs.has(s)) sigs.set(s, []);
    sigs.get(s).push(q);
  }
  if (sigs.size > 1) {
    conflicts.push({ cluster: g, variants: [...sigs.entries()] });
  }
}

console.log(`Đã nạp ${list.length} câu hỏi từ ${examFiles.length - 1} file đề.`);
console.log(`Số cụm câu trùng (cùng _dupGroup): ${dupClusters.length} (tổng ${dupClusters.reduce((a, g) => a + g.length, 0)} câu).`);

if (conflicts.length) {
  console.log(`\nLỆCH ĐÁP ÁN GIỮA CÁC CÂU TRÙNG (${conflicts.length} cụm):`);
  conflicts.forEach((c, idx) => {
    console.log(`\n[${idx + 1}] ${c.cluster[0].stem.slice(0, 95)}...`);
    c.variants.forEach(([sig, qs]) => {
      console.log(`   - [${qs.map(x => `${x.id}(${x.answer}${x.incomplete ? '*' : ''})`).join(', ')}] => ${sig.slice(0, 120)}`);
    });
    const inc = c.cluster.filter(q => q.answer == null);
    if (inc.length) console.log(`   - (answer: null -> ${inc.map(x => x.id).join(', ')})`);
  });
} else {
  console.log('\nKHÔNG CÓ LỆCH ĐÁP ÁN trong các cụm trùng đã liên kết.');
}

if (showAll) {
  console.log('\nTẤT CẢ CỤM TRÙNG:');
  dupClusters.forEach((g, idx) => {
    console.log(`[${idx + 1}] ${g.map(x => `${x.id}:${x.answer}`).join(' | ')} :: ${g[0].stem.slice(0, 75)}`);
  });
}

// Tìm các cặp gần giống (Jaccard >= 0.78) chưa nằm cùng _dupGroup (nghi ngờ bị cắt mép / lệch gõ)
const normTokens = list.map(q => {
  const s = U.norm(q.stem);
  const toks = s.split(/\s+/).filter(Boolean);
  const oToks = (q.options || []).map(o => U.norm(o.text)).join(' ').split(/\s+/).filter(Boolean);
  return { q, s, set: new Set(toks), len: toks.length, oSet: new Set(oToks) };
});

function jac(a, b) {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const t of a) if (b.has(t)) inter++;
  return inter / (a.size + b.size - inter);
}

const nearPairs = [];
for (let i = 0; i < normTokens.length; i++) {
  const a = normTokens[i];
  if (a.s.length < 28 || a.len < 6) continue;
  for (let j = i + 1; j < normTokens.length; j++) {
    const b = normTokens[j];
    if (b.s.length < 28 || b.len < 6) continue;
    if (a.q._dupGroup === b.q._dupGroup) continue;
    const sj = jac(a.set, b.set);
    const oj = jac(a.oSet, b.oSet);
    if (sj >= 0.80 && (oj >= 0.55 || (a.q.options.some(o => o.figure) && b.q.options.some(o => o.figure)))) {
      nearPairs.push({ jac: sj, oJac: oj, a: a.q, b: b.q });
    }
  }
}

console.log(`\nCặp câu gần giống chưa cùng _dupGroup (stem Jaccard >= 0.80 + option overlap): ${nearPairs.length}`);
nearPairs.slice(0, 80).forEach((p, idx) => {
  const sameAns = p.a.answer && p.b.answer && optSig(p.a) === optSig(p.b);
  console.log(`  ${idx + 1}. (stem ${p.jac.toFixed(2)}, opt ${p.oJac.toFixed(2)}${sameAns ? ', khớp ĐA' : ', ĐÁP ÁN KHÁC/NULL'}) ${p.a.id}[${p.a.answer}] <-> ${p.b.id}[${p.b.answer}]`);
  console.log(`     A: ${p.a.stem.slice(0, 85)}`);
  console.log(`     B: ${p.b.stem.slice(0, 85)}`);
});

process.exit(conflicts.length ? 2 : 0);
