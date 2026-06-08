# Implementation Handoff — SoloOpsGuide Future-State Redesign

> **Source of truth:** the final future-state redesign system in this bundle.
> Everything under `archive/obsolete-fidelity-pass/` is historical reference **only** and must not guide implementation. Do **not** revive the old teal/amber + Source Sans 3 + Lora production-fidelity direction.

This package is for a developer using Claude Code to implement the approved redesign in the live **Hugo** codebase. The HTML/JSX files in this bundle are **design references** — prototypes showing intended look and behaviour, not production code to paste in. The task is to recreate these designs inside the existing Hugo site using its established templates, partials, and content, applying the redesign where it improves UI/UX and keeping diffs reviewable.

**Fidelity:** High-fidelity. Final colours, typography, spacing, primitives, and copy patterns are settled. Recreate pixel-faithfully using the tokens in `styles.css`.

---

## Design direction (non-negotiable)

- Operating-manual feel · workflow-first IA · editorial over interface
- One screen, one decision · earned trust, not claimed trust
- Calm, practical, mobile-first reading
- **Source Serif 4** — long-form prose · **Public Sans** — UI/nav/meta/tables · **JetBrains Mono** — copyable/template-like blocks only
- Warm-neutral paper palette · deep-ink text
- **One editorial accent: `#2F4E78`**
- **Logo-mark-only teal: `#5C8499` — never a UI token, button, link, callout, or content-category colour**
- No gradients · no emoji iconography · no SaaS-style cards
- No fake testimonials, authors, credentials, or authority claims

---

## Visual screenshots

A lightweight visual reference layer for the final future-state design lives in **`screenshots/`** (in this bundle). These are full-page renders of the canonical screens — use them to orient quickly and to check your Hugo implementation against the intended look. **They are visual references only; the canonical source files (§1) and the design rules above remain the source of truth.** Where a screenshot and a source file ever disagree, the source file wins.

Captured at readable desktop width; mobile renders are included only for the layouts where the mobile composition differs meaningfully.

**Desktop (`*-desktop.png`)**
`homepage` · `article` · `hub` · `template` · `reading-path` · `reading-path-index` · `comparison` · `blueprint` · `glossary-index` · `glossary-entry` · `faq-index` · `faq-entry` · `search-results` · `tag-topic` · `trust-about` (representative trust page) · `trust-privacy` (Privacy Policy) · `not-found` (404) · `logo-system` · `adsense-safe-zone`

**Mobile (`*-mobile.png`)**
`homepage` · `article` · `comparison` · `blueprint` · `search-results` · `reading-path-index`

> Note: `screenshots/logo-system-desktop.png` is a one-page asset reference sheet (mark, lockup, favicon vs. favicon-mini at real sizes, OG default, colour roles); full logo documentation remains in `SoloOpsGuide Logo System.html`. `screenshots/adsense-safe-zone-desktop.png` is a faithful render of the reference diagram.

---

## 1. Canonical design files

These are the only files that should guide implementation.

**Documentation**
- `README.md` — full design-system reference (tokens, primitives, voice, trust posture, screen system)
- `SKILL.md` — agent skill definition pointing at the future-state system

**Foundations**
- `styles.css` — design tokens + layout primitives (the only stylesheet)
- `components.jsx` — shared components (header lockup, footer, breadcrumbs, dating block, review-note, etc.)
- `design-canvas.jsx` — design-canvas host for the kits (reference only; not shipped)

**Page-pattern kits** (each renders its screens in the design canvas)
- `SoloOpsGuide UI Kit Phase 1.html` — Homepage, Article, Hub, Template, Reading-path
- `SoloOpsGuide UI Kit Phase 2A.html` — Workflow Comparison, Software Stack Blueprint
- `SoloOpsGuide UI Kit Phase 2B.html` — Glossary index + entry, FAQ index + entry
- `SoloOpsGuide UI Kit Phase 2C.html` — Search results + empty state, Reading-path index
- `SoloOpsGuide UI Kit Phase 2D.html` — Trust pages (×7), 404, Tag/topic (populated + sparse)
- `AdSense Safe-Zone Reference.html` — ad-placement reference diagram (instructional only)

