# Website Copy & Character Limits Reference

This document compiles **every user-facing text element across all 5 pages of the website**, accompanied by the current text, character counts, recommended character limits, design rationale, and an editable slot.

> **How to use this file:**
> 1. Review the current copy and character limit guidelines for each field.
> 2. Write your revised copy in the `Your revised copy:` lines.
> 3. Send this file (or your revisions) back, and all changes will be cleanly applied to the HTML codebase while preserving design tokens, animations, and responsive behavior.

---

## Summary of Pages
1. [Page 1: index.html (Homepage / Interactive Ideas Canvas)](#page-1-indexhtml--homepage--ideas-canvas)
2. [Page 2: about-section.html (About Me — The Marble & The Thread)](#page-2-about-sectionhtml--about-me)
3. [Page 3: kynso.html (Case Study — Kynso Holistic Fitness App)](#page-3-kynsohtml--case-study-kynso)
4. [Page 4: case-study-section.html (Case Study Template / Generic E-Commerce)](#page-4-case-study-sectionhtml--case-study-template)
5. [Page 5: 404.html (Error 404 — D20 Fact Roller)](#page-5-404html--error-404-page)

---

# Global Components (Shared Across Pages)

### Navigation Rail (Present on all pages)
*Fixed persistent rail on the right edge (`.rail` / `.ia__rail`). Mono uppercase typography.*

| Element | Current Copy | Current Chars | Recommended Limit | Layout Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **Nav Link 1** | `Home` | 4 chars | **3 – 8 chars** | Sits in compact horizontal/vertical rail |
| **Nav Link 2** | `About me` | 8 chars | **4 – 10 chars** | Sits in compact rail |
| **Nav Link 3** | `Contact` | 7 chars | **4 – 10 chars** | Sits in compact rail |
| **CV Badge** | `CV` | 2 chars | **2 – 4 chars** | Paired with download icon inside fixed pill |

*Your revised copy:*
```
Nav Link 1: Home
Nav Link 2: About me
Nav Link 3: Contact
CV Badge: CV
```

---

# Page 1: `index.html` — Homepage / Ideas Canvas

### 1. Page Metadata
* **Browser Tab Title:** `Taya The Designer` (17 chars)
  * *Limit:* **15 – 60 chars** (Optimal for browser tab and search engine results)
  * *Your revised copy:* `Taya The Designer`

### 2. Header & Hint
* **Stage Top Hint:** `Hover an idea` (14 chars)
  * *Limit:* **10 – 22 chars** (Mono 10px uppercase, centered at top of viewport)
  * *Your revised copy:* `Hover an idea`

### 3. Center Core (Hero Area)
*The central statement with dynamic hover reveals and spark tags.*

* **Hero Lead Sentence:**
  * *Current:* `Product Designer with experience in business strategy and UI/UX` (72 chars)
  * *Limit:* **50 – 85 chars**
  * *Rationale:* Uses large Bricolage Grotesque display font (`clamp(2.15rem, 4.9vw, 3.5rem)`). Must balance cleanly in 2–3 lines within the 700px central radial mask.
  * *Your revised copy:* `Product Designer with experience in business strategy and UI/UX`

* **Word Triggers & Spark Tags (Hover reveals on keywords):**
  * *Trigger 1:* `business strategy` (17 chars)
    * *Spark chip 1:* `branding` (8 chars) | *Limit:* 6 – 14 chars
    * *Spark chip 2:* `marketing` (9 chars) | *Limit:* 6 – 14 chars
    * *Spark chip 3:* `creative strategy` (17 chars) | *Limit:* 8 – 18 chars
    * *Spark chip 4:* `SEO` (3 chars) | *Limit:* 3 – 8 chars
  * *Trigger 2:* `UI/UX` (5 chars)
    * *Spark chip 1:* `design system` (13 chars) | *Limit:* 8 – 16 chars
    * *Spark chip 2:* `user testing` (12 chars) | *Limit:* 8 – 16 chars
    * *Spark chip 3:* `research` (8 chars) | *Limit:* 6 – 14 chars
    * *Spark chip 4:* `prototyping` (11 chars) | *Limit:* 8 – 16 chars
  * *Note:* Each spark has custom pixel offset coordinates (`--sx`, `--sy`). Words should remain 1–2 words each so they don't overlap adjacent words.
  * *Your revised copy:*
    ```
    Trigger 1: business strategy
      - Spark 1: branding
      - Spark 2: marketing
      - Spark 3: creative strategy
      - Spark 4: SEO

    Trigger 2: UI/UX
      - Spark 1: design system
      - Spark 2: user testing
      - Spark 3: research
      - Spark 4: prototyping
    ```

* **Core Subheading & Identity Reveal:**
  * *Current:* `Hey, I’m Taya. I move ideas from 1 to 1000` (41 chars)
  * *Limit:* **30 – 55 chars** (Must remain a concise single-line or compact 2-line anchor below lead text)
  * *Hover Reveal Tooltip (on "Taya"):* `AKA Tetiana Burlachenko` (23 chars)
  * *Limit:* **15 – 30 chars** (Centered mono badge tooltip, `white-space: nowrap`)
  * *Your revised copy:*
    ```
    Subheading: Hey, I’m Taya. I move ideas from 1 to 1000
    Name Tooltip: AKA Tetiana Burlachenko
    ```

### 4. Floating Drifting Ideas (8 Stage Slots)
*Floating interactive nodes distributed across the canvas. Each node has a title label and a category tag.*

* **Idea 1 (Coordinates: 20% / 18% — links to `kynso.html`):**
  * *Label:* `Holistic fitness app` (20 chars) | *Limit:* 15 – 30 chars
  * *Tag:* `Case study →` (12 chars) | *Limit:* 10 – 16 chars
  * *Sparks (6 chips):*
    1. `design system` (13 chars)
    2. `branding` (8 chars)
    3. `research` (8 chars)
    4. `user testing` (12 chars)
    5. `marketing` (9 chars)
    6. `prototyping` (11 chars)
  * *Your revised copy:*
    ```
    Label: Holistic fitness app
    Tag: Case study →
    Sparks: design system | branding | research | user testing | marketing | prototyping
    ```

* **Idea 2 (Coordinates: 50% / 6%):**
  * *Label:* `Board game character sheet tracker` (34 chars) | *Limit:* 15 – 35 chars
  * *Tag:* `Prototype` (9 chars) | *Limit:* 8 – 16 chars
  * *Your revised copy:*
    ```
    Label: Board game character sheet tracker
    Tag: Prototype
    ```

* **Idea 3 (Coordinates: 84% / 9%):**
  * *Label:* `Flower delivery app` (19 chars) | *Limit:* 15 – 30 chars
  * *Tag:* `Design prototype` (16 chars) | *Limit:* 8 – 16 chars
  * *Your revised copy:*
    ```
    Label: Flower delivery app
    Tag: Design prototype
    ```

* **Idea 4 (Coordinates: 74% / 24% — links to `case-study-section.html`):**
  * *Label:* `Quantum chemistry startup website` (33 chars) | *Limit:* 15 – 35 chars
  * *Tag:* `Case study →` (12 chars) | *Limit:* 10 – 16 chars
  * *Sparks (4 chips):*
    1. `user interviews` (15 chars)
    2. `research` (8 chars)
    3. `pitch deck design` (17 chars)
    4. `website design` (14 chars)
  * *Your revised copy:*
    ```
    Label: Quantum chemistry startup website
    Tag: Case study →
    Sparks: user interviews | research | pitch deck design | website design
    ```

* **Idea 5 (Coordinates: 7% / 68%):**
  * *Label:* `ADHD todo list` (14 chars) | *Limit:* 12 – 30 chars
  * *Tag:* `Prototype` (9 chars) | *Limit:* 8 – 16 chars
  * *Your revised copy:*
    ```
    Label: ADHD todo list
    Tag: Prototype
    ```

* **Idea 6 (Coordinates: 80% / 82% — links to `case-study-section.html`):**
  * *Label:* `Supplement checkout fix` (23 chars) | *Limit:* 15 – 30 chars
  * *Tag:* `Case study →` (12 chars) | *Limit:* 10 – 16 chars
  * *Sparks (3 chips):*
    1. `data analysis` (13 chars)
    2. `UI design` (9 chars)
    3. `UX design` (9 chars)
  * *Your revised copy:*
    ```
    Label: Supplement checkout fix
    Tag: Case study →
    Sparks: data analysis | UI design | UX design
    ```

* **Idea 7 (Coordinates: 16% / 88%):**
  * *Label:* `Synonyms lookup` (15 chars) | *Limit:* 12 – 30 chars
  * *Tag:* `Prototype` (9 chars) | *Limit:* 8 – 16 chars
  * *Your revised copy:*
    ```
    Label: Synonyms lookup
    Tag: Prototype
    ```

* **Idea 8 (Coordinates: 52% / 86% — links to `case-study-section.html`):**
  * *Label:* `Marketing AI service` (20 chars) | *Limit:* 15 – 30 chars
  * *Tag:* `Case study →` (12 chars) | *Limit:* 10 – 16 chars
  * *Sparks (5 chips):*
    1. `product design` (14 chars)
    2. `design system` (13 chars)
    3. `research` (8 chars)
    4. `branding` (8 chars)
    5. `user testing` (12 chars)
  * *Your revised copy:*
    ```
    Label: Marketing AI service
    Tag: Case study →
    Sparks: product design | design system | research | branding | user testing
    ```

---

# Page 2: `about-section.html` — About Me (The Marble & The Thread)

> **CRITICAL LAYOUT CONSTRAINT FOR THIS PAGE:**
> On desktop, each screen is locked to **100vh / 100dvh snap height** with `overflow: hidden`.
> If body paragraphs or titles exceed the recommended limits, **the text will clip or overflow on 13" laptop screens (768px – 800px viewport heights)**.
> Keep each paragraph strictly under **200–220 characters** (~30 words max).

### Page Metadata & Top Indicator
* **Browser Tab Title:** `About me — The Marble & The Thread` (35 chars)
  * *Limit:* **20 – 50 chars**
  * *Your revised copy:* `About me — The Marble & The Thread`
* **Scroll Hint:** `Scroll ↓` (8 chars)
  * *Limit:* **6 – 12 chars**
  * *Your revised copy:* `Scroll ↓`

---

### SCREEN 01: STAGE 01 — Substrate (The Unhewn Monolith)

#### Left Column (Professional)
* **Kicker:** `Professional // 01 // Substrate` (32 chars)
  * *Limit:* **20 – 35 chars** (Mono 11px uppercase)
  * *Your revised copy:* `Professional // 01 // Substrate`
* **Title:** `Curiosity as raw material` (25 chars)
  * *Limit:* **18 – 35 chars** (Bricolage 800 display, 1–2 lines max)
  * *Your revised copy:* `Curiosity as raw material`
* **Paragraph 1:**
  * *Current:* `Before design systems, components, and polished interactions, there is the uncarved block: an appetite for understanding how complex structures function under pressure.` (174 chars)
  * *Limit:* **140 – 190 chars** (~20–28 words)
  * *Your revised copy:* `Before design systems, components, and polished interactions, there is the uncarved block: an appetite for understanding how complex structures function under pressure.`
* **Paragraph 2:**
  * *Current:* `My foundation began at the intersection of business strategy, analytical modeling, and user intent. I learned early that every durable digital product is grounded in organizational constraints and human habit.` (208 chars)
  * *Limit:* **160 – 220 chars** (~25–35 words)
  * *Your revised copy:* `My foundation began at the intersection of business strategy, analytical modeling, and user intent. I learned early that every durable digital product is grounded in organizational constraints and human habit.`

#### Center Column (Marble Sculpture Meta)
* **Year Range:** `YYYY – YYYY` (11 chars placeholder)
  * *Limit:* **9 – 12 chars** (e.g. `2016 – 2018`)
  * *Your revised copy:* `YYYY – YYYY`
* **Stage Pill:** `STAGE 01` (8 chars)
  * *Limit:* **8 chars** (Fixed identifier)
  * *Your revised copy:* `STAGE 01`
* **Stage Name:** `The Unhewn Monolith` (19 chars)
  * *Limit:* **14 – 24 chars**
  * *Your revised copy:* `The Unhewn Monolith`
* **Image Accessibility Alt Text:** `Raw marble quarry block with rough split textures and grain` (60 chars)
  * *Your revised copy:* `Raw marble quarry block with rough split textures and grain`

#### Right Column (Personal)
* **Kicker:** `Personal // 01 // Origins` (24 chars)
  * *Limit:* **18 – 32 chars**
  * *Your revised copy:* `Personal // 01 // Origins`
* **Title:** `Taking apart clockworks & maps` (30 chars)
  * *Limit:* **18 – 35 chars**
  * *Your revised copy:* `Taking apart clockworks & maps`
* **Paragraph 1:**
  * *Current:* `Growing up, nothing stayed assembled for long. Mechanical alarms, cassette recorders, and bicycle gears were disassembled to study escapement wheels, springs, and friction points.` (176 chars)
  * *Limit:* **140 – 190 chars**
  * *Your revised copy:* `Growing up, nothing stayed assembled for long. Mechanical alarms, cassette recorders, and bicycle gears were disassembled to study escapement wheels, springs, and friction points.`
* **Paragraph 2:**
  * *Current:* `Parallel to machinery was an obsession with tabletop strategy rules, hand-drawn cartography, and tactical puzzles—spaces where transparent logic generates unexpected creative narratives.` (187 chars)
  * *Limit:* **150 – 210 chars**
  * *Your revised copy:* `Parallel to machinery was an obsession with tabletop strategy rules, hand-drawn cartography, and tactical puzzles—spaces where transparent logic generates unexpected creative narratives.`
* **Card Label:** `Early Premise` (13 chars)
  * *Limit:* **10 – 20 chars** (Mono 11px uppercase)
  * *Your revised copy:* `Early Premise`
* **Card Quote:**
  * *Current:* `“If you can map the hidden rulebook of a mechanism, you can reshape how people play the game.”` (94 chars)
  * *Limit:* **70 – 120 chars** (Single punchy philosophical insight)
  * *Your revised copy:* `“If you can map the hidden rulebook of a mechanism, you can reshape how people play the game.”`

---

### SCREEN 02: STAGE 02 — Reduction (The Primary Facets)

#### Left Column (Professional)
* **Kicker:** `Professional // 02 // Reduction` (32 chars)
  * *Limit:* **20 – 35 chars**
  * *Your revised copy:* `Professional // 02 // Reduction`
* **Title:** `Knocking off the excess` (23 chars)
  * *Limit:* **18 – 35 chars**
  * *Your revised copy:* `Knocking off the excess`
* **Paragraph 1:**
  * *Current:* `Transitioning from pure strategy into production product design was a lesson in physical reduction. Great software is not accumulated; it is carved out by ruthless elimination of non-essential weight.` (202 chars)
  * *Limit:* **150 – 210 chars**
  * *Your revised copy:* `Transitioning from pure strategy into production product design was a lesson in physical reduction. Great software is not accumulated; it is carved out by ruthless elimination of non-essential weight.`
* **Paragraph 2:**
  * *Current:* `This phase was forged in high-tempo sprints: rapid wireframing, sitting beside users through confusing error states, and learning that subtractive design reveals clarity faster than additive decoration.` (204 chars)
  * *Limit:* **150 – 210 chars**
  * *Your revised copy:* `This phase was forged in high-tempo sprints: rapid wireframing, sitting beside users through confusing error states, and learning that subtractive design reveals clarity faster than additive decoration.`

#### Center Column (Marble Sculpture Meta)
* **Year Range:** `YYYY – YYYY` (11 chars placeholder)
  * *Limit:* **9 – 12 chars** (e.g. `2018 – 2021`)
  * *Your revised copy:* `YYYY – YYYY`
* **Stage Pill:** `STAGE 02` (8 chars)
  * *Limit:* **8 chars**
  * *Your revised copy:* `STAGE 02`
* **Stage Name:** `The Primary Facets` (18 chars)
  * *Limit:* **14 – 24 chars**
  * *Your revised copy:* `The Primary Facets`
* **Image Accessibility Alt Text:** `Chiseled marble block with primary facets and stone chips` (57 chars)
  * *Your revised copy:* `Chiseled marble block with primary facets and stone chips`

#### Right Column (Personal)
* **Kicker:** `Personal // 02 // Movement` (25 chars)
  * *Limit:* **18 – 32 chars**
  * *Your revised copy:* `Personal // 02 // Movement`
* **Title:** `Relocations, cameras & clay` (26 chars)
  * *Limit:* **18 – 35 chars**
  * *Your revised copy:* `Relocations, cameras & clay`
* **Paragraph 1:**
  * *Current:* `Packed life into two suitcases and navigated new cities, languages, and creative scenes. Picked up street photography with a fixed 35mm lens—training the eye to anticipate composition before raising the viewfinder.` (216 chars)
  * *Limit:* **160 – 220 chars**
  * *Your revised copy:* `Packed life into two suitcases and navigated new cities, languages, and creative scenes. Picked up street photography with a fixed 35mm lens—training the eye to anticipate composition before raising the viewfinder.`
* **Paragraph 2:**
  * *Current:* `In ceramic workshops, I threw stoneware bowls on high-speed kick wheels. Clay taught me immediate sensory feedback: pull the wall too fast and the whole cylinder collapses.` (172 chars)
  * *Limit:* **140 – 190 chars**
  * *Your revised copy:* `In ceramic workshops, I threw stoneware bowls on high-speed kick wheels. Clay taught me immediate sensory feedback: pull the wall too fast and the whole cylinder collapses.`
* **Card Label:** `Studio Discovery` (16 chars)
  * *Limit:* **10 – 20 chars**
  * *Your revised copy:* `Studio Discovery`
* **Card Quote:**
  * *Current:* `“Clay collapses when you rush the center; stone shatters when you strike against the natural grain.”` (99 chars)
  * *Limit:* **70 – 120 chars**
  * *Your revised copy:* `“Clay collapses when you rush the center; stone shatters when you strike against the natural grain.”`

---

### SCREEN 03: STAGE 03 — Scale & Systems (The Awakening Form)

#### Left Column (Professional)
* **Kicker:** `Professional // 03 // Scale & Systems` (38 chars)
  * *Limit:* **20 – 38 chars**
  * *Your revised copy:* `Professional // 03 // Scale & Systems`
* **Title:** `Sculpting from 1 to 1000` (24 chars)
  * *Limit:* **18 – 35 chars**
  * *Your revised copy:* `Sculpting from 1 to 1000`
* **Paragraph 1:**
  * *Current:* `Scaling digital products requires an entirely different finesse: harmonizing multi-tier design systems, maintaining typographic discipline across platforms, and uniting engineering with strategic business targets.` (217 chars)
  * *Limit:* **160 – 220 chars**
  * *Your revised copy:* `Scaling digital products requires an entirely different finesse: harmonizing multi-tier design systems, maintaining typographic discipline across platforms, and uniting engineering with strategic business targets.`
* **Paragraph 2:**
  * *Current:* `At this altitude, design is about creating self-sustaining gravity. I build resilient token architectures, clear documentation patterns, and interfaces that feel as responsive as physical instruments.` (201 chars)
  * *Limit:* **150 – 210 chars**
  * *Your revised copy:* `At this altitude, design is about creating self-sustaining gravity. I build resilient token architectures, clear documentation patterns, and interfaces that feel as responsive as physical instruments.`

#### Center Column (Marble Sculpture Meta)
* **Year Range:** `YYYY – YYYY` (11 chars placeholder)
  * *Limit:* **9 – 12 chars** (e.g. `2021 – 2023`)
  * *Your revised copy:* `YYYY – YYYY`
* **Stage Pill:** `STAGE 03` (8 chars)
  * *Limit:* **8 chars**
  * *Your revised copy:* `STAGE 03`
* **Stage Name:** `The Awakening Form` (18 chars)
  * *Limit:* **14 – 24 chars**
  * *Your revised copy:* `The Awakening Form`
* **Image Accessibility Alt Text:** `Classical marble sculpture emerging from the stone block` (56 chars)
  * *Your revised copy:* `Classical marble sculpture emerging from the stone block`

#### Right Column (Personal)
* **Kicker:** `Personal // 03 // Tempo & Rituals` (32 chars)
  * *Limit:* **18 – 34 chars**
  * *Your revised copy:* `Personal // 03 // Tempo & Rituals`
* **Title:** `Long-distance miles & pour-overs` (31 chars)
  * *Limit:* **18 – 35 chars**
  * *Your revised copy:* `Long-distance miles & pour-overs`
* **Paragraph 1:**
  * *Current:* `Endurance running reshaped how I think about focus. Preparing for 26.2-mile races taught me pacing: the distinction between sprint-induced burnout and steady, compounding velocity.` (182 chars)
  * *Limit:* **140 – 200 chars**
  * *Your revised copy:* `Endurance running reshaped how I think about focus. Preparing for 26.2-mile races taught me pacing: the distinction between sprint-induced burnout and steady, compounding velocity.`
* **Paragraph 2:**
  * *Current:* `Morning ritual: weighing washed Ethiopian beans to the tenth of a gram, controlling water temperature, and collecting out-of-print Swiss graphic design journals from the 1960s.` (177 chars)
  * *Limit:* **140 – 195 chars**
  * *Your revised copy:* `Morning ritual: weighing washed Ethiopian beans to the tenth of a gram, controlling water temperature, and collecting out-of-print Swiss graphic design journals from the 1960s.`
* **Card Label:** `Pacing Philosophy` (17 chars)
  * *Limit:* **10 – 20 chars**
  * *Your revised copy:* `Pacing Philosophy`
* **Card Quote:**
  * *Current:* `“Miles 18 through 22 feel just like complex software refactoring: calm breath, steady cadence, no sudden panic.”` (112 chars)
  * *Limit:* **70 – 120 chars**
  * *Your revised copy:* `“Miles 18 through 22 feel just like complex software refactoring: calm breath, steady cadence, no sudden panic.”`

---

### SCREEN 04: STAGE 04 — Horizon (The Polished Monument)

#### Left Column (Professional)
* **Kicker:** `Professional // 04 // Horizon` (30 chars)
  * *Limit:* **20 – 35 chars**
  * *Your revised copy:* `Professional // 04 // Horizon`
* **Title:** `Instruments for human thought` (29 chars)
  * *Limit:* **18 – 35 chars**
  * *Your revised copy:* `Instruments for human thought`
* **Paragraph 1:**
  * *Current:* `The polished form is not static; it is an active instrument. Today, my focus is directed toward high-agency interfaces: AI collaborative workflows, spatial software, and tools that expand human curiosity rather than deplete attention.` (235 chars)
  * *Limit:* **160 – 235 chars**
  * *Your revised copy:* `The polished form is not static; it is an active instrument. Today, my focus is directed toward high-agency interfaces: AI collaborative workflows, spatial software, and tools that expand human curiosity rather than deplete attention.`
* **Paragraph 2 (includes case study link):**
  * *Current:* `I partner with ambitious teams to bring complex 0-to-1 concepts into crisp, tangible reality. Explore how I apply this craft in the Holistic fitness app case study →` (167 chars)
  * *Limit:* **130 – 185 chars**
  * *Your revised copy:* `I partner with ambitious teams to bring complex 0-to-1 concepts into crisp, tangible reality. Explore how I apply this craft in the Holistic fitness app case study →`

#### Center Column (Marble Sculpture Meta)
* **Year Range:** `YYYY – NOW` (10 chars placeholder)
  * *Limit:* **9 – 12 chars** (e.g. `2024 – NOW`)
  * *Your revised copy:* `YYYY – NOW`
* **Stage Pill:** `STAGE 04` (8 chars)
  * *Limit:* **8 chars**
  * *Your revised copy:* `STAGE 04`
* **Stage Name:** `The Polished Monument` (21 chars)
  * *Limit:* **14 – 24 chars**
  * *Your revised copy:* `The Polished Monument`
* **Image Accessibility Alt Text:** `Polished classical marble bust on plinth` (40 chars)
  * *Your revised copy:* `Polished classical marble bust on plinth`

#### Right Column (Personal)
* **Kicker:** `Personal // 04 // Dialogue` (25 chars)
  * *Limit:* **18 – 32 chars**
  * *Your revised copy:* `Personal // 04 // Dialogue`
* **Title:** `Never finished, always curious` (30 chars)
  * *Limit:* **18 – 35 chars**
  * *Your revised copy:* `Never finished, always curious`
* **Paragraph 1:**
  * *Current:* `A statue is finished when the sculptor steps away, but a designer's craft is constantly reconstituted by every conversation, collaborator, and new challenge encountered.` (170 chars)
  * *Limit:* **140 – 190 chars**
  * *Your revised copy:* `A statue is finished when the sculptor steps away, but a designer's craft is constantly reconstituted by every conversation, collaborator, and new challenge encountered.`
* **Paragraph 2:**
  * *Current:* `Outside design: collecting fountain pens, exploring brutalist architecture, and brewing conversations over great coffee. Always open to collaborate with teams that care obsessively about substance.` (200 chars)
  * *Limit:* **150 – 210 chars**
  * *Your revised copy:* `Outside design: collecting fountain pens, exploring brutalist architecture, and brewing conversations over great coffee. Always open to collaborate with teams that care obsessively about substance.`
* **Card Label:** `Open Channel` (12 chars)
  * *Limit:* **10 – 20 chars**
  * *Your revised copy:* `Open Channel`
* **Card Quote:**
  * *Current:* `“Reach out about early-stage ideas, typography disputes, or where to find the finest double-shot espresso.”` (106 chars)
  * *Limit:* **70 – 120 chars**
  * *Your revised copy:* `“Reach out about early-stage ideas, typography disputes, or where to find the finest double-shot espresso.”`

---

# Page 3: `kynso.html` — Case Study: Kynso

*Horizontal scroll presentation with Gantt chart tracks.*

### Page Metadata
* **Browser Tab Title:** `Kynso — holistic fitness app case study` (41 chars)
  * *Limit:* **25 – 60 chars**
  * *Your revised copy:* `Kynso — holistic fitness app case study`

---

### Section 1: The Hook
*Screen 1: The bold opening thesis statement and metadata.*

* **Eyebrow:** `Case study — Kynso` (19 chars)
  * *Limit:* **14 – 25 chars** (Mono 12px uppercase)
  * *Your revised copy:* `Case study — Kynso`
* **Hook Line (H1):**
  * *Current:* `Four apps could tell you what you did. Kynso had to tell you what to do next.` (76 chars)
  * *Limit:* **60 – 95 chars**
  * *Rationale:* Heavy display font (`clamp(2.1rem, 4.6vw, 4.1rem)`). Balanced in 2–3 lines across 980px max width.
  * *Your revised copy:* `Four apps could tell you what you did. Kynso had to tell you what to do next.`
* **Hook Subtitle:**
  * *Current:* `A holistic fitness app that reads training, sleep, food and mood as one signal. Twelve weeks from an empty name to a shipped product, a brand and a launch.` (157 chars)
  * *Limit:* **120 – 180 chars** (Container constrained to `56ch` max width)
  * *Your revised copy:* `A holistic fitness app that reads training, sleep, food and mood as one signal. Twelve weeks from an empty name to a shipped product, a brand and a launch.`
* **Metadata Facts (Recruiter quick-scan block):**
  * *Role:* `Product designer, brand lead` (28 chars) | *Limit:* 15 – 35 chars
  * *Year:* `2025` (4 chars) | *Limit:* 4 – 9 chars
  * *Duration:* `12 weeks` (8 chars) | *Limit:* 6 – 15 chars
  * *Team:* `1 designer, 2 engineers, 1 founder` (34 chars) | *Limit:* 20 – 45 chars
  * *Your revised copy:*
    ```
    Role: Product designer, brand lead
    Year: 2025
    Duration: 12 weeks
    Team: 1 designer, 2 engineers, 1 founder
    ```
* **Scroll Callout:** `Scroll →` (8 chars) | *Limit:* 6 – 12 chars

---

### Section 2: The Client
* **Section Kicker:** `The client` (10 chars)
* **Lede Statement:**
  * *Current:* `Kynso is an independent wellness studio putting its coaching method into its first consumer product.` (98 chars)
  * *Limit:* **75 – 120 chars** (Large lede sentence, `clamp(1.15rem, 1.7vw, 1.4rem)`)
  * *Your revised copy:* `Kynso is an independent wellness studio putting its coaching method into its first consumer product.`
* **Client Prose:**
  * *Current:* `The founder had eight years of in-person coaching behind them and a waiting list they could not serve. The method was already simple: four inputs a day, one weekly check-in, one instruction at the end of it. What did not exist was anything else — no name, no interface, no audience beyond the studio’s own hundred-odd clients.` (334 chars)
  * *Limit:* **260 – 380 chars** (~40–60 words, container width 680px)
  * *Your revised copy:* `The founder had eight years of in-person coaching behind them and a waiting list they could not serve. The method was already simple: four inputs a day, one weekly check-in, one instruction at the end of it. What did not exist was anything else — no name, no interface, no audience beyond the studio’s own hundred-odd clients.`
* **Business Shape Facts:**
  * *Industry:* `Health & fitness` (16 chars) | *Limit:* 12 – 30 chars
  * *Stage:* `Pre-seed` (8 chars) | *Limit:* 8 – 20 chars
  * *Surface:* `iOS first, Android to follow` (28 chars) | *Limit:* 15 – 35 chars
  * *Your revised copy:*
    ```
    Industry: Health & fitness
    Stage: Pre-seed
    Surface: iOS first, Android to follow
    ```

---

### Section 3: The Problem
* **Section Kicker:** `The problem` (11 chars)
* **Problem Statement:**
  * *Current:* `The brief asked for a tracker. Tracking was the one thing the market already did well.` (85 chars)
  * *Limit:* **60 – 100 chars**
  * *Your revised copy:* `The brief asked for a tracker. Tracking was the one thing the market already did well.`
* **Underlying Gap Prose:**
  * *Current:* `Every competitor could log a workout, a meal and seven hours of sleep, and every one of them handed the reading back as a chart. The studio’s clients were not short of data; they were short of a verdict. So the work was reframed before a single screen was drawn: not how to capture four kinds of input, but how to spend them on one instruction a person could act on before breakfast.` (386 chars)
  * *Limit:* **280 – 420 chars** (~45–65 words, container width 740px)
  * *Your revised copy:* `Every competitor could log a workout, a meal and seven hours of sleep, and every one of them handed the reading back as a chart. The studio’s clients were not short of data; they were short of a verdict. So the work was reframed before a single screen was drawn: not how to capture four kinds of input, but how to spend them on one instruction a person could act on before breakfast.`
* **Symptoms (3 Diagnoses):**
  * *Signal Key:* `Signal` | *Val:* `Nine of twelve interviewed clients had abandoned a fitness app inside a month, and every one of them still owned it.` (120 chars) | *Limit:* **90 – 150 chars**
  * *Constraint Key:* `Constraint` | *Val:* `Two engineers, one release window, and a coaching method that could be translated but not edited.` (97 chars) | *Limit:* **75 – 140 chars**
  * *Unknown Key:* `Unknown` | *Val:* `Whether people would give four inputs a day to an app that gives back a single sentence.` (87 chars) | *Limit:* **70 – 130 chars**
  * *Your revised copy:*
    ```
    Signal: Nine of twelve interviewed clients had abandoned a fitness app inside a month, and every one of them still owned it.
    Constraint: Two engineers, one release window, and a coaching method that could be translated but not edited.
    Unknown: Whether people would give four inputs a day to an app that gives back a single sentence.
    ```

---

### Section 4: The Plan / Gantt Chart Tracks
*Interactive interactive Gantt chart. Includes bar pills (strict width) and corresponding artwork notes (right column).*

* **Section Header:**
  * *Kicker:* `How it got built` (16 chars)
  * *Hint:* `Hover a track` (13 chars)
* **Track Bar Labels (Grid spans — STRICT CHARACTER LIMITS TO PREVENT PILL OVERFLOW):**
  * Track Title 1: `Branding` (8 chars) | *Limit:* **6 – 14 chars**
  * Track Title 2: `Product design` (14 chars) | *Limit:* **10 – 18 chars**
  * Track Title 3: `Marketing` (9 chars) | *Limit:* **6 – 14 chars**

#### Group 1: Product Design (Main Open Track)
* **Phase 01 Bar:** `Research` (8 chars) | *Limit:* **6 – 14 chars**
  * *Artwork Caption & Note:* `Twelve client interviews and four competitor teardowns. The finding that reframed the brief: people quit at the chart, not at the logging.` (145 chars) | *Limit:* **100 – 165 chars**
* **Phase 02 Bar:** `Prototyping` (11 chars) | *Limit:* **6 – 14 chars**
  * *Artwork Caption & Note:* `Three routes to the same daily reading, drawn cheap enough to be wrong. The one-card home screen came out of the second.` (119 chars) | *Limit:* **95 – 155 chars**
* **Phase 03 Bar:** `Testing` (7 chars) | *Limit:* **6 – 14 chars**
  * *Artwork Caption & Note:* `Eight moderated sessions and a two-week diary study. Input dropped from four taps to one gesture after the first round.` (119 chars) | *Limit:* **95 – 155 chars**
* **Phase 04 Bar:** `Design system` (13 chars) | *Limit:* **6 – 16 chars**
  * *Artwork Caption & Note:* `Tokens, thirty-one components and every empty and error state documented, so two engineers could build without asking.` (118 chars) | *Limit:* **95 – 155 chars**

#### Group 2: Branding (Foldable Track)
* **Aside Overview Note (when closed):** `Name, wordmark, type and voice, settled early so the product had something to be designed in. Open the track for its five steps.` (138 chars) | *Limit:* **100 – 165 chars**
* **Phase 01 Bar:** `Market research` (15 chars) | *Limit:* **8 – 16 chars**
  * *Artwork Note:* `Category teardown, and eleven name candidates screened against what the studio’s clients already called the method.` (115 chars) | *Limit:* **90 – 150 chars**
* **Phase 02 Bar:** `Naming` (6 chars) | *Limit:* **6 – 14 chars**
  * *Artwork Note:* `Kynso chosen for being short, unclaimed and unmetaphorical — no roots, no leaves, no mountains.` (95 chars) | *Limit:* **80 – 140 chars**
* **Phase 03 Bar:** `Logo` (4 chars) | *Limit:* **4 – 12 chars**
  * *Artwork Note:* `Drawn from the app’s own type at a single weight, so the icon and the interface never disagree.` (95 chars) | *Limit:* **80 – 140 chars**
* **Phase 04 Bar:** `Design concept` (14 chars) | *Limit:* **8 – 16 chars**
  * *Artwork Note:* `Paper, one ink, one accent. The concept the product was designed in rather than dressed in afterwards.` (104 chars) | *Limit:* **80 – 140 chars**
* **Phase 05 Bar:** `Brand guidelines` (16 chars) | *Limit:* **8 – 18 chars**
  * *Artwork Note:* `Voice, type scale and accent rules written down before the first screen, so the copy had a register to be written in.` (118 chars) | *Limit:* **90 – 150 chars**

#### Group 3: Marketing (Foldable Track)
* **Aside Overview Note (when closed):** `The launch, built on research the product had already paid for. Open the track for its five steps.` (99 chars) | *Limit:* **80 – 140 chars**
* **Phase 01 Bar:** `Positioning` (11 chars) | *Limit:* **6 – 14 chars**
  * *Artwork Note:* `One line, argued from the interviews: the app that ends the day with an instruction, not a chart.` (97 chars) | *Limit:* **80 – 140 chars**
* **Phase 02 Bar:** `Waitlist page` (13 chars) | *Limit:* **6 – 15 chars**
  * *Artwork Note:* `One page, one promise, one field — live three weeks before the build was finished.` (82 chars) | *Limit:* **70 – 130 chars**
* **Phase 03 Bar:** `Store listing` (13 chars) | *Limit:* **6 – 15 chars**
  * *Artwork Note:* `Screenshots ordered as an argument rather than a tour, opening on the daily reading.` (84 chars) | *Limit:* **70 – 130 chars**
* **Phase 04 Bar:** `Content plan` (12 chars) | *Limit:* **6 – 14 chars**
  * *Artwork Note:* `Eight weeks of founder-led posts drafted from interview language verbatim.` (73 chars) | *Limit:* **60 – 120 chars**
* **Phase 05 Bar:** `Launch` (6 chars) | *Limit:* **5 – 12 chars**
  * *Artwork Note:* `The waitlist opened in cohorts, so the first week of reviews came from people the method already fit.` (101 chars) | *Limit:* **80 – 140 chars**

*Your revised copy for Gantt Tracks & Notes:*
```
[Product Design Track]
- Phase 01: Research
  Note: Twelve client interviews and four competitor teardowns. The finding that reframed the brief: people quit at the chart, not at the logging.
- Phase 02: Prototyping
  Note: Three routes to the same daily reading, drawn cheap enough to be wrong. The one-card home screen came out of the second.
- Phase 03: Testing
  Note: Eight moderated sessions and a two-week diary study. Input dropped from four taps to one gesture after the first round.
- Phase 04: Design system
  Note: Tokens, thirty-one components and every empty and error state documented, so two engineers could build without asking.

[Branding Track]
- Aside overview note: Name, wordmark, type and voice, settled early so the product had something to be designed in. Open the track for its five steps.
- Phase 01: Market research
  Note: Category teardown, and eleven name candidates screened against what the studio’s clients already called the method.
- Phase 02: Naming
  Note: Kynso chosen for being short, unclaimed and unmetaphorical — no roots, no leaves, no mountains.
- Phase 03: Logo
  Note: Drawn from the app’s own type at a single weight, so the icon and the interface never disagree.
- Phase 04: Design concept
  Note: Paper, one ink, one accent. The concept the product was designed in rather than dressed in afterwards.
- Phase 05: Brand guidelines
  Note: Voice, type scale and accent rules written down before the first screen, so the copy had a register to be written in.

[Marketing Track]
- Aside overview note: The launch, built on research the product had already paid for. Open the track for its five steps.
- Phase 01: Positioning
  Note: One line, argued from the interviews: the app that ends the day with an instruction, not a chart.
- Phase 02: Waitlist page
  Note: One page, one promise, one field — live three weeks before the build was finished.
- Phase 03: Store listing
  Note: Screenshots ordered as an argument rather than a tour, opening on the daily reading.
- Phase 04: Content plan
  Note: Eight weeks of founder-led posts drafted from interview language verbatim.
- Phase 05: Launch
  Note: The waitlist opened in cohorts, so the first week of reviews came from people the method already fit.
```

---

### Section 5: The Impact
* **Section Kicker:** `The impact` (10 chars)
* **Outcome Statement:**
  * *Current:* `Kynso shipped in week twelve and kept a third of its first cohort past the month where the category loses them.` (113 chars)
  * *Limit:* **80 – 135 chars**
  * *Your revised copy:* `Kynso shipped in week twelve and kept a third of its first cohort past the month where the category loses them.`
* **Metrics (3 Data Points):**
  * *Metric 1:* Number: `34%` (3 chars) | Label: `Week-four retention` (19 chars) | *Limit:* 12 – 28 chars
  * *Metric 2:* Number: `1:04` (4 chars) | Label: `Median daily session` (20 chars) | *Limit:* 12 – 28 chars
  * *Metric 3:* Number: `31` (2 chars) | Label: `Components handed off` (21 chars) | *Limit:* 12 – 28 chars
  * *Your revised copy:*
    ```
    Metric 1: 34% — Week-four retention
    Metric 2: 1:04 — Median daily session
    Metric 3: 31 — Components handed off
    ```
* **Impact Prose:**
  * *Current:* `The daily session is the number I care about: a minute is what the method was always worth, and every design decision after week seven was an argument for spending less of the user’s time, not more of it. The system outlived the launch — the Android build was assembled from it without a designer in the room.` (309 chars)
  * *Limit:* **240 – 360 chars** (~35–55 words, container width 720px)
  * *Your revised copy:* `The daily session is the number I care about: a minute is what the method was always worth, and every design decision after week seven was an argument for spending less of the user’s time, not more of it. The system outlived the launch — the Android build was assembled from it without a designer in the room.`

---

### Section 6: Next Case Study Link
* **Eyebrow:** `Next case study` (15 chars)
* **Next Project Title:** `Quantum chemistry startup website` (33 chars)
  * *Limit:* **20 – 45 chars** (Has animated multi-row highlighter effect)
  * *Your revised copy:* `Quantum chemistry startup website`

---

# Page 4: `case-study-section.html` — Case Study Template

*Standard case study layout for E-Commerce / Checkout optimization.*

### Page Metadata
* **Browser Tab Title:** `Case study — template` (21 chars)
  * *Limit:* **20 – 50 chars**
  * *Your revised copy:* `Case study — template`

---

### Section 1: The Hook
* **Eyebrow:** `Case study — 01` (16 chars)
  * *Limit:* **12 – 24 chars**
  * *Your revised copy:* `Case study — 01`
* **Hook Line (H1):**
  * *Current:* `Checkout lost four of every five carts. Six weeks later it lost one.` (67 chars)
  * *Limit:* **55 – 90 chars**
  * *Your revised copy:* `Checkout lost four of every five carts. Six weeks later it lost one.`
* **Hook Subtitle:**
  * *Current:* `One sentence of context: the product, the surface, and the stake. Keep it to a single breath — the detail belongs further down.` (130 chars)
  * *Limit:* **100 – 170 chars** (max-width `56ch`)
  * *Your revised copy:* `One sentence of context: the product, the surface, and the stake. Keep it to a single breath — the detail belongs further down.`
* **Metadata Facts:**
  * *Role:* `Product designer` (16 chars) | *Limit:* 12 – 30 chars
  * *Year:* `2025` (4 chars) | *Limit:* 4 – 9 chars
  * *Duration:* `6 weeks` (7 chars) | *Limit:* 6 – 15 chars
  * *Team:* `1 designer, 2 engineers, 1 PM` (28 chars) | *Limit:* 18 – 40 chars
  * *Your revised copy:*
    ```
    Role: Product designer
    Year: 2025
    Duration: 6 weeks
    Team: 1 designer, 2 engineers, 1 PM
    ```

---

### Section 2: The Client
* **Section Kicker:** `The client` (10 chars)
* **Lede Statement:**
  * *Current:* `Client name sells what they sell to who buys it.` (48 chars)
  * *Limit:* **45 – 100 chars**
  * *Your revised copy:* `Client name sells what they sell to who buys it.`
* **Prose:**
  * *Current:* `Two or three sentences on the business as it stood when the work started: size, stage, how they made money, and what they had already tried. Written for someone who has never heard of them.` (191 chars)
  * *Limit:* **160 – 320 chars** (~25–50 words)
  * *Your revised copy:* `Two or three sentences on the business as it stood when the work started: size, stage, how they made money, and what they had already tried. Written for someone who has never heard of them.`
* **Facts:**
  * *Industry:* `Direct-to-consumer retail` (26 chars) | *Limit:* 12 – 30 chars
  * *Stage:* `Series A` (8 chars) | *Limit:* 6 – 18 chars
  * *Surface:* `Responsive web` (14 chars) | *Limit:* 10 – 30 chars
  * *Your revised copy:*
    ```
    Industry: Direct-to-consumer retail
    Stage: Series A
    Surface: Responsive web
    ```

---

### Section 3: The Problem
* **Section Kicker:** `The problem` (11 chars)
* **Problem Statement:**
  * *Current:* `State the problem as the client stated it, in their words, before you reframed it.` (85 chars)
  * *Limit:* **60 – 100 chars**
  * *Your revised copy:* `State the problem as the client stated it, in their words, before you reframed it.`
* **Prose:**
  * *Current:* `Then the paragraph that says what was actually going on underneath — the gap between the brief you were handed and the problem you found. This is where a reader decides whether you think or just execute.` (206 chars)
  * *Limit:* **180 – 360 chars**
  * *Your revised copy:* `Then the paragraph that says what was actually going on underneath — the gap between the brief you were handed and the problem you found. This is where a reader decides whether you think or just execute.`
* **Symptoms (3 Diagnoses):**
  * *Signal Key:* `Signal` | *Val:* `The number, quote, or ticket volume that made it undeniable.` (61 chars) | *Limit:* **50 – 140 chars**
  * *Constraint Key:* `Constraint` | *Val:* `The thing you could not change: budget, stack, deadline, brand.` (64 chars) | *Limit:* **50 – 140 chars**
  * *Unknown Key:* `Unknown` | *Val:* `The question nobody could answer at the start.` (45 chars) | *Limit:* **40 – 130 chars**
  * *Your revised copy:*
    ```
    Signal: The number, quote, or ticket volume that made it undeniable.
    Constraint: The thing you could not change: budget, stack, deadline, brand.
    Unknown: The question nobody could answer at the start.
    ```

---

### Section 4: Timeline / Steps (01 – 05)
*Sequential steps with hover artwork and screenshots.*

* **Header:**
  * *Kicker:* `How it got solved` (17 chars)
  * *Hint:* `Hover a step` (12 chars)
* **Step 01:**
  * *Title:* `Named the real question` (23 chars) | *Limit:* **20 – 45 chars**
  * *Text:* `What you did, in two sentences, and what it changed about the next step. Verbs, not nouns.` (90 chars) | *Limit:* **70 – 130 chars**
  * *Tags:* `Stakeholder interviews · Analytics review` (41 chars) | *Limit:* **25 – 55 chars**
  * *Figcaption:* `Initial stakeholder alignment and friction mapping` (51 chars) | *Limit:* **35 – 70 chars**
* **Step 02:**
  * *Title:* `Went and watched people fail` (27 chars) | *Limit:* **20 – 45 chars**
  * *Text:* `What you did, in two sentences, and what it changed about the next step. Verbs, not nouns.` (90 chars) | *Limit:* **70 – 130 chars**
  * *Tags:* `Moderated testing · Session replay` (34 chars) | *Limit:* **25 – 55 chars**
  * *Figcaption:* `User session recording audit and drop-off points` (48 chars) | *Limit:* **35 – 70 chars**
* **Step 03:**
  * *Title:* `Drew the cheapest version that could be wrong` (44 chars) | *Limit:* **25 – 55 chars**
  * *Text:* `What you did, in two sentences, and what it changed about the next step. Verbs, not nouns.` (90 chars) | *Limit:* **70 – 130 chars**
  * *Tags:* `Flows · Low-fidelity wireframes` (31 chars) | *Limit:* **25 – 55 chars**
  * *Figcaption:* `Checkout branch logic and step consolidation` (44 chars) | *Limit:* **35 – 70 chars**
* **Step 04:**
  * *Title:* `Built it properly once it stopped being wrong` (45 chars) | *Limit:* **25 – 55 chars**
  * *Text:* `What you did, in two sentences, and what it changed about the next step. Verbs, not nouns.` (90 chars) | *Limit:* **70 – 130 chars**
  * *Tags:* `UI design · Design system` (25 chars) | *Limit:* **20 – 50 chars**
  * *Figcaption:* `Componentized checkout sheet and validation states` (50 chars) | *Limit:* **35 – 70 chars**
* **Step 05:**
  * *Title:* `Shipped it behind a flag and watched the number move` (52 chars) | *Limit:* **25 – 55 chars**
  * *Text:* `What you did, in two sentences, and what it changed about the next step. Verbs, not nouns.` (90 chars) | *Limit:* **70 – 130 chars**
  * *Tags:* `Handoff · A/B test` (18 chars) | *Limit:* **15 – 45 chars**
  * *Figcaption:* `Cohort conversion split test results` (36 chars) | *Limit:* **30 – 65 chars**

*Your revised copy for Steps 01–05:*
```
Step 01:
  Title: Named the real question
  Text: What you did, in two sentences, and what it changed about the next step. Verbs, not nouns.
  Tags: Stakeholder interviews · Analytics review
  Figcaption: Initial stakeholder alignment and friction mapping

Step 02:
  Title: Went and watched people fail
  Text: What you did, in two sentences, and what it changed about the next step. Verbs, not nouns.
  Tags: Moderated testing · Session replay
  Figcaption: User session recording audit and drop-off points

Step 03:
  Title: Drew the cheapest version that could be wrong
  Text: What you did, in two sentences, and what it changed about the next step. Verbs, not nouns.
  Tags: Flows · Low-fidelity wireframes
  Figcaption: Checkout branch logic and step consolidation

Step 04:
  Title: Built it properly once it stopped being wrong
  Text: What you did, in two sentences, and what it changed about the next step. Verbs, not nouns.
  Tags: UI design · Design system
  Figcaption: Componentized checkout sheet and validation states

Step 05:
  Title: Shipped it behind a flag and watched the number move
  Text: What you did, in two sentences, and what it changed about the next step. Verbs, not nouns.
  Tags: Handoff · A/B test
  Figcaption: Cohort conversion split test results
```

---

### Section 5: The Impact
* **Section Kicker:** `The impact` (10 chars)
* **Outcome Statement:**
  * *Current:* `Cart completion rose from 21% to 78% within six weeks of rollout.` (65 chars)
  * *Limit:* **50 – 100 chars**
  * *Your revised copy:* `Cart completion rose from 21% to 78% within six weeks of rollout.`
* **Metrics (3 Data Points):**
  * *Metric 1:* Number: `+57%` (4 chars) | Label: `Checkout conversion` (19 chars) | *Limit:* 12 – 28 chars
  * *Metric 2:* Number: `−42s` (4 chars) | Label: `Time to complete` (16 chars) | *Limit:* 12 – 28 chars
  * *Metric 3:* Number: `0` (1 char) | Label: `Drop-off support tickets` (24 chars) | *Limit:* 12 – 28 chars
  * *Your revised copy:*
    ```
    Metric 1: +57% — Checkout conversion
    Metric 2: −42s — Time to complete
    Metric 3: 0 — Drop-off support tickets
    ```
* **Impact Prose:**
  * *Current:* `Two to three sentences on the business outcome, the long-term impact on the team, and what this project taught you about product design under real constraints.` (163 chars)
  * *Limit:* **140 – 280 chars** (~20–45 words)
  * *Your revised copy:* `Two to three sentences on the business outcome, the long-term impact on the team, and what this project taught you about product design under real constraints.`

---

### Section 6: Next Case Study Link
* **Eyebrow:** `Next case study` (15 chars)
* **Next Project Title:** `Quantum chemistry startup website` (33 chars)
  * *Limit:* **20 – 45 chars**
  * *Your revised copy:* `Quantum chemistry startup website`

---

# Page 5: `404.html` — Error 404 Page

### Page Metadata & Core Content
* **Browser Tab Title:** `Page not found — Taya The Designer` (34 chars)
  * *Limit:* **20 – 50 chars**
  * *Your revised copy:* `Page not found — Taya The Designer`
* **Eyebrow:** `Error 404 — page not found` (25 chars)
  * *Limit:* **18 – 30 chars** (Mono uppercase)
  * *Your revised copy:* `Error 404 — page not found`
* **Headline (H1):** `This page rolled a natural 1.` (29 chars)
  * *Limit:* **20 – 45 chars**
  * *Your revised copy:* `This page rolled a natural 1.`
* **Body Explanation (with homepage link):**
  * *Current:* `Whatever you were looking for isn’t at this address — a stale link, a typo, or something I have since moved. You can go back to the homepage, or take the consolation prize below.` (181 chars)
  * *Limit:* **140 – 220 chars** (max-width `46ch`)
  * *Your revised copy:* `Whatever you were looking for isn’t at this address — a stale link, a typo, or something I have since moved. You can go back to the homepage, or take the consolation prize below.`
* **Button Label:** `Roll for a fact` (15 chars)
  * *Limit:* **12 – 20 chars**
  * *Your revised copy:* `Roll for a fact`
* **Initial Status / Prompt:** `Twenty facts about me, one die. Roll it.` (40 chars)
  * *Limit:* **25 – 55 chars**
  * *Your revised copy:* `Twenty facts about me, one die. Roll it.`

---

### The 20 D20 Dice Facts
> ⚠️ **STRICT CHARACTER LIMIT: MAXIMUM 130 CHARACTERS EACH (including spaces)**
>
> *Codebase note from 404.html:*
> *"The fact panel reserves its height in advance so the page never jumps when a fact swaps, and a longer line will overflow that reserved box on a narrow phone."*

| # | Face / Theme | Current Placeholder Text | Current Chars | Limit | Your Revised Fact (Max 130 chars) |
| :-: | :--- | :--- | :-: | :-: | :--- |
| **01** | Origins | `Replace me: where you grew up, and where you live now.` | 53 | **≤ 130** | ` ` |
| **02** | First Design | `Replace me: the first thing you ever designed.` | 46 | **≤ 130** | ` ` |
| **03** | Past Life | `Replace me: a job you had before design.` | 39 | **≤ 130** | ` ` |
| **04** | Tabletop Game | `Replace me: the tabletop game you will always say yes to.` | 56 | **≤ 130** | ` ` |
| **05** | Languages | `Replace me: a language you speak, and how you picked it up.` | 57 | **≤ 130** | ` ` |
| **06** | Design Philosophy | `Replace me: the design rule you break on purpose.` | 48 | **≤ 130** | ` ` |
| **07** | Collection | `Replace me: something you collect.` | 34 | **≤ 130** | ` ` |
| **08** | Tooling / Workflow | `Replace me: your most-used keyboard shortcut.` | 44 | **≤ 130** | ` ` |
| **09** | Unexpected Hobby | `Replace me: a hobby nobody expects from a product designer.` | 58 | **≤ 130** | ` ` |
| **10** | Unshipped Pride | `Replace me: the project you are proudest of that never shipped.` | 61 | **≤ 130** | ` ` |
| **11** | Work Soundtrack | `Replace me: what is playing while you work.` | 42 | **≤ 130** | ` ` |
| **12** | Software Love | `Replace me: a piece of software you genuinely love.` | 50 | **≤ 130** | ` ` |
| **13** | Design Critique | `Replace me: the worst design advice you were ever given.` | 54 | **≤ 130** | ` ` |
| **14** | Active Learning | `Replace me: something you are learning right now.` | 48 | **≤ 130** | ` ` |
| **15** | Coffee Order | `Replace me: your order at the coffee place.` | 42 | **≤ 130** | ` ` |
| **16** | Remote Destination | `Replace me: a place you want to work from for a month.` | 52 | **≤ 130** | ` ` |
| **17** | Book Recommendation | `Replace me: the book you hand to new designers.` | 46 | **≤ 130** | ` ` |
| **18** | Simple Pleasure | `Replace me: a small thing that makes you irrationally happy.` | 58 | **≤ 130** | ` ` |
| **19** | Childhood Dream | `Replace me: what you wanted to be at ten years old.` | 49 | **≤ 130** | ` ` |
| **20** | Natural 20 (Best Fact) | `Replace me: the natural 20 — save your best fact for this one.` | 62 | **≤ 130** | ` ` |

---

## Quick Reference: Character Limits Summary Table

| Page / Component | Key Field | Current Chars | Safe Recommended Range | Hard Failure Point |
| :--- | :--- | :--- | :--- | :--- |
| **Home (`index.html`)** | Hero Lead (`.ia__lead`) | 72 | 50 – 85 chars | > 95 chars (breaks radial backdrop) |
| **Home (`index.html`)** | Hero Subhead (`.ia__name`) | 41 | 30 – 55 chars | > 65 chars (wraps into 3 lines) |
| **Home (`index.html`)** | Drifting Idea Labels | 14 – 34 | 15 – 35 chars | > 38 chars (`nowrap` causes canvas collision) |
| **About (`about-section.html`)** | Screen Column Titles | 23 – 30 | 18 – 35 chars | > 40 chars (wraps to 3 lines on laptop) |
| **About (`about-section.html`)** | Paragraphs (Left & Right) | 167 – 235 | 140 – 220 chars | > 240 chars (overflows 100dvh snap view on laptop) |
| **About (`about-section.html`)** | Card Quotes | 94 – 112 | 70 – 120 chars | > 130 chars (pushes card off screen bottom) |
| **About (`about-section.html`)** | Year Range (`.am__year`) | 10 – 11 | 9 – 12 chars | > 15 chars |
| **Case Studies (`kynso.html`)** | Hook Line (H1) | 67 – 76 | 60 – 95 chars | > 105 chars |
| **Case Studies (`kynso.html`)** | Hook Subtitle | 130 – 157 | 120 – 180 chars | > 200 chars (exceeds `56ch`) |
| **Case Studies (`kynso.html`)** | Gantt Bar Names | 4 – 16 | 6 – 16 chars | > 18 chars (overflows grid bar pill) |
| **Case Studies (`kynso.html`)** | Gantt Art Notes | 73 – 145 | 80 – 155 chars | > 170 chars (overflows art column height) |
| **Case Studies (`kynso.html`)** | Impact Metrics Numbers | 1 – 4 | 2 – 6 chars | > 8 chars |
| **Case Studies (`kynso.html`)** | Impact Metrics Labels | 16 – 24 | 12 – 28 chars | > 32 chars |
| **404 (`404.html`)** | 20 D20 Dice Facts | 34 – 62 | **40 – 125 chars** | **> 130 chars (hard phone overflow)** |
