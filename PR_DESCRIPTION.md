# Medinote website credibility pack and claims audit

## Summary

Adds the German credibility pages, English copy where the site supports English, and a `/pilot/` entry page. Rewrites claims that could imply a treatment outcome, guaranteed freshness, complete records, guaranteed transfer, or unverified local-only processing. Leaves founder facts, portrait, QR destination, app distribution links, and legal fields as explicit placeholders. Legal pages remain noindex drafts and are not cleared for publication.

## Files touched

- `index.html` — navigation/footer links, hero/meta wording, no-dosage and privacy copy, empty testimonial section.
- `anleitung-coaguchek.html` — qualified setup and transfer wording, privacy clarification, credibility-page footer links.
- `anleitung-microinr.html` — qualified transfer wording, trademark note and credibility-page footer links.
- `anleitung-widgets.html` — widget freshness copy and credibility-page footer links.
- `css/style.css` — styles for credibility pages and empty testimonial section.
- `datenschutz.html` — ART-5 draft text with unresolved factual markers; removed unverified exclusive-local and no-third-party-transfer assertions; remains noindex.
- `impressum.html` — ART-5 draft with unresolved factual markers and both entity variants; remains noindex.
- `faq.html` — FAQ for intended purpose, data protection, supported meters, beta status, cost, and participation.
- `fuer-behandler.html` — documentation-only explainer, including the patient-provided PDF framing.
- `ueber-uns.html` — solo-founder placeholders, photo slot, why-story, and empty personal-story field.
- `pilot/index.html` — `/pilot/` installation landing page with nonfunctional QR and store-link placeholders.
- `js/main.js` — shared DE/EN navigation and copy, revised hero and no unsupported local-only claim.
- `js/widgets-i18n.js` — DE/EN widget freshness wording.
- `js/faq-i18n.js` — DE/EN FAQ copy and pending network-measurement statement.
- `js/ueber-uns-i18n.js` — DE/EN About page copy.
- `js/pilot-i18n.js` — DE/EN Pilot page copy.
- `claims-audit.md` — sentence-level audit of the four assigned source pages.
- `PR_DESCRIPTION.md` — this review summary.

## Claims changed

- Changed “Ihre Gerinnungstherapie. Sicher dokumentiert.” and “Your anticoagulation therapy. Reliably documented.” to “Ihre Gerinnungstherapie. Klar dokumentiert.” and “Your anticoagulation therapy. Clearly documented.”
- Removed wording that implied the app displays a clinician-verified dosing plan; describe the user-entered plan instead.
- Replaced “vollständiger Einnahmeverlauf” / “complete intake history” and “jederzeit griffbereit” with a statement about showing recorded entries.
- Removed “Pilotphase … ohne Serverübertragung” and other assertions that no health data leaves the device or that Bluetooth use cannot create other connections. State that network measurement remains open.
- Reworded meter-guide transfer claims to describe the Bluetooth action without promising uninterrupted or guaranteed transfer. Kept device behavior claims limited to the described conditions.
- Replaced “Immer auf dem aktuellen Stand” / “Always up to date” with event-based widget update wording, and removed the implication that a widget confirms medication was actually taken.
- Kept the hero focused on documentation; no claim that Medinote improves therapy, stabilizes INR, prevents complications, or recommends doses.

## Review gates

- Founder must provide the real name, bio, first-person why-story, and portrait.
- ART-5 legal drafts still contain `[[TBD: ...]]` fields and require founder facts and legal review.
- Confirm app-store links and the final `/pilot/` QR destination.
- Complete and review the network measurement before making local-only processing claims.
- Compliance review is required before public release. This PR must remain unmerged for founder review.

### Specific source claims revised

- `index.html` metadata no longer promises “sicher” documentation, easy use, automatic microINR transfer, or that data stays on the phone without an account.
- The home-page lead no longer says users “behalten … Einnahmen im Griff”; reminder copy no longer promises a “lückenlos” intake record; reliability claims for reminders are removed.
- The device feature no longer promises no typos or no effort. Medication history is described as recorded entries rather than complete and always available.
- Replaced “INR-Trend & Arztbericht als PDF” with a self-documented values description, and “Zielbereich” with “Referenzbereich.”
- Replaced the claim that all health data is stored “ausschließlich lokal” and the guide’s “werden an keinen Server gesendet” with the pending network-measurement disclosure.
- The CoaguChek guide no longer says everything runs automatically after a five-minute setup or that transfer always happens; it describes setup and paired transfer conditions. The device-code note names the OS key store instead of saying only “sicher”.
- The microINR guide no longer promises automatic transfer in metadata or guarantees transfer as soon as a result appears; it names the Bluetooth step and requirement to keep the app open.
- Widget copy no longer says “Immer auf dem aktuellen Stand” or broadly says widget data stays on the phone; it describes refresh after an entry and the separate device copy.
- The hero was challenged and changed from “Sicher dokumentiert” to “Klar dokumentiert” because security and therapy safety could be confused, and the underlying technical evidence is incomplete.
