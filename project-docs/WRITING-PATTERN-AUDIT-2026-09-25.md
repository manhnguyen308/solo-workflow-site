# Writing-pattern audit: 2026-09-25

## Decision

The site no longer has a word-level problem. Source content has no dash punctuation, no title-case headings, no capitalized words after heading colons, no chatbot residue, no placeholders, and only a handful of watchlist words. The September remediation removed most of what a word scan can catch.

What remains is structural, and it is site-wide. The same sentence frames, section skeletons, routing formulas, and closing lines repeat across pages until unrelated pages read as one template filled in 71 times. The strongest single-sighting tells that survive are "not X, it is Y" kickers and one-line closers, many of them added during the September disclaimer and routing pass.

This is a Detect-mode audit under `humanizer.md`. It names patterns, quotes representative lines, and gives the fix in a few words. It does not score the writing, judge authorship, or change any reader-visible copy.

## Scope and method

- All 71 Markdown files under `content/` (about 56,400 body words), including TOML front matter titles, descriptions, summaries, and `feature_image_alt` values.
- Reader-visible strings in `layouts/` (homepage, list, single, taxonomy, terms, search, 404, header, footer, related) and `config.toml`.
- A scratch build with the locally installed Hugo v0.159.2 (non-extended, 89 pages), used only to read rendered first screens and template-injected copy.
- `humanizer.md` as updated in this pass with the blader/humanizer 3.0.0 pattern set, plus the quality standards in `CLAUDE.md`.
- A pattern scanner as a safety net, followed by a full read of every page. Counts below come from the scanner; every quoted line was checked in the source.

Line numbers refer to the source file, front matter included.

## Clean checks

- 0 em dashes, en dashes, or double-hyphen dashes in content source (one spaced-hyphen exception below).
- 0 title-case headings and 0 capitalized common words after a heading colon.
- 0 chatbot phrases, citation tokens, tracking parameters, TODO markers, or placeholder text in reader copy. The three "let me know" hits are quoted examples of what not to send.
- 0 prestige lists, vague expert attributions, or "studies show" claims.
- High-signal vocabulary is almost absent: no "delve," "tapestry," "testament," "leverage," "seamless," "robust," or "game changer." Watchlist hits are "quietly" (4) and figurative "gate" or "gating" (11).
- Comparison pages open with the verdict, which is the right shape for that page type.
- The trust pages use a neutral register that suits them.

## Strong tells (act on one sighting)

### 1. Not X, it is Y used to add weight

Counts: 57 ", not X" tails in 34 files, 47 "rather than" in 37 files, and 5 split "is not X. It is Y." constructions. Most of these are ordinary instructions and should stay (see "Keep these"). The ones below name something no reader claimed, or end a paragraph on the contrast as a kicker.

- `content/software-stack-blueprints/how-to-migrate-from-scattered-tools-to-one-workflow-system.md:62`: "The target is not one application at any cost. It is one authoritative location for each current fact."
- `content/client-workflow-systems/invoice-and-payment-workflow-setup-for-freelancers-and-consultants.md:54`: "Those are not workflow triggers. They are reminders to improvise later."
- `content/client-workflow-systems/client-decision-log-workflow-for-freelancers-and-solo-service-businesses.md:175`: "A decision log is not a sealed archive."
- `content/software-stack-blueprints/_index.md:9`: "It is not a shopping list."
- `content/software-stack-blueprints/sample-stack-blueprint.md:111`: "These are workflow conditions, not growth badges."
- `content/templates-checklists/sample-onboarding-checklist.md:55`: "kickoff is early, not efficient."
- `content/client-workflow-systems/client-onboarding-workflow-for-freelancers-and-consultants.md:25`: "Onboarding should activate the agreement, not clarify what was sold."
- `content/templates-checklists/recovery-update-and-revised-plan-notice-template.md:139` and `:143`: "It should replace ambiguity, not create a second dense project brief." and "Keep the reason operational, not emotional."
- `content/templates-checklists/weekly-client-operations-checklist.md:64`: "the checklist becomes reflective rather than operational."
- `content/disclaimer/_index.md:25`: "They are meant to reduce ambiguity, not replace judgment."
- `content/glossary/system-of-record.md:28` (heading) and `:54`: "One authoritative status, not one app for everything" followed by the same point again.

