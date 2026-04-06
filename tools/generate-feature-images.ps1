$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

function New-Color {
  param(
    [string]$Hex,
    [int]$Alpha = 255
  )

  $clean = $Hex.TrimStart("#")
  return [System.Drawing.Color]::FromArgb(
    $Alpha,
    [Convert]::ToInt32($clean.Substring(0, 2), 16),
    [Convert]::ToInt32($clean.Substring(2, 2), 16),
    [Convert]::ToInt32($clean.Substring(4, 2), 16)
  )
}

function New-RoundedPath {
  param(
    [float]$X,
    [float]$Y,
    [float]$Width,
    [float]$Height,
    [float]$Radius
  )

  $diameter = $Radius * 2
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $path.AddArc($X, $Y, $diameter, $diameter, 180, 90)
  $path.AddArc($X + $Width - $diameter, $Y, $diameter, $diameter, 270, 90)
  $path.AddArc($X + $Width - $diameter, $Y + $Height - $diameter, $diameter, $diameter, 0, 90)
  $path.AddArc($X, $Y + $Height - $diameter, $diameter, $diameter, 90, 90)
  $path.CloseFigure()
  return $path
}

function Fill-RoundedRect {
  param(
    [System.Drawing.Graphics]$Graphics,
    [System.Drawing.Brush]$Brush,
    [float]$X,
    [float]$Y,
    [float]$Width,
    [float]$Height,
    [float]$Radius
  )

  $path = New-RoundedPath -X $X -Y $Y -Width $Width -Height $Height -Radius $Radius
  $Graphics.FillPath($Brush, $path)
  $path.Dispose()
}

function Stroke-RoundedRect {
  param(
    [System.Drawing.Graphics]$Graphics,
    [System.Drawing.Pen]$Pen,
    [float]$X,
    [float]$Y,
    [float]$Width,
    [float]$Height,
    [float]$Radius
  )

  $path = New-RoundedPath -X $X -Y $Y -Width $Width -Height $Height -Radius $Radius
  $Graphics.DrawPath($Pen, $path)
  $path.Dispose()
}

function Get-Palette {
  param([string]$Name)

  $palettes = @{
    site = @{
      bgA = "#0f172a"; bgB = "#0f8b8d"; glow = "#f8fafc"; surface = "#f8fafc"; ink = "#0f172a"; accent = "#f59e0b"; accentTwo = "#5eead4"
    }
    workflow = @{
      bgA = "#0f8b8d"; bgB = "#0f3b4f"; glow = "#ecfeff"; surface = "#f8fafc"; ink = "#0f172a"; accent = "#f59e0b"; accentTwo = "#67e8f9"
    }
    blueprint = @{
      bgA = "#102a43"; bgB = "#1d4e89"; glow = "#eff6ff"; surface = "#f8fafc"; ink = "#0f172a"; accent = "#fbbf24"; accentTwo = "#60a5fa"
    }
    comparison = @{
      bgA = "#5b3a1f"; bgB = "#9a6b33"; glow = "#fff7ed"; surface = "#fffdf8"; ink = "#1f2937"; accent = "#14b8a6"; accentTwo = "#f59e0b"
    }
    template = @{
      bgA = "#0f766e"; bgB = "#115e59"; glow = "#f0fdfa"; surface = "#fcfffe"; ink = "#0f172a"; accent = "#f59e0b"; accentTwo = "#99f6e4"
    }
    support = @{
      bgA = "#334155"; bgB = "#0f172a"; glow = "#f8fafc"; surface = "#f8fafc"; ink = "#0f172a"; accent = "#38bdf8"; accentTwo = "#cbd5e1"
    }
  }

  return $palettes[$Name]
}

