# SoloOpsGuide Design System — Future-State Redesign

> **This is the final future-state redesign system, not a clone of the current production site.**
> The earlier fidelity-pass UI kit, which mirrored the current site's teal/amber palette and Source Sans 3 + Lora typography, has been **archived** under `archive/obsolete-fidelity-pass/` and should not be used for new work.

## Overview

**SoloOpsGuide** is a workflow-first editorial website for freelancers, consultants, and solo operators. The site reads like an operating manual: workflows first, then stack choice, then templates. It is not a SaaS product, dashboard, course platform, or coaching brand.

This design system documents the **approved future-state direction**, which differs deliberately from what is currently live.

| Pillar | Direction |
|---|---|
| Feel | Operating-manual, editorial, calm |
| Information architecture | Workflow-first; phase-grouped lists, not card walls |
| Voice | Plain English, direct, practical, low-affect |
| Trust posture | Earned trust — dated, scoped, role-named. No fake authors, no fake credentials, no testimonials. |
| Layout discipline | One screen, one decision |
| Reading context | Mobile-first long-form reading |
| Branding | A single accent colour, no gradients, no emoji iconography, no SaaS-style cards |

## Tagline

> Workflow-first guidance for solo operators.

---

## Visual foundations

### Typography

Three families, each used for one reason only.

| Family | Used for | Why |
|---|---|---|
| **Source Serif 4** | Long-form prose: article body, ledes, blockquote, callout body, trust-page prose | Holds authority at body sizes. Reads as editorial rather than interface. Signals "you are reading now." |
| **Public Sans** | UI, navigation, metadata, eyebrows, tables, captions, badges, dating blocks | Open, neutral, government-utilitarian in a useful way — unambiguously *not* a SaaS-product font. No editorial pretension where it isn't earned. |
| **JetBrains Mono** | Copyable / template-like blocks only — code, file paths, copy-as-text artefacts | Monospace signals "this is a thing to copy." Restricted to that context. |

`@import` declared once in `styles.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&family=JetBrains+Mono:wght@400;500&display=swap");
```

CSS variables:

```css
--sans:  "Public Sans", system-ui, -apple-system, "Segoe UI", sans-serif;
--serif: "Source Serif 4", Georgia, "Times New Roman", serif;
--mono:  "JetBrains Mono", ui-monospace, "SF Mono", Consolas, monospace;
```

### Palette

Warm-neutral paper, deep-ink text, one accent.

| Token | Value | Used for |
|---|---|---|
| `--paper` | `#FAF8F2` | Page surface |
| `--paper-2` | `#F2EFE6` | Secondary surface (asides, banded sections, sparse-state) |
| `--paper-3` | `#ECE8DC` | Tertiary surface (subtle bands, table headers) |
| `--ink` | `#2A2620` | Body text, headings |
| `--ink-2` | `#6B645A` | Secondary text, ledes, metadata |
| `--ink-3` | `#94897B` | Tertiary text, faint metadata |
| `--rule` | `#D7D1C4` | Default rule / borders |
| `--rule-2` | `#E5E0D3` | Hairline / subtle internal rules |
| `--accent` | `#2F4E78` | One editorial blue — links, accent labels, focus rings, ad-slot outlines on the reference diagram |
| `--accent-soft` | `#D8E1ED` | Accent tint background |
| `--accent-ink` | `#1B2E47` | Deepened accent for active links |
| `--caution` | `#B07A2E` | Caution-only colour, used sparingly on "not for" callouts |

There is **one accent colour.** No gradients. No second brand colour **in the interface**. The logo mark introduces one additional hue (`brand-teal #5C8499`) that is scoped to the mark only — see *Brand mark & favicon* below.

### Brand mark & favicon

The full logo system is documented in `SoloOpsGuide Logo System.html`. The rules that bind the rest of the system:

- **`brand-teal #5C8499` is a logo-mark-only colour.** It exists solely to separate the upper two blocks inside the mark. It must **not** become a general UI accent, button colour, link colour, callout colour, or content-category colour, and must not appear in body copy, backgrounds, or any editorial surface. The editorial / site accent remains `--accent #2F4E78` — the interface stays single-accent everywhere outside the mark.
- **`favicon-mini`** (`assets/favicon-mini.svg`) is used at very small sizes (≤ 24px) where the full numbered blocks are too dense to read. It keeps the silhouette and a small explicit arrow.
- **The full mark** (`assets/favicon.svg` / `assets/mark.svg`) is used for larger favicon, app-icon, and general icon contexts (≥ 24px).
- **The header lockup** (mark + serif wordmark, no tagline) remains readable at both desktop and mobile widths.
- **Numerals** in the mark/favicon are typeset in `system-ui` weight 700 so the SVG stays editable and renders reliably across browsers. They are **not** outlined to paths. Final production favicon exports *may* outline the numerals to paths later **if** cross-browser rendering looks inconsistent at very small sizes — not before.
- **The dark-surface logo previews** in the logo system are a brand-system reference (how the mark behaves on dark backgrounds: app icons, share cards on dark stock, OS-supplied dark tabs). They are **not** a request to add a dark mode to the site — the site remains paper-on-ink.

