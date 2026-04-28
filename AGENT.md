# SoloOpsGuide Agent Manual

Read this file first for any future Codex pass in this repo. It contains the durable operating rules for working on `soloopsguide.com`.

## Mission

- Strengthen SoloOpsGuide as a workflow-first site for freelancers and solo operators.
- Optimize for practical usefulness, clear hierarchy, and durable editorial quality.
- Prefer stronger cornerstone pages, cleaner cluster flow, and better discoverability over random expansion.

## Core principles

- Workflow problems come before tool problems.
- Blueprint pages come after the workflow model is clear.
- Comparison pages narrow one bounded decision; they do not replace workflow or blueprint pages.
- Support pages stay narrow and subordinate to cornerstone workflow, blueprint, and comparison pages.
- Homepage and hubs should guide readers into the strongest first page, not merely expose content.

## Quality standards

- Keep public-facing copy calm, practical, structured, and trustworthy.
- Avoid internal planning language, SEO jargon, or generic productivity advice.
- Favor authority, clarity, differentiation, and useful next steps.
- Make pages worth returning to, not just worth crawling.
- Keep labels, headings, and summaries specific enough to signal real page purpose.

## Scope discipline

- Do not broaden a pass unless the user explicitly asks for it.
- Do not add new pages by default.
- Prefer strengthening strong pages over creating more narrow assets.
- Do not redo images, layouts, or clusters that are already in good shape unless a real regression appears.
- Preserve the current architecture and visual system.
- Prefer the simplest change that directly solves the user's request.
- Do not add speculative flexibility, abstractions, or extra features that were not asked for.
- Every changed line should trace directly to the requested outcome.

## Cluster hierarchy

### Homepage

- The homepage should behave like a guided entry page.
- The safest broad first path is the client-workflow cluster.
- Support/reference layers should never visually compete with the main operational path.

### Workflow cluster

- This is the primary operational cluster.
- The anchor workflow page is the broadest first guide.
- Stage pages deepen one stage; they should not compete with the anchor.

### Blueprint cluster

- Use when the workflow is mostly clear and stack shape is the blocker.
- The lean stack blueprint is the default entry page.
- Buying-boundary, migration, and support worksheets stay narrower than the blueprint.

### Comparison cluster

- Use only for one bounded decision.
- Sequence should run from broad system-center decisions to narrower implementation choices.
- Comparisons should end in a decision and route into blueprint or workflow implementation.

### Support layer

- Templates/checklists are execution assets, not first-stop guides.
- Glossary pages clarify terms, not strategy.
- FAQ pages answer narrow blockers and route back out quickly.
- If a support page starts competing with a cornerstone page, strengthen the cornerstone page and narrow the support page.

## Indexation and quality priorities

- Treat the homepage, major hubs, and cornerstone pages as the first-index cluster.
- Strengthen pages that deserve indexing before trying to push the whole site at once.
- Improve first-screen clarity, page-role differentiation, and internal authority flow.
- Avoid spammy SEO tactics, filler copy, and thin support content dressed up as a primary landing page.
- Utility/feed pages should be intentionally handled, not accidentally exposed as priority content.

## Internal linking rules

- Prefer contextual links over generic related-link blocks.
- Every meaningful new or revised page should maintain:
  - one upstream hub path,
  - one upstream cornerstone path,
  - a few lateral related links where they genuinely help,
  - one clear downstream next step.
- Strengthen homepage -> hub -> cornerstone routing before widening support links.

## Feature image workflow

- All feature images must be created, edited, replaced, or regenerated through the repo's official image workflow under `tools/`.
- SVG/scripted diagrams may be used only when they pass visual review and remain the strongest option for the page.
- Local image-model generation is allowed and preferred when SVG or scripted diagrams repeatedly fail quality review.
- The preferred no-API raster path is the local backend workflow under `tools/` using a user-run Windows endpoint such as Automatic1111 or ComfyUI; do not make OpenAI API or API-key billing a required step.
- Live images served from `static/images/features/` are the final project-owned assets and must be generated there through the approved workflow rather than patched as ad hoc final-only files.
- Feature images must keep filenames stable where possible to avoid unnecessary front matter churn.
- Every feature image change must verify:
  - the relevant generation script runs successfully when the required local backend is actually available
  - the affected files in `static/images/features/` actually changed
  - the Hugo build succeeds
  - homepage/card/page-header rendering uses the corrected images
  - the rendered images pass visual review at homepage/card/page-header size