function Get-LayoutRects {
  param(
    [string]$Layout,
    [System.Random]$Random
  )

  switch ($Layout) {
    "flow" {
      return @(
        @{ x = 112; y = 170; w = 420; h = 250; r = -7 },
        @{ x = 590; y = 110; w = 360; h = 235; r = 6 },
        @{ x = 1000; y = 280; w = 450; h = 280; r = -5 }
      )
    }
    "split" {
      return @(
        @{ x = 110; y = 120; w = 560; h = 620; r = -4 },
        @{ x = 920; y = 120; w = 560; h = 620; r = 4 }
      )
    }
    "stack" {
      return @(
        @{ x = 185; y = 160; w = 500; h = 300; r = -8 },
        @{ x = 455; y = 285; w = 500; h = 300; r = 4 },
        @{ x = 780; y = 165; w = 520; h = 310; r = 8 }
      )
    }
    "orbit" {
      return @(
        @{ x = 380; y = 175; w = 560; h = 360; r = -2 },
        @{ x = 1020; y = 115; w = 300; h = 230; r = 5 },
        @{ x = 1040; y = 470; w = 280; h = 200; r = -5 },
        @{ x = 160; y = 470; w = 280; h = 190; r = 5 }
      )
    }
    default {
      return @(
        @{ x = 125; y = 135; w = 420; h = 300; r = -9 },
        @{ x = 565; y = 250; w = 400; h = 280; r = 5 },
        @{ x = 1025; y = 135; w = 370; h = 250; r = 8 }
      )
    }
  }
}

function Draw-SoftBackground {
  param(
    [System.Drawing.Graphics]$Graphics,
    [int]$Width,
    [int]$Height,
    [hashtable]$Palette
  )

  $backgroundBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    ([System.Drawing.Rectangle]::new(0, 0, $Width, $Height)),
    (New-Color $Palette.bgA),
    (New-Color $Palette.bgB),
    32
  )
  $Graphics.FillRectangle($backgroundBrush, 0, 0, $Width, $Height)
  $backgroundBrush.Dispose()

  $glowBrush = New-Object System.Drawing.SolidBrush((New-Color $Palette.glow 28))
  $Graphics.FillEllipse($glowBrush, -160, -110, 700, 520)
  $Graphics.FillEllipse($glowBrush, 1080, 430, 560, 420)
  $glowBrush.Dispose()

  $linePen = New-Object System.Drawing.Pen((New-Color "#ffffff" 22), 1.4)
  for ($x = -120; $x -lt $Width + 160; $x += 112) {
    $Graphics.DrawLine($linePen, $x, 0, $x + 220, $Height)
  }
  $linePen.Dispose()
}

function Draw-Connector {
  param(
    [System.Drawing.Graphics]$Graphics,
    [float]$X1,
    [float]$Y1,
    [float]$X2,
    [float]$Y2,
    [System.Drawing.Color]$Color
  )

  $pen = New-Object System.Drawing.Pen($Color, 9)
  $pen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
  $pen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
  $Graphics.DrawLine($pen, $X1, $Y1, $X2, $Y2)
  $pen.Dispose()
}

function Draw-PanelChrome {
  param(
    [System.Drawing.Graphics]$Graphics,
    [hashtable]$Rect,
    [hashtable]$Palette,
    [System.Random]$Random
  )

  $surface = New-Object System.Drawing.SolidBrush((New-Color $Palette.surface 240))
  $overlay = New-Object System.Drawing.SolidBrush((New-Color "#ffffff" 32))
  $border = New-Object System.Drawing.Pen((New-Color "#ffffff" 70), 2)

  Fill-RoundedRect -Graphics $Graphics -Brush $surface -X $Rect.x -Y $Rect.y -Width $Rect.w -Height $Rect.h -Radius 28
  Fill-RoundedRect -Graphics $Graphics -Brush $overlay -X ($Rect.x + 18) -Y ($Rect.y + 18) -Width ($Rect.w - 36) -Height 26 -Radius 13
  Stroke-RoundedRect -Graphics $Graphics -Pen $border -X $Rect.x -Y $Rect.y -Width $Rect.w -Height $Rect.h -Radius 28

  $dotBrush = New-Object System.Drawing.SolidBrush((New-Color $Palette.accent 165))
  $Graphics.FillEllipse($dotBrush, $Rect.x + 34, $Rect.y + 25, 10, 10)
  $Graphics.FillEllipse($dotBrush, $Rect.x + 52, $Rect.y + 25, 10, 10)
  $Graphics.FillEllipse($dotBrush, $Rect.x + 70, $Rect.y + 25, 10, 10)

  $surface.Dispose()
  $overlay.Dispose()
  $border.Dispose()
  $dotBrush.Dispose()
}

