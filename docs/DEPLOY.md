# Deploy GitaVox to GitHub Pages

This guide walks through pushing the app to a repository in your GitHub org and deploying it to GitHub Pages via the included GitHub Actions workflow.

## Prerequisites

- Git installed locally
- A GitHub org where you can create repositories
- The project built and runnable locally (`npm install`, `npm run dev`)

## 1. Create a new repository

1. In your GitHub org, click **New repository**.
2. Choose a name (e.g. `gitavox` or `gitavox-site`). The site will be available at `https://<org>.github.io/<repo>/`.
3. Create the repo **without** a README, license, or .gitignore if you are pushing an existing local project.

## 2. Push the project

From the project root:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<org>/<repo>.git
git branch -M main
git push -u origin main
```

If the project is already a git repo with commits, run only the `remote add`, `branch -M`, and `push` lines.

Replace `<org>` and `<repo>` with your org and repository name.

## 3. Enable GitHub Pages

1. Open the repo on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.

## 4. Add repository variables

The workflow builds with `VITE_CALENDLY_DISCOVERY_URL` and `VITE_FORMSPREE_DISCOVERY_FORM_ID` so the deployed site uses your Formspree and Calendly setup.

1. Go to **Settings** → **Secrets and variables** → **Actions**.
2. Open the **Variables** tab and add:

| Name | Value |
|------|--------|
| `VITE_CALENDLY_DISCOVERY_URL` | `https://calendly.com/hanuman4jai/30min` (or your Calendly event URL) |
| `VITE_FORMSPREE_DISCOVERY_FORM_ID` | `mvzroakd` (optional; app has this as default) |

If `VITE_CALENDLY_DISCOVERY_URL` is missing, the site still builds; users will see the thanks message instead of the calendar after form submit.

## 5. Deploy

The workflow [../.github/workflows/deploy-pages.yml](../.github/workflows/deploy-pages.yml) runs on every push to `main`. It:

1. Checks out the repo, installs dependencies, and runs `npm run build` with the correct base path and env vars.
2. Uploads the `dist/` output as a Pages artifact.
3. Deploys to GitHub Pages.

After a successful run, the site is live at **`https://<org>.github.io/<repo>/`**.

## Troubleshooting

- **Build fails:** Check the **Actions** tab for the failing run. Ensure `npm ci` and `npm run build` work locally.
- **Blank or broken site:** Verify **Pages** source is **GitHub Actions** and that the workflow run for the deploy job succeeded.
- **Calendly not showing after form submit:** Ensure `VITE_CALENDLY_DISCOVERY_URL` is set as a repository variable and that you have restarted the workflow (e.g. by pushing a commit) after adding it.
