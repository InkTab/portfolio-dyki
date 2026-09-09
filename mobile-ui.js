/* Mobile-only controls, shared by the case studies and About me.

   Both components exist because the 960px reflow takes something away that the
   wide canvas provided for free: the rail is no longer in the reader's path
   once it lies down at the top of a column several screens tall, and the
   diagrams are no longer wide enough to read once the lane they were drawn on
   is squeezed into a phone column. Neither has a wide-canvas counterpart, so
   both are inert above the breakpoint rather than downscaled. */
(function () {
  'use strict';

  var MOBILE = window.matchMedia('(max-width: 960px)');
  var STILL = window.matchMedia('(prefers-reduced-motion: reduce)');

  function onMediaChange(mq, fn) {
    if (mq.addEventListener) { mq.addEventListener('change', fn); }
    else if (mq.addListener) { mq.addListener(fn); }
  }

  /* Coalesces scroll bursts into one read per frame, so the visibility test
     never runs against a layout the browser has not settled yet. */
  function onFrame(fn) {
    var queued = false;
    return function () {
      if (queued) return;
      queued = true;
      requestAnimationFrame(function () { queued = false; fn(); });
    };
  }

  /* ---------------- Back to top ---------------- */

  (function () {
    var btn = document.querySelector('.totop');
    if (!btn) return;

    var update = onFrame(function () {
      /* One viewport is the point past which the opening screen is gone and a
         reader can no longer reach the rail by flicking up once. */
      btn.classList.toggle('is-visible', window.scrollY > window.innerHeight);
    });

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: STILL.matches ? 'auto' : 'smooth' });
      /* Sending focus back to the top of the document as well, so the control
         is not just a visual return trip for a keyboard or screen reader. */
      var first = document.querySelector('.rail__link, .ia__rail-link');
      if (first) { first.focus({ preventScroll: true }); }
    });
  })();

  /* ---------------- Long name marquee ---------------- */

  (function () {
    var ideas = Array.prototype.slice.call(document.querySelectorAll('.ia__idea'));
    if (!ideas.length) return;

    /* Travel speed rather than travel time: a name that overruns the column by
       a word and one that overruns it by half a line should move at the same
       pace, so the duration is derived from the distance. The bounds keep a
       near-fitting name from twitching and a very long one from taking longer
       than a reader will wait. */
    var PX_PER_SECOND = 16;
    var MIN_SECONDS = 7;
    var MAX_SECONDS = 18;
    /* A name that stops flush against the edge reads as clipped rather than as
       finished, so the travel overshoots by a glyph's width. */
    var TAIL = 10;

    function measure() {
      ideas.forEach(function (idea) {
        var label = idea.querySelector('.ia__label');
        if (!label) return;

        /* Cleared before measuring: a name still translated from its last pass
           would be measured in the wrong place. */
        idea.classList.remove('is-marquee');
        label.style.removeProperty('--marq-shift');
        label.style.removeProperty('--marq-dur');

        if (!MOBILE.matches || STILL.matches) return;

        var over = Math.round(label.scrollWidth - idea.clientWidth);
        if (over <= 0) return;

        var travel = over + TAIL;
        var seconds = Math.min(MAX_SECONDS, Math.max(MIN_SECONDS, travel / PX_PER_SECOND));
        label.style.setProperty('--marq-shift', -travel + 'px');
        label.style.setProperty('--marq-dur', seconds.toFixed(1) + 's');
        idea.classList.add('is-marquee');
      });
    }

    measure();
    /* The names are set in a webfont; measured against the fallback they would
       be sized for the wrong glyphs. */
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(measure);
    }

    var timer;
    window.addEventListener('resize', function () {
      clearTimeout(timer);
      timer = setTimeout(measure, 120);
    }, { passive: true });
    onMediaChange(MOBILE, measure);
    onMediaChange(STILL, measure);
  })();

  /* ---------------- Figure zoom ---------------- */

  (function () {
    var figures = Array.prototype.slice.call(
      document.querySelectorAll('.cs__shot-img, .gt__shot-img')
    );
    if (!figures.length) return;

    /* The overlay carries no content of its own and does nothing without this
       script, so it is built here rather than repeated as dead markup in five
       documents. */
    var zoom = document.createElement('div');
    zoom.className = 'zoom';
    zoom.setAttribute('role', 'dialog');
    zoom.setAttribute('aria-modal', 'true');
    zoom.setAttribute('aria-label', 'Zoomed figure');
    zoom.hidden = true;
    zoom.innerHTML =
      '<div class="zoom__pane" tabindex="0">' +
        '<div class="zoom__frame"></div>' +
      '</div>' +
      '<div class="zoom__foot">' +
        '<p class="zoom__cap"></p>' +
        '<p class="zoom__note"></p>' +
        '<p class="zoom__hint">Swipe to pan</p>' +
      '</div>' +
      '<button class="zoom__close" type="button" aria-label="Close zoomed figure">' +
        '<svg class="zoom__close-icon" viewBox="0 0 16 16" width="16" height="16" ' +
             'aria-hidden="true" focusable="false"><path d="M4 4l8 8M12 4l-8 8"/></svg>' +
      '</button>';
    document.body.appendChild(zoom);

    var pane = zoom.querySelector('.zoom__pane');
    var frame = zoom.querySelector('.zoom__frame');
    var cap = zoom.querySelector('.zoom__cap');
    var note = zoom.querySelector('.zoom__note');
    var close = zoom.querySelector('.zoom__close');
    var opener = null;
    var teardown = null;

    /* Wrapping happens once, at every width. Above the breakpoint the wrapper
       is display:contents and disabled, so the wide layout measures the same
       boxes it always did and gains no tab stop. */
    var triggers = figures.map(function (node) {
      var fig = node.closest('figure');
      var figcap = fig ? fig.querySelector('figcaption') : null;
      var name = node.getAttribute('alt') ||
                 node.getAttribute('aria-label') ||
                 (figcap ? figcap.textContent : 'figure');

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'zoom__trigger';
      btn.setAttribute('aria-label', 'Zoom: ' + tidy(name));
      node.parentNode.insertBefore(btn, node);
      btn.appendChild(node);

      btn.addEventListener('click', function () {
        /* disabled already blocks this above the breakpoint; the guard covers
           the window between a resize and the media-query callback. */
        if (MOBILE.matches) { open(node, figcap, btn); }
      });
      return btn;
    });

    function syncTriggers() {
      var off = !MOBILE.matches;
      triggers.forEach(function (btn) { btn.disabled = off; });
      if (off && !zoom.hidden) { hide(); }
    }
    syncTriggers();
    onMediaChange(MOBILE, syncTriggers);
    window.addEventListener('resize', syncTriggers, { passive: true });

    function tidy(text) {
      return (text || '').replace(/\s+/g, ' ').trim();
    }

    /* Intrinsic size comes from the viewBox for an inline diagram and from the
       bitmap or the width/height attributes for a screenshot. */
    function intrinsic(node) {
      if (node.tagName.toLowerCase() === 'svg') {
        var vb = (node.getAttribute('viewBox') || '').split(/[\s,]+/);
        if (vb.length === 4) { return { w: +vb[2], h: +vb[3] }; }
      }
      /* The width/height attributes come first: the placeholder screenshots are
         SVG files with a small intrinsic size, so naturalWidth reports a couple
         of hundred pixels where the document declares the 800x560 the artwork
         was drawn for -- opening at the former would zoom the figure out. */
      var aw = +node.getAttribute('width');
      var ah = +node.getAttribute('height');
      if (aw && ah) { return { w: aw, h: ah }; }
      return { w: node.naturalWidth || 800, h: node.naturalHeight || 560 };
    }

    function size(clone, nat) {
      var pad = parseFloat(getComputedStyle(pane).paddingLeft) || 0;
      var avail = Math.max(120, pane.clientWidth - pad * 2);
      /* Opens at the width the figure was authored for — that is the whole
         point, since the phone column is what made it illegible. The 2.8x
         ceiling keeps a figure from opening wider than a thumb can travel. */
      var w = Math.max(avail, Math.min(nat.w, window.innerWidth * 2.8));
      clone.style.width = Math.round(w) + 'px';
      clone.style.height = Math.round(w * nat.h / nat.w) + 'px';
    }

    function open(node, figcap, btn) {
      /* A reopen inside the closing transition would otherwise be torn down by
         the previous close's pending timer. */
      clearTimeout(teardown);
      opener = btn;

      var clone = node.cloneNode(true);
      clone.removeAttribute('id');
      clone.removeAttribute('loading');
      Array.prototype.forEach.call(clone.querySelectorAll('[id]'), function (el) {
        el.removeAttribute('id');
      });

      frame.innerHTML = '';
      frame.appendChild(clone);

      /* The chart's captions carry a sans note inside the mono label. Splitting
         them keeps each half in the typeface it was set in, rather than running
         a sentence of prose through the label's uppercase mono. */
      var noteEl = figcap ? figcap.querySelector('.gt__shot-note') : null;
      var label = '';
      if (figcap) {
        label = Array.prototype.filter
          .call(figcap.childNodes, function (n) { return n !== noteEl; })
          .map(function (n) { return n.textContent; })
          .join(' ');
      }
      cap.textContent = tidy(label);
      note.textContent = noteEl ? tidy(noteEl.textContent) : '';
      note.hidden = !note.textContent;
      /* A photographic export carries its own edge, so it takes no frame here
         either -- same reason the flow drops the frame on .cs__shot--tall. */
      zoom.classList.toggle('is-photo', !!btn.closest('.cs__shot--tall'));
      zoom.classList.toggle('is-cut', !!btn.closest('.cs__shot--cut'));

      /* Unhidden before it is measured: a hidden pane reports a client width of
         zero, and every figure would then be sized against the fallback floor. */
      zoom.hidden = false;
      size(clone, intrinsic(node));

      document.body.classList.add('is-zoomed');
      /* Reading a layout property forces the closed state to be committed, so
         the transition runs from it. A rAF pair would do the same, but only in
         a foregrounded tab -- a backgrounded one never fires the callback and
         the overlay would open stuck at opacity 0. */
      void zoom.offsetWidth;
      zoom.classList.add('is-open');

      pane.scrollTop = 0;
      pane.scrollLeft = 0;
      zoom.classList.toggle(
        'is-pannable',
        pane.scrollWidth > pane.clientWidth + 1 || pane.scrollHeight > pane.clientHeight + 1
      );
      close.focus();
    }

    function hide() {
      zoom.classList.remove('is-open');
      document.body.classList.remove('is-zoomed');
      var done = function () {
        zoom.hidden = true;
        frame.innerHTML = '';
      };
      if (STILL.matches) { done(); } else { teardown = setTimeout(done, 260); }
      if (opener && !opener.disabled) { opener.focus(); }
      opener = null;
    }

    close.addEventListener('click', hide);

    /* A tap on the ground around the figure dismisses it; a tap on the figure
       itself, or on the caption below it, does not. */
    zoom.addEventListener('click', function (e) {
      if (e.target === zoom || e.target === pane) { hide(); }
    });

    document.addEventListener('keydown', function (e) {
      if (zoom.hidden) return;
      if (e.key === 'Escape') { hide(); return; }
      /* The overlay is modal, and holds exactly two focusable stops. */
      if (e.key === 'Tab') {
        e.preventDefault();
        (document.activeElement === close ? pane : close).focus();
      }
    });

    window.addEventListener('resize', function () {
      if (zoom.hidden) return;
      var clone = frame.firstElementChild;
      if (clone) { size(clone, intrinsic(clone)); }
    }, { passive: true });
  })();
})();
