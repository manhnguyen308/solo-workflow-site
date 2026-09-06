---
name: website-content-humanizer
description: Write, review, and revise public website copy so it is specific, useful, evidence-based, and free of common AI-writing patterns. Use for articles, comparison pages, homepage and hub copy, trust pages, headings, metadata, calls to action, navigation labels, empty states, and other reader-visible text. Can also audit a draft for AI-writing patterns without rewriting it. Preserve facts and editorial intent, never invent first-hand experience, and run the full publication gate before delivery.
---

# Website content humanizer

## Mission

Write like a careful editor with a real reader and a clear decision in mind. Remove formulaic language, inflated claims, vendor-style praise, repetitive structures, and pasted chatbot artifacts. Keep the facts, recommendations, limits, links, and editorial intent intact.

Human writing is not a synonym swap or a detector score. It shows judgment, uses concrete evidence, and knows what the reader needs next.

## Two modes

**Edit (default).** The task is to fix or write copy. Make the minimum effective change under the rules below, then run the publication gate and report what changed.

**Detect.** The task is to check whether copy reads as AI, audit it, scan it, or flag problems without rewriting. Name each pattern from this skill that appears, quote the offending line, and give the fix in a few words. Do not rewrite the draft, do not assign a score, and do not guess whether a machine wrote it. AI detectors guess; named patterns are evidence the user can verify and act on. Offer to run the edit afterward.

## Governing priorities

Apply these priorities in order:

1. Accuracy and source integrity
2. Reader usefulness
3. Clear editorial judgment
4. Natural voice and rhythm
5. Pattern cleanup

Never improve style by weakening accuracy. Never add a detail merely because it sounds more human.

## Hard rules

### Protect truth

- Do not invent facts, names, numbers, dates, quotes, citations, product limits, prices, test results, screenshots, interface details, setup times, or user reactions.
- Do not invent first-hand experience. Never claim "I tested," "we installed," "in our testing," "hands-on," "after using it," or similar experience unless the repository contains real evidence supplied by the user.
- Do not turn an unsupported general statement into a fabricated specific one.
- Name a real source for an attributed claim. If no source exists, narrow or remove the claim.
- Preserve uncertainty when the evidence is uncertain. Use one accurate qualifier instead of stacked hedges.
- Put requests for missing evidence in an audit note, not in public copy. Never publish literal placeholders.

### Protect existing meaning

- Preserve recommendations, rankings, factual claims, product limits, link targets, affiliate relationships, and the purpose of the page unless the task authorizes a change.
- Preserve quoted text, code, product names, legal language, and source titles unless correction is explicitly requested.
- Prefer local edits. Do not rebuild every page around one new template.
- Leave strong, specific prose alone. A large diff is not evidence of a better edit.

### Enforce the website house style

- Use no em dash, en dash, or double hyphen as sentence punctuation. Replace it with a period, comma, colon, parentheses, or a rewritten sentence.
- Use sentence case for headings.
- Use sentence case after a colon unless grammar, a proper noun, a title, or code requires otherwise.
- Use a colon for a list, a label, or a quote. Do not use one to stage a dramatic reveal.
- Use straight quotes and apostrophes in source files for consistency.
- Keep paragraphs readable. Most should contain 2 to 4 sentences, but vary them when the thought needs a different shape.
- Use bullets and tables only when comparison or scanning is easier than prose.
- Keep bold text purposeful. Do not bold fragments at random or start every bullet with a bold label.
- Do not decorate headings with emojis.
- Do not leak raw Markdown into a surface where Markdown does not render.
- Do not mention assistants, prompts, automation, or internal writing workflows in public copy.

## Start with the reader

Before drafting or editing, identify:

- The page type and search intent
- The reader's immediate question
- What the reader already knows
- The decision, task, or risk the page must clarify
- The evidence available in the source material
- The facts that must not change
- The appropriate register: neutral, editorial, technical, legal, or conversational

