# SoloOpsGuide Design System

## Overview

**SoloOpsGuide** (`soloopsguide.com`) is a workflow-first editorial website for freelancers, consultants, and solo operators who need clearer client operations. The site is organized around a practical editorial model: fix workflow problems first, then choose stack, then use templates. It is not a SaaS product, dashboard, or coaching brand.

**Tagline:** "Workflow-first guidance for solo operators"  
**Mission:** Help solo operators build repeatable client operations — from inquiry to final payment — with clearer workflows, calmer stacks, and fewer handoff problems.

**Source repo:** `github.com/manhnguyen308/solo-workflow-site` (private)  
**Stack:** Hugo Extended 0.160.1 · Static CSS (no preprocessor, no Tailwind in prod) · Cloudflare Pages  
**Design prototype source:** `designs/` folder (React + Tailwind + shadcn/ui — used for design explorations only, not served)

---

## Products / Surfaces

There is **one product surface**: the editorial website. It has the following content clusters:

| Cluster | URL pattern | Purpose |
|---|---|---|
| Client Workflow Systems | `/workflows/:slug/` | Primary cluster. Full-lifecycle workflow guides |
| Software Stack Blueprints | `/guides/:slug/` | Stack models after workflow is clear |
| Workflow Comparisons | `/comparisons/:slug/` | Bounded tool/system decisions |
| Templates & Checklists | `/templates/:slug/` | Execution assets used inside live processes |
| Glossary | `/glossary/:slug/` | Term clarifiers, narrow and fast |
| FAQ | `/faq/:slug/` | Narrow blockers, quick routing back to guides |
| Homepage | `/` | Guided entry; routes into workflow cluster first |

---

## Content Structure

- `layouts/index.html` — Homepage (Hugo template)
- `layouts/_default/single.html` — Article/guide page layout
- `layouts/_default/list.html` — Hub/category listing pages
- `layouts/partials/header.html` — Sticky nav with inline search
- `layouts/partials/footer.html` — Dark footer, 4-col grid
- `layouts/partials/page-card.html` — Reusable card component for all content types
- `static/css/main.css` — All production CSS (~56KB), no build step
- `designs/src/` — React + Tailwind design explorations (not in prod)

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Plain-English, direct, calm, practical.** No motivational coaching. No hype. No "you've got this."
- Sounds like an experienced practitioner writing a clear operating manual for someone who already knows what work is.
- **Workflow-first framing always.** Problems are framed as operational gaps, not mindset issues.
- **Low affect.** No exclamation points in body copy. No rhetorical questions as section headers.
- The site does not use "I" or "we" in most copy — it addresses "you" (the solo operator) directly and talks about "the workflow" or "your system" as third-party objects to be examined.

### Casing & Labels
- Section names use Title Case: "Client Workflow Systems", "Software Stack Blueprints"
- Page types use Title Case labels: "Workflow", "Blueprint", "Comparison", "Asset", "Glossary", "FAQ"
- Eyebrow/kicker labels use ALL CAPS with letter-spacing: "WORKFLOW-FIRST GUIDANCE", "START HERE"
- Body headings use Sentence case
- CTA button copy is sentence-case and action-oriented: "Start with the lifecycle guide →", "Browse workflow systems", "Open blueprints"

### Copy Examples (from source)
- Hero: *"SoloOpsGuide helps freelancers and solo operators fix messy client operations from inquiry to final payment."*
- Chooser card: *"My client process feels loose or messy → Start with the lifecycle workflow"*
- Footer tagline: *"Workflow-first editorial guidance for freelancers, consultants, and solo operators who want clearer client operations, calmer systems, and more grounded decisions."*
- Footer mission: *"Built as an independent editorial resource for solo operators who value clarity, boundaries, and useful judgment over complexity."*

### Emoji & Special Characters
- **No emoji in body copy.** Icons in the codebase use Unicode glyphs (✓ `&#10003;`, ◎ `&#9678;`, ≡ `&#8801;`, ✦ `&#10022;`) — not emoji, not SVG illustrations.
- Arrow `→` (`&rarr;`) used consistently as inline link suffix.
- Bullet `•` used as separator in meta lines.

