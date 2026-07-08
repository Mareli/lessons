/* ============================================================
   Геометрия 10 — Интенсив. Общий движок страниц.
   Прогресс (localStorage), формулы (MathJax), иконки, навигация.
   ============================================================ */
(function () {
  'use strict';

  var STORE_KEY = 'geom10-intensive-progress-v1';

  /* ---------- Хранилище прогресса ---------- */
  var Progress = {
    _read: function () {
      try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
      catch (e) { return {}; }
    },
    _write: function (o) {
      try { localStorage.setItem(STORE_KEY, JSON.stringify(o)); } catch (e) {}
    },
    isDone: function (id) { return !!this._read()[id]; },
    setDone: function (id, val) {
      var o = this._read();
      if (val) o[id] = { done: true, at: Date.now() };
      else delete o[id];
      this._write(o);
    },
    all: function () { return this._read(); },
    reset: function () { this._write({}); }
  };
  window.Progress = Progress;

  /* ---------- Иконки (inline SVG, без эмодзи) ---------- */
  var ICON = {
    logo:   '<svg viewBox="0 0 24 24" class="ic"><path d="M12 3 3 8v8l9 5 9-5V8z"/><path d="M3 8l9 5 9-5"/><path d="M12 13v8"/></svg>',
    check:  '<svg viewBox="0 0 24 24" class="ic"><path d="M20 6 9 17l-5-5"/></svg>',
    book:   '<svg viewBox="0 0 24 24" class="ic"><path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z"/><path d="M18 3v18"/></svg>',
    clock:  '<svg viewBox="0 0 24 24" class="ic"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    target: '<svg viewBox="0 0 24 24" class="ic"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/></svg>',
    bulb:   '<svg viewBox="0 0 24 24" class="ic"><path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 1 4 10.5c-.7.7-1 1.3-1 2.5H9c0-1.2-.3-1.8-1-2.5A6 6 0 0 1 12 3z"/></svg>',
    def:    '<svg viewBox="0 0 24 24" class="ic"><path d="M4 6h16M4 12h16M4 18h10"/></svg>',
    thm:    '<svg viewBox="0 0 24 24" class="ic"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 8v8M8 10v4M16 10v4"/></svg>',
    warn:   '<svg viewBox="0 0 24 24" class="ic"><path d="M12 3 2 20h20z"/><path d="M12 10v4M12 17h.01"/></svg>',
    recall: '<svg viewBox="0 0 24 24" class="ic"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v4h4"/></svg>',
    play:   '<svg viewBox="0 0 24 24" class="ic"><path d="M8 5v14l11-7z"/></svg>',
    arrowR: '<svg viewBox="0 0 24 24" class="ic"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    arrowL: '<svg viewBox="0 0 24 24" class="ic"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>',
    star:   '<svg viewBox="0 0 24 24" class="ic"><path d="M12 3l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8L6.6 19.6l1-6L3.3 9.4l6-.9z"/></svg>',
    grid:   '<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
    rotate: '<svg viewBox="0 0 24 24" class="ic"><path d="M21 12a9 9 0 1 1-2.6-6.3"/><path d="M21 3v5h-5"/></svg>'
  };
  window.ICON = ICON;

  /* ---------- Формулы: конфиг MathJax (SVG, offline) ---------- */
  window.MathJax = {
    tex: {
      inlineMath: [['\\(', '\\)'], ['$', '$']],
      displayMath: [['\\[', '\\]'], ['$$', '$$']],
      processEscapes: true
    },
    svg: { fontCache: 'global' },
    startup: {
      typeset: true,
      ready: function () {
        window.MathJax.startup.defaultReady();
      }
    },
    options: { skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'] }
  };
  // Перерисовать формулы в узле (после динамической вставки)
  window.typeset = function (node) {
    if (window.MathJax && window.MathJax.typesetPromise) {
      return window.MathJax.typesetPromise(node ? [node] : undefined);
    }
    return Promise.resolve();
  };

  /* ---------- Прогресс-полоса чтения урока ---------- */
  function initReadingProgress() {
    var bar = document.querySelector('.lesson-progress > i');
    if (!bar) return;
    function upd() {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var p = max > 0 ? (h.scrollTop || document.body.scrollTop) / max : 0;
      bar.style.width = Math.max(0, Math.min(1, p)) * 100 + '%';
    }
    window.addEventListener('scroll', upd, { passive: true });
    window.addEventListener('resize', upd);
    upd();
  }

  /* ---------- Панель «отметить пройденным» ---------- */
  function initCompleteBar() {
    var bar = document.querySelector('.complete-bar[data-lesson]');
    if (!bar) return;
    var id = bar.getAttribute('data-lesson');
    var btn = bar.querySelector('button');
    var txt = bar.querySelector('.txt');
    function paint() {
      var done = Progress.isDone(id);
      bar.classList.toggle('done', done);
      txt.innerHTML = done ? ICON.check + ' Урок пройден — так держать!'
                           : 'Разобрались с уроком? Отметьте его пройденным.';
      btn.innerHTML = done ? 'Снять отметку' : (ICON.check + ' Отметить пройденным');
      btn.className = done ? 'btn btn-ghost btn-sm' : 'btn btn-primary btn-sm';
    }
    btn.addEventListener('click', function () {
      Progress.setDone(id, !Progress.isDone(id));
      paint();
    });
    paint();
  }

  /* ---------- Топбар (единый) ---------- */
  window.renderTopbar = function (opts) {
    opts = opts || {};
    var home = opts.home || '../index.html';
    var el = document.querySelector('[data-topbar]');
    if (!el) return;
    el.className = 'topbar';
    el.innerHTML =
      '<div class="topbar-inner">' +
        '<a class="brand" href="' + home + '">' +
          '<span class="brand-logo">' + ICON.logo + '</span>' +
          '<span><b>Геометрия 10</b><span>интенсив · стереометрия</span></span>' +
        '</a>' +
        '<div class="spacer"></div>' +
        '<a class="top-link" href="' + home + '">' + ICON.grid + ' Карта курса</a>' +
      '</div>';
  };

  /* ---------- Инициализация ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    initReadingProgress();
    initCompleteBar();
    // Проставить иконки по data-icon
    document.querySelectorAll('[data-icon]').forEach(function (n) {
      var name = n.getAttribute('data-icon');
      if (ICON[name]) n.innerHTML = ICON[name] + (n.getAttribute('data-label') ? ' ' + n.getAttribute('data-label') : '');
    });
  });
})();
