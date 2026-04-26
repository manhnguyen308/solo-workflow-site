# SoloOpsGuide Tracker

Read this after `AGENT.md`. This is the live project tracker for current state, open priorities, and the next recommended actions.

## Current status summary

- Site: SoloOpsGuide.
- Main SEO posture: wait and watch Google Search Console after the recent crawl-cleanup and priority-signaling passes; do not broaden scope unless the current signals clearly stall.
- Indexed status currently recorded: the homepage is indexed; some lower-priority support/reference pages and utility cluster pages indexed earlier than desired; `/client-workflow-systems/` has been a key discovered-not-indexed concern.
- Priority cluster posture: the workflow cluster remains the strongest first operational path; blueprint and comparison clusters stay downstream of workflow diagnosis.
- Content structure status: homepage, hubs, cornerstone pages, and support gating have already received multiple tightening passes; support pages should stay subordinate to workflow, blueprint, and comparison pages.
- Strongest current clusters: client workflow systems, software stack blueprints, workflow comparisons.
- Current feature-image status: 42 WebPs active across 6 categories (hubs, blueprints, comparisons, templates, glossary, faq); SVG fallbacks remain only for workflow stage pages; Python/Pillow workflow expanded with 3 new templates (`checklist_card`, `concept_map`, `faq_card`) and 15 total data configs in the templates category; the original 4 approved hero WebPs are untouched; all 15 templates/checklists pages now use topic-specific WebP images; `checklist_card` trigger-label text wrapping fixed — 8 of 15 trigger labels overflowed the 294px trigger box; all 15 images regenerated with fix applied; new `client-closeout-no-response-faq.webp` generated for the new closeout FAQ.
- Current build/deploy status: Cloudflare Pages builds from source, and `public/` is generated output that should remain ignored and untracked.
- Current repo workflow: read `AGENT.md`, read `TRACKER.md`, make a scoped change, update `TRACKER.md`, then commit and push if successful.
- Current operating rhythm: Claude Code is the daily content/improvement tool; Codex is the default weekly review/fix tool and the monthly deeper audit tool; daily Codex use is reserved for heavy build weeks or pre-AdSense submission.
- Repo organization decision still in force: `AGENT.md`, `TRACKER.md`, `README.md`, and `LICENSE` stay at the repo root; non-core process/reference markdown lives under `project-docs/`.

## Active priorities

- Monitor index movement for the workflow hub and anchor before making broader SEO or content changes.
- Keep the workflow cluster as the clear first path from the homepage and hubs.
- Keep support pages intentionally subordinate so they do not outrank cornerstone workflow paths in importance or entry intent.
- Keep the raster-image system clean; future new images should go through the `tools/feature-images/` data + generate workflow, not as ad hoc files.
- Preserve scoped-change discipline: no unrelated refactors, no `public/` commits, and no drift away from the `AGENT.md` plus `TRACKER.md` workflow.

## Current GSC/indexing status

- Most important current watch item: `/client-workflow-systems/` versus lower-priority support/reference pages that have indexed sooner.
- Recorded interpretation after the 2026-04-14 crawl/indexability audit: the site appears technically indexable, and the remaining issue is more likely crawl/index prioritization than a hard blocker such as `noindex`, broken canonicals, or robots blocking.
- Homepage-to-workflow signaling has already been tightened, including stronger workflow-first routing and cleaner priority-page URLs.
- If the workflow anchor indexes before the workflow hub, the hub may still need one more small first-screen authority pass rather than a broad site rewrite.

Priority URLs to monitor:

- `/client-workflow-systems/`
- `/software-stack-blueprints/`
- `/workflow-comparisons/`
- `/workflows/freelance-client-workflow-system-inquiry-to-final-payment/`
- `/guides/software-stack-blueprint-solo-freelancer-lean-budget/`
- `/comparisons/crm-vs-project-management-tool-for-client-workflows/`

## Current image workflow status

- Official image work should stay under `tools/`; do not treat ad hoc asset edits as the primary workflow.
- Current approved production raster path: Python 3.12 + Pillow under `tools/feature-images/`.
- Current raster gate file: `data/feature_image_raster_preferences.json`.
- Approved raster set is intentionally limited to 4 pages:
  - workflow anchor: `freelance-client-workflow-system`
  - workflow hub: `client-workflow-systems`
  - lean blueprint: `solo-freelancer-lean-budget`
  - CRM vs PM comparison: `crm-vs-project-management`
- SVG fallbacks remain for the approved set and for the rest of the feature-image library.
- The local no-API PowerShell workflow also exists under `tools/` for future model-generated image experiments, but it is not required for the current approved WebP set.
- Image visual status: the four approved WebPs were regenerated and refined on 2026-04-17; future polish may still be worthwhile, but only through the approved workflow and only after visual review.
- See `project-docs/FEATURE-IMAGE-GUIDELINES.md` for the full image workflow reference.

