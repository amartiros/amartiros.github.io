# Claims audit — Medinote website

Scope: all substantive claims on `index.html`, `anleitung-coaguchek.html`, `anleitung-microinr.html`, and `anleitung-widgets.html`, including the shared English copy in `js/main.js` and `js/widgets-i18n.js`. Status reflects the current branch draft. This is a copy audit, not legal or clinical approval.

## `index.html` (German and English)

| Sentence / claim | Verdict | Rule |
|---|---|---|
| “Ihre Gerinnungstherapie. Sicher dokumentiert.” / “Your anticoagulation therapy. Reliably documented.” | Rewrite → “Ihre Gerinnungstherapie. Klar dokumentiert.” / “Document INR values & medication.” | “Sicher” and “with confidence” can read as a promise of treatment or data safety. The app database is not encrypted by Medinote and network verification is open; state the documentation function without implying a safety result. |
| “Medinote ist ein Tagebuch … Sie halten Ihre Einnahmen im Wochenplan fest …” / “Medinote is a journal … record your medication in a weekly plan …” | Keep | Describes record keeping and user-entered schedules; pair with the explicit no-dosage-advice disclaimer. |
| “Erinnerungen zu Ihren Zeiten … nie abhängig von einem Messwert.” | Keep | Describes user-configured reminders; no clinical interpretation or outcome promise. |
| “Der Wochenplan zeigt Ihre Dosierung … genau wie auf dem Dosierungsplan Ihrer Ärztin oder Ihres Arztes.” | Rewrite | Say it displays the plan the user enters. Do not imply the app checks whether it matches a clinician’s plan. |
| “microINR® und CoaguChek® INRange senden Ihre Messwerte danach in die App, ohne Abtippen. Medinote übernimmt die Werte unverändert und bewertet sie nicht.” | Keep, subject to supported-model verification | Functional transfer statement; retain device ownership note and explicit no affiliation. Verify compatibility against supported hardware before publication. |
| “Erfassen Sie Ihre INR-Werte und sehen Sie den Verlauf als Diagramm.” | Keep | Describes display and record keeping. |
| “Ihr vollständiger Einnahmeverlauf, jederzeit griffbereit beim Arztbesuch.” | Rewrite → “Ihre dokumentierten Einnahmen können Sie beim Arztbesuch zeigen.” | “Vollständig” and “jederzeit” overstate completeness and availability. |
| “Die App legt Einträge in einer Datenbank auf Ihrem Telefon ab.” | Keep with FAQ qualification | Narrow storage fact; do not expand it to an exclusive local-processing or no-server claim before MED-12 is closed. |
| “Medinote ist ein Werkzeug zur Dokumentation und kein Medizinprodukt. Die App bewertet keine Messwerte und gibt keine Dosierungsempfehlungen.” | Keep pending compliance review | Clear intended-purpose limit; must match product behavior and legal classification. |
| “Ihrer Daten … keine Werbung, kein Datenverkauf” | Keep if verified | Operational business-practice claim; verify against actual app and site integrations. |
| “Die Website setzt keine Cookies und bindet keine Analyse-, Karten- oder Schriftdienste von Dritten ein.” | Keep if verified | Technical website claim; confirm after deployment configuration changes. |
| “Die App ist Beta-Software … Teilnahme … freiwillig und kostenlos.” | Keep if current | Accurate pilot status and price statement; update if pilot terms change. |

## `anleitung-coaguchek.html`

| Sentence / claim | Verdict | Rule |
|---|---|---|
| “Ihr CoaguChek® INRange verschlüsselt seine Messwerte.” | Keep if manufacturer documentation confirms | Claim is about the device, not Medinote. Keep ownership and non-endorsement wording nearby. |
| “Danach koppeln Sie beide Geräte per Bluetooth und Ihre INR-Werte kommen von selbst in Medinote an.” | Rewrite → “Nach der Kopplung können Messwerte per Bluetooth in Medinote übernommen werden.” | Avoid implying uninterrupted or guaranteed transfer. |
| “Etwa 5 Minuten Zeit – danach läuft alles automatisch.” | Rewrite → “Planen Sie etwa fünf Minuten für die Einrichtung ein. Für spätere Übertragungen folgen Sie den Schritten in der App und am Messgerät.” | The original promises a setup time and automatic ongoing behavior. |
| “Sobald der Code im Rahmen liegt, wird er automatisch erkannt. Sie müssen nichts weiter drücken.” | Keep if tested on supported devices | Concrete interface behavior; limit it to the described scanning step and test across supported devices. |
| “Die Werte gehen automatisch an die App.” | Rewrite → “Das Messgerät kann die Werte an die App übertragen.” | Avoid guaranteed transfer language. |
| “Der Code wird im Schlüsselspeicher Ihres Betriebssystems abgelegt (iOS Keychain, Android Keystore).” | Keep if verified | Specific technical storage claim; validate both platforms and avoid broader “secure” claims. |
| “Medinote braucht kein Konto … Datenbank auf Ihrem Telefon.” | Keep with caveat | Does not claim exclusive local processing; link to the open network-measurement status and privacy draft. |
| “Medinote ersetzt keine ärztliche Beratung …” | Keep pending compliance review | Safety boundary, not a claimed therapeutic benefit. |

