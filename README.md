# portfolio-dyki

My portfolio website project — starting with the design system.

This repo currently contains the **design system** and a **component playground**,
extracted from the live build of [dyki.design](https://www.dyki.design). The portfolio
pages will be built on top of it.

## Run it

```bash
npm install
npm run dev      # playground at http://localhost:5173
npm run build    # static build into dist/
npm run preview  # serve the build locally
```

`vite.config.js` uses `base: './'`, so one build works both on a GitHub Pages
project path (`/portfolio-dyki/`) and on the `dyki.design` custom domain.

## How it is organised

```
src/
  styles/
    tokens.css      design tokens — primitives + the semantic/surface layer
    fonts.css       @font-face for NAMU 1600
    reset.css       normalisation
    utilities.css   .ds-container, .ds-visually-hidden, small helpers
  components/       the library — one .jsx + .css per component
  playground/       the docs site (not part of the library)
  lib/tokens.js     JS mirror of the tokens, used to render the docs tables
```

Components import their own CSS, so `import { Button } from './components'`
brings its styles with it. There is no CSS-in-JS and no dependency beyond React.

## The layout grid

**Six columns, 24px gutter, 24px margin.** Everything that lays out in more
than one column sits on it — nothing declares its own track list.

```jsx
<Grid>
  <Col span={2}>Title</Col>
  <Col span={4}>Body copy</Col>
</Grid>
```

Or in CSS, by building a template from the same token:

```css
.thing {
  display: grid;
  grid-template-columns: repeat(var(--ds-grid-columns), minmax(0, 1fr));
  column-gap: var(--ds-grid-gutter);
}
```

The column count steps down at two breakpoints so spans stay meaningful
instead of collapsing into slivers:

| Width      | Columns |
| ---------- | ------- |
| ≥1024px    | 6       |
| 640–1023px | 3       |
| <640px     | 1       |

`--ds-grid-columns` lives on `:root`, so every grid steps together. **Spans
must clamp with it** — a `span 4` inside a 3-column grid generates an implicit
fourth column and breaks the alignment everything else depends on. The
`.ds-col-*` classes already handle this.

The standing convention: a title takes the first two columns and its prose
takes the remaining four, so every header on the page shares one left edge for
titles and one for body copy.

One caveat worth knowing: a grid nested inside a padded container divides
*that* container's width into six, so it will not line up with the page grid.
That is correct for a component sitting inside a card, but it means page-level
content should not be wrapped in padding before it hits the grid.

## The token model

Two layers, and components only ever touch the second one.

**Primitives** are the raw ramps — `--ds-violet-400`, `--ds-sand-200`, and so on.
Nothing in a component references these directly.

**Semantic tokens** are what components read: `--ds-bg`, `--ds-fg`, `--ds-accent`,
`--ds-border-color`. These are redefined per *surface*.

### Surfaces

Three, and they are **not** equal partners. Sand and ink are the primaries —
the paper and the black. Violet is an accent.

| Surface  | Ground    | Role                                                     |
| -------- | --------- | -------------------------------------------------------- |
| `sand`   | `#fff3e0` | **Primary.** The paper. Default for most of the page.    |
| `ink`    | `#130b28` | **Primary.** The black. Contrast sections and footers.   |
| `violet` | `#5e23ff` | **Accent band.** At most one full-bleed moment per page. |

Purple otherwise shows up in three restrained ways: on primary actions
(`--ds-accent`), as a tint (`--ds-accent-soft` — the `soft` variants of Card,
Pill, and Tag), and as light (`<Bloom>`).

Nest `data-surface` on any element and everything inside re-reads the tokens:

```jsx
<Surface surface="sand" pad="lg">
  <Button>Download CV</Button>   {/* violet on paper */}
</Surface>

<Surface surface="ink" pad="lg">
  <Button>Download CV</Button>   {/* violet on black */}
</Surface>
```

That is the same `<Button>` with no variant prop. No component knows which
surface it is on, which is why adding a fourth surface later costs nothing.

## Texture & decoration

The pattern is a **sharp element paired with a progressive blur** — one edge
holds a hard boundary, the opposite edge dissolves.

`<ProgressiveBlur>` is the treatment for artwork. It compounds blur across an
axis and makes no assumption about what sits beneath it, so it works over an
illustration, a photo, or a gradient identically:

```jsx
<div className="ds-pblur-host">
  <YourIllustration />
  <ProgressiveBlur axis="to bottom" strength="2px" />
</div>
```

`axis` takes any CSS gradient direction — `to bottom`, `to top`, `to left`,
`to right`, `45deg` — plus `corners` for a radial ramp that stays sharp in the
middle and blurs outward in every direction.

The host needs headroom around the artwork, and `--ds-pblur-inset` set to the
gap. Two things have to hold at once: the layers need room to spill or blurred
pixels get clipped flat at the art's edge, and the ramp must map to the artwork
or its crisp 0% end lands on empty space and no sharp edge appears. The inset
reconciles them — the layers cover the host, the gradient stops are offset so
0% and 100% sit on the artwork's edges.

Uniform padding on the host gives you both, because the padding value *is* the
inset. `<Illustration>` exposes it as `blurSpill`:

```jsx
<Illustration src="…" src2x="…" blur={{ axis: 'to bottom' }} blurSpill="24px" />
```

`<Bloom>` is gradient decoration: a shape crisp along its leading edge and
dissolving along the axis. `sharpness` controls how long the shape holds
before it goes, and takes a named level or a raw percentage:

| Level       | Value | Reads as                                      |
| ----------- | ----- | --------------------------------------------- |
| `feathered` | 0%    | No hold at all — fades from the leading edge  |
| `soft`      | 15%   |                                               |
| `balanced`  | 30%   | Default                                       |
| `defined`   | 45%   |                                               |
| `hard`      | 60%   | Holds most of the shape, then drops away fast |

```jsx
<Bloom size="380px" axis="to top" sharpness="feathered" intensity="soft" />
```

**Use it sparingly** — one per section at most, in the margin, never behind
copy that has to be read. `<Grain>` (or the `.ds-grain` class) lays the same
texture over a section as paper grain.

### Two rules

**Every blurred or gradient shape carries grain.** `grain` on `<Bloom>` sets
intensity, not presence — it is floored at 0.25 and cannot be switched off. A
clean gradient bands on the warm ground and reads as a different material from
everything else in the system.

**Blur never touches text.** `backdrop-filter` blurs everything beneath it, and
blurred type reads as a rendering fault rather than a treatment. Keep the blur
host to artwork only and put captions outside it. `<ProgressiveBlur>` warns in
development if it finds text underneath.

### Illustrations

Artwork is raster (PNG + 2x). `<Illustration>` is the slot, and both
compositions are props on it:

```jsx
{/* A: the artwork itself dissolves */}
<Illustration src="…" src2x="…" blur={{ axis: 'to bottom' }} />

{/* B: crisp artwork, gradient shape beside it */}
<Illustration src="…" src2x="…" bloom={{ x: 85, y: 90, size: '180px' }} />
```

A PNG carries its own colour and cannot follow the surface the way an SVG can.
Artwork that also has to sit on a dark band takes a second file via `srcInk`,
selected by the nearest `data-surface="ink"` — **not** by `prefers-color-scheme`,
since the site ships one theme.

Export specs and naming live in
[`public/illustrations/README.md`](public/illustrations/README.md).

## Components

| Component        | What it is                                                  |
| ---------------- | ----------------------------------------------------------- |
| `Heading` `Text` `Label` | Typography primitives                               |
| `Button`         | solid / outline / ghost / link, three sizes                 |
| `Link`           | wavy purple underline on hover                              |
| `Pill`           | rounded outline chip; pass `onClick` for a filter toggle    |
| `Tag`            | small square metadata chip                                  |
| `StatusDot`      | availability indicator with a pulsing ring                  |
| `Field`          | labelled input or textarea, with hint and invalid states    |
| `Surface`        | re-themes its subtree                                       |
| `Card`           | generic container; raised / outline / flat / soft           |
| `Grid` / `Col`   | the six-column layout grid                                  |
| `Illustration`   | artwork slot; PNG + 2x, both blur compositions as props     |
| `Bloom`          | gradient decoration with a directional falloff              |
| `ProgressiveBlur`| compounding blur laid over artwork                          |
| `Grain`          | paper texture overlay                                       |
| `CaseStudyCard`  | cover + labelled fields + pinned CTA row                    |
| `MetaList`       | label/value rows                                            |
| `TraitCard`      | rule-topped column                                          |
| `SectionHeader`  | mono eyebrow + display title + lede                         |
| `TickerBar`      | divided stat strip                                          |
| `NavBar`         | brand lockup, links, live Toronto clock, availability       |

`NavBar`, `TickerBar`, and `MetaList` respond to **their own width** via
container queries rather than the viewport's, so they lay out correctly inside
any column.

## Halo

Accent-filled controls carry a halo — the accent bleeding slightly past the
control's edge, so it reads as lit rather than merely filled. It comes from
`--ds-halo`, defined per surface, and applies to solid buttons and
accent-filled pills. Outline buttons earn it on hover only; disabled controls
never have it, because a disabled control is not lit.

## Motion & accessibility notes

- One easing curve for almost everything: `--ds-ease-out`. The playground's
  motion block plays every row simultaneously, because durations are only
  comparable side by side.
- `Marquee` pauses on hover and stops completely under `prefers-reduced-motion`;
  its visible text is `aria-hidden` with a readable copy for screen readers.
- `DotGrid` is decorative and hidden from assistive tech.
- Focus rings come from `--ds-focus`, which is redefined per surface.