**Per-screen sources** — `screens/*.jsx` (desktop + mobile variants):
homepage · article · hub · template · reading-path · reading-path-index · comparison · blueprint · glossary-index · glossary-entry · faq-index · faq-entry · search-results · tag-topic · trust-pages · not-found

**Logo system**
- `SoloOpsGuide Logo System.html` — full logo documentation
- `assets/mark.svg` · `assets/mark-lockup.svg` · `assets/favicon.svg` · `assets/favicon-mini.svg` · `assets/og-default.svg`
- `static/favicon.svg` · `static/favicon-mini.svg` · `static/og-default.svg` (Hugo static mirror)

---

## 2. Excluded / obsolete files — do not use

Everything below is historical reference. It must **not** guide implementation, and none of its assets, tokens, or type choices may appear in the redesign.

- `archive/obsolete-fidelity-pass/` — the entire older fidelity-pass UI kit:
  - `ui_kits/` — old teal/amber kit, Source Sans 3 + Lora, SaaS-style cards
  - `preview/` — old token swatches and component previews
  - `colors_and_type.css` — old CSS variables (teal/amber)
  - `Implementation Handoff.html` — old handoff built on the wrong tokens
  - `assets/`, `static/` — old teal-gradient mark + dark-navy OG
  - `README.md` / `README-old.md` — why it was archived / the original old-direction README

**Working / exploration files (not canonical):** `SoloOpsGuide Logo Exploration.html`, `SoloOpsGuide - Card Fix.html`, `SoloOpsGuide - Content Card Refinement.html`, `SoloOpsGuide Website UI Kit.html`. Superseded by the phase kits and the Logo System; keep for history only.

If a value, asset, or pattern is needed, take it from the canonical files in §1 — never from the archive.

---

## 3. Page patterns included

| Pattern | Source screen(s) | Notes |
|---|---|---|
| Homepage | `homepage.jsx` / `homepage-mobile.jsx` | Workflow-first entry; phase-grouped, not card wall |
| Workflow article | `article.jsx` / `article-mobile.jsx` | Long-form prose, dating block, review-note footer |
| Hub page | `hub.jsx` / `hub-mobile.jsx` | `phase-group` lists, not card grids |
| Template / checklist | `template.jsx` | Copyable blocks set in JetBrains Mono |
| Reading-path page/component | `reading-path.jsx` | Cross-hub sequence |
| Comparison page | `comparison.jsx` / `comparison-mobile.jsx` | Bounded tool/model decision |
| Blueprint page | `blueprint.jsx` / `blueprint-mobile.jsx` | Whole-stack composition |
| Glossary index | `glossary-index.jsx` / `-mobile` | `tag-row`/list pattern |
| Glossary entry | `glossary-entry.jsx` / `-mobile` | |
| FAQ index | `faq-index.jsx` / `-mobile` | `faq-row` list |
| FAQ entry | `faq-entry.jsx` / `-mobile` | |
| Search results | `search-results.jsx` / `-mobile` | Includes empty state |
| Reading-path index | `reading-path-index.jsx` / `-mobile` | |
| Tag / topic page | `tag-topic.jsx` | Populated + sparse-state variants |
| Trust pages (×7) | `trust-pages.jsx` / `trust-pages-mobile.jsx` | about · editorial-policy · content-policy · **privacy-policy** · contact · disclaimer · terms |
| 404 | `not-found.jsx` | |
| AdSense safe-zone reference | `AdSense Safe-Zone Reference.html` | Reference diagram, not a live page |
| Logo / favicons / OG default | `assets/*.svg`, `static/*.svg`, `SoloOpsGuide Logo System.html` | |

---

## 4. Production Hugo mapping

