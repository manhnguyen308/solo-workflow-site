# SoloOpsGuide Tracker

Read this after `AGENT.md`. This file tracks current project state, recent decisions, and what to watch next.

## Current site state

- Feature-image system is cleaned up and broadly stable.
- Homepage trust/support promotion has been removed.
- Homepage, hubs, and cornerstone paths have been tightened repeatedly for better discoverability.
- Support layer is coherent and intentionally subordinate to workflow, blueprint, and comparison clusters.
- Workflow, blueprint, and comparison backbone pages have received depth and routing passes.

## Strongest current clusters

- Client workflow systems
- Software stack blueprints
- Workflow comparisons

## Support layer status

- Templates/checklists, glossary, and FAQ now have tighter entry control.
- Support assets are sequenced around:
  - stack cleanup,
  - stage and review control,
  - blocked-work recovery.
- Main remaining risk: readers still entering templates too early.

## Important assets and pages already created

### Workflow additions completed

- client onboarding workflow
- milestone delivery workflow
- invoice/payment workflow
- client offboarding workflow
- proposal revision and approval workflow

### Comparison additions completed

- all-in-one workspace vs specialized stack
- best home for billing status: invoicing tool vs system of record

### Support assets completed

- stack audit / consolidation worksheet
- system-of-record rules worksheet
- project start readiness and handoff boundary worksheet
- approval and feedback routing worksheet
- client input dependency worksheet
- escalation and pause-state worksheet
- scope reset and recovery worksheet
- recovery update and revised plan notice template

## Current indexing situation

- Homepage is indexed.
- Some support/reference pages and utility cluster pages have indexed earlier than desired.
- Client workflow systems remains the most important cluster to push upward in crawl/index priority.
- A key current concern has been `/client-workflow-systems/` being discovered but not indexed while lower-priority support/reference pages indexed sooner.

## Current first-index priority set

These are the main pages to watch as the next cluster after the homepage:

- `/client-workflow-systems/`
- `/software-stack-blueprints/`
- `/workflow-comparisons/`
- `/workflows/freelance-client-workflow-system-inquiry-to-final-payment/`
- `/guides/software-stack-blueprint-solo-freelancer-lean-budget/`
- `/comparisons/crm-vs-project-management-tool-for-client-workflows/`

## Recent strategic decisions

- Workflow cluster should be the clearest first operational path for new readers.
- Blueprint and comparison clusters should stay downstream of workflow diagnosis.
- Support pages should be easy to find when needed, but hard to mistake for first-stop guides.
- Homepage `Start Here` and workflow-first signals have been reweighted to favor the workflow cluster.

## Recent passes completed

### High-value structural work already done

- Homepage and hub discoverability refinement
- Support-layer entry control and routing refinement
- Hub and homepage conversion-path refinement
- Templates/checklists gating refinement
- Single-page misuse-prevention refinement
- FAQ/glossary direct-entry refinement
- Browser-level UX polish and back-to-top utility
- Homepage/footer density reduction
- Homepage resource-type scanability refinement

### Trust and site-information work already done

- About, Contact, Content Policy, and Editorial Policy have all received a narrow trust-and-quality pass.
- Those pages now read more clearly as maintained editorial/trust pages rather than thin placeholders.
- Footer trust wording was lightly tightened without changing homepage or cluster-priority structure.

### Index-priority work already done

- First-index priority set strengthened across the workflow, blueprint, and comparison hubs plus cornerstone pages.
- Homepage -> workflow hub -> workflow anchor signaling was strengthened again on 2026-04-13.
- Blueprint hub now lightly reinforces routing back into the workflow hub when the process is still broad.

## What to watch in Search Console

- Whether `/client-workflow-systems/` starts indexing before or alongside the workflow anchor.
- Whether the workflow anchor becomes the strongest indexed non-homepage page.
- Whether the blueprint hub and lean blueprint begin indexing in the expected order.
- Whether support/reference pages continue to index faster than cornerstone operational pages.
- Whether homepage changes increase crawl/attention toward the workflow cluster.

## Current hypotheses

- Google can index the site, but is not yet prioritizing the strongest operational cluster consistently.
- Clearer homepage-to-workflow signaling should help re-prioritize crawl/index attention toward the workflow hub and anchor.
- If the workflow anchor indexes before the workflow hub, the hub may still need one more first-screen authority pass rather than broader site changes.

## Open issues

- The workflow hub may still be slightly weaker as a standalone indexed entry page than the workflow anchor.
- Templates/checklists remain the easiest support layer to misuse if readers skip upstream guides.
- Some hub hero intros may still feel slightly dense in live browsing, though they are functionally much improved.
- There is still no standalone `/methodology/` page; editorial method is currently carried by `Editorial Policy` and `Content Policy`, which is acceptable unless a clearer separation becomes necessary later.

## Recommended next moves

### Best next step if indexing signals improve

- Hold scope and wait for clearer Search Console movement before broadening changes.

### Best next step if the workflow hub still lags

- Do one more very small first-screen refinement on `/client-workflow-systems/` only.

### Best next step if support pages still outrank cornerstone paths

- Audit only the homepage-to-workflow path and a few already indexed support pages for stronger contextual routing back into the workflow cluster.

## Update pattern

After each future pass, add a short section with:

- pass name and date
- files changed
- what was strengthened
- build result if relevant
- follow-up items
- recommended next step

## UI polish pass - 2026-04-13

- Files changed: `static/css/main.css`, `public/css/main.css`, `public/index.html`, `TRACKER.md`
- What changed: removed the homepage resource-card paragraph width cap so all resource descriptions can use the full card width consistently; made the footer brand link an inline-block so its bottom margin creates clearer spacing above the intro paragraph.
- Why: the shared resource-card paragraph `max-width` was forcing some cards, especially Comparisons, into an unnecessarily narrow text column, and the footer spacing rule was not fully applying because the brand link remained inline.
- Verification: ran `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/` successfully after the CSS change.
- Follow-up: none.
- Recommended next step: hold scope unless another live-browsing polish issue appears in the homepage card or footer components.

## Repo docs reorganization - 2026-04-13

- What moved: non-core root markdown process/reference docs were moved into `project-docs/`; `AGENT.md`, `TRACKER.md`, `README.md`, and `LICENSE` stayed at the repo root.
- Why it was moved: to keep the root focused on the primary control files and make the repository easier to scan.
- References updated: `README.md` now points to the moved docs under `project-docs/`, and `project-docs/GO_LIVE_CHECKLIST.md` now points to `project-docs/MEASUREMENT_OPERATIONS.md`.
- Cleanup status: retired `codex-optimization-reminder.md` was removed because it was superseded by `AGENT.md` and `TRACKER.md` and had no active repo references; no further cleanup is needed.

## Trust and quality pass - 2026-04-13

- What changed: tightened the About, Contact, Content Policy, and Editorial Policy pages to make audience fit, editorial judgment, recommendation boundaries, and page-role expectations more explicit; lightly clarified the footer's lower editorial-purpose copy; added a minimal permanent post-task git hygiene rule to `AGENT.md`.
- Why it was changed: to make the trust layer feel more intentional and complete without broadening the site or disturbing the homepage and cluster-priority structure.
- Verification: ran `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/` successfully after the edits.
- Commit message used: `Improve trust and editorial clarity on site-information pages`
- Push result: `git push origin main` succeeded.
- Follow-up: no further trust-page cleanup is needed right now; there is still no standalone `/methodology/` page, which remains acceptable unless a later pass needs a clearer split from the policy pages.

## Narrow crawl and indexability audit - 2026-04-14

- Files changed: `layouts/index.html`, `layouts/_default/list.html`, `layouts/partials/page-card.html`, `layouts/partials/track-label.html`, `TRACKER.md`
- What was checked:
  - sitemap generation and inclusion of `/client-workflow-systems/`, `/workflows/freelance-client-workflow-system-inquiry-to-final-payment/`, `/guides/software-stack-blueprint-solo-freelancer-lean-budget/`, and `/comparisons/crm-vs-project-management-tool-for-client-workflows/`
  - generated `robots.txt`
  - canonical and meta robots output on the workflow hub plus the three priority leaf pages
  - homepage and hub reachability for the priority URLs
  - old assumed slug references for `sample-client-workflow`, `sample-stack-blueprint`, and `sample-crm-vs-pm`
  - unexpected public taxonomy/archive exposure; `public/terms/` remains the intended legal Terms page, not a taxonomy page
- What was fixed:
  - changed homepage priority-page lookups from old internal `sample-*` content references to the final public URLs so cornerstone links resolve from the same canonical paths Google sees
  - narrowed the homepage "Newer guides" strip to workflow, blueprint, and comparison sections only so support assets are not promoted ahead of cornerstone operational pages in a key crawl path
  - replaced file-name-derived tracking labels in homepage cards, hub cards, and hub featured links with final URL-derived labels so old sample slugs no longer leak into rendered public HTML
