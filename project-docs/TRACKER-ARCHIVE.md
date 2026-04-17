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
