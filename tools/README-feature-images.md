# Feature Image Workflows

SoloOpsGuide keeps its official feature-image workflows under `tools/`.

## Preferred code-generated workflow

Use the reusable Python workflow in `tools/feature-images/` when you want maintainable, code-generated editorial feature images with shared helpers, reusable layouts, and per-image config files.

Main docs:

- `tools/feature-images/README.md`

Example commands:

```powershell
C:\Users\vboxuser\AppData\Local\Programs\Python\Python312\python.exe tools/feature-images/generate_one.py --id freelance-client-workflow-system
C:\Users\vboxuser\AppData\Local\Programs\Python\Python312\python.exe tools/feature-images/generate_many.py --category workflows
C:\Users\vboxuser\AppData\Local\Programs\Python\Python312\python.exe tools/feature-images/generate_all.py
```

Only reviewed generated raster outputs should be switched on in the site. Hugo activation for those reviewed files is controlled through `data/feature_image_raster_preferences.json`.

## Preferred local raster workflow

Use `tools/generate-local-feature-images.ps1` when you want to generate homepage or article feature images locally without any API key or billing dependency.

Default tracked inputs:

- backend config: `tools/feature-image-local-config.json`
- prompt manifest: `tools/feature-image-prompts/homepage-feature-images.json`
- outputs: `static/images/features/`

Supported backends:

- `automatic1111` / Stable Diffusion WebUI
- `comfyui`

The tracked default profile is `homepage-a1111` because Automatic1111 is the cleaner Windows setup for a local HTTP workflow. A second `homepage-comfyui` profile is included if you prefer ComfyUI.

### Dry run

```powershell
powershell -ExecutionPolicy Bypass -File tools/generate-local-feature-images.ps1 -All -DryRun
```

### Test backend connectivity first

```powershell
powershell -ExecutionPolicy Bypass -File tools/generate-local-feature-images.ps1 `
  -Id freelance-client-workflow-system `
  -TestBackend
```

### Generate one image

```powershell
powershell -ExecutionPolicy Bypass -File tools/generate-local-feature-images.ps1 -Id freelance-client-workflow-system
```

### Generate all homepage feature images

```powershell
powershell -ExecutionPolicy Bypass -File tools/generate-local-feature-images.ps1 -All
```

### Switch to ComfyUI

```powershell
powershell -ExecutionPolicy Bypass -File tools/generate-local-feature-images.ps1 -All -Profile homepage-comfyui
```

### Override endpoint or model checkpoint

```powershell
powershell -ExecutionPolicy Bypass -File tools/generate-local-feature-images.ps1 `
  -Id crm-vs-project-management `
  -EndpointUrl http://127.0.0.1:7860 `
  -ModelCheckpoint "sd_xl_base_1.0.safetensors"
```

What the script does:

- reads the tracked prompt manifest
- resolves a backend profile and local endpoint
- generates to a temp file first
- center-crops and resizes to `1600x900`
- replaces the final file only after a valid processed PNG exists
- keeps stable output filenames defined in the manifest

If the backend is not installed or not running, the script fails clearly and does not pretend an image was generated.
The connectivity test reports the exact endpoint that failed so you can fix the local backend before attempting generation.

## Backend setup notes

### Automatic1111

1. Install Automatic1111 / Stable Diffusion WebUI locally.
2. Launch it with API access enabled, for example:

```powershell
webui-user.bat --api
```

3. Confirm the server is listening on `http://127.0.0.1:7860` or update `tools/feature-image-local-config.json`.
4. If you want a specific checkpoint, set `model_checkpoint` in the selected profile or pass `-ModelCheckpoint`.

### ComfyUI

1. Install ComfyUI locally.
2. Start the server so the HTTP API is available, usually on `http://127.0.0.1:8188`.
3. Adjust `tools/feature-image-backends/comfyui-feature-image-workflow.json` if your local node names or workflow expectations differ.
4. Set `model_checkpoint` in the selected profile when your workflow requires an explicit checkpoint name.

## Tracked prompt manifest

`tools/feature-image-prompts/homepage-feature-images.json` is the tracked source for the four homepage priority images:

- `freelance-client-workflow-system`
- `client-workflow-systems-hub`
- `software-stack-blueprint`
- `crm-vs-project-management`

## Existing SVG workflow

The SVG/template feature-image workflow is still available and remains the source of truth for the scripted SVG assets:

```powershell
powershell -ExecutionPolicy Bypass -File tools/generate-feature-images.ps1
```

That workflow writes the template-driven SVG assets into `static/images/features/`. Hugo already prefers generated raster siblings such as `.png` when they exist, so successful local image generations can replace the live image path without changing front matter.