- Verification completed:
  - ran `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/` successfully multiple times after edits
  - confirmed `public/sitemap.xml` includes all four priority URLs
  - confirmed `public/robots.txt` is `Allow: /` with the production sitemap reference
  - confirmed canonical and meta robots on the priority hub/page outputs are canonical to their final URLs and `index,follow`
  - confirmed homepage, workflow hub, blueprint hub, and comparison hub all link to the relevant priority pages on final URLs
  - confirmed repo/public grep for `sample-client-workflow`, `sample-stack-blueprint`, and `sample-crm-vs-pm` no longer shows those values in rendered crawl paths or tracking labels
- Current GSC interpretation:
  - the site still looks technically indexable, and this pass did not uncover a hard crawl blocker such as `noindex`, robots blocking, broken canonicals, or wrong final URLs on the priority set
  - the remaining likely issue is crawl/index prioritization rather than indexability failure; the homepage and hub signals are now cleaner and less support-heavy, which should make the intended first-index cluster easier for Google to prioritize
- Commit message used: `Tighten crawl signals for priority index pages`
- Push result: `git push origin main` succeeded
- Follow-up:
  - watch whether `/client-workflow-systems/` and the workflow anchor move out of discovered-not-indexed before broadening scope again
  - if GSC still favors support pages after this pass, the next audit should stay narrow and compare internal-link prominence on already indexed support URLs versus the workflow hub and anchor

## Feature image consistency pass - 2026-04-14

- What was fixed:
  - normalized the shared feature-image display surfaces to the native `16:9` artwork ratio across cards, homepage editorial cards, hub hero images, and article/page header images
  - removed the remaining mixed-ratio framing that had been cropping the same feature image differently in different contexts
  - added `display: block` to shared feature-image elements so card and header images render without inline-image baseline gaps
- Why it was fixed:
  - the visual inconsistency was coming primarily from template/CSS framing rather than from broken image assets; the site was showing the same `1600x900` feature artwork inside several conflicting wrapper ratios such as `16:10`, `16:8`, and `16:8.8`
  - that mismatch made text blocks, diagrams, and internal spacing look randomly scaled or cramped even when the source illustration itself was reasonably aligned
- Which files/assets changed:
  - `static/css/main.css`
  - `public/css/main.css`
  - regenerated `public/` HTML affected by the shared image CSS
  - `TRACKER.md`
- Verification completed:
  - ran `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/` successfully
  - inspected generated homepage output, the `/client-workflow-systems/` hub output, and the workflow anchor output to confirm the shared feature-image wrappers now use consistent framing
  - confirmed card, hub, and article feature images continue to reference valid `/images/features/...` assets with no broken references
  - spot-checked tracked feature-image file sizes and confirmed they remain reasonable for the existing web assets
  - no feature-image asset regeneration was required in this pass because the root cause was framing inconsistency, not a broad asset-composition failure
- Commit message used: `Polish feature image consistency`
- Push result: `git push origin main` succeeded

## Homepage regression fix after feature image pass - 2026-04-14

- What was found:
  - the homepage template still contained the expected hero, editorial, resource, and `Start Here` sections, so the missing homepage pieces were not removed from the template structure itself
  - the actual regression was that several homepage priority-page lookups no longer resolved during homepage rendering, which caused the featured workflow card and three of the four `Start Here` cards to disappear from the built HTML
  - the shared `16:9` feature-image framing from the earlier pass was not the direct cause of the missing homepage content; it stayed safe to preserve for cards, homepage editorial cards, hub hero media, and article headers
- What was fixed:
  - replaced the homepage priority-page lookups for the workflow anchor, lean blueprint, and CRM-vs-PM comparison with stable `RelPermalink`-based page resolution against `.Site.RegularPages`
  - replaced the homepage workflow-hub lookup with explicit section resolution via `.Site.GetPage "section" "client-workflow-systems"` so the hub card resolves reliably
  - kept the useful `16:9` image-consistency rules in place rather than reverting the broader framing pass
- Why it was fixed:
  - the homepage should not depend on brittle page lookups that silently fail and remove key onboarding sections from the rendered output
  - using stable rendered-URL and section resolution restores the missing homepage content without rolling back the valid image-consistency improvements
- Which files/assets changed:
  - `layouts/index.html`
  - `TRACKER.md`
- Verification completed:
  - ran `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/` successfully after the template fix
  - inspected generated `public/index.html` and confirmed the homepage hero feature card renders again
  - confirmed generated homepage output still includes the editorial section, resource grid, footer CTA, and all four `Start Here` cards
  - confirmed homepage cards continue using the shared `page-card-media` framing and the editorial cards continue using the shared `homepage-editorial-media` framing
  - confirmed the priority workflow, blueprint, and comparison links now render on the homepage with their expected final URLs
- Commit message used: `Fix homepage regression from feature image framing`
- Push result: `git push origin main` succeeded

## Feature image artwork alignment refresh - 2026-04-14

- What changed:
  - replaced the source SVG artwork for the workflow cornerstone, workflow hub, lean blueprint, blueprint hub, CRM-vs-PM comparison, comparison hub, billing-status comparison, proposal revision/approval workflow, and client offboarding workflow
  - kept the existing filenames and feature-image references stable so no front matter, layout, or CSS rewiring was needed
  - kept the refresh at the asset level only; no shared framing CSS was changed in this pass
- Why it was changed:
  - the earlier framing pass fixed inconsistent crop behavior, but several key images still had uneven internal composition, cramped text blocks, inconsistent safe margins, and mixed visual density inside the artwork itself
  - these refreshed SVGs now share a tighter visual system: `16:9` canvas, consistent outer margins, larger labels, fewer micro-elements, and more balanced card/panel geometry that should read more cleanly in homepage cards, hub cards, and page headers
- Which files/assets changed:
  - `static/images/features/workflows/freelance-client-workflow-system.svg`
  - `static/images/features/hubs/client-workflow-systems.svg`
  - `static/images/features/blueprints/solo-freelancer-lean-budget.svg`
  - `static/images/features/hubs/software-stack-blueprints.svg`
  - `static/images/features/comparisons/crm-vs-project-management.svg`
  - `static/images/features/hubs/workflow-comparisons.svg`
  - `static/images/features/comparisons/billing-status-home.svg`
  - `static/images/features/workflows/proposal-revision-approval-workflow.svg`
  - `static/images/features/workflows/client-offboarding-workflow.svg`
  - regenerated matching copies under `public/images/features/...`
- Source-generation files/scripts changed:
  - none; the local image-generation scripts were reviewed but left untouched for this pass
- Verification completed:
  - ran `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/` successfully after the SVG refresh
  - confirmed generated homepage output still includes the hero feature card, editorial cards, resource grid, `Start Here` cards, and footer CTA with no recurrence of the earlier homepage regression
  - confirmed the homepage, `/client-workflow-systems/`, `/software-stack-blueprints/`, `/workflow-comparisons/`, and `/workflows/freelance-client-workflow-system-inquiry-to-final-payment/` all still reference the expected refreshed feature-image filenames
  - confirmed the refreshed images now use stable `1600x900`/`16:9` SVG canvases for the key comparison and cornerstone surfaces touched in this pass, including normalizing `billing-status-home.svg` to the same frame
  - spot-checked the refreshed SVG source files for safer text placement, larger labels, cleaner panel spacing, and more consistent internal alignment than the previous versions
- Commit message used: `Refresh feature image artwork alignment`
- Push result: `git push origin main` succeeded

## Remaining feature image artwork refinement - 2026-04-14

- What was still visually wrong:
  - the lean blueprint image still had a cramped small-text feel at card size, especially in the operating-rule area and the denser right-side support panels
  - the CRM-vs-PM comparison image still felt uneven because the left panel carried most of the visual weight while the right panel looked airier and less structured
  - both images still had a few labels and blocks that read more like miniature UI fragments than calm card-scale editorial diagrams
- What changed:
  - rebuilt the `solo-freelancer-lean-budget.svg` composition with larger internal safe margins, a clearer stage strip, a simpler baseline stack block, and shorter higher-contrast rule text
  - rebalanced `crm-vs-project-management.svg` so both halves share more even panel geometry, stronger label sizing, and more consistent callout weight at thumbnail size
  - kept the existing filenames and feature-image references stable so no front matter, slug, metadata, or layout updates were required
- Which files/assets changed:
  - `static/images/features/blueprints/solo-freelancer-lean-budget.svg`
  - `static/images/features/comparisons/crm-vs-project-management.svg`
  - regenerated matching copies under `public/images/features/blueprints/solo-freelancer-lean-budget.svg` and `public/images/features/comparisons/crm-vs-project-management.svg`
- Source-generation files/scripts changed:
  - none
- Verification completed:
  - ran `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/` successfully
  - confirmed generated homepage and hub/list output still reference the stable blueprint and CRM comparison asset paths with no broken image references in `public/`
  - visually inspected the refreshed blueprint and CRM comparison artwork as direct rendered SVGs and in a card-size local thumbnail grid alongside other homepage/card feature images to confirm the two target images now read more cleanly and feel more consistent with the surrounding set
  - checked the homepage, blueprint hub, and comparison hub outputs for the expected image references and confirmed no homepage sections were missing in the build output
