/* Lưu tiến độ vào localStorage */
(function () {
  const KEY = 'csdl-ontap-v1';
  const defaults = () => ({
    v: 1, theme: null,
    fc: {},            // id flashcard -> 'known' | 'review'
    q: {},             // id câu -> { last, ok, tries, wrong, at }
    exams: [],         // lịch sử thi thử
    essayNotes: {},    // id bài tự luận -> ghi chú của mình
    essayDone: {},     // id -> true
    prefs: { hideDup: false, hideIncomplete: false, by: 'chapter' },
    imported: { questions: [], flashcards: [], essays: [] }
  });
  let state;
  try { state = Object.assign(defaults(), JSON.parse(localStorage.getItem(KEY) || '{}')); }
  catch (e) { state = defaults(); }
  state.prefs = Object.assign(defaults().prefs, state.prefs || {});
  state.imported = Object.assign(defaults().imported, state.imported || {});

  let saveTimer = null;
  function flush() {
    if (!saveTimer) return;
    clearTimeout(saveTimer); saveTimer = null;
    try { localStorage.setItem(KEY, JSON.stringify(state)); }
    catch (e) { window.U && U.toast('Không lưu được tiến độ (bộ nhớ trình duyệt đầy?)'); }
  }
  function save() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(flush, 120);
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('pagehide', flush);
    window.addEventListener('beforeunload', flush);
  }

  const S = {
    get state() { return state; },
    save,
    setTheme(t) { state.theme = t; save(); },
    pref(k, v) { if (v === undefined) return state.prefs[k]; state.prefs[k] = v; save(); },

    fcStatus: id => state.fc[id] || null,
    setFc(id, st) { if (st) state.fc[id] = st; else delete state.fc[id]; save(); },

    qStat: id => state.q[id] || null,
    recordAnswer(id, choice, ok) {
      const r = state.q[id] || { tries: 0, wrong: 0 };
      r.last = choice; r.ok = !!ok; r.tries++; if (!ok) r.wrong++; r.at = Date.now();
      state.q[id] = r; save();
    },
    wrongIds() { return Object.keys(state.q).filter(id => state.q[id] && state.q[id].ok === false); },
    clearQ(ids) { (ids || Object.keys(state.q)).forEach(id => delete state.q[id]); save(); },

    addExam(rec) { state.exams.unshift(rec); state.exams = state.exams.slice(0, 60); save(); },
    clearExams() { state.exams = []; save(); },

    note(id, text) { if (text === undefined) return state.essayNotes[id] || ''; state.essayNotes[id] = text; save(); },
    essayDone(id, v) { if (v === undefined) return !!state.essayDone[id]; if (v) state.essayDone[id] = true; else delete state.essayDone[id]; save(); },

    exportProgress() {
      const { imported, ...rest } = state;
      return { type: 'csdl-ontap-progress', version: 1, exportedAt: new Date().toISOString(), data: rest };
    },
    importProgress(obj) {
      const d = obj.data || {};
      const keep = state.imported;
      state = Object.assign(defaults(), d, { imported: keep });
      state.prefs = Object.assign(defaults().prefs, d.prefs || {});
      save();
    },
    resetAll() { const keepImp = state.imported; state = defaults(); state.imported = keepImp; save(); },

    addImported(kind, items) {
      const list = state.imported[kind];
      const ids = new Set(list.map(x => x.id));
      let added = 0, replaced = 0;
      for (const it of items) {
        if (ids.has(it.id)) { list[list.findIndex(x => x.id === it.id)] = it; replaced++; }
        else { list.push(it); ids.add(it.id); added++; }
      }
      save(); return { added, replaced };
    },
    clearImported() { state.imported = { questions: [], flashcards: [], essays: [] }; save(); }
  };
  window.Store = S;
})();