function Draw-WorkflowMotif {
  param(
    [System.Drawing.Graphics]$Graphics,
    [hashtable[]]$Rects,
    [hashtable]$Palette
  )

  for ($i = 0; $i -lt $Rects.Count; $i++) {
    $rect = $Rects[$i]
    Draw-PanelChrome -Graphics $Graphics -Rect $rect -Palette $Palette -Random ([System.Random]::new())
    $innerPen = New-Object System.Drawing.Pen((New-Color $Palette.accentTwo 210), 7)
    $innerPen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
    $innerPen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
    $y = $rect.y + 95
    for ($step = 0; $step -lt 4; $step++) {
      $cx = $rect.x + 72 + ($step * (($rect.w - 144) / 3))
      $Graphics.FillEllipse((New-Object System.Drawing.SolidBrush((New-Color $Palette.accent 255))), $cx - 16, $y - 16, 32, 32)
      if ($step -lt 3) {
        $Graphics.DrawLine($innerPen, $cx + 24, $y, $cx + (($rect.w - 144) / 3) - 24, $y)
      }
    }
    $lineBrush = New-Object System.Drawing.SolidBrush((New-Color "#0f172a" 58))
    Fill-RoundedRect -Graphics $Graphics -Brush $lineBrush -X ($rect.x + 54) -Y ($rect.y + 150) -Width ($rect.w - 108) -Height 18 -Radius 8
    Fill-RoundedRect -Graphics $Graphics -Brush $lineBrush -X ($rect.x + 54) -Y ($rect.y + 186) -Width ($rect.w - 170) -Height 14 -Radius 7
    Fill-RoundedRect -Graphics $Graphics -Brush $lineBrush -X ($rect.x + 54) -Y ($rect.y + 212) -Width ($rect.w - 214) -Height 14 -Radius 7
    $lineBrush.Dispose()
    $innerPen.Dispose()
  }

  if ($Rects.Count -ge 2) {
    for ($i = 0; $i -lt ($Rects.Count - 1); $i++) {
      $left = $Rects[$i]
      $right = $Rects[$i + 1]
      Draw-Connector -Graphics $Graphics -X1 ($left.x + $left.w - 14) -Y1 ($left.y + ($left.h / 2)) -X2 ($right.x + 14) -Y2 ($right.y + ($right.h / 2)) -Color (New-Color $Palette.accentTwo 180)
    }
  }
}

function Draw-BlueprintMotif {
  param(
    [System.Drawing.Graphics]$Graphics,
    [hashtable[]]$Rects,
    [hashtable]$Palette
  )

  foreach ($rect in $Rects) {
    Draw-PanelChrome -Graphics $Graphics -Rect $rect -Palette $Palette -Random ([System.Random]::new())
    $gridPen = New-Object System.Drawing.Pen((New-Color "#94a3b8" 95), 2)
    for ($x = $rect.x + 58; $x -lt $rect.x + $rect.w - 50; $x += 62) {
      $Graphics.DrawLine($gridPen, $x, $rect.y + 82, $x, $rect.y + $rect.h - 44)
    }
    for ($y = $rect.y + 82; $y -lt $rect.y + $rect.h - 30; $y += 54) {
      $Graphics.DrawLine($gridPen, $rect.x + 44, $y, $rect.x + $rect.w - 44, $y)
    }
    $fillBrush = New-Object System.Drawing.SolidBrush((New-Color $Palette.accent 188))
    Fill-RoundedRect -Graphics $Graphics -Brush $fillBrush -X ($rect.x + 58) -Y ($rect.y + 136) -Width (($rect.w - 150) / 2) -Height 88 -Radius 18
    Fill-RoundedRect -Graphics $Graphics -Brush $fillBrush -X ($rect.x + 116 + (($rect.w - 150) / 2)) -Y ($rect.y + 246) -Width (($rect.w - 180) / 2) -Height 74 -Radius 18
    $fillBrush.Dispose()
    $gridPen.Dispose()
  }
}