Borderline, consider keeping: `content/software-stack-blueprints/sample-stack-blueprint.md:28`, "A lean budget is not a fixed monthly amount. It is the lowest total cost..." A reader who searched for a lean-budget stack may expect a dollar figure, so the negative half corrects a real expectation.

A related disclaimer frame, "These are X, not Y," labels examples as heuristics on at least nine pages: `workflow-comparisons/email-vs-client-portal-for-deliverables-and-approvals.md:62`, `workflow-comparisons/sample-notion-vs-clickup.md:33`, `software-stack-blueprints/consultant-va-collaboration-stack-blueprint.md:39`, `templates-checklists/project-start-readiness-and-handoff-boundary-worksheet.md:74`, `templates-checklists/workflow-diagnostic-checklist.md:21`, `templates-checklists/client-workflow-health-check.md:21`, `templates-checklists/workflow-starter-pack.md:45`, `templates-checklists/approval-billing-readiness-checklist.md:23`, and `templates-checklists/invoice-payment-workflow-checklist.md:23`.

Fix: state the positive claim and drop the negative half. Keep each disclaimer, but say it once in plain form ("The table shows one example division.").

### 2. One-line closers and aphoristic kickers

- `content/client-workflow-systems/workflow-automation-basics-for-solo-service-businesses.md:77`: "A silent failure path is still an undefined process."
- `content/workflow-comparisons/sample-notion-vs-clickup.md:57` and `:71`: "Flexibility becomes a liability when..." and "Structure becomes a liability when..." A paired "X becomes a trap" aphorism.
- `content/client-workflow-systems/project-handoff-workflow-for-freelancers-and-solo-service-businesses.md:333`: "the project may still be deliverable-ready, but it is not handoff-complete."
- `content/glossary/next-action-owner.md:60`: "Both roles matter, but they solve different workflow problems." This restates `:54`.
- `content/glossary/sample-workflow-definition.md:74`: "the handoff still exists. It is just hidden."
- `content/client-workflow-systems/client-decision-log-workflow-for-freelancers-and-solo-service-businesses.md:263`: "The log needs to remain short, accurate, and connected to the decisions that rely on it."
- `content/client-workflow-systems/invoice-and-payment-workflow-setup-for-freelancers-and-consultants.md:117`: "Recording payment closes the current billing state and identifies any next invoice event." This restates the list directly above it.
- `content/templates-checklists/recovery-update-and-revised-plan-notice-template.md:152`: "Clarity matters more than frustration."
- `content/client-workflow-systems/client-offboarding-workflow-for-freelancers-and-solo-service-businesses.md:32`: a one-line paragraph that restates `:30`.
- `content/client-workflow-systems/client-status-update-workflow-for-freelancers-and-consultants.md:101`: "A status update should not quietly renegotiate scope." It restates the step heading and uses "quietly."
- `content/faq/reviewing-and-maintaining-a-solo-service-workflow-system.md:118`: "This keeps the cause and effect visible."

Fix: delete the kicker and end on the concrete sentence before it. Do not rewrite it into a better metaphor.

### 3. The site's thesis repeated as a saying

The line that a tool cannot settle a process rule appears at least 16 times in 11 files, in near-identical form:

