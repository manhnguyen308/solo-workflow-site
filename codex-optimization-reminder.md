# Codex Optimization Reminder

This file captures the major optimization work completed so far on `soloopsguide.com` so future passes can start from the current baseline instead of repeating cleanup work.

## Current baseline

- The feature-image system has been substantially cleaned up.
- Homepage trust-page promotion was removed.
- Homepage featured/priority card wiring was corrected to use the newer approved content and image set.
- Public-facing homepage copy was rewritten to remove internal strategy language.
- Support-layer assets now form a more coherent sequence.
- Backbone workflow, blueprint, and comparison pages have received a cluster-level depth pass.

## Homepage and template wiring

- Fixed homepage featured/priority card selection in `layouts/index.html` so it points to the newer refined pages instead of older placeholder anchor pages.
- Rewrote homepage featured section copy into user-facing language.
- Removed trust/support/legal page promotion from the homepage while keeping those pages in footer/navigation.
- Fixed FAQ icon rendering and homepage resource-card mapping.
- Verified rendered homepage cards use current dedicated feature images rather than old fallback art.

## Feature-image system work already done

- Replaced older generic or fallback-style feature images across major surfaced pages and many single pages.
- Added dedicated SVG feature images for newer workflow, blueprint, comparison, FAQ, glossary, and template pages.
- Improved SVGs with:
  - stronger internal structure,
  - more topic-specific cues,
  - clearer comparison-side contrast,
  - more composition variety across visible grids.
- Fixed image wiring issues where homepage or card grids were still resolving older assets.
- Updated fallback/default image usage away from older broad placeholder art.

## Support-layer coherence work already done

- Support assets now have clearer sequence and narrower jobs.
- The templates/checklists hub was reorganized conceptually into:
  - stack cleanup,
  - stage and review control,
  - blocked-work recovery.
- Tightened asset-to-asset routing, especially:
  - stack audit -> system-of-record rules -> migration,
  - handoff boundary -> approval routing or client dependency,
  - client dependency -> escalation,
  - escalation -> scope reset,
  - scope reset -> recovery update notice.
- Tightened glossary/FAQ routing so glossary and FAQ pages stay supportive rather than acting like core workflow replacements.

## Support assets created

- `stack-audit-consolidation-worksheet.md`
- `system-of-record-rules-worksheet.md`
- `project-start-readiness-and-handoff-boundary-worksheet.md`
- `approval-and-feedback-routing-worksheet.md`
- `client-input-dependency-worksheet.md`
- `escalation-and-pause-state-worksheet.md`
- `scope-reset-and-recovery-worksheet.md`
- `recovery-update-and-revised-plan-notice-template.md`

Each of the above also has dedicated feature art under `static/images/features/templates/`.

## Workflow/lifecycle cluster additions and strengthening

- Added dedicated workflow pages for:
  - client onboarding,
  - milestone delivery,
  - invoice/payment,
  - client offboarding,
  - proposal revision and approval.
- Lifecycle continuity was tightened across:
  - intake,
  - proposal handoff,
  - proposal review/approval,
  - onboarding,
  - delivery,
  - billing,
  - offboarding.
- Stronger boundaries were established between:
  - proposal revision vs later change requests,
  - delivery vs billing handoff,
  - offboarding vs unresolved delivery/billing work.

## Comparison cluster additions and strengthening

- Added `all-in-one-workspace-vs-specialized-stack-for-solo-operators.md`.
- Existing comparison pages were clarified so they now read more distinctly:
  - `sample-crm-vs-pm.md` = system-center decision,
  - `all-in-one-workspace-vs-specialized-stack-for-solo-operators.md` = stack-shape decision,
  - `sample-notion-vs-clickup.md` = downstream delivery workspace decision,
  - `email-vs-client-portal...` = review/handoff channel decision,
  - `calendly-vs-built-in-booking...` = intake complexity decision.
- Comparison hub sequencing was improved so readers can move from broad decision -> narrower decision -> blueprint/workflow implementation.

## Blueprint cluster strengthening

- `sample-stack-blueprint.md` was reinforced as the baseline stack model.
- `how-to-choose-a-software-stack-without-overbuying-tools.md` was clarified as a buying-boundary page rather than a replacement blueprint.
- Blueprint cluster routing was improved so the intended path is:
  - comparison for system center,
  - comparison for stack shape,
  - lean blueprint,
  - overbuying or migration,
  - support worksheets when needed.

