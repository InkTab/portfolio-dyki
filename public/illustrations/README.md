# Illustration assets

Drop PNG artwork here. Files in `public/` are copied to the build root, so a
file at `public/illustrations/hero.png` is referenced as
`illustrations/hero.png`.

## Export specs

Transparent background, PNG-24. Export at **2x** and save the 1x alongside it:

| Placement          | Display size   | Export 1x   | Export 2x   | Component                      |
| ------------------ | -------------- | ----------- | ----------- | ------------------------------ |
| Hero               | 640 × 640      | 640 × 640   | 1280 × 1280 | `<Illustration>`               |
| Hero, full-bleed   | 1280 × 560     | 1280 × 560  | 2560 × 1120 | `<Illustration bleed>`         |
| Section divider    | 1280 × 220     | 1280 × 220  | 2560 × 440  | `<SectionDivider>`             |
| Case study cover   | 420 × 262      | 420 × 262   | 840 × 524   | `<CaseStudyCard image=…>`      |

Naming: `name.png` and `name@2x.png`. If a piece also has to appear on a dark
band, add `name-ink.png` / `name-ink@2x.png`.

```jsx
<Illustration
  src="illustrations/hero.png"
  src2x="illustrations/hero@2x.png"
  alt="…"
  blur={{ axis: 'to bottom' }}
/>
```

## Designing for the palette

- The ground is warm paper — `#fff3e0`, with `#fef9f0` for raised panels.
  Design against that, not against white.
- There is no pure white, black, or neutral grey in this system. If artwork
  needs a light or a dark, pull from the sand and violet ramps in
  `src/styles/tokens.css`.
- Neon violet `#5e23ff` is the accent. It carries a lot of weight — a little
  goes far.

## Which blur composition

Both are available per piece:

- **Blur over the artwork** (`blur`) — the illustration itself stays crisp at
  one edge and dissolves at the other. Best when the artwork is the subject.
- **Crisp artwork, bloom beside it** (`bloom`) — the illustration stays fully
  sharp and a separate gradient shape sits behind or beside it. Best when the
  artwork has fine detail that blur would destroy.

If artwork is meant to dissolve at one edge, leave that edge **un-cropped** in
the export — give it 10–15% empty space so the fade has somewhere to go.
