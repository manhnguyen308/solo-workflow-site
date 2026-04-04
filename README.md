# Solo Workflow Systems

Workflow-first Hugo site for freelancers and solo service businesses. The site is intentionally positioned around client operations, stack blueprints, implementation guides, and practical assets, not generic software reviews.

## Current state

- Strategy, architecture, editorial model, and launch content set are in place.
- Core launch pages, section hubs, and trust pages exist.
- Metadata QA and at least one internal-link QA pass have already been completed.
- Technical Hugo verification is still pending in a Hugo-capable environment.
- A local Hugo binary may exist under `tools/hugo/`, but build verification should only be treated as complete after a real run in the target environment.

Current launch verdict:
- Content/model: nearly ready
- Technical verification: blocked until Hugo can run cleanly
- Deployment recommendation: go once Hugo is verified

## Project structure

- `config.toml`: site configuration, permalinks, menus, taxonomies, and related content settings.
- `content/`: homepage, section hubs, launch pages, glossary/FAQ support, and trust pages.
- `layouts/`: Hugo templates and reusable partials.
- `archetypes/`: content templates for workflow, guide, comparison, template, glossary, and FAQ pages.
- `static/`: static assets and generated defaults.
- `public/`: generated output if a build has already been run elsewhere.
- `tools/hugo/`: vendored Hugo binaries and related files if present.

## Launch content map

Core sections in `content/`:
- `client-workflow-systems`
- `software-stack-blueprints`
- `workflow-comparisons`
- `templates-checklists`
- `glossary`
- `faq`

Trust/support sections:
- `about`
- `contact`
- `editorial-policy`
- `privacy-policy`
- `terms`

Key launch docs:
- `DAY9_LAUNCH_QA.md`
- `DAY10_LAUNCH_PACKAGE.md`
- `DAY11_LAUNCH_FINALIZATION.md`

## Content creation

Examples:

```bash
hugo new --kind workflow client-workflow-systems/new-workflow.md
hugo new --kind guide software-stack-blueprints/new-guide.md
hugo new --kind comparison workflow-comparisons/new-comparison.md
hugo new --kind template templates-checklists/new-checklist.md
hugo new --kind glossary glossary/new-term.md
hugo new --kind faq faq/new-question.md
```

Then fill the required front matter and keep the page aligned to the workflow-first editorial model.

## What still cannot be verified here

- Final Hugo build success
- Template/rendering correctness across the full site
- Generated metadata and canonical output
- Final production deploy behavior on Cloudflare

Do not claim technical readiness until those checks are completed in a Hugo-capable environment.

## Next steps in a Hugo-capable environment

1. Confirm the Hugo binary that will be used for verification.
2. Run `hugo version`.
3. Run `hugo --minify --gc`.
4. Review the generated `public/` output starting with homepage, section hubs, trust pages, and top launch pages.
5. Execute the verification and deployment checklist in `DAY11_LAUNCH_FINALIZATION.md`.
6. Deploy to Cloudflare only after the runbook checks pass.
