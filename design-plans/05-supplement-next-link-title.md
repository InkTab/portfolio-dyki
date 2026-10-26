# Use the homepage title for the MX2 link at the end of the Supplement case study

Written against: `cc09bd2` (branch `taya/case-study-improvement`)

## Evidence chain

- Surface: the closing "Next case study" panel (`.cs__next`) of `supplement.html`, the link to `mx2.html`.
- Problem: the link title reads `MX2 AI Marketing` (`supplement.html:503`). The other three next-links reuse word for word the title the homepage gives the destination:
  - `kynso.html` → `Quantum Chemistry Startup Website` (homepage `index.html:173–174`)
  - `quantistry.html` → `Supplement Checkout Fix` (homepage `index.html:185–186`)
  - `mx2.html` → `Kynso Fitness App` (homepage `index.html:159–160`)
  - homepage title for MX2: `Marketing AI Service` (`index.html:196–197`)

  A reader who chose a project from the homepage meets the same project under a different name only on this one link.
- Design evidence: a direct contradiction among sibling instances of one component (`.cs__next-title`) within one task (moving through the case studies). Supporting: `docs/WEBSITE_COPY.md:513` gives this field a 20–45 character limit, and `MX2 AI Marketing` is 16; `Marketing AI Service` is 20.
- Owner: the HTML copy in `supplement.html`. The component styling (`.cs__next-title`, `.cs__row`, `css/style.css` lines ~1665–1695) is unchanged.
- Scope and affected surfaces: `supplement.html:503`; the copy inventory entry at `docs/WEBSITE_COPY.md:513`.
- Uncertainty: `docs/WEBSITE_COPY.md` and `mx2.html`'s `<title>` use "MX2 AI Marketing" as the case study's name elsewhere. This plan only aligns the visible next-link with its siblings and the homepage. It does not rename the case study.

## Design decision

A "Next case study" link names its destination with the title the homepage uses for it. Every other next-link already does this, so one name follows the project from the homepage to every page that points to it. Supplement's link adopts `Marketing AI Service`.

## Reuse

- Component: `.cs__next-title` with `data-multiline` (the page script splits it into `.cs__row` lines for the staggered marker). No style change.
- Exemplar: `quantistry.html` `.cs__next` block (`<span class="cs__next-title" data-multiline>Supplement Checkout Fix</span>`), and the homepage label in `index.html:196–197`.

No new primitive.

## Changes

1. `supplement.html` (line 503)
   - Change: `<span class="cs__next-title" data-multiline>MX2 AI Marketing</span>` → `<span class="cs__next-title" data-multiline>Marketing AI Service</span>`.
   - Preserve: `href="mx2.html"`, the `data-multiline` attribute, the `.cs__next-arrow`, and the `Next case study` eyebrow.
   - Verify: the closing panel reads `Marketing AI Service →`; hovering it draws the marker across the title (row by row if it wraps) and moves the arrow 6px right.
2. `docs/WEBSITE_COPY.md` (line 513)
   - Change: `` `MX2 AI Marketing` (16 chars) `` → `` `Marketing AI Service` (20 chars) ``, keeping the limit text.
   - Verify: the Page 5 Section 6 entry matches the page.

## Scope

- Inherit: the Supplement closing panel in both layouts (horizontal canvas above 960px, stacked below).
- Verify: the multi-line split still produces clean rows at 1024px and 375px, where the panel is narrowest.
- Exclude: `mx2.html`'s `<title>`, meta description and `aria-label` ("MX2 AI Marketing case study"); the page headings in `docs/WEBSITE_COPY.md`; the homepage label itself; the nav menu's `MX2 / Marketing AI` pair. Renaming the case study everywhere is a separate decision.

## Validation

- Product: a reader finishing Supplement recognises the next project as the one listed on the homepage.
- Interface: `supplement.html`, scroll to the end at 1440×900 and 375×812, light and dark. Hover and keyboard-focus the link and confirm the marker and arrow behave as on `quantistry.html`'s next-link.
- System: all four `.cs__next-title` strings now equal their destination's homepage label.
- Repository: `grep -o 'cs__next-title" data-multiline>[^<]*' kynso.html quantistry.html supplement.html mx2.html` → `Quantum Chemistry Startup Website`, `Supplement Checkout Fix`, `Marketing AI Service`, `Kynso Fitness App`.

## Stop conditions

- Stop if the homepage label for MX2 has changed since `cc09bd2`. Use the current homepage label, not this plan's string.
- Stop if any other next-link has stopped matching its homepage label. The pattern this plan relies on would then no longer hold; report it instead.

## Design documentation

- After acceptance and validation: none in `DESIGN.md`. The copy inventory update is in change 2.
