param()

$ErrorActionPreference = "Stop"

throw @"
tools/generate-openai-image.ps1 is deprecated.

SoloOpsGuide now uses the local no-API-key workflow:

  powershell -ExecutionPolicy Bypass -File tools/generate-local-feature-images.ps1 -All

Docs:
  tools/README-feature-images.md
"@