## `anleitung-microinr.html`

| Sentence / claim | Verdict | Rule |
|---|---|---|
| “... INR-Werte danach ganz automatisch.” (meta description and lead) | Rewrite → “... Messwerte nach der Kopplung per Bluetooth in die App übernehmen.” | Avoid absolute automation claims; keep it conditional on supported hardware, pairing, and app state. |
| “Sobald das Ergebnis am Gerät erscheint, wird es automatisch an die App gesendet.” | Rewrite → “Nach der Kopplung kann das Ergebnis per Bluetooth an die App übertragen werden.” | Avoid guarantee of successful transmission. |
| “Neues Gerät: Das Menü öffnet sich automatisch.” | Keep if interface behavior verified | Describes a specific app interaction. |
| “Die App für Menschen unter Gerinnungshemmer-Therapie.” | Keep | Audience description, no therapeutic result claim. |
| Device name “microINR®” | Keep with ownership note | Preserve ® and explain that iLine Microsystems owns the mark; state no partnership or endorsement. |

## `anleitung-widgets.html`

| Sentence / claim | Verdict | Rule |
|---|---|---|
| “Ihr zuletzt eingetragener INR-Wert … genau so, wie er gespeichert ist – und die nächste Messung, die Sie in Medinote geplant haben.” | Keep if widget matches stored data | Describes displayed user-entered information; verify stale-data behavior is clear. |
| “Immer auf dem aktuellen Stand.” | Rewrite → “Nach der Dokumentation aktualisiert sich die Widget-Anzeige.” | “Immer” overpromises freshness; specify the event that triggers refresh. |
| “Sobald Sie die Einnahme in Medinote dokumentieren, zeigt das Widget ‘Heute eingenommen’.” | Keep if refresh behavior tested | Concrete event-based UI claim; avoid implying confirmation of actual medication use. |
| “Die Widget-Daten bleiben auf Ihrem Telefon.” (old copy) | Rewrite / removed | Do not make a local-only processing claim while MED-12 is open; disclose copies and verification status precisely. |
| “Das Widget hält dafür eine eigene Kopie … sie wird bei jeder Löschung mit entfernt.” (current copy) | Keep only if deletion behavior verified | Specific data lifecycle claim; check all deletion paths and platform behavior. |
| “Die Widgets zeigen Ihren gespeicherten Plan.” | Keep | States what is displayed, not that the plan is correct or clinically endorsed. |
| “Medinote ersetzt keine ärztliche Beratung …” | Keep pending compliance review | Safety boundary, not a claimed therapeutic benefit. |

## Outcome and local-processing scan

The reviewed copy contains no explicit promise that Medinote improves INR control, prevents complications, or produces a therapy result. The prior “sicher dokumentiert” wording was removed because its safety meaning is ambiguous and unsubstantiated by the current technical facts. The privacy draft and marketing pages must not say that health data never leaves the phone until MED-12’s network measurement is complete and reviewed. Trademark notes are required on all pages naming either device; no endorsement is implied.

## Remaining factual gates

- Confirm exact supported meter models and the reliability / retry behavior of each transfer guide.
- Verify the CoaguChek device-encryption and widget deletion statements against current app behavior and manufacturer documentation.
- Complete and review the network measurement before making any exclusive local-processing claim.
- Replace founder, portrait, legal, QR destination, and app-store placeholders with confirmed facts before publication.
- Compliance review is required before public release.

## Original copy removed or rewritten in this pass

These are the exact material claims found in the tracked source version before the current copy edits. Unchanged descriptive interface instructions are covered above; this list records each materially revised claim.

