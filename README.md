# Solo Workflow Systems (Hugo Foundation)

This repository now contains a minimal custom Hugo setup aligned to the Day 1–Day 5 strategy work.

## Structure

- `config.toml`: site config, menus, taxonomies, permalinks, related content settings.
- `content/`: section indexes, trust/support pages, and sample pages for each core page type.
- `layouts/`: lightweight templates (`baseof`, home, list, single, taxonomy) and reusable partials.
- `archetypes/`: content-entry templates for `guide`, `workflow`, `comparison`, `template`, `glossary`, and `faq`.
- `static/`: static assets, including default OG image and base CSS.
- `assets/`: source CSS location for future pipeline use.
- `data/`: reserved for future lightweight structured data.

## How this maps to the workflow-first model

- Core editorial sections are represented directly in `content/`:
  - `client-workflow-systems`
  - `software-stack-blueprints`
  - `workflow-comparisons`
  - `templates-checklists`
  - `glossary`
  - `faq`
- Trust pages are included as launch placeholders: About, Contact, Editorial Policy, Privacy Policy, Terms.
- Front matter fields in archetypes align with the editorial model (`page_type`, `search_intent`, `page_role`, `related`, etc.).

## Creating new content

Examples:

```bash
hugo new --kind workflow client-workflow-systems/new-workflow.md
hugo new --kind guide software-stack-blueprints/new-guide.md
hugo new --kind comparison workflow-comparisons/new-comparison.md
hugo new --kind template templates-checklists/new-checklist.md
hugo new --kind glossary glossary/new-term.md
hugo new --kind faq faq/new-question.md
```

Then fill required front matter and write content sections from the brief.

## Local build

```bash
hugo server -D
```

For production build:

```bash
hugo --minify
```

## Day 7 focus

- Replace placeholders with real content from Day 5 briefs.
- Add section-specific visual refinements (still lightweight).
- Validate internal link graph and metadata completeness for all launch pages.
