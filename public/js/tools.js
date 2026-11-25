(() => {
  window.NewsTools = {
    formatCount(count) {
      return `${new Intl.NumberFormat('ru-RU').format(count)} материалов в архиве`;
    },
    viewLabel(mode) {
      return mode === 'compact' ? 'Компактный вид' : 'Подробный вид';
    },
  };
})();
