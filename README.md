<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/temp/1

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies: `npm install`
2. Copy [.env.example](.env.example) to `.env.local` and set Formspree and optional Calendly values (see below).
3. Run the app: `npm run dev`

### Schedule Discovery Call (Formspree + Calendly)

The Services “Schedule Discovery Call” flow collects first name, last name, email, and optional note, then submits to [Formspree](https://formspree.io).

- **Formspree**: Set `VITE_FORMSPREE_DISCOVERY_FORM_ID` in `.env.local` to your Formspree form ID (default `mvzroakd`). The form POSTs to `https://formspree.io/f/{id}`.
- **Calendly** (optional): Set `VITE_CALENDLY_DISCOVERY_URL` to your [Calendly](https://calendly.com) event URL (e.g. `https://calendly.com/your-username/discovery-call`). After a successful form submit, the booking calendar is embedded. If unset, a thanks message is shown instead. **Setup guide:** [docs/CALENDLY_SETUP.md](docs/CALENDLY_SETUP.md).
- Restart the dev server after changing env vars.

## Deploy to GitHub Pages

To deploy this app to [GitHub Pages](https://pages.github.com/) (e.g. `https://<org>.github.io/<repo>/`):

1. **Create a new repository** in your GitHub org (e.g. `gitavox`). Prefer empty (no README) if pushing an existing local repo.
2. **Add remote and push:**
   ```bash
   git remote add origin https://github.com/<org>/<repo>.git
   git branch -M main
   git push -u origin main
   ```
3. **Enable Pages:** Repo → **Settings → Pages**. Under “Build and deployment”, set **Source** to **GitHub Actions**.
4. **Add repository variables** (Settings → Secrets and variables → Actions → Variables):
   - `VITE_CALENDLY_DISCOVERY_URL` = `https://calendly.com/hanuman4jai/30min` (or your Calendly event URL)
   - `VITE_FORMSPREE_DISCOVERY_FORM_ID` = `mvzroakd` (optional; app defaults to this)
5. The workflow [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml) runs on push to `main`. After it succeeds, the site is live at `https://<org>.github.io/<repo>/`.

See [docs/DEPLOY.md](docs/DEPLOY.md) for more detail.
