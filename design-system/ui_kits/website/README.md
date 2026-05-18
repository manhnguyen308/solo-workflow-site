# SoloOpsGuide Website UI Kit

## Overview
High-fidelity interactive prototype of the SoloOpsGuide editorial website, built directly from the Hugo production codebase (`static/css/main.css`, `layouts/`, and `content/`). Use this as an implementation reference for redesigns, Claude Code handoffs, or design reviews.

---

## Screens

| Tab | File source | Status |
|---|---|---|
| Homepage | `layouts/index.html` | ✅ Represented |
| Hub page | `layouts/_default/list.html` | ✅ Improved — reading paths, priority/supporting sections, journey-note, stat, featured link |
| Article page | `layouts/_default/single.html` | ✅ Improved — utility panel (page-type-block), related panel, feature image area, **Tags row in aside** linking to `/tags/<slug>/` pages |
| Template page | `layouts/_default/single.html` + template branch | ✅ Represented — article-actions toolbar (copy/print), utility panel |
| **Comparison page** | `layouts/_default/single.html` + `content/workflow-comparisons/*.md` | ✅ New — three operating models, criteria matrix table, best-for/not-best-for, decision shortcut, next-step-by-outcome |
| **Blueprint page** | `layouts/_default/single.html` + `content/software-stack-blueprints/*.md` | ✅ New — non-negotiable principles, stage-based tiers, category decision table, setup sequence, maintenance caveats |
| **Trust / About** | `layouts/_default/list.html` no-pages branch + `content/{about,editorial-policy,content-policy,contact,disclaimer,terms}/_index.md` | ✅ **New** — prose-only layout, 2-card aside, related-pages footer. Variant toggle shows Editorial Policy / About / Contact shapes |
| Glossary hub | `layouts/_default/list.html` + `content/glossary/_index.md` | ✅ New — term grid, journey-note, stat, featured link |
| Term page | `layouts/_default/single.html` + `content/glossary/*.md` | ✅ New — term definition, utility panel, related panel |
| FAQ hub | `layouts/_default/list.html` + `content/faq/_index.md` | ✅ New — hub intro, FAQ list items with Q badge |
| FAQ article | `layouts/_default/single.html` + `content/faq/*.md` | ✅ New — answer layout, utility panel, related panel |
| Search page | `layouts/_default/search.html` | ✅ New — search input, type filter tabs, result items, empty state |
| **404 page** | `layouts/404.html` | ✅ **New** — calm editorial recovery layout: search field + 4 cluster recovery cards + narrower FAQ/Glossary recovery |
| **Tag listing** | `layouts/_default/taxonomy.html` + `terms.html` | ✅ **New** — cross-cluster tag index (`/tags/client-approval/`): breadcrumb + intro + count, listing grouped by page type, adjacent tags, hub rail, and a documented sparse-tag state |
| **Tags master index** | `layouts/_default/terms.html` (root `/tags/`) | ✅ **New** — alphabetical topic index with first-letter groups, page counts, short hints, hub rail (“start with a hub instead”), and documented safeguards against thin/keyword-stuffed tags |

---

## Components

### Already in kit before fidelity pass
- `Header` — sticky header, brand, nav, search form, CTA
- `Footer` — dark 4-col grid, copyright, bottom links
- `PageCard` — content card (all page types, themed by section)
- `NavTabs` — UI kit screen switcher (top bar)
- `Pill`, `Eyebrow`, `Btn` — shared UI atoms
- `ReadingPathsView` — track/list toggle (reading-paths.html, separate file)

### Added in fidelity pass
- `ReadingPathSimple` — inline reading-path shortcode render (matches `layouts/shortcodes/reading-path.html`)
- `UtilityPanel` — page-type-block panel (matches `layouts/partials/page-type-block.html`); variants: workflow, comparison, template, glossary, faq
- `CompUtilityPanel` — same pattern, with **comparison** ("Decision criteria") and **blueprint** ("Implementation notes") variants
- `RelatedPanel` — "Continue the system" related reading block (matches `layouts/partials/related.html`)
- `GMiniCard` / `CMiniCard` — compact cards used inside related panels
- `TermCard` — glossary term card (2-col term grid)
- `FaqListItem` — FAQ question row with Q badge
- `SearchResultItem` — search result row with type-colored media thumbnail
- `GJourneyNote` — journey-note panel (matches real `.journey-note` CSS)
- `GStat` — page count stat block (matches `.section-stat` CSS)
- `GFeaturedLink` — priority/recommended page link block (matches `.section-featured-link`)
- `GAsideCard` / `CAsideCard` — article aside card (use-for, section-hub, best-next, page-type variants)