## Backbone pages strengthened in the latest depth pass

- `content/client-workflow-systems/sample-client-workflow.md`
- `content/client-workflow-systems/proposal-revision-and-approval-workflow-for-freelancers-and-solo-service-businesses.md`
- `content/client-workflow-systems/milestone-delivery-workflow-for-solo-service-businesses.md`
- `content/client-workflow-systems/client-offboarding-workflow-for-freelancers-and-solo-service-businesses.md`
- `content/software-stack-blueprints/sample-stack-blueprint.md`
- `content/software-stack-blueprints/how-to-choose-a-software-stack-without-overbuying-tools.md`
- `content/workflow-comparisons/sample-crm-vs-pm.md`
- `content/workflow-comparisons/all-in-one-workspace-vs-specialized-stack-for-solo-operators.md`
- Hub guidance:
  - `content/client-workflow-systems/_index.md`
  - `content/software-stack-blueprints/_index.md`
  - `content/workflow-comparisons/_index.md`

### Depth improvements made in that pass

- Added stronger “why this matters” logic.
- Added clearer “what this page should not do” boundaries.
- Added more explicit “what to do next” logic.
- Reduced overlap between anchor pages and narrower stage/decision pages.
- Improved cluster reading paths and page hierarchy.

## Important operational notes

- Avoid another broad feature-image rewrite unless a clearly broken outlier appears.
- Avoid creating more narrow support assets by default. The support layer is now broad enough for most current implementation needs.
- Prefer improving strong cluster backbone pages over adding more small pages.
- Comparison cluster is currently the lightest cluster overall and may still need the most future strengthening.
- Workflow and blueprint clusters are much stronger now and should be maintained through targeted depth passes, not broad expansion without purpose.

## Good future priorities

- Continue selective depth/authority improvements on backbone pages.
- Strengthen the comparison cluster further if a real gap appears.
- Improve discoverability and internal linking only where user flow clearly benefits.
- Keep support pages narrow and subordinate to cornerstone workflow/blueprint/comparison pages.

## Verification pattern used so far

- Most major passes were followed by:
  - `tools/hugo/hugo.exe --minify --gc --baseURL https://soloopsguide.com/`
- When rendered output looked stale, deleting affected `public/` targets and rebuilding resolved the mismatch.

## Reminder for future Codex passes

- Treat the current visual system as established.
- Do not revert to internal/SEO language on public-facing pages.
- Do not recreate assets or pages that were already fixed unless a real regression is found.
- Start from the cluster hierarchy already established:
  - workflow anchor and stage guides,
  - comparison decisions,
  - blueprint implementation model,
  - support assets as narrow execution tools.

## Comparison-cluster expansion pass completed on 2026-04-09

- Deepened the narrower comparison pages so they now carry clearer decision boundaries, failure checks, and implementation consequences:
  - `content/workflow-comparisons/sample-notion-vs-clickup.md`
  - `content/workflow-comparisons/email-vs-client-portal-for-deliverables-and-approvals.md`
  - `content/workflow-comparisons/calendly-vs-built-in-booking-tools-for-solo-operators.md`
- Added a new strategically useful comparison page:
  - `content/workflow-comparisons/best-home-for-billing-status-invoicing-tool-vs-system-of-record.md`
- Added dedicated feature art for that comparison:
  - `static/images/features/comparisons/billing-status-home.svg`
- Strengthened upstream and downstream routing from:
  - `content/workflow-comparisons/sample-crm-vs-pm.md`
  - `content/workflow-comparisons/all-in-one-workspace-vs-specialized-stack-for-solo-operators.md`
  - `content/workflow-comparisons/_index.md`
- Wired the new billing-visibility comparison into:
  - `content/client-workflow-systems/invoice-and-payment-workflow-setup-for-freelancers-and-consultants.md`
  - `content/software-stack-blueprints/sample-stack-blueprint.md`
  - `content/software-stack-blueprints/how-to-choose-a-software-stack-without-overbuying-tools.md`
  - `content/software-stack-blueprints/how-to-migrate-from-scattered-tools-to-one-workflow-system.md`

### Comparison-cluster position after this pass