### Radius and shadow

The system runs at radius `0–4px`. Tokens: `--r-0: 0`, `--r-1: 2px`, `--r-2: 4px`. No pill buttons. No big-radius cards. No box-shadows for elevation — borders and rules carry hierarchy.

### Spacing

Base unit `4px`. Tokens `--s-1` through `--s-10` (`4px → 128px`). Article measure ~660–760px. Section padding scales by viewport with `clamp()`.

### Layout primitives

- `trust-shell` / `trust-main` / `trust-aside` — narrow prose column + sticky TOC aside
- `reading-layout` — prose-only column for articles, comparisons, blueprints
- `phase-group` — phase-grouped list for hub pages (not a card grid)
- `result-row` / `faq-row` / `tag-row` — list-row patterns reused across search, FAQ, and tag/topic destinations
- `policy-callout` — quietened left-accented note used inside trust pages
- `review-note` — bordered footer block: maintainer · review cadence · page slug + version

### What this system explicitly avoids

- SaaS-style card grids with floating elevation
- Gradients (background, button, icon, anywhere)
- Emoji iconography
- Coloured "primary CTA pill" buttons
- Hand-drawn illustrated headers
- Motion / animation as a signature
- Multiple accent colours

---

## Content fundamentals

### Voice & tone

- **Plain-English, direct, calm, practical.** No motivational coaching. No hype.
- **Workflow-first framing.** Problems are operational gaps, not mindset issues.
- **Low affect.** No exclamation marks in body copy. No rhetorical questions as section headers.
- Addresses "you" (the solo operator) directly. Talks about "the workflow" or "your system" as objects to be examined.

### Casing & labels

- Section names use Title Case ("Client Workflow Systems", "Software Stack Blueprints")
- Page-type labels use Title Case ("Workflow", "Blueprint", "Comparison", "Asset", "Glossary", "FAQ")
- Eyebrow/kicker labels are ALL CAPS with letter-spacing (`0.08em–0.16em`)
- Body headings use Sentence case
- CTA copy is sentence-case and action-oriented ("Start with the lifecycle guide", "Browse workflow systems")

### Trust posture — earned, not claimed

- **No bylines, no personal bios, no LinkedIn-style credential lists.** Content is published under the role name **"SoloOpsGuide Editorial."**
- **No testimonials, no named-client case studies, no fabricated statistics, no authority-by-association** (logos, awards, vanity affiliations).
- **Dating discipline.** Every workflow, blueprint, comparison, and template carries published / last-reviewed / last-revised dates. Pages reviewed more than nine months ago show a quiet stale-content note.
- **Editorial responsibility.** Tooling may support drafting, formatting, and QA. Final editorial responsibility stays with SoloOpsGuide Editorial. No specific AI/tool names appear in trust-page copy.

### Placeholder email & date guidance

The UI kit deliberately renders **explicit placeholders** for live values that must be confirmed before launch:

| What | Placeholder used in kit | Replace with |
|---|---|---|
| Editorial inbox | `[Editorial inbox — confirm before launch]` | The real inbox address once confirmed. Render once in the footer + once in the Contact page aside; do not scatter it through prose. |
| Last reviewed | `Updated quarterly` (in the dating block) | The actual ISO date once the page is reviewed live. The dating block shows real dates; the editorial-note footer describes the cadence in prose. |
| Next review | `Next review in 3 months` | The next scheduled review date once cadence is wired in. |

**Do not ship `.example` email addresses** as if they were production-ready. The placeholder strings are intentionally obvious so reviewers don't miss them at handoff.

### Sparse-topic threshold

> Consider merging, noindexing, or improving sparse topic pages with fewer than 5 useful items.

This is a **design recommendation, not a hard production rule.** The decision (merge / noindex / leave / improve) stays with editorial. The sparse-state UI on a topic page is what handles the case gracefully when a page is published with fewer items.

---

## Screen system

Each screen is a static React component under `screens/`. The HTML kits at the project root render them inside a design canvas.

| Phase | Screens | Source |
|---|---|---|
| Phase 1 | Homepage · Article · Hub · Template · Reading-path | `SoloOpsGuide UI Kit Phase 1.html` |
| Phase 2A | Workflow Comparison · Software Stack Blueprint | `SoloOpsGuide UI Kit Phase 2A.html` |
| Phase 2B | Glossary index + entry · FAQ index + entry | `SoloOpsGuide UI Kit Phase 2B.html` |
| Phase 2C | Search results + empty state · Reading-path index | `SoloOpsGuide UI Kit Phase 2C.html` |
| Phase 2D | Trust pages (×7) · 404 · Tag/topic populated + sparse | `SoloOpsGuide UI Kit Phase 2D.html` |
| Reference | AdSense safe-zone diagram | `AdSense Safe-Zone Reference.html` |

