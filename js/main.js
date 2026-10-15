/* Medinote marketing site — language toggle, nav, reveal animations. */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     i18n — German is the default language and is written directly in
     the HTML. The dictionaries below must stay in sync with index.html.
     ------------------------------------------------------------------ */
  var translations = {
    de: {
      'meta.title': 'Medinote – das digitale INR-Tagebuch mit Einnahme-Erinnerung',
      'meta.description': 'Das digitale INR-Tagebuch für alle, die Gerinnungshemmer („Blutverdünner“) nehmen: Einnahmen abhaken, INR-Werte vom Messgerät übernehmen, alles griffbereit beim Arzttermin. Ohne Konto nutzbar.',

      'nav.features': 'Funktionen',
      'nav.screenshots': 'Einblicke',
      'nav.how': 'So funktioniert’s',
      'nav.privacy': 'Datenschutz',
      'nav.contact': 'Früher Zugang',

      'hero.badge': 'Jetzt vor allen anderen testen',
      'hero.title': 'Ihr INR-Tagebuch. Endlich digital.',
      'hero.lead': 'Medinote ist das digitale Tagebuch für alle, die Gerinnungshemmer („Blutverdünner“) wie Marcumar®, Falithrom® oder Warfarin nehmen: Einnahmen mit einem Tipp abhaken, INR-Werte direkt von microINR® oder CoaguChek® INRange übernehmen – und beim Arzttermin alles griffbereit haben. Ohne Konto bleiben alle Daten auf Ihrem Telefon.',
      'hero.ctaPrimary': 'Frühen Zugang sichern',
      'hero.ctaSecondary': 'Funktionen ansehen',

      'trust.local': 'Ohne Konto: Daten bleiben lokal',
      'trust.device': 'Werte direkt vom Messgerät',
      'trust.noads': 'Keine Werbung, kein Datenverkauf',
      'trust.languages': 'Deutsch & Englisch',

      'problem.title': 'Kennen Sie das?',
      'problem.text': 'Die INR-Werte stehen im Gerinnungspass, der Dosierungsplan hängt am Kühlschrank, die Strichliste für die Tabletten liegt irgendwo auf einem Zettel – und beim Arzttermin fehlt genau der eine Wert.',
      'problem.punch': 'Medinote bringt alles an einen Ort.',

      'features.title': 'Alles notiert. Alles dabei.',
      'features.sub': 'Entwickelt für den Alltag mit Gerinnungshemmern: übersichtlich, gut lesbar und einfach zu bedienen.',
      'features.reminders.title': 'Erinnern. Abhaken. Fertig.',
      'features.reminders.text': 'Medinote meldet sich zu der Uhrzeit, die Sie festlegen. Ein Tipp auf die Benachrichtigung – „Eingenommen“ oder „Nicht eingenommen“ – und Ihr Einnahmeprotokoll ist auf dem neuesten Stand.',
      'features.weekplan.title': 'Halbe Tablette am Montag?',
      'features.weekplan.text': 'Kein Problem: Tragen Sie den Dosierungsplan Ihrer Ärztin oder Ihres Arztes einmal ein – der Wochenplan zeigt jeden Tag, was laut Plan dran ist. Ändert Ihre Praxis den Plan, passen Sie ihn mit wenigen Tipps an.',
      'features.device.title': 'Gemessen – schon notiert.',
      'features.device.text': 'Einmal per Bluetooth verbinden – fertig. Ihre Messwerte übertragen microINR® und CoaguChek® INRange automatisch in die App: ohne Abtippen, ohne Zahlendreher, ohne Aufwand.',
      'features.device.link1': 'Anleitung: microINR® koppeln →',
      'features.device.link2': 'Anleitung: CoaguChek® INRange koppeln →',
      'features.inr.title': 'Ihre INR-Werte – übersichtlich gesammelt',
      'features.inr.text': 'Ihre INR-Werte als Liste und als Diagramm – vom Messgerät übernommen oder von Hand eingetragen. Den Referenzbereich, den Ihre Ärztin oder Ihr Arzt Ihnen vorgegeben hat, können Sie im Diagramm einblenden.',
      'features.meds.title': 'Medikamenten-Tagebuch',
      'features.meds.text': 'Marcumar®/Falithrom®, Warfarin, Acenocoumarol und weitere Medikamente mit einem Tipp festhalten – Ihr vollständiger Einnahmeverlauf, griffbereit beim Arzttermin oder als PDF zum Ausdrucken.',
      'features.local.title': 'Ihre Daten bleiben bei Ihnen',
      'features.local.text': 'Medinote funktioniert ganz ohne Konto: Ohne Registrierung werden alle Daten ausschließlich auf Ihrem Telefon gespeichert. Ein Konto erstellen Sie nur, wenn Sie es möchten.',

      'boundary.title': 'Ihre Praxis entscheidet. Medinote notiert.',
      'boundary.text': 'Medinote ist Ihr Tagebuch – nicht Ihr Arzt. Die App speichert, was Sie eintragen oder Ihr Messgerät überträgt, erinnert Sie an Ihren eigenen Plan und erstellt auf Wunsch eine PDF-Übersicht. Sie schlägt keine Dosis vor und gibt keine Therapieempfehlungen – über Ihre Dosierung entscheiden Sie immer gemeinsam mit Ihrer Ärztin oder Ihrem Arzt.',

      'wx.badge': 'Neu: Widgets für iPhone & Android',
      'wx.title': 'Ihr Tag auf einen Blick – ohne die App zu öffnen',
      'wx.lead': 'Die Medinote-Widgets zeigen auf dem iPhone-Sperrbildschirm oder dem Android-Startbildschirm, ob die heutige Einnahme noch offen ist oder schon dokumentiert wurde – dazu Ihren letzten INR-Wert und die nächste geplante Messung.',
      'wx.b1.title': '„Heute einnehmen · 20:00“',
      'wx.b1.text': 'Mit Medikament und Dosis aus Ihrem Plan – bis Sie die Einnahme dokumentieren.',
      'wx.b2.title': '„Heute eingenommen“',
      'wx.b2.text': 'Sobald alles für heute als eingenommen markiert ist – mit der nächsten Einnahme.',
      'wx.b3.title': 'Diskreter Modus',
      'wx.b3.text': 'Auf Wunsch ohne Medikamentennamen, Dosen und INR-Werte.',
      'wx.ctaIphone': 'Anleitung: iPhone',
      'wx.ctaAndroid': 'Anleitung: Android',
      'wx.note': 'iPhone ab iOS 16. Die Widgets zeigen Ihren gespeicherten Plan – Ihre Erinnerungen erhalten Sie weiterhin als Benachrichtigung.',
      'wx.w.take': 'Heute einnehmen · 20:00',
      'wx.w.dose': '1,5 Tabletten · 4,5 mg',
      'wx.w.taken': 'Heute eingenommen',
      'wx.w.next': 'Nächste: Morgen, 20:00',
      'wx.w.inr': '2,4',
      'wx.w.nextCheck': 'Nächste Messung:',

      'shots.title': 'Ein Blick in die App',
      'shots.sub': 'Klare Oberfläche, große Schrift, hoher Kontrast – gestaltet für den täglichen Gebrauch.',
      'shots.cap1': 'INR-Verlauf mit Referenzbereich',
      'shots.cap2': 'Verlauf & PDF für den Arzttermin',
      'shots.cap3': 'Wochenplan mit Tablettenübersicht',
      'shots.cap4': 'Erinnerungen nach Ihrem Plan',

      'how.title': 'So funktioniert’s',
      'how.sub': 'In drei Schritten zu Ihrem digitalen INR-Tagebuch.',
      'how.s1.title': 'Loslegen – ohne Konto',
      'how.s1.text': 'App öffnen und direkt starten, ganz ohne Registrierung. Gerinnungshemmer auswählen, dann Wochenplan und INR-Referenzbereich so eintragen, wie Ihre Ärztin oder Ihr Arzt sie vorgegeben hat – fertig.',
      'how.s2.title': 'Notieren',
      'how.s2.text': 'Einnahmen mit einem Tipp abhaken, sobald die Erinnerung kommt. INR-Werte übernimmt die App per Bluetooth vom Messgerät (microINR® oder CoaguChek® INRange) – oder Sie tragen sie von Hand ein.',
      'how.s3.title': 'Mitnehmen',
      'how.s3.text': 'Beim Arzttermin den Verlauf zeigen oder als PDF ausdrucken – und Ihre Daten jederzeit als Datei exportieren. Ohne Konto bleibt dabei alles auf Ihrem Telefon.',

      'privacy.title': 'Ihre Daten gehören Ihnen',
      'privacy.sub': 'Gesundheitsdaten sind besonders sensibel. Deshalb gilt bei Medinote: Ohne Konto bleibt alles auf Ihrem Telefon – ein Konto ist freiwillig. Entwickelt von Anfang an nach den Vorgaben der DSGVO.',
      'privacy.local.title': 'Kein Konto nötig',
      'privacy.local.text': 'Nutzen Sie Medinote sofort und ohne Registrierung. Ohne Konto werden Ihre Gesundheitsdaten – INR-Werte und Medikationseinträge – ausschließlich lokal auf Ihrem Telefon gespeichert.',
      'privacy.consent.title': 'Konto? Nur wenn Sie möchten',
      'privacy.consent.text': 'Ein Konto ist optional. Wenn Sie eines erstellen, werden Ihre Daten verschlüsselt übertragen – und nur mit Ihrer ausdrücklichen Einwilligung verarbeitet (DSGVO Art. 6 und 9), jederzeit widerrufbar.',
      'privacy.export.title': 'Export & Löschung',
      'privacy.export.text': 'Sie können Ihre Daten jederzeit in der App exportieren und vollständig löschen – auf Wunsch samt Konto, ohne Rückfragen.',
      'privacy.noads.title': 'Keine Werbung, kein Datenverkauf',
      'privacy.noads.text': 'Medinote zeigt keine Werbung und verkauft keine Daten. Wir erheben nur, was für die Funktion der App notwendig ist.',

      'faq.title': 'Häufige Fragen',
      'faq.q1': 'Sagt mir Medinote, wie viel ich nehmen soll?',
      'faq.a1': 'Nein. Ihre Dosis legt Ihre Ärztin oder Ihr Arzt fest. Medinote zeigt den Plan, den Sie eingetragen haben, und erinnert Sie daran.',
      'faq.q2': 'Geht es auch ohne Messgerät?',
      'faq.a2': 'Ja. Mit microINR® oder CoaguChek® INRange kommen die Werte automatisch in die App. Sie können sie aber auch von Hand eintragen – zum Beispiel nach einer Messung in der Praxis.',
      'faq.q3': 'Ersetzt Medinote meinen Gerinnungspass?',
      'faq.a3': 'Nein. Führen Sie Ihren Gerinnungspass bitte weiter wie gewohnt – er ist zum Beispiel im Notfall wichtig. Medinote ist Ihre digitale Ergänzung für den Alltag.',
      'faq.q4': 'Ist Medinote ein Medizinprodukt?',
      'faq.a4': 'Nein. Medinote ist eine App zur persönlichen Dokumentation: Sie speichert Ihre Einträge, erinnert Sie an Ihren eigenen Plan und exportiert Ihre Daten auf Wunsch. Sie stellt keine Diagnosen und gibt keine Therapieempfehlungen.',

      'cta.title': 'Seien Sie von Anfang an dabei',
      'cta.text': 'Medinote ist derzeit in der Pilotphase in Deutschland. Testen Sie die App vor allen anderen – Ihre Rückmeldung landet direkt bei uns und hilft, Medinote für den Alltag noch besser zu machen.',
      'cta.mailAlt': 'Lieber per E-Mail?',
      'cta.soon': 'bald verfügbar',
      'cta.soon2': 'bald verfügbar',

      'form.firstName': 'Vorname',
      'form.lastName': 'Nachname',
      'form.optional': '(optional)',
      'form.email': 'E-Mail-Adresse',
      'form.emailHint': 'Sie nutzen Android? Dann bitte die E-Mail-Adresse Ihres Google-Kontos – nur damit können wir Sie im Play Store freischalten.',
      'form.platform': 'Ihr Smartphone',
      'form.ios': 'iPhone (iOS)',
      'form.android': 'Android',
      'form.consent': 'Ich bin einverstanden, dass Medinote meine Angaben speichert, um mich per E-Mail zum Testprogramm einzuladen. Ich kann meine Einwilligung jederzeit per E-Mail widerrufen. Mehr dazu in der <a href="datenschutz.html">Datenschutzerklärung</a>. <span class="field-req" aria-hidden="true">*</span>',
      'form.submit': 'Zugang anfordern',
      'form.sending': 'Wird gesendet …',
      'form.required': '* Pflichtfeld',
      'form.success': 'Vielen Dank für Ihre Anmeldung! Wir melden uns in Kürze per E-Mail mit Ihrer Einladung zum Test.',
      'form.error': 'Das hat leider nicht geklappt. Bitte versuchen Sie es später noch einmal oder schreiben Sie uns an kontakt@medi-note.de.',

      'footer.claim': 'Das digitale INR-Tagebuch für alle, die Gerinnungshemmer nehmen.',
      'footer.widgets': 'Widget-Anleitung',
      'footer.imprint': 'Impressum',
      'footer.privacy': 'Datenschutzerklärung',
      'footer.contact': 'Kontakt',
      'footer.disclaimer': 'Medinote ersetzt keine ärztliche Beratung, Diagnose oder Behandlung. Wenden Sie sich bei Fragen zu Ihrer Therapie immer an Ihre Ärztin oder Ihren Arzt.',
      'footer.trademark': 'microINR® ist eine eingetragene Marke von iLine Microsystems S.L., CoaguChek® eine eingetragene Marke von Roche. Marcumar® und Falithrom® sind eingetragene Marken ihrer jeweiligen Inhaber. Medinote steht in keiner geschäftlichen Verbindung zu iLine Microsystems oder Roche Diagnostics.'
    },

    en: {
      'meta.title': 'Medinote – the digital INR diary with dose reminders',
      'meta.description': 'The digital INR diary for everyone taking anticoagulants (“blood thinners”): tick off doses, import INR readings from your meter, have everything at hand at your appointment. No account needed.',

      'nav.features': 'Features',
      'nav.screenshots': 'Screenshots',
      'nav.how': 'How it works',
      'nav.privacy': 'Privacy',
      'nav.contact': 'Early access',

      'hero.badge': 'Try it before everyone else',
      'hero.title': 'Your INR diary. Finally digital.',
      'hero.lead': 'Medinote is the digital diary for everyone taking anticoagulants (“blood thinners”) such as Marcumar®, Falithrom® or warfarin: tick off doses with one tap, import INR readings straight from microINR® or CoaguChek® INRange – and have everything at hand at your next appointment. Without an account, all your data stays on your phone.',
      'hero.ctaPrimary': 'Get early access',
      'hero.ctaSecondary': 'See features',

      'trust.local': 'No account: data stays local',
      'trust.device': 'Readings straight from your meter',
      'trust.noads': 'No ads, no data selling',
      'trust.languages': 'German & English',

      'problem.title': 'Sound familiar?',
      'problem.text': 'Your INR values are in your anticoagulation booklet, the dosing plan is stuck to the fridge, the tablet tally is on a scrap of paper somewhere – and at your appointment, the one value you need is missing.',
      'problem.punch': 'Medinote puts it all in one place.',

      'features.title': 'Everything logged. Everything with you.',
      'features.sub': 'Built for everyday life on anticoagulants: clear, easy to read and simple to use.',
      'features.reminders.title': 'Remind. Tick. Done.',
      'features.reminders.text': 'Medinote sends a notification at the time you choose. One tap on it – “taken” or “skipped” – and your log is up to date.',
      'features.weekplan.title': 'Half a tablet on Mondays?',
      'features.weekplan.text': 'No problem: enter your doctor’s dosing schedule once – the weekly plan shows what’s due each day. If your doctor changes the plan, update it in a few taps.',
      'features.device.title': 'Measured – already logged.',
      'features.device.text': 'Pair once via Bluetooth – done. Both microINR® and CoaguChek® INRange transfer readings straight into the app: no retyping, no transposed digits, no effort.',
      'features.device.link1': 'Guide: pair microINR® →',
      'features.device.link2': 'Guide: pair CoaguChek® INRange →',
      'features.inr.title': 'Your INR values, neatly collected',
      'features.inr.text': 'Your INR values as a list and a chart – imported from your meter or entered by hand. You can show the reference range your doctor gave you in the chart.',
      'features.meds.title': 'Medication diary',
      'features.meds.text': 'Log Marcumar®/Falithrom®, warfarin, acenocoumarol and other medications with a single tap – your complete intake history, at hand at your appointment or as a PDF to print.',
      'features.local.title': 'Your data stays with you',
      'features.local.text': 'Medinote works entirely without an account: without registration, all data is stored only on your phone. You create an account only if you want to.',

      'boundary.title': 'Your doctor decides. Medinote keeps the record.',
      'boundary.text': 'Medinote is your diary – not your doctor. The app stores what you enter or your meter transmits, reminds you of your own plan and creates a PDF summary on request. It does not suggest doses or give treatment advice – always decide on your dosage together with your doctor.',

      'wx.badge': 'New: widgets for iPhone & Android',
      'wx.title': 'Your day at a glance – without opening the app',
      'wx.lead': 'Medinote’s widgets show on your iPhone Lock Screen or Android home screen whether today’s dose is still open or already logged – plus your last INR value and the next planned check.',
      'wx.b1.title': '“Take today · 8:00 PM”',
      'wx.b1.text': 'With the medication and dose from your plan – until you log the dose.',
      'wx.b2.title': '“Taken today”',
      'wx.b2.text': 'Once everything for today is marked as taken – with your next dose.',
      'wx.b3.title': 'Discreet mode',
      'wx.b3.text': 'If you prefer, without medication names, doses or INR values.',
      'wx.ctaIphone': 'Guide: iPhone',
      'wx.ctaAndroid': 'Guide: Android',
      'wx.note': 'iPhone with iOS 16 or later. Widgets show your saved plan – your reminders still arrive as notifications.',
      'wx.w.take': 'Take today · 8:00 PM',
      'wx.w.dose': '1.5 tablets · 4.5 mg',
      'wx.w.taken': 'Taken today',
      'wx.w.next': 'Next: Tomorrow, 8:00 PM',
      'wx.w.inr': '2.4',
      'wx.w.nextCheck': 'Next check:',

      'shots.title': 'A look inside the app',
      'shots.sub': 'Clear interface, large text, high contrast – designed for daily use.',
      'shots.cap1': 'INR history with reference range',
      'shots.cap2': 'History & PDF for your appointment',
      'shots.cap3': 'Weekly plan with tablet overview',
      'shots.cap4': 'Reminders that follow your plan',

      'how.title': 'How it works',
      'how.sub': 'Three steps to your digital INR diary.',
      'how.s1.title': 'Get started – no account',
      'how.s1.text': 'Open the app and start right away, no registration needed. Select your anticoagulant, then enter your weekly plan and INR reference range exactly as your doctor gave them to you – done.',
      'how.s2.title': 'Log',
      'how.s2.text': 'Tick off doses with one tap when the reminder arrives. INR readings come straight from your meter via Bluetooth (microINR® or CoaguChek® INRange) – or you enter them by hand.',
      'how.s3.title': 'Take it along',
      'how.s3.text': 'Show your history at your appointment or print it as a PDF – and export your data as a file at any time. Without an account, everything stays on your phone.',

      'privacy.title': 'Your data belongs to you',
      'privacy.sub': 'Health data is highly sensitive. That is why with Medinote, without an account everything stays on your phone – an account is optional. Built to GDPR requirements from day one.',
      'privacy.local.title': 'No account needed',
      'privacy.local.text': 'Use Medinote right away, without registration. Without an account, your health data – INR values and medication records – is stored only locally on your phone.',
      'privacy.consent.title': 'An account? Only if you want one',
      'privacy.consent.text': 'An account is optional. If you create one, your data is transferred in encrypted form – and processed only with your explicit consent (GDPR Art. 6 and 9), revocable at any time.',
      'privacy.export.title': 'Export & deletion',
      'privacy.export.text': 'You can export your data in the app at any time and delete it completely – including your account if you have one, no questions asked.',
      'privacy.noads.title': 'No ads, no data selling',
      'privacy.noads.text': 'Medinote shows no advertising and never sells data. We only collect what is necessary for the app to work.',

      'faq.title': 'Frequently asked questions',
      'faq.q1': 'Does Medinote tell me how much to take?',
      'faq.a1': 'No. Your dose is set by your doctor. Medinote shows the plan you entered and reminds you of it.',
      'faq.q2': 'Can I use it without a meter?',
      'faq.a2': 'Yes. With microINR® or CoaguChek® INRange, readings arrive in the app automatically – but you can also enter them by hand, for example after a test at your doctor’s practice.',
      'faq.q3': 'Does Medinote replace my anticoagulation booklet?',
      'faq.a3': 'No. Please keep using your booklet as usual – it matters in an emergency, for example. Medinote complements it in everyday life.',
      'faq.q4': 'Is Medinote a medical device?',
      'faq.a4': 'No. Medinote is an app for personal record-keeping: it stores your entries, reminds you of your own plan and exports your data on request. It does not make diagnoses or give treatment advice.',

      'cta.title': 'Be part of it from day one',
      'cta.text': 'Medinote is currently in its pilot phase in Germany. Try the app before everyone else – your feedback comes straight to us and helps make Medinote even better for everyday life.',
      'cta.mailAlt': 'Prefer e-mail?',
      'cta.soon': 'coming soon',
      'cta.soon2': 'coming soon',

      'form.firstName': 'First name',
      'form.lastName': 'Last name',
      'form.optional': '(optional)',
      'form.email': 'E-mail address',
      'form.emailHint': 'Using Android? Then please enter the e-mail address of your Google account – we need it to unlock the test for you in the Play Store.',
      'form.platform': 'Your smartphone',
      'form.ios': 'iPhone (iOS)',
      'form.android': 'Android',
      'form.consent': 'I agree that Medinote may store my details in order to invite me to the test programme by e-mail. I can withdraw my consent at any time by e-mail. More in the <a href="datenschutz.html">privacy policy</a>. <span class="field-req" aria-hidden="true">*</span>',
      'form.submit': 'Request access',
      'form.sending': 'Sending …',
      'form.required': '* Required field',
      'form.success': 'Thank you for signing up! We will e-mail you your test invitation shortly.',
      'form.error': 'Sorry, that didn’t work. Please try again later or e-mail us at kontakt@medi-note.de.',

      'footer.claim': 'The digital INR diary for everyone taking anticoagulants.',
      'footer.widgets': 'Widget guide',
      'footer.imprint': 'Legal notice',
      'footer.privacy': 'Privacy policy',
      'footer.contact': 'Contact',
      'footer.disclaimer': 'Medinote does not replace medical advice, diagnosis or treatment. Always consult your doctor with questions about your therapy.',
      'footer.trademark': 'microINR® is a registered trademark of iLine Microsystems S.L.; CoaguChek® is a registered trademark of Roche. Marcumar® and Falithrom® are registered trademarks of their respective owners. Medinote is not affiliated with iLine Microsystems or Roche Diagnostics.'
    }
  };

  // Pages with their own copy (e.g. anleitung-widgets.html) load a
  // dictionary into window.medinotePageTranslations before this file; its
  // keys are added to — and override — the shared ones above.
  var pageTranslations = window.medinotePageTranslations;
  if (pageTranslations) {
    Object.keys(translations).forEach(function (lang) {
      var extra = pageTranslations[lang] || {};
      Object.keys(extra).forEach(function (key) { translations[lang][key] = extra[key]; });
    });
  }

  var currentLang = 'de';

  function setLanguage(lang) {
    var dict = translations[lang];
    if (!dict) return;
    currentLang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    // Strings with inline markup (<strong>, &nbsp;). Only our own
    // dictionaries feed this, never visitor input.
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });

    document.documentElement.lang = lang;
    document.title = dict['meta.title'];
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', dict['meta.description']);

    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    try { localStorage.setItem('medinote-lang', lang); } catch (e) { /* private mode */ }
  }

  document.querySelectorAll('.lang-switch button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });

  // Initial language: saved choice > browser language > German (default).
  var initial = null;
  try { initial = localStorage.getItem('medinote-lang'); } catch (e) { /* ignore */ }
  if (!initial) {
    initial = (navigator.language || 'de').toLowerCase().indexOf('de') === 0 ? 'de' : 'en';
  }
  if (initial !== 'de') setLanguage(initial);

  /* ---------------- Mobile navigation ---------------- */
  var navToggle = document.querySelector('.nav-toggle');
  var navMenu = document.getElementById('nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var open = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------------- Reveal on scroll ---------------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---------------- Tester signup form ---------------- */
  // Apps Script web-app URL (…/exec) that appends each signup to the Google
  // Sheet — see SETUP-PILOT-FORM.md. If it is ever emptied, submitting shows
  // the error message, which points visitors to the e-mail address instead.
  var FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyyI2wHdwcmWHXtUch0oVPCNOQmUpzJrvdk2tG7boOeQgOXz5mfZmARXNsY_IeQ2FC-/exec';

  var testerForm = document.getElementById('tester-form');
  if (testerForm) {
    var formBody = testerForm.querySelector('.form-body');
    var formStatus = testerForm.querySelector('.form-status');
    var submitBtn = testerForm.querySelector('button[type="submit"]');
    var formShownAt = Date.now();

    // Keep data-i18n in step so the language toggle re-translates the text.
    var setText = function (el, key) {
      el.setAttribute('data-i18n', key);
      el.textContent = translations[currentLang][key];
    };

    var showStatus = function (kind) {
      formStatus.className = 'form-status is-' + kind;
      setText(formStatus, 'form.' + kind);
    };

    testerForm.addEventListener('submit', function (event) {
      event.preventDefault();
      if (submitBtn.disabled) return;
      submitBtn.disabled = true;
      setText(submitBtn, 'form.sending');

      var params = new URLSearchParams(new FormData(testerForm));
      params.set('elapsed', String(Date.now() - formShownAt)); // time trap, checked by the script
      params.set('lang', currentLang);

      // A form-encoded POST is a "simple" request: no CORS preflight, and
      // Apps Script answers via a redirect that allows any origin.
      var request = FORM_ENDPOINT
        ? fetch(FORM_ENDPOINT, { method: 'POST', body: params })
            .then(function (res) { return res.json(); })
        : Promise.reject(new Error('FORM_ENDPOINT is not set'));

      request.then(function (data) {
        if (!data || !data.ok) throw new Error('Signup rejected');
        formBody.hidden = true;
        showStatus('success');
        formStatus.focus();
      }).catch(function () {
        showStatus('error');
        submitBtn.disabled = false;
        setText(submitBtn, 'form.submit');
      });
    });
  }

  /* ---------------- Footer year ---------------- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
