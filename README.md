# Solo Workflow Systems

Workflow-first Hugo site for freelancers and solo service businesses. The site is intentionally positioned around client operations, stack blueprints, implementation guides, and practical assets, not generic software reviews.

## Current state

- Strategy, architecture, editorial model, and launch content set are in place.
- Core launch pages, section hubs, and trust pages exist.
- Metadata QA and internal-link QA have been completed in a real Hugo-capable environment.
- Hugo build verification passed with the repo-local binary at `tools/hugo/hugo.exe`.
- Launch-critical output issues found during Day 12 were fixed in content and templates.
- Deployment should wait until the production domain and live contact inbox are configured.

Current launch verdict:
- Content/model: ready
- Technical verification: ready
- Deployment recommendation: deploy after minor production-config fixes

## Verified Hugo environment

- Binary used: `tools/hugo/hugo.exe`
- Hugo version: `hugo v0.159.2-5f4646acaad89e1166aac118e118b0d28013f460+withdeploy windows/amd64 BuildDate=2026-04-01T12:59:20Z VendorInfo=gohugoio`
- Global `hugo` on `PATH`: not available in this environment
- Verified build command: `tools/hugo/hugo.exe --minify --gc`
- Build result: passed

## Day 12 fixes applied

- corrected hardcoded internal links that still pointed to source-section paths instead of the real permalink output under `/workflows/`, `/guides/`, `/comparisons/`, and `/templates/`
- corrected `related` front matter paths so the rendered related-links component resolves real pages
- fixed the `terms` page rendering collision so the trust page body now displays correctly
- removed empty trailing list blocks from list pages that have no child pages
- fixed malformed single-page output text where the type/intent separator rendered incorrectly
- fixed JSON-LD output so article schema is emitted as valid JSON instead of escaped quoted strings
- corrected malformed quote text in the proposal-to-contract handoff guide

## Remaining launch blockers

- `config.toml` still uses `baseURL = "https://example.com/"`, so canonical and Open Graph URLs in the generated output point to `example.com`
- `content/contact/_index.md` still publishes `hello@example.com`, which is not a real launch-ready contact address

## Project structure

- `config.toml`: site configuration, permalinks, menus, taxonomies, and related content settings.
- `content/`: homepage, section hubs, launch pages, glossary/FAQ support, and trust pages.
- `layouts/`: Hugo templates and reusable partials.
- `archetypes/`: content templates for workflow, guide, comparison, template, glossary, and FAQ pages.
- `static/`: static assets and generated defaults.
- `public/`: generated output from the latest verified build.
- `tools/hugo/`: vendored Hugo binaries and related files.

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
- `DAY12_VERIFICATION_BLOCKED.md`

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

## Next steps before deployment

1. Replace `baseURL` in `config.toml` with the real production URL, or pass the production base URL explicitly during the Cloudflare build.
2. Replace `hello@example.com` on the Contact page with the real monitored inbox for launch.
3. Re-run `tools/hugo/hugo.exe --minify --gc`.
4. Deploy to Cloudflare only after the rebuilt output shows the correct canonical URLs and contact details.
