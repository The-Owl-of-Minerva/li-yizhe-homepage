# Markdown blog workflow

## 1. Add bilingual Markdown files

Example:

```text
posts/my-new-essay.zh.md
posts/my-new-essay.en.md
```

## 2. Add one entry to `posts/posts.json`

```json
{
  "slug": "my-new-essay",
  "date": "2026.10.01",
  "draft": false,
  "title": {
    "zh": "中文标题",
    "en": "English Title"
  },
  "summary": {
    "zh": "中文摘要",
    "en": "English summary"
  },
  "files": {
    "zh": "posts/my-new-essay.zh.md",
    "en": "posts/my-new-essay.en.md"
  }
}
```

## 3. Publish

```powershell
git add .
git commit -m "Add new writing post"
git push
```

Vercel will redeploy automatically.

## Local preview

Because the blog loads JSON/Markdown with `fetch`, do not double-click `index.html` for blog testing. Use VS Code Live Server, or run:

```powershell
python -m http.server 8000
```

then open `http://localhost:8000`.