### Comparison page components (new)
- `ModelCard` — single option card (Best for / Strengths / Tradeoffs / Failure mode). Used in groups of 2–3 for "Model 1 / Model 2 / Model 3" pattern.
- `ProseTable` — comparison/criteria table inside prose. Wraps in a horizontally-scrollable container so mobile layout never overflows.
- `BestForBlock` — two-column "Best for / Not best for" block. Calmer than a check/cross icon list; reads as editorial pros/cons.
- `DecisionShortcut` — left-accented panel containing "Practical shortcut" bullets. Used for one-line recommendations per option.
- `NextStepLinkBlock` — "Next step by outcome" linked list. Each row pairs a condition with a recommended destination page.

### Blueprint page components (new)
- `PrincipleList` — numbered 2-col grid of non-negotiable rules. Used for "Lean stack principles."
- `BlueprintTier` — single tier card (Starter / Stable / Scaling). Includes tag, lead, must-have list, and "Avoid for now" footer note.
- `SetupSequence` — numbered implementation steps with optional inline page links. Each row is a single sentence + linked next page.
- `CompUtilityPanel type="blueprint"` — utility panel variant with "Implementation notes" kicker and pressure-test questions.

### Trust / About page components (new)
- `TrustPage` — full trust-page screen with variant toggle (Editorial Policy / About / Contact); each variant has its own copy, aside, and related-pages list.
- `TrustAside` — slim two-card aside (Use this page for / Site role) — matches the no-pages branch's reduced aside, distinct from the 4-card article aside.
- `TCallout` — left-accented inline callout for important policy notes (used sparingly, max once per page).
- `TrustRelated` — plain "Related pages" footer list — links to adjacent trust/policy pages without the full card grid that article pages get.
- `TH2`, `TP_para`, `TUL`, `TOL` — local prose primitives that match the article prose tokens but live inside the trust-page file for isolation.

---

## Design tokens (from `static/css/main.css`)

| Token | Value | Notes |
|---|---|---|
| Brand | `#0f8b8d` / `#0b6d71` | Teal — primary CTA, pills |
| Accent | `#b8823f` / `#926227` | Amber — eyebrows, finish states |
| Ink | `#0f172a` / `#173042` | Headings (UI kit uses Tailwind slate; real CSS uses navy) |
| Muted | `#64748b` | Body copy, metadata |
| Border | `rgba(226,232,240,1)` | Card and panel borders |
| Radius | 14–24px | Cards and panels use 14–16px in UI layer |
| Shadow-sm | `0 1px 2px rgba(15,23,42,0.04)` | Default card shadow |

---

## Typography

| Role | Real site | UI kit |
|---|---|---|
| UI (headings, labels, nav) | `"Segoe UI","Avenir Next","Helvetica Neue",Arial` (system) | `"Source Sans 3"` (Google Font) |
| Prose (article body) | `Georgia,"Iowan Old Style","Palatino Linotype"` (serif) | `"Lora"` (Google Font) |

> **Note:** Real site uses system fonts only — no webfont loading. The UI kit substitutes Source Sans 3 + Lora for higher visual quality in prototype presentation. This is intentional and should not affect Hugo implementation — implement with the real CSS system font stack.

---

## Header — real nav structure

The production header (`layouts/partials/header.html`) **excludes** "Workflows" from the nav list and uses it as the CTA button instead:

- **Nav links:** Blueprints · Comparisons · Templates · Glossary · FAQ
- **CTA button:** "Explore workflows" → `/client-workflow-systems/`
- **Search:** `<form>` with `action="/search/"`, `name="q"` input

### Desktop (≥ 821px)
Brand on the left, inline nav, CTA on the right, full-width search below. Active page shown with teal-tinted pill background + `aria-current="page"`.

