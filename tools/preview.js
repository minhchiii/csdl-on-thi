#!/usr/bin/env node
/* tools/preview.js – xem trước sơ đồ ER/EER trong một file dữ liệu (để tự kiểm tra hình vẽ).
   node tools/preview.js data/de-k16-ca1.js [id1,id2,...]
   -> tạo tools/out/<tên>.html và chụp ảnh tools/out/<tên>.png bằng Edge headless (mở bằng read_file để xem). */
const fs = require('fs'), path = require('path'), vm = require('vm'), cp = require('child_process');
const ROOT = path.resolve(__dirname, '..');
const file = process.argv[2]; const only = (process.argv[3] || '').split(',').filter(Boolean);
if (!file) { console.log('node tools/preview.js data/<file>.js [id,...]'); process.exit(0); }
const sb = { console }; sb.window = sb; vm.createContext(sb);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/meta.js'), 'utf8'), sb);
vm.runInContext(fs.readFileSync(path.resolve(file), 'utf8'), sb);
const D = sb.DB, figs = [];
const add = (label, spec) => figs.push({ label, spec });
D.questions.forEach(q => {
  if (only.length && !only.includes(q.id)) return;
  [].concat(q.figure || []).forEach((f, i) => f.type === 'er' && add(`${q.id} – đề bài`, f.spec));
  (q.options || []).forEach(o => [].concat(o.figure || []).forEach(f => f.type === 'er' && add(`${q.id} – ${o.key}`, f.spec)));
});
D.essays.forEach(e => { if (only.length && !only.includes(e.id)) return; if (e.answer && e.answer.diagram) add(`${e.id} – đáp án`, e.answer.diagram); (e.figures || []).forEach(f => add(e.id, f.spec)); });
D.summary.forEach(p => p.sections.forEach(s => s.blocks.forEach(b => { if (b.t === 'figure' && (!only.length || only.includes(s.id))) add(`${p.id}/${s.id}`, b.spec); })));
if (!figs.length) { console.log('Không có sơ đồ nào.'); process.exit(0); }
const outDir = path.join(__dirname, 'out'); fs.mkdirSync(outDir, { recursive: true });
const name = path.basename(file, '.js') + (only.length ? '-' + only.length : '');
const rel = p => path.relative(outDir, path.join(ROOT, p)).replace(/\\/g, '/');
const big = figs.some(f => (f.spec.entities || []).length > 4);
const html = `<!doctype html><html lang="vi" data-theme="light"><head><meta charset="utf-8">
<link rel="stylesheet" href="${rel('vendor/fonts/fonts.css')}"><link rel="stylesheet" href="${rel('assets/css/style.css')}"><link rel="stylesheet" href="${rel('assets/css/views.css')}">
<style>body{padding:14px;width:1180px}.g{display:grid;grid-template-columns:${big ? '1fr' : '1fr 1fr'};gap:10px}.figure{margin:0}h4{font:600 12px var(--mono);margin:0 0 4px}</style></head>
<body><div class="g" id="g"></div><script src="${rel('assets/js/er-svg.js')}"></script><script>
const figs=${JSON.stringify(figs)};const g=document.getElementById('g');
figs.forEach(f=>{const d=document.createElement('div');d.className='figure';d.innerHTML='<h4>'+f.label+'</h4>'+ER.render(f.spec,{maxWidth:${big ? 1100 : 540}});g.appendChild(d);});
</script></body></html>`;
const htmlPath = path.join(outDir, name + '.html'); fs.writeFileSync(htmlPath, html);
const edge = ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Microsoft/Edge/Application/msedge.exe'].find(fs.existsSync);
const rows = big ? figs.length : Math.ceil(figs.length / 2);
const h = Math.min(16000, 60 + rows * (big ? 560 : 300));
const png = path.join(outDir, name + '.png');
if (edge) {
  try { cp.execFileSync(edge, ['--headless=new', '--disable-gpu', '--hide-scrollbars', `--window-size=1210,${h}`, `--screenshot=${png}`, 'file:///' + htmlPath.replace(/\\/g, '/')], { stdio: 'ignore', timeout: 60000 }); } catch (e) { }
  console.log(`${figs.length} sơ đồ → ${png}`);
} else console.log(`${figs.length} sơ đồ → ${htmlPath} (không tìm thấy Edge để chụp)`);
