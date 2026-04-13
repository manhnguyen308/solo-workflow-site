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
