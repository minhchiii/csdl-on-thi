/* Khởi tạo ứng dụng: icon, Dark/Light mode, router tab, phím tắt đóng modal */
(function () {
  const ROUTES = {
    'tom-tat': window.SummaryView,
    'flashcard': window.FlashcardsView,
    'trac-nghiem': window.QuizView,
    'tu-luan': window.EssaysView
  };
  let curTab = null, curView = null;

  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    const b = U.$('#btn-theme');
    if (b) b.innerHTML = icon(t === 'dark' ? 'sun' : 'moon', 18);
  }

  function route() {
    const hash = (location.hash || '#tom-tat').replace(/^#/, '');
    const tab = ROUTES[hash] ? hash : 'tom-tat';
    if (curView && curView.destroy) curView.destroy();
    curTab = tab;
    curView = ROUTES[tab];
    U.$$('#tabs a').forEach(a => a.classList.toggle('active', a.dataset.tab === tab));
    const app = U.$('#app');
    curView.render(app);
    window.scrollTo({ top: 0 });
  }

  function init() {
    U.$('#btn-data').innerHTML = icon('file-json', 18);
    U.$('#btn-cheat .fab-ic').innerHTML = icon('table-2', 16);
    U.$('.modal [data-close].icon-btn').innerHTML = icon('x', 18);

    const curTheme = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(curTheme);

    U.$('#btn-theme').addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      Store.setTheme(next);
    });

    U.$('#btn-cheat').addEventListener('click', () => CheatSheet.open());
    U.$('#btn-data').addEventListener('click', () => IOView.open());
    U.$$('[data-close]').forEach(el => el.addEventListener('click', () => U.closeModal()));
    window.addEventListener('keydown', e => { if (e.key === 'Escape' && !U.$('#modal').hidden) U.closeModal(); });
    window.addEventListener('hashchange', route);
    route();
  }

  window.App = { applyTheme, refresh: route };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
