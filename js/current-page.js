(() => {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('a[href]');

  links.forEach(link => {
    const href = link.getAttribute('href');

    if (!href || href.startsWith('http') || href.startsWith('#')) {
      return;
    }

    const normalizedHref = href.replace('./', '');

    if (normalizedHref === currentPath) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
})();
