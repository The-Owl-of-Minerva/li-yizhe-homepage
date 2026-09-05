# Li Yizhe Homepage — V3

Bilingual academic/personal homepage for GitHub + Vercel.

## V3 upgrades

- Homepage uses `assets/images/个人照片.jpg` as the portrait.
- Cambridge and Austin entries on `cv.html` now include buttons linking directly to mini albums in `life.html`.
- `life.html` contains dedicated Cambridge Summer and Austin Winter albums.
- `writing.html` is now a Markdown-driven blog index.
- `post.html` is a reusable article reader, so future posts do not need separate handwritten HTML pages.

## Structure

```text
li-yizhe-homepage/
├─ index.html
├─ cv.html
├─ publications.html
├─ writing.html
├─ post.html
├─ life.html
├─ styles.css
├─ script.js
├─ blog.js
├─ post.js
├─ vercel.json
├─ assets/
│  ├─ images/
│  │  └─ 个人照片.jpg
│  └─ life/
│     ├─ cambridge/
│     │  ├─ 01.jpg
│     │  ├─ 02.jpg
│     │  └─ 03.jpg
│     └─ austin/
│        ├─ 01.jpg
│        ├─ 02.jpg
│        └─ 03.jpg
└─ posts/
   ├─ posts.json
   ├─ first-note.zh.md
   ├─ first-note.en.md
   └─ README.md
```

## Portrait

The homepage is already configured to use:

```text
assets/images/个人照片.jpg
```

Chinese filenames work on GitHub/Vercel. For long-term maintenance, keep the path exactly the same if you replace the photo.

## Cambridge / Austin albums

Put photos into:

```text
assets/life/cambridge/01.jpg
assets/life/cambridge/02.jpg
assets/life/cambridge/03.jpg

assets/life/austin/01.jpg
assets/life/austin/02.jpg
assets/life/austin/03.jpg
```

The CV buttons link to:

```text
life.html#cambridge
life.html#austin
```

## Markdown blog

See `posts/README.md` for the full workflow. In short:

1. add `.zh.md` and `.en.md` files under `posts/`;
2. add metadata to `posts/posts.json`;
3. push to GitHub;
4. Vercel redeploys automatically.

The Markdown reader uses `marked.js` from jsDelivr.

## Local preview

The Markdown blog uses `fetch`, so use an HTTP server instead of double-clicking the HTML file.

In the project folder:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

VS Code Live Server also works.

## GitHub / Vercel update

Copy the V3 files into your existing local Git repository, keeping the hidden `.git` folder. Then:

```powershell
git status
git add .
git commit -m "Add travel albums and Markdown blog"
git push
```

If Vercel is already connected to the GitHub repository, it will redeploy automatically.
