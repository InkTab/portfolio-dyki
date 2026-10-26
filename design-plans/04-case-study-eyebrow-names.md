# Name the project in the Supplement and MX2 case study eyebrows

Written against: `cc09bd2` (branch `taya/case-study-improvement`)

## Evidence chain

- Surface: the opening screen (`.cs__hook`) of `supplement.html` and `mx2.html`, specifically the mono eyebrow line above the H1.
- Problem: both pages open with `Case study — 01` (`supplement.html:123`, `mx2.html:124`). The other two case studies name their project there: `kynso.html:125` reads `Case study — Kynso`, `quantistry.html:124` reads `Case study — Quantistry`. A reader moving between pages sees two different case studies both numbered "01", next to two that are not numbered at all.
- Design evidence: a direct contradiction in user-facing content within one surface family (the four case study pages share the same `.cs` skeleton and the same eyebrow element). The `01` is the unedited placeholder from `templates/case-study-section.html:136`. The project names come from the nav "Case studies" menu on every page (`.nav__dropdown-name`: `Kynso`, `Quantistry`, `Supplement`, `MX2`). The two pages that are right use exactly those names. Supplement's own browser tab title is already `Case study — Supplement` (`supplement.html` `<title>`).
- Owner: the HTML copy in each page. `.cs__eyebrow` styling (`css/style.css`, line ~832 and 853: mono, uppercase, `--tag`) is unchanged.
- Scope and affected surfaces: `supplement.html` line 123, `mx2.html` line 124. The copy inventory `docs/WEBSITE_COPY.md` lines 433 and 527 record the same placeholder.
- Uncertainty: none. Length check: `Case study — Supplement` is 23 characters, within the 12–24 limit `docs/WEBSITE_COPY.md` lists for this eyebrow; `Case study — MX2` is 16.

## Design decision

Every case study eyebrow takes the form `Case study — <name>`, where the name is the one the nav menu uses. Supplement and MX2 adopt it, so all four opening screens introduce themselves the same way and no page claims a number.

## Reuse

- Component: `.cs__eyebrow`, no style change.
- Exemplar: `kynso.html:125` `<p class="cs__eyebrow">Case study &mdash; Kynso</p>`; `quantistry.html:124`.
- Name source: `.nav__dropdown-name` entries in the nav menu (e.g. `index.html:90–105`).

No new primitive.

## Changes

1. `supplement.html` (line 123)
   - Change: `<p class="cs__eyebrow">Case study &mdash; 01</p>` → `<p class="cs__eyebrow">Case study &mdash; Supplement</p>`.
   - Preserve: the `&mdash;` entity and spacing exactly as the siblings write it; the element and class.
   - Verify: the hook shows `CASE STUDY — SUPPLEMENT` (CSS uppercases it) above the H1.
2. `mx2.html` (line 124)
   - Change: `<p class="cs__eyebrow">Case study &mdash; 01</p>` → `<p class="cs__eyebrow">Case study &mdash; MX2</p>`.
   - Preserve: as above.
   - Verify: the hook shows `CASE STUDY — MX2`.
3. `docs/WEBSITE_COPY.md` (lines 433 and 527)
   - Change: update the two inventory entries to `` `Case study — Supplement` (23 chars) `` and `` `Case study — MX2` (16 chars) ``, keeping each line's existing limit text.
   - Preserve: everything else in the document.
   - Verify: `grep -n "Case study — 01" docs/WEBSITE_COPY.md` returns nothing.

## Scope

- Inherit: both pages' opening screen at every width (the eyebrow is in flow in both layouts).
- Verify: the eyebrow still sits on one line beside the hook at 375px wide; `Case study — Supplement` is the longest eyebrow in the set.
- Exclude: `templates/case-study-section.html` (its `01` is a template placeholder and should stay one); browser tab titles and meta descriptions (`mx2.html` `<title>` reads `Case study — MX2 AI Marketing`, a separate metadata choice); the "Next case study" eyebrow, which is a different string; the next-link title (see `design-plans/05-supplement-next-link-title.md`).

## Validation

- Product: a reader moving through the four case studies always knows which project they are in from the first line, and no two pages share a label.
- Interface: `kynso.html`, `quantistry.html`, `supplement.html`, `mx2.html` at 1440×900 and 375×812. Compare the four eyebrows side by side; all read `CASE STUDY — <NAME>` in the same mono `--tag` style.
- System: no CSS change; the four eyebrows now share one pattern.
- Repository: `grep -n 'cs__eyebrow">Case study' kynso.html quantistry.html supplement.html mx2.html` → four lines, none ending in `01`.

## Stop conditions

- Stop if the nav menu's project names have changed since `cc09bd2`. Use whatever the menu shows then, or report if Kynso/Quantistry eyebrows no longer match it.
- Stop if the case studies have been given an intended order with numbers (for example, a numbered index on the homepage). Numbering would then be a product decision to apply to all four, not this fix.

## Design documentation

- After acceptance and validation: none in `DESIGN.md`. The copy inventory update is in change 3.
