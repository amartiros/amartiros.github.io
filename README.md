# Medinote Website (medi-note.de)

Static single-page marketing site for the Medinote app. No frameworks, no build
step, no external assets — plain HTML/CSS/JS.

```
.
├── index.html        # Single-page site (hero, features, screenshots, how it works, privacy, contact)
├── impressum.html    # Legal notice — PLACEHOLDER, fill in before going live
├── datenschutz.html  # Privacy policy — PLACEHOLDER, fill in before going live
├── css/style.css
├── js/main.js        # Language toggle (DE default / EN), mobile nav, scroll reveal
├── CNAME             # Custom domain for GitHub Pages
└── assets/screenshots/  # Put real app screenshots here (see below)
```

## Languages

German is the default and is written directly into the HTML. The English
translation lives in the `translations` dictionary in `js/main.js` and is
applied via `data-i18n` attributes. The visitor's choice is stored in
`localStorage`; first-time visitors get DE for German browsers, EN otherwise.

**When editing copy, change it in both places:** the German text in
`index.html` *and* the `de`/`en` dictionaries in `js/main.js`.

## Replacing the screenshot placeholders

Each phone mockup contains a `.shot-placeholder` div. Replace it with an image:

```html
<div class="phone-screen">
  <img src="assets/screenshots/dashboard-de.png" alt="Medinote Dashboard" loading="lazy">
</div>
```

Recommended source size: 1290 × 2796 px (iPhone portrait screenshots work
as-is). The image is scaled with `object-fit: cover`.

## Deploying to GitHub Pages

The site lives at the repo root, so no build or workflow is needed:

1. Push this repo to GitHub.
2. Settings → Pages → Source: **Deploy from a branch** → `main` / `/ (root)`.
3. The site is live at `https://<username>.github.io/<repo>/` within a minute,
   and at `https://medi-note.de` once DNS is configured (see below).

## Custom domain (medi-note.de)

1. The `CNAME` file in this folder already contains `medi-note.de`.
2. In Settings → Pages, enter `medi-note.de` as the custom domain and enable
   **Enforce HTTPS** once the certificate is issued.
3. At your DNS provider:
   - Apex `medi-note.de`: A records → `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - `www.medi-note.de`: CNAME → `<your-github-username>.github.io`

## Before going live (checklist)

- [ ] Replace the placeholder content in `impressum.html` (§ 5 DDG — mandatory in Germany)
- [ ] Replace the placeholder content in `datenschutz.html` (template: `Datenschutzerklaerung.docx` in the medical_assistant app repo)
- [ ] Confirm the contact address (currently `kontakt@medi-note.de`) exists
- [ ] Replace screenshot placeholders with real app screenshots
- [ ] Update the store badges in the download section once App Store / Play Store listings exist
