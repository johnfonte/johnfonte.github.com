# John Fonte Personal Website

A clean, modern personal website built with Astro and deployed on GitHub Pages.

## 🚀 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   └── pages/
│       └── index.astro
├── .github/
│   └── workflows/
│       └── deploy.yml
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `yarn install`            | Installs dependencies                            |
| `yarn dev`                | Starts local dev server at `localhost:4321`     |
| `yarn build`              | Build your production site to `./dist/`         |
| `yarn preview`            | Preview your build locally, before deploying     |

## 📦 Deployment

This site is configured for automatic deployment to GitHub Pages:

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. Site will be available at `https://johnfonte.github.io/johnfonte.com`

### Setup Instructions

1. Create a new repository named `johnfonte.com` on GitHub
2. Enable GitHub Pages in repository settings
3. Set source to "GitHub Actions"
4. Push this code to the repository
5. The site will automatically deploy

## 🔧 Configuration

Update the `site` and `base` URLs in `astro.config.mjs` if your repository name or GitHub username differs from the current setup.