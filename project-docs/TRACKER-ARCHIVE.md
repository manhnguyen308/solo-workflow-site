# SoloOpsGuide Tracker Archive

Detailed history moved out of the root `TRACKER.md` on 2026-04-17 so the live tracker stays quick to scan. Read `AGENT.md` first, then `TRACKER.md`; use this archive only when you need deeper pass history, verification notes, or older commit context.

Tracker-only bookkeeping commits are omitted here unless they changed project state. The goal of this archive is to preserve useful history without keeping the root tracker as a long session transcript.

## 2026-04-13 foundations

- UI polish pass (`af3fb79`):
  - removed the homepage resource-card paragraph width cap so resource descriptions could use the full card width.
  - made the footer brand link an inline-block so its margin created the intended spacing.
  - Hugo build verification succeeded.
- Repo docs reorganization (`decb3ee`):
  - moved non-core root markdown docs into `project-docs/`.
  - kept `AGENT.md`, `TRACKER.md`, `README.md`, and `LICENSE` at the repo root.
  - retired `codex-optimization-reminder.md` because it was superseded by `AGENT.md` and `TRACKER.md`.
- Trust and quality pass (`3a285c6`):
  - tightened About, Contact, Content Policy, and Editorial Policy.
  - lightly clarified footer trust/editorial wording.
  - Hugo build verification succeeded and push succeeded.

## 2026-04-14 crawl and SEO signal cleanup

- Narrow crawl and indexability audit (`9f5e1ee`):
  - checked sitemap inclusion, `robots.txt`, canonicals, meta robots, and hub/page reachability for the workflow hub plus the three priority leaf pages.
  - confirmed `public/terms/` was the legal Terms page, not an accidental taxonomy archive.
  - replaced old `sample-*`-derived priority links and tracking labels with final public URL-derived references.
  - narrowed the homepage "Newer guides" strip to workflow, blueprint, and comparison sections so support assets were not promoted too early.
  - conclusion at the time: the site looked technically indexable, and the main problem was more likely crawl/index prioritization than a hard technical block.
  - Hugo build verification succeeded and push succeeded.

## 2026-04-14 feature-image framing and SVG cleanup

- Feature image consistency pass (`ed6715e`):
  - normalized shared feature-image display surfaces to `16:9`.
  - removed mixed-ratio framing that cropped the same artwork differently in different contexts.
  - Hugo build verification succeeded and push succeeded.
- Homepage regression fix after the framing pass (`5c19dad`):
  - restored missing homepage priority cards by replacing brittle page lookups with stable rendered-URL and section resolution.
  - kept the useful `16:9` framing changes in place.
  - Hugo build verification succeeded and push succeeded.
- SVG artwork refresh and follow-up refinements (`6ea993a`, `56ff11a`, `500e69f`, `78a272c`):
  - refreshed several workflow, hub, blueprint, and comparison SVGs.
  - simplified overly dense dashboard-style images so the priority cards read better at thumbnail size.
  - refined in-image labels so they stayed present but clearer and larger.
  - these passes improved composition and readability but were still part of the pre-raster image era.
- Generator alignment and full regeneration (`620679c`, `a24aff0`):
  - aligned `tools/generate-feature-images.ps1` with the live SVG workflow.
  - mirrored the full template tree and regenerated the full referenced SVG set.
  - improved repeatability, but later work moved the approved production raster path to newer tooling.

## 2026-04-15 feature-image redesign and workflow experiments

- Live feature image artwork replacement (`7e9739a`):
  - replaced all 52 live SVG feature images with a calmer editorial-diagram system.
  - larger labels, clearer spacing, and more consistent category styling were the main goals.
  - push succeeded.
- Feature image label alignment repair (`8e1f67e`):
  - repaired the four homepage priority templates where connector lines and label zones still conflicted.
  - restored template-driven ownership through `tools/feature-image-templates/`.
  - push succeeded.
- Homepage feature image redesign (`ea6999d`):
  - fully rebuilt the four homepage priority SVGs around stronger card-size compositions.
  - push succeeded.
