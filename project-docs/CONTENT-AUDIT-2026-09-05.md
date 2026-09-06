# Website content audit: 2026-09-05

> Remediation completed in the September 6 pass. See [the remediation record](CONTENT-AUDIT-REMEDIATION-2026-09-06.md) for resolutions, date allocation, validation, and remaining disclosed site limitations. The findings below preserve the original audit snapshot.

## Decision

The site is not content-complete under the current `humanizer.md` gate. The technical publishing surface is healthy, but reader-visible content still contains publication blockers and broad polish debt.

This was a Detect-mode audit. It identifies patterns, quotes representative lines, and recommends fixes. It does not score the writing, infer authorship, or rewrite public copy.

## Scope

The audit covered:

- all 71 Markdown files under `content/`, approximately 84,568 source words;
- homepage, hubs, trust pages, workflows, templates and checklists, FAQs, glossary pages, blueprints, and comparisons;
- shared reader-visible copy in layouts and partials;
- titles, descriptions, summaries, dates, structured data, robots, sitemap, internal links, local assets, headings, and indexability;
- a clean isolated Hugo build, separate from the existing generated `public/` directory;
- current primary documentation for the product claims sampled in the Notion, ClickUp, and Calendly comparisons.

This is a content and publishing-integrity audit, not a legal opinion, live analytics review, or visual-design review.

## Publication blockers

### 1. The Contact page promises a contact path but provides none

Evidence:

- `content/contact/_index.md:2-3` promises information about how to contact SoloOpsGuide.
- `content/contact/_index.md:69-71` says that no public inbox or contact method is currently published.
- Privacy and disclaimer routes send readers back to Contact, so those routes also end without a usable method.

Pattern: title and search-intent mismatch; incomplete trust signal.

Fix: publish one monitored contact method, then make the Contact page, Privacy Policy, Disclaimer, footer, and any relevant organization data agree. If no method will be offered, change the page promise and remove instructions that tell readers to make contact.

### 2. Published and updated dates do not represent the editorial history

Evidence:

- 63 content files have `date`; none has `lastmod`.
- `layouts/_default/single.html:38` and `layouts/index.html:163` label `.Date` as "Updated."
- `layouts/partials/head.html:142-143` emits `.Date` as `datePublished` and `.Lastmod` as `dateModified`. With no `lastmod`, the two values collapse to the same timestamp.
- The tracker records mechanical redistribution of publication dates, while later commits changed content after those displayed dates.
- `content/search.md` has no date, but its rendered Article data contains `0001-01-01` for both `datePublished` and `dateModified`.

Pattern: misleading freshness signal; invalid utility-page structured data.

Fix: preserve a real publication date, introduce maintained `lastmod` values, label each field accurately, and stop emitting Article dates and Article type for undated utility pages such as Search.

### 3. The head template clips descriptions into broken sentences

Evidence:

- `layouts/partials/head.html` truncates descriptions at 165 characters without an ending marker.
- The clean rendered output contains 23 descriptions of at least 150 characters that end without punctuation or with a dangling clause.
- The same clipped copy reaches the standard description, Open Graph description, and Twitter description.
- Examples end with fragments such as "which should anchor your client", "before", "next stage can", and "approval status,".

Pattern: mechanical truncation; incomplete metadata copy.

Fix: write a dedicated complete description within the intended limit or truncate at a safe word and sentence boundary. Validate the final rendered meta, Open Graph, and Twitter values.

### 4. Internal editorial and site-planning language is visible to readers

Representative evidence:

- `content/software-stack-blueprints/_index.md:111`: "What a strong blueprint page should include."
- `content/workflow-comparisons/_index.md:114`: "What strong comparison pages on this site should include."
- `content/templates-checklists/_index.md:138`: "Content pattern for this section."
- `content/faq/_index.md:91`: "What a good FAQ page should do here."
- `content/glossary/_index.md:78`: "What makes a glossary page strong on this site."
- `content/templates-checklists/sample-client-onboarding-checklist.md:21`: "strongest first implementation asset on the site."
- `content/templates-checklists/client-offboarding-checklist.md:20`: "This page should stay clearly secondary."
- `content/faq/reviewing-and-maintaining-a-solo-workflow-system.md:109`: "How do I know whether to expand a page or publish a new one?"
- `content/software-stack-blueprints/sample-stack-blueprint.md:53`: "Other pages in this cluster should only help refine..."
- `content/workflow-comparisons/sample-crm-vs-pm.md:94-96` discusses support worksheets and narrower comparisons that "stop competing."
- `layouts/_default/single.html:67-68` exposes "Page type" and says the page is operational guidance rather than general blog content.
- `layouts/404.html:7,15` tells readers that pages may have been removed or renamed during an editing pass.

