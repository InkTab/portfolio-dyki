# Website Copy & Character Limits Reference

This document compiles **every user-facing text element across all 8 pages of the website**, detailing current copy, character counts, recommended character limits, and layout notes.

---

## Summary of Pages
1. [Global Components (Shared Across Pages)](#global-components-shared-across-pages)
2. [Page 1: index.html (Homepage / Interactive Ideas Canvas)](#page-1-indexhtml--homepage--ideas-canvas)
3. [Page 2: about-section.html (About Me — The Marble & The Thread)](#page-2-about-sectionhtml--about-me)
4. [Page 3: kynso.html (Case Study — Kynso Fitness App)](#page-3-kynsohtml--case-study-kynso)
5. [Page 4: quantistry.html (Case Study — Quantistry Brand & Website Design)](#page-4-quantistryhtml--case-study-quantistry-brand--website-design)
6. [Page 5: supplement.html (Case Study — Supplement Checkout Fix)](#page-5-supplementhtml--case-study-supplement-checkout-fix)
7. [Page 6: mx2.html (Case Study — MX2 AI Marketing)](#page-6-mx2html--case-study-mx2-ai-marketing)
8. [Page 7: contact.html (Contact — Channels & Profiles)](#page-7-contacthtml--contact)
9. [Page 8: 404.html (Error 404 — D20 Fact Roller)](#page-8-404html--error-404-page)
10. [Quick Reference: Character Limits Summary Table](#quick-reference-character-limits-summary-table)

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
* **Browser Tab Title:** `About me` (35 chars) | *Limit:* 20 – 50 chars
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
* **Hook Subtitle:** `A fitness platform reading workouts, nutrition, sleep, and cycle as interconnected elements of one system. Built from zero to pre-beta by a two-person founding team.` (166 chars) | *Limit:* 120 – 180 chars
* **Metadata Facts:**
  * **Role:** `Co-founder, design & marketing` (30 chars) | *Limit:* 15 – 35 chars
  * **Year:** `2025` (4 chars) | *Limit:* 4 – 9 chars
  * **Duration:** `16 weeks` (8 chars) | *Limit:* 6 – 15 chars
  * **Team:** `1 design, 1 engineer` (23 chars) | *Limit:* 20 – 45 chars
* **Scroll Callout:** `Scroll →` (8 chars) | *Limit:* 6 – 12 chars

---

### Section 2: Venture
* **Section Kicker:** `Venture` (7 chars) | *Limit:* 6 – 14 chars
* **Lede Statement:** `Kynso is an early-stage startup connecting strength, cardio, mobility and nutrition into a single ecosystem.` (101 chars) | *Limit:* 75 – 120 chars
* **Prose:** `Athletes were juggling three different trackers, a notes app, and ChatGPT just to see their progress. Kynso was founded to solve that fragmentation. As co-founder, I led product design, brand identity, and marketing, working alongside one engineer to take the concept from zero into internal testing ahead of our upcoming beta.` (326 chars) | *Limit:* 260 – 380 chars
* **Business Shape Facts:**
  * **Industry:** `Health & fitness` (16 chars) | *Limit:* 12 – 30 chars
  * **Stage:** `Pre-beta` (8 chars) | *Limit:* 8 – 20 chars
  * **Surface:** `iOS` (3 chars) | *Limit:* 15 – 35 chars

---

### Section 3: The Problem
* **Section Kicker:** `The problem` (11 chars) | *Limit:* 8 – 16 chars
* **Problem Statement:** `Human body is an interdependent system. Fitness apps track everything separately.` (85 chars) | *Limit:* 60 – 100 chars
* **Underlying Gap Prose:** `If you lift in a deficit and ate poorly, a typical fitness app still declares you ready to train because it only sees last workout. Every user we interviewed had hacked together their own fix—logging lifts, runs, and meals across separate tools and pasting them into ChatGPT. The data existed everywhere, but nothing analyzed the trade-offs between them.` (344 chars) | *Limit:* 280 – 420 chars
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
  * *Artwork Note:* `Separated planning from active training. Field tests in gyms showed dense layouts collapse during physical exertion.` (111 chars) | *Limit:* 95 – 155 chars
* **Phase 03:** `UI iteration` (12 chars) | *Limit:* 6 – 14 chars
  * *Artwork Note:* `Removed PR vanity stats from home, simplified pre-workout screens, and made readiness fully interactive so users see what drives the score.` (126 chars) | *Limit:* 95 – 155 chars
* **Phase 04:** `Design system` (13 chars) | *Limit:* 6 – 16 chars
  * *Artwork Note:* `Dark mode architecture with domain-specific neon colors, allowing users to identify training domains at a glance across all session states.` (126 chars) | *Limit:* 95 – 155 chars

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

# Page 4: `quantistry.html` — Case Study: Quantistry Brand & Website Design

### Page Metadata
* **Browser Tab Title:** `Quantistry — Brand & Website Design` (35 chars) | *Limit:* 20 – 50 chars

---

### Section 1: The Hook
*Screen 1: Opening thesis statement, meta facts, and scroll prompt.*

* **Eyebrow:** `Case study — Quantistry` (23 chars) | *Limit:* 15 – 30 chars
* **Hook Line (H1):** `Replacing empty AI buzzwords with proof of 10x faster chemical R&D.` (67 chars) | *Limit:* 55 – 90 chars
* **Hook Subtitle:** `A complete brand refresh and evidence-led marketing site built to help a quantum chemistry startup close their next funding round and land enterprise R&D teams.` (160 chars) | *Limit:* 120 – 180 chars
* **Metadata Facts:**
  * **Role:** `Product Designer` (16 chars) | *Limit:* 12 – 30 chars
  * **Year:** `2025` (4 chars) | *Limit:* 4 – 9 chars
  * **Duration:** `2 months` (8 chars) | *Limit:* 6 – 15 chars
  * **Team:** `1 designer, 2 engineers` (31 chars) | *Limit:* 18 – 40 chars
* **Scroll Callout:** `Scroll →` (8 chars) | *Limit:* 6 – 12 chars

---

### Section 2: The Client
* **Section Kicker:** `The client` (10 chars)
* **Lede Statement:** `Quantistry builds AI tools to simulate physical materials for R&D teams.` (72 chars) | *Limit:* 50 – 100 chars
* **Prose:** `Instead of running slow lab experiments, scientists use Quantistry's software to predict chemical behavior. They had real technology and customers, but were preparing for a critical funding round with an outdated logo and no web presence to prove their market traction.` (269 chars) | *Limit:* 180 – 320 chars
* **Business Shape Facts:**
  * **Industry:** `Deeptech & Quantum Chemistry` (28 chars) | *Limit:* 15 – 35 chars
  * **Stage:** `Pre-Series A` (12 chars) | *Limit:* 8 – 20 chars
  * **Surface:** `Responsive web & brand` (22 chars) | *Limit:* 12 – 30 chars

---

### Section 3: The Problem
* **Section Kicker:** `The problem` (11 chars)
* **Problem Statement:** `We need a brand and site refresh so we can raise our next investment round.` (75 chars) | *Limit:* 55 – 95 chars
* **Prose:** `While competitors made vague AI promises with no real tech, Quantistry had working software but no way to show it. The challenge wasn't just talking about algorithms. We had to prove concrete business value to investors by demonstrating that R&D managers actually relied on their simulation tools to work faster.` (312 chars) | *Limit:* 200 – 360 chars
* **Symptoms (3 Diagnoses):**
  * **Signal:** `Competitors flooded the space with AI rebrands, masking thin products behind generic buzzwords.` (95 chars) | *Limit:* 60 – 130 chars
  * **Constraint:** `A tight two-month launch window ahead of investor meetings, with a non-scientist designing for chemists.` (104 chars) | *Limit:* 60 – 130 chars
  * **Unknown:** `How to explain quantum chemistry clearly to investors without dumbing down the science for R&D leads.` (101 chars) | *Limit:* 60 – 130 chars

---

### Section 4: Timeline / Steps (01 – 05)
*Sequential steps with hover artwork and custom SVG interactive diagrams.*

* **Header:**
  * *Kicker:* `How it got solved` (17 chars)
  * *Hint:* `Hover a step` (12 chars)

* **Step 01:**
  * **Title:** `Decoded the quantum chemistry` (29 chars) | *Limit:* 20 – 45 chars
  * **Text:** `Interviewed the team to uncover the core value. The takeaway wasn't just complex science; it was raw speed to market.` (117 chars) | *Limit:* 70 – 135 chars
  * **Tags:** `Team interviews · Domain research` (33 chars) | *Limit:* 20 – 45 chars
  * **Figcaption:** `VALUE REFRAME: DOMAIN COMPLEXITY TO CORE COMMERCIAL PROMISE` (59 chars) | *Limit:* 35 – 70 chars
  * **Diagram Elements (SVG Conversion Diagram):**
    * *Technical Jargon Tags:* `Quantum Algorithms`, `Basis Sets`, `Molecular Simulation`, `DFT Approximations`, `Wavefunction Theory`, `Hamiltonian Dynamics`
    * *Funnel Transformation:* `SYNTHESIS` → `REFRAME`
    * *Core Commercial Promise Card:*
      * *Eyebrow:* `CORE COMMERCIAL PROMISE`
      * *Headline:* `Months → Days`
      * *Subtext:* `Regular processes took months. Their product reduced that time and cost to days.`

* **Step 02:**
  * **Title:** `Aligned two distinct audiences` (30 chars) | *Limit:* 20 – 45 chars
  * **Text:** `Focused on solving R&D managers' daily pains. Proving direct value to scientists made the business case obvious to investors.` (125 chars) | *Limit:* 70 – 135 chars
  * **Tags:** `Audience mapping · Pitch strategy` (33 chars) | *Limit:* 20 – 45 chars
  * **Figcaption:** `AUDIENCE INTERSECTION: SCIENTISTS & INVESTORS CORE PITCH` (56 chars) | *Limit:* 35 – 70 chars
  * **Diagram Elements (SVG Audience Venn Diagram):**
    * *Audience 01 // Scientists (`Lab Scientists & R&D`):* `Daily workflow friction`, `Reproducibility`, `Computational accuracy`
    * *Audience 02 // Investors (`Deeptech Investors`):* `Defensibility`, `ARR potential`, `Total addressable market`
    * *Intersection (`The Core Pitch` / `Unified Messaging`):* `Validated speed-to-market & De-risked R&D capital` | Label: `COMMERCIAL VALIDATION`

* **Step 03:**
  * **Title:** `Built an identity grounded in science` (37 chars) | *Limit:* 20 – 45 chars
  * **Text:** `Kept a credible scientific blue and added bright orange accents. It signaled modern AI without losing domain credibility.` (121 chars) | *Limit:* 70 – 135 chars
  * **Tags:** `Brand identity · Design system` (30 chars) | *Limit:* 20 – 45 chars
  * **Figcaption & Alt:** `Color system, updated logo mark, and typography rules` (53 chars) | *Limit:* 35 – 70 chars

* **Step 04:**
  * **Title:** `Visualized the 10x speed advantage` (34 chars) | *Limit:* 20 – 45 chars
  * **Text:** `Built motion graphics showing lab steps eliminated by simulation. The animation visualized time savings for R&D teams.` (105 chars) | *Limit:* 70 – 135 chars
  * **Tags:** `Motion direction · UI wireframing` (33 chars) | *Limit:* 20 – 45 chars
  * **Figcaption & Alt:** `Before-and-after simulation process motion storyboard` (53 chars) | *Limit:* 35 – 70 chars

* **Step 05:**
  * **Title:** `Anchored the site in proof` (26 chars) | *Limit:* 20 – 45 chars
  * **Text:** `Structured pages around named clients, concrete case studies, and engineering handoff to ship the site on schedule.` (115 chars) | *Limit:* 70 – 135 chars
  * **Tags:** `Content strategy · Dev handoff` (30 chars) | *Limit:* 20 – 45 chars
  * **Figcaption & Alt:** `Production-ready page layouts highlighting customer proof` (57 chars) | *Limit:* 35 – 70 chars

---

### Section 5: The Impact
* **Section Kicker:** `The impact` (10 chars)
* **Outcome Statement:** `The live site became Quantistry's central engine for sales calls and investor meetings.` (87 chars) | *Limit:* 55 – 100 chars
* **Metrics (1 Data Point):**
  * **Metric 1:** `8 wks` | Label: `Brief to live site rollout` (26 chars) | *Limit:* 14 – 32 chars
* **Impact Prose:** `The new brand gave Quantistry immediate credibility across deeptech events, while the site cleanly bridged technical rigor and business value. It gave both founders and sales leads a sharp, defensible story to tell.` (215 chars) | *Limit:* 140 – 280 chars
* **External Link:** `Check out live site →` (`https://quantistry.ai`) (21 chars) | *Limit:* 15 – 30 chars

---

### Section 6: Next Case Study Link
* **Eyebrow:** `Next case study` (15 chars)
* **Next Project Title:** `Supplement Checkout Fix` (23 chars) | *Limit:* 20 – 45 chars

---

# Page 5: `supplement.html` — Case Study: Supplement Checkout Fix

### Page Metadata
* **Browser Tab Title:** `Case study — Supplement` (23 chars) | *Limit:* 20 – 50 chars

---

### Section 1: The Hook
* **Eyebrow:** `Case study — 01` (15 chars) | *Limit:* 12 – 24 chars
* **Hook Line (H1):** `Why killing an 80% sales funnel actually saved this supplement brand.` (69 chars) | *Limit:* 55 – 90 chars
* **Hook Subtitle:** `A premium supplement brand blamed their design for bad sales, but a deceptive free trial was actually driving a 90% product return rate.` (138 chars) | *Limit:* 100 – 170 chars
* **Metadata Facts:**
  * **Role:** `UI/UX Designer` (14 chars) | *Limit:* 12 – 30 chars
  * **Year:** `2023` (4 chars) | *Limit:* 4 – 9 chars
  * **Duration:** `4 months` (8 chars) | *Limit:* 6 – 15 chars
  * **Team:** `1 designer, 2 devs` (18 chars) | *Limit:* 18 – 40 chars

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
* **Next Project Title:** `MX2 AI Marketing` (16 chars) | *Limit:* 20 – 45 chars

---

# Page 6: `mx2.html` — Case Study: MX2 AI Marketing

### Page Metadata
* **Browser Tab Title:** `Case study — MX2 AI Marketing` (29 chars) | *Limit:* 20 – 50 chars

---

### Section 1: The Hook
*Screen 1: Opening thesis statement, meta facts, and scroll prompt.*

* **Eyebrow:** `Case study — 01` (15 chars) | *Limit:* 12 – 24 chars
* **Hook Line (H1):** `SMB owners don't need another dashboard. They need marketing decisions.` (71 chars) | *Limit:* 55 – 90 chars
* **Hook Subtitle:** `Built an AI marketing platform for small businesses by replacing complex setups with guided review, cutting campaign setup from 30 to 5 minutes.` (144 chars) | *Limit:* 110 – 175 chars
* **Metadata Facts:**
  * **Role:** `Design Lead & Acting PM` (23 chars) | *Limit:* 15 – 35 chars
  * **Year:** `2025` (4 chars) | *Limit:* 4 – 9 chars
  * **Duration:** `3 months` (8 chars) | *Limit:* 6 – 15 chars
  * **Team:** `2 designers, eng, marketing` (27 chars) | *Limit:* 18 – 40 chars
* **Scroll Callout:** `Scroll →` (8 chars) | *Limit:* 6 – 12 chars

---

### Section 2: The Client
* **Section Kicker:** `The client` (10 chars)
* **Lede Statement:** `An internal agency venture productized to give SMBs automated marketing.` (72 chars) | *Limit:* 45 – 100 chars
* **Prose:** `Originally kicked off by the CEO as an internal tool, the product showed enough traction to be spun out as MX2 under the agency's main brand. It serves small business owners who know their customers and margins inside out, but can't justify the cost or overhead of hiring an agency.` (282 chars) | *Limit:* 180 – 340 chars
* **Business Shape Facts:**
  * **Industry:** `B2B SaaS / MarTech` (18 chars) | *Limit:* 12 – 30 chars
  * **Stage:** `Internal venture` (16 chars) | *Limit:* 8 – 24 chars
  * **Surface:** `Web application` (15 chars) | *Limit:* 10 – 25 chars

---

### Section 3: The Problem
* **Section Kicker:** `The problem` (11 chars)
* **Problem Statement:** `“Build an AI tool so clients can spin up their own marketing campaigns.”` (72 chars) | *Limit:* 50 – 95 chars
* **Prose:** `The initial brief assumed owners just needed an AI generator. But marketing isn't just copywriting—it's attribution, budget pacing, and media planning. Handing non-marketers empty fields and complex charts paralyzed them. We didn't need to add features; we had to bake the domain expertise directly into the UI.` (311 chars) | *Limit:* 200 – 360 chars
* **Symptoms (3 Diagnoses):**
  * **Signal:** `Internal testers spent 30 minutes struggling to launch a first campaign.` (72 chars) | *Limit:* 50 – 120 chars
  * **Constraint:** `Integrating live multi-source marketing APIs without crushing engineering.` (74 chars) | *Limit:* 50 – 120 chars
  * **Unknown:** `How deep non-marketers actually want to dig into their data without getting lost.` (81 chars) | *Limit:* 50 – 120 chars

---

### Section 4: Timeline / Steps (01 – 05)
*Sequential steps with hover artwork and screenshots.*

* **Header:**
  * *Kicker:* `How it got solved` (17 chars)
  * *Hint:* `Hover a step` (12 chars)

* **Step 01:**
  * **Title:** `Mapped marketing's hidden complexity` (36 chars) | *Limit:* 20 – 45 chars
  * **Text:** `Ran workshops with senior media planners to unpack campaign logic. Realized the UI needed to do the heavy lifting, not the user.` (128 chars) | *Limit:* 70 – 135 chars
  * **Tags:** `Domain research · Workflow mapping` (34 chars) | *Limit:* 20 – 45 chars
  * **Figcaption & Alt:** `Campaign planning logic and attribution breakdown` (49 chars) | *Limit:* 35 – 70 chars

* **Step 02:**
  * **Title:** `Replaced blank inputs with guided review` (40 chars) | *Limit:* 20 – 45 chars
  * **Text:** `Scraped website copy to prefill business details and suggest starter budgets. Users just corrected and confirmed.` (113 chars) | *Limit:* 70 – 135 chars
  * **Tags:** `Onboarding flow · Form redesign` (31 chars) | *Limit:* 20 – 45 chars
  * **Figcaption & Alt:** `Pre-populated business profile and media proposal` (49 chars) | *Limit:* 35 – 70 chars

* **Step 03:**
  * **Title:** `Structured 25 dashboards across 5 tiers` (39 chars) | *Limit:* 20 – 45 chars
  * **Text:** `Organized data from high-level health down to individual ad creative. Casual users stay top-level; fixers dive deep.` (116 chars) | *Limit:* 70 – 135 chars
  * **Tags:** `Information architecture · Dashboard specs` (42 chars) | *Limit:* 20 – 45 chars
  * **Figcaption & Alt:** `Five-level drill-down architecture from health to creative` (58 chars) | *Limit:* 35 – 70 chars

* **Step 04:**
  * **Title:** `Prototyped live widgets to unblock dev` (38 chars) | *Limit:* 20 – 45 chars
  * **Text:** `Engineering pushed back on multi-API widgets. Built a working prototype with Claude Code to prove feasibility.` (110 chars) | *Limit:* 70 – 135 chars
  * **Tags:** `Prototyping · Code proof-of-concept` (35 chars) | *Limit:* 20 – 45 chars
  * **Figcaption & Alt:** `Working multi-source widget prototype and API binding` (53 chars) | *Limit:* 35 – 70 chars

* **Step 05:**
  * **Title:** `Added AI guidance and scaled the system` (39 chars) | *Limit:* 20 – 45 chars
  * **Text:** `Paired contextual widgets with AI recommendations and built a 40-component design system that onboarded a second designer fast.` (127 chars) | *Limit:* 70 – 135 chars
  * **Tags:** `Design systems · AI interaction` (31 chars) | *Limit:* 20 – 45 chars
  * **Figcaption & Alt:** `Component system specs and dual-mode AI companion` (49 chars) | *Limit:* 35 – 70 chars

---

### Section 5: The Impact
* **Section Kicker:** `The impact` (10 chars)
* **Outcome Statement:** `Cut first-time campaign launch time by 83% while scaling to 25 core dashboards.` (79 chars) | *Limit:* 55 – 100 chars
* **Metrics (3 Data Points):**
  * **Metric 1:** `−25m` | Label: `Time to first campaign` (22 chars) | *Limit:* 12 – 28 chars
  * **Metric 2:** `25` | Label: `Dashboards delivered` (20 chars) | *Limit:* 12 – 28 chars
  * **Metric 3:** `40+` | Label: `Reusable components` (19 chars) | *Limit:* 12 – 28 chars
* **Impact Prose:** `Prototyping complex widgets unblocked development and proved feasibility on day one. By baking marketing expertise directly into the UI rather than asking users for it, we turned a 30-minute chore into a 5-minute review.` (220 chars) | *Limit:* 140 – 280 chars

---

### Section 6: Next Case Study Link
* **Eyebrow:** `Next case study` (15 chars)
* **Next Project Title:** `Kynso Fitness App` (17 chars) | *Limit:* 20 – 45 chars

---

# Page 7: `contact.html` — Contact

### Page Metadata
* **Browser Tab Title:** `Contact — Taya The Designer` (30 chars) | *Limit:* 20 – 50 chars

---

### Stage Content & Core Messaging
* **Hint (Top Center):** `Hover a channel` (15 chars) | *Limit:* 10 – 22 chars (Mono 10px uppercase)
* **Lead Headline (H1):** `Let’s talk about what you’re building` (37 chars) | *Limit:* 25 – 50 chars
  * *Rationale:* Bold Bricolage Grotesque display font (`clamp(2.15rem, 4.9vw, 3.5rem)`).
* **Subheading:** `Email is the fastest way in. The rest is where the work lives.` (62 chars) | *Limit:* 40 – 75 chars

---

### Drifting Channels (5 Stage Slots)
*Interactive drifting links with label and revealed handle/tag on hover.*

* **Channel 1 (Coordinates: 20% / 16%):**
  * *Label:* `Email` (5 chars) | *Limit:* 4 – 12 chars
  * *Tag / Handle:* `tetiana.burlachenko@gmail.com` (29 chars) | *Limit:* 20 – 35 chars
  * *Link:* `mailto:tetiana.burlachenko@gmail.com`
* **Channel 2 (Coordinates: 78% / 13%):**
  * *Label:* `Behance` (7 chars) | *Limit:* 4 – 12 chars
  * *Tag / Handle:* `behance.net/tetianaburlachenko` (29 chars) | *Limit:* 20 – 35 chars
  * *Link:* `https://www.behance.net/tetianaburlachenko`
* **Channel 3 (Coordinates: 84% / 63%):**
  * *Label:* `Instagram` (9 chars) | *Limit:* 4 – 12 chars
  * *Tag / Handle:* `instagram.com/tb_dyki` (21 chars) | *Limit:* 15 – 30 chars
  * *Link:* `https://www.instagram.com/tb_dyki`
* **Channel 4 (Coordinates: 15% / 68%):**
  * *Label:* `Medium` (6 chars) | *Limit:* 4 – 12 chars
  * *Tag / Handle:* `medium.com/@tayadyki` (20 chars) | *Limit:* 15 – 30 chars
  * *Link:* `https://medium.com/@tayadyki`
* **Channel 5 (Coordinates: 48% / 84%):**
  * *Label:* `Dribbble` (8 chars) | *Limit:* 4 – 12 chars
  * *Tag / Handle:* `dribbble.com/dyki_design` (24 chars) | *Limit:* 15 – 30 chars
  * *Link:* `https://dribbble.com/dyki_design`

---

# Page 8: `404.html` — Error 404 Page

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
| **01** | Origins | `I was born and grew up in Odesa, Ukraine and live in Canada now.` | 63 | **≤ 130** |
| **02** | First Design | `The first app I ever designed was an app for my college.` | 57 | **≤ 130** |
| **03** | Past Life | `The first job I've had was a car counter for outdoor market analysis.` | 70 | **≤ 130** |
| **04** | Tabletop Game | `I will always say yes to a D&D game.` | 35 | **≤ 130** |
| **05** | Languages | `I speak Polish and I learned over 2 months for university.` | 58 | **≤ 130** |
| **06** | Design Philosophy | `Familiarity isn't as important as next clear action.` | 52 | **≤ 130** |
| **07** | Collection | `I collect pins. I have about 70 of them now.` | 44 | **≤ 130** |
| **08** | Tooling / Workflow | `My most used hotkey is ctrl+c, ctrl+v.` | 38 | **≤ 130** |
| **09** | Unexpected Hobby | `I like crocheting hats.` | 23 | **≤ 130** |
| **10** | Unshipped Pride | `I'm proud of turning my perfectionism into a superpower.` | 56 | **≤ 130** |
| **11** | Work Soundtrack | `I like listening to dubstep while I work.` | 41 | **≤ 130** |
| **12** | Software Love | `I genuinely love figma.` | 23 | **≤ 130** |
| **13** | Design Critique | `The worst design advice I ever received was "make it brighter".` | 63 | **≤ 130** |
| **14** | Active Learning | `I'm curently learning React to be able to build my ideas.` | 56 | **≤ 130** |
| **15** | Coffee Order | `I like ordering lattes and anything with cinnamon.` | 50 | **≤ 130** |
| **16** | Remote Destination | `I’d love to spend a month working from small house in Alps.` | 58 | **≤ 130** |
| **17** | Book Recommendation | `I would hand "Burn your portfolio" to new designers.` | 51 | **≤ 130** |
| **18** | Simple Pleasure | `For me, the most irrationally joyful thing is iridiscent objects.` | 65 | **≤ 130** |
| **19** | Childhood Dream | `When I was a kid I wanted to be a lawyer.` | 41 | **≤ 130** |
| **20** | Natural 20 (Best Fact) | `I've run a D&D campaign for a year and learned more about user motivation than I ever expected.` | 95 | **≤ 130** |

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
| **All Case Studies** | Hook Line (H1) | 65 – 82 | 55 – 95 chars | > 105 chars |
| **All Case Studies** | Hook Subtitle | 138 – 160 | 110 – 180 chars | > 200 chars (exceeds `56ch`) |
| **Gantt Case Study (`kynso.html`)** | Gantt Bar Names | 6 – 14 | 6 – 16 chars | > 18 chars (overflows grid bar pill) |
| **Gantt Case Study (`kynso.html`)** | Gantt Art Notes | 88 – 148 | 80 – 155 chars | > 170 chars (overflows art column height) |
| **Flow Case Studies (Quantistry, Supplement, MX2)** | Step Title (`.cs__step-title`) | 24 – 40 | 20 – 45 chars | > 50 chars (breaks step row balance) |
| **Flow Case Studies (Quantistry, Supplement, MX2)** | Step Text (`.cs__step-text`) | 96 – 128 | 70 – 135 chars | > 145 chars (stretches card vertically) |
| **Flow Case Studies (Quantistry, Supplement, MX2)** | Step Tags (`.cs__step-tags`) | 25 – 42 | 20 – 45 chars | > 50 chars |
| **Flow Case Studies (Quantistry, Supplement, MX2)** | Artwork Figcaption (`.cs__shot-cap`) | 49 – 59 | 35 – 70 chars | > 80 chars |
| **All Case Studies** | Impact Metrics Numbers | 1 – 6 | 2 – 6 chars | > 8 chars |
| **All Case Studies** | Impact Metrics Labels | 17 – 26 | 12 – 30 chars | > 35 chars |
| **Contact (`contact.html`)** | Stage Lead (`.ct__lead`) | 37 | 25 – 50 chars | > 60 chars |
| **Contact (`contact.html`)** | Channel Tags (Handles) | 20 – 29 | 15 – 35 chars | > 40 chars |
| **404 (`404.html`)** | 20 D20 Dice Facts | 23 – 95 | **40 – 125 chars** | **> 130 chars (hard phone overflow)** |
