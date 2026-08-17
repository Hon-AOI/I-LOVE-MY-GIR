I LOVE MY BABE — GitHub Pages Hosting

This is a simple static site (HTML/CSS/JS). To host it on GitHub Pages, follow one of the methods below.

Prerequisites
- A GitHub account
- Git installed locally (https://git-scm.com/)
- Optional: GitHub CLI `gh` (https://cli.github.com/)

Method A — push to an existing or new repo (recommended)
1. In your project folder (this repo root), run:

```bash
git init
git add .
git commit -m "Initial commit"
# create remote on GitHub and replace USERNAME/REPO with your values
git remote add origin https://github.com/USERNAME/REPO.git
git branch -M main
git push -u origin main
```

2. Enable GitHub Pages:
- Open https://github.com/USERNAME/REPO
- Go to Settings → Pages (left sidebar)
- Under "Source" choose "Branch: main" and folder: `/ (root)`, then Save
- Wait a few minutes; your site will be available at: https://USERNAME.github.io/REPO

Method B — create and publish with GitHub CLI
```bash
# create a new public repo from the current folder and push
gh repo create REPO --public --source=. --remote=origin --push
# then enable Pages as above via the web UI (or use 'gh' to edit settings)
```

Notes & troubleshooting
- Ensure `index.html` is at the repository root (it is in this project).
- If you use a custom domain, configure DNS and add a `CNAME` file in repo root.
- If pages doesn't show changes, clear cache or wait a few minutes for propagation.

Optional: Automatic deployment via GitHub Actions
- You can use an action like `peaceiris/actions-gh-pages` to publish to the `gh-pages` branch automatically.
- If you want, I can add a ready-to-use workflow file to this repo.

If you'd like, I can:
- Create the repo for you (you'll need to grant or run `gh` locally).
- Add a GitHub Action workflow to auto-deploy.
- Create a `CNAME` or configure a custom domain.

Tell me which option you prefer and whether you want an automatic deploy workflow added.