- `sample-crm-vs-pm.md` remains the system-center decision.
- `all-in-one-workspace-vs-specialized-stack-for-solo-operators.md` remains the stack-shape decision.
- `sample-notion-vs-clickup.md` remains the downstream workspace-shape decision.
- `email-vs-client-portal-for-deliverables-and-approvals.md` remains the delivery and approval-channel decision.
- `best-home-for-billing-status-invoicing-tool-vs-system-of-record.md` now covers the billing-visibility boundary between finance and operations.
- `calendly-vs-built-in-booking-tools-for-solo-operators.md` remains the intake-complexity decision.

### Current judgment after the comparison pass

- The comparison cluster is materially stronger and no longer depends only on the original five pages.
- The billing-visibility comparison filled the clearest remaining strategic gap because it connects directly to system-of-record rules, stack shape, migration, and the invoice workflow.
- The next comparison gap is no longer urgent. If another comparison is added later, it should only happen if a real recurring decision appears that is not already covered by the current stack-shape, workspace, review-flow, billing, or intake comparisons.

## Homepage and hub discoverability refinement pass completed on 2026-04-09

- Refined `layouts/index.html` so the homepage now emphasizes best starting points more clearly:
  - the hero now points first-time visitors toward the lifecycle anchor,
  - the featured card now highlights the workflow anchor instead of a narrower comparison,
  - homepage section copy is more action-oriented,
  - the "Start Here" card set now surfaces stronger cornerstone and high-value pages instead of mixing in narrower support-heavy choices,
  - resource-type descriptions now explain when to use each cluster, not just what it contains,
  - "Recent additions" is now framed as secondary to the strongest entry pages.
- Tightened the major hub pages so readers can tell what to open first and when to leave the hub:
  - `content/client-workflow-systems/_index.md`
  - `content/software-stack-blueprints/_index.md`
  - `content/workflow-comparisons/_index.md`
  - `content/templates-checklists/_index.md`
  - `content/glossary/_index.md`
  - `content/faq/_index.md`
- Added clearer "if you only open one page" and "fastest useful starting points" guidance across the hubs.
- Improved hub-level sequencing so broad pages are surfaced before narrower stage, support, glossary, or FAQ pages.
- Removed remaining internal-facing wording found during the pass from:
  - `content/glossary/_index.md`
  - `content/faq/_index.md`
  - `content/about/_index.md`

### Current discoverability baseline after this pass

- The homepage now pushes first-time visitors more clearly toward:
  - the lifecycle anchor,
  - the lean-stack blueprint,
  - the system-center comparison,
  - the strongest next-step workflow and stack pages.
- Hubs are more explicit about:
  - what they are for,
  - which page should be opened first,
  - when a narrower page is premature,
  - which stronger cluster page to use next.
- Support hubs are still clearly subordinate to cornerstone workflow, blueprint, and comparison pages.

## Homepage + hub discoverability and index-worthiness pass completed on 2026-04-09

### Pass goal

- Strengthen homepage and hub discoverability while making targeted repo-controlled fixes for pages showing as crawled but not indexed.

### Exact Hugo version used for final verification

- `hugo v0.128.0-e6d2712ee062321dc2fc49e963597dd5a6157660+extended windows/amd64`

### Files changed in this pass

- `layouts/index.html`
- `content/client-workflow-systems/_index.md`
- `content/faq/_index.md`
- `content/faq/sample-stack-faq.md`
- `content/editorial-policy/_index.md`
- `static/_headers`

### What was done

- Tightened homepage entry framing so the site reads more clearly as a strong starting page:
  - stronger hero lead,
  - clearer "newer guides" framing so recent pages do not compete with cornerstone entry points,
  - clearer resource-type intro copy,
  - slightly stronger "Start Here" explanation.
- Tightened the workflow hub to remove repeated "leave this section" guidance and make the exit logic cleaner.
- Tightened the FAQ hub so it behaves more clearly as a routing layer and tells readers to leave for cornerstone pages when the problem is broader than one question.
- Strengthened `content/faq/sample-stack-faq.md` so it is more distinct and useful as an indexable support page:
  - clearer title and summary,
  - stronger "when this FAQ is worth using" framing,
  - clearer "what this FAQ should not replace" boundary,
  - cleaner differentiation from the workflow anchor, stack blueprint, and overbuying guide.
