(() => {
  const titleEl = document.getElementById('article-title');
  const bodyEl = document.getElementById('article-body');
  const dateEl = document.getElementById('article-date');
  const statusEl = document.getElementById('article-status');
  if (!titleEl || !bodyEl) return;

  const params = new URLSearchParams(location.search);
  const slug = params.get('slug');
  let currentPost = null;
  let cache = {};
  const lang = () => document.documentElement.dataset.lang === 'en' ? 'en' : 'zh';

  async function render() {
    const l = lang();
    if (!currentPost) return;
    const title = currentPost.title?.[l] || currentPost.title?.zh || currentPost.slug;
    titleEl.textContent = title;
    document.title = `${title} | Frank Li`;
    dateEl.textContent = currentPost.date || '';
    statusEl.textContent = currentPost.draft ? (l === 'zh' ? '草稿' : 'Draft') : '';
    const file = currentPost.files?.[l] || currentPost.files?.zh;
    if (!file) return;
    try {
      if (!cache[file]) {
        const res = await fetch(`./${file}`);
        if (!res.ok) throw new Error('markdown');
        cache[file] = await res.text();
      }
      bodyEl.innerHTML = window.marked ? marked.parse(cache[file]) : `<pre>${cache[file]}</pre>`;
    } catch {
      bodyEl.innerHTML = `<p>${l === 'zh' ? '文章正文读取失败。请确认 Markdown 文件路径正确，并通过 Live Server / Vercel 预览。' : 'Could not load the Markdown file. Check the file path and preview through Live Server / Vercel.'}</p>`;
    }
  }

  if (!slug) {
    titleEl.textContent = 'Article not found';
    return;
  }

  fetch('./posts/posts.json')
    .then(r => r.json())
    .then(posts => {
      currentPost = posts.find(p => p.slug === slug);
      if (!currentPost) throw new Error('not found');
      render();
    })
    .catch(() => {
      titleEl.textContent = lang() === 'zh' ? '未找到文章' : 'Article not found';
      bodyEl.innerHTML = `<p><a href="./writing.html">${lang() === 'zh' ? '返回文章列表' : 'Back to article list'}</a></p>`;
    });

  new MutationObserver(render).observe(document.documentElement, { attributes:true, attributeFilter:['data-lang'] });
})();
