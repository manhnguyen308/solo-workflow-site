# SoloOpsGuide Tracker

Read this after `AGENT.md`. This is the live project tracker for current state, open priorities, and the next recommended actions.

## Current status summary

- Site: SoloOpsGuide.
- Main SEO posture: wait and watch Google Search Console after the recent crawl-cleanup and priority-signaling passes; do not broaden scope unless the current signals clearly stall.
- Indexed status currently recorded: the homepage is indexed; some lower-priority support/reference pages and utility cluster pages indexed earlier than desired; `/client-workflow-systems/` has been a key discovered-not-indexed concern.
- Priority cluster posture: the workflow cluster remains the strongest first operational path; blueprint and comparison clusters stay downstream of workflow diagnosis.
- Content structure status: homepage, hubs, cornerstone pages, and support gating have already received multiple tightening passes; support pages should stay subordinate to workflow, blueprint, and comparison pages.
- Strongest current clusters: client workflow systems, software stack blueprints, workflow comparisons.
- Current feature-image status: exactly 4 approved WebPs remain active, SVG fallbacks remain in place, the Python/Pillow workflow exists under `tools/feature-images/`, and future image polish should stay review-gated.
- Current build/deploy status: Cloudflare Pages builds from source, and `public/` is generated output that should remain ignored and untracked.
- Current repo workflow: read `AGENT.md`, read `TRACKER.md`, make a scoped change, update `TRACKER.md`, then commit and push if successful.
- Repo organization decision still in force: `AGENT.md`, `TRACKER.md`, `README.md`, and `LICENSE` stay at the repo root; non-core process/reference markdown lives under `project-docs/`.

## Active priorities

- Monitor index movement for the workflow hub and anchor before making broader SEO or content changes.
- Keep the workflow cluster as the clear first path from the homepage and hubs.
- Keep support pages intentionally subordinate so they do not outrank cornerstone workflow paths in importance or entry intent.
- Keep the approved raster-image gate narrow; do not expand beyond the current four WebPs unless new outputs pass visual review.
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

## Current deployment/build policy

- Cloudflare Pages is the deployment model and builds from source with `bash tools/build-cloudflare.sh`.
- `public/` is local/generated build output, not source of truth, and should not be committed in normal passes.
- `.gitignore` explicitly ignores `/public/`.
- Standard verification command when a build is relevant:
  - `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/`
- For docs-only passes like this tracker cleanup, a Hugo build is not required unless a non-doc source file changes by accident.

## Recent completed passes

- 2026-04-17 tracker cleanup: reorganized `TRACKER.md` into a live working tracker and moved older detailed history into [project-docs/TRACKER-ARCHIVE.md](project-docs/TRACKER-ARCHIVE.md); docs-only change, no Hugo build required.
- 2026-04-17 slug and BOM stability: added explicit slugs to the workflow anchor, intake guide, lean blueprint, and CRM-vs-PM comparison while preserving current public URLs; removed the UTF-8 BOM from the workflow anchor source (`f254c19`).
- 2026-04-17 image cleanup: removed 20 unapproved orphan WebPs, leaving exactly 4 approved WebPs plus SVG fallbacks (`f3e935d`).
- 2026-04-17 deployment policy cleanup: clarified Cloudflare Pages source-build deployment and removed `public/` from tracked source (`74adfc7`).
- 2026-04-17 approved image refresh: regenerated and then refined the 4 approved WebPs through the Python/Pillow workflow (`f9fffa1`, `4a28c41`).
- 2026-04-16 repo-guidance alignment: merged durable external guidance into `AGENT.md` without replacing repo-specific SoloOpsGuide rules (`95eb0c0`).
- 2026-04-13 to 2026-04-15 foundation work: tightened homepage and hub routing, trust pages, crawl signals, and the official feature-image workflows. See the archive for the pass-by-pass log.

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
- If a later cleanup pass is needed, the safest next docs/content-adjacent item is the remaining lower-priority sample-slug sweep.

## Historical archive / compressed log

- Detailed history now lives in [project-docs/TRACKER-ARCHIVE.md](project-docs/TRACKER-ARCHIVE.md).
- Use the archive when you need older verification notes, detailed image-workflow evolution, or commit-level historical context from the 2026-04-13 to 2026-04-17 passes.