## Current deployment/build policy

- Cloudflare Pages is the deployment model and builds from source with `bash tools/build-cloudflare.sh`.
- `public/` is local/generated build output, not source of truth, and should not be committed in normal passes.
- `.gitignore` explicitly ignores `/public/`.
- Standard verification command when a build is relevant:
  - `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/`
- For docs-only passes, a Hugo build is not required unless a non-doc source file changes by accident.
- See `project-docs/BUILD-VALIDATION.md` for the full build/validation reference.

## Recent completed passes

- 2026-04-26 repo documentation reorganization: TRACKER.md trimmed from 83.9K to 16K by moving 2026-04-17 through 2026-04-24 pass detail to TRACKER-ARCHIVE.md; AGENT.md updated with "When to read what" table; README.md rewritten with current live-site state (removed outdated pre-launch Day 12–15 detail); two new project-docs created: `BUILD-VALIDATION.md` (build commands, environment notes, validation checklist, blocker language) and `FEATURE-IMAGE-GUIDELINES.md` (approved workflow, layout schemas, path conventions, text-overflow history, QA checklist); 11 pre-launch day-by-day docs (DAY1–DAY13, GO_LIVE_CHECKLIST) moved from project-docs/ root to project-docs/archive/; `TRACKER-ARCHIVE.md` updated with 2026-04-20 through 2026-04-24 pass summaries; no public content changed; no template, layout, or config changes; validation: `git diff --check` clean, system Hugo build passed with Hugo Extended `0.123.7`, public/ confirmed ignored.

- 2026-04-26 new features roadmap created + first feature implemented — Workflow Diagnostic Checklist: roadmap file created at `project-docs/NEW_FEATURES_ROADMAP.md` with a 6-item feature queue (diagnostic checklist, health check, approval/billing readiness checklist, stack decision readiness checklist, search improvement pass, starter pack refinement pass) including purpose, why-first notes, risk notes, and implementation rules; first feature implemented: Workflow Diagnostic Checklist at `content/templates-checklists/workflow-diagnostic-checklist.md`, public URL `/templates/workflow-diagnostic-checklist/`, slug `workflow-diagnostic-checklist`; page is a practical triage tool for readers who know something is broken but cannot name the problem category — six diagnostic categories: workflow sequence, approval/delivery, billing/payment-status, tool/system-of-record, template/execution-consistency, narrow FAQ blocker; each category has concrete signal checklist and explicit routing to the best exact upstream page; "Start upstream first if..." section gates readers with broad lifecycle problems back to the workflow anchor before using the diagnostic; "What your answers mean" routing table maps each winning category to its first page; "Do not start with software if..." warning section reinforces workflow-first posture; internal links verified: all 12 resolve; feature image config created at `tools/feature-images/feature_images/data/templates/workflow-diagnostic-checklist.json` using `checklist_card` layout, `workflow` palette, 4 diagnostic step rows (sequence / approval / billing / stack); image generated to `static/images/features/templates/workflow-diagnostic-checklist.webp` (17.0K), no warnings; two backlinks added: (1) `content/templates-checklists/_index.md` one sentence in "Best starting assets" section; (2) `content/problem-to-page-guide.md` one new row in "Definition and term problems" table; validation: `git diff --check` clean; Hugo build: `tools/hugo/v0.128.0/hugo.exe` is a Windows PE binary and cannot execute on native Linux (`Exec format error`); build risk negligible (pure markdown + static image); files changed: `content/templates-checklists/workflow-diagnostic-checklist.md` (new), `tools/feature-images/feature_images/data/templates/workflow-diagnostic-checklist.json` (new), `static/images/features/templates/workflow-diagnostic-checklist.webp` (new), `content/templates-checklists/_index.md`, `content/problem-to-page-guide.md`, `project-docs/NEW_FEATURES_ROADMAP.md` (new), `TRACKER.md`.

- 2026-04-25 cannibalization and internal-routing support check — query: crm vs project management: primary page confirmed as `content/workflow-comparisons/sample-crm-vs-pm.md` at `/comparisons/crm-vs-project-management-tool-for-client-workflows/`; files reviewed: `content/workflow-comparisons/sample-crm-vs-pm.md`, `content/workflow-comparisons/_index.md`, `content/workflow-comparisons/sample-notion-vs-clickup.md`, `content/workflow-comparisons/all-in-one-workspace-vs-specialized-stack-for-solo-operators.md`, `content/workflow-comparisons/best-home-for-billing-status-invoicing-tool-vs-system-of-record.md`, `content/workflow-comparisons/calendly-vs-built-in-booking-tools-for-solo-operators.md`, `content/workflow-comparisons/email-vs-client-portal-for-deliverables-and-approvals.md`, `content/software-stack-blueprints/sample-stack-blueprint.md`, `content/client-workflow-systems/sample-client-workflow.md`; cannibalization conclusion: none found — no other page targets "crm vs project management" in title, description, H1, or intro copy; every adjacent page explicitly scopes itself as downstream of the CRM vs PM decision; internal-routing conclusion: routing is clean throughout; no content changes needed; no commit made for content changes; TRACKER.md updated only.

