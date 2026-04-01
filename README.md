# Gitavox Website

AI Voice & Text Agent services platform for B2B companies.

## Tech Stack
- **React 18** + **Vite** — fast builds, hot reload
- **React Router v6** — multi-page SPA routing
- **CSS Modules** — scoped, maintainable styles
- No UI library dependencies — fully custom design

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Install & Run

```bash
npm install
npm run dev
```

Site runs at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output goes to `/dist` — ready to upload or deploy.

---

## Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `src/pages/Home.jsx` | Hero, services, benefits, use cases overview, CTA |
| `/how-it-works` | `src/pages/HowItWorks.jsx` | 5-step process, integrations, tech specs |
| `/use-cases` | `src/pages/UseCases.jsx` | 6 detailed use cases with outcomes |
| `/pricing` | `src/pages/Pricing.jsx` | 3 plans + FAQ |
| `/demo` | `src/pages/Demo.jsx` | Demo booking form |
| `/contact` | `src/pages/Contact.jsx` | Contact form |

---

## Deployment

### Vercel (Recommended — works with your domain)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Framework: **Vite** (auto-detected)
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Add your domain in Project Settings → Domains

`vercel.json` is already configured for SPA routing.

### Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → Add Site → Import from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add custom domain in Site Settings → Domain Management

`netlify.toml` is already configured.

---

## Connecting the Demo & Contact Forms

The forms in `/demo` and `/contact` currently simulate submission with a 1-second delay.

### Option A: Formspree (easiest, free tier available)
1. Create account at [formspree.io](https://formspree.io)
2. Create a form → get your endpoint URL
3. Replace the `handleSubmit` fetch mock with:

```js
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

### Option B: EmailJS (sends email directly from frontend)
```bash
npm install @emailjs/browser
```
Follow their React guide: https://www.emailjs.com/docs/examples/reactjs/

### Option C: Your Own Backend API
Replace the `handleSubmit` mock with a `fetch` call to your own API endpoint.

---

## Adding Payments (Future)

The site is structured to integrate Stripe cleanly.

### Recommended approach: Stripe Checkout
1. `npm install @stripe/stripe-js`
2. Create a `/checkout` page or modal
3. Use Stripe's hosted Checkout for subscriptions

Pricing page CTA buttons can be updated to redirect to Stripe-hosted checkout URLs — no backend needed for basic subscription flows.

For custom billing logic, add a `/api` backend (Node.js/Express or Next.js API routes).

---

## Customization

### Colors
Edit `src/styles/global.css` → `:root` block.

### Fonts
Currently using **Sora** (display) + **DM Sans** (body) from Google Fonts.
Change in `index.html` `<link>` tags and `global.css` `--font-*` variables.

### Email / Contact
Update `hello@gitavox.com` references in:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

### Domain
Update any hardcoded `gitavox.com` references to your actual domain once live.

---

## Project Structure

```
gitavox/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .module.css
│   │   ├── Footer.jsx / .module.css
│   │   └── ScrollToTop.jsx
│   ├── pages/
│   │   ├── Home.jsx / .module.css
│   │   ├── HowItWorks.jsx / .module.css
│   │   ├── UseCases.jsx / .module.css
│   │   ├── Pricing.jsx / .module.css
│   │   ├── Demo.jsx / .module.css
│   │   └── Contact.jsx / .module.css
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
├── vercel.json
└── netlify.toml
```