- `content/templates-checklists/stack-decision-readiness-checklist.md:110-114`: "Software does not fix... A new CRM will not clarify who owns approval. A project management tool will not define where billing status lives. An all-in-one workspace will not replace a missing lifecycle model. Clarify the process first. Then choose the smallest tool stack that supports it." A negative triad followed by a two-fragment close.
- `content/software-stack-blueprints/_index.md:34`: "A new tool cannot settle an ownership rule."
- `content/workflow-comparisons/email-vs-client-portal-for-deliverables-and-approvals.md:36`: "A new portal cannot correct an undefined approval rule."
- `content/workflow-comparisons/best-home-for-billing-status-invoicing-tool-vs-system-of-record.md:67`: "A sync does not remove the need for an authority rule."
- `content/workflow-comparisons/_index.md:26`, `content/about/_index.md:27`, `content/client-workflow-systems/_index.md:11`, `content/client-workflow-systems/client-status-update-workflow-for-freelancers-and-consultants.md:42`, `content/faq/sample-stack-faq.md:47`, `content/templates-checklists/workflow-diagnostic-checklist.md:69`, and `content/templates-checklists/client-workflow-health-check.md:164`.

Each copy passes the portability test in reverse: it could move to any page unchanged. Fix: keep the full version on the stack decision readiness checklist, where it decides something. Elsewhere, cut it or replace it with the specific failure the page covers.

### 4. Staged sequences before the point

- `content/client-workflow-systems/project-handoff-workflow-for-freelancers-and-solo-service-businesses.md:64-72`: five one-line paragraphs ("Delivery says... Approval says... Billing says... Offboarding says...") build to "Handoff is different. Handoff says..." Fix: one sentence, or a five-row table if the contrast is needed.
- `content/client-workflow-systems/client-offboarding-workflow-for-freelancers-and-solo-service-businesses.md:65` and `:160`: "Projects do not leak value only during delivery. They also leak value at the end when:" and "Not every "ending" is the same." Fix: open on the list or the three states.
- `content/client-workflow-systems/client-decision-log-workflow-for-freelancers-and-solo-service-businesses.md:67-70`: four bold parallel lines ("**Files** show what exists. **Messages** show what was said...") set up the point. Fix: one sentence naming what the log adds.

### 5. Arguing with no one

- `content/software-stack-blueprints/consultant-va-collaboration-stack-blueprint.md:83`: "Do not adopt a generic Monday or Friday ritual by default." Nothing on the page proposes one.
- `content/workflow-comparisons/best-home-for-billing-status-invoicing-tool-vs-system-of-record.md:71`: "solely because a generic workflow page suggests it." The site describes itself as the generic page it warns against.
- `content/workflow-comparisons/sample-crm-vs-pm.md:76` and `content/workflow-comparisons/calendly-vs-built-in-booking-tools-for-solo-operators.md:64` use one formula: "Do not choose/select X because [surface reason]. Choose/Select it when..." Both temptations are plausible, so keep one and state the other positively.
- `content/client-workflow-systems/project-handoff-workflow-for-freelancers-and-solo-service-businesses.md:261`: "Do not overreact, but do not assume those messages mean the same thing." No one proposed overreacting.

## Structural repetition across pages

These are medium-strength individually. Their volume makes them the main remaining signal.

### 6. The first screen restates the page's purpose

On a typical template page the reader sees the purpose four or five times before the first instruction:

1. the hero description;
2. the "Use this page for" aside from `layouts/_default/single.html:52-53`, rendered on 63 pages and filled with the summary, 27 of which begin "Use this...";
3. an opening paragraph that begins "Use this worksheet/checklist/template when..." (about 90 lines in 46 files begin "Use this," "Use it," or "Use these");
4. often a heading such as "Use this workflow when" followed by "Use it when:" (13 pages).

Example: `content/templates-checklists/approval-and-feedback-routing-worksheet.md:22-28` renders five "use this" or "use it" lines before the worksheet starts.

The same aside adds two generic sentences to 56 pages: "Open [section] when you need the broader topic before this specific page." and "After this page, open [page] for the related task or decision." (`layouts/_default/single.html:58` and `:64`). They pass the portability test in reverse.

