# Solo Workflow Systems

Workflow-first Hugo site for freelancers and solo service businesses. The site is intentionally positioned around client operations, stack blueprints, implementation guides, and practical assets, not generic software reviews.

## Current state

- Strategy, architecture, editorial model, and launch content set are in place.
- Core launch pages, section hubs, and trust pages exist.
- Metadata QA and internal-link QA have been completed in a real Hugo-capable environment.
- Hugo build verification passed with the repo-local binary at `tools/hugo/hugo.exe`.
- Launch-critical output issues found during Day 12 were fixed in content and templates.
- Day 13 switched production URL handling to a build-time baseURL override suitable for Cloudflare deployment.
- Day 15 substantially upgraded the visual system, homepage composition, hub layouts, and reading experience.
- Deployment should wait until the real monitored public inbox is confirmed.
- Measurement and Search Console scaffolding now exists in the repo, but no third-party analytics provider is enabled by default.

Current launch verdict:
- Content/model: ready
- Technical verification: ready
- Deployment recommendation: deploy after minor contact-config fix

## Verified Hugo environment

- Binary used: `tools/hugo/hugo.exe`
- Hugo version: `hugo v0.159.2-5f4646acaad89e1166aac118e118b0d28013f460+withdeploy windows/amd64 BuildDate=2026-04-01T12:59:20Z VendorInfo=gohugoio`
- Global `hugo` on `PATH`: not available in this environment
- Verified local build command: `tools/hugo/hugo.exe --minify --gc --baseURL <deploy-url>`
- Build result: passed

Latest verification run:
- verification baseURL used: `https://soloopsguide.com/`
- canonical and Open Graph output followed the supplied `--baseURL` value correctly
- contact page no longer exposes `hello@example.com`

## Day 12 fixes applied

- corrected hardcoded internal links that still pointed to source-section paths instead of the real permalink output under `/workflows/`, `/guides/`, `/comparisons/`, and `/templates/`
- corrected `related` front matter paths so the rendered related-links component resolves real pages
- fixed the `terms` page rendering collision so the trust page body now displays correctly
- removed empty trailing list blocks from list pages that have no child pages
- fixed malformed single-page output text where the type/intent separator rendered incorrectly
- fixed JSON-LD output so article schema is emitted as valid JSON instead of escaped quoted strings
- corrected malformed quote text in the proposal-to-contract handoff guide

## Remaining launch blockers

- the live monitored public inbox still needs to be supplied before public release

## Day 15 design pass

Main problems found:
- the frontend looked like a near-default Hugo build with weak visual identity
- the homepage had little composition and low perceived value
- section hubs behaved more like archives than curated routes
- single pages had minimal reading scaffolding and weak utility framing
- header and footer felt functional but unfinished

Design/layout improvements made:
- replaced the minimal CSS foundation with a calmer editorial system using stronger spacing, refined type contrast, card surfaces, and clearer section rhythm
- rebuilt the homepage around a composed hero, guided entry points, curated reading paths, and better content grouping
- redesigned list pages into guided section hubs with hero panels and card-based content presentation
- refined single-page layout with clearer article headers, metadata pills, better reading measure, and utility panels
- upgraded navigation and footer structure for stronger scanning and trust support
- restyled related content into compact cards instead of plain lists

Primary files changed:
- `static/css/main.css`
- `layouts/index.html`
- `layouts/_default/baseof.html`
- `layouts/_default/list.html`
- `layouts/_default/single.html`
- `layouts/partials/header.html`
- `layouts/partials/footer.html`
- `layouts/partials/page-card.html`
- `layouts/partials/page-type-block.html`
- `layouts/partials/related.html`

Remaining visual issues:
- final browser-based QA on desktop and mobile is still worthwhile for spacing and rhythm validation
- the contact page still needs the real monitored inbox before public launch

Recommended Day 16 focus:
- live browser QA on desktop and mobile
- final trust/support page copy polish
- replace the contact launch note with the real public inbox

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
- `project-docs/DAY9_LAUNCH_QA.md`
- `project-docs/DAY10_LAUNCH_PACKAGE.md`
- `project-docs/DAY11_LAUNCH_FINALIZATION.md`
- `project-docs/DAY12_VERIFICATION_BLOCKED.md`
- `project-docs/GO_LIVE_CHECKLIST.md`
- `project-docs/MEASUREMENT_OPERATIONS.md`
- `project-docs/CONTENT_OPERATIONS.md`
- `project-docs/SEARCH_CONSOLE_RESPONSE_LOOP.md`

## Measurement and Search Console

The repo now includes optional support for:

- Google Search Console verification meta tag
- Google Analytics, Plausible, or Umami script injection via `config.toml`
- stable page identity data attributes and meta tags for reporting clarity
- lightweight CTA, nav, hub, card, and site-search tracking hooks
- AdSense account meta tag readiness without adding ad units

Nothing is enabled by default. Manual setup details live in `project-docs/MEASUREMENT_OPERATIONS.md`.

The repo-side response framework for coverage, impressions, clicks, indexing triage, and weak-page follow-up lives in `project-docs/SEARCH_CONSOLE_RESPONSE_LOOP.md`, with the priority groups, page-type rules, playbooks, risk pages, and likely intervention targets in `data/search-console-monitoring.toml`.

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

Ongoing publishing, backlog, refresh rules, and cluster priorities live in `project-docs/CONTENT_OPERATIONS.md`.

## Publishing conventions

Use these content patterns to keep the site easier to scale:

- Workflows:
  define the stage or full sequence, name inputs/outputs/owners, show failure points, and route to the adjacent implementation page.
- Blueprints and guides:
  state the operating model, decision criteria, upgrade triggers, and the conditions where the advice stops fitting.
- Comparisons:
  frame one bounded decision, judge options by workflow criteria, include scenarios and failure modes, and end with a clear next page.
- Templates and checklists:
  name the trigger moment, provide the asset, list common misses or edge cases, and define what "complete" means.
- Glossary entries:
  define the term plainly, explain why it matters operationally, and link directly to the page where the definition becomes useful.
- FAQ pages:
  answer one narrow blocker quickly, state the recommendation boundary, and route to a stronger implementation page.

Front matter expectations for publishable pages:

- always set `description`, `summary`, `page_type`, `search_intent`, and `page_role`
- set `related` intentionally for cornerstone and support-routing pages
- use `featured = true` only for genuine anchor or cornerstone pages within a hub
- keep category aligned to the section so permalinks and related-content behavior stay predictable

Internal linking conventions:

- cornerstone pages should link down to supporting pages and assets
- support pages should route back to the relevant cornerstone page
- hub pages should explain when to start there, when to leave, and which page is the best entry point for each scenario

## Next steps before deployment

1. Set the real monitored public inbox in `content/contact/_index.md`.
2. In Cloudflare Pages, set `HUGO_VERSION=0.159.2`.
3. In Cloudflare Pages, use build command `bash tools/build-cloudflare.sh`.
4. In Cloudflare Pages, set `SITE_URL=https://soloopsguide.com/`.
5. If `SITE_URL` is not set, Cloudflare will fall back to `CF_PAGES_URL` for the build baseURL.
6. Use output directory `public`.
7. Re-run `tools/hugo/hugo.exe --minify --gc --baseURL <deploy-url>` locally if the final production URL or contact details change before release.