function Draw-ComparisonMotif {
  param(
    [System.Drawing.Graphics]$Graphics,
    [hashtable[]]$Rects,
    [hashtable]$Palette
  )

  foreach ($rect in $Rects) {
    Draw-PanelChrome -Graphics $Graphics -Rect $rect -Palette $Palette -Random ([System.Random]::new())
    $dividerPen = New-Object System.Drawing.Pen((New-Color "#cbd5e1" 170), 3)
    $Graphics.DrawLine($dividerPen, $rect.x + ($rect.w / 2), $rect.y + 78, $rect.x + ($rect.w / 2), $rect.y + $rect.h - 38)
    $leftBrush = New-Object System.Drawing.SolidBrush((New-Color $Palette.accent 210))
    $rightBrush = New-Object System.Drawing.SolidBrush((New-Color $Palette.accentTwo 210))
    Fill-RoundedRect -Graphics $Graphics -Brush $leftBrush -X ($rect.x + 48) -Y ($rect.y + 106) -Width (($rect.w / 2) - 68) -Height 60 -Radius 15
    Fill-RoundedRect -Graphics $Graphics -Brush $rightBrush -X ($rect.x + ($rect.w / 2) + 20) -Y ($rect.y + 106) -Width (($rect.w / 2) - 68) -Height 60 -Radius 15
    for ($i = 0; $i -lt 4; $i++) {
      $barBrush = New-Object System.Drawing.SolidBrush((New-Color "#334155" 65))
      Fill-RoundedRect -Graphics $Graphics -Brush $barBrush -X ($rect.x + 48) -Y ($rect.y + 196 + ($i * 62)) -Width (($rect.w / 2) - 92 + ($i * 10)) -Height 18 -Radius 8
      Fill-RoundedRect -Graphics $Graphics -Brush $barBrush -X ($rect.x + ($rect.w / 2) + 20) -Y ($rect.y + 196 + ($i * 62)) -Width (($rect.w / 2) - 120 + ((3 - $i) * 18)) -Height 18 -Radius 8
      $barBrush.Dispose()
    }
    $dividerPen.Dispose()
    $leftBrush.Dispose()
    $rightBrush.Dispose()
  }
}

function Draw-ChecklistMotif {
  param(
    [System.Drawing.Graphics]$Graphics,
    [hashtable[]]$Rects,
    [hashtable]$Palette
  )

  foreach ($rect in $Rects) {
    Draw-PanelChrome -Graphics $Graphics -Rect $rect -Palette $Palette -Random ([System.Random]::new())
    for ($i = 0; $i -lt 5; $i++) {
      $boxBrush = New-Object System.Drawing.SolidBrush((New-Color $Palette.accent 235))
      Fill-RoundedRect -Graphics $Graphics -Brush $boxBrush -X ($rect.x + 52) -Y ($rect.y + 100 + ($i * 48)) -Width 26 -Height 26 -Radius 7
      $pen = New-Object System.Drawing.Pen((New-Color "#ffffff"), 4)
      $pen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
      $pen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
      $Graphics.DrawLine($pen, $rect.x + 59, $rect.y + 112 + ($i * 48), $rect.x + 66, $rect.y + 119 + ($i * 48))
      $Graphics.DrawLine($pen, $rect.x + 66, $rect.y + 119 + ($i * 48), $rect.x + 74, $rect.y + 104 + ($i * 48))
      $lineBrush = New-Object System.Drawing.SolidBrush((New-Color "#0f172a" 60))
      Fill-RoundedRect -Graphics $Graphics -Brush $lineBrush -X ($rect.x + 100) -Y ($rect.y + 104 + ($i * 48)) -Width ($rect.w - 160 - ($i * 18)) -Height 17 -Radius 8
      $boxBrush.Dispose()
      $pen.Dispose()
      $lineBrush.Dispose()
    }
  }
}

