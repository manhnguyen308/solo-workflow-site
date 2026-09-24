# Feature Image Guidelines

Read this before any feature image creation, regeneration, or troubleshooting. All feature image work must go through the approved workflow below.

## Approved workflow

1. Create or update a JSON data config under `tools/feature-images/feature_images/data/<category>/`.
2. Run on Windows: `C:\Users\vboxuser\AppData\Local\Programs\Python\Python312\python.exe tools/feature-images/generate_one.py --id <id>`
3. Output goes to: `static/images/features/<category>/<id>.webp`
4. Update the front matter `feature_image` field on the content page to match the output path.
5. Verify: confirm the `.webp` file was created, is a reasonable file size (roughly 15K–35K), and produced no warnings.

## Cover style (2026-09-25)

Every image is an editorial cover in the site's own palette: warm paper background, thin rule frame, a small navy page-type label with an amber accent bar, a large Georgia Bold title, `soloopsguide.com` at the bottom, and one simple navy and amber line drawing on the right. The shared template is `tools/feature-images/feature_images/templates/editorial_cover.py`; colours live in `palette.py` and fonts in `fonts.py`.

- The label comes from `category`: workflows → WORKFLOW, comparisons → COMPARISON, templates → TEMPLATE, glossary → GLOSSARY, faq → FAQ, hubs → GUIDE HUB, blueprints → STACK BLUEPRINT, site → SOLOOPSGUIDE.
- The title comes from `title`. It is set as large as possible (112px down to 72px) in up to three lines, so keep it short, around 40 characters.
- `layout` picks the drawing and the fields it reads. Other fields in older configs (`subtitle`, `eyebrow`, `palette`, `anchor`, `steps`, and so on) are not drawn.

| Layout | Use case | Drawing | Fields drawn |
| --- | --- | --- | --- |
| `workflow_map` | Workflow pages | Four numbered steps on a vertical line | `items[].label` |
| `comparison_split` | Comparison pages | Two option panels with a "vs" badge | `left.kicker`, `right.kicker` |
| `checklist_card` | Templates and checklists | Four checklist rows, three ticked | none |
| `faq_card` | FAQ pages | Large question mark card | none |
| `concept_map` | Glossary pages | Definition card | `concept` |
| `hub_overview` | Hubs, bundles, homepage | 2x2 tiles, first one highlighted | `modules[].title` (first four) |
| `stack_blueprint` | Blueprint pages | Three stacked layers, base highlighted | `stack_layers[].title` (base first) |

Labels inside a drawing share one size per image and shrink or wrap to fit. The generator warns when a title or label cannot fit at its smallest size; shorten the text rather than ignoring the warning.

## Path conventions

- Hubs: `static/images/features/hubs/<id>.webp` → `/images/features/hubs/<id>.webp`
- Blueprints: `static/images/features/blueprints/<id>.webp`
- Comparisons: `static/images/features/comparisons/<id>.webp`
- Templates: `static/images/features/templates/<id>.webp`
- Glossary: `static/images/features/glossary/<id>.webp`
- FAQ: `static/images/features/faq/<id>.webp`

## Approved raster gate

The gate file `data/feature_image_raster_preferences.json` controls which pages use the Python/Pillow WebPs versus SVG fallbacks. The intentionally limited approved set of 4 homepage hero images:
- workflow anchor: `freelance-client-workflow-system`
- workflow hub: `client-workflow-systems`
- lean blueprint: `solo-freelancer-lean-budget`
- CRM vs PM comparison: `crm-vs-project-management`

Do not add new pages to this gate without visual review.

## Typeface and output rules

- Generate on Windows, where `fonts.py` finds Georgia Bold and Segoe UI (both are fallbacks in the site's own font stacks). On Linux it falls back to Liberation fonts, which look different, so publish only Windows-generated images.
- An `output_path` ending in `.png` exports PNG. Use it only for social share images (currently `site/soloopsguide-home.png`); page and card images stay WebP.
- `feature_image_alt` should describe the cover as drawn, for example: Cover titled “Stack Decision Ready?” with a checklist drawing.

## QA checklist for new images

- [ ] JSON data config created in the correct `data/<category>/` directory.
- [ ] `generate_one.py --id <id>` ran with no warnings.
- [ ] Output `.webp` file exists at the expected path.
- [ ] File size is reasonable (typically 15K–35K; very small may indicate generation failure).
- [ ] Front matter `feature_image` field updated on the content page.
- [ ] `feature_image_alt` describes the cover as drawn: its title and drawing.
- [ ] No other approved images were accidentally regenerated or overwritten.

## What not to do

- Do not create ad hoc `.webp` or `.svg` files as direct asset edits outside the `tools/` workflow.
- Do not commit placeholder `.svg` paths in front matter that point to non-existent files.
- Do not skip the data config step — direct image edits are not repeatable.
- Do not add new images to the approved raster gate file without visual review.
