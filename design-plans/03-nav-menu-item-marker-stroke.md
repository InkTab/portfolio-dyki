# Give nav menu items the same marker stroke as the rest of the nav

Written against: `cc09bd2` (branch `taya/case-study-improvement`)

## Evidence chain

- Surface: each `.nav__dropdown-link` row inside the open "Case studies" menu (Kynso, Quantistry, Supplement, MX2), in its hover and keyboard-focus states.
- Problem: on hover or focus the whole row switches to `background: var(--marker)` at once. The marker is a gradient, and the rule transitions only `background-color`, so the stroke appears instantly with no sweep. The row is a plain rectangle with `border-radius: 2px`. Every other control in the same nav (Home, Contact, About me, Case studies button, CV) draws a tilted, unevenly rounded stroke that grows in from the right.
- Design evidence:
  - `DESIGN.md` §2 (*The Marker Accent*): "*Directional Reveal:* The stroke reveals counter to the reading axis: right-to-left on horizontal text." "*Organic Contour:* Avoid sharp geometric rectangles. Apply subtle displacement using `rotate(-0.45deg)`, `skew(-2.5deg)`, and an asymmetrical radius (`border-radius: 3px 9px 4px 7px`)." "When using a `::before` pseudo-element (`z-index: -1`), enforce `isolation: isolate` on the parent container."
  - `DESIGN.md` §5 (*Asymmetric Transitions*): "Text color updates should lag slightly behind incoming marker strokes (`0.1s ease 0.18s`), but reset immediately on exit (`0.14s ease`)."
  - `DESIGN.md` §6, `.nav` entry: "Interactive links and buttons take the signature yellow marker stroke on hover and focus."
- Owner: `css/style.css` — `.nav__dropdown-link` (line 394), `.nav__dropdown-name`, `.nav__dropdown-meta`, the hover/focus rules at lines 421–433. Ships via `css/style.min.css` (`npm run build`).
- Scope and affected surfaces: the nav menu on all nine pages (`index.html`, `kynso.html`, `quantistry.html`, `supplement.html`, `mx2.html`, `about.html`, `contact.html`, `privacy.html`, `404.html`).
- Uncertainty: the stroke's inset inside the row. The plan uses `inset: 0`, as `.theme-toggle::before` does where the control's own box is the stroke's footprint. Confirm in the render that the stroke stays inside the menu's 6px padding.

## Design decision

Menu items are nav links, so they take the nav's stroke: a `::before` marker that grows from the right on a tilted, unevenly rounded shape, with the text locking to `--marker-ink` just after the stroke arrives. The rows are single-line flex rows, so the `::before` form §2 allows is the right fit (the `background-image` form exists for text that wraps). This replaces the instant full-row fill.

## Reuse

- Tokens: `--marker`, `--marker-ink`.
- Exemplar: `.nav__link--about::before` / `.nav__dropdown-btn::before` and their `:hover`/`:focus-visible` rules in `css/style.css` (lines 313–343), the stroke this nav already uses. For `inset: 0` on a control whose box is the stroke footprint: `.theme-toggle::before` (line ~145).

No new primitive.

## Changes

1. `css/style.css` — `.nav__dropdown-link` (line 394)
   - Change: add `position: relative; isolation: isolate;`. Replace `transition: background-color .15s ease, color .15s ease;` with `transition: color .14s ease;`.
   - Preserve: `display: flex`, `align-items: baseline`, `justify-content: space-between`, `gap: 12px`, `padding: 8px 12px`, `text-decoration: none`, `color: var(--ghost-link)`.
2. `css/style.css` — new rule `.nav__dropdown-link::before`, placed directly after `.nav__dropdown-link`
   - Change: `content: ""; position: absolute; z-index: -1; inset: 0; background: var(--marker); border-radius: 3px 9px 4px 7px; transform-origin: right; transform: rotate(-.45deg) skewX(-2.5deg) scaleX(0); transition: transform .3s cubic-bezier(.2,.7,.3,1);`, the same declarations as `.nav__link--about::before` except `inset`.
3. `css/style.css` — `.nav__dropdown-link:hover, .nav__dropdown-link:focus-visible` (lines 421–426)
   - Change: remove `background: var(--marker);`. Keep `color: var(--marker-ink, #111316);`. Keep `outline: none;` as is (focus treatment is out of scope for this plan). Add a sibling rule `.nav__dropdown-link:hover::before, .nav__dropdown-link:focus-visible::before { transform: rotate(-.45deg) skewX(-2.5deg) scaleX(1); }`.
4. `css/style.css` — `.nav__dropdown-name` and `.nav__dropdown-meta`
   - Change: add `transition: color .14s ease;` to each (exit resets immediately). In the existing rule at lines 427–433 that sets both to `--marker-ink` on hover/focus, add `transition: color .1s ease .18s;` (entry lags the stroke). These children set their own colour, so the lag has to be on them rather than on the link.
   - Preserve: resting colours `--ink` (name) and `--tag` (meta), sizes, families, tracking.
5. `css/style.css` — `border-radius: 2px` on `.nav__dropdown-link`
   - Change: none required. With no background on the row it no longer shows; leave it rather than widen the diff.
6. `css/style.min.css`
   - Change: regenerate with `npm run build`; do not hand-edit.

For every change, Verify: on hover, the yellow stroke grows from the row's right edge to its left over ~0.3s with a slight tilt and uneven corners; name and meta turn `#111316` just after it; on leaving, the stroke collapses and the text snaps back. Keyboard: Tab into the open menu, and the focused row shows the same stroke.

## Scope

- Inherit: all four menu items on all nine pages, both themes. Text on the marker stays `--marker-ink` in dark mode as well (§9.3).
- Verify: the stroke stays inside the menu frame (menu `padding: 6px`), rows do not shift (the pseudo-element is absolute), and `prefers-reduced-motion` collapses the sweep via the existing global rule.
- Exclude: the menu panel's border and shadow (handled in `design-plans/02-nav-menu-rule-not-shadow.md`); `outline: none` on focus-visible (an accessibility question, not part of this design fix); the "Case studies" button's held stroke while `.is-open`.

## Validation

- Product: a visitor scanning the menu sees the same highlighter gesture they saw on "Case studies" a moment before, so the menu reads as part of the nav.
- Interface: open the menu on `index.html` and one case study page (`kynso.html`) at 1440×900 and 375×812, in light and dark. Hover each row and move between rows quickly (each stroke should collapse at once on exit); tab through the rows; check the longest meta ("Quantum Chemistry") is still legible on the stroke.
- System: `grep -n "background: var(--marker)" css/style.css` no longer matches `.nav__dropdown-link`; every nav control now uses the `::before` stroke pattern.
- Repository: `npm run build` → exits 0; `grep -o '\.nav__dropdown-link:before{[^}]*}' css/style.min.css` → one match containing `scaleX(0)`.

## Stop conditions

- Stop if the menu rows have become multi-line (wrapping names or meta), since then §2 requires the `background-image` form with `box-decoration-break: clone` instead. Report rather than choosing.
- Stop if `.nav__dropdown-link` has gained a stacking context or transform since `cc09bd2` that the `z-index: -1` stroke would slip behind.
- Stop if `npm run build` changes unrelated output.

## Design documentation

- After acceptance and validation: in `DESIGN.md` §6, `.nav` entry, extend "Interactive links and buttons take the signature yellow marker stroke on hover and focus" to say this includes the "Case studies" menu items, drawn with the same `::before` stroke as the bar's own controls.
