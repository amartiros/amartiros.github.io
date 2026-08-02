# Brand & Content Review — medi-note.de

**Reviewed:** 2 August 2026 · index.html, anleitung-microinr.html, anleitung-coaguchek.html, impressum.html, datenschutz.html, js/main.js (DE + EN dictionaries), css/style.css
**Live check:** https://medi-note.de is publicly reachable
**Guidelines used:** none configured — reviewed against the site's own implicit voice, general clarity/consistency standards, and German healthtech compliance norms (DDG, DSGVO, HWG, UWG)

> Not legal advice. The compliance items below are risk flags, not legal conclusions — the DDG/DSGVO/HWG points should be confirmed by a lawyer with German Medizinprodukte- and Wettbewerbsrecht experience.

---

## Summary

**Overall:** The voice is well-judged for the audience — calm, plain-spoken, respectful, and clearly built by someone who has watched an older patient use a CoaguChek. The CoaguChek pairing guide in particular is better than most manufacturer documentation. The problems are not craft problems; they are **claim problems**, and they are concentrated in the highest-visibility copy on the page.

**Biggest strengths:** patient-first language and specificity (real drug names, real device menus, real troubleshooting); genuine accessibility care (17px base, high contrast, descriptive alt text, unobtrusive gendered forms); trademark and non-affiliation handling that is more thorough than most competitors bother with.

**Most important fixes:** the site is live with placeholder Impressum and Datenschutzerklärung — an immediate Abmahnung exposure in Germany. And the three loudest claims on the page (`DSGVO-konform`, `Nie wieder eine Einnahme vergessen`, `alle Daten bleiben auf Ihrem Telefon`) are each stronger than what the product can currently substantiate, with the last one contradicted by the site's own privacy section.

---

## Detailed findings

| # | Issue | Location | Severity | Suggestion |
|---|-------|----------|----------|------------|
| H1 | Live site with placeholder legal pages, including a visible internal note ("vor Veröffentlichung ersetzen") | impressum.html, datenschutz.html | **High** | Fill both today or take the site offline. `noindex` prevents indexing, not liability |
| H2 | "DSGVO-konform" asserted while the privacy policy one click away is unfinished | Trust bar, `og:description` | **High** | Replace the compliance label with the verifiable fact |
| H3 | "Nie wieder eine Einnahme vergessen" — outcome promise on a safety-critical therapy | features.reminders.text (DE + EN) | **High** | Promise the function, not the outcome |
| H4 | "alle Daten bleiben auf Ihrem Telefon" stated absolutely, then walked back by the optional-account section; CoaguChek guide goes further ("sendet Ihre Messwerte an keinen Server") | hero.lead, trust bar, meta + og description, anleitung-coaguchek.html | **High** | Qualify with "ohne Konto" wherever the absolute form appears |
| H5 | No person or company named anywhere on the site — no About, no team, no advisor, and the Impressum is a placeholder | site-wide | **High** | Add a short "Wer hinter Medinote steht" block |
| M1 | Three competing terms for the same therapy: Gerinnungstherapie / Antikoagulations-Therapie / Gerinnungshemmer-Therapie | hero.title, hero.lead, footer.claim | Medium | Pick one primary term; add "Blutverdünner" — the patient's own word, absent from the site entirely |
| M2 | DE "Sicher dokumentiert" is a stronger claim than EN "Reliably documented" | hero.title / meta.title | Medium | Align DE down to "Zuverlässig dokumentiert" |
| M3 | Both Anleitung pages are German-only — no `data-i18n`, no language switch | anleitung-*.html | Medium | The trust bar promises "Deutsch & Englisch"; EN visitors hit a dead end |
| M4 | "Und das Beste:" — infomercial register inside an otherwise clinical voice | hero.lead (DE + EN) | Medium | Cut |
| M5 | "ohne Rückfragen" frames deletion as a courtesy | privacy.export.text | Medium | Deletion is an Art. 17 right — state it plainly |
| M6 | `mailto:` is the only conversion path, with no Art. 13 notice at point of collection | cta.button, footer | Medium | Minimal form + one-line privacy note + link to the finished Datenschutzerklärung |
| M7 | The target-range feature is the one that edges toward interpretation; the disclaimer supporting the documentation-tool reading sits far below in another section | features.inr.text | Medium | Add a one-line "Dokumentation, keine Bewertung" note in or under that card |
| M8 | App Store badge uses the Apple  private-use glyph — renders as a tofu box on Windows/Android; "bald verfügbar" has no date | index.html:251 | Medium | Use an SVG or drop the glyph; consider "In Vorbereitung" |
| L1 | `og:description` / `og:title` still say "DSGVO-konform" and are not updated by the language switch (only `meta[name=description]` is) | index.html, main.js:182 | Low | Extend `setLanguage()` to the OG tags |
| L2 | Emoji used as feature icons render inconsistently across platforms — 🇪🇺 shows as "EU" letters on Windows | features, privacy, trust bar | Low | Inline SVG. (Correctly `aria-hidden`, so no a11y issue) |
| L3 | `--accent #c0564e` on white = **4.48:1**, just under WCAG AA's 4.5:1, and it is used for normal-size inline links | css/style.css, index.html:105–106 | Low | `#b64f47` or `--accent-dark` for inline links. Rest of the palette passes: ink 15.7:1, ink-soft 6.9:1, white-on-accent 4.48:1 (AA large only) |
| L4 | Screenshot filenames `IMG_9513.PNG` etc. | assets/screenshots/ | Low | Descriptive slugs — free SEO, easier maintenance |
| L5 | No `canonical`, `sitemap.xml`, `robots.txt`, or `og:locale` | index.html | Low | Add before any promotion |
| L6 | `noindex` on impressum.html and datenschutz.html | both | Low | These are legitimacy signals; generally worth indexing |
| L7 | README "before going live" checklist is stale — screenshots are done, legal pages are not, but the site shipped anyway | README.md:59–65 | Low | Reconcile, or the checklist stops being trusted |

