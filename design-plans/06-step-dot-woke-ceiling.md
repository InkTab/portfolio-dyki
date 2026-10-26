# Cap the active timeline step dot at --woke instead of --ink

Written against: `cc09bd2` (branch `taya/case-study-improvement`)

## Evidence chain

- Surface: the "How it got solved" process timeline (`.cs__flow`, `.cs__steps`) on `quantistry.html`, `supplement.html` and `mx2.html`, opened with "Click for detailed process". The state in question is a step that is hovered, keyboard-focused, or active (`.is-active`, set by the page's inline step script on `mouseenter`/`focusin`).
- Problem: the 7px dot that marks each step on the timeline line turns `--ink` in that state.
- Design evidence:
  - `DESIGN.md` §1, Color & Contrast Rule 2 (*Ink Reservation*): "The `--ink` token is strictly reserved for navigational links and primary headings. Non-link interactive elements may darken (in light mode) or lighten (in dark mode) to `--woke` on hover, but must never reach `--ink`."
  - A `.cs__step` is a non-link interactive element: an `<li tabindex="0">` that reveals its artwork on hover/focus and navigates nowhere.
  - Sibling exemplar: Kynso's track chart, the other timeline in the same case study family, lifts its active marks to `--woke` (`css/style.css:2370–2373`: `.gt__track.is-active .gt__bar { border-color: var(--woke); }`, `.gt__bar--phase { box-shadow: inset 0 -3px 0 var(--woke); }`).
- Owner: `css/style.css` line 1041, `.cs__step:hover::before, .cs__step:focus-visible::before, .cs__step.is-active::before { background: var(--ink); }`. Ships in `css/style.min.css` as `.cs__step:hover:before,.cs__step:focus-visible:before,.cs__step.is-active:before{background:var(--ink)}`.
- Scope and affected surfaces: every `.cs__step` on the three flow case studies, both layouts. The 960px override at line ~4029 only moves the dot (`top`, `margin`) and inherits the colour.
- Uncertainty: the visible difference is small (light `#2E2E2E` vs `#111316`; dark `#E8E8E8` vs `#FFFFFF`). The fix is about following the rule and matching the sibling timeline, not a dramatic visual change.

## Design decision

A step is a control, not a link or a heading, so its active mark stops at the `--woke` ceiling, as the track chart's active marks do. The dot keeps its job of showing which step is active (it still moves up from `--rule-link`), and `--ink` stays reserved for links and headings.

## Reuse

- Token: `--woke` (light `#2E2E2E`, dark `#E8E8E8`).
- Exemplar: `.gt__track.is-active .gt__bar` / `.gt__bar--phase` in `css/style.css:2370–2371`.

No new primitive.

## Changes

1. `css/style.css` (line 1041)
   - Change: `background: var(--ink);` → `background: var(--woke);` in the `.cs__step:hover::before, .cs__step:focus-visible::before, .cs__step.is-active::before` rule.
   - Preserve: the resting dot (`.cs__step::before`, `background: var(--rule-link)`, `transition: background-color .3s`), its size and position, and the 960px position override.
   - Verify: hovering a step gives its dot a computed `background-color` of `rgb(46, 46, 46)` in light and `rgb(232, 232, 232)` in dark; the dot stays at that colour while the step is `.is-active` after the pointer leaves.
2. `css/style.css` — `.cs__step::before` resting rule (line 1036)
   - Change: none.
3. `css/style.min.css`
   - Change: regenerate with `npm run build`; do not hand-edit.
   - Verify: the minified rule reads `{background:var(--woke)}`.

## Scope

- Inherit: all steps on `quantistry.html`, `supplement.html`, `mx2.html`, both themes, wide and stacked layouts.
- Verify: the active dot still stands out clearly from resting dots (`--rule-link`) and from the `--rule-link` timeline line it sits on.
- Exclude: `.cs__step-num`'s marker stroke (a separate, rule-compliant state); `.cs__step-title`, which is a heading and correctly `--ink`; `cursor: help` on steps (shared with the track chart and not part of this change); Kynso's `.gt` chart.

## Validation

- Product: a reader hovering along the timeline can still see which step's artwork is showing.
- Interface: open the process on `supplement.html` and `mx2.html` at 1440×900 and 375×812, light and dark. Hover each step, tab through steps with the keyboard, and confirm one dot at a time is `--woke` and the rest are `--rule-link`.
- System: `grep -n "var(--ink)" css/style.css` no longer matches any `.cs__step` state rule.
- Repository: `npm run build` → exits 0; `grep -o '\.cs__step:hover:before[^}]*}' css/style.min.css` → contains `var(--woke)`.

## Stop conditions

- Stop if the step markup has changed so that a step is now a link (`<a>`) or navigates on click. Rule 2 would then permit `--ink`.
- Stop if `npm run build` changes unrelated output.

## Design documentation

- After acceptance and validation: none required. Rule 2 already covers it. Optionally note in `DESIGN.md` §6 next to `.cs__shot--tall` / the step timeline description that the active step dot uses `--woke`, matching `.gt`.
