param(
  [string]$ConfigPath = (Join-Path $PSScriptRoot "feature-image-prompts\homepage-feature-images.json"),
  [string[]]$Id,
  [string]$Model = "gpt-image-1",
  [string]$Size = "1536x1024",
  [int]$TargetWidth = 1600,
  [int]$TargetHeight = 900,
  [switch]$DryRun
)

$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

function Get-AbsolutePath([string]$Path) {
  return $ExecutionContext.SessionState.Path.GetUnresolvedProviderPathFromPSPath($Path)
}

function Write-Status([string]$Message) {
  Write-Output $Message
}

function Convert-ToTargetPng {
  param(
    [Parameter(Mandatory = $true)]
    [byte[]]$Bytes,
    [Parameter(Mandatory = $true)]
    [string]$OutputPath,
    [Parameter(Mandatory = $true)]
    [int]$Width,
    [Parameter(Mandatory = $true)]
    [int]$Height
  )

  $directory = Split-Path -Parent $OutputPath
  if (-not (Test-Path $directory)) {
    New-Item -ItemType Directory -Path $directory -Force | Out-Null
  }

  $memoryStream = New-Object System.IO.MemoryStream(,$Bytes)
  $sourceBitmap = $null
  $canvas = $null
  $graphics = $null
  try {
    $sourceBitmap = [System.Drawing.Bitmap]::new($memoryStream)
    $scale = [Math]::Max($Width / $sourceBitmap.Width, $Height / $sourceBitmap.Height)
    $scaledWidth = [int][Math]::Ceiling($sourceBitmap.Width * $scale)
    $scaledHeight = [int][Math]::Ceiling($sourceBitmap.Height * $scale)
    $offsetX = [int][Math]::Floor(($Width - $scaledWidth) / 2)
    $offsetY = [int][Math]::Floor(($Height - $scaledHeight) / 2)

    $canvas = [System.Drawing.Bitmap]::new($Width, $Height)
    $graphics = [System.Drawing.Graphics]::FromImage($canvas)
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $graphics.Clear([System.Drawing.Color]::White)
    $graphics.DrawImage($sourceBitmap, $offsetX, $offsetY, $scaledWidth, $scaledHeight)
    $canvas.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
  }
  finally {
    if ($graphics) { $graphics.Dispose() }
    if ($canvas) { $canvas.Dispose() }
    if ($sourceBitmap) { $sourceBitmap.Dispose() }
    $memoryStream.Dispose()
  }
}

function Invoke-ImageGeneration {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Prompt,
    [Parameter(Mandatory = $true)]
    [string]$ModelName,
    [Parameter(Mandatory = $true)]
    [string]$RequestedSize
  )

  $headers = @{
    "Authorization" = "Bearer $($env:OPENAI_API_KEY)"
  }

  $body = @{
    model = $ModelName
    prompt = $Prompt
    size = $RequestedSize
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

  return [Convert]::FromBase64String($response.data[0].b64_json)
}

function Get-ManifestItems([string]$ManifestPath) {
  if (-not (Test-Path $ManifestPath)) {
    throw "Prompt manifest not found: $ManifestPath"
  }

  $manifest = Get-Content -Raw $ManifestPath | ConvertFrom-Json
  if (-not $manifest.images) {
    throw "Prompt manifest does not contain an 'images' array: $ManifestPath"
  }

  return @($manifest.images)
}

$resolvedConfigPath = Get-AbsolutePath $ConfigPath
$manifestItems = Get-ManifestItems $resolvedConfigPath

if ($Id -and $Id.Count -gt 0) {
  $selectedIds = [System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::OrdinalIgnoreCase)
  foreach ($value in $Id) {
    if ($value) { [void]$selectedIds.Add($value) }
  }
  $manifestItems = @($manifestItems | Where-Object { $selectedIds.Contains($_.id) })
  if ($manifestItems.Count -eq 0) {
    throw "No prompt entries matched the supplied -Id values."
  }
}

if ($DryRun) {
  Write-Status "DRY RUN: would generate $($manifestItems.Count) image(s) from $resolvedConfigPath"
  foreach ($item in $manifestItems) {
    $outputPath = Get-AbsolutePath $item.output_path
    Write-Status ("[{0}] {1}" -f $item.id, $outputPath)
  }
  exit 0
}

if (-not $env:OPENAI_API_KEY) {
  throw "OPENAI_API_KEY is not set. Set it locally before running the image-model workflow."
}

$results = @()
foreach ($item in $manifestItems) {
  if (-not $item.id -or -not $item.output_path -or -not $item.prompt) {
    throw "Each manifest entry must include id, output_path, and prompt."
  }

  $outputPath = Get-AbsolutePath $item.output_path
  Write-Status ("Generating [{0}] -> {1}" -f $item.id, $outputPath)
  $bytes = Invoke-ImageGeneration -Prompt $item.prompt -ModelName $Model -RequestedSize $Size
  Convert-ToTargetPng -Bytes $bytes -OutputPath $outputPath -Width $TargetWidth -Height $TargetHeight
  $results += [pscustomobject]@{
    id = $item.id
    output_path = $outputPath
    prompt = $item.prompt
  }
}

Write-Status ("Generated {0} image(s) from {1}" -f $results.Count, $resolvedConfigPath)
foreach ($result in $results) {
  Write-Status ("[{0}] {1}" -f $result.id, $result.output_path)
}
