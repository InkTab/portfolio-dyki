# Kynso — artwork checklist

16 images. Kynso has no diagrams; every track in the "How it got built" chart hands
its artwork to the panel on the right.

Tick as you export. Drop finished files in `assets/` and I'll wire them up, convert
to WebP, and rewrite the alt text against what's actually in each one.

---

## Export spec

| | |
|---|---|
| **Panel, desktop** | 340 × 244, fixed. Fits to height, so a 9:19.5 phone shot lands ~113px wide |
| **Panel, mobile** | Full column width (~316px), natural height — a vertical shot renders ~316 × 684 |
| **Zoom** | Mobile only, tap to open, up to 2.8× viewport. No zoom on desktop |
| **Format** | PNG or WebP. I'll convert and size — don't pre-compress |
| **Resolution** | Export at 2× or better so the mobile zoom has something to work with |

**Transparency — the rule that matters now.** These images sit bare on the page: no sheet
behind them, no frame around them, and the canvas under them flips with the theme. So
**everything that must be readable has to be inside an opaque area of the export.**

If a shot is a self-contained card or phone frame, keep the background transparent — the
transparency is only margin, and those cast a shadow from their own silhouette. If the
design sits on a canvas that isn't in the export, **flatten it onto that canvas** — for
Kynso that means its own dark ground, not white. A board exported with its dark ground
stripped out leaves its white labels floating on nothing, and they vanish the moment the
reader is in light mode.

**The mx2 caution, now cutting both ways:** type outside the opaque area disappears
against one canvas or the other. There it was black type at low alpha vanishing on carbon;
here it is white type vanishing on paper. There is no sheet to protect it any more, so the
only fix is in the export.

**Three to re-export when convenient** — all three read correctly in dark mode and lose
floating type in light:

| File | What's floating on transparency |
|---|---|
| `kynso-branding-overview` | the `sides / bottom / front / back` labels and the grey wordmark |
| `kynso-product-02` | the second card's `INCLINE DUMBBELL PRESS` header and its column labels |
| `kynso-product-04` | the white ghost-button states, `NOTE / OPTIONAL`, and `Bench Press` |

`kynso-marketing-02` has the opposite quirk — the landing page's own light band was
exported as transparency, so it reads as a hole rather than a white section. Its type is
dark, so nothing is lost in light mode; it thins out in dark mode instead.

---

## Product track — 4

Open by default. This is the track most visitors will see.

- [x] **01 · User research** → Live pull quote card (`.pq`)
      High-impact athlete pull quote ("I built myself a GPT thread... I dump everything in there")
      and hacked multi-tracker pipeline schematic on dual-register card ground.
      <br>`gt-shot-research` — **this one is active on page load**, the first artwork
      anyone sees on the page.

- [x] **02 · Dual UI modes** → `assets/kynso-product-02`
      Planning mode beside active-training mode, and the gym field-test finding that
      dense layouts collapse during exertion.
      <br>`gt-shot-prototyping`

- [x] **03 · UI iteration** → `assets/kynso-product-03`
      Before/after of home: PR vanity stats removed, pre-workout screens simplified,
      readiness made fully interactive so users see what drives the score.
      <br>`gt-shot-testing`

- [x] **04 · Design system** → `assets/kynso-product-04`
      Component library, tokens, state documentation — the dark-mode architecture with
      domain-specific neon colours.
      <br>`gt-shot-system`

---

## Branding track — 6

Collapsed until someone clicks the Branding bar.

- [x] **Overview** → `assets/kynso-branding-overview`
      Shown when hovering the collapsed **Branding** bar itself, not any numbered phase —
      easy to miss. One board covering brand identity, the 3D domain mark and the domain
      colour system.
      <br>`gt-shot-branding`

- [ ] **01 · Market audit** → `assets/kynso-branding-01`
      Category teardown and name candidates screened across global markets for
      linguistics and conflicts, including the rejected wellness tropes.
      <br>`gt-shot-b-research`

- [ ] **02 · Naming** → `assets/kynso-branding-02`
      The shortlist and how Kynso was chosen — clean, unclaimed, no romantic fitness
      metaphor.
      <br>`gt-shot-b-naming`

- [x] **03 · Logo design** → `assets/kynso-branding-03`
      The four geometric shapes in 3D rotation: strength, cardio, mobility and recovery
      unified in one mark.
      <br>`gt-shot-b-logo`

- [x] **04 · Domain palette** → `assets/kynso-branding-04`
      High-contrast neon on pure dark, showing how a user decodes domain type before
      reading anything.
      <br>`gt-shot-b-concept`

- [ ] **05 · Brand system** → `assets/kynso-branding-05`
      Guideline spreads: voice, type scale, accent rules, and the onboarding disclosure
      standards for sensitive biological data.
      <br>`gt-shot-b-guidelines`

---

## Marketing track — 6

Collapsed until someone clicks the Marketing bar.

- [x] **Overview** → Live funnel cascade (`.fn` on `gt-shot-marketing`)
      Shown when hovering the collapsed **Marketing** bar itself. Three crops of the
      waitlist page cascading bottom-left to top-right: the hook (hero headline and
      the Apple Health sync badge), the action (email capture and the Join the beta
      button), and the confirmation ("You're on the list", cohort joined). Drawn
      rather than exported, so it inverts with the theme.
      <br>`gt-shot-marketing`

- [x] **01 · Positioning** → Live card (`.mp` on `gt-shot-m-positioning`)
      The "antidote to fragmented fitness apps" framing — upper register showing 4 disconnected
      siloed pills; lower dark register showing the Kynso antidote grouping all 4 into a single
      node with correlated intelligence.
      <br>`gt-shot-m-positioning`

- [x] **02 · Landing page** → `assets/kynso-marketing-02`
      The pre-beta waitlist page: integration, privacy, Apple Health sync.
      <br>`gt-shot-m-waitlist`

- [x] **03 · Onboarding copy** → Live interactive card (`.oc`) in DOM
      The transparent rationale for biological-sex questions, tied to cycle-aware
      readiness math.
      <br>`gt-shot-m-listing`

- [x] **04 · Beta outreach** → Live applicant qualification scorecard (`.qc`) in DOM
      Clean screening scorecard showing the three mandatory thresholds (Discipline Mix, Active Stack, Friction Point) used to curate an intentional test cohort.
      <br>`gt-shot-m-content`

- [x] **05 · Beta launch** → `assets/kynso-marketing-05`
      A workout detail screen from the beta build: a 45-minute resistance session,
      volume and set totals, and the per-exercise breakdown with per-set ratings.
      Source `kynso-marketing-05.jpg` (590×1280); served as `.webp`. Fully opaque
      dark-ground phone capture, so it takes `--cut` — it is a sheet in its own
      right and casts `--shadow-cut` from its own silhouette.
      <br>`gt-shot-m-launch`

---

## Don't work from the current alt text

Four of the placeholders still carry alt text from an earlier copy pass and describe the
wrong thing:

| Figure | Current alt says | Track is actually about |
|---|---|---|
| `gt-shot-m-listing` | "App Store listing screenshots and caption order" | Onboarding copy — biological-sex rationale |
| `gt-shot-m-content` | "Eight-week content calendar" | Beta outreach — recruiting lifter-runners |
| `gt-shot-b-research` | "Category teardown and name candidate screening" | Close, but predates the current note |

The descriptions in this file are taken from the captions on the page, which are current.
The figure ids also carry old names (`m-listing` for what is now Onboarding copy) — those
are internal, nothing to change unless you want them tidied.