### Mobile closed state (≤ 820px)
Brand + hamburger button (`<button data-nav-toggle aria-expanded="false" aria-controls="site-nav">`). Search bar stays visible. `.header-actions` is `display: none`. Tagline under the wordmark is hidden so the row stays compact.

### Mobile open state (≤ 820px, `.site-header.nav-open`)
- Toggle becomes an "X", `aria-expanded="true"`, label swaps to "Close menu"
- `.header-actions` drops below the top row, stacked vertically
- Each nav link is a 2.75rem full-width row
- "Explore workflows" CTA becomes a calmer ghost link at the bottom of the stack (separated by a hairline) so it does not dominate the menu
- <kbd>Esc</kbd> closes; resizing past 820px also closes

### Class / state pattern (matches production)

| Selector / attribute | Role |
|---|---|
| `.site-header` | Root header element |
| `.site-header.nav-open` | Open-state modifier |
| `[data-nav-toggle]` | The toggle button |
| `#site-nav` / `.header-actions` | The nav + CTA group the toggle expands/collapses |
| `.header-cta` | "Explore workflows" CTA |
| `.brand-tagline` | Hidden at ≤ 820px |

### Accessibility notes

- Toggle button: `aria-expanded` mirrors state, `aria-controls="site-nav"`, `aria-label` swaps between "Open menu" / "Close menu", visible focus ring
- Primary nav: `aria-label="Primary"`
- Active link: `aria-current="page"`
- Search input: `aria-label="Search"`
- Keyboard: <kbd>Tab</kbd> reaches the toggle, <kbd>Enter</kbd>/<kbd>Space</kbd> toggles, <kbd>Esc</kbd> closes

### Production files this maps to

- `layouts/partials/header.html` — markup (`.site-header`, `[data-nav-toggle]`, `.header-actions`)
- `static/css/main.css` — `.site-header`, `.site-header.nav-open`, `.header-actions` rules, the 820px mobile breakpoint
- `layouts/partials/site-script.html` — inline toggle script bound to `[data-nav-toggle]`

### Visual preview

- `preview/components-nav.html` — desktop header
- `preview/components-nav-mobile.html` — mobile header in **closed** and **open** states side-by-side at 375×. Static page (both frames pre-rendered) so the open/closed behavior is documented without resizing.

> **Implementation note.** Production wires `[data-nav-toggle]` with a small vanilla-JS handler in `layouts/partials/site-script.html` that toggles the `nav-open` class and flips `aria-expanded`. The UI kit (`ui_kits/website/index.html`, `Header.jsx`) uses React state instead. Markup, classes, and ARIA are identical.

---

## Hub page — real structure

The hub page (`layouts/_default/list.html`) has:
1. **Section hero grid** — left: eyebrow "Section hub" + h1 + prose content including `{{< reading-path >}}` shortcodes; right: "Start here" journey-note + page count stat + priority/recommended page link
2. **Priority pages section** — pages with `hub_priority > 0` front matter, 2-col card grid
3. **Supporting pages section** — remaining pages, 2-col card grid

---

## Article page — real structure

The article page (`layouts/_default/single.html`) has:
1. **Article header grid** — left: eyebrow (section) + h1 + hero-summary + meta-pills + optional feature image; right: aside cards (use-for, section-hub, **tags**, best-next, page-type)
2. **Reading layout** — prose content (max 720px wide), then `page-type-block` partial (utility panel), then `related` partial
3. **Template branch** — `article-actions` toolbar with copy-as-text + print buttons (section = `templates-checklists`)

### Article aside — Tags row

The article aside now includes a **Tags** row between **Section hub** and **Best next move**:

- Renders 2–3 chip-style links to taxonomy pages — e.g. `/tags/client-workflow/`, `/tags/intake/`, `/tags/billing/`
- Chips are navigational topic links (small rounded pill, subtle border, neutral text), **not** CTA buttons. The teal-tint hover state is the only color shift, and only on hover/focus.
- Recommended count: **2–3 tags per article**. More than four turns the row into keyword stuffing and dilutes the topic signal.
- Tags should be **useful topic indexes**, not every keyword the article happens to mention. The test: would a reader who landed on the tag page get a coherent cross-cluster index of related operating questions?
- Each chip links into a real taxonomy URL pattern (`/tags/<slug>/`). No placeholder links.
- The workflow article variant shows `#client-workflow`, `#intake`, `#billing`. The template article variant shows `#onboarding`, `#kickoff`, `#client-approval` — different tags, same shape.