function Draw-SupportMotif {
  param(
    [System.Drawing.Graphics]$Graphics,
    [hashtable[]]$Rects,
    [hashtable]$Palette,
    [string]$Mode
  )

  foreach ($rect in $Rects) {
    Draw-PanelChrome -Graphics $Graphics -Rect $rect -Palette $Palette -Random ([System.Random]::new())
    $headerBrush = New-Object System.Drawing.SolidBrush((New-Color $Palette.accentTwo 205))
    Fill-RoundedRect -Graphics $Graphics -Brush $headerBrush -X ($rect.x + 48) -Y ($rect.y + 98) -Width ($rect.w - 96) -Height 54 -Radius 16
    $headerBrush.Dispose()
    if ($Mode -eq "faq") {
      for ($i = 0; $i -lt 3; $i++) {
        $bubbleBrush = New-Object System.Drawing.SolidBrush((New-Color "#e2e8f0" 210))
        Fill-RoundedRect -Graphics $Graphics -Brush $bubbleBrush -X ($rect.x + 52 + (($i % 2) * 48)) -Y ($rect.y + 182 + ($i * 84)) -Width ($rect.w - 130) -Height 52 -Radius 18
        $bubbleBrush.Dispose()
      }
    } else {
      $inkBrush = New-Object System.Drawing.SolidBrush((New-Color "#0f172a" 65))
      Fill-RoundedRect -Graphics $Graphics -Brush $inkBrush -X ($rect.x + 52) -Y ($rect.y + 190) -Width ($rect.w - 104) -Height 22 -Radius 10
      Fill-RoundedRect -Graphics $Graphics -Brush $inkBrush -X ($rect.x + 52) -Y ($rect.y + 228) -Width ($rect.w - 180) -Height 16 -Radius 8
      Fill-RoundedRect -Graphics $Graphics -Brush $inkBrush -X ($rect.x + 52) -Y ($rect.y + 286) -Width ($rect.w - 144) -Height 22 -Radius 10
      Fill-RoundedRect -Graphics $Graphics -Brush $inkBrush -X ($rect.x + 52) -Y ($rect.y + 324) -Width ($rect.w - 212) -Height 16 -Radius 8
      $inkBrush.Dispose()
    }
  }
}

function Draw-MigrationMotif {
  param(
    [System.Drawing.Graphics]$Graphics,
    [hashtable[]]$Rects,
    [hashtable]$Palette
  )

  Draw-PanelChrome -Graphics $Graphics -Rect $Rects[0] -Palette $Palette -Random ([System.Random]::new())
  Draw-PanelChrome -Graphics $Graphics -Rect $Rects[1] -Palette $Palette -Random ([System.Random]::new())
  Draw-PanelChrome -Graphics $Graphics -Rect $Rects[2] -Palette $Palette -Random ([System.Random]::new())

  $scatterBrush = New-Object System.Drawing.SolidBrush((New-Color $Palette.accent 210))
  for ($i = 0; $i -lt 5; $i++) {
    $Graphics.FillEllipse($scatterBrush, 170 + ($i * 52), 250 + (($i % 2) * 60), 24, 24)
    $Graphics.FillEllipse($scatterBrush, 540 + ($i * 40), 470 - (($i % 2) * 44), 18, 18)
  }
  $scatterBrush.Dispose()

  Draw-Connector -Graphics $Graphics -X1 520 -Y1 290 -X2 760 -Y2 395 -Color (New-Color $Palette.accentTwo 180)
  Draw-Connector -Graphics $Graphics -X1 935 -Y1 390 -X2 1060 -Y2 258 -Color (New-Color $Palette.accentTwo 180)

  Draw-BlueprintMotif -Graphics $Graphics -Rects @($Rects[2]) -Palette $Palette
}

function Draw-CollageMotif {
  param(
    [System.Drawing.Graphics]$Graphics,
    [hashtable[]]$Rects,
    [hashtable]$Palette
  )

  Draw-WorkflowMotif -Graphics $Graphics -Rects @($Rects[0]) -Palette $Palette
  Draw-ChecklistMotif -Graphics $Graphics -Rects @($Rects[1]) -Palette $Palette
  Draw-ComparisonMotif -Graphics $Graphics -Rects @($Rects[2]) -Palette $Palette
}

function New-FeatureImage {
  param(
    [hashtable]$Spec,
    [string]$OutputRoot
  )

  $width = 1600
  $height = 900
  $bitmap = New-Object System.Drawing.Bitmap $width, $height
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

  $palette = Get-Palette $Spec.palette
  Draw-SoftBackground -Graphics $graphics -Width $width -Height $height -Palette $palette

  $random = [System.Random]::new([Math]::Abs($Spec.path.GetHashCode()))
  $rects = Get-LayoutRects -Layout $Spec.layout -Random $random

  switch ($Spec.motif) {
    "workflow" { Draw-WorkflowMotif -Graphics $graphics -Rects $rects -Palette $palette }
    "blueprint" { Draw-BlueprintMotif -Graphics $graphics -Rects $rects -Palette $palette }
    "comparison" { Draw-ComparisonMotif -Graphics $graphics -Rects $rects -Palette $palette }
    "checklist" { Draw-ChecklistMotif -Graphics $graphics -Rects $rects -Palette $palette }
    "migration" { Draw-MigrationMotif -Graphics $graphics -Rects $rects -Palette $palette }
    "glossary" { Draw-SupportMotif -Graphics $graphics -Rects $rects -Palette $palette -Mode "glossary" }
    "faq" { Draw-SupportMotif -Graphics $graphics -Rects $rects -Palette $palette -Mode "faq" }
    default { Draw-CollageMotif -Graphics $graphics -Rects $rects -Palette $palette }
  }

  $tagBrush = New-Object System.Drawing.SolidBrush((New-Color "#ffffff" 34))
  Fill-RoundedRect -Graphics $graphics -Brush $tagBrush -X 72 -Y 64 -Width 260 -Height 46 -Radius 16
  $tagBrush.Dispose()

  $outPath = Join-Path $OutputRoot $Spec.path
  $outDir = Split-Path -Parent $outPath
  if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir -Force | Out-Null
  }

  $bitmap.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $graphics.Dispose()
  $bitmap.Dispose()
  Write-Output $outPath
}