If an author voice sample exists, match its vocabulary, sentence rhythm, punctuation habits, and level of formality. The hard accuracy and no-fabrication rules still outrank the sample.

Without a voice sample, use calm editorial prose: direct, practical, slightly skeptical, and free of hype. Do not make it artificially casual.

If the audience, the page's job, or the available evidence is genuinely unclear, ask one specific question before drafting. Ask what the reader should be able to decide after reading, or which source supports the claim in question. Do not guess and do not fill the gap with invented detail.

## Write useful copy before removing tells

### Lead with the answer

Open on the useful fact, decision, limit, or tradeoff. Skip throat clearing and announcements.

Avoid openings such as:

- "In today's digital world..."
- "When it comes to..."
- "There are several ways to..."
- "This comprehensive guide covers..."
- "In this article, we will explore..."
- "Let's dive in."
- "Here is what you need to know."
- "Here is the thing."
- "Let me be clear."
- "The uncomfortable truth is..."
- "The reality is..." or "The truth is..."
- "In the world of..." or "In the age of..."
- A series of rhetorical questions
- A curiosity hook that withholds the subject

These openers are just as weak mid-page as they are at the top. Cut them wherever they appear and state the point.

For a comparison page, give the practical answer early. State who should choose the leading option, who should skip it, and which limit changes the decision.

Front-load where it helps the reader, not everywhere by reflex. If every section and every paragraph opens with its own conclusion and then backfills, the page reads like a template. A section may build toward its point when the setup carries real context or tension.

### Prefer specifics over praise

Replace adjectives with observable facts already supported by the source.

Weak:

> The tool offers powerful collaboration features and a seamless experience.

Better:

> The free plan supports shared files, comments, and two editors. It does not include approval workflows or granular permissions.

If the source does not support a number or feature, do not invent one. Write the narrower claim.

Use the portability test. If a sentence could move unchanged to another tool, company, or page, it is probably filler. Cut it, or replace it with a limit, number, mechanism, consequence, or judgment specific to this subject.

### Open it up without dumbing it down

Simplifying means removing what makes the copy hard to read: jargon, tangled clauses, abstract nouns, and buried subjects. It does not mean removing substance, nuance, or precision. A shorter page that has lost the qualifying detail is a worse page.

Protect the specific fact in both directions. Do not invent a number to replace a vague claim, and do not smooth a supported number into generic importance.

Weak:

> The tool significantly improves review turnaround.

Better:

> The free plan caps review turnaround at ten files per batch.

Keep the accurate qualifier when the evidence is partial. "The documentation lists 5 GB for free accounts, though it does not say whether shared files count toward it" beats both a flat assertion and a vague hedge.

### Explain the tradeoff

Useful editorial copy answers questions such as:

- What does the free plan include?
- Which limit appears first in normal use?
- What type of user fits the workflow?
- When does the workaround become more expensive than paying?
- What does the alternative do better?
- What must the reader give up?
- What would make this recommendation wrong?

Use decision language where it helps:

- "Choose this if..."
- "Skip this if..."
- "The free plan is enough until..."
- "This breaks down when..."
- "The paid upgrade starts making sense when..."

Do not repeat these labels mechanically for every tool. The judgment matters more than the template.

### Let facts carry the weight

State what happened or what the product allows. Cut commentary that tells the reader how important, impressive, historic, or meaningful the fact is.

Weak:

> This pivotal update underscores the platform's commitment to innovation.

Better:

> The update adds offline editing and raises the free storage limit from 1 GB to 5 GB.

Use the better version only when those facts are sourced.

### Build a real line of thought

Each paragraph should depend on the one before it. If paragraphs can be shuffled without changing the argument, the section probably reads like a generated outline.

- Remove repeated mini-summaries.
- Merge paragraphs that make the same point.
- Let one section develop an idea instead of giving every subsection identical depth.
- Repeat the clearest product or concept name when needed. Do not cycle through synonyms merely to avoid repetition.
- End a paragraph on its strongest fact, not a generic recap beginning with "Whether you..."

