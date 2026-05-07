---
name: soloopsguide-agent
description: Use this skill when working in the SoloOpsGuide Hugo repository to make scoped content, SEO, internal-linking, roadmap, image, build, validation, tracker, and commit changes while preserving workflow-first architecture and avoiding broad or speculative edits.
---

# SoloOpsGuide Agent Skill

## Purpose

Use this skill for safe production work in the SoloOpsGuide Hugo repo. It turns the active repo docs into a compact operating workflow without replacing them as the source of truth.

## Use This Skill When

- Editing content, metadata, internal links, routing copy, or support assets.
- Completing roadmap tasks or weekly/monthly review passes.
- Responding to Google Search Console or SEO signals.
- Reviewing workflow hierarchy, AdSense-readiness risk, or low-value-content risk.
- Working on internal search, feature images, builds, validation, tracker notes, commits, or small repo documentation updates.

## Do Not Use This Skill For

- Unrelated repositories.
- Broad redesigns, speculative rewrites, or new feature builds unless explicitly requested.
- Generated output edits.
- Archive rewrites or historical cleanup unless a current task specifically requires historical context.
- Public content churn after a GSC pass unless new data or a clear defect exists.

## Read First

1. `AGENT.md`.
2. `TRACKER.md`.
3. Task-specific docs from the `AGENT.md` "When to read what" table.

Use these source-of-truth docs when relevant:

- Build/deploy troubleshooting: `project-docs/BUILD-VALIDATION.md`.
- Feature image work: `project-docs/FEATURE-IMAGE-GUIDELINES.md`.
- New roadmap feature work: `project-docs/NEW_FEATURES_ROADMAP.md`.
- Internal search work: `project-docs/INTERNAL_SEARCH_ROADMAP.md`.
- GSC/SEO response work: `project-docs/SEARCH_CONSOLE_RESPONSE_LOOP.md`.

## Token-Saving Rules

- Prefer targeted file reads, tracker notes, known paths, and exact-term searches.
- Avoid broad grep over the repo or all content.
- Cap targeted grep output with `head -20`.
- Avoid `project-docs/archive/`, `project-docs/TRACKER-ARCHIVE.md`, and old day files unless current evidence requires them.
- Do not repeat completed markdown split, tracker-trimming, roadmap, or optimization work unless a regression is found.

## Site Architecture Rules

- Workflow pages are the main operational path.
- Blueprints come after the workflow is mostly clear and stack shape is the blocker.
- Comparisons resolve one bounded decision.
- Templates and checklists are execution assets, not primary strategy pages.
- FAQ and glossary pages answer narrow blockers and route readers back upstream.

## Workflow Decision Rules

- For tasks touching 3+ files, unfamiliar systems, layouts, image generators, indexing, build behavior, or broad refactors, inspect first and state a short plan before editing.
- For small typo, metadata, or tightly scoped one-file fixes, a full plan is not required.
- If the task is a roadmap feature, read the roadmap, confirm the next open scoped item, and complete only that item.
- If a task is already complete, summarize the status and move only to the next clearly defined safe item.
- If the task is GSC/SEO, act on one page or one query cluster only.
- If the signal is unclear, log a note instead of forcing an edit.
- If the task involves internal links, start with the target page, same section folder, known hubs, and tracker-mentioned pages.
- If the task involves images, read `project-docs/FEATURE-IMAGE-GUIDELINES.md` first and use the approved `tools/feature-images/` workflow.
- If JavaScript changes, run `node --check static/js/search.js`.
- If the build fails, report the exact blocker and do not imply success.

## Context and Task Hygiene

- Complete one task at a time; do not mix content creation, GSC response, image work, layout refactors, and documentation cleanup unless explicitly requested.
- After a scoped task is complete, update `TRACKER.md`, commit, and push before starting unrelated work.
- Keep command output short and relevant; prefer summaries over dumping long logs into the working context.
- If context gets noisy or the task changes shape, pause, restate the current goal, and continue from the smallest reliable next step.

## Safe Change Rules

- Keep changes scoped, surgical, and directly tied to the request.
- Preserve URLs, slugs, aliases, permalinks, and routing.
- Avoid broad redesigns, mass content edits, global link passes, and speculative abstractions.
- Do not edit generated output, especially `public/`.
- Stage and commit only intended files.