### Content Principles
- Every page has a single clear role in the hierarchy (anchor workflow → blueprint → comparison → template/FAQ)
- Pages name their trigger moment, completion standard, and upstream page
- No fake testimonials, no fake author claims, no padded statistics
- Internal linking is intentional: one upstream hub, one upstream cornerstone, lateral related, one downstream next step

---

## VISUAL FOUNDATIONS

### Color System
The palette is a cool blue-teal primary with warm amber accent on a near-white background. It is restrained — 2 brand colors, 1 accent, neutral grays.

**Base tokens (from `static/css/main.css`):**
```
--bg:             #f6f8fb    (page background, very light cool gray)
--bg-soft:        #eef3f6
--surface:        #ffffff    (card surface)
--surface-soft:   #fbfcfd
--surface-tint:   #f2f7f8
--surface-strong: #112634    (dark panel)
--surface-dark:   #0f1c28    (footer background)
--ink:            #173042    (body text)
--ink-soft:       #41576a    (secondary text)
--muted:          #64788a    (tertiary/metadata text)
--line:           rgba(23,48,66,0.10)   (default border)
--line-strong:    rgba(23,48,66,0.16)
--brand:          #0f8b8d    (teal — primary brand)
--brand-strong:   #0b6d71    (darker teal — links, CTAs)
--brand-soft:     #e7f6f6    (teal tint background)
--accent:         #b8823f    (amber — eyebrow labels, warm highlights)
--accent-soft:    #fff3e3    (amber tint)
```

**Homepage/design-pass tokens (Tailwind/shadcn layer):**
```
background: #fafbfc / #ffffff
foreground: #0f172a   (near-black, slightly blue)
ink-soft:   #334155
muted:      #475569 / #64748b / #94a3b8
teal-strong: #0d9488 / #0f766e  (slightly more saturated in design pass)
teal-soft:  #ccfbf1
amber:      #d97706 / #b45309
footer-bg:  #0f172a
border:     rgba(226,232,240,1)  (Tailwind slate-200)
```

### Typography

**Chosen direction: Source Sans 3 (UI) + Lora (prose)**

This is a two-family split with a clear rationale for each context:

| Context | Family | Reason |
|---|---|---|
| Headings, nav, buttons, labels, metadata, tables | Source Sans 3 | Editorial but not SaaS. Open, legible at 11–15px metadata sizes, authoritative at display sizes. Designed explicitly for UI + editorial interfaces. |
| Article prose, checklist body, blockquotes | Lora | Screen-optimized serif. Holds authority in long-form reading, clearly signals "reading mode" vs. "navigating mode." |

**Why Source Sans 3 over the alternatives:**
- **Inter** — Wrong tone. Strongly associated with SaaS dashboards and dev tools; makes the site feel like a product, not a guide.
- **DM Sans** — Too rounded/friendly. Good font, wrong register for a credibility-focused workflow manual.
- **IBM Plex Sans** — Structured but cold. Less comfortable at prose body sizes.
- **Public Sans** — Government-utilitarian; no warmth or editorial character.
- **Source Sans 3** — Open, reliable, wide weight range, excellent small-size legibility, genuinely editorial without feeling like a tech product.

**Font stacks:**
```css
--font-ui:    "Source Sans 3", "Helvetica Neue", Arial, sans-serif;
--font-body:  "Lora", Georgia, "Times New Roman", serif;
--font-mono:  "SFMono-Regular", Consolas, "Liberation Mono", monospace;
```

**Production weights to load:**
- Source Sans 3: `400, 500, 600, 700` (available as variable font — single request)
- Lora: `400, 400i, 600` (covers body, blockquotes, bold passages)

**Google Fonts import:**
```
https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap
```

**Performance note:** Both are available as variable fonts (~28–35KB gzipped combined). For Hugo production, self-host via `google-webfonts-helper` to avoid cross-origin latency and satisfy GDPR. Preload the Source Sans 3 woff2 in `<head>` as it is render-blocking for above-fold text.