- 2026-04-25 GSC response pass — CRM vs PM comparison (query: crm vs project management): GSC signal reviewed — 2 clicks, 96 impressions, 2.1% CTR, avg position 36; three surgical changes made to `content/workflow-comparisons/sample-crm-vs-pm.md`: (1) `description` updated to directly name CRM = lead tracking/follow-up/pipeline and PM = tasks/deliverables/milestones; (2) opening paragraph extended inline to name both models (CRM-first and PM-first) in the first sentence visible on-page; (3) removed internal editorial sentence from "Why this page matters first" section (AGENT.md prohibition); no URL changed, no page created, no links added or removed; validation: `git diff --check` clean; Hugo build blocked (Windows PE binary on Linux); change is pure markdown, build risk negligible; files changed: `content/workflow-comparisons/sample-crm-vs-pm.md`, `TRACKER.md`.

- 2026-04-25 weekly routing review — Workflow Starter Pack hierarchy: reviewed starter pack routing for workflow-first posture; one issue found: the starter pack's final routing paragraph softened the workflow-first hierarchy by offering the templates hub as an alternate first stop for unclear readers; changed one sentence so unclear readers return to the workflow anchor first; validation: `git diff --check` clean; Hugo build blocked (Windows PE binary on Linux); files changed: `content/templates-checklists/workflow-starter-pack.md`, `TRACKER.md`.

- 2026-04-25 worksheet bundle / starter pack page + post-publish QA + post-feature routing audit: created `content/templates-checklists/workflow-starter-pack.md` at `/templates/workflow-starter-pack/` as a bundle page grouping assets into four implementation sets; feature image generated at `static/images/features/templates/workflow-starter-pack.webp` (18.8K); two backlinks added from `content/templates-checklists/_index.md` and `content/problem-to-page-guide.md`; post-publish QA confirmed all 19 internal links resolve, feature image present and matching, subordination posture intact; post-feature routing audit found one templates-hub dead end and fixed it with one sentence routing to the Problem-to-Page Guide; validation: `git diff --check` clean; Hugo build blocked (Windows PE binary on Linux); files changed: `content/templates-checklists/workflow-starter-pack.md` (new), `tools/feature-images/feature_images/data/templates/workflow-starter-pack.json` (new), `static/images/features/templates/workflow-starter-pack.webp` (new), `content/templates-checklists/_index.md`, `content/problem-to-page-guide.md`, `TRACKER.md`.

## Deferred issues / backlog

- GSC wait/watch remains open: do not assume the indexing problem is solved until the workflow hub and related first-index pages move in Search Console.
- Duplicate page classification logic review is still deferred.
- Remaining lower-priority sample-slug cleanup is still deferred for:
  - `content/workflow-comparisons/sample-notion-vs-clickup.md`
  - `content/templates-checklists/sample-onboarding-checklist.md`
  - `content/glossary/sample-workflow-definition.md`
- PowerShell image-generator readability and cleanup remains deferred; the current approved raster path is the Python/Pillow workflow, so PowerShell cleanup is lower priority unless that path is revisited.
- Templates/checklists remain the easiest support layer to misuse if readers skip upstream workflow pages.
- A standalone `/methodology/` page is still optional, not required; current editorial-method coverage remains acceptable through `Editorial Policy` and `Content Policy`.

## Next recommended actions

- Wait for more GSC movement before making broader SEO or architecture changes.
- If the workflow hub still lags, do one very small first-screen refinement on `/client-workflow-systems/` only.
- If support pages continue to outrank cornerstone paths, audit homepage-to-workflow routing and a few already indexed support pages for stronger contextual links back into the workflow cluster.
- If feature-image work resumes, keep the raster gate at the current four approved pages unless a new output set passes visual review.
- Next roadmap feature: Client Workflow Health Check (feature #2 in `project-docs/NEW_FEATURES_ROADMAP.md`). Hold until GSC signals settle from recent CRM vs PM and diagnostic checklist passes.

## Historical archive / compressed log

- Detailed pass history from 2026-04-17 through 2026-04-24 lives in [project-docs/TRACKER-ARCHIVE.md](project-docs/TRACKER-ARCHIVE.md).
- Pre-launch day-by-day notes (Day 1–13) archived under `project-docs/archive/`.
- Use the archive when you need older verification notes, detailed image-workflow evolution, or commit-level historical context.