- OpenAI image-model workflow setup (`00eef6b`):
  - added a manifest-driven raster workflow and prompt file for the four homepage priority images.
  - real generation failed with `billing_hard_limit_reached`, so no live PNGs were created.
  - this path was later superseded by the local no-API workflow and then by the approved Python/WebP workflow.
- Local no-API workflow replacement and backend test (`80fa879`, `05e4e58`):
  - added `tools/generate-local-feature-images.ps1`, backend config, a ComfyUI starter workflow, and backend test mode.
  - confirmed both configured local endpoints were unreachable in this environment.
  - no real raster replacement was produced during these passes.
  - push succeeded.

## 2026-04-15 to 2026-04-16 approved Python and WebP workflow

- Reusable code-generated feature-image workflow (`bd18a1e`):
  - added the Python 3.12 + Pillow system under `tools/feature-images/`.
  - added reusable templates, per-image JSON configs, generation entrypoints, and validation helpers.
  - added `data/feature_image_raster_preferences.json` so only reviewed raster outputs would be activated.
  - first approved raster set:
    - workflow anchor
    - workflow hub
    - lean blueprint
    - CRM vs PM comparison
  - Hugo build verification succeeded and push succeeded.
- Four priority homepage feature image polish pass (`3e73070`):
  - refined the shared templates and configs used by the four approved images instead of introducing one-off artwork.
  - kept the approved raster set narrow and review-gated.
  - Hugo build verification succeeded and push succeeded.

## 2026-04-16 repo guidance

- AGENT guidance merge (`95eb0c0`):
  - folded durable external guidance into `AGENT.md`.
  - kept repo-specific SoloOpsGuide rules as the controlling instructions.
  - push succeeded.

## 2026-04-17 URL, build, and image cleanup

- Stable sample slug pass (`f254c19`):
  - added explicit slugs to the workflow anchor, intake guide, lean blueprint, and CRM-vs-PM comparison while preserving current public URLs.
  - removed the UTF-8 BOM from the workflow anchor source file.
  - remaining lower-priority sample-slug cleanup was intentionally deferred.
  - Hugo build verification succeeded and push succeeded.
- Orphan WebP cleanup (`f3e935d`):
  - removed 20 unapproved source WebPs and matching stale built copies.
  - confirmed the gate file already matched the approved four-image set.
  - confirmed SVG fallbacks remained in place.
  - result: exactly 4 approved WebPs remained under `static/images/features/`.
  - Hugo build verification succeeded and push succeeded.
- Public build output policy cleanup (`74adfc7`):
  - clarified Cloudflare Pages source-build deployment.
  - added `.gitignore` for `/public/`.
  - removed `public/` from tracked source while keeping it available locally for verification.
  - updated `AGENT.md` and `README.md` to match the deployment model.
  - Hugo build verification succeeded and push succeeded.
- Four approved feature image regeneration (`f9fffa1`):
  - regenerated the four approved WebPs through the Python/Pillow workflow.
  - only the workflow anchor and CRM-vs-PM outputs materially changed in that pass; the other two regenerated identically.
  - confirmed no orphan WebPs were created.
  - Hugo build verification succeeded and push succeeded.
- Four approved feature image refinement (`4a28c41`):
  - simplified the approved WebP layouts further for better card-size readability.
  - enlarged workflow stage labels, softened the hub anchor block, lightened blueprint stack bars, and reduced comparison density.
  - Hugo build verification succeeded and push succeeded.

## Notes still worth remembering

- Google can index the site; after the main crawl audit, the observed issue was prioritization, not an obvious technical crawl block.
- The workflow cluster remains the intended first operational path; support pages should route back upward rather than competing with cornerstone pages.
- `public/` is now generated verification output only.
- The current production-approved raster gate is intentionally narrow and should not be widened casually.
- Remaining deferred review items that still matter:
  - duplicate page classification logic
  - remaining lower-priority sample-slug cleanup
  - PowerShell image-generator readability cleanup
  - broader SEO/content changes only after the current GSC wait window produces clearer evidence

## 2026-04-24 passes (moved from TRACKER.md on 2026-04-26)

