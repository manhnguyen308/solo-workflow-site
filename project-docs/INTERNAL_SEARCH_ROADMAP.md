# Internal Search Roadmap

This is the phased plan for evolving the on-site search experience at SoloOpsGuide. The goal is a search that helps a reader find the right page by the operational blocker in their own words, not only by exact title match.

## Context

Before this pass, the header search form offloaded to DuckDuckGo with a `site:` prefix, which depended entirely on external indexing and gave readers no site-aligned ranking, filtering, or problem-first discovery. The Phase 1 pass below replaces that with a real internal search backed by a Hugo-generated index and a small client-side search script.

---

## Phase 1: MVP (shipped)

The smallest reasonable internal search that is production-safe and cleanly fits the Hugo build.

**Included now:**

- Hugo custom output format `SearchIndex` emits `/search-index.json` at build time, containing every non-draft regular page and section hub: `url`, `title`, `section`, `kind`, `type`, `role`, `description`, `summary`, `tags`, `category`, and a truncated body excerpt.
- Dedicated `/search/` page with its own layout (`layouts/_default/search.html`) rendering a search input, section filter chips, and a results list.
- Vanilla JS search (`static/js/search.js`) with token-based scoring across title (x10), tags/category/type (x6), description/summary (x4), body excerpt (x1); requires all tokens to match; small boost for hubs and workflow-anchor pages.
- Problem-first synonym map covering: approval/signoff, billing/invoice/payment, onboarding/kickoff/intake, offboarding/closeout/wrap-up, handoff/handover/delivery, silence/ghost/unresponsive, stalled/stuck/blocked, CRM, PM/project-management, scope/change-request.
- Section filter chips for Workflows, Blueprints, Comparisons, Templates, Glossary, FAQ, plus All.
- URL state: `?q=...` and `?type=...` so searches are linkable and the back button works.
- Header search form now posts to `/search/` instead of DuckDuckGo and keeps the existing tracking event.
- `robots` meta override support so the search results page is `noindex,follow`.
- Tracking event `internal_search_query` fired with query, filter, and result count.

**Intentionally deferred:**

- No fuzzy / typo-tolerant matching (adds bundle weight and scoring complexity; current substring + synonym expansion is good enough for the volume of pages).
- No third-party library (Fuse.js, Lunr, Pagefind). A ~6KB hand-written matcher is a better fit for the current catalog size.
- No suggestions / autocomplete dropdown in the header input.
- No keyword chip UI ("approval", "billing", etc.) on the search page.
- No editorial problem-to-page mapping for common blocker phrases.
- No search analytics dashboard — tracking is fired but not yet consumed.
- No indexing of FAQ answer bodies beyond the 360-char excerpt.

---

## Phase 2: Better discovery

Improvements that sharpen relevance and help readers describe a blocker in plain language.

- **Keyword chips on the search page.** A small curated row of starter phrases ("approval", "billing", "client silence", "closeout stalled", "CRM vs PM") that pre-fill the query. Low effort, high signal for new visitors.
- **Synonym map expansion.** Promote the current inline JS synonyms to a JSON data file under `data/search/synonyms.json` so synonym coverage can be edited without touching JS.
- **Weighted section pinning.** If a query clearly matches a hub title, surface the hub before its child pages. Extends the Phase 1 role boost.
- **Stop-word and plural handling.** Strip filler words ("the", "a", "how", "what") and normalize trailing "s" so "approvals" and "approval" score identically.
- **Recent / popular pages state.** When the input is empty, render the current priority pages (workflow anchor, lean blueprint, CRM-vs-PM) and any hub so the search page is useful even before typing.
- **Per-section ranking rules.** Let Workflows outrank Templates on broad queries; let Glossary rank higher when the query reads like a term lookup ("what is approval owner").
- **Keyboard-driven header suggestions.** A lightweight header dropdown that previews top 5 matches as the user types, using the same index already loaded for `/search/`.
- **No-results rewrite.** When zero results hit under the active filter, automatically widen to All and explain that the filter was removed — readers rarely recognize that the filter is the blocker.

---

## Phase 3: Higher-value navigation

Search as an operational guide, not only a lookup tool. This phase is where search starts to reinforce the workflow-first posture of the site rather than just exposing pages.

- **Problem-to-page mapping.** A small editorial layer: `data/search/problems.json` maps full blocker phrases ("my client has not clearly approved this", "where should billing status live", "closeout is stalled") to a short curated list of routing pages with a one-line editorial framing. Matches an editorial intent before falling back to token search.
- **Guided results framing.** When a known operational intent is recognized, render a top card explaining which cluster should handle the problem (workflow first, then blueprint, then comparison), using the same cluster discipline from AGENT.md.
- **Intent classification.** Distinguish definition intent ("what is approval owner"), diagnosis intent ("approval not confirmed"), and tool-comparison intent ("CRM vs PM"), and route each to the cluster that actually resolves it.
- **Routing handoff from stage pages.** Empty / low-confidence searches suggest the workflow anchor plus the closest stage page as the "if you are not sure which stage is broken, start here" answer — mirroring the "Start with the broken stage" logic on the workflow hub.
- **Query log review cadence.** Periodically review the `internal_search_query` tracking stream for recurring queries with no results or low-confidence results, and fill those gaps either with new content (rare) or new problem-to-page mappings (default).
- **Structured result cards.** Show page type, upstream cornerstone, and estimated reading role on each result card so a reader can tell at a glance whether a hit is a workflow, a comparison, or a narrow support asset.

---

## Non-goals

- No heavy backend or hosted search service. The site remains fully static on Cloudflare Pages.
- No fuzzy search library added unless the catalog grows past a point where substring + synonym matching clearly breaks down.
- No URL structure changes. `/search/` is the only new URL.
- No redesign of the header or the site-wide visual system.
- No expansion of search into a second navigation pattern that competes with the workflow-first hub routing.