- Strengthened `content/editorial-policy/_index.md` so it reads more like a real trust page:
  - clarified intended audience,
  - clarified recommendation boundaries,
  - clarified updates/corrections priority,
  - added explicit trust standards for how pages should behave.
- Added `static/_headers` with:
  - `/index.xml`
  - `X-Robots-Tag: noindex`
  This intentionally reduces accidental indexability for the RSS feed instead of treating it like a primary search landing page.

### Build verification result

- Verified the exact requested Hugo version by downloading a local Extended `0.128.0` binary into `tools/hugo/v0.128.0/`.
- Final verification command:
  - `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/`
- Final build completed successfully.

### Indexing / crawl-status notes from this pass

- `/`:
  - strengthened homepage framing and discovery logic so the page is a clearer site entry and a stronger candidate for indexing.
- `/index.xml`:
  - intentionally handled as a feed/utility page, not a primary indexed destination, via `X-Robots-Tag: noindex`.
- `/faq/faq-setting-up-a-solo-service-workflow-stack/`:
  - strengthened usefulness and differentiation so it is less likely to read like a thin duplicate of the stronger stack pages.
- `/editorial-policy/`:
  - strengthened trust-page clarity and distinctiveness so it reads less like thin support content.

### Knowledge / cluster state after this pass

- Homepage discovery is now stronger for:
  - the lifecycle anchor,
  - stronger blueprint entry pages,
  - the comparison decision layer,
  - the intended broad-to-narrow reading order.
- Workflow and FAQ hubs are clearer about when readers should stop browsing support pages and move back to stronger pages.
- The support layer is still the densest cluster to navigate, but its entry logic is better controlled than before.

### Remaining follow-up items

- Watch whether the stack FAQ still feels too close to the lean blueprint after more indexing feedback arrives.
- Revisit glossary and FAQ discoverability later only if users still land there too early.
- If indexing remains weak on trust pages, consider whether some low-priority trust/support pages should be intentionally de-emphasized rather than expanded.

### Confirmation on sources / references rendering

- No visible sources or references section was added in this pass.

### Recommended next step

- Do a selective page-quality pass on any remaining low-performing or weakly indexed support pages only after new crawl/index feedback is available, rather than broadening the site further right now.

## Support-layer entry control and routing refinement pass completed on 2026-04-09

### Pass goal

- Reduce the chance that readers enter the support layer too early, go too narrow too soon, or stay trapped inside support pages instead of returning to cornerstone workflow, blueprint, or comparison pages.

### Files changed in this pass

- `layouts/index.html`
- `content/templates-checklists/_index.md`
- `content/faq/_index.md`
- `content/glossary/_index.md`

### What was done

- Tightened homepage support exposure in `layouts/index.html`:
  - templates, glossary, and FAQ resource-card copy now uses stronger "use this only when..." language,
  - the execution-path card now says to return to a stronger guide if the trigger moment is still unclear.
- Tightened the templates hub so it is clearer that assets are not a first-stop layer:
  - added explicit "Start here only after the rule exists" guidance,
  - added a stronger warning for readers who still cannot identify which lane they belong in,
  - added a clearer "leave the support layer" signal when readers feel tempted to open several assets in a row.
- Tightened the FAQ hub so it behaves more clearly as a routing layer:
  - added stronger "Start here only when the question is genuinely narrow" guidance,
  - added a clearer "leave this hub when..." section,
  - clarified that browsing multiple FAQ pages is usually a sign the reader should move back to a cornerstone page.
- Tightened the glossary hub so it behaves more clearly as a quick clarification layer:
  - added stronger "Start here only when a term is the actual blocker" guidance,
  - added clearer language that glossary pages should be exited quickly once the term is clear enough to act,
  - reinforced that weak stages, blurry handoffs, and overcomplicated stacks should route back to stronger pages instead.

### Build verification result

- Final verification command:
  - `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/`
- Final build completed successfully.

### Current support-layer judgment after this pass

- The support layer is now better controlled at the hub-entry level.
- Templates, FAQ, and glossary pages are more explicit about:
  - when they are appropriate,
  - when they are too narrow,
  - where readers should go instead.
- The highest remaining risk is still the templates/checklists cluster, because it naturally contains the most narrow pages and operational assets.

### Remaining follow-up items

- Watch whether templates/checklists still attract readers too early despite the stronger hub framing.
- If support pages continue to feel over-exposed later, consider tightening card ordering or labels further before expanding the cluster.
- Avoid adding more support assets until new behavior or indexing evidence shows a real gap.