## Targeted Exploration Rules

- Start from `AGENT.md`, `TRACKER.md`, this skill, and task-specific docs from the active read list.
- Use targeted file reads and exact-term grep against relevant files only.
- Avoid broad repo scans, archive reads, generated output scans, and unrelated content exploration unless the current evidence requires them.
- Use source-of-truth docs and existing local patterns before inventing a new workflow or abstraction.

## Content Rules

- Use plain operational language for freelancers and solo service operators.
- Keep the workflow-first hierarchy visible.
- Avoid keyword stuffing, boilerplate-heavy blocks, unsupported claims, and internal planning language in public copy.
- Do not create fake assets or imply a template/checklist exists when it does not.
- Avoid thin query-targeted pages; add a roadmap note when a real content gap is not ready for a page.
- Keep AdSense-readiness in mind: useful, distinct, trustworthy pages with no placeholders, debug text, or duplicated filler.

## Internal Linking Rules

- Add links only where they are natural and reader-useful.
- Use descriptive anchor text tied to the reader's workflow problem.
- Prefer contextual links and compact reader paths over generic related-post blocks.
- Avoid mass backlink passes.
- Do not over-link the same checklist, comparison, or hub in nearby copy.
- Verify changed internal links resolve.

## GSC/SEO Response Rules

- Wait for meaningful GSC data before editing for SEO.
- Handle one page or one query cluster per pass.
- Prioritize pages with meaningful impressions and average position roughly 15-40.
- Prefer small evidence-based edits to titles, descriptions, chooser copy, or routing.
- Do not create thin query-targeted pages or exact-match fake assets.
- Add roadmap or tracker notes when a gap is real but not ready for implementation.

## Build and Validation

- Always run `git diff --check` before committing.
- If JavaScript changed, run `node --check static/js/search.js`.
- When a build is required, run `hugo --gc --minify --baseURL https://soloopsguide.com/`.
- Report the exact local `hugo version` used for validation.
- Current local builds have passed with Hugo v0.161.1+extended; Cloudflare remains documented as pinned to Hugo 0.160.1.
- Confirm `public/` remains ignored/untracked and do not commit generated output.
- Verify changed internal links resolve.
- Read the diff before committing and check for unintended scope, URL, public-content, generated-output, or formatting churn.
- Do not claim completion if required validation was skipped without a clear reason.
- Documentation-only changes normally do not require a Hugo build unless a source file changed by accident or repo instructions for the task require it.

## Failure Recovery

- If the same fix fails twice, stop and reassess instead of continuing the correction loop.
- Summarize what failed, reread the relevant source-of-truth docs or files, and make a smaller plan.
- Prefer one focused verification that proves the next hypothesis over repeated broad retries.

## Parallel and Isolated Work

- Use isolated sessions or worktrees only for clearly separate tasks that can be validated independently.
- Do not run parallel edits against the same files or overlapping ownership areas.
- Keep the main branch clean; validate and push one scoped change before starting unrelated parallel work.

## Prompt Quality for Repo Tasks

Good task requests for this repo should name:

- outcome and scope,
- files or docs to read first,
- allowed and disallowed changes,
- validation commands and quality checks,
- tracker update expectations,
- commit and push expectations,
- requested deliverable format.

## Tracker Updates

- Update `TRACKER.md` for meaningful work, roadmap passes, review/audit notes when the repo convention expects logging, and documentation changes.
- Keep tracker notes concise.
- Include the task name, exact files changed, affected page or area when relevant, validation result, next recommended action, and commit hash after commit.

## Commit and Push

- Check `git status --short` before staging.
- Stage only intended files.
- Use concise production-style commit messages.
- Push the current branch after validation when remotes/auth are available.
- If commit or push fails, report the exact blocker.

## Never Do

- Do not mention AI, Claude, Codex, assistant, automation, or prompts in public content, code comments, commit messages, or `TRACKER.md`.
- Do not edit generated output.
- Do not run broad grep over the repo.
- Do not change URLs, slugs, aliases, or permalinks unless explicitly required.
- Do not make speculative GSC edits.
- Do not do broad content rewrites or global redesign work.