---

## Revised sections

### 1 — Trust bar: GDPR claim (H2)

**Before**
```
🇪🇺 DSGVO-konform
```

**After**
```
🇪🇺 Daten in der EU verarbeitet     ← only if true
```
or, safer and stronger for this audience:
```
✓ Keine Registrierung nötig
```

Also remove "DSGVO-konform" from `og:description`. "Compliant" is a legal conclusion about a product whose privacy policy is currently a placeholder; the *facts* (no account, local storage, no ads, no data selling) are more persuasive anyway and carry no risk.

---

### 2 — Reminders feature (H3)

**Before (DE)**
> **Erinnerungen, auf die Verlass ist**
> Nie wieder eine Einnahme vergessen: Medinote erinnert Sie pünktlich per Push-Benachrichtigung – und mit einem Tipp markieren Sie die Einnahme direkt als „Eingenommen" oder „Nicht eingenommen".

**After (DE)**
> **Erinnerungen, die sich pünktlich melden**
> Medinote meldet sich zur eingestellten Zeit per Push-Benachrichtigung – mit einem Tipp markieren Sie die Einnahme direkt als „Eingenommen" oder „Nicht eingenommen". So bleibt Ihr Einnahmeverlauf lückenlos.

**Before (EN)** — "Never miss a dose again: …"
**After (EN)** — "A reminder arrives right on time: …"

*Why:* anticoagulation is precisely the therapy where a missed or doubled dose causes harm, and push notifications fail routinely (Do Not Disturb, battery optimisation, revoked permissions, phone off). Promising the outcome rather than the function is an over-claim under HWG § 3 and contradicts your own disclaimer that Medinote "ist ein Werkzeug zur Dokumentation". Note the heading already does this correctly — "auf die Verlass ist" is about the reminder, not the patient.

---

### 3 — Hero lead: local-storage claim (H4)

**Before**
> …Und das Beste: Sie brauchen kein Konto – alle Daten bleiben auf Ihrem Telefon.

**After**
> …Sie brauchen kein Konto: Ohne Anmeldung bleiben alle Daten auf Ihrem Telefon.

Same qualifier needed in `meta.description`, `og:description`, and the trust bar. And in the CoaguChek guide, which currently states the strongest version of all:

**Before** — „Medinote braucht kein Konto und sendet Ihre Messwerte an keinen Server."
**After** — „Ohne Konto bleiben Ihre Messwerte auf Ihrem Telefon und werden an keinen Server gesendet."

