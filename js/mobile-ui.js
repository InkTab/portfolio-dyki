/* Reader controls, shared by the case studies and About me.

   Most of this exists because the 960px reflow takes something away that the
   wide canvas provided for free: the rail is no longer in the reader's path
   once it lies down at the top of a column several screens tall, and the
   timeline artwork is no longer wide enough to read once the lane it was drawn
   on is squeezed into a phone column. Those are inert above the breakpoint
   rather than downscaled.

   The figure zoom is the exception: it also serves the Gantt panel, which is a
   fixed 340-wide box at every width, so that one trigger stays live on the wide
   canvas too. */
(function () {
  'use strict';

  var MOBILE = window.matchMedia('(max-width: 960px)');
  var STILL = window.matchMedia('(prefers-reduced-motion: reduce)');
  var COARSE = window.matchMedia('(hover: none)');
  var FINE = window.matchMedia('(hover: hover) and (pointer: fine)');

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
      if (!MOBILE.matches || STILL.matches) {
        ideas.forEach(function (idea) {
          idea.classList.remove('is-marquee');
          var label = idea.querySelector('.ia__label');
          if (label) {
            label.style.removeProperty('--marq-shift');
            label.style.removeProperty('--marq-dur');
          }
        });
        return;
      }

      /* Batch Phase 1 (Write): Clear previous styles/classes before measuring so
         names translated from a previous pass are not measured in the wrong place. */
      ideas.forEach(function (idea) {
        idea.classList.remove('is-marquee');
        var label = idea.querySelector('.ia__label');
        if (label) {
          label.style.removeProperty('--marq-shift');
          label.style.removeProperty('--marq-dur');
        }
      });

      /* Batch Phase 2 (Read): Query geometry without intervening DOM mutations
         to avoid layout thrashing. */
      var calculations = [];
      for (var i = 0; i < ideas.length; i++) {
        var idea = ideas[i];
        var label = idea.querySelector('.ia__label');
        if (!label) continue;

        var over = Math.round(label.scrollWidth - idea.clientWidth);
        if (over > 0) {
          var travel = over + TAIL;
          var seconds = Math.min(MAX_SECONDS, Math.max(MIN_SECONDS, travel / PX_PER_SECOND));
          calculations.push({
            idea: idea,
            label: label,
            travel: travel,
            seconds: seconds
          });
        }
      }

      /* Batch Phase 3 (Write): Apply new styles and classes in a single pass. */
      for (var j = 0; j < calculations.length; j++) {
        var item = calculations[j];
        item.label.style.setProperty('--marq-shift', -item.travel + 'px');
        item.label.style.setProperty('--marq-dur', item.seconds.toFixed(1) + 's');
        item.idea.classList.add('is-marquee');
      }
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
    var hint = zoom.querySelector('.zoom__hint');
    var close = zoom.querySelector('.zoom__close');
    var opener = null;
    var teardown = null;

    /* Wrapping happens once, at every width. Where the reader is off, the
       wrapper is display:contents and disabled, so that layout measures the same
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
        /* disabled already blocks this where the reader is off; the guard covers
           the window between a resize and the media-query callback. */
        if (zoomable(btn)) { open(node, figcap, btn); }
      });
      return btn;
    });

    /* Below the breakpoint every figure opens, because a phone column renders
       none of them legibly. Above it only the Gantt panel does: it is a fixed
       box that a portrait export lands inside at a fraction of its own
       resolution, and unlike a timeline shot it never grows to fill the canvas.
       The case-study shots are already full size on the wide canvas, so a
       trigger there would add a tab stop that buys the reader nothing.

       And only where there is no hover to answer with instead. On a pointer
       device the panel's detail comes from the loupe below, in place, so sending
       the reader to a full-canvas reader and back would be the longer road to
       the same picture. */
    function zoomable(btn) {
      /* A schematic drawn at the unit width the panel paints it at is never
         shown below its own resolution, so a reader would open the identical
         picture -- a tab stop and a modal that buy the reader nothing. This is
         the same test the two branches below apply, only settled by the file
         rather than by the viewport. It does not extend to the timeline
         diagrams: those are drawn on a 900-1020 unit lane, which a phone
         column renders at a third of. */
      if (btn.querySelector('.gt__shot-diagram')) { return false; }
      if (MOBILE.matches) { return true; }
      return !!btn.closest('.gt__shot') && !FINE.matches;
    }

    function syncTriggers() {
      triggers.forEach(function (btn) { btn.disabled = !zoomable(btn); });
      if (!zoom.hidden && opener && !zoomable(opener)) { hide(); }
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
      zoom.classList.toggle('is-cut', !!btn.closest('.cs__shot--cut, .gt__shot--cut'));
      zoom.classList.toggle('is-dark', !!btn.closest('.gt__shot--dark'));
      zoom.classList.toggle('is-screen', !!btn.closest('.gt__shot--screen'));

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
      /* The reader opens on a mouse now as well as a thumb, and the gesture it
         names has to be the one the reader actually has. */
      hint.textContent = COARSE.matches ? 'Swipe to pan' : 'Scroll to pan';
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

  /* ---------------- Chart figure loupe ---------------- */

  /* The Gantt panel is a fixed box, so a portrait export paints inside it at a
     fraction of the resolution it was exported at. On a pointer device the
     reader gets that detail without leaving the page: hovering the picture opens
     a magnified window beside it that follows the cursor. Touch and narrow
     layouts keep the full-canvas reader instead -- there is no hover there to
     drive this, and no room beside the panel to put it. */
  (function () {
    var art = document.querySelector('.gt__art');
    var chart = document.querySelector('.gt');
    if (!art || !chart) return;

    /* Never magnifies past the resolution the file actually carries -- beyond
       that the window would only be showing bigger pixels -- and never so far
       that a hand's worth of cursor travel crosses the whole picture. */
    var MAX_ZOOM = 2;
    /* The window fills the gap the panel leaves, up to these. Past them the
       picture stops being a detail beside the chart and becomes a second page. */
    var MAX_W = 900;
    var MAX_H = 560;
    /* Clear of the panel it belongs to, and of the viewport edge it is clamped
       against, by the same measure. */
    var OFFSET = 20;

    var loupe = document.createElement('div');
    loupe.className = 'loupe';
    /* Decorative duplicate of a picture the reader already has: the figure's own
       alt text is what carries it to assistive tech. */
    loupe.setAttribute('aria-hidden', 'true');
    chart.appendChild(loupe);

    var shown = false;
    var queued = false;
    var lastW = 0, lastH = 0;
    var mx = 0, my = 0;

    function activeImg() {
      var fig = art.querySelector('.gt__shot.is-active');
      return fig ? fig.querySelector('.gt__shot-img') : null;
    }

    /* object-fit:contain letterboxes the picture inside the padding box, so the
       painted picture is a sub-rect of the element. Mapping the cursor against
       the element instead would track wrong by exactly the letterbox -- which on
       a 9:20 export is most of the box. */
    function painted(img) {
      var r = img.getBoundingClientRect();
      var cs = getComputedStyle(img);
      var bl = parseFloat(cs.borderLeftWidth) || 0;
      var bt = parseFloat(cs.borderTopWidth) || 0;
      var pl = parseFloat(cs.paddingLeft) || 0;
      var pt = parseFloat(cs.paddingTop) || 0;
      var cw = img.clientWidth - pl - (parseFloat(cs.paddingRight) || 0);
      var ch = img.clientHeight - pt - (parseFloat(cs.paddingBottom) || 0);
      var nw = img.naturalWidth || 1;
      var nh = img.naturalHeight || 1;
      if (cw <= 0 || ch <= 0) return null;
      var s = Math.min(cw / nw, ch / nh);
      var w = nw * s, h = nh * s;
      return {
        x: r.left + bl + pl + (cw - w) / 2,
        y: r.top + bt + pt + (ch - h) / 2,
        w: w, h: h, nw: nw, nh: nh
      };
    }

    function hide() {
      if (!shown) return;
      shown = false;
      loupe.classList.remove('is-open');
    }

    /* Places one axis of the magnified picture: the point under the cursor is
       centred, then pulled back so the picture never parts from the window's
       edge. A picture smaller than the window in that axis is simply centred. */
    function offset(cursorFrac, big, box) {
      if (big <= box) return (box - big) / 2;
      return Math.min(0, Math.max(box - big, box / 2 - cursorFrac * big));
    }

    function track() {
      queued = false;
      var img = activeImg();
      if (!img || !img.complete || !img.naturalWidth) { hide(); return; }

      var p = painted(img);
      if (!p) { hide(); return; }

      var u = (mx - p.x) / p.w;
      var v = (my - p.y) / p.h;
      /* Only the picture drives it, not the letterbox around it. */
      if (u < 0 || u > 1 || v < 0 || v > 1) { hide(); return; }

      var fig = img.closest('.gt__shot');
      loupe.classList.toggle('loupe--dark', fig.classList.contains('gt__shot--dark'));
      loupe.classList.toggle('loupe--cut', fig.classList.contains('gt__shot--cut'));

      var zoom = Math.min(MAX_ZOOM, p.nw / p.w);
      var bw = Math.round(p.w * zoom), bh = Math.round(p.h * zoom);

      /* The window is the smaller of what there is room for and what there is
         picture for. The room is measured, not guessed at in viewport units --
         the panel sits in the last column before the rail, so the gap to its
         left is the whole budget and it is worth spending. Hugging the picture
         when it is the smaller of the two is the other half of the same rule:
         a window wider than the magnified picture would pad it out with dead
         ground and give the cursor an axis with nothing to travel to. */
      var ar = art.getBoundingClientRect();
      var roomW = Math.min(MAX_W, Math.max(240, Math.round(ar.left - OFFSET * 2)));
      var roomH = Math.min(MAX_H, Math.max(200, window.innerHeight - OFFSET * 2));
      var lw = Math.min(roomW, bw), lh = Math.min(roomH, bh);
      if (lw !== lastW || lh !== lastH) {
        lastW = lw; lastH = lh;
        loupe.style.width = lw + 'px';
        loupe.style.height = lh + 'px';
      }

      loupe.style.backgroundImage = 'url("' + (img.currentSrc || img.src) + '")';
      loupe.style.backgroundSize = Math.round(bw) + 'px ' + Math.round(bh) + 'px';
      loupe.style.backgroundPosition =
        Math.round(offset(u, bw, lw)) + 'px ' + Math.round(offset(v, bh, lh)) + 'px';

      /* Left of the panel, top-aligned with the picture, then clamped into the
         viewport -- there is no room on the other side to flip to. */
      var left = Math.max(OFFSET, ar.left - OFFSET - lw);
      var top = Math.min(Math.max(OFFSET, p.y), window.innerHeight - lh - OFFSET);
      loupe.style.left = Math.round(left) + 'px';
      loupe.style.top = Math.round(Math.max(OFFSET, top)) + 'px';

      if (!shown) { shown = true; loupe.classList.add('is-open'); }
    }

    /* Read once per frame: a mousemove burst would otherwise force a layout per
       event, and only the last position of the frame is the one that shows. */
    function onMove(e) {
      mx = e.clientX; my = e.clientY;
      if (queued) return;
      queued = true;
      requestAnimationFrame(track);
    }

    function enabled() {
      return FINE.matches && !MOBILE.matches;
    }

    /* Bound on the window rather than the picture: the picture sits inside the
       zoom trigger, and a disabled button suppresses pointer events across its
       whole subtree, so a listener down there would go quiet exactly where the
       loupe is wanted. The hit test above is what scopes it. */
    function sync() {
      window.removeEventListener('mousemove', onMove);
      if (enabled()) {
        window.addEventListener('mousemove', onMove, { passive: true });
      } else {
        hide();
      }
    }
    sync();
    onMediaChange(FINE, sync);
    onMediaChange(MOBILE, sync);

    /* The page tracks sideways under a fixed loupe, so a scroll invalidates the
       mapping the last frame was drawn from. */
    window.addEventListener('scroll', hide, { passive: true, capture: true });
    window.addEventListener('resize', hide, { passive: true });
  })();
})();
