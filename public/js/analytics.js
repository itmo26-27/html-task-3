(() => {
  window.newsAnalytics = {
    loaded: true,
    events: [],
    track(name, detail = {}) {
      this.events.push({ name, detail, at: performance.now() });
    },
  };
  window.newsAnalytics.track('page-view');
})();