Fix: write summaries as the outcome rather than "Use this...", rewrite or drop the aside sentences, and open the body on the first real instruction.

### 7. One routing formula carries most transitions

- 223 sentences in 48 files follow "If [condition], use/continue to/return to [page]."
- They stack four or five deep: `client-workflow-systems/proposal-revision-and-approval-workflow-for-freelancers-and-solo-service-businesses.md:167-173`, `client-workflow-systems/milestone-delivery-workflow-for-solo-service-businesses.md:197-203`, `templates-checklists/project-start-readiness-and-handoff-boundary-worksheet.md:105-111`, and `client-workflow-systems/invoice-and-payment-workflow-setup-for-freelancers-and-consultants.md:171-173`.
- 21 sentences in 17 files send the reader back to the lifecycle guide, most of them in the closing paragraph. Six use the same wording: "If the broader/wider/whole lifecycle still feels messy/loose, return to Freelance Client Workflow System: Inquiry to Final Payment."
- Several pages link the same next page four or five times. `client-workflow-systems/proposal-to-contract-handoff.md` links the revision workflow at `:23`, `:98`, `:118`, `:153`, and `:167`.

Fix: one routing block per page, a table where there are several routes, and varied sentence shapes elsewhere.

### 8. Shared section skeletons

Workflow pages repeat the same sequence of sections:

- "Who needs..." with a three-item audience list, usually in the same order: freelancers and consultants, solo operators, businesses where (10 pages, for example `client-onboarding-workflow-for-freelancers-and-consultants.md:27-31` and `invoice-and-payment-workflow-setup-for-freelancers-and-consultants.md:28-32`);
- a numbered lifecycle recap ("Sequence from agreement to delivery," "Sequence from qualification to onboarding");
- "Where [stage] breaks" (9 pages);
- a "Phase | Main question | Output" table;
- a "Related [stage] controls" list of "label: [link]" lines;
- a completion section ending in "when:" and a list;
- the closing routing paragraph from pattern 7.

Template pages add a gating preamble of three to seven sections before the worksheet ("Use it when," "Do not use it for," "Decisions to make elsewhere," "Information to gather first," "Clarify the billing rule first when"). The invoice checklist (`templates-checklists/invoice-payment-workflow-checklist.md:27-51`) and the onboarding checklist (`templates-checklists/sample-onboarding-checklist.md:22-70`) are the longest. Both end their preamble with the same sentence: "this checklist is too early."

Templates also share "Use with:" blocks (22 in 6 files), "Warning signs..." or "Signs..." sections (14 in 13 files across the site), and a closing heading built as "A [record] ready to..." or "A complete [record] includes" on 14 template pages. Five closers say the template "has done its job," "is doing its job," or "has been used well."

The handoff and decision-log workflows use the same four examples in the same order: website, brand identity, consulting, rule-based setup (`project-handoff-workflow-for-freelancers-and-solo-service-businesses.md:273-289`, `client-decision-log-workflow-for-freelancers-and-solo-service-businesses.md:233-249`).

Fix: keep the worksheet, table, or steps and one boundary note. Remove sections the page's own decision does not need, so page shape follows content rather than a template.

### 9. Comparison and blueprint closers

- All six comparisons and the comparison hub end on a one-sentence imperative that lists four to six nouns: "Record the chosen channel, version rule, approver, decision location, and next action..." (`email-vs-client-portal-for-deliverables-and-approvals.md:84`), with the same shape at `sample-crm-vs-pm.md:97`, `sample-notion-vs-clickup.md:86`, `calendly-vs-built-in-booking-tools-for-solo-operators.md:86`, `all-in-one-workspace-vs-specialized-stack-for-solo-operators.md:91`, `best-home-for-billing-status-invoicing-tool-vs-system-of-record.md:82`, and `workflow-comparisons/_index.md:49`.
- Three comparisons use one scope frame in the second paragraph: "This is a field-ownership decision. It does not select..." (`best-home-for-billing-status-invoicing-tool-vs-system-of-record.md:24`, `sample-crm-vs-pm.md:24`, `email-vs-client-portal-for-deliverables-and-approvals.md:23`), and a fourth opens its second paragraph the same way ("This is a category comparison," `calendly-vs-built-in-booking-tools-for-solo-operators.md:24`). `CLAUDE.md` requires a comparison to state what it does not decide, so keep the content and vary the sentence.

