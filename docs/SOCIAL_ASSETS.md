# Social Media Assets

This document describes the brand assets used for social media platforms (LinkedIn, Twitter, etc.).

## Assets

| Asset | Path | Dimensions | Purpose |
|-------|------|------------|---------|
| LinkedIn/Social Cover | `public/linkedin-cover.png` | 1584 × 396 px | Banner for LinkedIn and similar platforms. |
| Display Picture | `public/display-picture.png` | 512 × 512 px | Profile/avatar for all social handles. |
| Logo Mark | `public/favicon.png` | 512 × 512 px | Favicon and base for the display picture. |

## Generation

- **LinkedIn Cover**: Generated from `public/linkedin-cover.svg` using `scripts/linkedin-cover.cjs`.
- **Display Picture**: Currently a copy of `public/favicon.png`.

To regenerate the LinkedIn cover PNG:
```bash
node scripts/linkedin-cover.cjs
```

*Note: Requires `sharp` to be installed (`npm install --save-dev sharp`).*
