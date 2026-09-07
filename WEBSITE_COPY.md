# Website Copy & Character Limits Reference

This document compiles **every user-facing text element across all 5 pages of the website**, detailing current copy, character counts, recommended character limits, and layout notes.

---

## Summary of Pages
1. [Global Components (Shared Across Pages)](#global-components-shared-across-pages)
2. [Page 1: index.html (Homepage / Interactive Ideas Canvas)](#page-1-indexhtml--homepage--ideas-canvas)
3. [Page 2: about-section.html (About Me — The Marble & The Thread)](#page-2-about-sectionhtml--about-me)
4. [Page 3: kynso.html (Case Study — Kynso Fitness App)](#page-3-kynsohtml--case-study-kynso)
5. [Page 4: supplement.html (Case Study — Supplement Checkout Fix)](#page-4-supplementhtml--case-study-supplement-checkout-fix)
6. [Page 5: 404.html (Error 404 — D20 Fact Roller)](#page-5-404html--error-404-page)
7. [Quick Reference: Character Limits Summary Table](#quick-reference-character-limits-summary-table)

---

# Global Components (Shared Across Pages)

### Navigation Rail (Present on all pages)
*Fixed persistent rail on the right edge (`.rail` / `.ia__rail`). Mono uppercase typography.*

| Element | Copy | Chars | Recommended Limit | Layout Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **Nav Link 1** | `Home` | 4 | **3 – 8 chars** | Sits in compact horizontal/vertical rail |
| **Nav Link 2** | `About me` | 8 | **4 – 10 chars** | Sits in compact rail |
| **Nav Link 3** | `Contact` | 7 | **4 – 10 chars** | Sits in compact rail |
| **CV Badge** | `CV` | 2 | **2 – 4 chars** | Paired with download icon inside fixed pill |

---

# Page 1: `index.html` — Homepage / Ideas Canvas

### 1. Page Metadata
* **Browser Tab Title:** `Taya The Designer` (17 chars)
  * *Limit:* **15 – 60 chars** (Optimal for browser tab and search engine results)

### 2. Header & Hint
* **Stage Top Hint:** `Hover an idea` (14 chars)
  * *Limit:* **10 – 22 chars** (Mono 10px uppercase, centered at top of viewport)

### 3. Center Core (Hero Area)
*The central statement with dynamic hover reveals and spark tags.*

* **Hero Lead Sentence:** `Product Designer with experience in business strategy and UI/UX` (72 chars)
  * *Limit:* **50 – 85 chars**
  * *Rationale:* Uses large Bricolage Grotesque display font (`clamp(2.15rem, 4.9vw, 3.5rem)`). Balances in 2–3 lines within the 700px central radial mask.

* **Word Triggers & Spark Tags (Hover reveals on keywords):**
  * **Trigger 1:** `business strategy` (17 chars)
    * *Spark chip 1:* `branding` (8 chars) | *Limit:* 6 – 14 chars
    * *Spark chip 2:* `marketing` (9 chars) | *Limit:* 6 – 14 chars
    * *Spark chip 3:* `creative strategy` (17 chars) | *Limit:* 8 – 18 chars
    * *Spark chip 4:* `SEO` (3 chars) | *Limit:* 3 – 8 chars
  * **Trigger 2:** `UI/UX` (5 chars)
    * *Spark chip 1:* `design system` (13 chars) | *Limit:* 8 – 16 chars
    * *Spark chip 2:* `user testing` (12 chars) | *Limit:* 8 – 16 chars
    * *Spark chip 3:* `research` (8 chars) | *Limit:* 6 – 14 chars
    * *Spark chip 4:* `prototyping` (11 chars) | *Limit:* 8 – 16 chars
  * *Note:* Each spark has custom pixel offset coordinates (`--sx`, `--sy`). Words should remain 1–2 words each so they don't overlap adjacent words.

* **Core Subheading & Identity Reveal:**
  * **Subheading:** `Hey, I’m Taya. I move ideas from 1 to 1000` (41 chars)
    * *Limit:* **30 – 55 chars** (Concise single-line or compact 2-line anchor below lead text)
  * **Hover Reveal Tooltip (on "Taya"):** `AKA Tetiana Burlachenko` (23 chars)
    * *Limit:* **15 – 30 chars** (Centered mono badge tooltip, `white-space: nowrap`)

### 4. Floating Drifting Ideas (8 Stage Slots)
*Floating interactive nodes distributed across the canvas. Each node has a title label, a category tag, and optional sparks.*

* **Idea 1 (Coordinates: 20% / 18% — links to `kynso.html`):**
  * *Label:* `Kynso Fitness App` (17 chars) | *Limit:* 15 – 30 chars
  * *Tag:* `Case study →` (12 chars) | *Limit:* 10 – 16 chars
  * *Sparks:* `design system`, `branding`, `research`, `user testing`, `marketing`, `prototyping`

* **Idea 2 (Coordinates: 50% / 6%):**
  * *Label:* `Board game character sheet tracker` (34 chars) | *Limit:* 15 – 35 chars
  * *Tag:* `Prototype` (9 chars) | *Limit:* 8 – 16 chars

* **Idea 3 (Coordinates: 84% / 9%):**
  * *Label:* `Flower delivery app` (19 chars) | *Limit:* 15 – 30 chars
  * *Tag:* `Design prototype` (16 chars) | *Limit:* 8 – 16 chars

* **Idea 4 (Coordinates: 74% / 24% — links to `quantistry.html`):**
  * *Label:* `Quantum Chemistry Startup Website` (33 chars) | *Limit:* 15 – 35 chars
  * *Tag:* `Case study →` (12 chars) | *Limit:* 10 – 16 chars
  * *Sparks:* `user interviews`, `research`, `pitch deck design`, `website design`

* **Idea 5 (Coordinates: 7% / 68%):**
  * *Label:* `ADHD todo list` (14 chars) | *Limit:* 12 – 30 chars
  * *Tag:* `Prototype` (9 chars) | *Limit:* 8 – 16 chars

* **Idea 6 (Coordinates: 80% / 82% — links to `supplement.html`):**
  * *Label:* `Supplement Checkout Fix` (23 chars) | *Limit:* 15 – 30 chars
  * *Tag:* `Case study →` (12 chars) | *Limit:* 10 – 16 chars
  * *Sparks:* `data analysis`, `UI design`, `UX design`

* **Idea 7 (Coordinates: 16% / 88%):**
  * *Label:* `Synonyms lookup` (15 chars) | *Limit:* 12 – 30 chars
  * *Tag:* `Prototype` (9 chars) | *Limit:* 8 – 16 chars

* **Idea 8 (Coordinates: 52% / 86% — links to `mx2.html`):**
  * *Label:* `Marketing AI Service` (20 chars) | *Limit:* 15 – 30 chars
  * *Tag:* `Case study →` (12 chars) | *Limit:* 10 – 16 chars
  * *Sparks:* `product design`, `design system`, `research`, `branding`, `user testing`

---

# Page 2: `about-section.html` — About Me (The Marble & The Thread)

> **CRITICAL LAYOUT CONSTRAINT FOR THIS PAGE:**
> On desktop, each screen is locked to **100vh / 100dvh snap height** with `overflow: hidden`.
> Paragraphs or titles exceeding recommended limits will clip on 13" laptops (768px – 800px viewport heights).
> Keep each paragraph strictly under **200–220 characters** (~30 words max).

### Page Metadata & Top Indicator
* **Browser Tab Title:** `About me — The Marble & The Thread` (35 chars) | *Limit:* 20 – 50 chars
* **Scroll Hint:** `Scroll ↓` (8 chars) | *Limit:* 6 – 12 chars

---

### SCREEN 01: STAGE 01 — Substrate (The Unhewn Monolith)

#### Left Column (Professional)
* **Kicker:** `Pre-career` (10 chars) | *Limit:* 20 – 35 chars
* **Title:** `Curiosity as raw material` (25 chars) | *Limit:* 18 – 35 chars
* **Paragraph 1:** `Before design systems, components, and polished interactions, there is the uncarved block: an appetite for understanding how complex structures function` (152 chars) | *Limit:* 140 – 190 chars
* **Paragraph 2:** `Early business classes and high school in the US pushed me to question everything. I became obsessed with why systems function as they do, always dreaming up ways to make them better.` (185 chars) | *Limit:* 160 – 220 chars

#### Center Column (Marble Sculpture Meta)
* **Year Range:** `1999 – 2012` (11 chars) | *Limit:* 9 – 12 chars
* **Stage Pill:** `STAGE 01` (8 chars) | *Limit:* 8 chars
* **Stage Name:** `Unhewn Monolith` (15 chars) | *Limit:* 14 – 24 chars
* **Image Alt Text:** `Raw marble quarry block with rough split textures and grain`

#### Right Column (Personal)
* **Kicker:** `Personal` (8 chars) | *Limit:* 18 – 32 chars
* **Title:** `Finding the chisel` (18 chars) | *Limit:* 18 – 35 chars
* **Paragraph 1:** `Born in Odesa, Ukraine, I lived inside stories—reading street signs, building imaginary worlds, and writing. When given the chance to study in Hawaii, the only answer was yes.` (176 chars) | *Limit:* 140 – 190 chars
* **Paragraph 2:** `I wrote poetry, ran chemistry experiments, and stayed relentlessly curious about how things work. Living across different cultures expanded that imagination even further.` (171 chars) | *Limit:* 150 – 210 chars
* **Card Label:** `Early Premise` (13 chars) | *Limit:* 10 – 20 chars
* **Card Quote:** `“If you can map the hidden rulebook of a mechanism, you can reshape how people play the game.”` (94 chars) | *Limit:* 70 – 120 chars

---

### SCREEN 02: STAGE 02 — Reduction (The Primary Facets)

#### Left Column (Professional)
* **Kicker:** `Professional` (12 chars) | *Limit:* 20 – 35 chars
* **Title:** `Knocking off the excess` (23 chars) | *Limit:* 18 – 35 chars
* **Paragraph 1:** `A computer science foundation gave way to design school in Poland. I experimented across sculpture, video, and branding before zeroing in on digital products—stripping away everything that didn’t fit.` (201 chars) | *Limit:* 150 – 210 chars
* **Paragraph 2:** `Freelancing took off overnight. I hired a classmate, ran client comms, and delivered identities and packaging under relentless standards. I led early, burned bright, and learned the cost of brute force.` (204 chars) | *Limit:* 150 – 210 chars

#### Center Column (Marble Sculpture Meta)
* **Year Range:** `2013 – 2021` (11 chars) | *Limit:* 9 – 12 chars
* **Stage Pill:** `STAGE 02` (8 chars) | *Limit:* 8 chars
* **Stage Name:** `The Primary Facets` (18 chars) | *Limit:* 14 – 24 chars
* **Image Alt Text:** `Chiseled marble block with primary facets and stone chips`

#### Right Column (Personal)
* **Kicker:** `Personal` (8 chars) | *Limit:* 18 – 32 chars
* **Title:** `New languages & raw momentum` (28 chars) | *Limit:* 18 – 35 chars
* **Paragraph 1:** `Reconnecting with my roots led me home to Ukraine, then outward to Poland. Accepted into art school without knowing a word of Polish, I threw myself into the deep end and reached B2 fluency in two months flat.` (209 chars) | *Limit:* 160 – 220 chars
* **Paragraph 2:** `I lived in creative overdrive—making sculptures, music, and video by day, doing client work by night. The hunger to master every medium was exhilarating, until the pace caught up.` (181 chars) | *Limit:* 140 – 190 chars
* **Card Label:** `HARD-WON CLARITY` (16 chars) | *Limit:* 10 – 20 chars
* **Card Quote:** `“Striking hard shapes the stone fast, but without rhythm and patience, you only break the tool.”` (96 chars) | *Limit:* 70 – 120 chars

---

### SCREEN 03: STAGE 03 — Scale & Systems (The Awakening Form)

#### Left Column (Professional)
* **Kicker:** `Professional` (12 chars) | *Limit:* 20 – 38 chars
* **Title:** `Solo craft to living systems` (28 chars) | *Limit:* 18 – 35 chars
* **Paragraph 1:** `At Propaganda Solutions, I shifted from shaping perception through marketing into architecting web products. When the team condensed to just me, I took full ownership of the agency's digital design pipeline.` (210 chars) | *Limit:* 160 – 220 chars
* **Paragraph 2:** `Running solo meant owning the entire spectrum—from brand positioning to web architecture. I helped reshape the agency's identity while delivering digital products that balanced business goals with fine craft.` (208 chars) | *Limit:* 150 – 210 chars

#### Center Column (Marble Sculpture Meta)
* **Year Range:** `2021 – 2025` (11 chars) | *Limit:* 9 – 12 chars
* **Stage Pill:** `STAGE 03` (8 chars) | *Limit:* 8 chars
* **Stage Name:** `The Awakening Form` (18 chars) | *Limit:* 14 – 24 chars
* **Image Alt Text:** `Classical marble sculpture emerging from the stone block`

#### Right Column (Personal)
* **Kicker:** `Personal` (8 chars) | *Limit:* 18 – 34 chars
* **Title:** `Village stillness & worldbuilding` (33 chars) | *Limit:* 18 – 35 chars
* **Paragraph 1:** `After burnout, I closed my laptop to travel and reset. When war escalated, living in quiet Ukrainian villages taught me the deep power of slowness before I finally made my way back home to Odesa.` (197 chars) | *Limit:* 140 – 200 chars
* **Paragraph 2:** `In Odesa, I co-founded a D&D club that outgrew two spaces. Crafting campaigns showed me that worldbuilding and product design share the same truth: both rely on clear systems and player agency.` (193 chars) | *Limit:* 140 – 195 chars
* **Card Label:** `SYSTEMS OF PLAY` (15 chars) | *Limit:* 10 – 20 chars
* **Card Quote:** `“Designing a product is just worldbuilding: craft the rules, honor the player's agency, and let the story unfold.”` (114 chars) | *Limit:* 70 – 120 chars

---

### SCREEN 04: STAGE 04 — Horizon (The Polished Monument)

#### Left Column (Professional)
* **Kicker:** `Professional` (12 chars) | *Limit:* 20 – 35 chars
* **Title:** `Instruments for human agency` (28 chars) | *Limit:* 18 – 35 chars
* **Paragraph 1:** `Today, I build at the edge of human agency and AI orchestration. Co-founding a fitness app gave me the canvas to design without constraints, turning autonomous tools into creative extensions of product intent.` (210 chars) | *Limit:* 160 – 235 chars
* **Paragraph 2:** `I bring ambitious 0-to-1 ideas into crisp, living software. Explore how I translate systems and craft in the Kynso Fitness App case study →` (140 chars) | *Limit:* 130 – 185 chars

#### Center Column (Marble Sculpture Meta)
* **Year Range:** `2025 – NOW` (10 chars) | *Limit:* 9 – 12 chars
* **Stage Pill:** `STAGE 04` (8 chars) | *Limit:* 8 chars
* **Stage Name:** `The Polished Monument` (21 chars) | *Limit:* 14 – 24 chars
* **Image Alt Text:** `Polished classical marble bust on plinth`

#### Right Column (Personal)
* **Kicker:** `Personal` (8 chars) | *Limit:* 18 – 32 chars
* **Title:** `Orchestrating worlds & agents` (29 chars) | *Limit:* 18 – 35 chars
* **Paragraph 1:** `Leaving home gave me room to heal and reset. Knowing how little I knew, I dove into books and film, realizing that narrative structure and product architecture share the exact same DNA.` (185 chars) | *Limit:* 140 – 190 chars
* **Paragraph 2:** `Physical discipline grounded my day-to-day focus. Today, whether steering campaigns at the game table or orchestrating AI agent workflows, I design responsive environments where people and software thrive.` (208 chars) | *Limit:* 150 – 210 chars
* **Card Label:** `SYSTEMIC LEVERAGE` (17 chars) | *Limit:* 10 – 20 chars
* **Card Quote:** `“Whether leading a campaign or directing AI agents, the goal holds: build clear systems that give others full agency.”` (116 chars) | *Limit:* 70 – 120 chars

---

# Page 3: `kynso.html` — Case Study: Kynso Fitness App

### Page Metadata
* **Browser Tab Title:** `Kynso — Fitness App Case Study` (31 chars) | *Limit:* 25 – 60 chars

---

### Section 1: The Hook
*Screen 1: The bold opening thesis statement and metadata.*

* **Eyebrow:** `Case study — Kynso` (19 chars) | *Limit:* 14 – 25 chars
* **Hook Line (H1):** `Fitness apps track training in silos. Kynso connects workouts, recovery, and fuel.` (82 chars) | *Limit:* 60 – 95 chars
* **Hook Subtitle:** `An integrated fitness platform reading workouts, nutrition, sleep, and cycle as one signal. Built from zero to pre-beta by a two-person founding team.` (154 chars) | *Limit:* 120 – 180 chars
* **Metadata Facts:**
  * **Role:** `Co-founder, design & marketing` (30 chars) | *Limit:* 15 – 35 chars
  * **Year:** `2025` (4 chars) | *Limit:* 4 – 9 chars
  * **Duration:** `16 weeks` (8 chars) | *Limit:* 6 – 15 chars
  * **Team:** `2 co-founders (1 design, 1 eng)` (31 chars) | *Limit:* 20 – 45 chars
* **Scroll Callout:** `Scroll →` (8 chars) | *Limit:* 6 – 12 chars

---

### Section 2: Venture
* **Section Kicker:** `Venture` (7 chars) | *Limit:* 6 – 14 chars
* **Lede Statement:** `Kynso is an early-stage startup connecting training, nutrition, and cycle into a single ecosystem.` (99 chars) | *Limit:* 75 – 120 chars
* **Prose:** `Athletes were juggling three different trackers, a notes app, and ChatGPT just to understand if they were recovered. Kynso was founded to solve that fragmentation. As co-founder, I led product design, brand identity, and marketing, working alongside one engineer to take the concept from zero into internal testing ahead of our upcoming beta.` (338 chars) | *Limit:* 260 – 380 chars
* **Business Shape Facts:**
  * **Industry:** `Health & fitness` (16 chars) | *Limit:* 12 – 30 chars
  * **Stage:** `Pre-beta` (8 chars) | *Limit:* 8 – 20 chars
  * **Surface:** `iOS` (3 chars) | *Limit:* 15 – 35 chars

---

### Section 3: The Problem
* **Section Kicker:** `The problem` (11 chars) | *Limit:* 8 – 16 chars
* **Problem Statement:** `Apps gave confident scores on partial data. No one looked at training and nutrition together.` (93 chars) | *Limit:* 60 – 100 chars
* **Underlying Gap Prose:** `If you lift in a deficit and ate poorly, a typical fitness app still declares you ready to train because it only sees yesterday's workout. Every user we interviewed had hacked together their own fix—logging lifts, runs, and meals across separate tools and pasting them into ChatGPT. The data existed everywhere, but nothing analyzed the trade-offs between them.` (358 chars) | *Limit:* 280 – 420 chars
* **Symptoms (3 Diagnoses):**
  * **Signal:** `Every interviewed athlete used two to three apps plus a notepad and AI to manually spot training patterns.` (107 chars) | *Limit:* 90 – 150 chars
  * **Constraint:** `One designer and one engineer building a multi-domain engine and sync pipeline before public beta.` (98 chars) | *Limit:* 75 – 140 chars
  * **Unknown:** `Whether users burned by bad tracker algorithms would trust a new, multi-factor readiness score.` (96 chars) | *Limit:* 70 – 130 chars

---

### Section 4: The Plan / Gantt Chart Tracks
*Interactive Gantt chart with bar pills and artwork notes.*

* **Section Header:**
  * *Kicker:** `How it got built` (16 chars)
  * *Hint:* `Hover a track` (13 chars)
* **Track Bar Labels:**
  * Track Title 1: `Branding` (8 chars) | *Limit:* 6 – 14 chars
  * Track Title 2: `Product design` (14 chars) | *Limit:* 10 – 18 chars
  * Track Title 3: `Marketing` (9 chars) | *Limit:* 6 – 14 chars

#### Group 1: Product Design (Main Open Track)
* **Phase 01:** `User research` (13 chars) | *Limit:* 6 – 14 chars
  * *Artwork Note:* `Interviews revealed users combining three trackers with ChatGPT. The core insight: readiness scores fail when isolated from diet, sleep, and cycle.` (148 chars) | *Limit:* 100 – 165 chars
* **Phase 02:** `Dual UI modes` (13 chars) | *Limit:* 6 – 14 chars
  * *Artwork Note:* `Separated planning from active training. Field tests in gyms showed dense desktop-friendly layouts collapse during physical exertion.` (134 chars) | *Limit:* 95 – 155 chars
* **Phase 03:** `UI iteration` (12 chars) | *Limit:* 6 – 14 chars
  * *Artwork Note:* `Removed PR vanity stats from home, simplified pre-workout screens, and made readiness fully interactive so users see what drives the score.` (139 chars) | *Limit:* 95 – 155 chars
* **Phase 04:** `Design system` (13 chars) | *Limit:* 6 – 16 chars
  * *Artwork Note:* `Dark mode architecture with domain-specific neon colors, allowing users to identify training domains at a glance across all session states.` (139 chars) | *Limit:* 95 – 155 chars

#### Group 2: Branding (Foldable Track)
* **Aside Overview Note (when closed):** `Brand identity, 3D domain mark, and domain color systems established early to give the multi-input interface visual hierarchy.` (130 chars) | *Limit:* 100 – 165 chars
* **Phase 01:** `Market audit` (12 chars) | *Limit:* 8 – 16 chars
  * *Artwork Note:* `Screened name candidates across global markets for linguistics and conflicts, rejecting tired wellness tropes like leaves or mountains.` (134 chars) | *Limit:* 90 – 150 chars
* **Phase 02:** `Naming` (6 chars) | *Limit:* 6 – 14 chars
  * *Artwork Note:* `Selected Kynso: clean, unclaimed, and focused on clear integration rather than romantic fitness metaphors.` (104 chars) | *Limit:* 80 – 140 chars
* **Phase 03:** `Logo design` (11 chars) | *Limit:* 4 – 12 chars
  * *Artwork Note:* `Four geometric shapes in 3D rotation, capturing how strength, cardio, mobility, and recovery unify in one mark.` (111 chars) | *Limit:* 80 – 140 chars
* **Phase 04:** `Domain palette` (14 chars) | *Limit:* 8 – 16 chars
  * *Artwork Note:* `High-contrast neon colors on pure dark backgrounds, letting users instantly decode domain types before reading.` (112 chars) | *Limit:* 80 – 140 chars
* **Phase 05:** `Brand system` (12 chars) | *Limit:* 8 – 18 chars
  * *Artwork Note:* `Voice, typography, and onboarding disclosure standards codified to handle sensitive biological data with clarity and care.` (122 chars) | *Limit:* 90 – 150 chars

#### Group 3: Marketing (Foldable Track)
* **Aside Overview Note (when closed):** `Landing page, positioning, and pre-beta funnel built around transparent readiness and Apple Health sync.` (107 chars) | *Limit:* 80 – 140 chars
* **Phase 01:** `Positioning` (11 chars) | *Limit:* 6 – 14 chars
  * *Artwork Note:* `Framed as the antidote to fragmented fitness apps: all your inputs analyzed together instead of in isolated silos.` (115 chars) | *Limit:* 80 – 140 chars
* **Phase 02:** `Landing page` (12 chars) | *Limit:* 6 – 15 chars
  * *Artwork Note:* `High-converting pre-beta waitlist page communicating integration, privacy, and Apple Health sync.` (97 chars) | *Limit:* 70 – 130 chars
* **Phase 03:** `Onboarding copy` (15 chars) | *Limit:* 6 – 15 chars
  * *Artwork Note:* `Transparent rationale for biological sex questions, clearly tying inputs to cycle-aware readiness math.` (104 chars) | *Limit:* 70 – 130 chars
* **Phase 04:** `Beta outreach` (13 chars) | *Limit:* 6 – 14 chars
  * *Artwork Note:* `Direct recruiting of hybrid lifter-runners who actively struggle with cross-app tracking.` (88 chars) | *Limit:* 60 – 120 chars
* **Phase 05:** `Beta launch` (11 chars) | *Limit:* 5 – 12 chars
  * *Artwork Note:* `Targeted cohort rollout to stress-test dual-mode screens and readiness reliability in real training environments.` (113 chars) | *Limit:* 80 – 140 chars

---

### Section 5: The Impact
* **Section Kicker:** `The impact` (10 chars) | *Limit:* 6 – 14 chars
* **Outcome Statement:** `Advanced from napkin concept to internal testing, delivering a fully integrated multi-domain beta build.` (104 chars) | *Limit:* 80 – 135 chars
* **Metrics (3 Data Points):**
  * **Metric 1:** `6` | Label: `Integrated health inputs` (24 chars) | *Limit:* 12 – 28 chars
  * **Metric 2:** `2` | Label: `Adaptive UI session modes` (25 chars) | *Limit:* 12 – 28 chars
  * **Metric 3:** `100%` | Label: `Transparent logic` (17 chars) | *Limit:* 12 – 28 chars
* **Impact Prose:** `The biggest breakthrough was learning what not to show. Splitting the interface between calm planning and high-intensity workout modes turned a cluttered tracking utility into a focused training tool. By making the readiness score transparent and cycle-aware, we replaced black-box guesswork with clear, actionable coaching.` (324 chars) | *Limit:* 240 – 360 chars

---

### Section 6: Next Case Study Link
* **Eyebrow:** `Next case study` (15 chars)
* **Next Project Title:** `Quantum chemistry startup website` (33 chars) | *Limit:* 20 – 45 chars

---

# Page 4: `supplement.html` — Case Study: Supplement Checkout Fix

### Page Metadata
* **Browser Tab Title:** `Case study — Supplement` (23 chars) | *Limit:* 20 – 50 chars

---

### Section 1: The Hook
* **Eyebrow:** `Case study — 01` (15 chars) | *Limit:* 12 – 24 chars
* **Hook Line (H1):** `Initial orders plummeted 80%, but retained customers grew by 80%.` (65 chars) | *Limit:* 55 – 90 chars
* **Hook Subtitle:** `A premium supplement brand blamed their design for bad sales, but a deceptive free trial was actually driving a 90% product return rate.` (138 chars) | *Limit:* 100 – 170 chars
* **Metadata Facts:**
  * **Role:** `UI/UX Designer` (14 chars) | *Limit:* 12 – 30 chars
  * **Year:** `2023` (4 chars) | *Limit:* 4 – 9 chars
  * **Duration:** `4 months` (8 chars) | *Limit:* 6 – 15 chars
  * **Team:** `Agency team, Client CEO` (23 chars) | *Limit:* 18 – 40 chars

---

### Section 2: The Client
* **Section Kicker:** `The client` (10 chars)
* **Lede Statement:** `They sell premium, certified supplements to an older demographic.` (65 chars) | *Limit:* 45 – 100 chars
* **Prose:** `The client offered high-priced supplements backed by real certifications. They came to us with stagnant sales, convinced a visual redesign would fix things. They used a free trial model to acquire users, aiming to boost revenue without changing the offer.` (256 chars) | *Limit:* 160 – 320 chars
* **Facts:**
  * **Industry:** `Health & Wellness eComm` (23 chars) | *Limit:* 12 – 30 chars
  * **Stage:** `Established SMB` (15 chars) | *Limit:* 6 – 18 chars
  * **Surface:** `Shopify Web` (11 chars) | *Limit:* 10 – 30 chars

---

### Section 3: The Problem
* **Section Kicker:** `The problem` (11 chars)
* **Problem Statement:** `"Our site looks outdated. We need a modern redesign to increase our product sales."` (84 chars) | *Limit:* 60 – 100 chars
* **Prose:** `They didn't have a design problem; they had a deceptive checkout. Customers clicked 'try for free' but were secretly enrolled in an opt-out subscription. They'd get billed later and return it. We built a beautiful new site, but it didn't fix the core lie driving a 90% return rate.` (285 chars) | *Limit:* 180 – 360 chars
* **Symptoms (3 Diagnoses):**
  * **Signal:** `A massive 90% return rate buried in Shopify data, costing them double in shipping.` (82 chars) | *Limit:* 50 – 140 chars
  * **Constraint:** `We were initially hired just to reskin the landing pages and product catalog.` (78 chars) | *Limit:* 50 – 140 chars
  * **Unknown:** `Would an honest checkout kill their acquisition numbers completely?` (67 chars) | *Limit:* 40 – 130 chars

---

### Section 4: Timeline / Steps (01 – 05)
*Sequential steps with hover artwork and screenshots.*

* **Header:**
  * *Kicker:* `How it got solved` (17 chars)
  * *Hint:* `Hover a step` (12 chars)
* **Step 01:**
  * **Title:** `Redesigned the catalogue` (24 chars) | *Limit:* 20 – 45 chars
  * **Text:** `I built the requested educational pages first. It improved the promise but didn't stop the returns.` (99 chars) | *Limit:* 70 – 130 chars
  * **Tags:** `UI Redesign · Product Pages` (27 chars) | *Limit:* 25 – 55 chars
  * **Figcaption:** `Unified catalog highlighting product certifications` (51 chars) | *Limit:* 35 – 70 chars
* **Step 02:**
  * **Title:** `Uncovered the real P&L issue` (28 chars) | *Limit:* 20 – 45 chars
  * **Text:** `I dug into their Shopify data and session recordings. I found a 90% return rate tied to the trial.` (98 chars) | *Limit:* 70 – 130 chars
  * **Tags:** `Data Analysis · Session Replays` (31 chars) | *Limit:* 25 – 55 chars
  * **Figcaption:** `Reviewing Shopify return rates and hidden checkout terms` (56 chars) | *Limit:* 35 – 70 chars
* **Step 03:**
  * **Title:** `Rebuilt for opt-in transparency` (31 chars) | *Limit:* 25 – 55 chars
  * **Text:** `I redesigned the checkout to require active subscription opt-in and added a one-time purchase option.` (101 chars) | *Limit:* 70 – 130 chars
  * **Tags:** `Checkout UX · Transparent Pricing` (33 chars) | *Limit:* 25 – 55 chars
  * **Figcaption:** `New checkout flow with clear opt-in and purchase choices` (56 chars) | *Limit:* 35 – 70 chars
* **Step 04:**
  * **Title:** `Argued the case with evidence` (29 chars) | *Limit:* 25 – 55 chars
  * **Text:** `Orders plummeted 80%, so the client panicked. I showed the CEO the data proving we saved money.` (96 chars) | *Limit:* 70 – 130 chars
  * **Tags:** `Stakeholder Mgmt · P&L Framing` (30 chars) | *Limit:* 20 – 50 chars
  * **Figcaption:** `Presenting return rates and competitor models to the CEO` (56 chars) | *Limit:* 35 – 70 chars
* **Step 05:**
  * **Title:** `Rolled back the visual design` (29 chars) | *Limit:* 25 – 55 chars
  * **Text:** `They reverted the catalogue look but kept the honest checkout. Total retained customers grew by 80%.` (99 chars) | *Limit:* 70 – 130 chars
  * **Tags:** `Compromise · Final Launch` (25 chars) | *Limit:* 15 – 45 chars
  * **Figcaption:** `Final hybrid launch combining original site and new checkout` (59 chars) | *Limit:* 30 – 65 chars

---

### Section 5: The Impact
* **Section Kicker:** `The impact` (10 chars)
* **Outcome Statement:** `While top-line orders dropped, actual kept products increased by 80%.` (69 chars) | *Limit:* 50 – 100 chars
* **Metrics (3 Data Points):**
  * **Metric 1:** `-80%` | Label: `Initial order volume` (20 chars) | *Limit:* 12 – 28 chars
  * **Metric 2:** `10%` | Label: `Final return rate` (17 chars) | *Limit:* 12 – 28 chars
  * **Metric 3:** `+80%` | Label: `Retained customers` (18 chars) | *Limit:* 12 – 28 chars
* **Impact Prose:** `We eliminated the massive hidden costs of shipping free boxes only to handle returns. I learned a crucial lesson: UX issues are often P&L issues. If I had framed this around profit margins in month one instead of month three, the conversation would have been much easier.` (272 chars) | *Limit:* 140 – 280 chars

---

### Section 6: Next Case Study Link
* **Eyebrow:** `Next case study` (15 chars)
* **Next Project Title:** `Marketing AI Service` | *Limit:* 20 – 45 chars

---

# Page 5: `404.html` — Error 404 Page

### Page Metadata & Core Content
* **Browser Tab Title:** `Page not found — Taya The Designer` (34 chars) | *Limit:* 20 – 50 chars
* **Eyebrow:** `Error 404 — page not found` (25 chars) | *Limit:* 18 – 30 chars
* **Headline (H1):** `This page rolled a natural 1.` (29 chars) | *Limit:* 20 – 45 chars
* **Body Explanation:** `Whatever you were looking for isn’t at this address — a stale link, a typo, or something I have since moved. You can go back to the homepage, or take the consolation prize below.` (181 chars) | *Limit:* 140 – 220 chars
* **Button Label:** `Roll for a fact` (15 chars) | *Limit:* 12 – 20 chars
* **Initial Status / Prompt:** `Twenty facts about me, one die. Roll it.` (40 chars) | *Limit:* 25 – 55 chars

---

### The 20 D20 Dice Facts
> ⚠️ **STRICT CHARACTER LIMIT: MAXIMUM 130 CHARACTERS EACH (including spaces)**
>
> *Codebase note from 404.html:*
> *"The fact panel reserves its height in advance so the page never jumps when a fact swaps, and a longer line will overflow that reserved box on a narrow phone."*

| # | Face / Theme | Current Fact Text | Chars | Limit |
| :-: | :--- | :--- | :-: | :-: |
| **01** | Origins | `Replace me: where you grew up, and where you live now.` | 53 | **≤ 130** |
| **02** | First Design | `Replace me: the first thing you ever designed.` | 46 | **≤ 130** |
| **03** | Past Life | `Replace me: a job you had before design.` | 39 | **≤ 130** |
| **04** | Tabletop Game | `Replace me: the tabletop game you will always say yes to.` | 56 | **≤ 130** |
| **05** | Languages | `Replace me: a language you speak, and how you picked it up.` | 57 | **≤ 130** |
| **06** | Design Philosophy | `Replace me: the design rule you break on purpose.` | 48 | **≤ 130** |
| **07** | Collection | `Replace me: something you collect.` | 34 | **≤ 130** |
| **08** | Tooling / Workflow | `Replace me: your most-used keyboard shortcut.` | 44 | **≤ 130** |
| **09** | Unexpected Hobby | `Replace me: a hobby nobody expects from a product designer.` | 58 | **≤ 130** |
| **10** | Unshipped Pride | `Replace me: the project you are proudest of that never shipped.` | 61 | **≤ 130** |
| **11** | Work Soundtrack | `Replace me: what is playing while you work.` | 42 | **≤ 130** |
| **12** | Software Love | `Replace me: a piece of software you genuinely love.` | 50 | **≤ 130** |
| **13** | Design Critique | `Replace me: the worst design advice you were ever given.` | 54 | **≤ 130** |
| **14** | Active Learning | `Replace me: something you are learning right now.` | 48 | **≤ 130** |
| **15** | Coffee Order | `Replace me: your order at the coffee place.` | 42 | **≤ 130** |
| **16** | Remote Destination | `Replace me: a place you want to work from for a month.` | 52 | **≤ 130** |
| **17** | Book Recommendation | `Replace me: the book you hand to new designers.` | 46 | **≤ 130** |
| **18** | Simple Pleasure | `Replace me: a small thing that makes you irrationally happy.` | 58 | **≤ 130** |
| **19** | Childhood Dream | `Replace me: what you wanted to be at ten years old.` | 49 | **≤ 130** |
| **20** | Natural 20 (Best Fact) | `Replace me: the natural 20 — save your best fact for this one.` | 62 | **≤ 130** |

---

## Quick Reference: Character Limits Summary Table

| Page / Component | Key Field | Current Chars | Safe Recommended Range | Hard Failure Point |
| :--- | :--- | :--- | :--- | :--- |
| **Home (`index.html`)** | Hero Lead (`.ia__lead`) | 72 | 50 – 85 chars | > 95 chars (breaks radial backdrop) |
| **Home (`index.html`)** | Hero Subhead (`.ia__name`) | 41 | 30 – 55 chars | > 65 chars (wraps into 3 lines) |
| **Home (`index.html`)** | Drifting Idea Labels | 14 – 34 | 15 – 35 chars | > 38 chars (`nowrap` causes canvas collision) |
| **About (`about-section.html`)** | Screen Column Titles | 18 – 33 | 18 – 35 chars | > 40 chars (wraps to 3 lines on laptop) |
| **About (`about-section.html`)** | Paragraphs (Left & Right) | 144 – 210 | 140 – 220 chars | > 240 chars (overflows 100dvh snap view on laptop) |
| **About (`about-section.html`)** | Card Quotes | 94 – 116 | 70 – 120 chars | > 130 chars (pushes card off screen bottom) |
| **About (`about-section.html`)** | Year Range (`.am__year`) | 10 – 11 | 9 – 12 chars | > 15 chars |
| **Case Studies (`kynso.html`)** | Hook Line (H1) | 67 – 82 | 60 – 95 chars | > 105 chars |
| **Case Studies (`kynso.html`)** | Hook Subtitle | 130 – 154 | 120 – 180 chars | > 200 chars (exceeds `56ch`) |
| **Case Studies (`kynso.html`)** | Gantt Bar Names | 6 – 14 | 6 – 16 chars | > 18 chars (overflows grid bar pill) |
| **Case Studies (`kynso.html`)** | Gantt Art Notes | 88 – 148 | 80 – 155 chars | > 170 chars (overflows art column height) |
| **Case Studies (`kynso.html`)** | Impact Metrics Numbers | 1 – 4 | 2 – 6 chars | > 8 chars |
| **Case Studies (`kynso.html`)** | Impact Metrics Labels | 17 – 25 | 12 – 28 chars | > 32 chars |
| **404 (`404.html`)** | 20 D20 Dice Facts | 34 – 62 | **40 – 125 chars** | **> 130 chars (hard phone overflow)** |
