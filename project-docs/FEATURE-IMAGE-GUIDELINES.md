# Feature Image Guidelines

Read this before any feature image creation, regeneration, or troubleshooting. All feature image work must go through the approved workflow below.

## Approved workflow

1. Create or update a JSON data config under `tools/feature-images/feature_images/data/<category>/`.
2. Run: `python3 tools/feature-images/generate_one.py --id <id>`
3. Output goes to: `static/images/features/<category>/<id>.webp`
4. Update the front matter `feature_image` field on the content page to match the output path.
5. Verify: confirm the `.webp` file was created, is a reasonable file size (8K–25K), and produced no warnings.

## Layout types

| Layout | Use case | Key fields |
| --- | --- | --- |
| `checklist_card` | Templates / checklists | `eyebrow`, `title`, `subtitle`, `trigger` (label + note), `steps` (4 items: label + tag) |
| `hub_overview` | Hub / navigation pages | `eyebrow`, `title`, `subtitle`, `anchor` (title + body), `modules` (4 items: kicker + title + detail) |
| `faq_card` | FAQ pages | `eyebrow`, `title`, `subtitle`, `problem` (box text), `routes` (4 items) |
| `concept_map` | Glossary / conceptual pages | `eyebrow`, `title`, `subtitle`, `concept` (center label), `attributes` (2x2 grid) |
| `comparison_split` | Comparison pages | `eyebrow`, `title`, `subtitle`, `left` / `right` (label + criteria) |
| `stack_blueprint` | Blueprint pages | `eyebrow`, `title`, `subtitle`, `layers` (stack rows) |
| `workflow_map` | Workflow pages (if used) | `eyebrow`, `title`, `subtitle`, `stages` (sequence) |
| `timeline_cover` | Timeline / sequential | `eyebrow`, `title`, `subtitle`, `phases` |

## Palette options

- `workflow` — teal/green, used for client workflow and operations pages
- `blueprint` — blue/slate, used for stack and system-of-record pages
- `comparison` — amber/neutral, used for comparison pages

## Path conventions

- Hubs: `static/images/features/hubs/<id>.webp` → `/images/features/hubs/<id>.webp`
- Blueprints: `static/images/features/blueprints/<id>.webp`
- Comparisons: `static/images/features/comparisons/<id>.webp`
- Templates: `static/images/features/templates/<id>.webp`
- Glossary: `static/images/features/glossary/<id>.webp`
- FAQ: `static/images/features/faq/<id>.webp`

## Text overflow fix (applied 2026-04-22)

The `checklist_card` trigger box is 294px wide. Labels longer than ~294px previously overflowed. Fix applied:
- `draw.text` replaced with `draw_text_block` for both trigger label and step labels.
- Trigger label uses `max_lines=2`, `width=294`, `y=490`.
- Trigger note moved to `y=578`.
- Step labels use `draw_text_block` with `width=680`, `max_lines=1`.

When writing trigger label text for `checklist_card`, keep it under ~35 characters per line.

## Approved raster gate

The gate file `data/feature_image_raster_preferences.json` controls which pages use the Python/Pillow WebPs versus SVG fallbacks. The intentionally limited approved set of 4 homepage hero images:
- workflow anchor: `freelance-client-workflow-system`
- workflow hub: `client-workflow-systems`
- lean blueprint: `solo-freelancer-lean-budget`
- CRM vs PM comparison: `crm-vs-project-management`

Do not add new pages to this gate without visual review.

## QA checklist for new images

- [ ] JSON data config created in the correct `data/<category>/` directory.
- [ ] `generate_one.py --id <id>` ran with no warnings.
- [ ] Output `.webp` file exists at the expected path.
- [ ] File size is reasonable (typically 8K–25K; very small may indicate generation failure).
- [ ] Front matter `feature_image` field updated on the content page.
- [ ] `feature_image_alt` describes the image content specifically (not generic).
- [ ] No other approved images were accidentally regenerated or overwritten.

## What not to do

- Do not create ad hoc `.webp` or `.svg` files as direct asset edits outside the `tools/` workflow.
- Do not commit placeholder `.svg` paths in front matter that point to non-existent files.
- Do not skip the data config step — direct image edits are not repeatable.
- Do not add new images to the approved raster gate file without visual review.
