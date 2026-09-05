(() => {
  const list = document.getElementById('blog-list');
  if (!list) return;
  let posts = [];

  const esc = (value='') => String(value).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
  const lang = () => document.documentElement.dataset.lang === 'en' ? 'en' : 'zh';

  function render() {
    const l = lang();
    if (!posts.length) {
      list.innerHTML = `<article class="post-card"><div><h3>${l === 'zh' ? '暂时还没有公开文章' : 'No public essays yet'}</h3><p>${l === 'zh' ? '你可以从 posts/README.md 的模板开始添加第一篇 Markdown 文章。' : 'Start with the template in posts/README.md to add your first Markdown essay.'}</p></div></article>`;
      return;
    }
    list.innerHTML = posts
      .slice()
      .sort((a,b) => String(b.date).localeCompare(String(a.date)))
      .map(post => {
        const title = post.title?.[l] || post.title?.zh || post.slug;
        const summary = post.summary?.[l] || post.summary?.zh || '';
        const badge = post.draft ? `<span class="draft-badge">${l === 'zh' ? '草稿框架' : 'Draft'}</span>` : '';
        return `<a class="post-card post-card-link" href="./post.html?slug=${encodeURIComponent(post.slug)}">
          <div><h3>${esc(title)}</h3><p>${esc(summary)}</p>${badge}</div>
          <div class="post-meta">${esc(post.date || '')}<span class="post-arrow">↗</span></div>
        </a>`;
      }).join('');
  }

  fetch('./posts/posts.json')
    .then(r => { if (!r.ok) throw new Error('posts index'); return r.json(); })
    .then(data => { posts = Array.isArray(data) ? data : []; render(); })
    .catch(() => {
      list.innerHTML = `<article class="post-card"><div><h3><span class="i18n-zh">文章索引读取失败</span><span class="i18n-en">Could not load the article index</span></h3><p><span class="i18n-zh">部署到 Vercel 后会正常使用 fetch；本地预览请使用 Live Server 或本地 HTTP 服务器。</span><span class="i18n-en">The fetch works on Vercel. For local preview, use Live Server or a local HTTP server.</span></p></div></article>`;
    });

  new MutationObserver(render).observe(document.documentElement, { attributes:true, attributeFilter:['data-lang'] });
})();