- Commit message used: `Refine remaining feature image artwork`
- Push result: `git push origin main` succeeded

## Feature image simplification for card readability - 2026-04-14

- What was still wrong with the previous images:
  - the priority homepage/card images were still leaning on miniature UI text, dense labels, and tiny dashboard-style details that only worked when the art was viewed large
  - the workflow anchor, workflow hub, lean blueprint, and CRM-vs-PM comparison were visually related but still too busy at thumbnail size, so the homepage card grid did not feel as calm or premium as it should
  - follow-up spot checks showed the blueprint hub and comparison hub were still using the older text-heavier treatment, which made the hub sidebars feel inconsistent with the cleaner priority cards
- What changed:
  - rebuilt the four priority SVGs around a simpler system: larger shapes, wider safe margins, fewer internal elements, centered compositions, and almost no in-image copy beyond one short heading or comparison label where it materially helps
  - shifted the visual language away from mini dashboards and toward abstract workflow paths, stack layers, and decision panels that still communicate the page topic without requiring tiny text to be read
  - simplified the blueprint hub and workflow-comparisons hub artwork after spot-checking them in context so the hub surfaces do not fall back to the older dense style
- Which files/assets changed:
  - `static/images/features/workflows/freelance-client-workflow-system.svg`
  - `static/images/features/hubs/client-workflow-systems.svg`
  - `static/images/features/blueprints/solo-freelancer-lean-budget.svg`
  - `static/images/features/comparisons/crm-vs-project-management.svg`
  - `static/images/features/hubs/software-stack-blueprints.svg`
  - `static/images/features/hubs/workflow-comparisons.svg`
  - regenerated matching copies under `public/images/features/...`
- Source-generation files/scripts changed:
  - none
- Verification completed:
  - ran `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/` successfully after the simplification pass
  - visually inspected the priority images in a local card-size thumbnail grid to confirm the compositions now read through shape and flow instead of tiny labels
  - inspected the generated homepage at desktop width and narrower/mobile width through a local static server and confirmed the simplified cards stay balanced, readable, and uncropped in live page context
  - inspected the generated workflow hub, blueprint hub, and comparison hub and confirmed the refreshed hub artwork now aligns better with the simplified card system
  - confirmed `public/index.html`, `public/client-workflow-systems/index.html`, `public/software-stack-blueprints/index.html`, and `public/workflow-comparisons/index.html` still reference the expected stable feature-image filenames with no broken image references
  - confirmed no homepage sections disappeared during the build verification pass
- Commit message used: `Simplify feature images for card readability`
- Push result: `git push origin main` succeeded

## Feature image label readability refinement - 2026-04-14

- What text/label issues were fixed:
  - the latest simplification pass restored cleaner geometry, but some of the remaining labels were still either too generic, too few, or too small to carry the concept clearly at homepage card size
  - stage names, block labels, and comparison labels needed to stay in the art, but they had to become shorter, larger, and more structurally aligned so they read as part of the diagram instead of leftover UI text
- What was preserved:
  - kept the simpler diagram system from the prior pass: calmer layouts, larger shapes, wider safe margins, stable filenames, and no CSS/layout rewiring
  - preserved in-image text as part of the visualization instead of removing it, especially for the workflow stages, stack/upgrade cues, and the CRM-vs-PM comparison split
- What changed:
  - refined the four priority SVGs so each keeps one short title plus a few larger labels with more padding and cleaner alignment
  - reduced label count where needed, enlarged the labels that matter, and kept them away from edges and crowded intersections
  - kept the diagrams visually descriptive with workflow blocks, stage flow, comparison panels, and upgrade/handoff cues while avoiding long sentences and tiny microcopy
- Which files/assets changed:
  - `static/images/features/workflows/freelance-client-workflow-system.svg`
  - `static/images/features/hubs/client-workflow-systems.svg`
  - `static/images/features/blueprints/solo-freelancer-lean-budget.svg`
  - `static/images/features/comparisons/crm-vs-project-management.svg`
  - regenerated matching copies under `public/images/features/...`
- Source-generation files/scripts changed:
  - none
- Verification completed:
  - ran `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/` successfully
  - checked the four priority images in a local card-size preview and confirmed text is still present while reading more cleanly at thumbnail scale
  - inspected the generated homepage visually and confirmed the labels inside the four priority images remain present and more legible in the `Start Here` card grid
  - inspected the generated homepage at a narrower/mobile width and confirmed no homepage sections disappeared during the pass
  - confirmed the expected stable feature-image references remain in generated homepage and workflow-hub output with no broken image references
- Commit message used: `Refine feature image labels for readability`
- Push result: `git push origin main` succeeded

## Feature image generation workflow alignment - 2026-04-14

- Root cause of the broken text workflow:
  - the checked-in feature image generator was only producing a separate PNG set under `assets/images/features`, while the live site continued serving hand-maintained SVGs from `static/images/features`
  - that meant the script was not the real source of truth for the four priority homepage/card images, so earlier text/layout fixes could drift or be reapplied manually instead of through a repeatable workflow
  - the generator also had no SVG output path for the live assets, so text-label quality improvements in the served images were effectively outside the script pipeline
- What changed in the generation workflow:
  - extended `tools/generate-feature-images.ps1` so it now generates the served SVG assets for the four priority cards directly into `static/images/features/...`
  - kept the existing PNG generation in place, preserved stable filenames, and added UTF-8/no-BOM SVG writing with consistent trailing newlines so regenerated source assets stay clean in git
  - encoded the current priority-card compositions into the script so the workflow page, workflow hub, lean blueprint, and CRM-vs-PM comparison now have a repeatable source path instead of manual final-asset edits
  - tightened a few generated labels to make the card text shorter and calmer at thumbnail size: `Routing rules`, `Cluster map`, `Add-ons`, `Wait`, `Nurture`, and `Lead truth stays central`
- Which files/assets changed:
  - `tools/generate-feature-images.ps1`
  - `tools/generate-openai-image.ps1` (already staged in the worktree as a related image-generation helper when the task commit was created; not edited during this pass)
  - `static/images/features/workflows/freelance-client-workflow-system.svg`
  - `static/images/features/hubs/client-workflow-systems.svg`
  - `static/images/features/blueprints/solo-freelancer-lean-budget.svg`
  - `static/images/features/comparisons/crm-vs-project-management.svg`
- Source-generation files/scripts changed:
  - `tools/generate-feature-images.ps1`
  - `tools/generate-openai-image.ps1` was added in the same commit because it was already staged before the feature-image workflow changes were committed
- Verification completed:
  - ran `powershell -ExecutionPolicy Bypass -File tools/generate-feature-images.ps1 -DryRun` to confirm the script now targets both the legacy PNG outputs and the four live SVG feature assets
  - ran `powershell -ExecutionPolicy Bypass -File tools/generate-feature-images.ps1` successfully to regenerate the workflow-owned image sources
  - ran `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/` successfully after regeneration
  - confirmed generated homepage and relevant page output still reference the expected stable image paths in `public/index.html`, `public/client-workflow-systems/index.html`, `public/guides/software-stack-blueprint-solo-freelancer-lean-budget/index.html`, and `public/comparisons/crm-vs-project-management-tool-for-client-workflows/index.html`
  - confirmed no broken image references were introduced for the four priority assets and no homepage sections disappeared in the generated HTML output
  - attempted local headless screenshot capture for desktop/mobile visual inspection, but the available Edge binary on this machine did not emit screenshot files, so final verification relied on direct SVG source review plus generated-page reference checks
- Remaining image that may still need manual design review:
  - none found in this pass beyond the four priority images; the broader issue was workflow ownership rather than another separate CSS-only framing bug
- Commit message used: `Regenerate feature images with clean labels`
- Push result: `git push origin main` succeeded

## Full feature image workflow regeneration - 2026-04-14

- Root cause of the broader image-text inconsistency:
  - the existing generator still only owned a partial PNG set under `assets/images/features`, while the site actually served a much larger SVG set from `static/images/features`
  - only a handful of live SVGs had been moved into the script, so most feature images could still drift outside the workflow and stay inconsistent in text treatment, safe margins, and alignment
  - the workflow problem was larger than any single homepage card: 52 referenced feature-image SVGs existed in content, but only 24 legacy PNG scenes and 4 live SVGs were being regenerated by script
- What changed:
  - created a mirrored source tree at `tools/feature-image-templates/` and copied the full live feature-image SVG set into it as the editable source of truth
  - updated `tools/generate-feature-images.ps1` so it now regenerates all SVG feature images from that template tree into `static/images/features/...` while preserving the existing legacy PNG generation path
  - added `tools/feature-image-templates/README.md` so future passes have a clear source/workflow entry point instead of editing served SVGs directly
  - regenerated the full feature-image set through the script so the workflow now covers all referenced site, hub, workflow, blueprint, comparison, glossary, FAQ, and template images