### Recommended next step

- Do a selective quality and routing pass on individual support pages only if future user behavior or crawl feedback shows that readers are still entering the support layer before the stronger workflow, blueprint, or comparison pages.

## Homepage and hub conversion-path refinement pass completed on 2026-04-09

### Pass goal

- Make homepage and hub pages better at moving readers into the strongest pages and next steps, not just describing what each section contains.

### Files changed in this pass

- `layouts/index.html`
- `content/client-workflow-systems/_index.md`
- `content/software-stack-blueprints/_index.md`
- `content/workflow-comparisons/_index.md`
- `content/templates-checklists/_index.md`
- `content/faq/_index.md`
- `content/glossary/_index.md`

### What was done

- Tightened homepage conversion copy in `layouts/index.html`:
  - hero copy now pushes the lifecycle guide more clearly as the safest first click,
  - resource-type intro now tells readers to start broader when the problem still feels broad,
  - the "Start Here" section now uses stronger first-click language,
  - cornerstone copy now reinforces "model first, then narrower pages",
  - reading-path cards now describe the safest first click more explicitly instead of reading like neutral summaries.
- Tightened the workflow hub so readers get a clearer first-click sequence:
  - added a new "The safest first path through this hub" section,
  - clarified that the anchor workflow remains the best first click when several stage problems overlap.
- Tightened the blueprint hub so the lean blueprint is even more clearly the default entry point:
  - added a new "The safest first path through this hub" section,
  - added a stronger fallback to the lean blueprint when readers are torn between multiple blueprint pages.
- Tightened the comparison hub so it behaves more clearly as a decision-narrowing lane:
  - added a new "The safest first path through this hub" section,
  - clarified that fuzzy comparison questions should route back upstream to the workflow anchor or lean blueprint.
- Tightened the support hubs just enough to support conversion rather than compete with it:
  - templates hub now has a clearer three-step first path,
  - FAQ hub now has a clearer three-step first path,
  - glossary hub now has a clearer three-step first path.

### Build verification result

- Final verification command:
  - `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/`
- Final build completed successfully.

### Current conversion-path judgment after this pass

- Homepage now does a better job of telling first-time visitors:
  - where to start,
  - which click is safest if the problem still feels broad,
  - when narrower layers are appropriate.
- Workflow, blueprint, and comparison hubs now behave more clearly as guided entry points instead of just strong indexes.
- Support hubs are still subordinate, but their entry logic now helps reinforce the broader conversion path rather than compete with it.

### Remaining follow-up items

- The homepage "newer guides" section is still inherently more secondary than the rest of the page; keep watching whether it stays helpful without pulling attention away from cornerstone routes.
- The templates/checklists hub remains the easiest place for readers to go too narrow too early, even though its conversion logic is now stronger.
- If later behavior data shows hesitation between workflow vs blueprint entry, consider tightening the homepage "Start Here" card selection or ordering before creating new pages.

### Recommended next step

- Do a selective individual-page first-paragraph and next-step pass on the highest-value cornerstone pages if later user behavior suggests readers still hesitate after the first click, rather than expanding the site further.

## Templates/checklists hub gating and usage-path refinement pass completed on 2026-04-09

### Pass goal

- Reduce the chance that readers enter the templates/checklists hub too early or use a template before they understand the upstream workflow, blueprint, or comparison decision it depends on.

### Files changed in this pass

- `content/templates-checklists/_index.md`
- `content/templates-checklists/sample-onboarding-checklist.md`
- `content/templates-checklists/weekly-client-operations-checklist.md`
- `content/templates-checklists/invoice-payment-workflow-checklist.md`
- `content/templates-checklists/stack-audit-consolidation-worksheet.md`
- `content/templates-checklists/system-of-record-rules-worksheet.md`
- `content/templates-checklists/project-start-readiness-and-handoff-boundary-worksheet.md`
- `content/templates-checklists/delivery-qa-checklist-before-client-handoff.md`
- `content/templates-checklists/client-offboarding-testimonial-template.md`

### What was done

- Tightened the templates hub so it gates entry more clearly:
  - added stronger `Start here only if...` logic,
  - clarified the safest first path through the hub,
  - grouped support paths more explicitly around the upstream problem they follow,
  - added stronger warnings when the reader still cannot identify the correct lane or trigger moment.
