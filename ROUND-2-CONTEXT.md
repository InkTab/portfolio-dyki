# Round 2 context — case study summary band

**Status:** direction **I** locked by the human on 2026-10-26 ("ok, good. let's lock it."). This file is the governing context for building it into the site. The other directions (round-1 A–J, set-2 A–J, set-3 A–H, J) are closed.

The exploration sketches (round 1, sets 2 and 3, and their capsules) were removed from the repo at the owner's request on 2026-10-26; the decisions below are the record of the locked direction.

## Brief

Case study pages are read mostly by HR screeners. Within 30 seconds they need to see the role, what was done, what it changed and what skills it shows, without losing the sideways-scrolling case study the site already has.

## The locked direction

A summary **band** runs along the bottom edge of every case study. It stays put while the case study scrolls sideways above it. It holds four groups, spread edge to edge:

1. **Role** — key + role value in the display face.
2. **Summary** — one sentence, first person, what I did and what it changed. Held at `clamp(240px, 27vw, 400px)` (the human asked for it 20% narrower than the first draft).
3. **What I owned** — six skills as a 2 × 3 list. These replace the per-step tags, which are removed from the process.
4. **Facts** — year, duration, team, each keyed by a Lucide icon (calendar, clock, users) instead of a text label; the label stays as visually hidden text.

Above the band, the page is the case study **as it already works**: hook, client, problem, the folded "Click for detailed process +" strip, the process (MX2/Quantistry/Supplement step timeline with hover artwork; Kynso's Gantt chart with its panels), the closing strip, impact (figures stay here), next. Every existing animation and interaction is preserved.

## Human decisions (in order)

- Keep the horizontal scroll.
- Pinned summary bar (from set-2 E) is the right idea; bottom band (set-3 I) chosen.
- Band separated by a tint, no line: the existing `--strip` shade.
- Original fonts only (Bricolage 800 / Plex Sans 300–400 / Plex Mono).
- Impact figures stay in the impact section, not the band.
- Summary column 20% narrower; groups spread across the band.
- Year/duration/team as icons: Lucide, "for now".
- Strip label ("Click for detailed process +") more prominent, with hover.
- Step tags removed; "What I owned" carries the skills.
- Mobile: the band sits directly under the title.

## Invariants

- One band, bottom edge, on `--strip`, no rule, no shadow, z-index 5 (chrome tier).
- Band order: role → summary → owned → facts.
- The scroll area above is exactly the window minus the band; nothing in a section is clipped by the band.
- Keys in the band are `--ghost` (the paler `--tag` fails on `--strip` at 4.24:1); values `--ghost-link`; role `--ink`.
- Fixed corner chrome (privacy link, theme toggle) clears the band.
- Below 960px the band is in flow, under the hook's title.
- Short windows (added in the build, not a human decision): 760–860px tall, the band tightens its padding; below 760px it becomes a tinted panel in the scroll beside the title instead of taking height. Sections never ride up under the nav (`align-content: safe center`).

## Allowed variation

- Summary sentence and owned list per case study.
- Owned list length 4–6.

## Requires reopening

- Moving the band to another edge, adding figures to it, or adding a rule/shadow.
- Replacing Lucide with drawn icons.

## Copy per case study (summary + owned)

All four approved by the owner (2026-10-26, after the HR copy review).

- **MX2** — "I led design and product on MX2, a marketing platform for small businesses, and cut first-campaign setup from 30 minutes to 5." Owned: Domain research, Onboarding, Information architecture, Prototyping in code, Design system, AI interaction.
- **Kynso** — "As co-founder, I designed Kynso's iOS app from zero with one engineer, splitting calm planning from mid-workout screens, and took it into internal testing." Owned: Product roadmap, User research, iOS app design, Design system, Brand system, Marketing.
- **Quantistry** — role "Product & Brand Designer". "I rebuilt Quantistry's brand and website in 8 weeks, giving the founders proof of their enterprise traction for their sales calls and Series A pitches." Owned: Domain research, Pitch strategy, Brand identity, Design system, Motion direction, Content strategy.
- **Supplement** — "Hired for a visual refresh, I traced a 90% return rate to a hidden subscription and rebuilt checkout around opt-in, cutting returns to 10%." Owned: UI redesign, Data analysis, Checkout UX, Transparent pricing, Stakeholder management, P&L framing.

Copy rules settled in the review: Supplement's +80% is **net kept orders** (orders fell 80%, returns 90% → 10%); no "deceptive" for the client's checkout. Quantistry makes no claim that the round closed. Kynso's six inputs are strength, cardio, mobility, nutrition, sleep and, for women, the menstrual cycle; "3x" is from online user tests with 5 people.

## Build record (2026-10-26)

- `css/style.css` (+ rebuilt `style.min.css`): `.sb` band; `.cs` sized `100dvh − --band-h` and made the `cs` size container, with every case-study `vh` switched to `cqh`; `safe center` section alignment; short-window modes; stronger `.cs__reveal` label; `.cs__step-tags` removed; `.legal` / `.theme-toggle` lifted by `--band-h`.
- `mx2.html`, `kynso.html`, `quantistry.html`, `supplement.html`: hook sentence and meta row moved into the band; band + measuring script after the hook; step tags removed; an inline module loads the band icons (absolute URLs; a relative module file failed on `file://` and in previews, so `js/sb-icons.js` was removed).
- Icons: Lucide calendar / clock / users via Lucide's own per-icon ES modules from unpkg, pinned, inline in each page.
- Verified in the browser at 1440×900, 1440×800, 1366×768, 1280×720 (all four pages, process open: no section under the nav or past the band), 375×812 (band under the title, no sideways overflow), light and dark. MX2 step hover with screenshots, Kynso track hover and the Marketing fold, the reveal strips and the band-height script were exercised.
- Not yet: owner review of the Kynso / Quantistry / Supplement summary and owned copy; the human's own look at the build.