- Scripts/templates changed:
  - `tools/generate-feature-images.ps1`
  - `tools/feature-image-templates/README.md`
  - `tools/feature-image-templates/` mirrored SVG source set covering all 52 referenced feature-image assets
- Image assets regenerated:
  - 52 referenced SVG feature images under `static/images/features/...`
  - 24 legacy PNG workflow-support assets under `assets/images/features/...`
  - regenerated SVG coverage now spans:
    - 1 site image
    - 6 hub images
    - 11 workflow images
    - 4 blueprint images
    - 6 comparison images
    - 15 template/checklist images
    - 5 glossary images
    - 4 FAQ images
- Verification completed:
  - ran `powershell -ExecutionPolicy Bypass -File tools/generate-feature-images.ps1 -DryRun` and confirmed the workflow targets 24 PNG outputs plus all 52 referenced SVG outputs
  - ran `powershell -ExecutionPolicy Bypass -File tools/generate-feature-images.ps1` successfully
  - ran `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/` successfully after the full regeneration
  - confirmed the content reference set and template set now match exactly: `refs=52`, `templates=52`, `missingTemplates=0`, `extraTemplates=0`
  - confirmed all referenced feature-image files exist in the built output: `missingPublicFiles=0`
  - confirmed generated homepage, major hub pages, and representative workflow/blueprint/comparison pages still reference the expected stable `/images/features/...svg` assets with no broken image references
  - spot-checked representative site, workflow, template, comparison, FAQ, and hub SVG sources after the migration to confirm text remains present inside the visual system and that labels stay short and aligned in the stronger current artwork set
  - direct screenshot-style visual capture is still limited on this machine because the available Edge headless binary did not emit screenshot files in the previous pass, so this verification relied on build output, reference coverage, and direct SVG source review
- Any images still needing manual design review:
  - no blocking regressions surfaced in this pass
  - optional future polish may still be worthwhile for a few lower-priority support/reference images if we want to tighten label sizing even further at card scale, but no additional image was isolated here as broken enough to block the workflow migration
- Commit message used: `Regenerate feature images with consistent labels`
- Push result: `git push origin main` succeeded

## Live feature image artwork replacement - 2026-04-15

- Why the previous workflow pass did not visibly fix the site:
  - the earlier migration made the script/template tree the formal source of truth, but it still regenerated the same broken SVG compositions, so the live images under `static/images/features/` stayed visually inconsistent even though workflow coverage improved
  - the issue was no longer file ownership; it was the actual artwork system: too many old scene variants, cramped labels, mixed composition patterns, and inconsistent spacing from image to image
- Root cause of the live design problem:
  - the live SVG set had drifted into many one-off layouts with different text density, alignment rules, and internal padding, so some cards looked acceptable while others still read like miniature UI screenshots
  - the generator was refreshing files, but not applying one strong visual system to all 52 served images
- What changed in the generation workflow:
  - updated `tools/generate-feature-images.ps1` so the SVG path now renders every live feature image from shared category-based composition logic instead of copying existing SVG templates through unchanged
  - added shared metadata, label, theme, and title-wrapping helpers so long titles now split cleanly, text stays readable, and layouts use consistent safe margins and block sizing
  - kept the legacy PNG generation intact while making the SVG workflow the real design engine for all served feature images
- Source templates changed:
  - regenerated the entire `tools/feature-image-templates/` tree from the new shared renderer so the editable template source matches the live served SVGs
- Live image assets replaced/updated:
  - all 52 live SVG feature images under `static/images/features/...`
  - proof of live-file replacement:
    - `git diff --name-only -- static/images/features | Measure-Object -Line` returned `52`
    - `git status --short -- static/images/features | Measure-Object -Line` returned `52`
  - representative priority assets directly verified after regeneration:
    - `static/images/features/workflows/freelance-client-workflow-system.svg`
    - `static/images/features/hubs/client-workflow-systems.svg`
    - `static/images/features/blueprints/solo-freelancer-lean-budget.svg`
    - `static/images/features/comparisons/crm-vs-project-management.svg`
    - `static/images/features/templates/approval-feedback-routing-worksheet.svg` (used to confirm long-title wrapping and label spacing)
- Design/artwork improvements applied across the set:
  - standardized each category around a calmer editorial diagram system with larger labels, clearer blocks, stronger internal padding, and fewer micro elements
  - kept text inside the artwork, but reduced it to short labels only and removed the cramped mini-dashboard feel from the live SVG set
  - aligned headings, cards, comparison panels, stage blocks, and supporting rails to a more consistent grid so the homepage cards and page headers now read as one family
  - added two-line title rendering for long template/reference names so they no longer stretch awkwardly across the top frame
- Verification completed:
  - ran `powershell -ExecutionPolicy Bypass -File tools/generate-feature-images.ps1 -DryRun`
  - ran `powershell -ExecutionPolicy Bypass -File tools/generate-feature-images.ps1` successfully
  - ran `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/` successfully after regeneration
  - confirmed the built homepage still references the four priority live SVGs in `public/index.html`:
    - `/images/features/workflows/freelance-client-workflow-system.svg`
    - `/images/features/hubs/client-workflow-systems.svg`
    - `/images/features/blueprints/solo-freelancer-lean-budget.svg`
    - `/images/features/comparisons/crm-vs-project-management.svg`
  - confirmed representative generated article/header pages still reference stable feature-image filenames with no broken image paths
  - directly inspected representative regenerated SVG source files and verified larger font sizes, wrapped long titles where needed, shorter labels, and wider internal spacing instead of the previous cramped layouts
  - attempted screenshot-style homepage verification, but this machine does not currently have a working lightweight local static server path for a reliable headless homepage capture; direct SVG inspection plus generated HTML reference verification was used instead of claiming a visual check that did not actually run
- Any images still needing manual design review:
  - none identified as blocked or still using the old broken compositions after this full regeneration pass
- Commit message used: `Replace feature images with aligned artwork`
- Push result:
  - `git push origin main` succeeded

## Feature image label alignment repair - 2026-04-15

- Root cause of the remaining label overlap/misalignment:
  - the SVG workflow had drifted away from the rule in `AGENT.md`: `tools/generate-feature-images.ps1` was regenerating SVGs from shared code and then overwriting the template files, so the real editable source of truth in `tools/feature-image-templates/` was effectively bypassed
  - that shared renderer reused the same line positions and text zones too aggressively, which is why some connectors sat in the same visual band as labels and some cards felt sparse while others felt cramped
- What changed:
  - restored the SVG workflow so the script now reads the checked-in template SVGs from `tools/feature-image-templates/` and regenerates the live files in `static/images/features/` from those templates instead of rewriting the templates from code
  - fully redesigned the four priority templates with cleaner spacing, larger labels, safer title placement, and connector lines moved below label zones so text is not crossed by the flow marks
  - kept filenames stable and left the rest of the site structure, content, and CSS untouched
- Templates changed:
  - `tools/feature-image-templates/workflows/freelance-client-workflow-system.svg`
  - `tools/feature-image-templates/hubs/client-workflow-systems.svg`
  - `tools/feature-image-templates/blueprints/solo-freelancer-lean-budget.svg`
  - `tools/feature-image-templates/comparisons/crm-vs-project-management.svg`
- Live image files changed:
  - `static/images/features/workflows/freelance-client-workflow-system.svg`
  - `static/images/features/hubs/client-workflow-systems.svg`
  - `static/images/features/blueprints/solo-freelancer-lean-budget.svg`
  - `static/images/features/comparisons/crm-vs-project-management.svg`
  - regenerated matching copies under `public/images/features/...`
  - proof of live-file change:
    - `git diff --name-only -- static/images/features | Measure-Object -Line` returned `4`
    - `git diff --name-only -- tools/feature-image-templates | Measure-Object -Line` returned `4`
- Verification completed:
  - ran `powershell -ExecutionPolicy Bypass -File tools/generate-feature-images.ps1` successfully
  - ran `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/` successfully
  - confirmed `public/index.html` still references the four refreshed homepage card images with stable filenames and no broken image paths
  - confirmed representative hub/article output still references the refreshed blueprint, workflow, and comparison assets
  - directly inspected the regenerated SVG source files and verified connector lines now sit below the main label baselines in the repaired designs rather than crossing through label text
  - attempted file-based screenshot capture for homepage review; the page-level `file:///` render is not reliable enough for full layout validation, so final visual verification relied on the regenerated SVG sources plus generated HTML reference checks instead of overstating a broken screenshot path
- Any remaining image needing manual redesign:
  - none identified in this pass beyond the four priority templates repaired here
- Commit message used: `Fix feature image label alignment`
- Push result:
  - `git push origin main` succeeded

## Homepage feature image redesign - 2026-04-15

- What was wrong with the previous designs:
  - the four homepage priority images were still built around the same weak composition pattern as the earlier failed attempts: small floating pills, decorative connector lines, sparse center-weighted layouts, and labels that looked more like leftover UI fragments than intentional editorial diagrams
  - repeated readability fixes had made the files technically cleaner, but they did not solve the real design problem: the compositions still felt patched, amateur, and too dependent on awkward lines and tiny supporting marks to explain the concept
  - at homepage card size, the old images still read like mini dashboards instead of premium, calm workflow graphics
