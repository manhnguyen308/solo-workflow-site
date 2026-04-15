param(
  [string]$ManifestPath = (Join-Path $PSScriptRoot "feature-image-prompts\homepage-feature-images.json"),
  [string]$ConfigPath = (Join-Path $PSScriptRoot "feature-image-local-config.json"),
  [string]$Id,
  [switch]$All,
  [string]$BackendType,
  [string]$EndpointUrl,
  [string]$Profile,
  [string]$ModelCheckpoint,
  [switch]$TestBackend,
  [switch]$DryRun
)

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

$RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path

function Write-Status([string]$Message) {
  Write-Output $Message
}

function Get-JsonValue($Object, [string]$Name, $Default = $null) {
  if ($null -eq $Object) {
    return $Default
  }

  $property = $Object.PSObject.Properties[$Name]
  if ($null -eq $property) {
    return $Default
  }

  return $property.Value
}

function Get-AbsolutePath([string]$PathValue) {
  if ([string]::IsNullOrWhiteSpace($PathValue)) {
    return $null
  }

  if ([System.IO.Path]::IsPathRooted($PathValue)) {
    return [System.IO.Path]::GetFullPath($PathValue)
  }

  return [System.IO.Path]::GetFullPath((Join-Path $RepoRoot $PathValue))
}

