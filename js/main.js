/* Medinote marketing site — language toggle, nav, reveal animations. */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     i18n — German is the default language and is written directly in
     the HTML. The dictionaries below must stay in sync with index.html.
     ------------------------------------------------------------------ */
  var translations = {
    de: {
      'meta.title': 'Medinote – INR-Werte & Medikamente dokumentieren',
      'meta.description': 'Medinote hilft Patientinnen und Patienten unter Antikoagulations-Therapie, INR-Werte und Medikamente zu dokumentieren – mit Erinnerungen, Wochenplan und Übernahme der Messwerte von microINR® und CoaguChek® INRange. Ohne Konto nutzbar. Medinote ist kein Medizinprodukt und gibt keine Dosierungsempfehlungen.',

      'nav.features': 'Funktionen',
      'nav.screenshots': 'Einblicke',
      'nav.how': 'So funktioniert’s',
      'nav.privacy': 'Datenschutz',
      'nav.faq': 'FAQ',
      'nav.about': 'Über uns',
      'nav.pros': 'Für Behandler',
      'nav.pilot': 'Pilotphase',
      'nav.contact': 'Tester werden',

      'hero.badge': 'Pilotphase in Deutschland – jetzt mittesten',
      'hero.title': 'Ihre Gerinnungstherapie. Klar dokumentiert.',
      'hero.lead': 'Medinote ist ein Tagebuch für Menschen unter Antikoagulations-Therapie – z. B. mit Marcumar, Falithrom oder Warfarin. Sie halten Ihre Einnahmen im Wochenplan fest, lassen sich zu selbst gesetzten Zeiten erinnern und übernehmen Ihre INR-Werte auf Wunsch direkt vom Messgerät – microINR® oder CoaguChek® INRange. Ein Konto brauchen Sie dafür nicht.',
      'hero.ctaPrimary': 'Jetzt Tester werden',
      'hero.ctaSecondary': 'Funktionen ansehen',

      'trust.noaccount': 'Ohne Konto nutzbar',
      'trust.local': 'Sie entscheiden, was Sie teilen',
      'trust.noads': 'Keine Werbung, kein Datenverkauf',
      'trust.languages': 'Deutsch & Englisch',

      'features.title': 'Alles für Ihre Dokumentation – in einer App',
      'features.sub': 'Entwickelt für den Alltag mit Gerinnungshemmern: übersichtlich, gut lesbar und einfach zu bedienen.',
      'features.reminders.title': 'Erinnerungen zu Ihren Zeiten',
      'features.reminders.text': 'Medinote meldet sich zu den Zeiten, die Sie selbst einstellen – nie abhängig von einem Messwert. Mit einem Tipp markieren Sie die Einnahme direkt als „Eingenommen“ oder „Nicht eingenommen“ und dokumentieren sie damit.',
      'features.weekplan.title': 'Ihr Wochenplan auf einen Blick',
      'features.weekplan.text': 'Welche Tablette an welchem Tag? Der Wochenplan zeigt Ihre Dosierung für jeden Wochentag – klar und übersichtlich, genau wie auf dem Dosierungsplan Ihrer Ärztin oder Ihres Arztes.',
      'features.device.title': 'Messgerät: Werte übernehmen',
      'features.device.text': 'Einmal per Bluetooth verbinden – fertig. microINR® und CoaguChek® INRange senden Ihre Messwerte danach in die App, ohne Abtippen. Medinote übernimmt die Werte unverändert und bewertet sie nicht.',
      'features.device.link1': 'Anleitung: microINR® koppeln →',
      'features.device.link2': 'Anleitung: CoaguChek® INRange koppeln →',
      'features.inr.title': 'INR-Verlauf & Referenzbereich',
      'features.inr.text': 'Erfassen Sie Ihre INR-Werte und sehen Sie den Verlauf als Diagramm. Ihren persönlich festgelegten Referenzbereich können Sie daneben anzeigen.',
      'features.meds.title': 'Medikamenten-Tagebuch',
      'features.meds.text': 'Marcumar/Falithrom, Warfarin, Acenocoumarol und weitere Medikamente mit einem Tipp protokollieren. Ihre dokumentierten Einnahmen können Sie beim Arztbesuch zeigen.',
      'features.local.title': 'Ohne Konto nutzbar',
      'features.local.text': 'Medinote funktioniert ohne Registrierung. Ihre Einträge legt die App in einer Datenbank auf Ihrem Telefon ab. Eine Synchronisierung über ein Konto ist in der Pilotphase nicht Teil des Angebots. <a href="faq.html#datenschutz">Was wir dazu schon geprüft haben und was noch offen ist →</a>',

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
      'shots.cap2': 'INR-Verlauf & PDF der selbst dokumentierten Werte',
      'shots.cap3': 'Wochenplan mit Tablettenübersicht',
      'shots.cap4': 'Erinnerungen zu selbst gesetzten Zeiten',

      'how.title': 'So funktioniert’s',
      'how.sub': 'In drei Schritten zu Ihrer eigenen Dokumentation.',
      'how.s1.title': 'Loslegen – ohne Konto',
      'how.s1.text': 'App öffnen und direkt starten, ganz ohne Registrierung. Antikoagulans auswählen, den mit Ihrer Ärztin oder Ihrem Arzt besprochenen INR-Referenzbereich eintragen und Wochenplan anlegen – fertig.',
      'how.s2.title': 'Erfassen',
      'how.s2.text': 'Einnahmen mit einem Tipp dokumentieren – die Erinnerung meldet sich zur eingestellten Zeit. INR-Werte übernimmt die App per Bluetooth vom Messgerät (microINR® oder CoaguChek® INRange).',
      'how.s3.title': 'Zeigen',
      'how.s3.text': 'Den Verlauf beim Arztbesuch zeigen und Ihre Daten jederzeit als Datei oder PDF exportieren. Sie entscheiden selbst, wann Sie etwas teilen und mit wem.',
      'how.disclaimer': 'Hinweis: Medinote ist ein Werkzeug zur Dokumentation und kein Medizinprodukt. Die App bewertet keine Messwerte und gibt keine Dosierungsempfehlungen. Entscheidungen über Ihre Dosierung treffen Sie immer gemeinsam mit Ihrer Ärztin oder Ihrem Arzt.',

      'privacy.title': 'Ihre Daten gehören Ihnen',
      'privacy.sub': 'Gesundheitsdaten sind besonders sensibel. Deshalb gilt bei Medinote: kein Konto nötig, keine Werbung, kein Datenverkauf – und eine offene Auskunft darüber, was wir geprüft haben und was noch offen ist.',
      'privacy.local.title': 'Kein Konto nötig',
      'privacy.local.text': 'Nutzen Sie Medinote sofort und ohne Registrierung. Ihre INR-Werte und Medikationseinträge legt die App in einer Datenbank auf Ihrem Telefon ab. Diese Datenbank verschlüsselt Medinote nicht selbst – geschützt ist sie durch die Bildschirmsperre und die Geräteverschlüsselung Ihres Betriebssystems.',
      'privacy.consent.title': 'Konto und Synchronisierung',
      'privacy.consent.text': 'Die App enthält eine Konto-Funktion für mehrere Geräte. In der Pilotphase ist sie nicht Teil des Angebots. Wenn sie später angeboten wird, dann nur mit Ihrer ausdrücklichen Einwilligung (DSGVO Art. 6 und 9), jederzeit widerrufbar.',
      'privacy.export.title': 'Export & Löschung',
      'privacy.export.text': 'Sie können Ihre Daten jederzeit in der App exportieren und löschen. Was Sie exportieren und teilen, entscheiden Sie – ab dem Teilen liegt die Datei außerhalb unserer Kontrolle.',
      'privacy.noads.title': 'Keine Werbung, kein Datenverkauf',
      'privacy.noads.text': 'Medinote zeigt keine Werbung und verkauft keine Daten. Diese Website setzt keine Cookies und bindet keine Analyse-, Karten- oder Schriftdienste von Dritten ein.',
      'privacy.open': 'Offen gesagt: Medinote ist in der Pilotphase. Dass die ausgelieferte App keine Verbindungen aufbaut, die in der Datenschutzerklärung nicht genannt sind, prüfen wir derzeit mit einer Netzwerkmessung und weisen es vor dem Pilotstart nach. Bis dieser Nachweis vorliegt, behaupten wir das hier nicht. <a href="faq.html#datenschutz">Mehr dazu in den FAQ →</a>',

      'voices.title': 'Stimmen aus der Pilotphase',
      'voices.sub': 'Hier stehen Rückmeldungen von Testerinnen und Testern, sobald sie vorliegen – mit Namen nur dann, wenn die Person ausdrücklich zugestimmt hat.',

      'cta.title': 'Machen Sie mit – in der Pilotphase',
      'cta.text': 'Medinote befindet sich derzeit in der Pilotphase in Deutschland. Die App ist Beta-Software: Sie kann Fehler enthalten, und Funktionen können sich ändern. Die Teilnahme ist freiwillig und kostenlos.',
      'cta.button': 'Zur Pilot-Seite',
      'cta.button2': 'Per E-Mail anmelden',
      'cta.soon': 'bald verfügbar',
      'cta.soon2': 'bald verfügbar',

      'footer.claim': 'Die App für Menschen unter Gerinnungshemmer-Therapie.',
      'footer.home': 'Startseite',
      'footer.about': 'Über uns',
      'footer.faq': 'FAQ',
      'footer.pros': 'Für Behandler',
      'footer.pilot': 'Pilotphase',
      'footer.widgets': 'Widget-Anleitung',
      'footer.imprint': 'Impressum',
      'footer.privacy': 'Datenschutzerklärung',
      'footer.contact': 'Kontakt',
      'footer.disclaimer': 'Medinote ersetzt keine ärztliche Beratung, Diagnose oder Behandlung. Wenden Sie sich bei Fragen zu Ihrer Therapie immer an Ihre Ärztin oder Ihren Arzt.',
      'footer.trademark': 'microINR® ist eine eingetragene Marke von iLine Microsystems S.L., CoaguChek® eine eingetragene Marke von Roche. Medinote steht in keiner geschäftlichen Verbindung zu iLine Microsystems oder Roche Diagnostics.'
    },

    en: {
      'meta.title': 'Medinote – Document INR values & medication',
      'meta.description': 'Medinote helps people on anticoagulation therapy document INR values and medication – with reminders, a weekly plan and readings received from microINR® and CoaguChek® INRange. No account required. Medinote is not a medical device and gives no dosage recommendations.',

      'nav.features': 'Features',
      'nav.screenshots': 'Screenshots',
      'nav.how': 'How it works',
      'nav.privacy': 'Privacy',
      'nav.faq': 'FAQ',
      'nav.about': 'About us',
      'nav.pros': 'For professionals',
      'nav.pilot': 'Pilot phase',
      'nav.contact': 'Join the pilot',

      'hero.badge': 'Pilot phase in Germany – become a tester',
      'hero.title': 'Your anticoagulation therapy. Clearly documented.',
      'hero.lead': 'Medinote is a diary for people on anticoagulation therapy – e.g. with Marcumar, Falithrom or warfarin. You record your doses in a weekly plan, set your own reminder times, and can receive your INR readings straight from your meter – microINR® or CoaguChek® INRange. No account needed.',
      'hero.ctaPrimary': 'Become a tester',
      'hero.ctaSecondary': 'See features',

      'trust.noaccount': 'No account required',
      'trust.local': 'You decide what you share',
      'trust.noads': 'No ads, no data selling',
      'trust.languages': 'German & English',

      'features.title': 'Everything for your records – in one app',
      'features.sub': 'Built for everyday life on anticoagulants: clear, easy to read and simple to use.',
      'features.reminders.title': 'Reminders at times you set',
      'features.reminders.text': 'Medinote notifies you at the times you set yourself – never based on a reading. One tap marks the dose as “taken” or “skipped” and records it.',
      'features.weekplan.title': 'Your weekly plan at a glance',
      'features.weekplan.text': 'Which tablet on which day? The weekly plan shows your dosage for every day of the week – clear and easy to read, just like the dosing schedule from your doctor.',
      'features.device.title': 'Meter: readings arrive automatically',
      'features.device.text': 'Pair once via Bluetooth – done. microINR® and CoaguChek® INRange then send your readings into the app, with no retyping. Medinote records the values unchanged and does not assess them.',
      'features.device.link1': 'Guide: pair microINR® →',
      'features.device.link2': 'Guide: pair CoaguChek® INRange →',
      'features.inr.title': 'INR history & reference range',
      'features.inr.text': 'Record your INR values and follow the trend as a chart. You can display the personal reference range you define alongside them.',
      'features.meds.title': 'Medication diary',
      'features.meds.text': 'Log Marcumar/Falithrom, warfarin, acenocoumarol and other medications with a single tap. Show the entries you recorded at a doctor visit.',
      'features.local.title': 'No account required',
      'features.local.text': 'Medinote works without registration. Your entries go into a database on your phone. Syncing via an account is not part of the pilot. <a href="faq.html#datenschutz">What we have checked so far, and what is still open →</a>',

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
      'shots.cap2': 'INR history & PDF of your self-documented values',
      'shots.cap3': 'Weekly plan with tablet overview',
      'shots.cap4': 'Reminders at times you set',

      'how.title': 'How it works',
      'how.sub': 'Three steps to your own records.',
      'how.s1.title': 'Get started – no account',
      'how.s1.text': 'Open the app and start right away, no registration needed. Select your anticoagulant, enter the INR reference range agreed with your doctor and create your weekly plan – done.',
      'how.s2.title': 'Record',
      'how.s2.text': 'Document doses with a single tap – the reminder arrives at the time you set. INR readings are received from your meter (microINR® or CoaguChek® INRange) via Bluetooth.',
      'how.s3.title': 'Show',
      'how.s3.text': 'Show your history at doctor visits and export your data as a file or PDF at any time. You decide when you share something, and with whom.',
      'how.disclaimer': 'Note: Medinote is a documentation tool and not a medical device. The app does not assess readings and gives no dosing advice. Always make dosage decisions together with your doctor.',

      'privacy.title': 'Your data belongs to you',
      'privacy.sub': 'Health data is highly sensitive. So with Medinote: no account required, no ads, no data selling – and an open account of what we have checked and what is still open.',
      'privacy.local.title': 'No account needed',
      'privacy.local.text': 'Use Medinote right away, without registration. Your INR values and medication records go into a database on your phone. Medinote does not encrypt that database itself – it is protected by your screen lock and your operating system\'s device encryption.',
      'privacy.consent.title': 'Account and syncing',
      'privacy.consent.text': 'The app contains an account feature for using several devices. It is not part of the pilot. If it is offered later, it will be only with your explicit consent (GDPR Art. 6 and 9), revocable at any time.',
      'privacy.export.title': 'Export & deletion',
      'privacy.export.text': 'You can export and delete your data in the app at any time. What you export and share is your decision – once shared, the file is outside our control.',
      'privacy.noads.title': 'No ads, no data selling',
      'privacy.noads.text': 'Medinote shows no advertising and never sells data. This website sets no cookies and embeds no third-party analytics, maps or fonts.',
      'privacy.open': 'To be plain about it: Medinote is in its pilot phase. We are currently measuring, with a network capture, that the shipped app opens no connections beyond those named in the privacy policy, and we will have that evidence before the pilot starts. Until then we do not claim it here. <a href="faq.html#datenschutz">More in the FAQ →</a>',

      'voices.title': 'Voices from the pilot',
      'voices.sub': 'Feedback from testers will appear here once we have it – with a name only where the person has explicitly agreed.',

      'cta.title': 'Join us – during the pilot phase',
      'cta.text': 'Medinote is currently in its pilot phase in Germany. The app is beta software: it may contain bugs and features may change. Taking part is voluntary and free.',
      'cta.button': 'Go to the pilot page',
      'cta.button2': 'Sign up by e-mail',
      'cta.soon': 'coming soon',
      'cta.soon2': 'coming soon',

      'footer.claim': 'The app for people on anticoagulant therapy.',
      'footer.home': 'Home',
      'footer.about': 'About us',
      'footer.faq': 'FAQ',
      'footer.pros': 'For professionals',
      'footer.pilot': 'Pilot phase',
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
