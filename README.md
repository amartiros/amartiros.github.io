# Medinote Website (medi-note.de)

Static single-page marketing site for the Medinote app. No frameworks, no build
step, no external assets — plain HTML/CSS/JS.

```
.
├── index.html        # Single-page site (hero, problem, features, widgets, screenshots, how it works, privacy, FAQ, early-access form)
├── impressum.html    # Legal notice — PLACEHOLDER, fill in before going live
├── datenschutz.html  # Privacy policy — PLACEHOLDER, fill in before going live
├── css/style.css
├── js/main.js        # Language toggle (DE default / EN), mobile nav, scroll reveal, signup form
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

Pages with their own copy use the same mechanism with a page dictionary:
`anleitung-widgets.html` loads `js/widgets-i18n.js` (which sets
`window.medinotePageTranslations`) before `js/main.js`, and main.js merges it
over the shared dictionary — so nav, footer and widget texts (`wx.w.*`) are
shared. Besides `data-i18n` (plain text), `data-i18n-html` fills strings with
inline markup such as `<strong>`, and `data-i18n-aria` sets an `aria-label`.
The microINR® and CoaguChek® guides and the legal pages are German only.

## Wording: documentation, not a medical device

Medinote is marketed as a personal diary, not a medical device (EU MDR). The
site's text, alt texts and screenshots all count towards the app's intended
purpose, so keep them to recording, never judging:

- Use: notieren, abhaken, übernehmen, anzeigen, erinnern (an den eigenen Plan), exportieren
- Avoid: überwachen, bewerten, auswerten, Trend, warnen, empfehlen, „für Ihre
  Therapie“, „begleitet“, „sicher“/„zuverlässig“, and health outcomes
  (stabiler INR, weniger Komplikationen)
- Doses and reference ranges are always the ones the doctor set („wie von Ihrer
  Ärztin oder Ihrem Arzt vorgegeben“) — the app never suggests or rates them

## Replacing the screenshot placeholders

Each phone mockup contains a `.shot-placeholder` div. Replace it with an image:

```html
<div class="phone-screen">
  <img src="assets/screenshots/dashboard-de.png" alt="Medinote Dashboard" loading="lazy">
</div>
```

Recommended source size: 1290 × 2796 px (iPhone portrait screenshots work
as-is). The image is scaled with `object-fit: cover`.

## Early-access signup form

The "Früher Zugang" section (`#frueher-zugang`) holds a signup form: first and last
name, e-mail, platform (iOS/Android) and a consent checkbox, all required. It
posts to a Google Apps Script web app that appends each signup to a Google
Sheet; the script's `…/exec` URL is set in `FORM_ENDPOINT` in `js/main.js`. If
that is ever emptied, the form shows an error that points to the e-mail
address. The script lives in the local `SETUP-PILOT-FORM.md`.

Names and e-mail are checked against whitelist patterns twice: in the browser
(`rules` in `js/main.js`, for the visitor's sake) and again in the Apps Script
(`NAME_RE` / `EMAIL_RE`), which is the check that counts, since anyone can post
to the endpoint directly. Keep the two in step. Platform and consent only
accept their fixed values.

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
- [x] Deploy the Apps Script and set `FORM_ENDPOINT` in `js/main.js`
- [ ] Fill in the retention period for signups in `datenschutz.html`
- [ ] Replace screenshot placeholders with real app screenshots
- [ ] Update the store badges in the early-access section once App Store / Play Store listings exist
- [ ] Once the app no longer shows the „Im Zielbereich“ badge (and „INR-Trend“ / „Arztbericht“ are renamed): re-shoot the screenshots, then add the FAQ „Bewertet Medinote meine INR-Werte? – Nein …“ and „bewertet keine Messwerte“ to the boundary note under the features (both are untrue until then)
