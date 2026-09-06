# li-yizhe-homepage v5

Static bilingual personal academic homepage.

## Copy into your existing repository

Copy every file/folder in this package into your existing:

`D:\编程设计\个人主页`

Do **not** delete the hidden `.git` folder in your existing project.

## Required profile photo

Keep your existing homepage portrait at:

`assets/images/profile.jpg`

## Cambridge Seven Sisters entry

Create this folder:

`assets/life/cambridge/seven-sisters/`

Place nine original photos there and name them:

- 01.jpg
- 02.jpg
- 03.jpg
- 04.jpg
- 05.jpg
- 06.jpg
- 07.jpg
- 08.jpg
- 09.jpg

The code already references these exact filenames.

## Markdown writing system

- `writing.html` reads `posts/posts.json`
- `post.html?slug=...` renders Markdown
- Chinese and English versions can use separate `.md` files

## Git update

```powershell
git status
git add .
git commit -m "Add Cambridge travel journal and update homepage"
git push
```

Vercel will deploy automatically when the GitHub repository is connected.
