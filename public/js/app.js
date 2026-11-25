(() => {
  function changeView(mode) {
    const feed = document.getElementById('news-feed');
    const compact = mode === 'compact';
    performance.mark('news-view-start');
    feed.dataset.view = mode;
    document.getElementById('view-detailed').setAttribute('aria-pressed', String(!compact));
    document.getElementById('view-compact').setAttribute('aria-pressed', String(compact));
    document.getElementById('view-status').textContent = window.NewsTools.viewLabel(mode);
    window.newsAnalytics?.track('view-change', { mode });
    performance.mark('news-view-end');
    performance.measure('news:view-change', 'news-view-start', 'news-view-end');
  }

  function init() {
    const feed = document.getElementById('news-feed');
    if (feed.dataset.initCount !== '0') return;
    const count = feed.querySelectorAll('.news-card').length;
    document.getElementById('archive-count').textContent = window.NewsTools.formatCount(count);
    feed.dataset.initCount = String(Number(feed.dataset.initCount) + 1);
    document.getElementById('view-compact').addEventListener('click', () => changeView('compact'));
    document.getElementById('view-detailed').addEventListener('click', () => changeView('detailed'));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