*Why:* your own privacy section says an optional account means data is "verschlüsselt übertragen", and datenschutz.html names Firebase/Google. Both can be true — but the unqualified version isn't accurate for account users, and a privacy over-claim is the fastest way to lose exactly this audience. Fixes M4 in the same edit.

Also: the trust-bar key is `trust.encrypted` but its text is about local storage. Rename to `trust.local` before someone edits the wrong string.

---

### 4 — Missing credibility block (H5)

Add between the privacy section and the pilot CTA:

> ## Wer hinter Medinote steht
> Medinote wird von [Name] in [Ort] entwickelt — [ein Satz: warum. Eigene Betroffenheit, Angehörige, klinischer Hintergrund]. Fragen und Kritik gehen direkt an mich: kontakt@medi-note.de
>
> *[Falls vorhanden: fachliche Begleitung durch …]*

You are asking patients to trust an unnamed party with INR values and medication history, during a pilot, with a placeholder Impressum. Nothing else on this list moves conversion as much as putting a name and a reason on the page.

---

### 5 — Terminology (M1)

Standardise on **one** primary term. Recommended hierarchy:

| Context | Term |
|---------|------|
| H1 / primary | Gerinnungshemmer-Therapie |
| Body, second reference | Antikoagulation, Blutverdünner |
| Never mixed in one viewport | — |

"Blutverdünner" appears nowhere on the site, yet it is what patients say and search. Working it in once — e.g. „…unter Gerinnungshemmern (‚Blutverdünnern')" — costs one clause and buys both comprehension and search visibility. "Marcumar App", "Blutverdünner App" and "INR App" are all higher-volume patient queries than "Antikoagulation".

---

## Legal / compliance flags

| Flag | Detail | Recommended action |
|------|--------|--------------------|
| **§ 5 DDG — Impressum** | Live site, placeholder content, no ladungsfähige Anschrift. Classic Abmahnung trigger in Germany | Fill today or take offline. Note: a home address is required for a private individual unless you form a UG/GmbH — many solo founders form a UG partly for this reason |
| **Art. 12–14 DSGVO — Datenschutzerklärung** | Placeholder, on a site whose product processes Art. 9 health data. Missing: GitHub Pages hosting/server logs, Firebase details, processors, retention, EU/US transfers, supervisory authority | Complete before any promotion. A template exists per README (`Datenschutzerklaerung.docx`) |
| **UWG — irreführende Werbung** | "DSGVO-konform" asserted while the privacy policy is unfinished; "alle Daten bleiben auf Ihrem Telefon" contradicted by the account path | See revisions 1 and 3 |
| **HWG § 3** | "Nie wieder eine Einnahme vergessen" — outcome claim for a health product | See revision 2 |
| **EU MDR Rule 11 / MDCG 2019-11** | Documentation and archiving is generally out of scope; automatic meter ingest plus target-range display plus a generated "Arztbericht" moves toward the boundary. Your disclaimers are the right instinct — the risk is that they are inconsistent and far from the claims they qualify | Have a Medizinprodukterecht advisor confirm the classification. Meanwhile keep documentation-tool framing adjacent to every interpretive-looking feature |
| **Art. 13 at point of collection** | The pilot signup collects an email address with no privacy information at the collection point | Add a one-line notice + policy link to the CTA |
| **Trademark** | microINR® and CoaguChek® correctly marked with ® and a clear non-affiliation statement, repeated on both guide pages | No action — this is done well |
| **Testimonials / comparatives** | None present | No action |

---

## What's working — keep it

- **The CoaguChek guide.** Menu breadcrumbs, CSS device mockups, "Was Sie dafür brauchen", and a real troubleshooting section that anticipates actual failure modes. This is a genuine asset — it will pull search traffic from people who own the device and can't get it working, regardless of your app.
- **Alt text.** Specific and descriptive throughout, not filename-dumped.
- **`font-size: 17px` with the comment "audience includes elderly readers".** Small decision, right instinct, and the code comments it.
- **Gendered forms** ("Ihrer Ärztin oder Ihres Arztes") applied consistently without becoming clunky.
- **Number formatting** correctly localised — `2,0–3,0` in DE, `2.0–3.0` in EN.
- **The disclaimer itself** is well written. It just needs to appear where the claims are, not only at the end.
