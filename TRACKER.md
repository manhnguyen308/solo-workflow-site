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
