# Separate the nav "Case studies" menu with a rule, not a shadow

Written against: `cc09bd2` (branch `taya/case-study-improvement`)

## Evidence chain

- Surface: the `.nav__dropdown-menu` panel opened by the "Case studies" button in the persistent top nav. Rendered state: after clicking `.nav__dropdown-btn`; `js/mobile-ui.js` adds `.is-open` to `.nav__dropdown`.
- Problem: the open menu is held off the page by a hard-coded `box-shadow` in both themes. In light mode its border is `--rule-deco` (1.22:1), which is effectively invisible, so the shadow does all the separating. Dark mode already uses a `--rule-link` border but still adds a second, heavier shadow.
- Design evidence:
  - `DESIGN.md` §1, Rule 5 (*Depth Reservation*): "The canvas is flat by default … rules, not shadows, are what separate one plane from another. `--shadow-art` is the sole exception … Never use it as decoration, as a hover state, or on a container that already has a border." The menu has a border, and its shadow is not even the token.
  - `DESIGN.md` token table: `--shadow-art` is "The only shadow in the system".
  - `DESIGN.md` §1, Rule 1: "Dividers, rules, and UI borders require at least 3:1 … Never use [`--rule-faint`] for a divider a reader must actually see." `--rule-deco` is listed as exempt only for "decorative section dividers & text rules". The edge of an overlay menu is a UI border.
  - Sibling variant: `[data-theme="dark"] .nav__dropdown-menu` already sets `border-color: var(--rule-link)` (3.1:1 dark; 3.16:1 light).
  - `CLAUDE.md`: no colour values outside the tokens. `rgba(0,0,0,0.08)` / `rgba(0,0,0,0.5)` are not tokens.
- Owner: `css/style.css` — `.nav__dropdown-menu` (line 365) and `[data-theme="dark"] .nav__dropdown-menu` (line 382). Ships via `css/style.min.css` (`npm run build`).
- Scope and affected surfaces: every page that carries the nav menu: `index.html`, `kynso.html`, `quantistry.html`, `supplement.html`, `mx2.html`, `about.html`, `contact.html`, `privacy.html`, `404.html`.
- Uncertainty: no rendered evidence of what the menu overlaps at each page's top-centre. Validation below checks that the `--rule-link` frame reads cleanly where the menu crosses content.

## Design decision

The menu is a plane over the page, and in this system planes are separated by a rule. Give it a `--rule-link` border in both themes, which dark mode already does, and remove both shadows. The menu keeps its opaque `--paper` ground, so content beneath it is still covered. The 3:1 frame now carries the edge that the untokenised shadow used to carry.

## Reuse

- Token: `--rule-link` (light `#8C8C8C`, dark `#5F6368`).
- Exemplar: `[data-theme="dark"] .nav__dropdown-menu` in `css/style.css` (line 382), which already frames the menu this way.

No new primitive.

## Changes

1. `css/style.css` — `.nav__dropdown-menu` (line 365)
   - Change: `border: 1px solid var(--rule-deco);` → `border: 1px solid var(--rule-link);`. Delete `box-shadow: 0 10px 30px rgba(0,0,0,0.08);`.
   - Preserve: `background: var(--paper)`, `border-radius: 4px`, `padding: 6px`, `min-width: 250px`, positioning, the opacity/transform/visibility open transition, `pointer-events`, `z-index`.
   - Verify: computed `box-shadow` is `none`; computed `border-top-color` is `rgb(140, 140, 140)` in light mode.
2. `css/style.css` — `[data-theme="dark"] .nav__dropdown-menu` (line 382)
   - Change: delete the whole rule. After change 1 its `border-color` repeats the base rule (the token switches with the theme) and its `box-shadow` is removed.
   - Preserve: nothing else lives in this rule.
   - Verify: in dark mode, computed `border-top-color` is `rgb(95, 99, 104)` and `box-shadow` is `none`.
3. `css/style.min.css`
   - Change: regenerate with `npm run build`; do not hand-edit.
   - Verify: `grep -o '\.nav__dropdown-menu{[^}]*}' css/style.min.css` contains `var(--rule-link)` and no `box-shadow`.

## Scope

- Inherit: the menu on all nine pages listed above, both themes, wide and narrow layouts (below 960px the nav is still a fixed top bar, and the menu opens the same way).
- Verify: the open menu over each case study page's first screen, and over the homepage headline area, in both themes.
- Exclude: the menu's items (`.nav__dropdown-link`): their hover marker is covered by a separate plan, `design-plans/03-nav-menu-item-marker-stroke.md`. Do not change `--shadow-art`/`--shadow-cut` users (`.cs__shot--tall`, `.gt__shot--cut`, `.ia__card-img`), which are the documented photographic exceptions. Do not change `z-index: 100`.

## Validation

- Product: a visitor opens "Case studies" and can immediately see where the menu ends and the page begins, then picks a case study.
- Interface: open the menu on `index.html` and `kynso.html` at 1440×900 and 375×812, in light and dark. Confirm a visible grey hairline frames all four sides, no soft shadow remains, and the open/close fade still plays.
- System: `grep -n "box-shadow" css/style.css` shows no remaining raw-rgba shadow outside `--shadow-art`/`--shadow-cut` consumers, `.gt` inset rules, and lines unrelated to the nav.
- Repository: `npm run build` → exits 0; `grep -c 'box-shadow:0 1[02]px 3[02]px' css/style.min.css` → `0`.

## Stop conditions

- Stop if `.nav__dropdown-menu` has gained new styles since `cc09bd2` (for example a deliberate elevation token added to `DESIGN.md`).
- Stop if the menu sits over a photographic export on any page in a way where a 1px `--rule-link` frame is not enough to read the edge. Report the page and state rather than adding a new shadow.
- Stop if `npm run build` changes unrelated output.

## Design documentation

- After acceptance and validation: in `DESIGN.md` §6, under the `.nav` entry, add one sentence. The "Case studies" menu is an opaque `--paper` panel framed by a `1px solid var(--rule-link)` hairline in both themes, with no shadow (Rule 5).