- What changed:
  - fully replaced the source template artwork for the four homepage priority images under `tools/feature-image-templates/` instead of adjusting the prior layouts again
  - regenerated the live served SVGs under `static/images/features/` through `tools/generate-feature-images.ps1` and rebuilt the site so the homepage now uses the new template-driven compositions with stable filenames
- New layout approach used for each image:
  - `Freelance Client Workflow System`: rebuilt as a simple horizontal process map with four large stage cards and connector arrows kept in their own center lane so no line crosses label text
  - `Client Workflow Systems hub`: rebuilt as a clean system-map board with one dark left anchor panel and four aligned stage cards on the right, using short horizontal rails instead of floating connector marks
  - `Software Stack Blueprint`: rebuilt as calm stacked cards with one dominant core-stack panel and a tidy support column for automation and add-ons later, removing the old busy mini-lane treatment
  - `CRM vs Project Management comparison`: rebuilt as a minimal two-column comparison board with balanced left/right panels and four large labels instead of mixed pills, arrows, and uneven internal weight
- Files changed:
  - `tools/feature-image-templates/workflows/freelance-client-workflow-system.svg`
  - `tools/feature-image-templates/hubs/client-workflow-systems.svg`
  - `tools/feature-image-templates/blueprints/solo-freelancer-lean-budget.svg`
  - `tools/feature-image-templates/comparisons/crm-vs-project-management.svg`
  - `static/images/features/workflows/freelance-client-workflow-system.svg`
  - `static/images/features/hubs/client-workflow-systems.svg`
  - `static/images/features/blueprints/solo-freelancer-lean-budget.svg`
  - `static/images/features/comparisons/crm-vs-project-management.svg`
  - regenerated matching copies under `public/images/features/...`
- Verification completed:
  - ran `powershell -ExecutionPolicy Bypass -File tools/generate-feature-images.ps1` successfully
  - confirmed the live files under `static/images/features/` changed for all four homepage priority assets after regeneration
  - ran `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/` successfully
  - confirmed generated homepage and representative workflow/hub/blueprint/comparison pages still reference the stable feature-image filenames with no broken image references
  - captured and reviewed rendered homepage screenshots through a temporary local PowerShell HTTP listener plus Edge headless screenshot output, then checked the `Start Here` card grid visually
  - confirmed the four homepage images now read cleanly at card size, keep larger readable labels, use more balanced spacing, avoid awkward connector lines, and no homepage section disappeared during the build/render pass
- Commit message used: `Redesign homepage feature images`
- Push result:
  - commit `ea6999d` pushed successfully with `git push origin main`
- Follow-up:
  - hold scope unless another live card-size visual issue appears in the homepage `Start Here` grid
- Recommended next step:
  - let the new editorial image system settle unless a later pass needs equally strong redesign work for non-homepage feature images

## Image-model feature image workflow setup - 2026-04-15

- Why this pass was needed:
  - the homepage priority images have now failed enough SVG/layout review passes that the problem is no longer small alignment cleanup; the repo needed a first-class image-model workflow under `tools/` so the four homepage cards can move away from brittle text-and-diagram art
  - the permanent feature-image rule in `AGENT.md` was outdated because it only allowed the old SVG/template path and did not reflect the new requirement to prefer image-model generation when scripted diagrams keep failing visual review
- What changed:
  - replaced `tools/generate-openai-image.ps1` with a manifest-driven image-model workflow that reads prompt entries, supports `-DryRun` and optional `-Id` filtering, calls the OpenAI image API, and writes final center-cropped `1600x900` PNG assets into `static/images/features/...`
  - added `tools/feature-image-prompts/homepage-feature-images.json` as the tracked prompt source for the four homepage priority images
  - updated `layouts/partials/feature-image.html` so feature-image rendering can prefer a generated raster sibling such as `.png` when one exists, while leaving existing `.svg` references untouched until real raster outputs are present
  - updated `AGENT.md` so the durable repo rule now points to the official image workflow under `tools/`, allows image-model generation when SVG repeatedly fails review, and requires visual verification instead of file-count-only success claims
- Exact prompts created:
  - `freelance-client-workflow-system`: premium editorial SaaS-style illustration representing inquiry -> scope -> delivery -> payment with four large connected zones, calm digital workspace context, and no labels or tiny UI text
  - `client-workflow-systems-hub`: premium editorial workflow-systems illustration with one central operating system and four surrounding modules implying intake, delivery, billing, and offboarding through shape and composition rather than text
  - `software-stack-blueprint`: premium editorial illustration for a lean tool stack using a small number of layered core-system surfaces plus clearly secondary add-ons later
  - `crm-vs-project-management`: premium editorial comparison illustration with a balanced split between client record ownership and project execution flow, using objects and panels instead of labels
  - full prompt text is tracked in `tools/feature-image-prompts/homepage-feature-images.json`
- What blocked live image replacement:
  - API/auth was partially available because `OPENAI_API_KEY` was set, but the first live generation call failed immediately with OpenAI API error `billing_hard_limit_reached`
  - because generation failed before the first image completed, no new `.png` feature files were created and the four homepage priority assets were not replaced in this pass
- Verification completed:
  - ran `powershell -ExecutionPolicy Bypass -File tools/generate-openai-image.ps1 -DryRun` successfully and confirmed the four intended output targets in `static/images/features/...`
  - attempted the real generation run with `powershell -ExecutionPolicy Bypass -File tools/generate-openai-image.ps1`; the run failed on the first image because the OpenAI account for this environment has hit a billing hard limit
  - confirmed the four intended output PNG files do not exist after the failed run, so no fake asset replacement occurred
  - ran `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/` successfully after the workflow/tooling changes
  - confirmed the generated homepage and representative workflow/hub/blueprint/comparison pages still reference the existing stable `.svg` feature-image paths, so no broken image references were introduced
  - captured a rendered homepage screenshot through a temporary local HTTP listener and verified the homepage still renders with all major sections visible; the old SVG card style is still present because the new raster assets could not be generated yet
- Files changed:
  - `AGENT.md`
  - `tools/generate-openai-image.ps1`
  - `tools/feature-image-prompts/homepage-feature-images.json`
  - `layouts/partials/feature-image.html`
- Commit message used: `Add image model workflow for feature images`
- Push result:
  - commit `00eef6b` pushed successfully with `git push origin main`
- Manual action required:
  - this OpenAI-specific follow-up has now been superseded by the local no-API workflow added later on 2026-04-15
- Recommended next step:
  - use the local backend workflow under `tools/generate-local-feature-images.ps1` instead of reviving the OpenAI billing path

## Local no-API feature image workflow replacement - 2026-04-15

- What was found:
  - the tracked raster feature-image path still depended on `tools/generate-openai-image.ps1`, which meant the repo's preferred image-model workflow could fail for billing or API-key reasons instead of running fully on the user's own machine
  - Hugo-side image preference logic was already in a good place because `layouts/partials/feature-image.html` can prefer a generated raster sibling such as `.png` when it exists, so the real gap was the generation pipeline rather than the site templates
  - no local Automatic1111 or ComfyUI endpoint was available in this environment at verification time, so live generation could not be claimed honestly here
- What changed:
  - added `tools/generate-local-feature-images.ps1` as the new manifest-driven local raster workflow with support for `-All`, `-Id`, `-DryRun`, backend/profile selection, local endpoint overrides, safe temp writes, and final center-crop/resize to `1600x900`
  - added `tools/feature-image-local-config.json` with tracked local backend profiles for `homepage-a1111` and `homepage-comfyui`
  - added `tools/feature-image-backends/comfyui-feature-image-workflow.json` as the starter ComfyUI API workflow template and `tools/README-feature-images.md` with local setup and run instructions
  - updated `tools/feature-image-prompts/homepage-feature-images.json` to act as the tracked local manifest for the four homepage priority images with stable output paths under `static/images/features/`
  - deprecated `tools/generate-openai-image.ps1` into a pointer shim so the repo no longer depends on OpenAI API auth as the active feature-image path
  - updated `AGENT.md` and `tools/feature-image-templates/README.md` so the permanent repo guidance now prefers the local no-API workflow while keeping the existing SVG/template workflow available under `tools/`
- Files changed:
  - `AGENT.md`
  - `tools/generate-local-feature-images.ps1`
  - `tools/feature-image-local-config.json`
  - `tools/feature-image-backends/comfyui-feature-image-workflow.json`
  - `tools/feature-image-prompts/homepage-feature-images.json`
  - `tools/README-feature-images.md`
  - `tools/feature-image-templates/README.md`
  - `tools/generate-openai-image.ps1`
