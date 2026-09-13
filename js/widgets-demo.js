/* Medinote widgets — animated setup demos, platform tabs and the
   open/taken loop of the widget mockups. No dependencies. */
(function () {
  'use strict';

  var reduceMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* ------------------------------------------------------------------
     Dates in the mockups follow today's date and the page language, so
     the example never looks stale ("INR · 10. Sept.", "Do., 24. Sept.").
     data-date="<days from today>:<style>"
     ------------------------------------------------------------------ */
  var DATE_STYLES = {
    lock: { weekday: 'long', day: 'numeric', month: 'long' },
    dm: { day: 'numeric', month: 'short' },
    wdm: { weekday: 'short', day: 'numeric', month: 'short' }
  };

  function renderDates() {
    var lang = document.documentElement.lang || 'de';
    document.querySelectorAll('[data-date]').forEach(function (el) {
      var parts = el.getAttribute('data-date').split(':');
      var date = new Date();
      date.setDate(date.getDate() + Number(parts[0]));
      try {
        el.textContent = new Intl.DateTimeFormat(lang, DATE_STYLES[parts[1]]).format(date);
      } catch (e) { /* keep the static fallback text */ }
    });
  }

  // Play/pause follows the demo's state, so it can't be a plain data-i18n key.
  var LABELS = {
    de: { pause: 'Pause', play: 'Abspielen' },
    en: { pause: 'Pause', play: 'Play' }
  };
  function label(name) {
    return (LABELS[document.documentElement.lang] || LABELS.de)[name];
  }

  var demos = [];

  renderDates();
  if ('MutationObserver' in window) {
    // main.js switches <html lang> after replacing the page's text.
    new MutationObserver(function () {
      renderDates();
      demos.forEach(function (d) { d.refreshText(); });
    }).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang']
    });
  }

  function whenVisible(el, callback) {
    if (!('IntersectionObserver' in window)) { callback(true); return; }
    new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { callback(entry.isIntersecting); });
    }, { threshold: 0.25 }).observe(el);
  }

  /* ------------------------------------------------------------------
     Teaser loop: widgets switch between "take today" and "taken today".
     ------------------------------------------------------------------ */
  var cycling = document.querySelectorAll('[data-widget-cycle]');
  if (cycling.length && !reduceMotion) {
    var teaserVisible = false;
    whenVisible(cycling[0].closest('section') || cycling[0], function (v) { teaserVisible = v; });
    setInterval(function () {
      if (!teaserVisible || document.hidden) return;
      cycling.forEach(function (el) { el.classList.toggle('is-taken'); });
    }, 3200);
  }

  /* ------------------------------------------------------------------
     Setup demos. Each frame: the step it belongs to, the classes that
     describe the screen (see widgets.css, prefixed with f-), where the
     finger is and what it does, and how long the frame stays.
     Touch coordinates are percentages of the phone screen.
     ------------------------------------------------------------------ */
  var FRAMES = {
    ios: [
      { step: 1, on: '', touch: [50, 60, 'hold'], ms: 2600 },
      { step: 2, on: 'custom', touch: [50, 92.4, 'tap'], ms: 2000 },
      { step: 2, on: 'choose', touch: [28, 48, 'tap'], ms: 2000 },
      { step: 3, on: 'edit', touch: [50, 34.4, 'tap'], ms: 2000 },
      { step: 4, on: 'edit sheet', touch: [45, 62.5, 'tap'], ms: 2000 },
      { step: 4, on: 'edit sheet pick', touch: [26.5, 57.5, 'tap'], ms: 1700 },
      { step: 4, on: 'edit sheet pick med', touch: [73.5, 57.5, 'tap'], ms: 1700 },
      { step: 5, on: 'edit med inr', touch: [85, 7.7, 'tap'], ms: 2000 },
      { step: 6, on: 'med inr', touch: null, ms: 2400 },
      { step: 6, on: 'med inr toast', touch: null, ms: 1300 },
      { step: 6, on: 'med inr toast taken', touch: null, ms: 3000 }
    ],
    android: [
      { step: 1, on: '', touch: [50, 40, 'hold'], ms: 1900 },
      { step: 2, on: 'menu', touch: [45, 50.6, 'tap'], ms: 2000 },
      { step: 3, on: 'picker', touch: [50, 20.1, 'tap'], ms: 2000 },
      { step: 4, on: 'picker expand', touch: [50, 28.7, 'hold'], ms: 1700 },
      { step: 4, on: 'picker expand lift', touch: [50, 28.7, 'keep'], ms: 700 },
      { step: 4, on: 'picker expand lift drag', touch: [50, 17.4, 'drag'], ms: 1700 },
      { step: 5, on: 'placed resize', touch: null, ms: 2000 },
      { step: 6, on: 'placed', touch: null, ms: 1800 },
      { step: 6, on: 'placed toast', touch: null, ms: 1300 },
      { step: 6, on: 'placed toast taken', touch: null, ms: 3000 }
    ]
  };

  function Demo(root) {
    var self = this;
    this.root = root;
    this.frames = FRAMES[root.getAttribute('data-demo')];
    this.screen = root.querySelector('.demo-screen');
    this.baseClass = this.screen.className;
    this.touch = root.querySelector('.touch');
    this.steps = root.querySelectorAll('.demo-steps button');
    this.toggleBtn = root.querySelector('[data-demo-toggle]');
    this.index = -1;
    this.timer = null;
    this.wanted = !reduceMotion; // the visitor's play/pause choice
    this.visible = false;

    this.steps.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var step = Number(btn.getAttribute('data-step'));
        for (var i = 0; i < self.frames.length; i++) {
          if (self.frames[i].step === step) { self.show(i); break; }
        }
      });
    });

    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', function () {
        self.wanted = !self.wanted;
        self.update();
      });
    }

    var restart = root.querySelector('[data-demo-restart]');
    if (restart) {
      restart.addEventListener('click', function () {
        self.wanted = true;
        self.show(0);
        self.update();
      });
    }

    whenVisible(root, function (v) { self.visible = v; self.update(); });
    this.show(0);
    this.update();
  }

  Demo.prototype.playing = function () {
    return this.wanted && this.visible && !document.hidden;
  };

  Demo.prototype.update = function () {
    var playing = this.playing();
    this.root.classList.toggle('paused', !playing);
    this.refreshText();
    this.schedule();
  };

  /** Texts that depend on state: the play/pause label and, on narrow
      screens, the name of the current step under the phone. */
  Demo.prototype.refreshText = function () {
    if (this.toggleBtn) this.toggleBtn.textContent = label(this.wanted ? 'pause' : 'play');
    var caption = this.root.querySelector('.demo-caption');
    var active = this.root.querySelector('.demo-steps button.active');
    if (caption && active) {
      caption.textContent = active.getAttribute('data-step') + '. ' + active.querySelector('strong').textContent;
    }
  };

  Demo.prototype.schedule = function () {
    var self = this;
    clearTimeout(this.timer);
    if (!this.playing()) return;
    this.timer = setTimeout(function () {
      self.show((self.index + 1) % self.frames.length);
    }, this.frames[this.index].ms);
  };

  Demo.prototype.show = function (i) {
    var frame = this.frames[i];
    var previous = this.frames[this.index];
    this.index = i;

    var classes = frame.on ? frame.on.split(' ').map(function (c) {
      return c === 'taken' ? 'is-taken' : 'f-' + c;
    }) : [];
    this.screen.className = [this.baseClass].concat(classes).join(' ');

    this.placeTouch(frame.touch);
    if (!previous || previous.step !== frame.step) this.markStep(frame.step);
    this.schedule();
  };

  Demo.prototype.placeTouch = function (touch) {
    var el = this.touch;
    if (!touch) { el.className = 'touch'; return; }
    el.style.left = touch[0] + '%';
    el.style.top = touch[1] + '%';
    if (touch[2] === 'keep') return;
    el.className = 'touch show';
    void el.offsetWidth; // restart the press animation for back-to-back taps
    el.className = 'touch show ' + touch[2];
  };

  Demo.prototype.markStep = function (step) {
    var ms = this.frames.reduce(function (sum, f) { return f.step === step ? sum + f.ms : sum; }, 0);
    this.steps.forEach(function (btn) {
      var active = Number(btn.getAttribute('data-step')) === step;
      btn.classList.toggle('active', active);
      if (active) {
        btn.setAttribute('aria-current', 'step');
        btn.style.setProperty('--step-ms', ms + 'ms');
        var bar = btn.querySelector('.bar');
        if (bar) { bar.style.animation = 'none'; void bar.offsetWidth; bar.style.animation = ''; }
      } else {
        btn.removeAttribute('aria-current');
      }
    });
    this.refreshText();
  };

  document.querySelectorAll('[data-demo]').forEach(function (root) {
    if (FRAMES[root.getAttribute('data-demo')]) demos.push(new Demo(root));
  });

  document.addEventListener('visibilitychange', function () {
    demos.forEach(function (d) { d.update(); });
  });

  /* ------------------------------------------------------------------
     Platform tabs: #iphone / #android in the URL, otherwise the
     visitor's own platform, otherwise iPhone.
     ------------------------------------------------------------------ */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"][data-platform]'));
  if (!tabs.length) return;

  function selectTab(name, focus) {
    tabs.forEach(function (tab) {
      var active = tab.getAttribute('data-platform') === name;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
      if (active && focus) tab.focus();
    });
  }

  function platformFromHash() {
    var hash = location.hash.replace('#', '').toLowerCase();
    return hash === 'android' || hash === 'iphone' ? hash : null;
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { selectTab(tab.getAttribute('data-platform')); });
    tab.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      var next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
      selectTab(next.getAttribute('data-platform'), true);
    });
  });

  var fromHash = platformFromHash();
  selectTab(fromHash || (/android/i.test(navigator.userAgent) ? 'android' : 'iphone'));

  function scrollToSetup() {
    var target = document.getElementById('einrichten');
    if (target) target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  }
  if (fromHash) scrollToSetup();

  window.addEventListener('hashchange', function () {
    var platform = platformFromHash();
    if (platform) { selectTab(platform); scrollToSetup(); }
  });
})();
