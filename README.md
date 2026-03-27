# Dad card

A single-page React card you can personalize and host on [GitHub Pages](https://pages.github.com/).

## Customize

Edit the `CARD` object at the top of `src/App.jsx` (name, subtitle, message, signature).

## Local preview

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

1. Create a new repository on GitHub (for example `dad-card`) and push this project:

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/dad-card.git
   git branch -M main
   git push -u origin main
   ```

2. Publish the built site from the `gh-pages` branch:

   ```bash
   npm run deploy
   ```

   This runs `vite build` then pushes the `dist` folder to branch `gh-pages` (requires a configured Git remote).

3. In the GitHub repo: **Settings → Pages → Build and deployment**, set **Source** to **Deploy from a branch**, branch **`gh-pages`**, folder **`/ (root)`**.

Your site will be available at `https://YOUR_USERNAME.github.io/dad-card/` (replace with your username and repo name).

The app uses a relative asset base (`./` in `vite.config.js`) so it works on project pages without extra configuration.
