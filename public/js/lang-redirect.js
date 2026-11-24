(function () {
  try {
    var preferred = localStorage.getItem('jaf_lang');
    if (preferred !== 'de' && preferred !== 'en' && preferred !== 'es') return;

    var path = location.pathname;
    if (path !== '/' && path !== '/en/' && path !== '/es/') return;

    var current = path.indexOf('/en/') === 0 ? 'en' : path.indexOf('/es/') === 0 ? 'es' : 'de';
    if (preferred === current) return;

    var homes = { de: '/', en: '/en/', es: '/es/' };
    location.replace(homes[preferred] + location.search + location.hash);
  } catch (e) {}
})();