### 10. Counted lead-ins with no subject

Four workflow pages open a list with "It" that refers to nothing, apparently left behind when a lead-in sentence was removed:

- `proposal-revision-and-approval-workflow-for-freelancers-and-solo-service-businesses.md:42`: "It should make six things explicit:"
- `invoice-and-payment-workflow-setup-for-freelancers-and-consultants.md:38`: "It should make four things visible:"
- `client-offboarding-workflow-for-freelancers-and-solo-service-businesses.md:44`: "It should make six things clear:"
- `change-request-workflow-for-freelancers-and-consultants.md:45`: "It should let you answer five questions quickly:"

The "make N things X" frame appears on seven workflow pages in total. Fix: name the subject and drop the count.

### 11. One idea restated within a page

- Homepage (`layouts/index.html`): "workflow before tools" appears in the hero (`:35`), chooser intro (`:65`), value section (`:101`, `:107`), resource intro (`:174`), start-here section (`:221-222`), and final CTA (`:237-238`).
- Workflow hub (`content/client-workflow-systems/_index.md`): the same point at `:11`, `:13`, `:25`, `:62`, and `:98-102`, alongside six separate routing sections.
- `client-workflow-systems/milestone-delivery-workflow-for-solo-service-businesses.md` lists the milestone record's attributes six times (`:41-46`, `:52-56`, `:70-76`, `:141-146`, `:150-155`, `:218-222`).
- `client-workflow-systems/proposal-to-contract-handoff.md:111-116` and `:122-127` repeat the same five-item package list.
- `client-workflow-systems/project-handoff-workflow-for-freelancers-and-solo-service-businesses.md` has two completion lists back to back (`:319-331`, `:345-354`).
- `client-workflow-systems/client-offboarding-workflow-for-freelancers-and-solo-service-businesses.md:162-164` and `:168-171` define the same three end states twice.
- `client-workflow-systems/client-decision-log-workflow-for-freelancers-and-solo-service-businesses.md` says a short engagement may not need a log three times (`:61`, `:95`, `:267`).
- `client-workflow-systems/workflow-automation-basics-for-solo-service-businesses.md:20` and `:105` bookend the page with the same five-item list.

Fix: merge each set into its strongest occurrence.

### 12. Shared template copy

- The six homepage resource cards all open with one frame: "Start here when," "Use these when," "Open these when," "Use these after," "Use this when," "Use this for" (`layouts/index.html:180-210`). `humanizer.md` asks for distinct card introductions.
- The 404 page repeats those frames and labels four cards "Start here" (`layouts/404.html:26-46`). `:22` adds a label-colon line: "Workflow-first: choose the workflow section when..."
- Eyebrow, heading, and intro say the same thing: "Core starting points / Begin with the core pages in this section" (`layouts/_default/list.html:98-100`), "Recommended entry point / Use the recommended starting point" (`:113-114`), "Nothing published yet / This section is still being filled out" (`:142-143`).
- "The [page/path/answer] that matches your [situation/decision/problem]" appears 7 times in content and again in `layouts/index.html:64`, `layouts/_default/list.html:76`, `layouts/_default/taxonomy.html:12`, `layouts/_default/terms.html:16`, and `layouts/404.html:73`.
- The homepage value section is a three-pillar block ("Workflow-first," "Scenario-based," "Implementation boundaries," `layouts/index.html:104-117`).

## Weak tells (act where they cluster)

### 13. Link anchors in old title case, with many names per page

