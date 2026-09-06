(() => {
  const content = document.getElementById('post-content');
  const meta = document.getElementById('post-meta');
  if (!content || !meta) return;

  const params = new URLSearchParams(location.search);
  const slug = params.get('slug');

  let index = [];
  let activePost = null;

  const getLang = () => document.documentElement.dataset.lang === 'zh' ? 'zh' : 'en';

  const esc = (s = '') =>
    s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

  function inline(s) {
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`(.+?)`/g, '<code>$1</code>')
      .replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
  }

  function markdown(md) {
    const lines = md.replace(/\r/g, '').split('\n');
    let out = [];
    let para = [];
    let list = [];
    let code = [];

    const flushPara = () => {
      if (para.length) {
        out.push(`<p>${inline(para.join(' '))}</p>`);
        para = [];
      }
    };

    const flushList = () => {
      if (list.length) {
        out.push(`<ul>${list.map((x) => `<li>${inline(x)}</li>`).join('')}</ul>`);
        list = [];
      }
    };

    const flushCode = () => {
      if (code.length) {
        out.push(`<pre><code>${esc(code.join('\n'))}</code></pre>`);
        code = [];
      }
    };

    let codeMode = false;

    for (const raw of lines) {
      const line = raw.trimEnd();

      if (line.trim().startsWith('```')) {
        flushPara();
        flushList();

        if (codeMode) {
          flushCode();
          codeMode = false;
        } else {
          codeMode = true;
        }
        continue;
      }

      if (codeMode) {
        code.push(raw);
        continue;
      }

      if (!line.trim()) {
        flushPara();
        flushList();
        continue;
      }

      const h = line.match(/^(#{1,4})\s+(.+)$/);
      if (h) {
        flushPara();
        flushList();
        const level = h[1].length;
        out.push(`<h${level}>${inline(h[2])}</h${level}>`);
        continue;
      }

      const li = line.match(/^[-*]\s+(.+)$/);
      if (li) {
        flushPara();
        list.push(li[1]);
        continue;
      }

      const quote = line.match(/^>\s?(.+)$/);
      if (quote) {
        flushPara();
        flushList();
        out.push(`<blockquote>${inline(quote[1])}</blockquote>`);
        continue;
      }

      para.push(line.trim());
    }

    flushPara();
    flushList();
    if (codeMode) flushCode();

    return out.join('\n');
  }

  async function load() {
    const lang = getLang();

    if (!slug) {
      meta.textContent = '';
      content.innerHTML = `<p>${lang === 'zh' ? '缺少文章 slug。' : 'Missing post slug.'}</p>`;
      return;
    }

    if (!index.length) {
      const r = await fetch('./posts/posts.json');
      if (!r.ok) throw new Error('Index failed');
      index = await r.json();
      activePost = index.find((p) => p.slug === slug);
    }

    if (!activePost) {
      content.innerHTML = `<p>${lang === 'zh' ? '未找到文章。' : 'Post not found.'}</p>`;
      return;
    }

    const title = activePost.title?.[lang] || activePost.title?.en || slug;
    const file = activePost.files?.[lang] || activePost.files?.en;

    meta.innerHTML = `
      <p class="eyebrow">${esc(activePost.date || '')}</p>
      <h1>${esc(title)}</h1>
    `;

    if (!file) {
      content.innerHTML = `<p>${lang === 'zh' ? '该语言版本尚未提供。' : 'This language version is not available.'}</p>`;
      return;
    }

    const r = await fetch(`./posts/${file}`);
    if (!r.ok) throw new Error('Post file failed');
    const md = await r.text();
    content.innerHTML = markdown(md);
    document.title = `${title} | Frank Li`;
  }

  load().catch(() => {
    const lang = getLang();
    content.innerHTML = `<p>${lang === 'zh' ? '文章加载失败。' : 'Could not load this post.'}</p>`;
  });

  window.addEventListener('site:language-change', () => {
    activePost = activePost || index.find((p) => p.slug === slug);
    load().catch(() => {});
  });
})();
