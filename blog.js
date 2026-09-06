(() => {
  const list = document.getElementById('post-list');
  if (!list) return;

  let posts = [];

  const getLang = () => document.documentElement.dataset.lang === 'zh' ? 'zh' : 'en';

  const esc = (s = '') =>
    s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

  function render() {
    const lang = getLang();

    if (!posts.length) {
      list.innerHTML = `<div class="empty-state">${lang === 'zh' ? '暂无文章。' : 'No posts yet.'}</div>`;
      return;
    }

    list.innerHTML = posts.map((post) => {
      const title = post.title?.[lang] || post.title?.en || post.slug;
      const summary = post.summary?.[lang] || post.summary?.en || '';
      const status = post.status === 'draft'
        ? `<span class="draft-badge">${lang === 'zh' ? '草稿' : 'Draft'}</span>`
        : '';

      return `
        <a class="post-card" href="./post.html?slug=${encodeURIComponent(post.slug)}">
          <div>
            <h3>${esc(title)}</h3>
            <p>${esc(summary)}</p>
            ${status}
          </div>
          <div class="post-meta">${esc(post.date || '')}</div>
        </a>
      `;
    }).join('');
  }

  fetch('./posts/posts.json')
    .then((r) => {
      if (!r.ok) throw new Error('Failed to load posts index.');
      return r.json();
    })
    .then((data) => {
      posts = Array.isArray(data) ? data : [];
      render();
    })
    .catch(() => {
      const lang = getLang();
      list.innerHTML = `<div class="empty-state">${lang === 'zh' ? '文章索引加载失败。' : 'Could not load the post index.'}</div>`;
    });

  window.addEventListener('site:language-change', render);
})();
