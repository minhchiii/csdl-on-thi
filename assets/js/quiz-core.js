/* Logic cốt lõi cho Tab 3: gộp câu hỏi, nhóm câu trùng, lọc đề, tính giờ và chấm điểm */
(function () {
  function allQuestions() {
    return (DB.questions || []).concat((Store.state.imported && Store.state.imported.questions) || []);
  }

  function specSignature(fig) {
    if (!fig) return '';
    return [].concat(fig).map(f => {
      if (f.type === 'er' && f.spec) {
        const s = f.spec;
        const ents = (s.entities || []).map(e => (e.weak ? 'W:' : 'E:') + U.norm(e.label) + '[' +
          (e.attrs || []).map(a => (a.kind || '') + ':' + U.norm(a.label)).sort().join(',') + ']').sort().join('|');
        const rels = (s.rels || []).map(r => (r.ident ? 'IR:' : 'R:') + U.norm(r.label) + '(' +
          (r.links || []).map(l => (l.card || '') + (l.total ? '!' : '')).sort().join(',') + ')').sort().join('|');
        const specs = (s.specs || []).map(p => 'S:' + (p.kind || '') + (p.total ? '!' : '')).sort().join('|');
        return `er{${ents};${rels};${specs}}`;
      }
      if (f.type === 'table') return 'tbl{' + (f.head || []).join(',') + ';' + (f.rows || []).map(r => r.join(',')).join('|') + '}';
      if (f.type === 'text') return U.norm(f.text);
      return '';
    }).join('+');
  }

  function signature(q) {
    const stem = U.norm(q.stem);
    if (!stem || stem.length < 15 || (q.incomplete && (q.options || []).length < 3)) return null;
    const figStem = specSignature(q.figure);
    const opts = (q.options || []).map(o => U.norm(o.text) + specSignature(o.figure)).filter(Boolean).sort().join('||');
    if (!opts) return null;
    return stem + '::' + figStem + '::' + opts;
  }

  function indexDuplicates(list) {
    const parent = new Map();
    const find = id => { while (parent.get(id) !== id) id = parent.get(id); return id; };
    const union = (a, b) => { if (!parent.has(a) || !parent.has(b)) return; const ra = find(a), rb = find(b); if (ra !== rb) parent.set(rb, ra); };
    list.forEach(q => parent.set(q.id, q.id));

    const bySig = new Map();
    list.forEach(q => {
      const sig = signature(q);
      if (sig) {
        if (bySig.has(sig)) union(bySig.get(sig), q.id);
        else bySig.set(sig, q.id);
      }
      (q.sameAs || []).forEach(other => union(q.id, other));
    });

    const groups = new Map();
    list.forEach(q => {
      const root = find(q.id);
      if (!groups.has(root)) groups.set(root, []);
      groups.get(root).push(q);
    });

    const rank = q => (q.incomplete ? 0 : 100) + (q.exam === 'de-mau-720' ? 50 : 0) + Math.min(20, ((q.explanation || '').length / 40) | 0);
    groups.forEach((arr, root) => {
      const rep = arr.slice().sort((a, b) => rank(b) - rank(a))[0];
      arr.forEach(q => {
        q._dupGroup = root;
        q._isRep = q.id === rep.id;
        q._dups = arr.filter(x => x.id !== q.id).map(x => ({ id: x.id, exam: x.exam, no: x.no }));
      });
    });
    return list;
  }

  function examList(list) {
    const known = (DB.exams || []).slice();
    const seen = new Set(known.map(e => e.id));
    list.forEach(q => {
      if (q.exam && !seen.has(q.exam)) {
        seen.add(q.exam);
        known.push({ id: q.exam, label: q.exam + ' (nhập thêm)', short: q.exam, year: 'Nhập thêm', group: 'imported', minutes: 60 });
      }
    });
    return known;
  }

  function filterPool(opts) {
    const list = indexDuplicates(allQuestions());
    let pool = list.filter(q => {
      if (opts.wrongOnly) return (Store.qStat(q.id) || {}).ok === false;
      if (opts.by === 'chapter' && opts.chapter && opts.chapter !== 'all' && q.chapter !== opts.chapter) return false;
      if (opts.by === 'exam' && opts.exam && opts.exam !== 'all' && q.exam !== opts.exam) return false;
      return true;
    });
    if (opts.hideIncomplete) pool = pool.filter(q => !q.incomplete);
    if (opts.hideDup) {
      const groups = new Map();
      pool.forEach(q => {
        const g = q._dupGroup || q.id;
        if (!groups.has(g)) groups.set(g, q);
        else if (q._isRep && !groups.get(g)._isRep) groups.set(g, q);
      });
      const keep = new Set(groups.values());
      pool = pool.filter(q => keep.has(q));
    }
    return pool;
  }

  function defaultMinutes(count, by, examId, fullPoolLen) {
    if (by === 'exam' && examId && examId !== 'all' && count === fullPoolLen) {
      const ex = examList(allQuestions()).find(e => e.id === examId);
      if (ex && ex.minutes) return ex.minutes;
    }
    return Math.max(5, Math.round((count * 60) / 50));
  }

  function gradeExam(session, usedSec) {
    let scoredTotal = 0, unscored = 0, correct = 0, wrong = 0, blank = 0;
    session.items.forEach((q, i) => {
      const picked = session.answers[i] || null;
      if (q.incomplete || q.answer == null) { unscored++; return; }
      scoredTotal++;
      if (picked == null) blank++;
      else if (picked === q.answer) { correct++; Store.recordAnswer(q.id, picked, true); }
      else { wrong++; Store.recordAnswer(q.id, picked, false); }
    });
    const score = scoredTotal > 0 ? Math.round((correct / scoredTotal) * 100) / 10 : 0;
    const rec = {
      at: Date.now(), title: session.title, total: session.items.length,
      scoredTotal, unscored, correct, wrong, blank, score,
      durationSec: session.durationSec, usedSec
    };
    Store.addExam(rec);
    return rec;
  }

  window.QuizCore = { allQuestions, indexDuplicates, examList, filterPool, defaultMinutes, gradeExam };
})();