- 2026-04-24 template/checklist action layer QA — print layout fix: post-feature review of the action toolbar added earlier; reviewed `layouts/_default/single.html`, `layouts/partials/site-script.html`, and `static/css/main.css`; section gating confirmed correct — `{{ if eq .Section "templates-checklists" }}` correctly restricts the toolbar to template/checklist section pages; re-confirmed rendered output: all 15 template pages have count=2 (`data-article-actions` toolbar + JS selector), while workflow/FAQ/comparison/blueprint/glossary/hub pages have count=1 (JS selector only); copy JS: clones `.article-body`, strips the toolbar node, reads `innerText || textContent`, collapses excess newlines — excludes toolbar labels and header/footer/nav chrome; print CSS: toolbar carries `data-no-print` so it is hidden in print; one real issue found: `.article-header` is `display: grid` (two-column) but was absent from the `@media print` display reset — with `.article-aside` hidden in print, the grid still allocated its second column leaving the article title spanning only ~60% of the print page width instead of full width; fix: added `.article-header` to the existing print reset rule in `static/css/main.css` (`display: block`); Hugo build clean at 81 pages and 103 static files; files changed: `static/css/main.css`, `TRACKER.md`.

- 2026-04-24 template/checklist action layer — copy + print: added a lightweight action toolbar that appears only on `templates-checklists` section pages (15 asset pages); two actions: (1) "Copy as plain text" — serializes `innerText` of `.article-body` excluding the toolbar itself, uses `navigator.clipboard.writeText` with `document.execCommand('copy')` fallback; (2) "Print or save as PDF" — calls `window.print()`; placement: rendered inside `.article-body.prose` at the top above content; scoping: gated in `layouts/_default/single.html` with `{{ if eq .Section "templates-checklists" }}`; JS added inside `layouts/partials/site-script.html` (no new JS file); tracking: both buttons fire `asset_action` events; print stylesheet hides nav/header/footer/aside elements, forces links to underlined black, collapses two-column reading layout to full-width; Hugo build clean at 81 pages and 103 static files; QA confirmed section gate works and toolbar renders on template pages only; files changed: `layouts/_default/single.html`, `layouts/partials/site-script.html`, `static/css/main.css`, `TRACKER.md`.

- 2026-04-24 new routing page — Problem-to-Page Guide for Solo Operators: created `content/problem-to-page-guide.md` at `/problem-to-page-guide/`; maps named solo-operator symptoms to the strongest single next page; five scannable tables (delivery/approval, billing, onboarding, closeout, tool/stack) plus definition block and "When this page is the right starting point" section; feature image created through approved Python/Pillow workflow — `hub_overview` layout, `workflow` palette; one small contextual backlink added from homepage chooser in `layouts/index.html`; Hugo build clean at 81 pages and 103 static files (up from 80/102); files changed: `content/problem-to-page-guide.md` (new), `tools/feature-images/feature_images/data/hubs/problem-to-page-guide.json` (new), `static/images/features/hubs/problem-to-page-guide.webp` (new), `layouts/index.html`, `TRACKER.md`.

- 2026-04-24 weekly Codex audit - homepage and hub first-click clarity: reviewed homepage, `content/client-workflow-systems/_index.md`, `content/software-stack-blueprints/_index.md`, `content/workflow-comparisons/_index.md`; highest-value issue: blueprint hub sent readers with unclear system center to the broad comparison hub instead of the CRM-vs-PM comparison directly; fix: changed one sentence in `content/software-stack-blueprints/_index.md` to route directly to the CRM-vs-PM comparison; Hugo build clean at 80 pages; files changed: `content/software-stack-blueprints/_index.md`, `TRACKER.md`.

- 2026-04-24 weekly Codex audit - support-layer hierarchy heading correction: reviewed templates hub, FAQ hub, anchor, and representative support pages; highest-value issue: seven support pages used `## Start here first if...` — misleading because those sections tell readers to leave and start at a stronger upstream page; fix: changed to `## Start upstream first if...` on seven existing support pages; Hugo build clean at 80 pages; files changed: seven support markdown pages plus `TRACKER.md`.

- 2026-04-24 weekly Codex audit - internal search natural-query correction: reviewed search implementation and tested natural-query behavior; highest-value issue: natural operational queries ("client won't respond", "where to bill after approval", "final closeout no reply", "payment overdue") could return zero results because filler tokens were required and response-related synonyms were missing; fix: added a small stop-word filter for question/filler tokens and targeted synonyms for respond/response/reply/unanswered plus late/overdue in `static/js/search.js`; Hugo build clean at 80 pages; files changed: `static/js/search.js`, `TRACKER.md`.

