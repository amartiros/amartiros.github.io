/* Medinote marketing site — language toggle, nav, reveal animations. */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     i18n — German is the default language and is written directly in
     the HTML. The dictionaries below must stay in sync with index.html.
     ------------------------------------------------------------------ */
  var translations = {
    de: {
      'meta.title': 'Medinote – INR-Werte & Medikamente sicher dokumentieren',
      'meta.description': 'Medinote hilft Patientinnen und Patienten unter Antikoagulations-Therapie, INR-Werte und Medikamenteneinnahme einfach zu dokumentieren – mit Erinnerungen, Spracheingabe und microINR®-Anbindung.',

      'nav.features': 'Funktionen',
      'nav.screenshots': 'Einblicke',
      'nav.how': 'So funktioniert’s',
      'nav.privacy': 'Datenschutz',
      'nav.contact': 'Tester werden',

      'hero.badge': 'Pilotphase in Deutschland – jetzt mittesten',
      'hero.title': 'Ihre Gerinnungstherapie. Sicher dokumentiert.',
      'hero.lead': 'Medinote unterstützt Menschen unter Antikoagulations-Therapie – z. B. mit Marcumar, Falithrom oder Warfarin – beim Dokumentieren von INR-Werten und Medikamenteneinnahme. Mit Erinnerungen, Spracheingabe und direkter Übertragung vom microINR®-Messgerät.',
      'hero.ctaPrimary': 'Jetzt Tester werden',
      'hero.ctaSecondary': 'Funktionen ansehen',

      'trust.gdpr': 'DSGVO-konform',
      'trust.encrypted': 'Verschlüsselte Gesundheitsdaten',
      'trust.offline': 'Auch offline nutzbar',
      'trust.languages': 'Deutsch & Englisch',

      'features.title': 'Alles für Ihre Therapie – in einer App',
      'features.sub': 'Entwickelt für den Alltag mit Gerinnungshemmern: übersichtlich, gut lesbar und einfach zu bedienen.',
      'features.inr.title': 'INR-Verlauf & Zielbereich',
      'features.inr.text': 'Erfassen Sie Ihre INR-Werte und sehen Sie den Verlauf als Diagramm. Medinote zeigt sofort, ob ein Wert in Ihrem persönlichen Zielbereich liegt (z. B. 2,0–3,0).',
      'features.meds.title': 'Medikamenten-Tagebuch',
      'features.meds.text': 'Marcumar/Falithrom, Warfarin, Acenocoumarol und weitere Medikamente mit einem Tipp protokollieren – inklusive Wochenplan mit Tablettenübersicht und Einnahmeverlauf.',
      'features.reminders.title': 'Zuverlässige Erinnerungen',
      'features.reminders.text': 'Push-Benachrichtigungen zu Ihren Einnahmezeiten. Einnahme direkt aus der Benachrichtigung als „Eingenommen“ oder „Nicht eingenommen“ markieren.',
      'features.voice.title': 'Spracheingabe',
      'features.voice.text': '„Mein INR war 2,5“ oder „Marcumar genommen“ – Werte freihändig erfassen, auf Deutsch und Englisch. Ideal, wenn Tippen gerade schwerfällt.',
      'features.device.title': 'microINR®-Anbindung',
      'features.device.text': 'Messwerte per Bluetooth direkt vom microINR®-Messgerät übernehmen – ohne Abtippen und ohne Übertragungsfehler.',
      'features.sync.title': 'Offline & synchronisiert',
      'features.sync.text': 'Medinote funktioniert auch ohne Internet. Sobald Sie online sind, werden Ihre Daten automatisch und verschlüsselt synchronisiert.',

      'shots.title': 'Ein Blick in die App',
      'shots.sub': 'Klare Oberfläche, große Schrift, hoher Kontrast – gestaltet für den täglichen Gebrauch.',
      'shots.cap1': 'INR-Verlauf mit Zielbereich',
      'shots.cap2': 'INR-Trend & Arztbericht als PDF',
      'shots.cap3': 'Wochenplan mit Tablettenübersicht',
      'shots.cap4': 'Zuverlässige Erinnerungen',

      'how.title': 'So funktioniert’s',
      'how.sub': 'In drei Schritten zu einem verlässlichen Überblick über Ihre Therapie.',
      'how.s1.title': 'Einrichten',
      'how.s1.text': 'Konto erstellen, Ihr Antikoagulans auswählen und Ihren persönlichen INR-Zielbereich festlegen – gemeinsam mit den Vorgaben Ihrer Ärztin oder Ihres Arztes.',
      'how.s2.title': 'Erfassen',
      'how.s2.text': 'INR-Werte und Einnahmen dokumentieren – per Tipp, per Sprachbefehl oder automatisch über die Bluetooth-Verbindung zum microINR®-Messgerät.',
      'how.s3.title': 'Überblicken',
      'how.s3.text': 'Trends verfolgen, den Verlauf beim Arztbesuch zeigen und Ihre Daten jederzeit als Datei exportieren.',
      'how.disclaimer': 'Hinweis: Medinote ist ein Werkzeug zur Dokumentation und ersetzt keine ärztliche Beratung. Entscheidungen über Ihre Dosierung treffen Sie immer gemeinsam mit Ihrer Ärztin oder Ihrem Arzt.',

      'privacy.title': 'Ihre Daten gehören Ihnen',
      'privacy.sub': 'Gesundheitsdaten sind besonders sensibel. Medinote wurde von Anfang an nach den Vorgaben der DSGVO entwickelt.',
      'privacy.enc.title': 'Verschlüsselung',
      'privacy.enc.text': 'Ihre Gesundheitsdaten – INR-Werte und Medikationsaufzeichnungen – werden verschlüsselt gespeichert und übertragen.',
      'privacy.consent.title': 'Ausdrückliche Einwilligung',
      'privacy.consent.text': 'Die Verarbeitung Ihrer Gesundheitsdaten erfolgt nur mit Ihrer ausdrücklichen Zustimmung (DSGVO Art. 6 und 9) – transparent und jederzeit widerrufbar.',
      'privacy.export.title': 'Export & Löschung',
      'privacy.export.text': 'Sie können Ihre Daten jederzeit in der App exportieren und Ihr Konto samt aller Daten dauerhaft löschen – ohne Rückfragen.',
      'privacy.noads.title': 'Keine Werbung, kein Datenverkauf',
      'privacy.noads.text': 'Medinote zeigt keine Werbung und verkauft keine Daten. Wir erheben nur, was für die Funktion der App notwendig ist.',

      'cta.title': 'Machen Sie mit – in der Pilotphase',
      'cta.text': 'Medinote befindet sich derzeit in der Pilotphase in Deutschland. Werden Sie Teil des Testprogramms und gestalten Sie die App mit Ihrem Feedback mit.',
      'cta.button': 'Per E-Mail anmelden',
      'cta.soon': 'bald verfügbar',
      'cta.soon2': 'bald verfügbar',

      'footer.claim': 'Die App für Menschen unter Gerinnungshemmer-Therapie.',
      'footer.imprint': 'Impressum',
      'footer.privacy': 'Datenschutzerklärung',
      'footer.contact': 'Kontakt',
      'footer.disclaimer': 'Medinote ersetzt keine ärztliche Beratung, Diagnose oder Behandlung. Wenden Sie sich bei Fragen zu Ihrer Therapie immer an Ihre Ärztin oder Ihren Arzt.',
      'footer.trademark': 'microINR® ist eine eingetragene Marke von iLine Microsystems S.L. Medinote steht in keiner geschäftlichen Verbindung zu iLine Microsystems.'
    },

    en: {
      'meta.title': 'Medinote – Track INR values & medication with confidence',
      'meta.description': 'Medinote helps patients on anticoagulation therapy document INR values and medication intake with ease – including reminders, voice input and microINR® device sync.',

      'nav.features': 'Features',
      'nav.screenshots': 'Screenshots',
      'nav.how': 'How it works',
      'nav.privacy': 'Privacy',
      'nav.contact': 'Join the pilot',

      'hero.badge': 'Pilot phase in Germany – become a tester',
      'hero.title': 'Your anticoagulation therapy. Reliably documented.',
      'hero.lead': 'Medinote supports people on anticoagulation therapy – e.g. with Marcumar, Falithrom or warfarin – in documenting INR values and medication intake. With reminders, voice input and direct transfer from the microINR® meter.',
      'hero.ctaPrimary': 'Become a tester',
      'hero.ctaSecondary': 'See features',

      'trust.gdpr': 'GDPR compliant',
      'trust.encrypted': 'Encrypted health data',
      'trust.offline': 'Works offline',
      'trust.languages': 'German & English',

      'features.title': 'Everything for your therapy – in one app',
      'features.sub': 'Built for everyday life on anticoagulants: clear, easy to read and simple to use.',
      'features.inr.title': 'INR history & target range',
      'features.inr.text': 'Record your INR values and follow the trend as a chart. Medinote instantly shows whether a reading is within your personal target range (e.g. 2.0–3.0).',
      'features.meds.title': 'Medication diary',
      'features.meds.text': 'Log Marcumar/Falithrom, warfarin, acenocoumarol and other medications with a single tap – including a weekly plan with tablet overview and intake history.',
      'features.reminders.title': 'Reliable reminders',
      'features.reminders.text': 'Push notifications at your intake times. Mark a dose as “taken” or “skipped” directly from the notification.',
      'features.voice.title': 'Voice input',
      'features.voice.text': '“My INR was 2.5” or “Took Marcumar” – record values hands-free, in German and English. Ideal when typing is difficult.',
      'features.device.title': 'microINR® connectivity',
      'features.device.text': 'Receive readings directly from the microINR® meter via Bluetooth – no retyping, no transcription errors.',
      'features.sync.title': 'Offline & synchronised',
      'features.sync.text': 'Medinote also works without an internet connection. As soon as you are online, your data is synchronised automatically and encrypted.',

      'shots.title': 'A look inside the app',
      'shots.sub': 'Clear interface, large text, high contrast – designed for daily use.',
      'shots.cap1': 'INR history with target range',
      'shots.cap2': 'INR trend & doctor report as PDF',
      'shots.cap3': 'Weekly plan with tablet overview',
      'shots.cap4': 'Reliable reminders',

      'how.title': 'How it works',
      'how.sub': 'Three steps to a reliable overview of your therapy.',
      'how.s1.title': 'Set up',
      'how.s1.text': 'Create an account, select your anticoagulant and set your personal INR target range – based on your doctor’s guidance.',
      'how.s2.title': 'Record',
      'how.s2.text': 'Document INR values and doses – with a tap, by voice command, or automatically via the Bluetooth connection to the microINR® meter.',
      'how.s3.title': 'Stay on top',
      'how.s3.text': 'Follow trends, show your history at doctor visits and export your data as a file at any time.',
      'how.disclaimer': 'Note: Medinote is a documentation tool and does not replace medical advice. Always make dosage decisions together with your doctor.',

      'privacy.title': 'Your data belongs to you',
      'privacy.sub': 'Health data is highly sensitive. Medinote has been built to GDPR requirements from day one.',
      'privacy.enc.title': 'Encryption',
      'privacy.enc.text': 'Your health data – INR values and medication records – is stored and transmitted in encrypted form.',
      'privacy.consent.title': 'Explicit consent',
      'privacy.consent.text': 'Your health data is processed only with your explicit consent (GDPR Art. 6 and 9) – transparent and revocable at any time.',
      'privacy.export.title': 'Export & deletion',
      'privacy.export.text': 'You can export your data in the app at any time and permanently delete your account with all data – no questions asked.',
      'privacy.noads.title': 'No ads, no data selling',
      'privacy.noads.text': 'Medinote shows no advertising and never sells data. We only collect what is necessary for the app to work.',

      'cta.title': 'Join us – during the pilot phase',
      'cta.text': 'Medinote is currently in its pilot phase in Germany. Become part of the test programme and help shape the app with your feedback.',
      'cta.button': 'Sign up by e-mail',
      'cta.soon': 'coming soon',
      'cta.soon2': 'coming soon',

      'footer.claim': 'The app for people on anticoagulant therapy.',
      'footer.imprint': 'Legal notice',
      'footer.privacy': 'Privacy policy',
      'footer.contact': 'Contact',
      'footer.disclaimer': 'Medinote does not replace medical advice, diagnosis or treatment. Always consult your doctor with questions about your therapy.',
      'footer.trademark': 'microINR® is a registered trademark of iLine Microsystems S.L. Medinote is not affiliated with iLine Microsystems.'
    }
  };

  function setLanguage(lang) {
    var dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
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

  /* ---------------- Footer year ---------------- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