- Verification completed:
  - ran `powershell -ExecutionPolicy Bypass -File tools/generate-local-feature-images.ps1 -All -DryRun` successfully and confirmed all four homepage image IDs resolve to stable output paths in `static/images/features/...`
  - ran `powershell -ExecutionPolicy Bypass -File tools/generate-local-feature-images.ps1 -Id freelance-client-workflow-system -DryRun` successfully and confirmed single-image manifest targeting works
  - probed `http://127.0.0.1:7860/sdapi/v1/options` and `http://127.0.0.1:8188/system_stats`; both endpoints were unreachable in this environment, so no local backend was available for real generation
  - attempted one truthful real run with `powershell -ExecutionPolicy Bypass -File tools/generate-local-feature-images.ps1 -Id freelance-client-workflow-system`; it failed cleanly with `Unable to connect to the remote server`, produced `0` generated images, and did not replace any live asset
  - ran `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/` successfully after the workflow replacement
- Old OpenAI tooling status:
  - deprecated cleanly in favor of the local workflow; the old entrypoint now exists only as a short shim that directs future runs to `tools/generate-local-feature-images.ps1`
- Commit message used:
  - `Add local feature image generation workflow`
- Push result:
  - implementation commit `80fa879` pushed successfully with `git push origin main`
- Follow-up:
  - if the user wants actual replacement PNGs, they still need to install and run either Automatic1111 with API enabled or ComfyUI locally, set the desired checkpoint/profile in `tools/feature-image-local-config.json`, and rerun the local script
- Recommended next step:
  - once a local backend is running, generate at least the four homepage images, visually review the outputs at homepage card size, and only keep any replacements that are genuinely stronger than the current SVGs

## Single-image local backend test pass - 2026-04-15

- What was checked:
  - the current local image workflow files under `tools/`, including the main script, tracked backend config, prompt manifest, and local workflow README
  - the Hugo-side preference logic in `layouts/partials/feature-image.html` to confirm the site will switch from `.svg` to `.png` automatically when a real generated raster sibling exists
  - local backend reachability for both configured profiles:
    - Automatic1111 at `http://127.0.0.1:7860`
    - ComfyUI at `http://127.0.0.1:8188`
- What changed:
  - added an explicit `-TestBackend` mode to `tools/generate-local-feature-images.ps1` so one image or one profile can be connectivity-checked before running generation
  - improved generation-time failure messages so the script now reports the backend type, endpoint URL, and the exact startup action needed when the local backend is unavailable
  - updated `tools/README-feature-images.md` to document the backend connectivity test step before attempting generation
- Files changed:
  - `tools/generate-local-feature-images.ps1`
  - `tools/README-feature-images.md`
  - `TRACKER.md`
- Intended active backend:
  - the tracked default profile still points to Automatic1111 (`homepage-a1111`) as the preferred Windows local backend
  - ComfyUI remains supported as the alternate profile
- Verification completed:
  - ran `powershell -ExecutionPolicy Bypass -File tools/generate-local-feature-images.ps1 -Id freelance-client-workflow-system -DryRun` successfully
  - ran `powershell -ExecutionPolicy Bypass -File tools/generate-local-feature-images.ps1 -Id freelance-client-workflow-system -TestBackend`; it failed cleanly because `http://127.0.0.1:7860` was unreachable
  - ran `powershell -ExecutionPolicy Bypass -File tools/generate-local-feature-images.ps1 -Id freelance-client-workflow-system -Profile homepage-comfyui -TestBackend`; it failed cleanly because `http://127.0.0.1:8188` was unreachable
  - checked local machine state and found no listening ports on `7860` or `8188`, and no obvious local WebUI/Comfy process to reuse
  - attempted the real one-image generation with `powershell -ExecutionPolicy Bypass -File tools/generate-local-feature-images.ps1 -Id freelance-client-workflow-system`; it failed honestly with:
    - `automatic1111 backend at http://127.0.0.1:7860 is not reachable. Start Automatic1111 / Stable Diffusion WebUI with API enabled, for example: webui-user.bat --api`
  - confirmed `static/images/features/workflows/freelance-client-workflow-system.png` does not exist after the failed run, so no fake output was created and no live file was replaced
  - ran `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/` successfully after the workflow improvements
  - confirmed the generated homepage and workflow anchor outputs still reference `/images/features/workflows/freelance-client-workflow-system.svg`, which is correct because no real `.png` replacement exists yet
  - confirmed no homepage sections disappeared and no broken image references were introduced in the built output
- Exact blocker:
  - no reachable local image backend is running in this environment; both configured endpoints refuse connection, so one real generated homepage image could not be produced here
- Manual local step still required:
  - start Automatic1111 with API enabled, for example `webui-user.bat --api`, or start ComfyUI on the configured endpoint, then rerun:
    - `powershell -ExecutionPolicy Bypass -File tools/generate-local-feature-images.ps1 -Id freelance-client-workflow-system -TestBackend`
    - `powershell -ExecutionPolicy Bypass -File tools/generate-local-feature-images.ps1 -Id freelance-client-workflow-system`
- Commit message used:
  - `Finish local feature image test workflow`
- Push result:
  - commit `05e4e58` pushed successfully with `git push origin main`
- Recommended next step:
  - once one backend passes `-TestBackend`, generate only `freelance-client-workflow-system`, rebuild Hugo, and verify the homepage flips from the current `.svg` to the new `.png` before generating anything else

## Reusable code-generated feature image workflow - 2026-04-15

- What workflow was added or changed:
  - added a reusable Python-based feature-image system under `tools/feature-images/` with shared helpers, reusable templates, per-image JSON configs, and simple one-image, batch, and full-regeneration entrypoints
  - kept the existing SVG files as stable fallbacks while migrating a small production-safe sample set of homepage priority images to code-generated `webp`
  - added a minimal Hugo preference gate through `data/feature_image_raster_preferences.json` so only reviewed generated raster outputs are activated instead of turning on every legacy sidecar image at once
  - kept the local backend workflow under `tools/` available for model-generated work, but introduced the new Python workflow as the maintainable code-generated path for editorial diagram images
- Dependency detection / installation:
  - checked the preferred Python path first: `C:\Users\vboxuser\AppData\Local\Programs\Python\Python312\python.exe`
  - confirmed Python was already usable: `Python 3.12.10`
  - confirmed Pillow was already installed from that Python: `12.2.0`
  - no installation commands were needed because the required dependencies were already available
- Files created or updated:
  - created `tools/feature-images/README.md`
  - created `tools/feature-images/requirements.txt`
  - created entrypoints:
    - `tools/feature-images/generate_one.py`
    - `tools/feature-images/generate_many.py`
    - `tools/feature-images/generate_all.py`
  - created shared modules under `tools/feature-images/feature_images/`:
    - `palette.py`
    - `fonts.py`
    - `canvas.py`
    - `drawing.py`
    - `exporter.py`
    - `validation.py`
    - `specs.py`
    - `cli.py`
  - created reusable templates under `tools/feature-images/feature_images/templates/`:
    - `workflow_map.py`
    - `hub_overview.py`
    - `stack_blueprint.py`
    - `comparison_split.py`
    - `timeline_cover.py`
  - created per-image JSON configs under `tools/feature-images/feature_images/data/` for:
    - `workflows/freelance-client-workflow-system`
    - `hubs/client-workflow-systems`
    - `blueprints/solo-freelancer-lean-budget`
    - `comparisons/crm-vs-project-management`
  - created `tools/feature-images/custom/README.md` to document the custom-generator escape hatch
  - updated `tools/README-feature-images.md`
  - updated `layouts/partials/feature-image.html`
  - added `data/feature_image_raster_preferences.json`
  - generated sample outputs in `static/images/features/...` and regenerated matching built assets under `public/images/features/...`
- Sample migrated images completed:
  - `static/images/features/workflows/freelance-client-workflow-system.webp`
  - `static/images/features/hubs/client-workflow-systems.webp`
  - `static/images/features/blueprints/solo-freelancer-lean-budget.webp`
  - `static/images/features/comparisons/crm-vs-project-management.webp`
- Verification completed:
  - ran one-image generation:
    - `C:\Users\vboxuser\AppData\Local\Programs\Python\Python312\python.exe tools/feature-images/generate_one.py --id freelance-client-workflow-system`
  - ran batch generation by category:
    - `C:\Users\vboxuser\AppData\Local\Programs\Python\Python312\python.exe tools/feature-images/generate_many.py --category workflows`
  - ran full regeneration:
    - `C:\Users\vboxuser\AppData\Local\Programs\Python\Python312\python.exe tools/feature-images/generate_all.py`
  - confirmed the four migrated sample outputs exist, are valid `1600x900` `webp` files, and have stable SEO-friendly filenames
  - directly reviewed representative generated outputs visually from the local filesystem to confirm the sample set renders as intentional code-generated editorial graphics rather than broken placeholder files
  - ran `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/` successfully after the integration changes
  - confirmed the built homepage, workflow anchor, blueprint page, comparison page, and workflow hub now reference the migrated sample `webp` files
  - confirmed the homepage still includes the expected major sections including the `Start Here` grid and the resource-card block, with no section disappearance introduced by the feature-image changes