- 2026-04-24 internal search bugfix — "temporarily unavailable" on production: root cause was Hugo's inline-JS minifier mangling the `window.SoloOpsGuideSearch` config — `{{ "search-index.json" | relURL | jsonify }}` caused the minifier to double-wrap the value, so `fetch(indexUrl)` rejected; fix: replaced with `"{{ "search-index.json" | relURL }}"` (manual quoting, removing `jsonify` from the pipeline); rebuilt and confirmed rendered output is `SoloOpsGuideSearch={indexUrl:"/search-index.json"}`; Hugo build clean at 80 pages; files changed: `layouts/_default/search.html`, `TRACKER.md`.

- 2026-04-24 homepage guided "Start Here" decision helper: added a compact problem-first chooser to the homepage between the hero and value props — six situation-to-destination cards routing to the best single page rather than just a broad category hub; no JS; tracking events `cta_click` with per-situation labels; CSS appended to `static/css/main.css` reusing existing tokens; Hugo build clean at 80 pages; files changed: `layouts/index.html`, `static/css/main.css`, `TRACKER.md`.

## 2026-04-23 passes (moved from TRACKER.md on 2026-04-26)

- 2026-04-23 internal search implementation + roadmap: replaced the header DuckDuckGo `site:` search with real on-site internal search — Hugo custom output format emits `/search-index.json`, dedicated `/search/` page with filter chips, vanilla JS client-side matcher with weighted scoring (title x10, tags/type/category x6, description/summary x4, body x1) and synonym map; roadmap document `project-docs/INTERNAL_SEARCH_ROADMAP.md` created with Phase 1 (MVP — shipped), Phase 2, Phase 3; Hugo build clean at 80 pages (up from 78); files changed: multiple layouts, `static/js/search.js`, `content/search.md`, config output format, `TRACKER.md`.

- 2026-04-23 weekly cluster review - approval/closeout support chain: reviewed workflow anchor, milestone delivery, invoice/payment, offboarding workflow, approval FAQ, closeout FAQ, FAQ hub; one wording/link cleanup in offboarding workflow — replaced stale review-silence follow-on with the closeout-specific FAQ route; Hugo build clean at 78 pages; files changed: `content/client-workflow-systems/client-offboarding-workflow-for-freelancers-and-solo-service-businesses.md`, `TRACKER.md`.

- 2026-04-23 FAQ hub support-layer integration: added the two newer approval/closeout FAQ pages to `content/faq/_index.md` across three places — fastest starting points, plain link list, and questions section; Hugo build clean at 78 pages; files changed: `content/faq/_index.md`, `TRACKER.md`.

- 2026-04-23 broken feature image fix — client approval signoff FAQ: `content/faq/what-counts-as-client-approval-before-billing-or-next-stage.md` referenced `/images/features/faq/client-approval-signoff-faq.svg` which never existed; fix: created data config using `faq_card` layout, generated `static/images/features/faq/client-approval-signoff-faq.webp`, updated front matter from `.svg` to `.webp`; Hugo build clean; files changed: `tools/feature-images/feature_images/data/faq/client-approval-signoff-faq.json` (new), `static/images/features/faq/client-approval-signoff-faq.webp` (new), front matter updated, `TRACKER.md`.

- 2026-04-23 workflow anchor integration of closeout non-response FAQ: added one contextual link to `content/client-workflow-systems/sample-client-workflow.md` — Stage 6 closeout non-response follow-on; Hugo build clean at 78 pages; files changed: `content/client-workflow-systems/sample-client-workflow.md`, `TRACKER.md`.

## 2026-04-22 passes (moved from TRACKER.md on 2026-04-26)

- 2026-04-22 new FAQ: what to do when client does not respond to final project closeout: created at `/faq/what-to-do-when-client-does-not-respond-to-project-closeout/`; covers the post-completion engagement close non-response scenario (distinct from mid-project silence FAQ and pending-approval FAQ); feature image `client-closeout-no-response-faq.webp` using `faq_card` layout; Hugo build clean at 78 pages (up from 77); files changed: new FAQ, new image, `TRACKER.md`.

