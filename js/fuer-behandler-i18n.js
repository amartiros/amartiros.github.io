/* Copy for fuer-behandler.html. Loaded before main.js, which merges it over
   the shared dictionary (nav and footer come from there). German is also
   written directly in the HTML — keep both in sync, as for index.html.

   This page is read by clinicians, so the wording is a compliance surface,
   not marketing copy. The English strings are a translation and nothing more:
   they must not add a capability, a benefit or a reassurance that the German
   does not already make. In particular the EN text must keep saying that
   Medinote is not a medical device, that it evaluates nothing, and that the
   local-only processing question is still open pending the network
   measurement. If the German changes, change the English in the same edit. */
window.medinotePageTranslations = {
  de: {
    'meta.title': 'Für Behandler – was Ihre Patienten Ihnen mitbringen',
    'meta.description': 'Information für Praxen, Gerinnungs-Schulungszentren und Pflege: Medinote ist eine Dokumentations-App. Patientinnen und Patienten bringen ein PDF ihrer selbst dokumentierten Werte mit. Kein Medizinprodukt, keine Dosierungsempfehlung.',

    'bh.nav.contact': 'Kontakt aufnehmen',

    'bh.eyebrow': 'Für Praxen, Schulungszentren und Pflege',
    'bh.title': 'Was Ihre Patienten Ihnen mitbringen: ein PDF ihrer selbst dokumentierten Werte',
    'bh.lead': 'Medinote ist eine Dokumentations-App, kein Medizinprodukt. Sie ersetzt nichts in Ihrer Sprechstunde – sie ersetzt den Zettel in der Jackentasche.',

    'bh.get.title': 'Was auf dem Ausdruck steht',
    'bh.get.sub': 'Alles darin stammt von der Patientin oder dem Patienten – eingetragen oder vom eigenen Messgerät übernommen.',

    'bh.g1.title': 'INR-Werte mit Datum',
    'bh.g1.text': 'Als Liste und als Verlaufsdiagramm. Daneben der Referenzbereich, den die Patientin oder der Patient selbst eingetragen hat. Unkommentiert.',
    'bh.g2.title': 'Einnahmeverlauf',
    'bh.g2.text': 'Welche Dosis an welchem Tag vorgesehen war und ob die Einnahme als eingenommen oder als ausgelassen markiert wurde – mit Zeitstempel.',
    'bh.g3.title': 'Der hinterlegte Wochenplan',
    'bh.g3.text': 'So, wie die Patientin oder der Patient Ihren Dosierungsplan in die App übertragen hat. Abweichungen vom Plan sehen Sie sofort – und können sie im Gespräch klären.',
    'bh.g4.title': 'Herkunft jedes Wertes',
    'bh.g4.text': 'Erkennbar, ob ein Wert von Hand eingetragen oder per Bluetooth vom Messgerät übernommen wurde. Übernommene Werte sind unverändert.',
    'bh.g5.title': 'Freitext-Notizen',
    'bh.g5.text': 'Freiwillige Einträge – etwa ein Infekt, eine Umstellung, eine Reise. Nur das, was die Person selbst notiert hat.',
    'bh.g6.title': 'Was nicht darin steht',
    'bh.g6.text': 'Keine Bewertung, keine Einordnung, keine Kennzahl wie TTR, keine Dosierungsempfehlung, kein Hinweis auf eine Handlung. Die App rechnet nichts aus.',

    'bh.limit.title': 'Die Abgrenzung, in einem Absatz',
    'bh.limit.p1': 'Medinote ist eine persönliche Dokumentations-App. Sie speichert und zeigt an, was die Nutzerin oder der Nutzer eingibt oder importiert. Ein angezeigter Referenzbereich wird von der Person selbst eingetragen und von ihr selbst ausgelegt. Medinote diagnostiziert nicht, bewertet nicht, klassifiziert nicht, behandelt nicht, empfiehlt keine Dosierung und trifft keine automatisierten Entscheidungen über einen Messwert.',
    'bh.limit.p2': 'Die App trägt keine CE-Kennzeichnung als Medizinprodukt und ist keine DiGA. Das Messgerät – microINR® oder CoaguChek® INRange – bleibt das Medizinprodukt seines Herstellers; Medinote übernimmt dessen Werte unverändert.',

    'bh.role.title': 'Was das für Ihre Sprechstunde heißt',
    'bh.role.1': '<strong>Die Verordnung bleibt bei Ihnen.</strong> Die App enthält keinen Weg, auf dem eine Dosisänderung an die Patientin oder den Patienten gelangen könnte.',
    'bh.role.2': '<strong>Sie bekommen kein Konto und keinen Zugriff.</strong> Es gibt kein Praxis-Dashboard und keine Übermittlung an Sie. Sie sehen, was die Person Ihnen zeigt oder ausdruckt – nicht mehr.',
    'bh.role.3': '<strong>Die Angaben sind Selbstauskunft.</strong> Ein Eintrag kann vergessen, nachgetragen oder falsch sein. Behandeln Sie den Ausdruck wie ein ausgefülltes Patiententagebuch, nicht wie einen Laborbefund.',
    'bh.role.4': '<strong>Der Gerinnungsausweis bleibt.</strong> Wir sagen das den Testerinnen und Testern ausdrücklich: Die App ersetzt ihn nicht.',

    'bh.data.title': 'Datenschutz – kurz für Fachkreise',
    'bh.data.1': 'Die App ist ohne Konto nutzbar. Die Einträge liegen in einer Datenbank auf dem Telefon der Person; Medinote verschlüsselt diese Datenbank nicht selbst, sie ist durch Bildschirmsperre und Geräteverschlüsselung des Betriebssystems geschützt.',
    'bh.data.2': 'Dass die ausgelieferte App keine Verbindungen aufbaut, die in der Datenschutzerklärung nicht genannt sind, wird derzeit mit einer Netzwerkmessung nachgewiesen. Bis das Ergebnis vorliegt, behaupten wir keine rein lokale Verarbeitung.',
    'bh.data.3': 'Ein Schulungszentrum, das Medinote weiterempfiehlt, erhält keine Daten aus der App und keine individuellen Rückmeldungen.',
    'bh.data.4': 'Eine Weitergabe an Sie erfolgt nur dadurch, dass die Patientin oder der Patient einen Export selbst teilt.',

    'bh.pilot.title': 'Zusammenarbeit im Pilotprojekt',
    'bh.pilot.p1': 'Medinote sucht Gerinnungs-Schulungszentren und Praxen, die ihren Patientinnen und Patienten die Teilnahme an der Pilotphase anbieten möchten. Der Aufwand für Sie soll bei null liegen: Sie geben ein Informationsblatt weiter, mehr nicht.',
    'bh.pilot.p2': 'Was dafür vorher schriftlich geklärt sein muss – Rollen nach DSGVO, Teilnehmerinformation und Eskalationsweg – klären wir vor einer Zusage, nicht danach. Vor dieser Klärung sagen wir Ihnen keine Pilotteilnahme und kein Startdatum zu.',
    'bh.pilot.p3': 'Interesse oder Rückfragen: <a href="mailto:kontakt@medi-note.de?subject=Medinote%20%E2%80%93%20Anfrage%20Fachkreise">kontakt@medi-note.de</a>',

    'bh.voices.title': 'Rückmeldungen aus Praxen und Schulungszentren',
    'bh.voices.sub': 'Wird gefüllt, sobald benannte Fachpersonen der Veröffentlichung schriftlich zugestimmt haben.',

    'bh.cta.title': 'Sprechen wir darüber',
    'bh.cta.text': 'Eine Mail genügt. Sie erreichen direkt die Person, die die App entwickelt – kein Vertrieb, kein Formular.',
    'bh.cta.button': 'E-Mail schreiben',
    'bh.cta.button2': 'FAQ lesen'
  },

  en: {
    'meta.title': 'For healthcare professionals – what your patients bring you',
    'meta.description': 'Information for practices, anticoagulation training centres and nursing staff: Medinote is a documentation app. Patients bring a PDF of the values they recorded themselves. Not a medical device, no dosing advice.',

    'bh.nav.contact': 'Get in touch',

    'bh.eyebrow': 'For practices, training centres and nursing staff',
    'bh.title': 'What your patients bring you: a PDF of the values they recorded themselves',
    'bh.lead': 'Medinote is a documentation app, not a medical device. It replaces nothing in your consultation – it replaces the scrap of paper in the coat pocket.',

    'bh.get.title': 'What the printout contains',
    'bh.get.sub': 'Everything in it comes from the patient – entered by hand or taken from their own meter.',

    'bh.g1.title': 'INR values with dates',
    'bh.g1.text': 'As a list and as a trend chart. Next to it, the reference range the patient entered themselves. Without comment.',
    'bh.g2.title': 'Intake history',
    'bh.g2.text': 'Which dose was planned on which day, and whether the intake was marked as taken or as skipped – with a timestamp.',
    'bh.g3.title': 'The weekly plan on file',
    'bh.g3.text': 'As the patient transferred your dosing plan into the app. You see deviations from the plan immediately – and can discuss them.',
    'bh.g4.title': 'The origin of every value',
    'bh.g4.text': 'You can tell whether a value was entered by hand or taken from the meter over Bluetooth. Imported values are unchanged.',
    'bh.g5.title': 'Free-text notes',
    'bh.g5.text': 'Voluntary entries – an infection, a change of treatment, a trip. Only what the person noted themselves.',
    'bh.g6.title': 'What it does not contain',
    'bh.g6.text': 'No assessment, no interpretation, no metric such as TTR, no dosing advice, no prompt to act. The app calculates nothing.',

    'bh.limit.title': 'Where the line sits, in one paragraph',
    'bh.limit.p1': 'Medinote is a personal documentation app. It stores and displays what the user enters or imports. A displayed reference range is entered by the person themselves and interpreted by them. Medinote does not diagnose, does not assess, does not classify, does not treat, does not recommend a dose and makes no automated decisions about a measured value.',
    'bh.limit.p2': 'The app carries no CE marking as a medical device and is not a DiGA. The meter – microINR® or CoaguChek® INRange – remains the medical device of its manufacturer; Medinote takes over its values unchanged.',

    'bh.role.title': 'What this means for your consultation',
    'bh.role.1': '<strong>The prescription stays with you.</strong> The app contains no route by which a dose change could reach the patient.',
    'bh.role.2': '<strong>You get no account and no access.</strong> There is no practice dashboard and no transmission to you. You see what the person shows you or prints out – nothing more.',
    'bh.role.3': '<strong>The entries are self-reported.</strong> An entry can be forgotten, added later or wrong. Treat the printout like a completed patient diary, not like a laboratory report.',
    'bh.role.4': '<strong>The anticoagulation card stays.</strong> We say this to our testers explicitly: the app does not replace it.',

    'bh.data.title': 'Data protection – briefly, for professionals',
    'bh.data.1': 'The app can be used without an account. Entries are held in a database on the person’s phone; Medinote does not encrypt that database itself, it is protected by the screen lock and the device encryption of the operating system.',
    'bh.data.2': 'That the shipped app opens no connections beyond those named in the privacy notice is currently being established by a network measurement. Until that result is in, we claim no purely local processing.',
    'bh.data.3': 'A training centre that recommends Medinote receives no data from the app and no individual feedback.',
    'bh.data.4': 'Data reaches you only because the patient shares an export themselves.',

    'bh.pilot.title': 'Working together in the pilot',
    'bh.pilot.p1': 'Medinote is looking for anticoagulation training centres and practices that would like to offer their patients a place in the pilot phase. The effort for you should be zero: you pass on an information sheet, nothing else.',
    'bh.pilot.p2': 'What has to be settled in writing beforehand – roles under the GDPR, participant information and the escalation route – we settle before we commit, not afterwards. Until that is settled we promise you no pilot participation and no start date.',
    'bh.pilot.p3': 'Interested, or have questions? <a href="mailto:kontakt@medi-note.de?subject=Medinote%20%E2%80%93%20Anfrage%20Fachkreise">kontakt@medi-note.de</a>',

    'bh.voices.title': 'Feedback from practices and training centres',
    'bh.voices.sub': 'To be filled once named professionals have agreed in writing to publication.',

    'bh.cta.title': 'Let us talk',
    'bh.cta.text': 'One e-mail is enough. You reach the person who develops the app directly – no sales team, no form.',
    'bh.cta.button': 'Write an e-mail',
    'bh.cta.button2': 'Read the FAQ'
  }
};