**Production mapping.** The article aside partial should pull tags from front matter (`tags: [...]` in the `.md`) and render them when present. Pages without tags should omit the row entirely — do not render an empty "Tags" header. Cap the rendered set at 3–4 chips and order them by tag size (largest tag first) so the chip that routes to the most pages reads first.

---

## Reading path shortcode

The `{{< reading-path label="..." steps="A|B|C" >}}` shortcode renders as `<article class="reading-path">` with an ordered list of step cards. Steps support `[Title](url)` markdown links. Start/Finish labels are auto-applied to first and last steps.

---

## What was added in this fidelity pass

1. **Header nav fixed** — "Workflows" removed from nav list; CTA changed to "Explore workflows" → `/client-workflow-systems/`
2. **Hub page** — reading paths (shortcode), journey-note, page count stat, featured/priority link, priority pages + supporting pages structure
3. **Article page** — utility panel (page-type-block), "Continue the system" related panel heading
4. **5 new screens (round 1)** — Glossary hub, Term page, FAQ hub, FAQ article, Search page
5. **2 new screens (round 2)** — Comparison page, Blueprint page
6. **New component files**:
   - `glossary-faq-search-pages.jsx` — glossary, FAQ, search + UtilityPanel + RelatedPanel
   - `comparison-blueprint-pages.jsx` — comparison + blueprint screens + ModelCard, BestForBlock, BlueprintTier, PrincipleList, SetupSequence, NextStepLinkBlock, DecisionShortcut, ProseTable

---

## Comparison page pattern

**Purpose:** Help a reader resolve **one bounded operating decision** — typically where active client truth should live (CRM-first vs PM-first vs Hybrid), or which of two tool categories should own a specific workflow surface.

**Page structure:**
1. **Eyebrow:** "Workflow Comparisons"
2. **H1 + lead paragraph** — explicitly framed as an operating-model decision, not a software roundup
3. **Aside cards** — Use this page for / Section hub / Best next move / Page type
4. **Decision context** — the three (or two) models being compared, named explicitly
5. **Model cards** — `ModelCard` × N with Best for / Strengths / Tradeoffs / Failure mode
6. **Criteria matrix** — `ProseTable` comparing models against operational criteria (pipeline clarity, admin overhead, setup complexity, etc.)
7. **Practical shortcut** — `DecisionShortcut` with one-line recommendations
8. **Best for / Not best for** — `BestForBlock`
9. **Next step by outcome** — `NextStepLinkBlock`
10. **Utility panel** — `CompUtilityPanel type="comparison"` (Decision criteria / Avoid)
11. **Related panel** — adjacent comparisons, the linked blueprint, related glossary terms

**Voice rules:**
- Comparison tables must be operationally meaningful, not feature checklists
- Avoid star ratings, "winners," or "best of" framing
- Every comparison should end with a recommended next page per outcome

---

## Blueprint page pattern

**Purpose:** Describe a **complete operating setup** for a specific business stage — the smallest reliable stack shape that works, with explicit upgrade triggers and overbuying warnings.

**Page structure:**
1. **Eyebrow:** "Software Stack Blueprints"
2. **H1 + lead paragraph** — frames the standard ("lean enough to maintain alone, not most powerful")
3. **Aside cards** — same four-card pattern as articles
4. **Non-negotiable principles** — `PrincipleList` (2-col numbered grid)
5. **What this blueprint assumes** — prose list
6. **Stage-based tiers** — `BlueprintTier` × 3 (Starter / Stable / Scaling) with must-haves + "Avoid for now"
7. **Category decision table** — `ProseTable` with Category / Starter default / Upgrade trigger / Overbuying warning
8. **When this fits — and when it does not** — `BestForBlock`
9. **Setup sequence** — `SetupSequence` numbered steps with inline next-page links
10. **Maintenance caveats** — short prose list
11. **Next step by outcome** — `NextStepLinkBlock`
12. **Utility panel** — `CompUtilityPanel type="blueprint"` (Implementation notes / Pressure-test by)
13. **Related panel** — adjacent blueprints, the upstream comparison, supporting templates