- 2026-04-22 checklist_card text-wrap fix: fixed trigger-label text overflow in `tools/feature-images/feature_images/templates/checklist_card.py` — 8 of 15 labels overflowed the 294px trigger box; replaced unconstrained `draw.text` calls with `draw_text_block` (existing wrapping helper); regenerated all 15 template WebPs; Hugo build clean at 77 pages; files changed: `tools/feature-images/feature_images/templates/checklist_card.py`, 15 WebP images regenerated, `TRACKER.md`.

- 2026-04-22 templates/checklists feature image pass: generated 11 new topic-specific WebPs to replace generic SVG placeholders; 11 JSON data configs created in `tools/feature-images/feature_images/data/templates/`; front matter on all 11 content files updated from `.svg` to `.webp`; Hugo build clean at 77 pages with 99 static files (up from 88); files changed: 11 new JSON configs, 11 new WebPs, 11 content front matter updates, `TRACKER.md`.

- 2026-04-22 feature image for pending-approval-decision FAQ: created data config, generated `static/images/features/faq/pending-approval-decision-faq.webp`, updated front matter on `content/faq/what-to-do-when-client-has-not-approved-or-rejected-deliverables.md` from `.svg` to `.webp`; Hugo build clean; files changed: new JSON config, new WebP, front matter updated, `TRACKER.md`.

- 2026-04-22 new FAQ: what to do when client has not clearly approved or rejected deliverables: created at `/faq/what-to-do-when-client-has-not-approved-or-rejected-deliverables/`; covers operational sequence after the stage is confirmed still open (distinct from silence FAQ and approval-definition FAQ); Hugo build clean at 77 pages (up from 76); files changed: new FAQ, `TRACKER.md`.

- 2026-04-22 offboarding workflow closeout-trigger tightening: one surgical edit to `content/client-workflow-systems/client-offboarding-workflow-for-freelancers-and-solo-service-businesses.md` — added one paragraph at end of Step 2 for the ambiguous-response scenario, linking to the approval FAQ; Hugo build clean at 76 pages; files changed: `content/client-workflow-systems/client-offboarding-workflow-for-freelancers-and-solo-service-businesses.md`, `TRACKER.md`.

- 2026-04-22 invoice/payment workflow billing-trigger tightening: one surgical edit to `content/client-workflow-systems/invoice-and-payment-workflow-setup-for-freelancers-and-consultants.md` — replaced informal-approval paragraph in Step 3 with correct billing-trigger rule (explicit approval required, not "looks good"); Hugo build clean at 76 pages; files changed: `content/client-workflow-systems/invoice-and-payment-workflow-setup-for-freelancers-and-consultants.md`, `TRACKER.md`.

- 2026-04-22 milestone delivery workflow approval-close tightening: two surgical edits to `content/client-workflow-systems/milestone-delivery-workflow-for-solo-service-businesses.md` — added approval FAQ link at end of Step 4, and clarifying sentence in Step 5 distinguishing positive feedback from formal approval; Hugo build clean at 76 pages; files changed: `content/client-workflow-systems/milestone-delivery-workflow-for-solo-service-businesses.md`, `TRACKER.md`.

- 2026-04-22 workflow anchor integration of approval FAQ: two contextual follow-on links added to `content/client-workflow-systems/sample-client-workflow.md` — Stage 4 approval-check and Stage 5 approval-ambiguity; Hugo build clean at 76 pages; files changed: `content/client-workflow-systems/sample-client-workflow.md`, `TRACKER.md`.

- 2026-04-22 new FAQ: what counts as client approval before billing or next stage: created at `/faq/what-counts-as-client-approval-before-billing-or-next-stage/`; covers whether a specific client response actually closed the stage (distinct from approval-owner definition, routing worksheet, and silence FAQ); Hugo build clean at 76 pages (up from 75); files changed: new FAQ, `TRACKER.md`.

