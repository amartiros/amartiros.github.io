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
      'meta.description': 'Medinote hilft Patientinnen und Patienten unter Antikoagulations-Therapie, INR-Werte und Medikamente einfach zu dokumentieren – mit Erinnerungen, Wochenplan und automatischer microINR®-Übertragung. Ohne Konto nutzbar: Dann bleiben Ihre Daten auf Ihrem Telefon.',

      'nav.features': 'Funktionen',
      'nav.screenshots': 'Einblicke',
      'nav.how': 'So funktioniert’s',
      'nav.privacy': 'Datenschutz',
      'nav.contact': 'Tester werden',

      'hero.badge': 'Pilotphase in Deutschland – jetzt mittesten',
      'hero.title': 'Ihre Gerinnungstherapie. Sicher dokumentiert.',
      'hero.lead': 'Medinote begleitet Menschen unter Antikoagulations-Therapie – z. B. mit Marcumar, Falithrom oder Warfarin. Mit Wochenplan und zuverlässigen Erinnerungen behalten Sie Ihre Einnahmen im Griff, Ihre INR-Werte übernimmt die App auf Wunsch automatisch vom Messgerät – microINR® oder CoaguChek® INRange. Sie brauchen kein Konto: Ohne Anmeldung bleiben alle Daten auf Ihrem Telefon.',
      'hero.ctaPrimary': 'Jetzt Tester werden',
      'hero.ctaSecondary': 'Funktionen ansehen',

      'trust.noaccount': 'Ohne Konto nutzbar',
      'trust.local': 'Ohne Konto: Daten bleiben lokal',
      'trust.noads': 'Keine Werbung, kein Datenverkauf',
      'trust.languages': 'Deutsch & Englisch',

      'features.title': 'Alles für Ihre Therapie – in einer App',
      'features.sub': 'Entwickelt für den Alltag mit Gerinnungshemmern: übersichtlich, gut lesbar und einfach zu bedienen.',
      'features.reminders.title': 'Erinnerungen, auf die Verlass ist',
      'features.reminders.text': 'Medinote meldet sich zur eingestellten Zeit per Push-Benachrichtigung – und mit einem Tipp markieren Sie die Einnahme direkt als „Eingenommen“ oder „Nicht eingenommen“. So bleibt Ihr Einnahmeverlauf lückenlos.',
      'features.weekplan.title': 'Ihr Wochenplan auf einen Blick',
      'features.weekplan.text': 'Welche Tablette an welchem Tag? Der Wochenplan zeigt Ihre Dosierung für jeden Wochentag – klar und übersichtlich, genau wie auf dem Dosierungsplan Ihrer Ärztin oder Ihres Arztes.',
      'features.device.title': 'Messgerät: Werte kommen automatisch',
      'features.device.text': 'Einmal per Bluetooth verbinden – fertig. Ihre Messwerte übertragen microINR® und CoaguChek® INRange automatisch in die App: ohne Abtippen, ohne Zahlendreher, ohne Aufwand.',
      'features.device.link1': 'Anleitung: microINR® koppeln →',
      'features.device.link2': 'Anleitung: CoaguChek® INRange koppeln →',
      'features.inr.title': 'INR-Verlauf & Referenzbereich',
      'features.inr.text': 'Erfassen Sie Ihre INR-Werte und sehen Sie den Verlauf als Diagramm. Ihren persönlich festgelegten Referenzbereich können Sie daneben anzeigen.',
      'features.meds.title': 'Medikamenten-Tagebuch',
      'features.meds.text': 'Marcumar/Falithrom, Warfarin, Acenocoumarol und weitere Medikamente mit einem Tipp protokollieren – Ihr vollständiger Einnahmeverlauf, jederzeit griffbereit beim Arztbesuch.',
      'features.local.title': 'Ihre Daten bleiben bei Ihnen',
      'features.local.text': 'Medinote funktioniert ganz ohne Konto: Ohne Registrierung werden alle Daten ausschließlich auf Ihrem Telefon gespeichert. Ein Konto erstellen Sie nur, wenn Sie es möchten.',

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
      'shots.cap2': 'INR-Trend & Arztbericht als PDF',
      'shots.cap3': 'Wochenplan mit Tablettenübersicht',
      'shots.cap4': 'Zuverlässige Erinnerungen',

      'how.title': 'So funktioniert’s',
      'how.sub': 'In drei Schritten zu einem verlässlichen Überblick über Ihre Therapie.',
      'how.s1.title': 'Loslegen – ohne Konto',
      'how.s1.text': 'App öffnen und direkt starten, ganz ohne Registrierung. Antikoagulans auswählen, persönlichen INR-Referenzbereich festlegen und Wochenplan anlegen – fertig.',
      'how.s2.title': 'Erfassen',
      'how.s2.text': 'Einnahmen mit einem Tipp dokumentieren – die Erinnerung meldet sich von selbst. INR-Werte übernimmt die App automatisch per Bluetooth vom Messgerät (microINR® oder CoaguChek® INRange).',
      'how.s3.title': 'Überblicken',
      'how.s3.text': 'Trends verfolgen, den Verlauf beim Arztbesuch zeigen und Ihre Daten jederzeit als Datei exportieren. Ohne Konto bleibt dabei alles auf Ihrem Telefon.',
      'how.disclaimer': 'Hinweis: Medinote ist ein Werkzeug zur Dokumentation und ersetzt keine ärztliche Beratung. Entscheidungen über Ihre Dosierung treffen Sie immer gemeinsam mit Ihrer Ärztin oder Ihrem Arzt.',

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

      'cta.title': 'Machen Sie mit – in der Pilotphase',
      'cta.text': 'Medinote befindet sich derzeit in der Pilotphase in Deutschland. Werden Sie Teil des Testprogramms und gestalten Sie die App mit Ihrem Feedback mit.',
      'cta.button': 'Per E-Mail anmelden',
      'cta.soon': 'bald verfügbar',
      'cta.soon2': 'bald verfügbar',

      'footer.claim': 'Die App für Menschen unter Gerinnungshemmer-Therapie.',
      'footer.widgets': 'Widget-Anleitung',
      'footer.imprint': 'Impressum',
      'footer.privacy': 'Datenschutzerklärung',
      'footer.contact': 'Kontakt',
      'footer.disclaimer': 'Medinote ersetzt keine ärztliche Beratung, Diagnose oder Behandlung. Wenden Sie sich bei Fragen zu Ihrer Therapie immer an Ihre Ärztin oder Ihren Arzt.',
      'footer.trademark': 'microINR® ist eine eingetragene Marke von iLine Microsystems S.L., CoaguChek® eine eingetragene Marke von Roche. Medinote steht in keiner geschäftlichen Verbindung zu iLine Microsystems oder Roche Diagnostics.'
    },

    en: {
      'meta.title': 'Medinote – Track INR values & medication with confidence',
      'meta.description': 'Medinote helps patients on anticoagulation therapy track INR values and medication with ease – with reminders, a weekly plan and automatic microINR® transfer. No account needed: without one, your data stays on your phone.',

      'nav.features': 'Features',
      'nav.screenshots': 'Screenshots',
      'nav.how': 'How it works',
      'nav.privacy': 'Privacy',
      'nav.contact': 'Join the pilot',

      'hero.badge': 'Pilot phase in Germany – become a tester',
      'hero.title': 'Your anticoagulation therapy. Reliably documented.',
      'hero.lead': 'Medinote supports people on anticoagulation therapy – e.g. with Marcumar, Falithrom or warfarin. A weekly plan and reliable reminders keep your doses on track, and the app can receive your INR readings automatically from your meter – microINR® or CoaguChek® INRange. You don’t need an account: without one, all your data stays on your phone.',
      'hero.ctaPrimary': 'Become a tester',
      'hero.ctaSecondary': 'See features',

      'trust.noaccount': 'No account required',
      'trust.local': 'No account: data stays local',
      'trust.noads': 'No ads, no data selling',
      'trust.languages': 'German & English',

      'features.title': 'Everything for your therapy – in one app',
      'features.sub': 'Built for everyday life on anticoagulants: clear, easy to read and simple to use.',
      'features.reminders.title': 'Reminders you can count on',
      'features.reminders.text': 'Medinote sends a push notification at the time you set – and one tap marks the dose as “taken” or “skipped”, straight from the notification. Your intake history stays complete.',
      'features.weekplan.title': 'Your weekly plan at a glance',
      'features.weekplan.text': 'Which tablet on which day? The weekly plan shows your dosage for every day of the week – clear and easy to read, just like the dosing schedule from your doctor.',
      'features.device.title': 'Meter: readings arrive automatically',
      'features.device.text': 'Pair once via Bluetooth – done. Both microINR® and CoaguChek® INRange transfer readings straight into the app: no retyping, no transposed digits, no effort.',
      'features.device.link1': 'Guide: pair microINR® →',
      'features.device.link2': 'Guide: pair CoaguChek® INRange →',
      'features.inr.title': 'INR history & reference range',
      'features.inr.text': 'Record your INR values and follow the trend as a chart. You can display the personal reference range you define alongside them.',
      'features.meds.title': 'Medication diary',
      'features.meds.text': 'Log Marcumar/Falithrom, warfarin, acenocoumarol and other medications with a single tap – your complete intake history, always at hand at doctor visits.',
      'features.local.title': 'Your data stays with you',
      'features.local.text': 'Medinote works entirely without an account: without registration, all data is stored only on your phone. You create an account only if you want to.',

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
      'shots.cap2': 'INR trend & doctor report as PDF',
      'shots.cap3': 'Weekly plan with tablet overview',
      'shots.cap4': 'Reliable reminders',

      'how.title': 'How it works',
      'how.sub': 'Three steps to a reliable overview of your therapy.',
      'how.s1.title': 'Get started – no account',
      'how.s1.text': 'Open the app and start right away, no registration needed. Select your anticoagulant, set your personal INR reference range and create your weekly plan – done.',
      'how.s2.title': 'Record',
      'how.s2.text': 'Document doses with a single tap – the reminder will prompt you on time. INR readings are received automatically from your meter (microINR® or CoaguChek® INRange) via Bluetooth.',
      'how.s3.title': 'Stay on top',
      'how.s3.text': 'Follow trends, show your history at doctor visits and export your data as a file at any time. Without an account, everything stays on your phone.',
      'how.disclaimer': 'Note: Medinote is a documentation tool and does not replace medical advice. Always make dosage decisions together with your doctor.',

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

      'cta.title': 'Join us – during the pilot phase',
      'cta.text': 'Medinote is currently in its pilot phase in Germany. Become part of the test programme and help shape the app with your feedback.',
      'cta.button': 'Sign up by e-mail',
      'cta.soon': 'coming soon',
      'cta.soon2': 'coming soon',

      'footer.claim': 'The app for people on anticoagulant therapy.',
      'footer.widgets': 'Widget guide',
      'footer.imprint': 'Legal notice',
      'footer.privacy': 'Privacy policy',
      'footer.contact': 'Contact',
      'footer.disclaimer': 'Medinote does not replace medical advice, diagnosis or treatment. Always consult your doctor with questions about your therapy.',
      'footer.trademark': 'microINR® is a registered trademark of iLine Microsystems S.L.; CoaguChek® is a registered trademark of Roche. Medinote is not affiliated with iLine Microsystems or Roche Diagnostics.'
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

  function setLanguage(lang) {
    var dict = translations[lang];
    if (!dict) return;

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

  /* ---------------- Footer year ---------------- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