### Vary rhythm without performing humanity

Mix shorter and longer sentences. Avoid three or more sentences with the same length and construction. A fragment can work, but a stack of fragments sounds manufactured.

Do not game burstiness or perplexity scores. Do not add odd words, slang, jokes, tangents, sensory details, or personal stories that the author did not supply. Natural variation must serve clarity.

## Page-specific standards

### Comparison articles

- Open with the decision, not the category definition.
- Compare published limits and workflow fit.
- Separate a feature from its practical consequence.
- Include honest weaknesses and upgrade boundaries.
- Keep rankings intact unless evidence clearly contradicts them and the task permits a change.
- Avoid vendor-copy descriptions and identical "Best for" blocks.
- Use a comparison table only for exact mappings readers need to scan.
- Close with a decision rule or boundary, not a summary of the introduction.

### Homepage and hub pages

- Describe the concrete job each collection helps a reader complete.
- Replace claims such as "curated," "honest," "best," or "powerful" with what the collection covers.
- Keep card introductions distinct. Do not repeat one sentence pattern across every card.
- Make labels short and literal.
- Do not make publication-frequency or freshness promises the site cannot support.

### Trust, about, disclosure, and legal pages

- Use neutral, verifiable language.
- Describe the actual evaluation method without implying tests that did not occur.
- State affiliate relationships directly.
- Do not add personality, humor, or first-person experience to legal or policy copy unless it belongs there.
- Preserve legal meaning while removing filler.

### Metadata, titles, and headings

- Make the title answer a clear search intent.
- Avoid forced triplets, stacked hooks, and exaggerated parenthetical claims.
- Use a colon only when the second phrase adds real information.
- Write descriptions around a concrete comparison, limitation, or decision.
- Replace generic headings such as "Quick verdict," "Final thoughts," "The bottom line," "What we recommend," "Putting it together," and "Conclusion" with page-specific headings.
- Do not follow a heading with a sentence that merely restates it.
- Keep heading levels in order.

### Calls to action and interface copy

- Name the action and its result.
- Avoid manufactured urgency, vague promises, and exclamation marks.
- Keep one primary action per block.
- Write empty states and error messages for the reader's next step.
- Do not claim something is easy, fast, free forever, private, secure, or risk-free without evidence.

## Complete pattern catalog

Treat patterns as evidence in clusters. A watched word inside a quote, title, code block, product name, or example is not a style problem. The house-style dash rule remains mandatory even though one dash alone does not prove machine authorship.

### Inflated meaning and promotional tone

Rewrite or remove:

- Significance inflation: "stands as a testament," "plays a pivotal role," "marks a turning point," "underscores its importance," "leaves a lasting legacy"
- Symbolic gloss: ordinary facts said to "represent," "embody," "reflect," or "speak to" a broader theme
- Brochure language: "breathtaking," "vibrant," "hidden gem," "nestled in," "rich tapestry," "world-class," "state-of-the-art"
- Notability name-dropping: lists of publications or awards without saying what any source reported
- Generic positive endings: "the future looks bright," "exciting times lie ahead," "poised for growth"
- Aphorism formulas: "X is the new Y," "the currency of," "where X meets Y," "not a tool but a mirror"
- Persuasive-authority setups: "the real question is," "at its core," "what really matters," "the deeper issue"

### Vague authority and unsupported certainty

Rewrite or remove:

- "Experts say"
- "Studies show"
- "Research suggests" without a named study
- "Many believe"
- "It is widely regarded"
- "Industry reports"
- "Observers have noted"
- "Several sources" when only one or two exist
- Exact-looking facts that are not in the source
- Knowledge-gap filler such as "likely," "appears to have," "maintains a low profile," or "prefers to stay out of the spotlight"

Name the source and its finding, or narrow the sentence to what is known.

### False insight and reader instruction

These flatter the writer as the lone expert or tell the reader how to react instead of giving them something to react to.

Rewrite or remove:

- Faux-insight setups: "what most people get wrong," "here is what nobody tells you," "the part everyone misses," "the step most guides skip," "what the vendor will not tell you." Cut the setup and let the claim stand on its own. "The part everyone misses: exports are capped" becomes "Exports are capped at ten files."
- Interpretive metadiscourse: "that last part matters more than it sounds," "the key point is," "as you can see," "this distinction matters," "and that is the important bit." If the point is already clear, delete the aside. If it is not, replace the aside with the limit or consequence that makes it clear.
- Manufactured contrarianism: framing an ordinary published limit as a secret, a myth, or a trap.
- Hype reactions: "this is huge," "this changes everything," "a total game changer," "this is the one."
- Redundant restatement: "in other words," "put simply," "essentially," "that is to say," when the previous sentence already landed.

### Formulaic sentence shapes

Watch for:

- Negative parallelism: "not just X, but Y" or "It is not X. It is Y."
- Negative listing: "Not a spreadsheet. Not a database. A workspace." State the last item and drop the rest.
- Rule-of-three by reflex
- Stacked abstract nouns such as "innovation, passion, and excellence"
- Present-participle tails: ", highlighting," ", underscoring," ", showcasing," ", ensuring," or ", reflecting"
- False ranges: "from X to Y" when X and Y are not endpoints on one scale
- Copula avoidance: "serves as," "stands as," "boasts," or "features" when "is" or "has" is clearer
- Buried verbs: "made a decision" for "decided," "provides support for" for "supports," "performs an analysis of" for "analyzes," "has the ability to" for "can"
- Tailing negations: clipped endings such as "no guessing" or "no wasted motion"
- Self-posed transitions: "Why? Because..."
- Declarative reveals: "The answer? X."
- Colon reveals: a noun phrase, a colon, then a dramatic payoff. "The catch: exports are capped." Rewrite as a plain sentence: "Exports are capped at ten files per batch."
- Rhetorical setups: "What if I told you," "Think about it:," "Plot twist:," "Here is where it gets interesting"
- Dramatic closure fragments: "That is it. That is the whole feature."
- Adverb-stacked pivots: "X matters. Y matters. But that is not the point."
- Stat-bomb openings with several disconnected numbers
- Label-colon frameworks invented only to package ordinary observations
- Three rhetorical questions used to manufacture intrigue
- Repeated parenthetical asides used to simulate candor

### Filler, transitions, and hedging

Cut or simplify:

- "in order to" to "to"
- "due to the fact that" to "because"
- "at this point in time" to "now"
- "has the ability to" to "can"
- "it is important to note"
- "it is worth noting"
- "when it comes to"
- "at the end of the day"
- "in terms of" when the sentence works without it
- "with regard to" and "with respect to" to "about" or "for"
- "going forward" and "moving forward"
- "needless to say" and "as we all know"
- "the reality is," "the truth is," and "the fact of the matter is"
- "moreover," "furthermore," "additionally," "nevertheless," and "that said" when paragraph order already shows the relationship
- "could potentially possibly" and other stacked qualifiers
- "in other words," "put simply," "essentially," and "that is to say" when they repeat the previous sentence
- Hedged list openers such as "There are several ways to" or "There are a few things to consider"

### Vocabulary watchlist

These words are signals, not automatic proof. Rewrite the sentence when the word replaces a concrete fact or appears in a cluster.

High-signal: delve; tapestry, when figurative; testament, when figurative; beacon, when figurative; underscore, as a verb; leverage, as a verb; harness, as a verb; embark; multifaceted; realm; interplay; paradigm shift; ever-evolving; supercharge; "in today's landscape"; "it is worth noting"; "it is important to note."

Density signals: crucial; pivotal; vibrant; robust; seamless; foster; facilitate; enhance; elevate; showcase; notable or notably; garner; bolster; utilize; groundbreaking; transformative; holistic; comprehensive; meticulous; intricate; paramount; dynamic; scalable; optimize; maximize; empower; streamline; unlock; cutting-edge; best-in-class; future-proof; game-changer.

