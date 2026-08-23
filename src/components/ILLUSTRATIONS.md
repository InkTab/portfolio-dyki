# Illustrations — open request

**Status: waiting on artwork from Taya.**

The `<Illustration>` component and the `<ProgressiveBlur>` treatment are built
and working, but nothing uses them yet, so there is no illustration specimen in
the playground. It would only ever show a placeholder, and a placeholder
pretending to be a design decision is worse than an honest gap.

## Before asking, work out where the artwork actually goes

Do not ask for "some illustrations". Each request needs three things settled
first, because they determine the export and cannot be changed afterwards
without a redraw:

1. **Placement** — which section, and how big on screen at desktop width.
2. **Surface** — paper or ink. A PNG carries its own colour and cannot follow
   the surface, so a piece appearing on both needs two files (`srcInk`).
3. **Treatment** — Composition A (blur over the artwork, so it needs 10–15%
   empty space on the dissolving edge) or Composition B (crisp artwork with a
   bloom beside it, so it needs no bleed room at all).

## Current thinking on placement

| Where | Why | Size @1x | Treatment |
| --- | --- | --- | --- |
| Hero, right of the headline | The one place a large piece earns its weight | 640 × 640 | B — hero art should stay crisp |
| Between Case studies and Get in touch | The longest unbroken stretch of the page | 1280 × 220 | A, `to bottom` — dissolves into the footer |
| Case study covers (×3) | Currently a grey placeholder block | 420 × 262 | A, `to bottom`, subtle |

Export specs and naming conventions: `public/illustrations/README.md`.