- Tightened the most visible template/checklist pages so they behave more clearly as downstream execution assets:
  - onboarding checklist now states more explicitly what it assumes the reader already knows and routes more clearly back to the onboarding workflow,
  - weekly operations checklist now states more clearly that it is for maintaining a system that already exists, not designing one,
  - invoice/payment checklist now states more clearly that it depends on an already-defined billing rule,
  - stack audit worksheet now states more clearly that it should not be the first stack-design page,
  - system-of-record rules worksheet now states more clearly that it sits after the broader system-center and stack-shape decisions,
  - handoff-boundary worksheet now states more clearly that it assumes the stage logic already exists,
  - delivery QA checklist now states more clearly that it depends on a defined delivery and approval rule,
  - offboarding template now states more clearly that it depends on visible delivery, billing, and closeout rules.

### Build verification result

- Final verification command:
  - `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/`
- Final build completed successfully.

### Current templates-cluster judgment after this pass

- The templates/checklists hub now does a better job of telling readers:
  - when they are ready for the hub,
  - what upstream page should come first,
  - which asset lane they actually belong in,
  - when they should leave the hub again.
- The highest-visibility asset pages now make their upstream assumptions more explicit, which should reduce misuse as substitute guides.

### Remaining follow-up items

- The weekly operations checklist is still naturally attractive as a broad operational page, so keep watching whether readers treat it as a first-stop guide instead of a maintenance asset.
- The onboarding checklist remains the strongest and most tempting first asset in the cluster; that is useful, but it still needs careful positioning behind the onboarding workflow.
- Avoid adding more templates until later behavior or indexing feedback shows a real implementation gap.

### Recommended next step

- If templates still feel overused later, do a narrower page-level pass on the few most-clicked assets first rather than broadening the whole templates cluster again.

## Single-page entry clarity and misuse-prevention pass completed on 2026-04-09

### Pass goal

- Restore the homepage hero H1 to a calmer, better-balanced scale.
- Improve important single pages so direct-entry readers can understand what each page is for, what it is not for, what should come first, and what the safest next step is.

### Files changed in this pass

- `static/css/main.css`
- `content/templates-checklists/sample-onboarding-checklist.md`
- `content/templates-checklists/weekly-client-operations-checklist.md`
- `content/templates-checklists/invoice-payment-workflow-checklist.md`
- `content/templates-checklists/stack-audit-consolidation-worksheet.md`
- `content/templates-checklists/system-of-record-rules-worksheet.md`
- `content/templates-checklists/project-start-readiness-and-handoff-boundary-worksheet.md`
- `content/client-workflow-systems/sample-client-workflow.md`
- `content/software-stack-blueprints/sample-stack-blueprint.md`
- `content/workflow-comparisons/sample-crm-vs-pm.md`

### What was done

- Restored the homepage hero title to a more restrained scale:
  - reduced the desktop H1 clamp from the oversized setting,
  - eased the line-height and letter-spacing slightly so the title reads strong without dominating the hero block.
- Tightened direct-entry framing on the highest-risk single pages by adding or strengthening:
  - what the page is for,
  - what the page is not for,
  - start-here-first guidance,
  - safest next-step guidance.
- Reinforced the difference between:
  - anchor workflow pages,
  - blueprint and comparison decision pages,
  - downstream templates and worksheets.
- Reduced the chance that direct-entry readers use templates or worksheets as substitutes for the upstream workflow, blueprint, or comparison pages they depend on.

### Current judgment after this pass

- The homepage hero is back to a more premium, controlled scale instead of feeling oversized.
- The highest-risk single pages now behave more clearly as guided entry points or downstream execution assets rather than isolated pages.
- The main remaining misuse risk is still the templates/checklists cluster, especially broad-feeling operational assets like the weekly operations checklist and onboarding checklist.

### Build verification result

- Exact Hugo version used:
  - `hugo v0.128.0-e6d2712ee062321dc2fc49e963597dd5a6157660+extended windows/amd64`
- Final verification command:
  - `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/`
- Final build completed successfully.

### Remaining follow-up items

- Check the rendered homepage hero on desktop after rebuild to make sure the H1 scale now matches the earlier more restrained look.
- Keep watching whether the weekly operations and onboarding checklist pages still attract readers before the upstream workflow pages.
- If single-page misuse still shows up later, tighten the first two paragraphs on a few more support pages before broadening any cluster.

