# Reusable Feature Image Workflow

This directory contains the reusable Python-based feature-image workflow for SoloOpsGuide.

## Goals

- keep image generation code-driven and repeatable
- separate shared rendering logic from per-image content
- make one-image, batch, and full regeneration easy
- export production-ready `webp` files into `static/images/features/...`

## Structure

- `generate_one.py`: generate a single image by slug
- `generate_many.py`: generate a filtered batch by category and/or layout
- `generate_all.py`: regenerate every image config in this workflow
- `requirements.txt`: Python dependency list
- `feature_images/`: shared engine, templates, validation, and exporter code
- `feature_images/data/`: per-image JSON configs
- `feature_images/templates/`: reusable layout templates

## Dependency check

Preferred Python path:

```powershell
C:\Users\vboxuser\AppData\Local\Programs\Python\Python312\python.exe
```

Install dependencies if needed:

```powershell
C:\Users\vboxuser\AppData\Local\Programs\Python\Python312\python.exe -m pip install -r tools/feature-images/requirements.txt
```

## Commands

Generate one image:

```powershell
C:\Users\vboxuser\AppData\Local\Programs\Python\Python312\python.exe tools/feature-images/generate_one.py --id freelance-client-workflow-system
```

Generate by category:

```powershell
C:\Users\vboxuser\AppData\Local\Programs\Python\Python312\python.exe tools/feature-images/generate_many.py --category workflows
```

Generate by layout:

```powershell
C:\Users\vboxuser\AppData\Local\Programs\Python\Python312\python.exe tools/feature-images/generate_many.py --layout comparison_split
```

Generate all configured images:

```powershell
C:\Users\vboxuser\AppData\Local\Programs\Python\Python312\python.exe tools/feature-images/generate_all.py
```

## Adding a new image

1. Add a JSON config under `feature_images/data/<category>/`.
2. Point it at a reusable layout with `layout`.
3. Keep the output filename stable and SEO-friendly.
4. Regenerate the image with `generate_one.py --id <slug>`.

Use a custom per-image generator only when a shared template cannot handle the composition cleanly.

## Output rules

- final outputs must stay inside `static/images/features/`
- current workflow exports `webp` with quality/method settings tuned for the site
- validation warnings are printed if text wrapping or box bounds exceed the template limits
- reviewed generated images are activated in Hugo through `data/feature_image_raster_preferences.json`

## Current migrated sample set

- `workflows/freelance-client-workflow-system.webp`
- `hubs/client-workflow-systems.webp`
- `blueprints/solo-freelancer-lean-budget.webp`
- `comparisons/crm-vs-project-management.webp`

The existing SVG files remain in place as stable fallbacks.