All screens share the design tokens in `styles.css`. The component primitives live in `components.jsx` and individual screen files in `screens/*.jsx`.

### Trust-page system

One shared primitive (`trust-shell`), seven variants, one set of content rules.

| Slug | Title |
|---|---|
| `about` | About SoloOpsGuide |
| `editorial-policy` | Editorial policy |
| `content-policy` | Content policy |
| `privacy-policy` | Privacy policy *(added in cleanup pass)* |
| `contact` | Contact |
| `disclaimer` | Disclaimer |
| `terms` | Terms of use |

Each page has the same structure: eyebrow + h1 + lede, prose sections (paragraphs, plain-English pair rows, lists, policy callouts), a "Other trust pages" cross-link grid, and the editorial review-note footer.

#### Privacy policy

Plain-English coverage of: what may be collected, analytics, cookies and similar storage, affiliate links, conditional display advertising, third-party links, emails and contact messages, user choices, updates, and contact.

**Important wording constraints:**

- The page does **not** claim formal GDPR or CCPA compliance — production does not currently support self-serve export/erasure workflows.
- The page does **not** claim the site uses no cookies — analytics and affiliate-attribution cookies may apply.
- Display advertising is described **conditionally** ("If display advertising is enabled later…") because it is not live at the time of writing.
- The tone is practical and transparent, not legal-template heavy.

If the site's data practices change — analytics provider swap, advertising enabled, newsletter introduced — the policy text must be re-walked.

### AdSense safe-zone reference

`AdSense Safe-Zone Reference.html` is a **separate annotated reference canvas**, not embedded in any live page mockup. It shows two versions of the same article skeleton side-by-side:

- **Acceptable layout** — one optional mid-article slot between H2 sections, one optional end-of-article slot, one optional sidebar slot, every ad clearly labelled.
- **Layouts to avoid** — ads above the fold in the reading column, ads styled to look like editorial callouts, sticky bottom ads, an ad between every section.

The diagram is instructional only. It does not represent the current production layout — display advertising is not enabled on SoloOpsGuide at the time of this kit.

---

## File index

```
README.md                              ← This file
SKILL.md                               ← Agent skill definition
styles.css                             ← Design tokens + primitives (the only stylesheet)
components.jsx                         ← Shared components (header, footer, breadcrumbs, etc.)
design-canvas.jsx                      ← Design-canvas host (pan/zoom multi-artboard)

SoloOpsGuide UI Kit Phase 1.html       ← Homepage, Article, Hub, Template, Reading-path
SoloOpsGuide UI Kit Phase 2A.html      ← Comparison, Blueprint
SoloOpsGuide UI Kit Phase 2B.html      ← Glossary, FAQ
SoloOpsGuide UI Kit Phase 2C.html      ← Search, Reading-path index
SoloOpsGuide UI Kit Phase 2D.html      ← Trust pages, 404, Tag/topic
AdSense Safe-Zone Reference.html       ← Separate ad-placement diagram (reference only)

screens/                               ← Per-screen JSX (desktop + mobile variants)
assets/                                ← Brand mark + OG image (ink-on-paper, no gradient)
static/                                ← Hugo static mirror of brand assets

archive/obsolete-fidelity-pass/        ← Older fidelity-pass UI kit (do not use)
  README.md                            ← Why it's archived + what was wrong with it
  README-old.md                        ← Original README from the old direction
  ui_kits/                             ← Old website UI kit (teal/amber, Source Sans 3 + Lora)
  preview/                             ← Old token swatches and component previews
  colors_and_type.css                  ← Old CSS variables
  Implementation Handoff.html          ← Old handoff page built on the wrong tokens
  assets/, static/                     ← Old teal-gradient brand mark + dark-navy OG
```

---

## Remaining out of scope after this cleanup

- **Print styles** (`@media print`) over existing screens. Single global pass, no separate routes.
- **Quarterly editorial change log** — a site-wide page summarising substantive changes across the site.
- **Tag master index** (`/tags/`) at the future-state direction. Per-tag pages exist; the alphabetical index does not yet.
- **Editorial revision diff pages** — per-page change history. Deliberately deferred.

Anything in `archive/obsolete-fidelity-pass/` is reference only; do not reach into it for new work.

---

## Remaining risks before implementation handoff

1. **Live inbox + dates must be wired in** before launch. The placeholder strings are obvious on purpose, but the footer, the Contact page aside, the Privacy Policy contact line, and the trust-page dating block all need real values.
2. **Privacy Policy is conditional** on production behaviour. If advertising is enabled, or a newsletter is introduced, or the analytics provider changes, the Privacy Policy must be re-walked alongside the AdSense safe-zone diagram.
3. **Sparse-topic threshold is a recommendation**, not a rule. Editorial owns the final per-page decision.
4. **The Subcontracting topic in the sparse example is a composite.** If real subcontracting content is ever published, swap the demo data before launch.
