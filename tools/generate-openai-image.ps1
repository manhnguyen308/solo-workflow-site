param(
  [Parameter(Mandatory = $true)]
  [string]$Prompt,

  [string]$OutputPath,

  [string]$Model = "gpt-image-1",

  [string]$Size = "1536x1024",

  [switch]$DryRun
)

$ErrorActionPreference = "Stop"

if (-not $OutputPath) {
  $OutputPath = Join-Path $PSScriptRoot "..\assets\images\generated\openai-image.png"
}

if (-not $env:OPENAI_API_KEY) {
  throw "OPENAI_API_KEY is not set. The script exists, but it cannot call the OpenAI image API without that key."
}

$resolvedOutputPath = $ExecutionContext.SessionState.Path.GetUnresolvedProviderPathFromPSPath($OutputPath)
$outputDir = Split-Path -Parent $resolvedOutputPath

if ($DryRun) {
  Write-Output "DRY RUN: would call OpenAI image API"
  Write-Output "Model: $Model"
  Write-Output "Size: $Size"
  Write-Output "Output: $resolvedOutputPath"
  Write-Output "Prompt length: $($Prompt.Length)"
  exit 0
}

if (-not (Test-Path $outputDir)) {
  New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
}

$headers = @{
  "Authorization" = "Bearer $($env:OPENAI_API_KEY)"
}

$body = @{
  model = $Model
  prompt = $Prompt
  size = $Size
} | ConvertTo-Json -Depth 5

$response = Invoke-RestMethod `
  -Method Post `
  -Uri "https://api.openai.com/v1/images/generations" `
  -Headers $headers `
  -ContentType "application/json" `
  -Body $body

if (-not $response.data -or -not $response.data[0] -or -not $response.data[0].b64_json) {
  throw "OpenAI image API response did not include image data."
}

$bytes = [Convert]::FromBase64String($response.data[0].b64_json)
[IO.File]::WriteAllBytes($resolvedOutputPath, $bytes)

Write-Output "Generated image at $resolvedOutputPath"