Likely target files/areas. Confirm against the actual repo layout before editing.

| Pattern | Hugo target |
|---|---|
| Homepage | `layouts/index.html` |
| Article / template / glossary entry / FAQ entry / comparison / blueprint / reading-path | `layouts/_default/single.html` (+ per-type layouts under `layouts/<type>/single.html` where types diverge) |
| Hub / glossary index / FAQ index / reading-path index / search results | `layouts/_default/list.html` (+ per-section `layouts/<section>/list.html`) |
| Tag / topic page | `layouts/_default/taxonomy.html` (and `terms.html` if a tag master index is later added — currently out of scope) |
| 404 | `layouts/404.html` |
| Header / footer | `layouts/partials/header.html`, `layouts/partials/footer.html` (header lockup, nav, footer inbox line) |
| Related content / cross-links | `layouts/partials/related.html` (hub cross-links, "Other trust pages" grid) |
| Reading path | `layouts/shortcodes/reading-path.html` and/or `layouts/partials/reading-path.html` |
| Page-type / utility panels | `layouts/partials/` (dating block, review-note footer, sparse-state notice, policy-callout) |
| Search | `layouts/_default/search.html` + client index/script (e.g. `assets/js/search.js`, Fuse/Lunr index) |
| CSS | port `styles.css` into the site's stylesheet pipeline (`assets/css/` → Hugo Pipes) as the single source of tokens |
| Feature-image assets | `static/images/`, `static/images/features/` |
| Favicon / OG / static assets | `static/favicon.svg`, `static/favicon-mini.svg`, `static/og-default.svg` + `<head>` partial wiring |

---

## 5. Implementation strategy

Implement carefully — **do not blind-replace** the existing site.

- First read, if present: `AGENT.md`, `TRACKER.md`, and `.claude/skills/soloopsguide-agent/SKILL.md`. Follow any process they define.
- Use **targeted reads** only; do not bulk-load the repo.
- **Preserve** URLs, slugs, aliases, canonicals, sitemap behaviour, pagination, SEO metadata, shortcodes, and existing content. The redesign is presentation; it must not move pages or break links.
- Apply the redesign **where it improves UI/UX**. Avoid unnecessary broad rewrites.
- Keep diffs **small and reviewable** — one pattern/partial at a time, in the order in §8.

---

## 6. Typography & font-loading guidance

- **Source Serif 4** — long-form prose (article body, ledes, blockquote, callout body, trust prose)
- **Public Sans** — UI, navigation, metadata, eyebrows, tables, captions, badges, dating blocks
- **JetBrains Mono** — copyable / template-like blocks only (code, file paths, copy-as-text artefacts)
- **Fallbacks** if font loading is deferred: serif → Georgia / Times New Roman; sans → system-ui; mono → ui-monospace / SF Mono / Consolas
- Load **required weights only.** Public Sans 400/500/600/700; Source Serif 4 optical 8–60 at 400/500/600/700; JetBrains Mono 400/500
- Use **`font-display: swap`** (already in the `@import` in `styles.css`)
- **Validate performance and mobile readability before committing** — check that swap doesn't cause layout shift and that prose stays legible on small screens

Canonical declarations live in `styles.css` (`--sans`, `--serif`, `--mono` + the single `@import`).

---

## 7. Trust / compliance guidance

- **Privacy Policy is included** (`privacy-policy` trust variant). Plain-English coverage of collection, analytics, cookies, affiliate links, conditional advertising, third-party links, emails/contact, user choices, updates, contact.
- **Replace placeholder email and date values before production.** The kit renders obvious placeholders on purpose:
  - Editorial inbox → `[Editorial inbox — confirm before launch]` (footer + Contact aside + Privacy contact line)
  - Dating block → real ISO dates once reviewed live
