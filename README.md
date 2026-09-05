# Frank Li Academic Homepage — Stat + AI

这是一个纯 **HTML + CSS + JavaScript** 的静态学术主页，可直接采用 **GitHub → Vercel** 的部署流程。

本版信息结构已经按要求精简为：

1. **个人简介**（最顶部）
2. **科研经历**
3. **竞赛经历**
4. **实习经历**
5. **海外交流经历**
6. Contact

已隐藏单独的 GPA、语言成绩、课程分数、额外奖项汇总等版块；中国人民大学与中国社会科学院经历未放入网站。

## 文件结构

```text
academic-homepage-final/
├── index.html
├── styles.css
├── script.js
├── vercel.json
├── README.md
└── assets/
    ├── .gitkeep
    └── README.txt
```

## 1. 本地预览

最简单的方法：双击 `index.html`。

更推荐使用 VS Code + Live Server：

1. 用 VS Code 打开整个文件夹。
2. 安装扩展 `Live Server`。
3. 右键 `index.html` → `Open with Live Server`。

## 2. 修改 GitHub 链接

打开 `index.html`，搜索：

```text
https://github.com/your-github
```

替换为你的真实 GitHub 地址。

## 3. 放入头像

把头像放到：

```text
assets/avatar.jpg
```

然后在 `index.html` 中找到：

```html
<div class="avatar-placeholder">FL</div>
```

替换为：

```html
<img src="./assets/avatar.jpg" alt="Frank Li" />
```

CSS 已经预设了头像的圆形裁切与黑白效果，不需要再改样式。

## 4. GitHub 首次上传

在项目文件夹打开 Terminal / PowerShell：

```bash
git init
git add .
git commit -m "Build academic homepage"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

如果你已经有旧版仓库，只需要用本版文件覆盖旧版，然后：

```bash
git add .
git commit -m "Restructure academic homepage"
git push
```

## 5. Vercel 部署

1. 登录 Vercel。
2. `Add New` → `Project`。
3. 导入刚才的 GitHub 仓库。
4. Framework Preset 选择 `Other`。
5. Build Command 留空。
6. Output Directory 留空。
7. 点击 `Deploy`。

之后每次：

```bash
git add .
git commit -m "Update homepage"
git push
```

Vercel 都会自动重新部署。

## 6. 当前设计原则

- 纯静态代码，方便长期维护。
- 中文 / English 一键切换。
- 手机、平板、桌面端响应式布局。
- 黑白、低饱和、宣纸感背景。
- 中国水墨元素通过 CSS 极淡呈现，不需要额外生成背景画。
- 首页重点强调 **Statistics + AI**，金融学仅作为本科背景信息。