- 2026-04-22 CRM vs PM comparison intro tightening: three surgical changes — collapsed 5-paragraph intro to 4, removed internal SEO language, renamed section heading to match established pattern, fixed routing sentence that incorrectly pointed to a narrower comparison as a "start somewhere else" option; Hugo build clean at 75 pages; files changed: `content/workflow-comparisons/sample-crm-vs-pm.md`, `TRACKER.md`.

- 2026-04-22 lean blueprint intro tightening: condensed 6 opening paragraphs to 3, moved "who" signal to paragraph 1, added operational definition of "lean budget" to paragraph 2, added CRM vs PM comparison routing to paragraph 3, removed internal SEO language, renamed heading to match established pattern; Hugo build clean at 75 pages; files changed: `content/software-stack-blueprints/sample-stack-blueprint.md`, `TRACKER.md`.

## 2026-04-21 and earlier (moved from TRACKER.md on 2026-04-26)

- 2026-04-21 workflow anchor intro tightening: tightened opening 4 paragraphs to 3, moved tool-change signal from paragraph 4 to paragraph 3, renamed "If you landed here directly" heading, added skip-ahead anchor link to `#how-to-choose-the-first-stage-to-fix`; Hugo build clean at 75 pages; files changed: `content/client-workflow-systems/sample-client-workflow.md`, `TRACKER.md`.

- 2026-04-20 topic-specific feature image pass: added 3 new Python templates (`checklist_card`, `concept_map`, `faq_card`) and 29 JSON data configs; generated 26 new WebP images across 5 groups; updated front matter in 30 content pages; Hugo build clean at 75 pages with 87 static files (30 WebPs total); files changed: new templates, new configs, new WebPs, 30 content front matter updates, `TRACKER.md`.

- 2026-04-20 client-workflow-systems feature image connector fix: fixed horizontal lines crossing through module boxes in `hub_overview.py`; regenerated `static/images/features/hubs/client-workflow-systems.webp`; Hugo build clean; files changed: `tools/feature-images/feature_images/templates/hub_overview.py`, regenerated WebP, `TRACKER.md`.

- 2026-04-20 workflow anchor 7-day plan links: added five internal links to the "First 7-day implementation plan" section; Hugo build clean at 75 pages; files changed: `content/client-workflow-systems/sample-client-workflow.md`, `TRACKER.md`.

- 2026-04-20 workflow anchor internal links: added six stage-level internal links to the "How to choose the first stage to fix" section; Hugo build clean at 75 pages; files changed: `content/client-workflow-systems/sample-client-workflow.md`, `TRACKER.md`.

- 2026-04-20 hub page redundancy cleanup: removed three redundant H2 sections from `content/client-workflow-systems/_index.md`; Hugo build clean at 75 pages; files changed: `content/client-workflow-systems/_index.md`, `TRACKER.md`.

- 2026-04-18 site name signals: added `og:site_name` and `alternateName: "Solo Ops Guide"` to the `WebSite` JSON-LD in `layouts/partials/head.html`; Hugo build clean; files changed: `layouts/partials/head.html`, `TRACKER.md`.

- 2026-04-17 operating rhythm docs: added Claude Code daily rhythm and Codex weekly/monthly review rhythm to `AGENT.md`; no Hugo build required; commit `99e701d` pushed.

- 2026-04-17 local cache ignore cleanup: updated `.gitignore` to ignore Python cache files and `.claude/settings.local.json`; removed generated `__pycache__` directories.

- 2026-04-17 tracker cleanup: reorganized `TRACKER.md` into a live working tracker and moved older detailed history into `project-docs/TRACKER-ARCHIVE.md`.

- 2026-04-17 slug and BOM stability: added explicit slugs to workflow anchor, intake guide, lean blueprint, and CRM-vs-PM comparison; removed UTF-8 BOM from workflow anchor source (`f254c19`).

- 2026-04-17 image cleanup: removed 20 unapproved orphan WebPs, leaving exactly 4 approved WebPs plus SVG fallbacks (`f3e935d`).

- 2026-04-17 deployment policy cleanup: clarified Cloudflare Pages source-build deployment and removed `public/` from tracked source (`74adfc7`).

- 2026-04-17 approved image refresh: regenerated and refined the 4 approved WebPs through the Python/Pillow workflow (`f9fffa1`, `4a28c41`).
