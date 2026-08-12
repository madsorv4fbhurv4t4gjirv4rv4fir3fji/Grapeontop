// Applies the saved theme and wires up any .theme-toggle button on the page.
// The "apply immediately" part also runs inline in <head> on every page
// (see theme-init.js) so there's no flash of the wrong theme on load.
(() => {
  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('grape-theme', theme); } catch (e) {}
  }

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
    });
  });
})();