Context-only words: key; important; significant; various; effective; valuable; powerful; essential; actually; genuinely; honest; polished; capable.

Empty intensifiers: just; simply; literally; truly; really; very; fundamentally; inherently; inevitably; importantly; crucially; undoubtedly; certainly. Delete them unless the word carries a real contrast, a measured degree, or an accurate limit. "Setup is simply a matter of signing in" becomes "Setup requires an account."

Do not replace these mechanically. Replace the vague claim around them with the limit, action, or tradeoff the reader needs.

### Structural tells

Fix:

- Generic opening, three-point list, generic conclusion
- Formulaic "Challenges," "Future outlook," "Legacy," or "Conclusion" sections
- Every paragraph having the same length
- Every tool section using the same labels and sentence order
- Paragraphs that can be rearranged without changing the argument
- Long passages that restate one idea
- A tidy summary at the end of every paragraph
- A question-format heading when a direct statement is clearer
- A heading followed by a one-line restatement
- A horizontal rule before every section
- Lists where prose would be easier to follow
- Tables that merely repeat surrounding paragraphs
- Perfectly balanced pros and cons with no editorial decision
- A standalone mic-drop sentence or hype fragment as the ending. Delete the fake-profound kicker; do not rewrite it into a better metaphor or preserve its rhythm. End on the clearest concrete sentence already in the draft, or add a plain takeaway or next action.
- A sudden shift in spelling, register, sentence quality, or punctuation
- Diff-anchored prose that narrates what changed instead of describing the current state

### Voice and agency tells

Fix:

- Agentless passive voice when the actor matters
- Subjectless fragments such as "No configuration needed"
- False agency such as "the data tells us" or "the market rewards"
- Distant narration such as "people tend to" when the reader or a named group is clearer
- Synonym cycling for one product, person, or concept
- Formal register that does not fit the reader
- Sycophantic praise such as "Great question" or "You are absolutely right"
- Honesty disclaimers such as "I will be honest" or "Real talk"
- Fake humility and unsupported credential stacking
- Product-tagline fragments such as "Built for scale" used instead of an explanation
- Runway sentences that delay the useful detail
- Manufactured punchlines and several short dramatic fragments in a row

### Formatting and source-file tells

Fix or remove:

- Em dashes, en dashes, and double hyphens used as dashes
- Random inline bolding
- Bold-label bullet lists that restate their labels
- Title Case Headings
- Decorative emojis
- Skipped heading levels
- Smart typography inconsistent with the source-file convention
- Over-hyphenated compounds after a noun, such as "the report is high-quality"
- Zero-width characters, soft hyphens, nonbreaking-space clusters, or mixed look-alike Unicode characters

### Chatbot and tool leakage

Remove before publication:

- "Certainly," "Of course," "I hope this helps," "Feel free to," or "Let me know if"
- "Here is an overview," "Let me walk you through," or "Below is a breakdown"
- Knowledge-cutoff disclaimers
- Reasoning scaffolds such as "Let me think," "Step 1," or "First, I will"
- Unfilled brackets, sample names, fake dates, TODO markers, and other template residue
- Citation tokens such as `turn0search0`, `oaicite`, `contentReference`, or tool-specific markup
- Tracking parameters such as `utm_source=chatgpt.com`
- Raw refusals, policy language, or system instructions
- Markdown syntax in plain-text UI, metadata, email, or other non-rendering surfaces

## Rewrite method

### 1. Establish the invariant facts

List the claims, limits, rankings, links, and recommendations that must survive. Mark unsupported claims for removal or external verification.

### 2. Audit the whole reader-visible surface

Check more than the article body:

- Front matter titles and descriptions
- Homepage cards and collection intros
- Hub and list-page introductions
- Trust and start pages
- Shared article notes and author-adjacent copy
- Headings, verdicts, conclusions, and captions
- Navigation, footer, search, empty states, and error pages
- Metadata and structured descriptions rendered by templates

