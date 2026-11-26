#!/usr/bin/env node
/* tools/fd.js – máy tính phụ thuộc hàm để KIỂM TRA lời giải (không dùng trong web).
   Thuộc tính: chuỗi chữ cái "ABCDE" hoặc danh sách "MaSV,HoTen,MaMH".
   PTH: "AB->C; C->D" hoặc "MaSV,MaMH->Diem; MaSV->HoTen" (dùng -> hoặc →).
   Ví dụ:
     node tools/fd.js ABCDE "AB->C;C->D;D->E" keys
     node tools/fd.js ABCDE "AB->C;C->D" closure AC
     node tools/fd.js ABCDE "AB->C;C->D" mincover | nf | superkeys
     node tools/fd.js ABCDE "AB->C;C->D" member "A->D"
     node tools/fd.js ABCDE "AB->C;C->D" equiv "AB->CD"
     node tools/fd.js ABCDE "AB->C;C->D" lossless "ABC|CDE"
     node tools/fd.js ABCDE "AB->C;C->D" preserve "ABC|CDE"
     node tools/fd.js ABCDE "AB->C;C->D" bcnf | 3nf
     node tools/fd.js ABCDE "AB->C;C->D" all */
const [, , U0, F0, cmd = 'all', arg] = process.argv;
if (!U0 || F0 == null) { console.log(require('fs').readFileSync(__filename, 'utf8').split('\n').slice(1, 16).join('\n')); process.exit(0); }
const named = /[,\s]/.test(U0) || /[a-z]/.test(U0);
const parseSet = s => { s = s.trim(); if (!s) return []; return named ? s.split(/[,\s]+/).filter(Boolean) : s.replace(/[{}\s,]/g, '').split(''); };
const U = parseSet(U0);
const parseFDs = s => s.split(/[;\n]+/).map(x => x.trim()).filter(Boolean).map(x => { const [l, r] = x.split(/->|→/); return { L: parseSet(l), R: parseSet(r) }; });
const F = parseFDs(F0);
const S = a => [...new Set(a)].sort((x, y) => U.indexOf(x) - U.indexOf(y));
const show = a => named ? '{' + S(a).join(', ') + '}' : S(a).join('') || '∅';
const showF = fs => fs.map(f => show(f.L) + '→' + show(f.R)).join(', ');
const sub = (a, b) => a.every(x => b.includes(x));
function closure(X, fds = F, trace) {
  let C = S(X), changed = true, step = 0;
  if (trace) console.log(`  X0 = ${show(C)}`);
  while (changed) { changed = false; for (const f of fds) if (sub(f.L, C) && !sub(f.R, C)) { C = S([...C, ...f.R]); changed = true; if (trace) console.log(`  dùng ${show(f.L)}→${show(f.R)}: X${++step} = ${show(C)}`); } }
  return C;
}
function subsets(arr) { const out = []; const n = arr.length; for (let m = 1; m < (1 << n); m++) out.push(arr.filter((_, i) => m & (1 << i))); return out; }
function keys(fds = F, Uset = U) {
  const left = new Set(fds.flatMap(f => f.L)), right = new Set(fds.flatMap(f => f.R));
  const TN = Uset.filter(a => !right.has(a)); const TG = Uset.filter(a => left.has(a) && right.has(a));
  if (sub(Uset, closure(TN, fds))) return { TN, TG, keys: [S(TN)] };
  const sup = subsets(TG).map(x => S([...TN, ...x])).filter(K => sub(Uset, closure(K, fds)));
  const ks = sup.filter(K => !sup.some(K2 => K2.length < K.length && sub(K2, K)));
  return { TN, TG, keys: ks.sort((a, b) => a.length - b.length) };
}
function minCover(fds = F) {
  let G = fds.flatMap(f => f.R.map(r => ({ L: S(f.L), R: [r] }))).filter(f => !f.L.includes(f.R[0]));
  G = G.map(f => { let L = f.L.slice(); for (const a of f.L) { const L2 = L.filter(x => x !== a); if (L2.length && closure(L2, G).includes(f.R[0])) L = L2; } return { L, R: f.R }; });
  const seen = new Set(); G = G.filter(f => { const k = show(f.L) + '>' + f.R[0]; if (seen.has(k)) return false; seen.add(k); return true; });
  for (let i = 0; i < G.length; i++) { const rest = G.filter((_, j) => j !== i); if (closure(G[i].L, rest).includes(G[i].R[0])) { G.splice(i, 1); i--; } }
  return G;
}
function nf(fds = F, Uset = U) {
  const { keys: K } = keys(fds, Uset); const prime = new Set(K.flat());
  const single = fds.flatMap(f => f.R.filter(r => !f.L.includes(r)).map(r => ({ L: f.L, R: [r] })));
  const isSuper = X => sub(Uset, closure(X, fds));
  const bcnfV = single.filter(f => !isSuper(f.L));
  const nf3V = bcnfV.filter(f => !prime.has(f.R[0]));
  const nf2V = [];
  for (const k of K) for (const s of subsets(k).filter(x => x.length < k.length)) { const c = closure(s, fds).filter(a => !prime.has(a) && !s.includes(a)); if (c.length) nf2V.push(show(s) + '→' + show(c)); }
  const level = !nf2V.length ? (!nf3V.length ? (!bcnfV.length ? 'BCNF' : '3NF') : '2NF') : '1NF';
  return { level, keys: K, prime: S([...prime]), nf2V: [...new Set(nf2V)], nf3V: showF(nf3V), bcnfV: showF(bcnfV) };
}
function project(fds, R) { const out = []; for (const X of subsets(R)) { const c = closure(X, fds).filter(a => R.includes(a) && !X.includes(a)); if (c.length) out.push({ L: X, R: c }); } return out; }
function lossless(parts) {
  const T = parts.map((R, i) => U.map((a, j) => R.includes(a) ? 'a' + (j + 1) : 'b' + (i + 1) + (j + 1)));
  let changed = true;
  while (changed) { changed = false;
    for (const f of F) { const li = f.L.map(a => U.indexOf(a)), ri = f.R.map(a => U.indexOf(a));
      for (let i = 0; i < T.length; i++) for (let k = i + 1; k < T.length; k++) if (li.every(j => T[i][j] === T[k][j])) for (const j of ri) if (T[i][j] !== T[k][j]) {
        const v = T[i][j].startsWith('a') ? T[i][j] : T[k][j].startsWith('a') ? T[k][j] : T[i][j]; const old = [T[i][j], T[k][j]];
        for (const row of T) if (old.includes(row[j])) row[j] = v; changed = true; } } }
  return { table: T, ok: T.some(r => r.every(v => v.startsWith('a'))) };
}
function bcnf(R = U, fds = F) {
  const P = project(fds, R); const v = P.find(f => !sub(R, closure(f.L, P)));
  if (!v) return [R];
  const X = v.L, R1 = S([...X, ...closure(X, P).filter(a => R.includes(a))]), R2 = S([...X, ...R.filter(a => !R1.includes(a))]);
  return [...bcnf(R1, fds), ...bcnf(R2, fds)];
}
function syn3nf() {
  const G = minCover(); const groups = {};
  for (const f of G) { const k = show(f.L); (groups[k] = groups[k] || { L: f.L, R: [] }).R.push(...f.R); }
  let rs = Object.values(groups).map(g => S([...g.L, ...g.R]));
  rs = rs.filter((r, i) => !rs.some((r2, j) => j !== i && sub(r, r2) && (r2.length > r.length || j < i)));
  const K = keys().keys[0]; if (!rs.some(r => sub(K, r))) rs.push(K);
  return rs;
}
const parseParts = s => s.split('|').map(parseSet);
const out = (t, v) => console.log(t.padEnd(14), v);
switch (cmd) {
  case 'closure': console.log(`Bao đóng ${show(parseSet(arg))}+ :`); out('Kết quả', show(closure(parseSet(arg), F, true))); break;
  case 'keys': { const k = keys(); out('TN', show(k.TN)); out('TG', show(k.TG)); out('Khóa', k.keys.map(show).join(' ; ')); break; }
  case 'superkeys': { const sk = subsets(U).filter(X => sub(U, closure(X))); out('Số siêu khóa', sk.length); console.log(sk.map(show).join('  ')); break; }
  case 'mincover': out('Phủ tối thiểu', showF(minCover())); break;
  case 'member': { const [f] = parseFDs(arg); const c = closure(f.L, F, true); out('Thành viên?', sub(f.R, c) ? 'CÓ' : 'KHÔNG'); break; }
  case 'equiv': { const G = parseFDs(arg); const a = G.every(f => sub(f.R, closure(f.L, F))), b = F.every(f => sub(f.R, closure(f.L, G)));
    out('F phủ G', a); out('G phủ F', b); out('Tương đương', a && b); break; }
  case 'nf': { const r = nf(); out('Khóa', r.keys.map(show).join(' ; ')); out('TT khóa', show(r.prime)); out('Vi phạm 2NF', r.nf2V.join(', ') || '—'); out('Vi phạm 3NF', r.nf3V || '—'); out('Vi phạm BCNF', r.bcnfV || '—'); out('Dạng chuẩn', r.level); break; }
  case 'lossless': { const r = lossless(parseParts(arg)); console.log('      ' + U.join('    ')); r.table.forEach((row, i) => console.log(('R' + (i + 1)).padEnd(6) + row.map(v => v.padEnd(5)).join(''))); out('Không mất TT', r.ok); break; }
  case 'preserve': { const parts = parseParts(arg); const G = parts.flatMap(R => project(F, R)); const miss = F.filter(f => !sub(f.R, closure(f.L, G)));
    out('Bảo toàn PTH', miss.length === 0); if (miss.length) out('Mất', showF(miss)); break; }
  case 'bcnf': out('Tách BCNF', bcnf().map(show).join(' | ')); break;
  case '3nf': out('Tách 3NF', syn3nf().map(show).join(' | ')); break;
  default: { const k = keys(), r = nf(); out('TN / TG', show(k.TN) + ' / ' + show(k.TG)); out('Khóa', k.keys.map(show).join(' ; ')); out('Phủ tối thiểu', showF(minCover())); out('Dạng chuẩn', r.level);
    out('Vi phạm 2NF', r.nf2V.join(', ') || '—'); out('Vi phạm 3NF', r.nf3V || '—'); out('Vi phạm BCNF', r.bcnfV || '—'); }
}
