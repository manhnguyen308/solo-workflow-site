# SoloOpsGuide

Workflow-first Hugo site for freelancers and solo service businesses. The site is intentionally positioned around client operations, stack blueprints, implementation guides, and practical assets — not generic software reviews.

## Project state

- Site is live and deployed on Cloudflare Pages at `https://soloopsguide.com/`.
- Core content set is in place: workflow cluster, blueprint cluster, comparison cluster, templates/checklists, glossary, FAQ, trust pages.
- Feature image system is active: Python/Pillow WebP generation under `tools/feature-images/`.
- Internal search is live at `/search/`.
- Discovery layer: Problem-to-Page Guide, Workflow Starter Pack, Workflow Diagnostic Checklist, and homepage guided chooser are all in place.
- See `TRACKER.md` for current status, recent passes, and next recommended actions.

## Repo structure

- `config.toml`: site configuration, permalinks, menus, taxonomies, and related content settings.
- `content/`: homepage, section hubs, launch pages, glossary/FAQ support, and trust pages.
- `layouts/`: Hugo templates and reusable partials.
- `archetypes/`: content templates for workflow, guide, comparison, template, glossary, and FAQ pages.
- `static/`: static assets and generated defaults.
- `public/`: generated Hugo output for local verification; ignored in git because Cloudflare Pages builds from source.
- `tools/hugo/`: vendored Hugo binaries.
- `tools/feature-images/`: Python/Pillow feature image generation workflow.
- `project-docs/`: non-core operating and reference docs.

## Content sections

- `content/client-workflow-systems/` → `/workflows/` permalinks
- `content/software-stack-blueprints/` → `/guides/` permalinks
- `content/workflow-comparisons/` → `/comparisons/` permalinks
- `content/templates-checklists/` → `/templates/` permalinks
- `content/glossary/` → `/glossary/` permalinks
- `content/faq/` → `/faq/` permalinks

## Operating docs

- `AGENT.md` — permanent operating rules; read first for every session
- `TRACKER.md` — current state, recent passes, next actions; read second
- `project-docs/CONTENT_OPERATIONS.md` — content cluster roadmap and publishing rules
- `project-docs/NEW_FEATURES_ROADMAP.md` — feature queue for daily improvement passes
- `project-docs/INTERNAL_SEARCH_ROADMAP.md` — search phase 2 and 3 plans
- `project-docs/SEARCH_CONSOLE_RESPONSE_LOOP.md` — GSC monitoring and response playbooks
- `project-docs/BUILD-VALIDATION.md` — build commands, environment notes, validation checklist
- `project-docs/FEATURE-IMAGE-GUIDELINES.md` — image workflow, layout schemas, path conventions
- `project-docs/TRACKER-ARCHIVE.md` — detailed pass history (2026-04-17 through present)
- `project-docs/archive/` — pre-launch day-by-day strategy and QA notes

## Build commands

Standard local build:
```bash
tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/
```

Note: the vendored binary is Windows-only and cannot run on native Linux. See `project-docs/BUILD-VALIDATION.md` for the full build and validation reference.

Cloudflare Pages build:
```bash
bash tools/build-cloudflare.sh
```

## Content creation

```bash
hugo new --kind workflow client-workflow-systems/new-workflow.md
hugo new --kind guide software-stack-blueprints/new-guide.md
hugo new --kind comparison workflow-comparisons/new-comparison.md
hugo new --kind template templates-checklists/new-checklist.md
hugo new --kind glossary glossary/new-term.md
hugo new --kind faq faq/new-question.md
```

## Publishing conventions

- **Workflows**: define the stage or full sequence, name inputs/outputs/owners, show failure points, route to the adjacent implementation page.
- **Blueprints**: state the operating model, decision criteria, upgrade triggers, and the conditions where the advice stops fitting.
- **Comparisons**: frame one bounded decision, judge options by workflow criteria, include scenarios, end with a clear next page.
- **Templates and checklists**: name the trigger moment, provide the asset, list common misses, define what "complete" means.
- **Glossary entries**: define the term plainly, explain operational relevance, link to where the definition becomes useful.
- **FAQ pages**: answer one narrow blocker quickly, state the recommendation boundary, route to a stronger implementation page.

Front matter expectations:
- Always set `description`, `summary`, `page_type`, `search_intent`, and `page_role`.
- Set `related` intentionally for cornerstone and support-routing pages.
- Use `featured = true` only for genuine anchor or cornerstone pages within a hub.
- Keep category aligned to the section so permalinks and related-content behavior stay predictable.
