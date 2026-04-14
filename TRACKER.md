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
- Push result: pending