- Do not report success based only on template coverage, script execution, or file counts. Confirm the actual rendered image quality.

## Content decision rules by page type

### Workflows

- Explain the stage or sequence.
- Name inputs, outputs, ownership, and common failure points.
- Include exact next-step pages.

### Blueprints

- Define the operating model and what it optimizes for.
- Make upgrade triggers and overbuying warnings explicit.
- Route clearly into comparisons, workflows, or implementation assets.

### Comparisons

- Stay focused on one bounded decision.
- Tie criteria to workflow outcomes.
- State what the page does not decide.

### Templates and checklists

- Assume the workflow rule already exists.
- State trigger moment, completion standard, and upstream page required for context.

### Glossary and FAQ

- Clarify one narrow blocker quickly.
- Include one clear next page.

## UX and design guardrails

- Do not redesign the site unless explicitly asked.
- Keep utility UI subtle and maintainable.
- Preserve current spacing, typography, and visual language.
- Fix noticeable browsing issues, not theoretical perfection.

## Build and verification

- Use Hugo Extended `0.160.1` as the source of truth for validation.
- Standard verification command: `hugo --gc --minify --baseURL https://soloopsguide.com/`
- The system-installed Hugo (`snap:0.160.1`) is the current build tool on Linux. The legacy vendored binary `tools/hugo/v0.128.0/hugo.exe` is a Windows PE32+ binary and is no longer the source of truth.
- See `project-docs/BUILD-VALIDATION.md` for full build/deploy details.
- `public/` is generated build output and should not be committed in normal passes. Cloudflare Pages builds from source with `bash tools/build-cloudflare.sh` and writes the deploy artifact to `public/` during the build.
- If rendered output looks stale, rebuild before assuming the content is wrong.
- Define the success check for the pass before or during implementation so verification is concrete rather than implied.
- Prefer verification that proves the requested outcome directly, not just that files changed.

## Operating rhythm

- Daily: Claude Code is the default content/improvement agent. Use it to create or improve content, run the build, update `TRACKER.md` or the relevant progress log, and do light QA.
- Weekly: Codex is the default review/fix agent. Use it to review Claude Code's recent work and fix duplicated UI, broken layout, weak SEO, thin content, internal-link gaps, affiliate issues, and AdSense risks.
- Monthly: Codex should run a deeper audit across category pages, homepage, older posts, monetization, affiliate disclosures, site speed, indexing, and low-value content risk.
- Default cadence: weekly Codex review is the sweet spot. Use daily Codex review only during heavy build weeks or before AdSense submission.

## How to run future passes

1. Read `AGENT.md` first.
2. Read `TRACKER.md` second for current project state.
3. Think before coding:
   - state the key assumptions you are making,
   - surface uncertainty or competing interpretations before implementation when they matter,
   - prefer the simplest viable path and say so if a heavier approach is unnecessary.
4. Keep the pass scoped to the user request.
5. Prefer surgical improvements over broad rewrites.
   - do not refactor adjacent code, comments, or formatting unless the task requires it,
   - match the existing repo style,
   - remove only unused code created by your own changes unless the user explicitly asks for broader cleanup.
6. For multi-step tasks, define the goal and the check that will prove each meaningful step is complete.
7. After the pass, update `TRACKER.md` with:
   - what changed,
   - files touched,
   - build result if relevant,
   - open follow-up items,
   - recommended next step.
8. For normal repo-editing tasks, after scoped changes and verification are complete:
   - create a git commit with a clear message,
   - push the current branch when remotes/auth are available,
   - if push cannot be completed, report the exact blocker rather than implying success.

## When to read what

Read `AGENT.md` + `TRACKER.md` before every task. Add these for specific work types:

| Task type | Add to reading list |
| --- | --- |
| New page or content work | `project-docs/CONTENT_OPERATIONS.md` |
| Feature image work | `project-docs/FEATURE-IMAGE-GUIDELINES.md` |
| New roadmap feature | `project-docs/NEW_FEATURES_ROADMAP.md` |
| Internal search work | `project-docs/INTERNAL_SEARCH_ROADMAP.md` |
| GSC / SEO response | `project-docs/SEARCH_CONSOLE_RESPONSE_LOOP.md` |
| Build or deploy troubleshooting | `project-docs/BUILD-VALIDATION.md` |
| Historical context only | `project-docs/TRACKER-ARCHIVE.md` or `project-docs/archive/` |
