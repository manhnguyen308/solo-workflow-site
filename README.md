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


## Day 7 status

Implemented as real draft content:
- `content/client-workflow-systems/sample-client-workflow.md` (workflow anchor)
- `content/software-stack-blueprints/sample-stack-blueprint.md` (stack blueprint)
- `content/client-workflow-systems/sample-intake-guide.md` (practical guide)
- `content/workflow-comparisons/sample-crm-vs-pm.md` (comparison)
- `content/templates-checklists/sample-onboarding-checklist.md` (template/checklist)
- `content/workflow-comparisons/sample-notion-vs-clickup.md` (supporting comparison)
- `content/faq/sample-stack-faq.md` (supporting FAQ)
- `content/glossary/sample-workflow-definition.md` (supporting glossary)

Still placeholder-level for Day 8:
- Trust/support pages (`about`, `contact`, `editorial-policy`, `privacy-policy`, `terms`).
- Additional launch pages from the Day 4 top-20 set.

Day 8 should focus on:
1. Proposal-to-contract handoff guide
2. Weekly operations checklist
3. Invoice/payment checklist
4. Offboarding template
5. Delivery QA checklist


## Day 8 status

Implemented second-wave real pages:
- `content/client-workflow-systems/proposal-to-contract-handoff.md`
- `content/templates-checklists/weekly-client-operations-checklist.md`
- `content/templates-checklists/invoice-payment-workflow-checklist.md`
- `content/templates-checklists/client-offboarding-testimonial-template.md`
- `content/templates-checklists/delivery-qa-checklist-before-client-handoff.md`

Also improved:
- Section hubs (`content/_index.md`, `content/client-workflow-systems/_index.md`, `content/software-stack-blueprints/_index.md`, `content/templates-checklists/_index.md`) with start-here flows and curated reading sequences.
- FAQ linkage with handoff and payment answers in `content/faq/sample-stack-faq.md`.

Launch-readiness snapshot:
- Strongest sections: Client Workflow Systems, Templates & Checklists.
- Still thin: trust pages (`about`, `contact`, `editorial-policy`, `privacy-policy`, `terms`) and glossary depth.
- Next missing launch pages: migration guide, automation basics, consultant+VA blueprint.

Day 9 focus:
1. Implement remaining high-priority blueprint/guide pages (migration + automation + consultant/VA setup).
2. Add delivery-stage and offboarding cross-links to all relevant pages.
3. Expand glossary and FAQ with 3–5 high-friction terms/questions.
4. Run full Hugo build/link QA once Hugo CLI is available in environment setup.


### Hugo tooling verification (Day 8)

- Hugo was **not preinstalled** in this environment (`hugo: command not found`).
- Installation attempts were made via:
  - Ubuntu apt package download (`apt-get download hugo`)
  - Direct GitHub release download (`curl` from `github.com/gohugoio/hugo/releases/...`)
- Both methods failed with `403 Forbidden` due outbound access restrictions to package/release hosts.
- Because Hugo could not be installed, a full build verification (`hugo --minify`) is currently blocked.

To unblock build validation, provide one of the following in environment setup:
1. Allowlist access to apt mirror and GitHub release domains.
2. Provide a vendored binary at `tools/hugo/hugo` and run `tools/hugo/hugo version`.

Current Day 8 build state:
- Hugo version used: **N/A (blocked by environment restrictions)**.
- Build verification: **Not runnable until Hugo binary is available**.


## Day 9 status

Environment/build verification:
- Hugo still unavailable in this environment.
- `hugo version` fails (`command not found`).
- `apt-get download hugo` failed with `403 Forbidden`.
- GitHub release download attempt failed with `403 Forbidden`.
- Build verification remains blocked until a Hugo binary is provided by environment setup or vendored at `tools/hugo/hugo`.

Day 9 content/QA work completed:
- Added migration guide: `content/software-stack-blueprints/how-to-migrate-from-scattered-tools-to-one-workflow-system.md`
- Added automation guide: `content/client-workflow-systems/workflow-automation-basics-for-solo-service-businesses.md`
- Added consultant+VA blueprint: `content/software-stack-blueprints/consultant-va-collaboration-stack-blueprint.md`
- Updated homepage/section hubs and FAQ routing for stronger launch pathways.
- Added launch-threshold QA report: `DAY9_LAUNCH_QA.md`.

Current launch verdict:
- **Nearly ready (content/model), Blocked (technical verification)**.

Day 10 focus:
1. Unblock Hugo binary and run real build verification.
2. Upgrade trust pages from placeholders to launch-quality content.
3. Expand glossary and FAQ support depth.
4. Perform final internal-link pathway sweep.


## Day 10 status

Final pre-launch packaging completed:
- Added glossary support page: `content/glossary/system-of-record.md`.
- Upgraded trust/support pages from placeholder-level to MVP-ready content:
  - `content/about/_index.md`
  - `content/contact/_index.md`
  - `content/editorial-policy/_index.md`
  - `content/privacy-policy/_index.md`
  - `content/terms/_index.md`
- Updated glossary hub: `content/glossary/_index.md`.
- Added final launch package and deployment handoff runbook: `DAY10_LAUNCH_PACKAGE.md`.

Technical verification status:
- Hugo remains unavailable in this environment (`403 Forbidden` on install/download attempts).
- Build verification remains blocked until Hugo binary is available.

Final readiness recommendation:
- **Go once Hugo verified**.

Immediate next step once unblocked:
1. Run `hugo version`
2. Run `hugo --minify --gc`
3. Execute runbook/checklist in `DAY10_LAUNCH_PACKAGE.md`