| Page | Original sentence | Verdict | Rule / current treatment |
|---|---|---|---|
| `index.html` | “Medinote hilft … einfach zu dokumentieren … automatische microINR®-Übertragung. Ohne Konto nutzbar: Dann bleiben Ihre Daten auf Ihrem Telefon.” | Rewrite | Use feature description without convenience or exclusive-local claim; say data is stored in an on-device database and disclose that network review is open. |
| `index.html` | “Die App für Menschen … automatische microINR®-Übertragung. Ohne Konto nutzbar – dann bleiben Ihre Daten auf Ihrem Telefon.” | Rewrite | Same rule for Open Graph copy; avoid exclusive local-processing claims while MED-12 is open. |
| `index.html` | “Mit Wochenplan und zuverlässigen Erinnerungen behalten Sie Ihre Einnahmen im Griff … Sie brauchen kein Konto: Ohne Anmeldung bleiben alle Daten auf Ihrem Telefon.” | Rewrite | Remove implied adherence benefit and local-only promise; describe user-entered plan, self-set reminders, and no-account availability. |
| `index.html` | “Ohne Konto: Daten bleiben lokal.” | Rewrite | Replace with “Sie entscheiden, was Sie teilen”; do not imply all processing is local. |
| `index.html` | “Medinote meldet sich zur eingestellten Zeit per Push-Benachrichtigung … So bleibt Ihr Einnahmeverlauf lückenlos.” | Rewrite | Keep only the self-set reminder and user documentation behavior; do not promise a complete adherence history. |
| `index.html` | “Einmal per Bluetooth verbinden – fertig. Ihre Messwerte übertragen microINR® und CoaguChek® INRange automatisch in die App: ohne Abtippen, ohne Zahlendreher, ohne Aufwand.” | Rewrite | Remove perfect-transfer / error-prevention promise; describe transfer and unchanged display without promising no errors or effort. |
| `index.html` | “Ihr vollständiger Einnahmeverlauf, jederzeit griffbereit beim Arztbesuch.” | Rewrite | “Complete” and “any time” are not guaranteed; refer only to entries the user recorded and can show. |
| `index.html` | “INR-Trend & Arztbericht als PDF.” | Rewrite | Call it an export or PDF of self-documented values; do not imply a clinician-authored or validated report. |
| `index.html` | “In drei Schritten zu einem verlässlichen Überblick über Ihre Therapie.” | Rewrite | Avoid claiming a reliable therapeutic overview; state that users create their own records. |
| `index.html` | “Zielbereich” (including the chart screenshot alt text) | Rewrite | Use “Referenzbereich,” the approved patient-facing term; do not imply a clinical target set by the app. |
| `index.html` | “Die Erinnerung meldet sich von selbst. INR-Werte übernimmt die App automatisch per Bluetooth …” | Rewrite | State that reminders use user-set times and that readings are imported from the supported meter; avoid guaranteed automatic behavior. |
| `index.html` | “Ohne Konto werden Ihre Gesundheitsdaten … ausschließlich lokal auf Ihrem Telefon gespeichert.” | Rewrite | Remove “exclusively local”; pending network measurement means no claim about where all processing occurs. |
| `index.html` | “Sie können Ihre Daten jederzeit … vollständig löschen … samt Konto, ohne Rückfragen.” | Rewrite | Describe available export/delete controls without absolute completeness, availability, or account-deletion claims. |
| `anleitung-coaguchek.html` | “... danach koppeln Sie beide Geräte per Bluetooth und Ihre INR-Werte kommen von selbst in Medinote an.” | Rewrite | Describe transfer as possible after pairing; do not promise successful or uninterrupted delivery. |
| `anleitung-coaguchek.html` | “Etwa 5 Minuten Zeit – danach läuft alles automatisch.” | Rewrite | Give setup time only as planning guidance; remove the promise that everything later runs automatically. |
| `anleitung-coaguchek.html` | “Der Code bleibt sicher auf Ihrem Telefon gespeichert.” | Rewrite | State the OS key store used; do not use generic “secure” language. |
| `anleitung-coaguchek.html` | “... die Werte gehen automatisch an die App.” | Rewrite | Condition the transfer on an existing pairing and the described device action. |
| `anleitung-coaguchek.html` | “Ohne Anmeldung bleiben Ihre Messwerte auf Ihrem Telefon und werden an keinen Server gesendet.” | Rewrite | Remove the no-server assertion until the shipped-build network measurement is complete and reviewed. |
| `anleitung-microinr.html` | “... übertragen Ihre INR-Werte automatisch.” (meta and Open Graph descriptions) | Rewrite | Describe the guide as pairing and importing meter readings; avoid a blanket automation promise. |
| `anleitung-microinr.html` | “... übertragen Ihre INR-Werte danach ganz automatisch.” | Rewrite | State the transfer steps and conditions; avoid implying that pairing guarantees every later transfer. |
| `anleitung-microinr.html` | “Sobald das Ergebnis am Gerät erscheint, wird es automatisch an die App gesendet.” | Rewrite | Make the app-open requirement explicit and describe Bluetooth transfer as device behavior. |
| `anleitung-widgets.html` | “Immer auf dem aktuellen Stand.” | Rewrite | Replace with event-based wording about updating after a user entry. |
| `anleitung-widgets.html` | “Die Widget-Daten bleiben auf Ihrem Telefon.” | Rewrite | Explain that the widget keeps a device copy and state the deletion behavior; avoid a broad processing-location claim. |

## Hero decision

The original “Sicher dokumentiert” could be read as a therapy-safety promise even though the intended meaning was data security. Because the database is not encrypted by Medinote and network verification is still open, the copy audit challenges the ambiguity and changes it to “Klar dokumentiert.”