- Commit message used:
  - `Add reusable code-generated feature image workflow`
- Push result:
  - commit `bd18a1e` pushed successfully with `git push origin main`
- Recommended next step:
  - extend the new `tools/feature-images/feature_images/data/` config set gradually, activate additional images through `data/feature_image_raster_preferences.json` only after visual review, and keep custom generators rare

## Four priority homepage feature image polish pass - 2026-04-16

- What was changed:
  - tightened the shared code-generated templates used by the four homepage priority images instead of introducing one-off manual asset edits
  - improved the workflow-map composition with cleaner connector framing, wider card spacing, and steadier note-box placement
  - improved the hub-overview composition by wrapping the anchor title safely, softening the connector structure, and giving the stage cards more room
  - improved the stack-blueprint composition by giving the stack tiers and trigger cards more breathing room and trimming the densest copy
  - improved the comparison-split composition by preventing the decision strip from colliding with the lower comparison rows and turning the small side notes into clearer pills
- Shared helpers/templates updated:
  - `tools/feature-images/feature_images/fonts.py`
  - `tools/feature-images/feature_images/templates/workflow_map.py`
  - `tools/feature-images/feature_images/templates/hub_overview.py`
  - `tools/feature-images/feature_images/templates/stack_blueprint.py`
  - `tools/feature-images/feature_images/templates/comparison_split.py`
- Per-image configs updated:
  - `tools/feature-images/feature_images/data/hubs/client-workflow-systems.json`
  - `tools/feature-images/feature_images/data/blueprints/solo-freelancer-lean-budget.json`
  - `tools/feature-images/feature_images/data/comparisons/crm-vs-project-management.json`
- Which of the 4 images were fixed:
  - `freelance-client-workflow-system`
  - `client-workflow-systems-hub` via `client-workflow-systems`
  - `software-stack-blueprint` via `solo-freelancer-lean-budget`
  - `crm-vs-project-management`
- Custom exception images introduced:
  - none; all four stayed on the shared reusable workflow
- Files regenerated:
  - `static/images/features/workflows/freelance-client-workflow-system.webp`
  - `static/images/features/hubs/client-workflow-systems.webp`
  - `static/images/features/blueprints/solo-freelancer-lean-budget.webp`
  - `static/images/features/comparisons/crm-vs-project-management.webp`
  - matching built copies under `public/images/features/...`
- Verification completed:
  - confirmed Python remained available at `C:\Users\vboxuser\AppData\Local\Programs\Python\Python312\python.exe`
  - regenerated only the four priority images with `tools/feature-images/generate_one.py --id ...`
  - visually reviewed all four generated `webp` outputs directly from the filesystem after regeneration and refined the weaker blueprint/comparison compositions again before closing the pass
  - ran `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/` successfully
  - confirmed the built homepage references the four regenerated raster assets:
    - `/images/features/workflows/freelance-client-workflow-system.webp`
    - `/images/features/hubs/client-workflow-systems.webp`
    - `/images/features/blueprints/solo-freelancer-lean-budget.webp`
    - `/images/features/comparisons/crm-vs-project-management.webp`
  - confirmed the built homepage still includes the `Start Here` section and the surrounding homepage sections with no broken image references introduced
- Commit message used:
  - `Improve four priority homepage feature images`
- Push result:
  - implementation commit `3e73070` pushed successfully with `git push origin main`

## AGENT guidance merge pass - 2026-04-16

- What changed:
  - merged the durable operating guidance from the external `CLAUDE.md` source into `AGENT.md` without adding a separate generic instruction block
  - strengthened `AGENT.md` around explicit assumptions/uncertainty handling, simplicity-first execution, surgical edits, and goal-driven verification
- Files changed:
  - `AGENT.md`
  - `TRACKER.md`
- Verification completed:
  - reviewed the exact external source file at `https://github.com/forrestchang/andrej-karpathy-skills/blob/main/CLAUDE.md` and used the raw GitHub content to avoid HTML noise
  - confirmed `AGENT.md` still reads as one coherent SoloOpsGuide operating manual
  - confirmed no major duplication was introduced and repo-specific workflow/image/git rules still remain the controlling guidance
- Commit message used:
  - `Merge external CLAUDE guidance into AGENT`
- Push result:
  - implementation commit `95eb0c0` pushed successfully with `git push origin main`

## Stable sample slug pass - 2026-04-17

- Files changed:
  - `content/client-workflow-systems/sample-client-workflow.md`
  - `content/client-workflow-systems/sample-intake-guide.md`
  - `content/software-stack-blueprints/sample-stack-blueprint.md`
  - `content/workflow-comparisons/sample-crm-vs-pm.md`
  - `TRACKER.md`
- What was fixed:
  - added explicit `slug` front matter to the workflow anchor page while preserving its existing built URL: `/workflows/freelance-client-workflow-system-inquiry-to-final-payment/`
  - added explicit `slug` front matter to the intake guide, lean blueprint, and CRM-vs-PM comparison while preserving their existing built URLs
  - removed the UTF-8 BOM from `content/client-workflow-systems/sample-client-workflow.md`
- What was intentionally deferred:
  - left `content/workflow-comparisons/sample-notion-vs-clickup.md`, `content/templates-checklists/sample-onboarding-checklist.md`, and `content/glossary/sample-workflow-definition.md` untouched in this pass because they were lower-priority than the workflow anchor, intake guide, blueprint, and CRM-vs-PM pages
  - left the larger review items alone as requested: duplicated page classification logic, `public/` deployment strategy decisions, orphaned `webp` cleanup, PowerShell generator rewrites, and broad SEO/content changes
  - `content/faq/sample-stack-faq.md` already had an explicit `slug`, so no change was needed
- Verification completed:
  - ran `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/` successfully after the content changes
  - confirmed with `tools/hugo/v0.128.0/hugo.exe list all` that the touched sample pages still resolve to the exact same permalinks as before:
    - `/workflows/freelance-client-workflow-system-inquiry-to-final-payment/`
    - `/workflows/how-to-build-a-client-intake-and-qualification-workflow/`
    - `/guides/software-stack-blueprint-solo-freelancer-lean-budget/`
    - `/comparisons/crm-vs-project-management-tool-for-client-workflows/`
  - confirmed the built anchor workflow output still exists at `public/workflows/freelance-client-workflow-system-inquiry-to-final-payment/index.html`
  - confirmed the anchor workflow source file no longer has a BOM
  - confirmed no front matter parse issue or Hugo build regression occurred in this pass
- Commit message used:
  - `Stabilize sample content slugs and remove BOM`
- Push result:
  - `git push origin main` succeeded

## Orphan WebP cleanup pass - 2026-04-17

- Files changed:
  - removed orphaned source WebPs under `static/images/features/`
  - removed matching stale built WebPs under `public/images/features/`
  - `TRACKER.md`
- Which WebP files were removed:
  - `static/images/features/blueprints/consultant-va-collaboration.webp`
  - `static/images/features/blueprints/migrate-from-scattered-tools.webp`
  - `static/images/features/comparisons/notion-vs-clickup.webp`
  - `static/images/features/faq/solo-service-workflow-stack-faq.webp`
  - `static/images/features/glossary/system-of-record.webp`
  - `static/images/features/glossary/workflow-handoff.webp`
  - `static/images/features/hubs/faq.webp`
  - `static/images/features/hubs/glossary.webp`
  - `static/images/features/hubs/software-stack-blueprints.webp`
  - `static/images/features/hubs/templates-checklists.webp`
  - `static/images/features/hubs/workflow-comparisons.webp`
  - `static/images/features/site/soloopsguide-home.webp`
  - `static/images/features/templates/client-offboarding-template.webp`
  - `static/images/features/templates/client-onboarding-checklist.webp`
  - `static/images/features/templates/delivery-qa-checklist.webp`
  - `static/images/features/templates/invoice-payment-checklist.webp`
  - `static/images/features/templates/weekly-client-operations.webp`
  - `static/images/features/workflows/client-intake-qualification-workflow.webp`
  - `static/images/features/workflows/proposal-contract-handoff.webp`
  - `static/images/features/workflows/workflow-automation-basics.webp`
  - matching built copies were also removed under `public/images/features/` for the same 20 filenames
- Why they were removed:
  - they were not part of the approved raster gate in `data/feature_image_raster_preferences.json`
  - repo-wide search outside `public/` and `static/images/features/` showed no direct references to those orphan WebPs
  - matching SVG fallbacks remained in place for every removed source image, so removing the orphan WebPs did not remove the site's fallback artwork
- Which files were intentionally kept:
  - kept `static/images/features/workflows/freelance-client-workflow-system.webp` and `public/images/features/workflows/freelance-client-workflow-system.webp` because the workflow anchor is explicitly approved through the raster preference gate and still used by the site
  - kept `static/images/features/hubs/client-workflow-systems.webp` and `public/images/features/hubs/client-workflow-systems.webp` because the workflow hub is explicitly approved through the raster preference gate and still used by the site
  - kept `static/images/features/blueprints/solo-freelancer-lean-budget.webp` and `public/images/features/blueprints/solo-freelancer-lean-budget.webp` because the lean blueprint is explicitly approved through the raster preference gate and still used by the site
  - kept `static/images/features/comparisons/crm-vs-project-management.webp` and `public/images/features/comparisons/crm-vs-project-management.webp` because the CRM-vs-PM comparison is explicitly approved through the raster preference gate and still used by the site
