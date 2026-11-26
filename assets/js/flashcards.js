/* Tab 2 – Flashcard lật thẻ & theo dõi trạng thái thuộc */
(function () {
  let state = { chapter: 'all', status: 'all', deck: [], idx: 0, flipped: false };
  let keyHandler = null;

  function allCards() {
    return (DB.flashcards || []).concat((Store.state.imported && Store.state.imported.flashcards) || []);
  }

  function buildDeck(keepShuffle) {
    const cards = allCards().filter(c => {
      if (state.chapter !== 'all' && c.chapter !== state.chapter) return false;
      const st = Store.fcStatus(c.id) || 'unseen';
      if (state.status !== 'all' && st !== state.status) return false;
      return true;
    });
    state.deck = keepShuffle ? U.shuffle(cards) : cards;
    state.idx = 0;
    state.flipped = false;
  }

  function statusBadge(st) {
    if (st === 'known') return `<span class="fc-status-known">${icon('check', 14)} Đã thuộc</span>`;
    if (st === 'review') return `<span class="fc-status-review">${icon('repeat', 14)} Cần ôn lại</span>`;
    return `<span class="muted">Chưa phân loại</span>`;
  }

  function render(root) {
    if (!state.deck.length && allCards().length) buildDeck(false);

    const byChapter = allCards().filter(c => state.chapter === 'all' || c.chapter === state.chapter);
    const total = byChapter.length;
    const known = byChapter.filter(c => Store.fcStatus(c.id) === 'known').length;
    const review = byChapter.filter(c => Store.fcStatus(c.id) === 'review').length;
    const pctKnown = total ? (known / total) * 100 : 0;
    const pctRev = total ? (review / total) * 100 : 0;

    const card = state.deck[state.idx];
    const st = card ? Store.fcStatus(card.id) : null;

    root.innerHTML = `
      <div class="page-head">
        <div class="eyebrow">Phần 2 · Ghi nhớ nhanh</div>
        <h1>Flashcard khái niệm &amp; công thức</h1>
        <p>Nhấn thẻ hoặc phím <code>Space</code> để lật mặt sau. Phím <code>1</code> đánh dấu cần ôn, <code>2</code> đã thuộc, <code>←</code>/<code>→</code> đổi thẻ.</p>
      </div>

      <div class="toolbar">
        <select id="fc-ch" aria-label="Lọc theo chương">
          <option value="all" ${state.chapter === 'all' ? 'selected' : ''}>Tất cả chương (${allCards().length} thẻ)</option>
          ${DB.chapters.map(c => {
            const n = allCards().filter(x => x.chapter === c.id).length;
            return `<option value="${c.id}" ${state.chapter === c.id ? 'selected' : ''}>${c.short} – ${U.esc(c.title)} (${n})</option>`;
          }).join('')}
        </select>
        <select id="fc-st" aria-label="Lọc theo trạng thái">
          <option value="all" ${state.status === 'all' ? 'selected' : ''}>Mọi trạng thái</option>
          <option value="unseen" ${state.status === 'unseen' ? 'selected' : ''}>Chưa học</option>
          <option value="review" ${state.status === 'review' ? 'selected' : ''}>Cần ôn lại</option>
          <option value="known" ${state.status === 'known' ? 'selected' : ''}>Đã thuộc</option>
        </select>
        <button class="btn sm" id="fc-shuffle">${icon('shuffle', 14)}<span>Xáo thẻ</span></button>
        <button class="btn sm ghost" id="fc-reset" title="Đặt lại trạng thái thẻ trong bộ lọc chương hiện tại">${icon('rotate-ccw', 14)}<span>Đặt lại</span></button>
        <div class="grow"></div>
        <div class="progress">
          <div class="progress-label"><span>Đã thuộc <b>${known}/${total}</b></span><span>Ôn lại <b>${review}</b></span></div>
          <div class="bar"><span class="b-ok" style="width:${pctKnown}%"></span><span class="b-bad" style="width:${pctRev}%"></span></div>
        </div>
      </div>

      <div class="fc-wrap">
        ${card ? `
          <div class="fc-stage">
            <div class="fc-card ${state.flipped ? 'flipped' : ''}" id="fc-card" tabindex="0" role="button" aria-label="Lật thẻ flashcard">
              <div class="fc-face">
                <div class="fc-meta">
                  <span><span class="chno">${U.chapterOf(card.chapter).short}</span> · Thẻ ${state.idx + 1}/${state.deck.length}</span>
                  <span>${statusBadge(st)}</span>
                </div>
                <div class="fc-front-text rich">${U.fmt(card.front)}</div>
                <div class="fc-hint">Nhấn vào thẻ hoặc Space để xem đáp án</div>
              </div>
              <div class="fc-face fc-back">
                <div class="fc-meta">
                  <span>Giải đáp · ${U.chapterOf(card.chapter).short}</span>
                  <span>${statusBadge(st)}</span>
                </div>
                <div class="fc-back-text rich">${U.fmt(card.back)}</div>
                <div class="fc-hint">${card.source ? `<span class="src">${U.esc(card.source)}</span>` : 'Nhấn để quay lại mặt trước'}</div>
              </div>
            </div>
          </div>

          <div class="fc-actions">
            <button class="btn" id="fc-prev" ${state.idx === 0 ? 'disabled' : ''}>${icon('chevron-left', 15)}<span>Trước</span></button>
            <div class="mid">
              <button class="btn ${st === 'review' ? 'accent' : ''}" id="fc-mark-rev">${icon('repeat', 15)}<span>Cần ôn lại</span></button>
              <button class="btn ${st === 'known' ? 'primary' : ''}" id="fc-mark-ok">${icon('check', 15)}<span>Đã thuộc</span></button>
            </div>
            <button class="btn" id="fc-next" ${state.idx >= state.deck.length - 1 ? 'disabled' : ''}><span>Sau</span>${icon('chevron-right', 15)}</button>
          </div>
        ` : `
          <div class="empty">
            <p>Không có thẻ nào trong bộ lọc hiện tại.</p>
            <button class="btn sm" id="fc-clear-filter">Hiện tất cả thẻ</button>
          </div>
        `}
      </div>`;

    U.$('#fc-ch', root).addEventListener('change', e => { state.chapter = e.target.value; buildDeck(false); render(root); });
    U.$('#fc-st', root).addEventListener('change', e => { state.status = e.target.value; buildDeck(false); render(root); });
    U.$('#fc-shuffle', root).addEventListener('click', () => { buildDeck(true); render(root); U.toast('Đã xáo ' + state.deck.length + ' thẻ'); });
    U.$('#fc-reset', root).addEventListener('click', () => {
      if (!byChapter.length) return;
      byChapter.forEach(c => Store.setFc(c.id, null));
      buildDeck(false);
      render(root);
      U.toast('Đã đặt lại trạng thái của ' + byChapter.length + ' thẻ');
    });

    const clearBtn = U.$('#fc-clear-filter', root);
    if (clearBtn) clearBtn.addEventListener('click', () => { state.chapter = 'all'; state.status = 'all'; buildDeck(false); render(root); });

    const cardEl = U.$('#fc-card', root);
    const flip = () => { state.flipped = !state.flipped; cardEl && cardEl.classList.toggle('flipped', state.flipped); };
    const go = d => {
      const next = state.idx + d;
      if (next >= 0 && next < state.deck.length) { state.idx = next; state.flipped = false; render(root); }
    };
    const mark = stVal => {
      if (!card) return;
      const cur = Store.fcStatus(card.id);
      Store.setFc(card.id, cur === stVal ? null : stVal);
      if (state.idx < state.deck.length - 1) { state.idx++; state.flipped = false; }
      render(root);
    };

    if (cardEl) {
      cardEl.addEventListener('click', flip);
      U.$('#fc-prev', root).addEventListener('click', () => go(-1));
      U.$('#fc-next', root).addEventListener('click', () => go(1));
      U.$('#fc-mark-rev', root).addEventListener('click', () => mark('review'));
      U.$('#fc-mark-ok', root).addEventListener('click', () => mark('known'));
    }

    destroy();
    keyHandler = e => {
      if (!U.$('#modal').hidden) return;
      if (/^(INPUT|SELECT|TEXTAREA)$/.test((document.activeElement || {}).tagName)) return;
      if (e.code === 'Space' || e.key === 'Enter') { e.preventDefault(); flip(); }
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === '1') mark('review');
      else if (e.key === '2') mark('known');
    };
    window.addEventListener('keydown', keyHandler);
  }

  function destroy() {
    if (keyHandler) { window.removeEventListener('keydown', keyHandler); keyHandler = null; }
  }

  window.FlashcardsView = { render, destroy };
})();