- **No fake authors / testimonials / credentials / authority claims.** Content publishes under the role name **"SoloOpsGuide Editorial."**
- **Wording constraints on Privacy:** does not claim formal GDPR/CCPA compliance; does not claim zero cookies; advertising described **conditionally** ("If display advertising is enabled later…"). Re-walk the policy if analytics provider, advertising, or newsletter behaviour changes.
- **Sparse-topic threshold (≈ <5 useful items) is a recommendation, not a hard rule.** Editorial owns the per-page decision; the sparse-state UI handles it gracefully.
- **Display advertising is conditional** — not live at time of kit. Follow the **AdSense safe-zone boundaries** in `AdSense Safe-Zone Reference.html`: at most one mid-article slot between H2s, one end-of-article slot, one sidebar slot; all clearly labelled; never above the fold in the reading column, never styled as editorial callouts, no sticky bottom ads, no ad between every section.

---

## 8. Implementation order (safe sequence)

1. **Foundation** — tokens, type, logo assets (`styles.css`, fonts, `static/` SVGs, `<head>` wiring)
2. **Header / footer** partials (lockup, nav, footer inbox line)
3. **Homepage**
4. **Article / template** single layouts
5. **Hubs** (list layouts, `phase-group`)
6. **Reading paths** (index + shortcode/partial)
7. **Comparison / blueprint**
8. **Glossary / FAQ** (index + entry)
9. **Search** (template + client index/script)
10. **Tag / topic** taxonomy
11. **Trust pages** (incl. Privacy)
12. **404**
13. **AdSense safe-zone documentation** if/when advertising is enabled
14. **Final QA** (§9)

---

## 9. Validation checklist

- [ ] `hugo` build succeeds with no errors/warnings
- [ ] `git diff` reviewed — scoped, no stray rewrites
- [ ] Homepage renders correctly
- [ ] Hub pages
- [ ] Articles
- [ ] Templates / checklists
- [ ] Comparison pages
- [ ] Blueprint pages
- [ ] Glossary + FAQ (index + entry)
- [ ] Search (results + empty state)
- [ ] Reading paths (index + path)
- [ ] Tag / topic pages (populated + sparse)
- [ ] Trust pages, including Privacy
- [ ] 404
- [ ] Mobile nav works
- [ ] Logo / header lockup readable at desktop and mobile
- [ ] Favicon sizes correct (full mark ≥24px; `favicon-mini` for very small/dense)
- [ ] OG default image present and correct
- [ ] No horizontal overflow at any breakpoint
- [ ] No broken images
- [ ] No placeholder links left in
- [ ] No accidental use of archived old design assets/tokens/fonts
- [ ] No accidental use of logo teal `#5C8499` as a UI accent
- [ ] Sitemap / canonical / robots unchanged unless intentionally edited

---

## 10. Known caveats

- The **archived obsolete fidelity pass** must not be used as the final design.
- **Live inbox and review dates** must be confirmed and wired in before launch.
- **Privacy Policy depends on actual** analytics / advertising / newsletter behaviour — re-walk if those change.
- **Print styles** (`@media print`) are still out of scope.
- **Revision diff / change-log pages** are still out of scope.
- **Final favicon numerals** are kept as `system-ui` for now; may need outlining to paths later **only if** cross-browser rendering is inconsistent at very small sizes.
- **Logo teal `#5C8499` reuse must be monitored** during implementation — it is not a token, so nothing mechanically prevents misuse as a UI accent.

---

## 11. Suggested commit message

```
Apply future-state redesign: tokens, type, logo, and page patterns

Port the approved future-state system (Source Serif 4 / Public Sans /
JetBrains Mono, warm-neutral paper palette, single #2F4E78 accent,
logo-mark-only #5C8499, no gradients/emoji/SaaS cards) across homepage,
articles, hubs, templates, reading paths, comparison/blueprint, glossary,
FAQ, search, tag/topic, trust pages (incl. Privacy), and 404. New logo
mark, favicons (full + mini), and OG default. URLs, slugs, canonicals,
sitemap, and content preserved. Placeholder inbox/dates retained for
pre-launch confirmation.
```