### Recommended next step

- Do a selective first-paragraph and next-step refinement pass on a few remaining support/glossary/FAQ single pages only if later behavior shows direct-entry readers are still landing too narrow too early.

## FAQ and glossary single-page direct-entry refinement pass completed on 2026-04-09

### Pass goal

- Make glossary and FAQ single pages safer for direct-entry readers so they clarify one narrow point and then route people back to the stronger workflow, blueprint, comparison, or support page they actually need.

### Files changed in this pass

- `content/glossary/approval-owner.md`
- `content/glossary/client-dependency.md`
- `content/glossary/next-action-owner.md`
- `content/glossary/sample-workflow-definition.md`
- `content/glossary/system-of-record.md`
- `content/faq/reviewing-and-maintaining-a-solo-service-workflow-system.md`
- `content/faq/sample-stack-faq.md`
- `content/faq/what-to-do-when-a-client-goes-silent-during-review.md`
- `content/faq/what-to-do-when-required-client-inputs-are-late-or-incomplete.md`

### What was done

- Tightened glossary single pages with clearer direct-entry framing:
  - added or strengthened `what this page is for`,
  - added or strengthened `what this page is not for`,
  - added clearer `start here first if...` routing when a broader workflow, blueprint, or comparison page should come first,
  - added stronger "leave this page once the term is clear" language.
- Tightened FAQ single pages with clearer misuse prevention:
  - added clearer "this is not the full guide" language,
  - added clearer "start here first if..." guidance when the reader really needs a broader stage or stack page,
  - preserved their usefulness as narrow response pages while reinforcing that they are routing layers rather than substitute entry pages.

### Current judgment after this pass

- Direct-entry FAQ and glossary pages are now more explicit about being narrow support layers.
- The highest remaining misuse risk is still on the stack FAQ and the two more operational glossary terms (`system of record` and `client dependency`), simply because they connect to broader decisions that readers may still try to solve from one term or one FAQ answer.
- That said, the direct-entry risk is materially lower now because those pages more clearly push readers back to the right upstream guide.

### Build verification result

- Exact Hugo version used:
  - `hugo v0.128.0-e6d2712ee062321dc2fc49e963597dd5a6157660+extended windows/amd64`
- Final verification command:
  - `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/`
- Final build completed successfully.

### Remaining follow-up items

- Watch whether direct-entry readers still linger on the stack FAQ instead of moving into the lean blueprint or system-center comparison.
- Watch whether glossary terms tied to bigger stack decisions still attract readers before the broader blueprint or comparison pages.
- Avoid another broader direct-entry pass unless later behavior shows continued confusion.

### Recommended next step

- Hold off on another direct-entry refinement pass for now unless later behavior or indexing feedback shows that readers are still using glossary or FAQ single pages as first-stop pages instead of routing layers.

## Site-wide back-to-top utility pass completed on 2026-04-09

### Pass goal

- Add a subtle site-wide back-to-top control that feels like utility UI rather than a CTA.

### Files changed in this pass

- `layouts/_default/baseof.html`
- `layouts/partials/site-script.html`
- `static/css/main.css`

### What was done

- Added one shared back-to-top button in the base layout so it appears across major page types.
- Styled it as a small floating circular utility control at the bottom right:
  - icon-only upward arrow,
  - subdued border, shadow, and color treatment aligned with the current design system,
  - visible but low-emphasis focus state,
  - mobile-safe spacing from screen edges.
- Added lightweight shared scroll logic:
  - hidden near the top,
  - revealed only after a reasonable scroll depth,
  - smooth scroll back to top on click.
- Kept the implementation maintainable by extending the existing shared site script instead of adding a new library or page-specific widget.

### Build verification result

- Exact Hugo version used:
  - `hugo v0.128.0-e6d2712ee062321dc2fc49e963597dd5a6157660+extended windows/amd64`
- Final verification command:
  - `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/`
- Final build completed successfully.

### Remaining follow-up items

- Confirm the button does not visually compete with any mobile browser UI on smaller screens.
- If needed later, tune the reveal threshold slightly based on real use, but keep it conservative.

### Recommended next step

- No immediate follow-up is required if the control feels appropriately subtle after visual review on desktop and mobile.