About 440 of 945 internal link anchors (47 percent) are in title case, although every page title is now sentence case. Many copy titles that no longer exist: "Software Stack Blueprint: Solo Freelancer (Lean Budget)" for the page now titled "Lean software stack blueprint for solo freelancers," and "Best Home for Billing Status: Invoicing Tool vs System of Record" for "Billing status: invoicing tool or system of record." The switch happens mid-sentence: "If the wider client lifecycle still feels messy, return to Freelance Client Workflow System: Inquiry to Final Payment." Pages also cycle through names. The CRM comparison, the weekly operations checklist, and the all-in-one comparison each have 8 anchor variants. `content/problem-to-page-guide.md` invents labels that match no title: "Buying-Boundary Guide: Stack Without Overbuying" (`:75`), "Migrate From Scattered Tools Blueprint" (`:80`), "Scope-Reset and Recovery Worksheet" (`:68`).

Fix: use the current sentence-case title or one short descriptive anchor per page. A script can make this change safely.

### 14. Crutch vocabulary

Per 1,000 words: "clear" 2.0, "visible" 1.65, "explicit" 1.3 (97 with "explicitly"), "authoritative" 1.06, "operational" and "operationally" 1.0. "Truth" appears 29 times in constructions such as "client truth," "current truth," "invoice truth," and "where intake truth lives." "Feels" appears 34 times, mostly with "loose," "messy," or "fuzzy" (37 uses) standing in for a named symptom. "Actually" appears 29 times. Figurative "gate" or "gating" appears 11 times (`problem-to-page-guide.md:40`, `:60`, and several "approval and billing gate" link labels).

Fix: replace "client truth" with "current client status," replace "feels messy" with the symptom, and cut "actually" unless it marks a real contrast.

### 15. Stacked enumerations

Sentences often carry five to eleven comma-separated nouns, especially openings and closings. `templates-checklists/escalation-and-pause-state-worksheet.md:22` lists eleven. See also `software-stack-blueprints/how-to-choose-a-software-stack-without-overbuying-tools.md:111` and `workflow-comparisons/all-in-one-workspace-vs-specialized-stack-for-solo-operators.md:91`. There are also 39 list items in 18 files that begin "one" ("one scope record, one live first milestone, one named approval owner..."). Weak alone. Combined with pattern 8 they flatten the voice.

### 16. Formatting

- A horizontal rule between every section: 23 across `templates-checklists/approval-billing-readiness-checklist.md`, `templates-checklists/client-workflow-health-check.md`, and `templates-checklists/stack-decision-readiness-checklist.md`.
- Bold used as headings (`templates-checklists/stack-decision-readiness-checklist.md:39`, `:45`, `:53`, `:59`) and bold-only list items (`templates-checklists/escalation-and-pause-state-worksheet.md:92-96`).
- Invented label-colon link lines in `client-workflow-systems/sample-client-workflow.md`: "Review-stage bridge:" (`:113`), "Communication follow-on:" (`:124`), "Scope-control follow-on:" (`:135`), "Approval-check follow-on:" (`:137`), "Approval-ambiguity follow-on:" (`:148`), "Closeout non-response follow-on:" (`:159`).
- House-rule violation: a spaced hyphen used as a dash in six bold-label list items, `client-workflow-systems/sample-client-workflow.md:54-59` ("**Intake and qualification** - collect..."). Earlier scans looked for em dashes, en dashes, and double hyphens, so they missed it.
- Curly quotes in all 63 `feature_image_alt` values and in `config.toml:18` (`defaultImageAlt`). The house style asks for straight quotes in source files. TOML literal strings (single quotes) avoid escaping.

### 17. Commentary after examples

- `content/faq/what-counts-as-client-approval-before-billing-or-next-stage.md:90`: "The message asks for the decision and gives the client a clear alternative if revisions remain."
- `content/faq/what-to-do-when-a-client-goes-silent-during-review.md:65`: "This version identifies the delivery, the open decision, and the action that follows the response."

