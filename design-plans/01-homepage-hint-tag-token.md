# Set the homepage hover hint in the hint token instead of faded ink

Written against: `cc09bd2` (branch `taya/case-study-improvement`)

## Evidence chain

- Surface: `index.html` — the `.ia` intro section, the line `<p class="ia__foot">Hover over case studies to see which parts I did</p>` (index.html:206). Visible at rest on every homepage load, both themes, all widths.
- Problem: `.ia__foot` is coloured with `--ink` and faded with `opacity: .3`. The result is a grey that is not a palette token: about `#b3b3b9` on `#f8f7ff` (≈2.0:1) in light mode and about `#585a5c` on `#111316` (≈2.6:1) in dark mode.
- Design evidence:
  - `DESIGN.md` §1, Color & Contrast Rule 2 (*Ink Reservation*): `--ink` is "strictly reserved for navigational links and primary headings". `.ia__foot` is a `<p>` hint, neither a link nor a heading.
  - `DESIGN.md` §1, Rule 1: "Body text under 24px requires a minimum contrast ratio of 4.5:1 against its background." The hint is ≈15–17px.
  - `CLAUDE.md`: "Use only colors … defined in DESIGN.md. Do not invent new token values." `opacity: .3` over `--ink` makes a new grey.
  - `css/style.css` token comment on `--tag` (line ~24): "mono metadata, captions, hints — 4.59:1". `DESIGN.md` token table: `--tag` is for "footnotes (paler)".
- Owner: `css/style.css`, rule `.ia__foot` (starts at line 539). Runtime ships via `css/style.min.css`, built by `npm run build` (esbuild). The page links only `style.min.css`.
- Scope and affected surfaces: only `index.html` uses `.ia__foot` (confirmed by grep across `*.html`). The mobile override at `@media (max-width: 960px)` (`.ia__foot { position: static; … }`, line ~3915) sets no colour or opacity and inherits the fix.
- Uncertainty: none for the colour. The code comment above the rule explains the 30% fade as wanting "a quiet aside". `--tag` is the palest text token in the system, so that intent stays intact.

## Design decision

Recolour the hint with the token the system defines for hints, `--tag`, and remove the opacity. It stays the quietest text on the page and below the headline in hierarchy, but now uses a calibrated value: 4.59:1 light, 5.96:1 dark. `--ink` goes back to being reserved for links and headings.

## Reuse

- Token: `--tag` (light `#717171`, dark `#8E929A`), declared on `:root` and `:root[data-theme="dark"]` in `css/style.css`.
- Exemplar: `.ia__spark` in `css/style.css` (line ~723), in the same section: IBM Plex Sans in `color: var(--tag)`. This shows `--tag` is already used for sans-serif secondary text in `.ia`, not only for mono.

No new primitive.

## Changes

1. `css/style.css` — rule `.ia__foot` (line 539)
   - Change: replace `color: var(--ink);` with `color: var(--tag);` and delete `opacity: .3;`. Update the comment block directly above the rule. Its last sentence ("Faded to 30% opacity so it reads as a quiet aside…") should say the hint takes `--tag`, the palette's hint token, so it reads as a quiet aside without leaving the calibrated greys. Keep the comment's architectural rationale (centred at the toggle's inset, between `.legal` and the toggle).
   - Preserve: position, font family, `font-size: clamp(.95rem, 1.3vw, 1.06rem)`, `font-weight: 400`, `white-space: nowrap`, `z-index: 3`, and the copy itself. Do not touch the `max-width: 960px` override.
   - Verify: computed `color` of `.ia__foot` is `rgb(113, 113, 113)` in light and `rgb(142, 146, 154)` in dark; computed `opacity` is `1`.
2. `css/style.min.css`
   - Change: regenerate with `npm run build`. Do not hand-edit.
   - Preserve: everything else in the bundle (the build also regenerates `js/mobile-ui.min.js`; it should come out unchanged).
   - Verify: `grep -o '\.ia__foot{[^}]*}' css/style.min.css` shows `color:var(--tag)` and no `opacity`.

## Scope

- Inherit: `index.html` wide canvas (absolute, bottom-centred) and the stacked layout below 960px (static, after the list).
- Verify: the hint is still clearly quieter than the case-study names (`--ghost-link`, weight 400 with underline) and the headline (`--ink`).
- Exclude: the hint's copy. It says "Hover", but the hover words are hidden below 960px. That is a separate, unresolved content decision and should not be changed here. Exclude `.ia__real`, `.ia__tag` and all other `.ia` text.

## Validation

- Product: a first-time visitor reads the instruction at the bottom of the homepage without effort and still sees it as secondary to the case-study links.
- Interface: `index.html` at 1440×900 and 1024×768 (wide canvas) and 375×812 (stacked), each in light and dark theme (use the theme toggle, bottom right). Confirm the hint sits between the privacy link and the theme toggle without touching either on wide screens, and follows the list on mobile.
- System: no new grey; `.ia__foot` reads only `--tag`; no `opacity` on text remains in `.ia`.
- Repository: `npm run build` → exits 0 and rewrites `css/style.min.css`; then `grep -c 'color:var(--ink);opacity:.3' css/style.min.css` → `0`.

## Stop conditions

- Stop if `.ia__foot` or its copy has moved to a different element or page since `cc09bd2`.
- Stop if `--tag` no longer resolves to the documented 4.59:1 (light) / 5.96:1 (dark) values.
- Stop if `npm run build` fails or changes `js/mobile-ui.min.js` in ways unrelated to this edit (the source and bundle are out of sync; report it rather than committing an unrelated diff).

## Design documentation

- After acceptance and validation: none required. `--tag` already documents hints and footnotes. Optionally, in `DESIGN.md` §1 Rule 2, add a sentence that faded `--ink` (opacity on ink) is not a substitute for a secondary grey token.