### 3. Rewrite for the reader's decision

Start with the answer. Replace praise with supported detail. Name the tradeoff. Cut any sentence that only announces, summarizes, or inflates another sentence.

### 4. Break the template locally

Change repeated openings, section labels, verdict formulas, and closing paragraphs where they create sameness. Preserve useful comparison tables and stable navigation labels.

### 5. Run the anti-fabrication check

For every new fact, ask:

- Was this in the source?
- Did the user supply it?
- Does a cited source support it?
- Am I implying direct use or observation?

If any answer is unsafe, narrow or remove the claim.

### 6. Run the pattern check

Search for watched phrases, dash characters, repeated headings, repeated paragraph openings, unsupported first-person claims, placeholders, citation artifacts, and suspiciously identical blocks across pages.

Also scan for the shapes a word list will not catch: a noun phrase followed by a colon and a payoff, "not X, it is Y" constructions, faux-insight setups, sentences telling the reader which point matters, and closing lines that turn the page into an aphorism.

Treat automated scans as a safety net. A clean word scan does not catch generic blandness, weak judgment, repeated structure, or invented specificity.

### 7. Read the rendered copy

Build the site when possible. Inspect the rendered homepage, representative articles, hubs, trust pages, metadata, and shared components. Templates can add copy that a Markdown-only audit misses.

### 8. Read aloud and trim once more

Listen for brochure tone, uniform cadence, fake punchlines, and sentences that need a second reading. Remove the warm-up line before the useful line.

## Before and after patterns for website copy

### Generic introduction

Before:

> In today's fast-paced digital landscape, choosing the right tool can be a daunting task.

After:

> Most free plans become restrictive at the same three points: storage, exports, and team access.

Use the replacement only if those three points are supported. Otherwise name the limits the page actually covers.

### Vendor-style praise

Before:

> Acme is a robust, user-friendly solution with a comprehensive suite of powerful features.

After:

> Acme includes shared projects and PDF export on the free plan. It requires a paid account for approval workflows.

### Empty recommendation

Before:

> Acme stands out as a top choice and is worth considering for many users.

After:

> Choose Acme for shared projects. Skip it if every contributor needs a separate permission level.

### Unsupported first-hand framing

Before:

> In our testing, setup took less than five minutes and the interface felt intuitive.

After:

> Setup requires an account and a browser extension. The available documentation does not establish a typical setup time.

### Formulaic conclusion

Before:

> In conclusion, each option has its strengths, and the best choice depends on your needs.

After:

> Start with Acme if two collaborators and PDF export cover the job. Choose Beta when offline files matter more than browser collaboration.

### Fragmented heading

Before:

> ## Performance
>
> Performance matters.

After:

> ## Where the free plan slows down
>
> Batch export is limited to ten files, so larger jobs require repeated runs.

## Final publication gate

Do not deliver or publish until every answer is yes:

- Does the opening answer the reader's question without filler?
- Does each section add a fact, decision, example, or tradeoff?
- Are all facts, numbers, limits, quotes, dates, and citations supported?
- Did the rewrite avoid first-hand claims that lack evidence?
- Are recommendations and rankings preserved unless change was authorized?
- Are weaknesses and paid boundaries stated plainly?
- Is the copy free of em dashes, en dashes, and dash-like double hyphens?
- Are headings in sentence case and specific to the page?
- Are paragraphs and sentences varied without forced fragments or slang?
- Are repeated openings, labels, verdicts, and conclusions reduced across the site?
- Are lists, tables, bold text, and colons used because they improve scanning?
- Are there no chatbot phrases, placeholders, citation tokens, hidden instructions, or raw Markdown leaks?
- Are links and citations real and still pointed at the intended targets?
- Does the rendered copy pass the same audit as the source?
- Can a reader make a clearer decision after reading it?
- Does the final text sound like an editor wrote it for this page, rather than a template for any page?

If the copy is clean but hollow, it is not finished. Add supported substance or shorten it. Never fill the gap with invented experience.