Fix: cut. The example already shows it.

### 18. Generic headings

"Why it matters" (`glossary/next-action-owner.md:25`), "Why this matters for solo operators" (`glossary/sample-workflow-definition.md:29`), "Edge cases" (`client-workflow-systems/milestone-delivery-workflow-for-solo-service-businesses.md:191`), and "Definition of done" (`:216`). Fix: name what the section decides.

## Defects found while reading

These are editing errors rather than style patterns. They belong in the same repair pass.

- `content/client-workflow-systems/sample-intake-guide.md:30-34`: "Use an intake workflow to:" is followed by "filters out," "captures," "protects," and "hands." The verb forms do not fit the lead-in.
- The four subjectless "It should..." lead-ins in pattern 10.
- `content/workflow-comparisons/email-vs-client-portal-for-deliverables-and-approvals.md:40`: "Email uses the same channel as the review thread." This is circular.
- `content/client-workflow-systems/milestone-delivery-workflow-for-solo-service-businesses.md:84` lists "complete" as a state; the list at `:88-93` ends with "approved" instead.
- FAQ titles use three patterns: "FAQ: what should I do...," "Client has not approved deliverables: what to do next," and "Reviewing and maintaining a solo service workflow system: FAQ." The FAQ hub list shows the mix (`content/faq/_index.md:14-20`).
- Outside this audit's scope, but worth a decision: `content/editorial-policy/_index.md:50` tells readers that updated dates are staggered when several pages are revised together. That is internal process language on a public page, and it says the dates are assigned rather than observed.

## Keep these

Per the "When not to act" rules in `humanizer.md`, these are not findings:

- Question headings on FAQ pages. The page type is question and answer.
- Contrasts where both halves carry information: "A revised quote is not an approved change." (`change-request-workflow-for-freelancers-and-consultants.md:128`), "editable doc, not screenshots" (`client-input-dependency-worksheet.md:126`), "Starting delivery is not a prerequisite for change control." (`proposal-revision-and-approval-workflow-for-freelancers-and-solo-service-businesses.md:108`).
- Legal and trust boilerplate such as "not a blanket endorsement" and the professional-advice limits. That register belongs on those pages.
- The Goal, Inputs, and Output labels in the lifecycle guide, which readers scan as structured data.
- The `&rarr;` arrows on homepage links. They are hidden from screen readers and work as link affordances, not heading decoration.
- Curly quotes in rendered body text. Hugo's typographer produces them consistently from straight source quotes.
- Lines with a specific human voice: "it mainly survives because nobody has closed it down yet" (`stack-audit-consolidation-worksheet.md:157`), "Do not pad it to make the week sound bigger than it was." (`weekly-client-status-update-template.md:103`), and the one-word answer "No." at `faq/sample-stack-faq.md:35`.

## Recommended repair order

If an Edit-mode pass is authorized, this order gives the most visible improvement for the least churn:

1. Fix the defects above: intake grammar, subjectless "It," the circular email line, the spaced hyphens, and the milestone state list.
2. Rewrite the shared article aside in `layouts/_default/single.html` and the 27 "Use this..." summaries so the first screen stops restating purpose.
3. Cut the kickers and weight-adding contrasts in patterns 1 to 5 (about 30 lines).
4. Normalize internal link anchors to current titles with a script, then spot-check rendered pages.
5. Trim section skeletons one cluster at a time: comparisons first (smallest), then templates, then workflows. Keep every table, worksheet, and step.
6. Vary the homepage, 404, and list-template card copy.
7. Switch alt text and `defaultImageAlt` to straight quotes.

Each step touches reader-visible copy, so each needs the publication gate in `humanizer.md`, a Hugo build, and a rendered check in the browser at phone, tablet, and desktop widths per `CLAUDE.md`.

No reader-visible content was changed during this audit.