function Assert-PathWithin([string]$CandidatePath, [string]$RootPath, [string]$Label) {
  $resolvedCandidate = [System.IO.Path]::GetFullPath($CandidatePath)
  $resolvedRoot = [System.IO.Path]::GetFullPath($RootPath).TrimEnd('\') + '\'
  if (-not $resolvedCandidate.StartsWith($resolvedRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
    throw "$Label must stay within $RootPath. Resolved path: $resolvedCandidate"
  }
}

function Get-Manifest([string]$PathValue) {
  $resolvedPath = Get-AbsolutePath $PathValue
  if (-not (Test-Path $resolvedPath)) {
    throw "Feature-image manifest not found: $resolvedPath"
  }

  $manifest = Get-Content -Raw $resolvedPath | ConvertFrom-Json
  $images = @(Get-JsonValue $manifest "images" @())
  if ($images.Count -eq 0) {
    throw "Feature-image manifest did not contain any images: $resolvedPath"
  }

  return @{
    path = $resolvedPath
    manifest = $manifest
    defaults = (Get-JsonValue $manifest "defaults" ([pscustomobject]@{}))
    images = $images
  }
}

function Get-Config([string]$PathValue) {
  $resolvedPath = Get-AbsolutePath $PathValue
  if (-not (Test-Path $resolvedPath)) {
    throw "Local backend config not found: $resolvedPath"
  }

  return @{
    path = $resolvedPath
    config = (Get-Content -Raw $resolvedPath | ConvertFrom-Json)
  }
}

function Get-ProfileConfig($ConfigObject, [string]$ProfileName) {
  $profiles = Get-JsonValue $ConfigObject "profiles" $null
  if ([string]::IsNullOrWhiteSpace($ProfileName)) {
    return $ConfigObject
  }

  if ($null -eq $profiles) {
    throw "Config does not define any profiles, but -Profile '$ProfileName' was requested."
  }

  $profileProperty = $profiles.PSObject.Properties[$ProfileName]
  if ($null -eq $profileProperty) {
    throw "Config profile '$ProfileName' was not found."
  }

  return $profileProperty.Value
}

function Get-FirstValue($Values) {
  foreach ($value in $Values) {
    if ($null -ne $value -and -not [string]::IsNullOrWhiteSpace([string]$value)) {
      return $value
    }
  }

  return $null
}

function Get-FirstInt($Values, [int]$DefaultValue) {
  foreach ($value in $Values) {
    if ($null -ne $value -and -not [string]::IsNullOrWhiteSpace([string]$value)) {
      return [int]$value
    }
  }

  return $DefaultValue
}

function Get-FirstDouble($Values, [double]$DefaultValue) {
  foreach ($value in $Values) {
    if ($null -ne $value -and -not [string]::IsNullOrWhiteSpace([string]$value)) {
      return [double]$value
    }
  }

  return $DefaultValue
}

function Get-Selection($Images, [string]$SelectedId, [switch]$GenerateAll) {
  if ($GenerateAll -and $SelectedId) {
    throw "Use either -All or -Id, not both."
  }

  if (-not $GenerateAll -and -not $SelectedId) {
    throw "Use -All to generate every manifest entry or -Id <image-id> to generate one image."
  }

  if ($GenerateAll) {
    return @($Images)
  }

  $selected = @($Images | Where-Object { $_.id -eq $SelectedId })
  if ($selected.Count -eq 0) {
    throw "No manifest entry matched -Id '$SelectedId'."
  }

  return $selected
}

function Resolve-Request($Item, $ManifestDefaults, $ConfigObject) {
  $requestedProfile = Get-FirstValue @(
    $Profile,
    (Get-JsonValue $Item "profile" $null),
    (Get-JsonValue $ManifestDefaults "profile" $null),
    (Get-JsonValue $ConfigObject "profile" $null)
  )

  $profileConfig = Get-ProfileConfig $ConfigObject $requestedProfile
  $profileImage = Get-JsonValue $profileConfig "image" ([pscustomobject]@{})
  $itemImage = Get-JsonValue $Item "image" ([pscustomobject]@{})
  $outputRoot = Get-AbsolutePath (Get-FirstValue @(
    (Get-JsonValue $Item "output_directory" $null),
    (Get-JsonValue $ManifestDefaults "output_directory" $null),
    (Get-JsonValue $profileConfig "output_directory" $null),
    "static/images/features"
  ))
  $outputPathValue = Get-FirstValue @(
    (Get-JsonValue $Item "output_path" $null),
    (Get-JsonValue $ManifestDefaults "output_path" $null)
  )

  if (-not $outputPathValue) {
    $outputPathValue = Join-Path $outputRoot ($Item.id + ".png")
  }

  $outputPath = Get-AbsolutePath $outputPathValue
  Assert-PathWithin $outputPath $outputRoot "Feature image output path"

  $backendType = (Get-FirstValue @(
    $BackendType,
    (Get-JsonValue $Item "backend_type" $null),
    (Get-JsonValue $ManifestDefaults "backend_type" $null),
    (Get-JsonValue $profileConfig "backend_type" $null),
    "automatic1111"
  )).ToLowerInvariant()

  $endpoint = Get-FirstValue @(
    $EndpointUrl,
    (Get-JsonValue $Item "endpoint_url" $null),
    (Get-JsonValue $ManifestDefaults "endpoint_url" $null),
    (Get-JsonValue $profileConfig "endpoint_url" $null)
  )

  if (-not $endpoint) {
    throw "No endpoint_url was configured for image '$($Item.id)'."
  }

  $sourceWidth = Get-FirstInt @(
    (Get-JsonValue $itemImage "source_width" $null),
    (Get-JsonValue $Item "source_width" $null),
    (Get-JsonValue $ManifestDefaults "source_width" $null),
    (Get-JsonValue $profileImage "source_width" $null)
  ) 1536
  $sourceHeight = Get-FirstInt @(
    (Get-JsonValue $itemImage "source_height" $null),
    (Get-JsonValue $Item "source_height" $null),
    (Get-JsonValue $ManifestDefaults "source_height" $null),
    (Get-JsonValue $profileImage "source_height" $null)
  ) 1024
  $targetWidth = Get-FirstInt @(
    (Get-JsonValue $itemImage "target_width" $null),
    (Get-JsonValue $Item "target_width" $null),
    (Get-JsonValue $ManifestDefaults "target_width" $null),
    (Get-JsonValue $profileImage "target_width" $null)
  ) 1600
  $targetHeight = Get-FirstInt @(
    (Get-JsonValue $itemImage "target_height" $null),
    (Get-JsonValue $Item "target_height" $null),
    (Get-JsonValue $ManifestDefaults "target_height" $null),
    (Get-JsonValue $profileImage "target_height" $null)
  ) 900
  $cropMode = Get-FirstValue @(
    (Get-JsonValue $itemImage "crop_mode" $null),
    (Get-JsonValue $Item "crop_mode" $null),
    (Get-JsonValue $ManifestDefaults "crop_mode" $null),
    (Get-JsonValue $profileImage "crop_mode" $null),
    "center-crop"
  )

  $negativePrompt = Get-FirstValue @(
    (Get-JsonValue $Item "negative_prompt" $null),
    (Get-JsonValue $ManifestDefaults "negative_prompt" $null),
    (Get-JsonValue $profileConfig "negative_prompt" $null)
  )

  $backendConfig = Get-JsonValue $profileConfig $backendType ([pscustomobject]@{})
  $resolvedModelCheckpoint = Get-FirstValue @(
    $ModelCheckpoint,
    (Get-JsonValue $Item "model_checkpoint" $null),
    (Get-JsonValue $ManifestDefaults "model_checkpoint" $null),
    (Get-JsonValue $backendConfig "model_checkpoint" $null)
  )

  return [pscustomobject]@{
    id = $Item.id
    prompt = $Item.prompt
    negative_prompt = $negativePrompt
    profile = $requestedProfile
    backend_type = $backendType
    endpoint_url = $endpoint.TrimEnd('/')
    output_root = $outputRoot
    output_path = $outputPath
    source_width = $sourceWidth
    source_height = $sourceHeight
    target_width = $targetWidth
    target_height = $targetHeight
    crop_mode = $cropMode
    model_checkpoint = $resolvedModelCheckpoint
    backend = $backendConfig
  }
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
    [int]$Height,
    [Parameter(Mandatory = $true)]
    [string]$CropMode
  )

  if ($CropMode -ne "center-crop") {
    throw "Unsupported crop mode '$CropMode'. Supported value: center-crop"
  }

  $directory = Split-Path -Parent $OutputPath
  if (-not (Test-Path $directory)) {
    New-Item -ItemType Directory -Path $directory -Force | Out-Null
  }

  $stream = New-Object System.IO.MemoryStream(,$Bytes)
  $sourceBitmap = $null
  $canvas = $null
  $graphics = $null

  try {
    $sourceBitmap = [System.Drawing.Bitmap]::new($stream)
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
    if ($stream) { $stream.Dispose() }
  }
}

function Test-GeneratedImage([string]$PathValue, [int]$ExpectedWidth, [int]$ExpectedHeight) {
  if (-not (Test-Path $PathValue)) {
    return $false
  }

  $bitmap = $null
  try {
    $bitmap = [System.Drawing.Bitmap]::new($PathValue)
    return $bitmap.Width -eq $ExpectedWidth -and $bitmap.Height -eq $ExpectedHeight
  }
  finally {
    if ($bitmap) { $bitmap.Dispose() }
  }
}

function Get-BackendHealth($Request) {
  $result = [ordered]@{
    backend_type = $Request.backend_type
    endpoint_url = $Request.endpoint_url
    ok = $false
    detail = $null
  }

  try {
    switch ($Request.backend_type) {
      "automatic1111" {
        $response = Invoke-RestMethod -Method Get -Uri ($Request.endpoint_url + "/sdapi/v1/options") -TimeoutSec 5
        $checkpoint = Get-JsonValue $response "sd_model_checkpoint" $null
        $result.ok = $true
        $result.detail = if ($checkpoint) { "reachable; current checkpoint: $checkpoint" } else { "reachable" }
      }
      "comfyui" {
        $response = Invoke-RestMethod -Method Get -Uri ($Request.endpoint_url + "/system_stats") -TimeoutSec 5
        $deviceCount = @(Get-JsonValue $response "devices" @()).Count
        $result.ok = $true
        $result.detail = if ($deviceCount -gt 0) { "reachable; devices reported: $deviceCount" } else { "reachable" }
      }
      default {
        throw "Unsupported backend_type '$($Request.backend_type)'."
      }
    }
  }
  catch {
    $result.detail = $_.Exception.Message
  }

  return [pscustomobject]$result
}

function Assert-BackendReachable($Request) {
  $health = Get-BackendHealth $Request
  if (-not $health.ok) {
    $guidance = switch ($Request.backend_type) {
      "automatic1111" { "Start Automatic1111 / Stable Diffusion WebUI with API enabled, for example: webui-user.bat --api" }
      "comfyui" { "Start the ComfyUI server and confirm the HTTP API is listening on the configured endpoint." }
      default { "Start the configured local backend and confirm the endpoint is correct." }
    }

    throw ("{0} backend at {1} is not reachable. {2} Exact error: {3}" -f `
      $Request.backend_type, `
      $Request.endpoint_url, `
      $guidance, `
      $health.detail)
  }

  return $health
}

function Invoke-A1111Generation($Request) {
  $body = @{
    prompt = $Request.prompt
    negative_prompt = $Request.negative_prompt
    width = $Request.source_width
    height = $Request.source_height
    steps = (Get-FirstInt @((Get-JsonValue $Request.backend "steps" $null)) 28)
    cfg_scale = (Get-FirstDouble @((Get-JsonValue $Request.backend "cfg_scale" $null)) 6.5)
    sampler_name = (Get-FirstValue @((Get-JsonValue $Request.backend "sampler_name" $null), "DPM++ 2M Karras"))
    seed = (Get-FirstInt @((Get-JsonValue $Request.backend "seed" $null)) -1)
    batch_size = 1
    n_iter = 1
    restore_faces = $false
    save_images = $false
    send_images = $true
  }

  if ($Request.model_checkpoint) {
    $body.override_settings = @{
      sd_model_checkpoint = $Request.model_checkpoint
    }
  }

  $response = Invoke-RestMethod `
    -Method Post `
    -Uri ($Request.endpoint_url + "/sdapi/v1/txt2img") `
    -ContentType "application/json" `
    -Body ($body | ConvertTo-Json -Depth 8)

  $images = @($response.images)
  if ($images.Count -eq 0) {
    throw "Automatic1111 returned no images for '$($Request.id)'."
  }

  return [Convert]::FromBase64String($images[0])
}

function Get-ComfyJsonLiteral($Value) {
  return ($Value | ConvertTo-Json -Compress)
}

function Invoke-ComfyUiGeneration($Request) {
  $workflowPathValue = Get-FirstValue @(
    (Get-JsonValue $Request.backend "workflow_path" $null),
    "tools/feature-image-backends/comfyui-feature-image-workflow.json"
  )
  $workflowPath = Get-AbsolutePath $workflowPathValue
  if (-not (Test-Path $workflowPath)) {
    throw "ComfyUI workflow template not found: $workflowPath"
  }

  $seed = Get-FirstInt @((Get-JsonValue $Request.backend "seed" $null)) -1
  if ($seed -lt 0) {
    $seed = Get-Random -Minimum 1 -Maximum 2147483647
  }

  $workflowJson = Get-Content -Raw $workflowPath
  $workflowJson = $workflowJson.Replace('"__PROMPT__"', (Get-ComfyJsonLiteral $Request.prompt))
  $workflowJson = $workflowJson.Replace('"__NEGATIVE_PROMPT__"', (Get-ComfyJsonLiteral $Request.negative_prompt))
  $workflowJson = $workflowJson.Replace('"__MODEL_CHECKPOINT__"', (Get-ComfyJsonLiteral (Get-FirstValue @($Request.model_checkpoint, ""))))
  $workflowJson = $workflowJson.Replace('"__WIDTH__"', (Get-ComfyJsonLiteral $Request.source_width))
  $workflowJson = $workflowJson.Replace('"__HEIGHT__"', (Get-ComfyJsonLiteral $Request.source_height))
  $workflowJson = $workflowJson.Replace('"__STEPS__"', (Get-ComfyJsonLiteral (Get-FirstInt @((Get-JsonValue $Request.backend "steps" $null)) 28)))
  $workflowJson = $workflowJson.Replace('"__CFG_SCALE__"', (Get-ComfyJsonLiteral (Get-FirstDouble @((Get-JsonValue $Request.backend "cfg_scale" $null)) 6.5)))
  $workflowJson = $workflowJson.Replace('"__SEED__"', (Get-ComfyJsonLiteral $seed))
  $workflowJson = $workflowJson.Replace('"__SAMPLER_NAME__"', (Get-ComfyJsonLiteral (Get-FirstValue @((Get-JsonValue $Request.backend "sampler_name" $null), "euler"))))
  $workflowJson = $workflowJson.Replace('"__SCHEDULER__"', (Get-ComfyJsonLiteral (Get-FirstValue @((Get-JsonValue $Request.backend "scheduler" $null), "normal"))))
  $workflowJson = $workflowJson.Replace('"__FILENAME_PREFIX__"', (Get-ComfyJsonLiteral ("soloopsguide-" + $Request.id)))

  $clientId = Get-FirstValue @((Get-JsonValue $Request.backend "client_id" $null), "SoloOpsGuideLocalFeatureImages")
  $enqueueBody = '{"prompt":' + $workflowJson + ',"client_id":' + (Get-ComfyJsonLiteral $clientId) + '}'
  $enqueueResponse = Invoke-RestMethod `
    -Method Post `
    -Uri ($Request.endpoint_url + "/prompt") `
    -ContentType "application/json" `
    -Body $enqueueBody

  $promptId = Get-JsonValue $enqueueResponse "prompt_id" $null
  if (-not $promptId) {
    throw "ComfyUI did not return a prompt_id for '$($Request.id)'."
  }

  $timeoutSeconds = Get-FirstInt @((Get-JsonValue $Request.backend "timeout_seconds" $null)) 300
  $pollSeconds = Get-FirstInt @((Get-JsonValue $Request.backend "poll_seconds" $null)) 2
  $deadline = (Get-Date).AddSeconds($timeoutSeconds)

  do {
    Start-Sleep -Seconds $pollSeconds
    $history = Invoke-RestMethod -Method Get -Uri ($Request.endpoint_url + "/history/" + $promptId)
    $entryProperty = $history.PSObject.Properties[$promptId]
    if ($entryProperty) {
      $outputs = Get-JsonValue $entryProperty.Value "outputs" $null
      if ($outputs) {
        foreach ($outputProperty in $outputs.PSObject.Properties) {
          $images = @(Get-JsonValue $outputProperty.Value "images" @())
          if ($images.Count -gt 0) {
            $image = $images[0]
            $downloadUri = "{0}/view?filename={1}&subfolder={2}&type={3}" -f `
              $Request.endpoint_url, `
              [System.Uri]::EscapeDataString([string](Get-JsonValue $image "filename" "")), `
              [System.Uri]::EscapeDataString([string](Get-JsonValue $image "subfolder" "")), `
              [System.Uri]::EscapeDataString([string](Get-JsonValue $image "type" "output"))
            $tempDownload = [System.IO.Path]::GetTempFileName()
            try {
              Invoke-WebRequest -Uri $downloadUri -OutFile $tempDownload | Out-Null
              return [System.IO.File]::ReadAllBytes($tempDownload)
            }
            finally {
              if (Test-Path $tempDownload) {
                Remove-Item -LiteralPath $tempDownload -Force
              }
            }
          }
        }
      }
    }
  } while ((Get-Date) -lt $deadline)

  throw "ComfyUI timed out after $timeoutSeconds second(s) while waiting for '$($Request.id)'."
}

function Invoke-BackendGeneration($Request) {
  switch ($Request.backend_type) {
    "automatic1111" { return Invoke-A1111Generation $Request }
    "comfyui" { return Invoke-ComfyUiGeneration $Request }
    default { throw "Unsupported backend_type '$($Request.backend_type)'. Supported values: automatic1111, comfyui" }
  }
}

$manifestState = Get-Manifest $ManifestPath
$configState = Get-Config $ConfigPath
$selectedItems = Get-Selection -Images $manifestState.images -SelectedId $Id -GenerateAll:$All
$requests = @($selectedItems | ForEach-Object { Resolve-Request -Item $_ -ManifestDefaults $manifestState.defaults -ConfigObject $configState.config })

if ($DryRun) {
  Write-Status ("DRY RUN: resolved {0} image(s) from {1}" -f $requests.Count, $manifestState.path)
  foreach ($request in $requests) {
    $profileLabel = if ($request.profile) { $request.profile } else { "<none>" }
    Write-Status ("[{0}] backend={1} profile={2} output={3}" -f $request.id, $request.backend_type, $profileLabel, $request.output_path)
  }
  exit 0
}

if ($TestBackend) {
  foreach ($request in $requests) {
    $profileLabel = if ($request.profile) { $request.profile } else { "<none>" }
    Write-Status ("Testing backend for [{0}] backend={1} profile={2} endpoint={3}" -f $request.id, $request.backend_type, $profileLabel, $request.endpoint_url)
    $health = Get-BackendHealth $request
    if ($health.ok) {
      Write-Status ("BACKEND OK [{0}] {1}" -f $request.id, $health.detail)
    }
    else {
      Write-Status ("BACKEND FAILED [{0}] {1}" -f $request.id, $health.detail)
    }
  }

  if ((@($requests | ForEach-Object { (Get-BackendHealth $_).ok }) -contains $false)) {
    throw "One or more backend connectivity tests failed."
  }

  exit 0
}

$failures = New-Object System.Collections.Generic.List[string]
$generated = New-Object System.Collections.Generic.List[string]

foreach ($request in $requests) {
  $tempFile = Join-Path (Split-Path -Parent $request.output_path) (([System.IO.Path]::GetFileNameWithoutExtension($request.output_path)) + ".tmp." + [guid]::NewGuid().ToString("N") + ".png")
  try {
    Write-Status ("Generating [{0}] via {1} -> {2}" -f $request.id, $request.backend_type, $request.output_path)
    $health = Assert-BackendReachable $request
    Write-Status ("Backend ready [{0}] {1}" -f $request.id, $health.detail)
    $bytes = Invoke-BackendGeneration $request
    Convert-ToTargetPng -Bytes $bytes -OutputPath $tempFile -Width $request.target_width -Height $request.target_height -CropMode $request.crop_mode
    if (-not (Test-GeneratedImage -PathValue $tempFile -ExpectedWidth $request.target_width -ExpectedHeight $request.target_height)) {
      throw "Processed file for '$($request.id)' was not a valid $($request.target_width)x$($request.target_height) PNG."
    }

    Move-Item -LiteralPath $tempFile -Destination $request.output_path -Force
    $generated.Add($request.output_path) | Out-Null
    Write-Status ("Saved [{0}] {1}" -f $request.id, $request.output_path)
  }
  catch {
    $failures.Add(("[{0}] {1}" -f $request.id, $_.Exception.Message)) | Out-Null
    Write-Status ("FAILED [{0}] {1}" -f $request.id, $_.Exception.Message)
  }
  finally {
    if (Test-Path $tempFile) {
      Remove-Item -LiteralPath $tempFile -Force
    }
  }
}

Write-Status ("Generated {0} image(s)." -f $generated.Count)
foreach ($pathValue in $generated) {
  Write-Status $pathValue
}

if ($failures.Count -gt 0) {
  throw ("Generation completed with {0} failure(s):`n{1}" -f $failures.Count, ($failures -join "`n"))
}