**Voice rules:**
- Frame upgrades around bottlenecks, not feature wishlists
- Blueprints must include explicit "do not buy yet" rules to avoid sounding like affiliate roundups
- Setup sequences must be ordered — each step assumes the prior step is settled

---

## 404 page pattern

**Purpose:** Recover a reader who hit a broken or moved URL. The site is editorial and gets re-organised periodically (renamed slugs, merged pages, retired drafts), so the 404 page is a real recovery surface — not a decorative dead end.

**Production page this maps to:** `layouts/404.html`

**Voice rules:**
- Calm and editorial. No "Oops", no playful illustrations, no exclamation marks.
- Acknowledge that the page may have been **renamed during an editorial revision** — that is the most common real reason a SoloOpsGuide URL 404s.
- Plain-English. "Page not found" — not "We can't find what you're looking for".
- Do not apologise excessively. The reader's time matters more than the tone.

**Page structure:**
1. **Eyebrow:** "Error 404 · Page not found"
2. **H1:** "Page not found"
3. **Short explanation** (1–2 sentences) — what likely happened, in plain English
4. **Search field** — primary recovery path. Uses the same `/search/` form pattern as the header search; full-width with a Search button
5. **Small note** under the search — "If you arrived from a saved link, the page may have been renamed during an editorial revision"
6. **Cluster recovery grid** (`Re-enter the site`) — 4 link cards to the main cluster hubs:
   - Client Workflow Systems → `/client-workflow-systems/`
   - Software Stack Blueprints → `/software-stack-blueprints/`
   - Workflow Comparisons → `/workflow-comparisons/`
   - Templates & Checklists → `/templates-checklists/`