$outputRoot = Join-Path $PSScriptRoot "..\\assets\\images\\features"

$specs = @(
  @{ path = "site/soloopsguide-home.png"; palette = "site"; motif = "collage"; layout = "cluster" },
  @{ path = "hubs/client-workflow-systems.png"; palette = "workflow"; motif = "workflow"; layout = "flow" },
  @{ path = "hubs/software-stack-blueprints.png"; palette = "blueprint"; motif = "blueprint"; layout = "stack" },
  @{ path = "hubs/workflow-comparisons.png"; palette = "comparison"; motif = "comparison"; layout = "split" },
  @{ path = "hubs/templates-checklists.png"; palette = "template"; motif = "checklist"; layout = "stack" },
  @{ path = "hubs/glossary.png"; palette = "support"; motif = "glossary"; layout = "orbit" },
  @{ path = "hubs/faq.png"; palette = "support"; motif = "faq"; layout = "stack" },
  @{ path = "workflows/freelance-client-workflow-system.png"; palette = "workflow"; motif = "workflow"; layout = "flow" },
  @{ path = "workflows/client-intake-qualification-workflow.png"; palette = "workflow"; motif = "workflow"; layout = "stack" },
  @{ path = "workflows/proposal-contract-handoff.png"; palette = "workflow"; motif = "workflow"; layout = "split" },
  @{ path = "workflows/workflow-automation-basics.png"; palette = "workflow"; motif = "workflow"; layout = "orbit" },
  @{ path = "blueprints/solo-freelancer-lean-budget.png"; palette = "blueprint"; motif = "blueprint"; layout = "stack" },
  @{ path = "blueprints/consultant-va-collaboration.png"; palette = "blueprint"; motif = "blueprint"; layout = "split" },
  @{ path = "blueprints/migrate-from-scattered-tools.png"; palette = "blueprint"; motif = "migration"; layout = "cluster" },
  @{ path = "comparisons/crm-vs-project-management.png"; palette = "comparison"; motif = "comparison"; layout = "split" },
  @{ path = "comparisons/notion-vs-clickup.png"; palette = "comparison"; motif = "comparison"; layout = "stack" },
  @{ path = "templates/client-onboarding-checklist.png"; palette = "template"; motif = "checklist"; layout = "stack" },
  @{ path = "templates/delivery-qa-checklist.png"; palette = "template"; motif = "checklist"; layout = "flow" },
  @{ path = "templates/invoice-payment-checklist.png"; palette = "template"; motif = "checklist"; layout = "orbit" },
  @{ path = "templates/client-offboarding-template.png"; palette = "template"; motif = "checklist"; layout = "cluster" },
  @{ path = "templates/weekly-client-operations.png"; palette = "template"; motif = "checklist"; layout = "split" },
  @{ path = "glossary/system-of-record.png"; palette = "support"; motif = "glossary"; layout = "orbit" },
  @{ path = "glossary/workflow-handoff.png"; palette = "support"; motif = "glossary"; layout = "split" },
  @{ path = "faq/solo-service-workflow-stack-faq.png"; palette = "support"; motif = "faq"; layout = "stack" }
)

foreach ($spec in $specs) {
  New-FeatureImage -Spec $spec -OutputRoot $outputRoot | Out-Null
}

Write-Output "Generated $($specs.Count) feature image sources in $outputRoot"