**Scale (unchanged from production):**
- `h1`: `clamp(2.4rem, 4.5vw, 3.4rem)` · weight 700 · `letter-spacing: -0.03em` · `line-height: 1.08`
- `h2`: `clamp(1.6rem, 3vw, 2.2rem)` · weight 600 · `letter-spacing: -0.025em`
- `h3`: `clamp(1.1rem, 2vw, 1.4rem)` · weight 600 · `letter-spacing: -0.02em`
- Body prose: `16.75px` · `line-height: 1.9` · Lora
- Body UI / lead: `16–18px` · `line-height: 1.6–1.72` · Source Sans 3
- Small/meta: `12–14px`
- Eyebrow/kicker: `0.78rem` · weight 700 · `letter-spacing: 0.16em` · uppercase

### Backgrounds & Surfaces
- **Page background:** Very light cool-gray (#fafbfc). Not pure white. Sometimes a subtle radial teal gradient at top-left: `radial-gradient(circle at top left, rgba(15,139,141,0.07), transparent 28%)`.
- **Cards:** White surface (`#ffffff`), `border: 1px solid rgba(226,232,240,1)` (very subtle), `border-radius: 16px`, `box-shadow: 0 1px 2px rgba(15,23,42,0.04)` (nearly invisible).
- **Feature card (hero right rail):** Warm amber gradient background: `linear-gradient(180deg, rgba(255,243,227,0.9), rgba(255,255,255,0.95))`.
- **Support card:** Cool tint: `linear-gradient(180deg, rgba(242,247,248,0.96), rgba(255,255,255,0.95))`.
- **Header:** White, `border-bottom: 1px solid rgba(226,232,240,0.8)`, `backdrop-filter: blur(16px)` on scroll. See [Header behavior](#header-behavior) for the mobile open/closed state.
- **Footer:** Dark navy `#0f172a` (or `#132130`), light text, no gradient.
- **CTA section:** `linear-gradient(135deg, #f8fafc 0%, rgba(204,251,241,0.45) 100%)` — very subtle teal-green tint.

### Borders & Radius
```
--radius-xl: 28px  (large panels, chooser sections)
--radius-lg: 24px  (hero panels, large cards)
--radius-md: 18px  (medium components, tables)
--radius-sm: 14px  (inputs, small cards, buttons)
Brand icon: 16px (in design pass), 18px (in CSS)
Pills/badges: 999px (fully rounded)
```

### Shadows
```
--shadow-sm: 0 14px 34px rgba(17,38,52,0.07)
--shadow-md: 0 24px 60px rgba(17,38,52,0.09)
Cards (design pass): 0 1px 2px rgba(15,23,42,0.04)  (barely perceptible)
Hover: 0 10px 24px rgba(15,23,42,0.08)
Button primary: 0 14px 28px rgba(15,139,141,0.16)
```

### Hover & Interaction States
- **Cards:** `transform: translateY(-2px)` on hover. Border-color subtly darkens. Box-shadow grows slightly.
- **Links:** Color shifts from `--brand-strong` to `--brand` (slightly lighter teal). Underline offset `0.18em`.
- **Buttons:** Primary button lifts `translateY(-1px)` on hover. Secondary darkens background.
- **Nav items:** Background tint `rgba(15,139,141,0.09)` on hover/active. No underline.
- **Chooser cards:** Border turns teal `#0f766e`, shadow `0 4px 14px rgba(15,118,110,0.1)`.
- **Transition:** `160ms ease` across color, border-color, background, transform, box-shadow.

### Animations
- **No complex animations.** Only CSS transitions at 160ms ease.
- No page transitions, scroll reveals, or entrance animations.
- The design deliberately avoids motion to maintain editorial credibility.

### Brand Icon (Logo Mark)
An SVG icon: rounded rectangle with three horizontal lines (document/checklist metaphor) and a right-pointing arrow on the third line. Gradient fill: `#0f8b8d → #0b6d71`. White strokes. Corner radius 16px.

### Spacing System
Base unit: `0.25rem` (4px). Layout uses CSS grid with `gap:`.
- Card padding: `1.25rem`–`2.6rem` (scales with viewport via clamp)
- Section padding: `5rem 0` for major homepage sections
- Max content width (`--wrap`): `1180px`
- Article measure (`--measure`): `760px`
- Article body: `720px`

### Color Usage by Context
- **Teal (`#0f8b8d` / `#0d9488`):** Primary brand, CTAs, links, active nav, icon backgrounds, list markers, focus rings, resource card borders-on-hover
- **Amber (`#b8823f` / `#d97706`):** Eyebrow labels only, feature badge (hero), feature icon background
- **Dark navy (`#0f172a` / `#173042`):** Body text, headings, footer background
- **Slate grays:** Secondary text, metadata, muted content, borders

### Page-type Color Themes (card media gradients)
- Workflows: `rgba(15,139,141,0.26) → rgba(8,92,110,0.78)` (teal)
- Blueprints: `rgba(31,112,149,0.22) → rgba(17,38,52,0.78)` (blue-slate)
- Comparisons: `rgba(184,130,63,0.26) → rgba(104,78,54,0.72)` (amber-brown)
- Templates: `rgba(15,139,141,0.18) → rgba(184,130,63,0.42)` (teal-to-amber)
- Glossary/FAQ: `rgba(65,87,106,0.2) → rgba(17,38,52,0.68)` (neutral slate)

---

## ICONOGRAPHY

### Approach
- **No icon font, no icon library, no external CDN.**
- Icons are a mix of: inline SVG (brand mark only), Unicode characters used as content icons, and CSS pseudo-elements (search icon).
- No PNG icons. No emoji.

### Brand Icon (SVG)
- Located at `assets/favicon.svg` and `assets/og-default.svg`
- The logomark SVG is inline in `layouts/partials/header.html` — not a separate file
- It is a 64×64 rounded rectangle with horizontal lines + arrow, teal gradient fill

### Unicode Glyphs Used as Icons
| Glyph | Entity | Usage |
|---|---|---|
| ✓ | `&#10003;` | "Workflow-first" value card icon |
| ◎ | `&#9678;` | "Scenario-based" value card icon |
| ≡ | `&#8801;` | "Designed for implementation" value card icon |
| ✦ | `&#10022;` | Featured resource star badge |
| → | `&rarr;` | Universal inline link suffix |
| • | `&bull;` | Meta line separator |

### Resource Icons (Partial)
The `layouts/partials/resource-icon.html` renders inline SVG icons per resource type (workflows, blueprints, comparisons, templates, glossary, faq). These are custom SVGs drawn in the template — not from a named icon set. Stroke-based, `stroke-width: 1.7`, rounded linecap/join, teal colored.

### Search Icon
Pure CSS pseudo-element: a circle + diagonal line forming a magnifying glass. No SVG, no font glyph.

### Substitution Note
No third-party icon system is used. For design work, **Lucide Icons** (CDN: `https://unpkg.com/lucide@latest`) is the closest match to the stroke style used in resource icons (1.5–1.7px stroke, rounded, minimal).

---

## File Index

```
README.md                     ← This file (design system manifest)
SKILL.md                      ← Agent skill definition
colors_and_type.css           ← CSS design tokens (vars)
assets/
  favicon.svg                 ← Brand icon SVG (64×64 logomark)
  og-default.svg              ← OG image SVG (1200×630)
  soloopsguide-home.svg       ← Homepage feature illustration
fonts/
  (empty — no custom webfonts; system fonts only)
preview/
  colors-brand.html           ← Brand color swatches
  colors-neutral.html         ← Neutral/ink color swatches
  colors-semantic.html        ← Semantic color mapping
  type-display.html           ← Display/heading type specimens
  type-body.html              ← Body/prose type specimens
  type-ui.html                ← UI labels, eyebrows, pills
  spacing-tokens.html         ← Spacing, radius, shadow tokens
  components-buttons.html     ← Button variants
  components-cards.html       ← Page card variants
  components-nav.html         ← Header/nav component (desktop)
  components-nav-mobile.html  ← Mobile header — closed & open states side-by-side (375×)
  components-badges.html      ← Pills, badges, tags
  brand-logo.html             ← Logomark and brand identity
ui_kits/
  website/
    README.md                 ← UI kit notes
    index.html                ← Interactive homepage prototype
    Header.jsx                ← Site header component
    Footer.jsx                ← Site footer component
    PageCard.jsx              ← Content card component
    ArticlePage.jsx           ← Single article layout
    HubPage.jsx               ← Hub/listing page layout
```

---

## Hugo Implementation Notes

When implementing in the Hugo repo:
- All CSS lives in `static/css/main.css` — single file, no build step
- Font families are system fonts — no `@font-face` needed
- Brand mark SVG is inline in `layouts/partials/header.html`
- Feature images live in `static/images/features/<cluster>/<slug>.svg`
- Page-type themes use `.page-card-theme-<section>` BEM modifier classes
- The `--wrap` and `--measure` CSS vars control all layout widths
- Sticky header uses `backdrop-filter: blur(16px)` — ensure proper z-index
- Mobile breakpoints: 1080px (2-col), 820px (1-col/mobile)
- AdSense slots should target `.reading-layout` width and sidebar `.article-aside` area

---

## Header behavior

The site header is consistent across all surfaces. It maps to `layouts/partials/header.html` + the `.site-header` rules in `static/css/main.css`.

### Desktop (≥ 821px)

- Brand mark + wordmark + tagline on the left
- Inline primary nav: **Blueprints · Comparisons · Templates · Glossary · FAQ**
  - "Workflows" is intentionally NOT in the nav list — it is promoted to the CTA
- "Explore workflows" CTA on the right, links to `/client-workflow-systems/`
- Full-width search input below the top row
- Active page is indicated with a teal-tinted background pill and `aria-current="page"` on the link

### Mobile closed state (≤ 820px)

- Brand mark + wordmark on the left (tagline hidden to keep the row compact)
- Compact hamburger toggle on the right (`<button data-nav-toggle aria-expanded="false" aria-controls="site-nav">`)
- Search input remains visible below the top row at all widths
- The nav + CTA group (`.header-actions`) is hidden via `display: none`

### Mobile open state (≤ 820px, `.site-header.nav-open`)

- Toggle button rotates the two bars into an "X"; `aria-expanded="true"`; accessible label becomes "Close menu"
- `.header-actions` drops below the top row and stacks vertically
- Each nav link is a full-width row, 2.75rem tall — comfortable for thumbs
- "Explore workflows" sits at the bottom of the stack, separated by a hairline border, rendered as a calmer ghost link (with `→` suffix) rather than the full teal pill — so the CTA does not dominate the menu
- Escape closes the menu; resizing past the 820px breakpoint also closes it

### Class / state pattern

This mirrors the production pattern exactly. When implementing in Hugo:

| Selector / attribute | Role |
|---|---|
| `.site-header` | Root header element |
| `.site-header.nav-open` | Open-state modifier on the root header |
| `[data-nav-toggle]` | The toggle button (also the JS hook for production's tiny click handler) |
| `#site-nav` / `.header-actions` | The nav + CTA group that the toggle expands/collapses |
| `.header-cta` | The "Explore workflows" CTA — restyled to a ghost link inside the open menu |
| `.brand-tagline` | Hidden via CSS at ≤ 820px so the closed row stays tight |

### Accessibility notes

- `data-nav-toggle` button carries `aria-expanded` (mirrors open/closed state), `aria-controls="site-nav"`, and an `aria-label` that swaps between "Open menu" and "Close menu"
- The toggle has a visible focus ring (`outline: 2px solid #0d9488; outline-offset: 2px`) for keyboard users
- The primary `<nav>` is labelled with `aria-label="Primary"`
- The active link uses `aria-current="page"` so assistive tech can identify the current screen
- The search input has an `aria-label` of "Search"
- Keyboard: <kbd>Tab</kbd> reaches the toggle; <kbd>Enter</kbd>/<kbd>Space</kbd> toggles; <kbd>Esc</kbd> closes the open menu

### Production files this maps to

| UI kit file | Production file |
|---|---|
| `ui_kits/website/Header.jsx`, `Header` component in `ui_kits/website/index.html` | `layouts/partials/header.html` |
| Responsive CSS block at the top of `ui_kits/website/index.html` (and the injected style in `Header.jsx`) | `.site-header`, `.nav-open`, `.header-actions`, `[data-nav-toggle]` rules in `static/css/main.css` |
| `setNavOpen` React state | The small inline toggle script bound to `[data-nav-toggle]` in `site-script.html` |

### Visual preview

- `preview/components-nav.html` — desktop header
- `preview/components-nav-mobile.html` — mobile header in **closed** and **open** states side-by-side (375× device frame, static — both states rendered together so the behavior is visible without resizing)