7. **Narrower recovery row** — slim list items for Glossary + FAQ (smaller because they're follow-on, not first-choice)
8. **Homepage fallback link** — last-resort inline link back to `/`

**Recovery-link rules:**
- All four cluster cards are linked. No fake "popular pages" list, no fabricated article links — only hubs the site actually owns.
- The teal CTA pattern (filled pill button) is **not** used here. Recovery cards are calmer link cards with a single arrow link inside; this keeps the page from feeling like a marketing landing.
- Glossary + FAQ are demoted to a narrower row because they're for narrow blockers, not "I don't know where I am" recovery.

**When to use search vs. guide links:**
- **Search first** when the reader was looking up something specific (a tool name, a stage name, a term). The 404 search box reuses the same query format as the header, so they don't have to retype.
- **Cluster guides first** when the reader is at the start of a workflow problem and the broken URL was probably one of several pages they could have landed on. The cluster card answers "where do I even start?" without requiring them to know exactly what to type.

**Accessibility:**
- Search input has a visually-hidden `<label htmlFor="nf-search">`
- Each recovery card is a single `<a>` with full keyboard focus surface (avoids the "card-with-link-inside" anti-pattern)
- Hover/focus states reuse the kit's standard 160ms transition + border darken + lift

**Purpose:** Represent the **prose-only branch** of `list.html` used by site-information pages — pages that explain how the site works rather than teach a workflow. These pages exist for transparency, scope, methodology, and corrections routing.

**Production pages this maps to:**
- `content/about/_index.md` → About
- `content/editorial-policy/_index.md` → Editorial Policy
- `content/content-policy/_index.md` → Content Policy
- `content/contact/_index.md` → Contact
- `content/disclaimer/_index.md` → Disclaimer
- `content/terms/_index.md` → Terms

**When to use this layout instead of the article layout:**

| If the page... | Use |
|---|---|
| Teaches a workflow, stack, comparison, or asset | **Article layout** (`single.html`) — full aside, utility panel, related grid |
| Explains how the site works, who it serves, or what its boundaries are | **Trust layout** (`list.html` no-pages branch) — slim aside, prose body, plain related list |
| Is legal, policy, or contact info | **Trust layout** |
| Documents methodology or editorial standards | **Trust layout** |

The trust layout deliberately omits the utility panel (`page-type-block.html`) and the card-based related panel (`related.html`). Those exist for operational guidance, not for trust pages.

**Page structure:**
1. **Eyebrow:** "Site page"
2. **H1 + summary** — concise, plain-English framing of what the page is about
3. **2-card aside** — Use this page for / Site role (production uses 2 cards here, not 4)
4. **Reading layout** — prose only, no utility panel, no card grid
5. **Lightweight callout** — `TCallout` for important boundary statements (e.g. "not a personalized consulting channel"). Used sparingly.
6. **Related pages** — plain `<ul>` list with `lead: title` format, not a card grid

**E-E-A-T / trust notes:**
- Trust pages support E-E-A-T by being **specific, bounded, and transparent about methodology** — not by claiming credentials the site cannot defend.
- The kit deliberately avoids fake team bios, fake testimonials, fake reviewer counts, and exaggerated authority claims.
- Real institutional signals the production site uses: dated `_index.md` files (so "Last updated" can be surfaced), explicit corrections handling, and clear monetization disclosure.
- Trust pages should route readers back to the site's editorial principles, not to marketing surfaces.

**Voice rules:**
- Plain-English; no marketing language
- Disclose limitations explicitly (what the site is not trying to be)
- Avoid hype words: "comprehensive," "expert," "authoritative," "industry-leading"
- If a claim cannot be supported, omit it

---

## Taxonomy / tag listing pattern

**Purpose:** A **cross-cluster index** for one operating question that recurs across multiple page types. Tag pages cut horizontally across the site (a single tag may pull in Workflow, FAQ, Glossary, Template, and Checklist pages); hub pages go vertically deep on one cluster.

**Production pages this maps to:**
- `layouts/_default/taxonomy.html` — single-tag listing (e.g. `/tags/client-approval/`)
- `layouts/_default/terms.html` — index of all tags (`/tags/`)

The kit now covers **both** surfaces. The per-tag screen is the higher-traffic page and shows the editorial routing pattern; the master index sits one level up and acts as the catalogue.

### `/tags/` vs `/tags/<slug>/` — how they differ

| Surface | Production layout | Purpose |
|---|---|---|
| `/tags/` (master index) | `layouts/_default/terms.html` | **Catalogue** of every tag the site uses. Alphabetical, scannable, grouped by first letter, counts only. Not a content surface — a routing surface. |
| `/tags/<slug>/` (per-tag) | `layouts/_default/taxonomy.html` | **Cross-cluster listing** for one tag. Lists the actual pages tagged with that term, grouped by page type, with adjacent tags + hub rail. |

The master index never lists individual pages. The per-tag page never lists every tag on the site. Keeping the two surfaces separate prevents either from becoming a thin, undifferentiated archive.

### How article tag chips, individual tag pages, and the master tag index connect

The three surfaces form one taxonomy chain:

1. **Article aside chips** — 2–3 chips rendered on an article from `tags:` front matter, linking to `/tags/<slug>/`. Routes a reader from a specific page into the cross-cluster index for one operating question.
2. **Per-tag page** — `/tags/<slug>/`. Shows everything filed under that tag, grouped by page type, with adjacent-tag chips and a hub rail. The reader's primary destination when one operating question keeps recurring.
3. **Master tag index** — `/tags/`. The catalogue of every tag the site uses. Linked from the breadcrumb (`Home / Tags / <Tag>`) on each per-tag page, and reachable directly by readers who want to browse the topic surface. Sends readers back to a hub when no tag fits.

The chain is **deliberately one-way at the top.** No site-level navigation entry points into `/tags/` — the master index is reached either from a per-tag breadcrumb or by direct URL. Tags are routing infrastructure, not primary navigation.

### When to use a tag page vs. a hub page

| If the reader's question is... | Send them to |
|---|---|
| "My workflow still feels loose, I don't know where to start" | **Hub** (`/client-workflow-systems/`) — hubs structure a cluster |
| "I keep running into the same operating question across stages" | **Tag** (`/tags/<topic>/`) — tags route across clusters |
| "I need one specific term or one specific question answered" | **Glossary** or **FAQ** page directly |
| "I want to browse everything filed under one category" | **Hub** — tags are not a browse surface; they are a routing index |

Tag pages should never be the first recommended entry point. They are useful **second-level** routing — opened after a reader knows what bounded operating question they are working on.

### Page structure

1. **Breadcrumb** — `Home / Tags / <Tag label>` (real production breadcrumb, not decoration)
2. **Eyebrow:** `Tag · Topic`
3. **H1** — sentence-case, names the operating surface (e.g. "Client approval guides", not the slug)
4. **Intro paragraph** — what the tag covers and, importantly, when *not* to use it
5. **Pill row** — the tag slug + count of pages + clusters spanned
6. **Aside (right column)** — "Why this tag exists" journey-note + page count stat + adjacent-tag chips
7. **Listing grouped by page type** — Workflow → Comparison → Blueprint → Template → Checklist → FAQ → Glossary. Each row carries: type pill, source cluster name, title, summary, updated date, reading time
8. **Hub rail** — four cluster hubs the reader should return to if the tag is not the right entry point
9. **Sparse-tag pattern** — documented inline at the bottom: how a 0-/1-/2-page tag should behave

### Recommended related-topic behavior

- Surface 4–6 **adjacent tags** in the aside as plain chips, each with its page count. Adjacent tags are not "related articles" — they are nearby operating questions.
- Never surface a tag chip with zero pages. If a tag is empty, remove it from the index entirely until a page is filed under it.
- Tags are flat — no nesting, no hierarchy. The cluster hub is where structure lives.

### How to avoid thin / low-value tag pages

The fastest way for a tag page to look like a thin archive dump is to (a) list everything in one undifferentiated grid, (b) repeat the homepage card style, and (c) offer no recovery when the tag is sparse. The kit's countermeasures:

1. **List rows, not card grid.** Tag rows show type pill + summary + date + reading time. A card grid signals "browse mode"; a list with metadata signals "index mode."
2. **Group by page type.** Workflow pages tackle the operating sequence; FAQ pages handle bounded blockers; Glossary clarifies one term. Grouping makes the page legible at a glance and prevents reading as a flat archive.
3. **Always include a hub rail.** If the reader landed here from a stale link or a broader search and the tag does not fit, the hub rail gives them four real next moves — not a dead end.
4. **Document the sparse-tag state.** A 1-page tag still earns its existence by naming the scope honestly and routing to the broader tag or hub. Never render "Nothing here yet." See the **Sparse tag state** section at the bottom of the screen for the rendered pattern.
5. **Minimum content rule.** Production should not publish a tag page with fewer than 1 page or with the only page being draft. The taxonomy template should 404 (or redirect to `/tags/`) for empty tags, not render a thin shell.

### Voice rules

- Plain-English. "Client approval guides" — not "Articles tagged 'client-approval'."
- Acknowledge the bounded scope of the tag in the intro. State what the tag covers and what it does not.
- The intro should say *when not to use the tag* — typically when the underlying lifecycle still feels loose, in which case the hub is the right entry point.

### Accessibility

- Breadcrumb uses `<nav aria-label="Breadcrumb">` with `aria-current="page"` on the final crumb
- Type pills use a tinted background + colored text, not color alone — type label text is always visible
- Each listing row is a single `<a>` with full keyboard focus surface (same anti-anti-pattern rule as the 404 page)
- Adjacent tag chips are `<a>` elements with hover/focus border-color shift, not raw `<span>`s

### Production files this maps to

| UI kit element | Production file |
|---|---|
| `TaxonomyPage` screen | `layouts/_default/taxonomy.html` |
| `TagsIndexPage` screen | `layouts/_default/terms.html` (root `/tags/`) |
| Listing row + type pill | Reuses the same `--brand` / type-color tokens used by `PageCard` themes |
| Hub rail | Cluster URLs match the production header CTA + section URLs |

### Tags master index — specific rules

**Alphabetical grouping.** Tags are sorted by slug and grouped under their first letter. Empty letters are skipped (no "Q" group if no tag starts with Q). The first-letter heading sits in a sticky 2.5rem token so the alphabet is always anchored as the reader scrolls.

**Tag-count display.** Every tag carries a single count — total pages across all clusters with that tag. The count is shown as a brand-tint pill on the right edge of the row. No per-cluster breakdown is shown on the master index; that detail belongs on the per-tag page.

**Short topic hint.** Each row may carry one short hint (≤ ~64 chars) explaining what the tag covers. This is the production answer to "why is this tag here?" — it is not a tagline or a marketing line.

**No content surface.** The master index never lists individual pages. It links out to `/tags/<slug>/`. Readers who want to scan pages should be one click deeper, on a surface designed for it.

**Low-value / thin tag safeguards.**

1. **Tags with fewer than 2 pages are omitted from the master index.** If a one-page tag must exist, the per-tag page is `noindex`'d and explicitly routes to the broader tag.
2. **Tags exist only when they help readers discover related content across more than one cluster.** "Every keyword the article mentions" is not a tag.
3. **Empty tags are removed from front matter entirely** — not rendered with a zero count.
4. **The master index displays the hub rail twice** (right column + below the listing) to keep "start with a hub instead" available as a recovery move when the tag list is not the right surface.
5. **Tags are not part of the primary nav.** They sit at `/tags/` and are reached from per-tag breadcrumbs or direct URLs only.

### Remaining taxonomy / fidelity gaps after this addition

- **`/tags/` index page** — ✅ *Added.* Maps to `layouts/_default/terms.html`. Alphabetical first-letter groups, page counts, short topic hints, hub rail, and inline safeguards against thin tags.
- **Category-style taxonomy** — production currently only uses `tags` as a taxonomy. If a second taxonomy (e.g. `clusters`, `audiences`) is added later, the same pattern applies, but the eyebrow and breadcrumb labels would need to differ to signal taxonomy type.
- **Tag-on-article display** — ✅ *Added.* The article aside now renders 2–3 tag chips linking back to `/tags/<slug>/`. Production maps to `tags:` front matter; the partial should omit the row when no tags are set.
- **RSS per tag** — production renders an RSS feed per tag (`/tags/<slug>/index.xml`). No design surface needed; mention only for handoff completeness.

---

## What exists only in production (not yet in UI kit)

| Pattern | Production location | Notes |
|---|---|---|
| `back-to-top` button | `site-script.html` | JS-driven visibility |
| Analytics / tracking | `site-script.html` | `data-track` attributes on all links |
| Print styles | `main.css` | Hides header, aside, nav, related panel |
| Feature images | `layouts/partials/feature-image.html` | Real WebP images in `/images/features/` |
| RSS / sitemap output | `layouts/_default/{rss,sitemap}.xml` | Hugo template-only |
| Pagination on long hubs | `layouts/partials/pagination.html` | Not exercised in kit |

---

## Intentionally out of scope

- Dark mode (site has none)
- Animation or page transitions
- CMS/editor integration
- Full content rendering (Hugo-only, not reproducible in static HTML)

---

## Files

| File | Purpose |
|---|---|
| `index.html` | Main UI kit prototype — all screens, nav, header, footer |
| `reading-paths.html` | Reading path component explorer (track/list toggle) |
| `glossary-faq-search-pages.jsx` | Glossary, FAQ, and Search screen components + UtilityPanel + RelatedPanel |
| `comparison-blueprint-pages.jsx` | Comparison + Blueprint screens + ModelCard, BestForBlock, BlueprintTier, PrincipleList, SetupSequence, NextStepLinkBlock, DecisionShortcut, ProseTable |
| `trust-page.jsx` | Trust/About/Contact prose-only screen + variant toggle + TrustAside, TCallout, TrustRelated |
| `not-found-page.jsx` | 404 recovery screen — search + 4 cluster cards + narrow recovery links (maps to `layouts/404.html`) |
| `taxonomy-page.jsx` | Tag listing screen — single-tag cross-cluster index + adjacent tag chips + hub rail + sparse-tag state (maps to `layouts/_default/taxonomy.html`) |
| `tags-index-page.jsx` | Tags master index screen — alphabetical first-letter groups, page counts, hub rail, thin-tag safeguards (maps to `layouts/_default/terms.html` root) |
| `tweaks-panel.jsx` | Tweaks panel (used by reading-paths.html) |
| `Header.jsx`, `Footer.jsx`, `PageCard.jsx` | Standalone component exports (legacy) |
