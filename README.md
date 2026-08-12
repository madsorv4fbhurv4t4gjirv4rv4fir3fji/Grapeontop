# Grape

A minimalist little site with three browser games: **Snake**, **2048**, and **Memory**.
Pure HTML/CSS/JS — no build step, no dependencies to install.

## Project structure

```
grape/
├── index.html          # homepage
├── style.css           # shared design system
├── assets/
│   └── favicon.svg
└── games/
    ├── snake.html   snake.js
    ├── 2048.html    2048.js
    └── memory.html  memory.js
```

## Run it locally

Just open `index.html` in a browser — or, for the best experience (some browsers
restrict local file access), serve it with a tiny local server:

```bash
cd grape
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Push to GitHub

```bash
cd grape
git init
git add .
git commit -m "Initial commit: Grape game site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Deploy on Netlify

Two easy options:

**Option A — Drag and drop (fastest)**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the whole `grape` folder onto the page
3. Done — Netlify gives you a live URL immediately

**Option B — Connect the GitHub repo (auto-deploys on every push)**
1. Push the project to GitHub (see above)
2. In Netlify: **Add new site → Import an existing project → GitHub**
3. Pick your repo
4. Build settings: leave **Build command** blank and set **Publish directory** to `.`
   (this is a static site — nothing needs to be built)
5. Click **Deploy**

You can rename the site and add a custom domain from the Netlify site settings
at any point.

## Notes

- Scores/bests are saved with `localStorage`, so they're per-browser and never
  leave the visitor's device — no backend, no accounts, no tracking.
- To add another game: copy the pattern in `games/`, link it from `index.html`'s
  game grid, and reuse the shared classes in `style.css` (`.game-shell`, `.hud`,
  `.grape-btn`, etc.) so it matches the rest of the site.