- `feature_image_raster_preferences.json` status:
  - unchanged; it already matched the approved four-image raster set
- Verification completed:
  - ran `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/` successfully after the cleanup
  - confirmed only the four approved WebPs remain under both `static/images/features/` and `public/images/features/`
  - confirmed repo search no longer finds references to the deleted orphan WebPs outside the deleted paths themselves
  - confirmed the deleted WebPs' SVG fallbacks still exist under `static/images/features/`
  - confirmed the homepage, workflow hub, blueprint hub, comparison hub, and workflow anchor still build with approved WebP references where expected
  - confirmed removed workflow/hub cards now fall back cleanly to their SVG feature images instead of broken raster references
- Commit message used:
  - `Remove unapproved orphaned WebP feature images`
- Push result:
  - `git push origin main` succeeded

## Public build output policy pass - 2026-04-17

- Deployment path evidence found:
  - `README.md` explicitly directs deployment through Cloudflare Pages with build command `bash tools/build-cloudflare.sh`, `SITE_URL`, and output directory `public`
  - `tools/build-cloudflare.sh` deletes `public/` and rebuilds it from source with Hugo using `SITE_URL` or `CF_PAGES_URL`
  - `config.toml` states that production `baseURL` is supplied at build time in Cloudflare instead of being fixed in source
  - `project-docs/DAY13_DEPLOYMENT_CHECKLIST.md` and `project-docs/GO_LIVE_CHECKLIST.md` both describe Cloudflare Pages source-build deployment using `public` as the build output directory
- Decision made about `public/`:
  - `public/` should not remain tracked in git for this repo
  - the repo clearly deploys as a Cloudflare Pages source-build site, so `public/` is generated output rather than deployment source of truth
- What changed:
  - added `.gitignore` with a `public/` ignore rule
  - updated `AGENT.md` so future passes know `public/` is generated output and should not be committed in normal repo work
  - updated `README.md` to clarify that `public/` is local verification output and Cloudflare Pages builds it from source
  - removed tracked `public/` files from git using the index-only method `git rm -r --cached public` so the files stay available locally but stop being committed
- Whether `public/` remains tracked:
  - no; `git ls-files public` now returns `0`
  - local `public/` output still exists after a rebuild, but it is now ignored/generated rather than tracked source
- Verification completed:
  - ran `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/` successfully after the policy cleanup
  - confirmed `public/` was regenerated locally after the build and source files outside the policy/docs changes were left intact
  - confirmed `.gitignore` matches generated output with `git check-ignore -v public/index.html` and `git check-ignore -v public/images/features/workflows/freelance-client-workflow-system.webp`
  - confirmed `git status` no longer shows fresh generated `public/` noise beyond the intentional staged removal of tracked `public/` files for this one-time cleanup commit
- Files changed:
  - `.gitignore`
  - `AGENT.md`
  - `README.md`
  - `TRACKER.md`
  - tracked `public/` files removed from the git index
- Recommended next step:
  - keep validating local Hugo output in `public/` during verification, but do not commit `public/` again unless the deployment model itself changes
- Commit message used:
  - `Clarify public build output policy`
- Push result:
  - `git push origin main` succeeded

## Four approved feature image regeneration pass - 2026-04-17

- Tool/workflow used:
  - Python 3.12 + Pillow via `tools/feature-images/generate_one.py` (the official Python/WebP workflow)
- Images regenerated:
  - `static/images/features/workflows/freelance-client-workflow-system.webp`
  - `static/images/features/hubs/client-workflow-systems.webp`
  - `static/images/features/blueprints/solo-freelancer-lean-budget.webp`
  - `static/images/features/comparisons/crm-vs-project-management.webp`
- Source changes made before regeneration:
  - `tools/feature-images/feature_images/data/workflows/freelance-client-workflow-system.json`: fixed `signal_note.title` from internal planning text ("What this image should imply") to user-facing copy ("Lifecycle view"); fixed `signal_note.body` to proper editorial label
  - `tools/feature-images/feature_images/templates/comparison_split.py`: fixed item row spacing from `index * 72` to `index * 64` to prevent 8px overflow past panel boundary; added center visual separator (two short vertical rule segments + "vs" pill badge) in the 156px gap between left and right panels
  - `tools/feature-images/feature_images/templates/workflow_map.py`: shifted note boxes from y=654–760 to y=664–778 for 10px more breathing room from the card panel above; updated all interior text positions accordingly; text bounds tightened to fit new height
- Which webps actually changed vs stayed identical:
  - `freelance-client-workflow-system.webp`: changed (signal_note content + note box position shifted)
  - `crm-vs-project-management.webp`: changed (item spacing fix + center divider added)
  - `client-workflow-systems.webp`: regenerated, identical output (hub_overview template and JSON unchanged — already correct)
  - `solo-freelancer-lean-budget.webp`: regenerated, identical output (stack_blueprint template and JSON unchanged — already correct)
- No orphan WebPs were created. Still exactly 4 WebPs in `static/images/features/`.
- SVG fallbacks confirmed present for all 4 images.
- Verification completed:
  - ran `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/` successfully (75 pages, no errors)
  - confirmed `public/` is gitignored and clean
  - confirmed homepage references all 4 webp assets: `freelance-client-workflow-system.webp`, `client-workflow-systems.webp`, `solo-freelancer-lean-budget.webp`, `crm-vs-project-management.webp`
  - confirmed no homepage sections disappeared and no broken image references in the build output
- Commit message used:
  - `Regenerate four approved feature images`
- Push result:
  - `git push origin main` succeeded (commit `f9fffa1`)

## Refine four homepage feature images - 2026-04-17

- Motivation: all 4 approved WebP images still read as dense mini-dashboards at card size — stage labels too small, anchor block too visually dominant, stack bars too heavy, comparison panels too crowded
- Files changed:
  - `tools/feature-images/feature_images/templates/workflow_map.py`: removed card detail text, enlarged stage labels to `panel_title` (40px bold), increased card dimensions (274×210, gap 38), recentered cards in panel, moved note boxes to y=660–782
  - `tools/feature-images/feature_images/templates/hub_overview.py`: changed anchor box fill from solid dark navy (`secondary`) to pale blue (`secondary_soft`) with navy border; updated interior text from white to `ink`/`muted`; keeps connector lines intact
  - `tools/feature-images/feature_images/templates/stack_blueprint.py`: replaced solid dark bar fills with soft palette fills (accent_soft/secondary_soft/warm_soft) and colored borders (width=3); updated text from white to `ink`/`muted`; increased right-side trigger card spacing from 84 to 90px
  - `tools/feature-images/feature_images/templates/comparison_split.py`: updated for 2 items per side — larger cards (height 70, spacing 92), labels upgraded from `pill` (22px) to `card_title` (28px bold), items start lower at y+170 for more panel title breathing room
  - `tools/feature-images/feature_images/data/comparisons/crm-vs-project-management.json`: reduced from 3 items per side to 2 (kept "Client record"/"Pipeline memory" on left; "Active milestones"/"Review flow" on right)
  - `tools/feature-images/feature_images/data/hubs/client-workflow-systems.json`: shortened anchor body and module detail text to fit cleaner in lighter anchor box
  - `tools/feature-images/feature_images/data/workflows/freelance-client-workflow-system.json`: shortened signal_note body for cleaner fit in new note box height
  - `static/images/features/workflows/freelance-client-workflow-system.webp`: regenerated
  - `static/images/features/hubs/client-workflow-systems.webp`: regenerated
  - `static/images/features/blueprints/solo-freelancer-lean-budget.webp`: regenerated
  - `static/images/features/comparisons/crm-vs-project-management.webp`: regenerated
- Issue-by-issue summary:
  - Workflow: 4 stage cards now show large 40px stage names only (no small detail text); clean connector flow; note boxes have more vertical breathing room
  - Hub: left anchor block is now pale blue instead of dark navy, removing the heavy visual imbalance; text is readable dark ink; connector lines unchanged
  - Blueprint: 3 stack bars now use soft light fills with colored borders instead of solid dark fills; text is dark/readable; trigger cards have slightly more spacing
  - Comparison: panels now show 2 large-label rows each instead of 3 small ones; 28px bold labels; "vs" divider retained
- No orphan WebPs were created. Exactly 4 WebPs in `static/images/features/`.
- SVG fallbacks confirmed present for all 4 images.
- Verification:
  - ran `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/` successfully
  - confirmed `public/` is gitignored and untracked
  - all 4 WebPs regenerated cleanly with no validation warnings
- Commit message used: `Refine four homepage feature images`
- Push result: `git push origin main` succeeded (commit `4a28c41`)
