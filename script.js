(() => {
  const root = document.documentElement;
  const langButtons = document.querySelectorAll('[data-lang]');
  const saved = localStorage.getItem('site-lang');
  const initial = saved === 'en' ? 'en' : 'zh';

  function setLang(lang) {
    root.dataset.lang = lang;
    root.lang = lang === 'zh' ? 'zh-CN' : 'en';
    localStorage.setItem('site-lang', lang);
    langButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  }
  setLang(initial);
  langButtons.forEach(btn => btn.addEventListener('click', () => setLang(btn.dataset.lang)));

  const menu = document.querySelector('.main-nav');
  const menuBtn = document.querySelector('.menu-btn');
  if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }));
  }

  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  reveals.forEach(el => io.observe(el));

  document.querySelectorAll('img[data-fallback]').forEach(img => {
    const fallback = document.getElementById(img.dataset.fallback);
    const sync = () => {
      if (!img.complete || img.naturalWidth === 0) {
        img.style.display = 'none';
        if (fallback) fallback.style.display = 'grid';
      } else {
        img.style.display = 'block';
        if (fallback) fallback.style.display = 'none';
      }
    };
    img.addEventListener('load', sync);
    img.addEventListener('error', sync);
    sync();
  });
})();
