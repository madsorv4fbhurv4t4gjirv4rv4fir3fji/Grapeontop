// Applies the saved (or OS-preferred) theme before first paint, so there's
// no flash of the wrong theme. Must load synchronously in <head>.
(() => {
  var saved;
  try { saved = localStorage.getItem('grape-theme'); } catch (e) {}
  var theme = saved === 'dark' || saved === 'light'
    ? saved
    : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.style.colorScheme = theme;
})();
