# Search Console Response Loop

Use this document after sitemap submission to move SoloOpsGuide from launch mode into measured iteration mode. The goal is not to react to every metric swing. The goal is to protect the pages that matter most, identify weak-index risks early, and apply the smallest useful fix first.

## Top priority pages

Treat these as the first monitoring set for impressions, clicks, and indexing.

### Homepage

- `/`

### Major hubs

- `/client-workflow-systems/`
- `/software-stack-blueprints/`
- `/workflow-comparisons/`
- `/templates-checklists/`

### Cornerstone workflows

- `/workflows/freelance-client-workflow-system-inquiry-to-final-payment/`
- `/workflows/how-to-build-a-client-intake-and-qualification-workflow/`
- `/workflows/proposal-to-contract-handoff-workflow-setup/`
- `/workflows/client-onboarding-workflow-for-freelancers-and-consultants/`
- `/workflows/milestone-delivery-workflow-for-solo-service-businesses/`
- `/workflows/invoice-and-payment-workflow-setup-for-freelancers-and-consultants/`

### Best blueprints

- `/guides/software-stack-blueprint-solo-freelancer-lean-budget/`
- `/guides/how-to-choose-a-software-stack-without-overbuying-tools/`
- `/guides/how-to-migrate-from-scattered-tools-to-one-workflow-system/`

### Strongest comparisons

- `/comparisons/crm-vs-project-management-tool-for-client-workflows/`
- `/comparisons/notion-vs-clickup-for-solo-client-delivery/`
- `/comparisons/calendly-vs-built-in-booking-tools-for-solo-operators/`
- `/comparisons/email-vs-client-portal-for-deliverables-and-approvals/`

### Highest-value templates

- `/templates/client-onboarding-checklist-for-freelancers-and-consultants/`
- `/templates/weekly-client-operations-checklist-solo-business/`
- `/templates/invoice-and-payment-workflow-checklist-for-service-businesses/`

### Trust pages

- `/about/`
- `/contact/`
- `/editorial-policy/`
- `/content-policy/`

The machine-readable version of this priority set lives in `data/search-console-monitoring.toml`.

## Pages most at risk

These are the pages most likely to show weak-index or overlap signals first:

- FAQ hub and FAQ pages
- glossary hub and glossary terms
- asset pages that sit next to stronger workflow pages
- the offboarding template until a dedicated offboarding workflow page exists

Current highest-risk paths:

- `/faq/`
- `/glossary/`
- `/faq/faq-setting-up-a-solo-service-workflow-stack/`
- `/faq/faq-reviewing-and-maintaining-a-solo-service-workflow-system/`
- `/glossary/workflow-handoff/`
- `/templates/weekly-client-status-update-template/`
- `/templates/client-change-request-template/`
- `/templates/delivery-qa-checklist-before-client-handoff/`
- `/templates/client-offboarding--testimonial-request-template/`

## What to do with common Search Console signals

### Impressions but weak clicks

Check first:

- title clarity
- description specificity
- first paragraph framing
- whether the page sounds broader or narrower than it really is

Apply fixes in this order:

1. Make the page purpose explicit in the title, description, and opening lines.
2. Sharpen the search-result promise with clearer scenario wording.
3. If the page is a support page, make its routing role clearer so it does not look like a weak substitute for a cornerstone page.

### Discovered, currently not indexed

Most likely causes on this site:

- the page is too thin relative to stronger nearby pages
- the page feels duplicative
- the page is underlinked from the stronger cluster

Apply fixes in this order:

1. Confirm the page has a distinct job.
2. Add stronger upstream and downstream links.
3. Improve the intro so the page feels worth indexing quickly.
4. If the page still duplicates a stronger page, merge or demote it instead of padding it.

### Crawled, currently not indexed

Treat this as a stronger quality warning than discovery-only.

Apply fixes in this order:

1. Check overlap with a stronger page in the same cluster.
2. Tighten title, description, and opening purpose.
3. Add practical specificity, not more filler.
4. Reduce prominence if the page is a weak support page that is not yet earning a real role.

### Duplicate without user-selected canonical

On this site, this usually means page purpose is too similar across:

- workflow page vs template page
- guide vs FAQ
- glossary term vs implementation guide

Apply fixes in this order:

1. Clarify which page is the main answer and which is the support asset.
2. Strengthen internal links so the relationship is explicit.
3. Merge or retire the weaker page if the split no longer earns its keep.

### Zero impressions after a reasonable window

Use a rough review window:

- 2-4 weeks for priority pages
- 4-8 weeks for support pages

Apply fixes in this order:

1. Check whether the page is linked from the correct hub and cornerstone page.
2. Check whether the title and description are too vague.
3. Decide whether the page is support-only and should stay de-emphasized.
4. If it has no distinct job, merge it.

## Weekly review loop

Keep this short.

1. Check indexing status for the priority pages only.
2. Check impressions and clicks for homepage, hubs, cornerstone workflows, and the top comparison.
3. Flag any page that changed status or has impressions with unusually weak clicks.
4. Apply only the smallest useful fix that week.

Good weekly fixes:

- intro rewrite
- title or description improvement
- stronger hub link
- clearer upstream/downstream link
- support-page reframing

## Monthly review loop

Use the monthly pass for structural decisions.

1. Review all priority groups in `data/search-console-monitoring.toml`.
2. Compare support pages against nearby stronger pages for overlap.
3. Review the risk-page list and decide whether each page should be expanded, reframed, merged, or left alone.
4. Choose the next content batch based on gaps revealed by Search Console, not random breadth.

Good monthly fixes:

- merge two weak pages
- add one support page that strengthens a high-impression cluster
- expand a priority page that is getting impressions but weak clicks
- reduce hub prominence for weak support pages

## Repo-controlled fixes already applied

This pass tightened the pages most likely to create weak-index noise:

- FAQ hub and FAQ pages now read more clearly as routing/support pages
- glossary hub and `Workflow Handoff` now read more clearly as reference pages, not substitute guides
- asset pages around status updates, change requests, delivery QA, and offboarding now state more clearly that they support stronger workflow pages rather than replace them

## What to watch first in Search Console

When data starts appearing, check these first:

1. Are the homepage and major hubs being indexed cleanly?
2. Are the workflow anchor, lean stack blueprint, and CRM vs PM comparison getting the earliest impressions?
3. Do the new onboarding, milestone delivery, invoice workflow, and overbuying pages start earning impressions before weaker support pages do?
4. Do FAQ, glossary, and template pages show weak-index or overlap signals?
5. Are any priority pages getting impressions but weak clicks because the title or opening promise is too soft?

## Next likely wins after real data arrives

- strengthen the first 120 words on any priority page with impressions but weak clicks
- expand whichever priority comparison or workflow page starts earning impressions earliest
- publish the offboarding workflow page if the offboarding template shows weak-index signals
- add the next glossary or FAQ page only when it clearly supports a high-impression cluster