Pattern: internal production language; site architecture discussed instead of the reader's decision.

Fix: remove editorial specifications, ranking relationships, cluster ownership, and publication decisions from public copy. Replace them only when a reader needs a concrete decision, limitation, or next action.

### 5. Unsupported certainty and false precision appear across decision content

No content file contains an external source link. That is not automatically a defect for procedural advice, but it leaves factual prevalence, vendor comparisons, numerical thresholds, and time-based recommendations unsupported.

Representative evidence:

- `content/client-workflow-systems/sample-client-workflow.md:24`: "the real blocker is almost always..."
- `content/client-workflow-systems/proposal-to-contract-handoff-workflow-for-freelancers.md:20`: scope disagreements appear "in week two."
- `content/client-workflow-systems/invoice-and-payment-workflow-setup-for-freelancers-and-consultants.md:103-108`: reminder timing is set at 1 to 3 and 5 to 7 days without a stated basis.
- `content/templates-checklists/client-workflow-health-check.md:132-134`: the 0 to 16, 17 to 32, and 33 to 48 score bands are presented as breaking, fragile, and healthy without a methodology.
- `content/templates-checklists/client-workflow-health-check.md:30`: the result is described as "most accurate."
- `content/faq/what-to-do-if-a-client-does-not-respond-during-closeout.md:69,73,89,98`: response timing and functional closure are prescribed after a few days or two unanswered messages.
- `content/faq/what-to-do-if-a-client-has-not-approved-the-next-stage.md:67,83,97`: a few days and two follow-ups are treated as general thresholds.
- `content/software-stack-blueprints/sample-stack-blueprint.md:113,125,133,185,193,199-209`: client-count, frequency, time, and budget bands look measured but are not sourced or labeled illustrative.
- `content/software-stack-blueprints/how-to-migrate-from-scattered-tools-to-one-workflow-system.md:116-134`: a four-week migration, 1 to 2 project pilot, and several other fixed timing rules are not qualified.
- `content/workflow-comparisons/all-in-one-workspace-vs-specialized-stack-for-solo-operators.md:189`, `content/workflow-comparisons/best-home-for-billing-status-invoicing-tool-vs-system-of-record.md:140`, and `content/workflow-comparisons/sample-crm-vs-pm.md:196` use 2 to 4 or 3 to 8 client and project scenarios without a basis.
- `content/workflow-comparisons/sample-notion-vs-clickup.md:70-88` uses claims such as "stronger task hierarchy" and "better structure" without defined comparative measures, sources, or current plan boundaries.
- `content/workflow-comparisons/calendly-vs-built-in-booking-tools-for-solo-operators.md` never identifies the built-in product being compared with Calendly.

Pattern: exact-looking facts not established in the content; vague authority; vendor-style comparison language.

Fix: choose one treatment for each claim. Cite a current primary source, label the number as an illustrative heuristic, state the conditions that make the advice apply, or remove the precision. Contract, approval, payment, and closeout advice should defer to the parties' agreed terms and relevant jurisdiction where appropriate.

Primary documentation checked during this audit provides the baseline product evidence:

- [Notion tasks and dependencies](https://www.notion.com/help/tasks-and-dependencies) documents task properties, sub-items, dependencies, and timeline behavior.
- [ClickUp hierarchy guidance](https://help.clickup.com/hc/en-us/articles/20480724378135-Hierarchy-best-practices) and [ClickUp dependency guidance](https://help.clickup.com/hc/en-us/articles/6309943321751-Create-Dependency-Relationships-in-tasks) document hierarchy and dependency options.
- [Calendly pricing](https://calendly.com/pricing/) documents current plan boundaries, including limits that should be reflected in a product-specific comparison.

Inference: both Notion and ClickUp document task and dependency structures. Calling either one "stronger" therefore requires a disclosed comparison method rather than the presence of those capabilities alone.

### 6. Hard-rule writing violations remain site-wide

Evidence:

- Content source contains 139 literal em-dash characters and 3 literal en-dash characters across 18 files.
- `layouts/404.html:8` contains one additional `&mdash;` entity.
- Dash punctuation appears on 21 clean-rendered pages.
- 102 headings use a colon followed by a capitalized common word, commonly in headings such as "Step 1: Define...".
- All 12 audited blueprint and comparison titles use title case rather than sentence case.

Pattern: em-dash sentence punctuation; title-case headings; capitalized common words after a colon.

Fix: replace sentence-punctuation dashes with a period, comma, colon, or recast sentence. Convert reader-visible headings to sentence case while preserving proper nouns and acronyms.

Files with literal dash punctuation in content:

- `content/client-workflow-systems/_index.md`
- `content/client-workflow-systems/client-offboarding-workflow-for-freelancers-and-solo-service-businesses.md`
- `content/client-workflow-systems/invoice-and-payment-workflow-setup-for-freelancers-and-consultants.md`
- `content/client-workflow-systems/milestone-delivery-workflow-for-freelancers-and-consultants.md`
- `content/client-workflow-systems/sample-client-workflow.md`
- `content/faq/what-counts-as-a-complete-client-workflow.md`
- `content/faq/what-to-do-if-a-client-does-not-respond-during-closeout.md`
- `content/faq/what-to-do-if-a-client-has-not-approved-the-next-stage.md`
- `content/problem-to-page-guide.md`
- `content/search.md`
- `content/software-stack-blueprints/sample-stack-blueprint.md`
- `content/templates-checklists/_index.md`
- `content/templates-checklists/approval-billing-readiness-checklist.md`
- `content/templates-checklists/client-workflow-health-check.md`
- `content/templates-checklists/stack-decision-readiness-checklist.md`
- `content/templates-checklists/workflow-diagnostic-checklist.md`
- `content/templates-checklists/workflow-starter-pack.md`
- `content/workflow-comparisons/sample-crm-vs-pm.md`

### 7. Repeated structures make unrelated pages sound interchangeable

Evidence:

- Site-wide repeated headings include "Completion standard" on 16 pages, "What this page is not for" on 15, "What this page is for" on 12, "Start upstream first if..." on 12, and "What this page should settle" on 10.
- Template pages repeat "Completion standard" 11 times and repeat the same worksheet setup and exit headings across much of the section.
- Seven workflow pages share "Common failure modes", "Who this workflow is for", and "Use this workflow with".
- Comparison pages repeat the same section order and the same "Best for", "Strengths", "Tradeoffs", and "Failure mode" packaging.
- `layouts/partials/page-type-block.html` injects generic type copy across 56 content pages: 19 templates, 18 guides, 7 FAQs, 6 comparisons, 5 glossary entries, and 1 workflow.
- Five comparisons open with the same "This is not X. It is Y" construction.
- Several comparison tables repeat the prose immediately before and after them.

Pattern: repeated labels and sentence order; negative parallelism; tables that duplicate nearby prose; reusable blocks that flatten page-specific voice.

Fix: keep only sections required by the decision on each page. Replace generic labels with headings that name the actual question. Remove repeated prose from either the table or surrounding text. Make shared partial copy conditional or omit it when the page body already establishes the role.

### 8. Homepage and trust claims over-promise or lack support

Evidence:

- `layouts/index.html:100`: "Every guide is built around real scenarios..." has no visible evidence or methodology.
- `layouts/index.html:111`: "Recommendations tailored to your situation..." describes a static site as tailored.
- `layouts/index.html:116`: "Clear next steps, realistic timelines... No fluff, no overwhelming 47-step plans." combines an unsupported timeline promise with a manufactured number and dismissive contrast.
- `layouts/_default/list.html:69,121` describes hubs and lists as "curated" without explaining the selection basis.
- `content/about/_index.md:10,48` uses broad claims about why solo businesses fail and about "Most workflow content online" without evidence.
- `content/editorial-policy/_index.md:40-94` describes desired page structure but not a verifiable sourcing, fact-checking, review, correction, versioning, or date-maintenance method.
- No named owner, editor, reviewer, or subject credentials are published. `config.toml:18` identifies the author as the organization name only.

Pattern: unsupported promise; vague authority; generic praise; trust policy stated as aspiration rather than practice.

Fix: narrow promises to observable site behavior. Publish the actual editorial method, including source selection, verification, updates, corrections, and responsibility. Add accountable ownership information if the site intends to make experience or expertise claims.

### 9. Homepage copy has two competing sources of truth

Evidence:

- `content/_index.md` contains a full homepage copy body.
- `layouts/index.html` supplies separate hardcoded homepage copy and does not render `.Content`.

Pattern: content-governance drift; dormant copy that can be mistaken for the live homepage.

Fix: choose one maintained source. Render the content file, reduce it to front matter used by the layout, or remove the dormant body after confirming no future layout depends on it.

### 10. Two rendered next-step routes contradict the page sequence

Evidence:

- `content/software-stack-blueprints/sample-stack-blueprint.md:16` sets CRM versus PM as `best_next`, while line 25 says that decision must be resolved before using the blueprint.
- `content/software-stack-blueprints/consultant-va-collaboration-stack-blueprint.md:15` has no `best_next`. The first related-page fallback in `layouts/_default/single.html:4-19` makes its rendered next move the upstream solo baseline.
- `content/software-stack-blueprints/how-to-choose-a-software-stack-without-overbuying-tools.md:77-88,135-143` restates the baseline categories and stage model that its own line 24 assigns to the lean blueprint.

Pattern: broken line of thought; page-role overlap.

Fix: choose a genuinely downstream implementation route for each CTA. Keep the overbuying guide focused on purchase triggers and delay rules, and leave baseline categories and stages to the lean blueprint.

## Cluster findings

### Workflows

- The cluster is operationally thorough, but many openings rely on "most", "usually", "rarely", or "almost always" without evidence.
- Exact cadences and time promises appear in proposal, status-update, invoice, decision-log, and handoff guidance.
- `content/client-workflow-systems/sample-intake-guide.md:106` labels a section "Experience-based warning signs" without an identified experience source.
- Page, cluster, and support-page terminology frequently exposes internal architecture.
- Formulaic endings and aphorisms, such as the one-automation versus five-automation line, add polish without adding a decision condition.

### Templates and checklists

- Intros repeatedly describe assets as support pages rather than telling readers when to use them.
- Several pages declare themselves the strongest, first, secondary, or downstream asset on the site.
- The workflow health check presents unsupported score bands as diagnostic categories.
- Completion-standard, upstream-first, use-case, and next-step sections repeat heavily.

### FAQs and glossary

- The maintenance FAQ contains a public question about whether to expand or publish a page, which is an editorial workflow rather than a reader problem.
- Approval and closeout FAQs turn sample timing into general rules and need contract-aware qualifications.
- Hubs explain what strong FAQ and glossary pages should do, which is internal guidance.
- Glossary entries are useful but rely on a repeated meta-template. `content/glossary/approval-owner.md` repeats "What this page is not for" twice.

### Blueprints and comparisons

- The lean-budget blueprint does not support its budget promise with current product prices or a defined cost model.
- The migration guide presents a fixed four-week sequence and fixed pilot sizes as defaults.
- The tool-overbuying guide overlaps the lean blueprint by restating the baseline category set and stage model.
- Exactly two rendered next-step routes conflict with the intended decision order. One comes from `best_next`; the other comes from the first-related-page fallback.
- Notion versus ClickUp lists decision criteria but uses comparative adjectives without defined measures, current sources, or current plan boundaries.
- Calendly versus built-in booking tools does not name the built-in comparator.
- Strong, Medium, and Weak table ratings are undefined in two comparisons.
- Verdicts often arrive after long framing sections instead of at the opening.

### Shared templates and metadata

- Generic page-type blocks repeat across 56 pages.
- Search is emitted as an Article with zero-year dates.
- Description truncation breaks 23 rendered metadata values.
- The 404 page exposes internal editing language.
- The homepage does not render the body maintained in `content/_index.md`.

## Clean checks

The audit also confirmed these strengths in a clean isolated build:

- Hugo completed with v0.165.0+extended on Linux, producing 89 pages and 121 static files with no warning or error.
- 72 HTML files were inspected.
- 0 broken internal links were found.
- 0 broken local asset references were found.
- Every HTML document has exactly one H1.
- 0 skipped heading levels were found.
- 0 missing rendered meta descriptions were found.
- 0 duplicate rendered titles or descriptions were found.
- 0 placeholder, TODO, chatbot phrase, or tool-citation artifacts were found by the automated scan.
- The sitemap contains 69 URLs, and robots points to the sitemap.
- Search and the glossary next-action-owner page are intentionally `noindex`; the remaining inspected publishing surface is indexable.
- All audited internal links in the blueprint and comparison set resolve to non-draft Hugo pages, with no body self-links.
- Substantive articles are not broadly thin. Search is intentionally short because it is a utility page.

The local audit used Hugo v0.165.0+extended. Cloudflare remains pinned to Hugo v0.160.1, so the pinned production build should also be checked during a content repair pass.

## Recommended remediation order

1. Publish a monitored contact method and align all trust routes.
2. Correct publish, modified, and utility-page structured-data behavior.
3. Replace mechanical metadata clipping with complete descriptions.
4. Remove internal editorial, ranking, cluster, and publication language from reader-visible copy.
5. Audit exact numbers, timing, prevalence, vendor comparisons, and contract-sensitive guidance. Source, qualify, label illustrative, or remove each claim.
6. Correct the two contradictory next-step routes and remove the overbuying-guide overlap with the lean blueprint.
7. Resolve the hard-rule dash, heading-case, and colon-case violations.
8. Reduce repeated shared blocks and page skeletons, starting with comparisons, templates, and hub copy.
9. Align homepage and trust promises with observable practices, then choose one homepage copy source.
10. Rebuild with the production-pinned Hugo version and repeat link, asset, metadata, structured-data, and writing-pattern checks.

No reader-visible content was changed during this audit.
