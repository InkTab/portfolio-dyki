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

**Transparency:** if a shot is a self-contained card or phone frame, keep the background
transparent — those get a shadow cast from their own silhouette. If the design sits on a
canvas that isn't in the export, flatten it onto white instead. Either works; I check the
alpha per file and pick.

**One caution learned on mx2:** any label or caption *outside* the artwork's opaque area
(a "Before"/"After" tag floating on transparency) disappears in dark mode if it was
exported as black at low alpha. Keep that kind of type inside the card, or export it at a
mid grey.

---

## Product track — 4

Open by default. This is the track most visitors will see.

- [ ] **01 · User research** → `assets/kynso-product-01`
      Interview synthesis — users combining three trackers with ChatGPT, and the core
      insight that readiness scores fail when isolated from diet, sleep and cycle.
      <br>`gt-shot-research` — **this one is active on page load**, the first artwork
      anyone sees on the page. Worth making it the strongest of the set.

- [ ] **02 · Dual UI modes** → `assets/kynso-product-02`
      Planning mode beside active-training mode, and the gym field-test finding that
      dense layouts collapse during exertion.
      <br>`gt-shot-prototyping`

- [ ] **03 · UI iteration** → `assets/kynso-product-03`
      Before/after of home: PR vanity stats removed, pre-workout screens simplified,
      readiness made fully interactive so users see what drives the score.
      <br>`gt-shot-testing`

- [ ] **04 · Design system** → `assets/kynso-product-04`
      Component library, tokens, state documentation — the dark-mode architecture with
      domain-specific neon colours.
      <br>`gt-shot-system`

---

## Branding track — 6

Collapsed until someone clicks the Branding bar.

- [ ] **Overview** → `assets/kynso-branding-overview`
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

- [ ] **03 · Logo design** → `assets/kynso-branding-03`
      The four geometric shapes in 3D rotation: strength, cardio, mobility and recovery
      unified in one mark.
      <br>`gt-shot-b-logo`

- [ ] **04 · Domain palette** → `assets/kynso-branding-04`
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

- [ ] **Overview** → `assets/kynso-marketing-overview`
      Shown when hovering the collapsed **Marketing** bar itself. Landing page,
      positioning and the pre-beta funnel in one board.
      <br>`gt-shot-marketing`

- [ ] **01 · Positioning** → `assets/kynso-marketing-01`
      The "antidote to fragmented fitness apps" framing — all inputs analysed together
      rather than in isolated silos.
      <br>`gt-shot-m-positioning`

- [ ] **02 · Landing page** → `assets/kynso-marketing-02`
      The pre-beta waitlist page: integration, privacy, Apple Health sync.
      <br>`gt-shot-m-waitlist`

- [ ] **03 · Onboarding copy** → `assets/kynso-marketing-03`
      The transparent rationale for biological-sex questions, tied to cycle-aware
      readiness math.
      <br>`gt-shot-m-listing`

- [ ] **04 · Beta outreach** → `assets/kynso-marketing-04`
      Recruiting hybrid lifter-runners who actively struggle with cross-app tracking.
      <br>`gt-shot-m-content`

- [ ] **05 · Beta launch** → `assets/kynso-marketing-05`
      Cohort rollout stress-testing dual-mode screens and readiness reliability in real
      training environments.
      <br>`gt-shot-m-launch`

---

## Don't work from the current alt text

Four of the placeholders still carry alt text from an earlier copy pass and describe the
wrong thing:

| Figure | Current alt says | Track is actually about |
|---|---|---|
| `gt-shot-m-listing` | "App Store listing screenshots and caption order" | Onboarding copy — biological-sex rationale |
| `gt-shot-m-content` | "Eight-week content calendar" | Beta outreach — recruiting lifter-runners |
| `gt-shot-marketing` | "Waitlist landing page and App Store listing studies" | The whole marketing track |
| `gt-shot-b-research` | "Category teardown and name candidate screening" | Close, but predates the current note |

The descriptions in this file are taken from the captions on the page, which are current.
The figure ids also carry old names (`m-listing` for what is now Onboarding copy) — those
are internal, nothing to change unless you want them tidied.
