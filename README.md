# Li Yizhe Homepage — V2

A bilingual (Chinese / English) academic personal homepage designed for GitHub + Vercel.

## Structure

- `index.html` — homepage / personal introduction / portrait / four content portals
- `cv.html` — curriculum vitae: research, competitions, internship, overseas programs
- `publications.html` — academic outputs, publications, conferences
- `writing.html` — free-writing framework
- `life.html` — photo + text journal framework
- `styles.css` — shared visual design, responsive layout, rounded bilingual typography
- `script.js` — language switching, mobile navigation, reveal effects, image fallbacks
- `vercel.json` — Vercel static-site configuration
- `assets/` — portrait and daily-life photographs

## Images

Add these files when ready:

```text
assets/profile.jpg
assets/life-01.jpg
assets/life-02.jpg
assets/life-03.jpg
```

Missing images automatically show placeholders.

## GitHub update

If this folder replaces your current local homepage files:

```powershell
git add .
git commit -m "Upgrade homepage to multi-page bilingual layout"
git push
```

If your GitHub repository is already connected to Vercel, Vercel will deploy the update automatically.

## Notes

- Chinese and English are both included in every page.
- Language choice is stored in `localStorage`, so switching language persists between pages.
- The site uses Google Fonts (`Nunito` + `Noto Sans SC`) for a softer, rounder look. It also includes system-font fallbacks.
- Research-experience descriptions on the CV page are intentionally written in full rather than compressed into tags or summaries.
