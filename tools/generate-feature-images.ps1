param(
  [switch]$DryRun
)

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

function C([string]$h,[int]$a=255){$h=$h.TrimStart("#");[System.Drawing.Color]::FromArgb($a,[Convert]::ToInt32($h.Substring(0,2),16),[Convert]::ToInt32($h.Substring(2,2),16),[Convert]::ToInt32($h.Substring(4,2),16))}
function P([float]$x,[float]$y,[float]$w,[float]$h,[float]$r){$d=$r*2;$p=New-Object System.Drawing.Drawing2D.GraphicsPath;$p.AddArc($x,$y,$d,$d,180,90);$p.AddArc($x+$w-$d,$y,$d,$d,270,90);$p.AddArc($x+$w-$d,$y+$h-$d,$d,$d,0,90);$p.AddArc($x,$y+$h-$d,$d,$d,90,90);$p.CloseFigure();$p}
function FR($g,$b,[float]$x,[float]$y,[float]$w,[float]$h,[float]$r){$p=P $x $y $w $h $r;$g.FillPath($b,$p);$p.Dispose()}
function SR($g,$p,[float]$x,[float]$y,[float]$w,[float]$h,[float]$r){$path=P $x $y $w $h $r;$g.DrawPath($p,$path);$path.Dispose()}
function B([string]$name){
  @{
    site=@{a="#0f2232";b="#0f8b8d";glow="#ecfeff";surface="#f8fafc";border="#d7e2ea";line="#94a3b8";accent="#f59e0b";accent2="#67e8f9"}
    workflow=@{a="#0e3a4f";b="#13939b";glow="#ecfeff";surface="#f8fafc";border="#d7e2ea";line="#94a3b8";accent="#f59e0b";accent2="#5eead4"}
    blueprint=@{a="#17355a";b="#27538f";glow="#eff6ff";surface="#f8fafc";border="#d6e2f0";line="#9fb3c8";accent="#fbbf24";accent2="#60a5fa"}
    comparison=@{a="#5e4227";b="#9b6c35";glow="#fff7ed";surface="#fffdf8";border="#eadfcf";line="#b7a48c";accent="#f59e0b";accent2="#14b8a6"}
    template=@{a="#0f5f60";b="#0f8b8d";glow="#f0fdfa";surface="#fcfffe";border="#d8ecea";line="#9fb5b5";accent="#f59e0b";accent2="#99f6e4"}
    support=@{a="#25364f";b="#0f172a";glow="#f8fafc";surface="#f8fafc";border="#d9e0e8";line="#a4b1be";accent="#38bdf8";accent2="#cbd5e1"}
  }[$name]
}
function BG($g,$p,$w,$h){
  $lg=New-Object System.Drawing.Drawing2D.LinearGradientBrush(([System.Drawing.Rectangle]::new(0,0,$w,$h)),(C $p.a),(C $p.b),28);$g.FillRectangle($lg,0,0,$w,$h);$lg.Dispose()
  $gl=New-Object System.Drawing.SolidBrush((C $p.glow 24));$g.FillEllipse($gl,-120,-80,660,500);$g.FillEllipse($gl,1080,380,560,420);$gl.Dispose()
  $pen=New-Object System.Drawing.Pen((C "#ffffff" 20),1.5);for($x=-80;$x -lt $w+180;$x+=96){$g.DrawLine($pen,$x,0,$x+180,$h)};$pen.Dispose()
}
function Card($g,$p,[float]$x,[float]$y,[float]$w,[float]$h){
  $s=New-Object System.Drawing.SolidBrush((C $p.surface 244));$b=New-Object System.Drawing.Pen((C $p.border 225),2);$hd=New-Object System.Drawing.SolidBrush((C "#ffffff" 34))
  FR $g $s $x $y $w $h 28; FR $g $hd ($x+18) ($y+18) ($w-36) 26 13; SR $g $b $x $y $w $h 28
  $dot=New-Object System.Drawing.SolidBrush((C $p.accent 175));foreach($o in @(0,18,36)){$g.FillEllipse($dot,$x+34+$o,$y+25,10,10)};$s.Dispose();$b.Dispose();$hd.Dispose();$dot.Dispose()
}
function Line($g,$p,[float]$x,[float]$y,[float]$w,[float]$h=16,[int]$a=92){$b=New-Object System.Drawing.SolidBrush((C $p.line $a));FR $g $b $x $y $w $h 8;$b.Dispose()}
function Block($g,[string]$c,[float]$x,[float]$y,[float]$w,[float]$h,[float]$r=16,[int]$a=220){$b=New-Object System.Drawing.SolidBrush((C $c $a));FR $g $b $x $y $w $h $r;$b.Dispose()}
function Arrow($g,$color,[float]$x1,[float]$y1,[float]$x2,[float]$y2){$p=New-Object System.Drawing.Pen($color,8);$p.StartCap='Round';$p.EndCap='Round';$g.DrawLine($p,$x1,$y1,$x2,$y2);$h=New-Object System.Drawing.Pen($color,6);$h.StartCap='Round';$h.EndCap='Round';$g.DrawLine($h,$x2-18,$y2-12,$x2,$y2);$g.DrawLine($h,$x2-18,$y2+12,$x2,$y2);$p.Dispose();$h.Dispose()}
function Check($g,[float]$x,[float]$y,[string]$c){Block $g $c $x $y 28 28 8;$p=New-Object System.Drawing.Pen((C "#ffffff"),4);$p.StartCap='Round';$p.EndCap='Round';$g.DrawLine($p,$x+7,$y+15,$x+12,$y+21);$g.DrawLine($p,$x+12,$y+21,$x+21,$y+8);$p.Dispose()}
function Steps($g,$p,[float]$x,[float]$y,[int]$count,[float]$gap){
  $pen=New-Object System.Drawing.Pen((C $p.accent2 190),7);$pen.StartCap='Round';$pen.EndCap='Round';for($i=0;$i -lt $count-1;$i++){$g.DrawLine($pen,$x+($i*$gap)+20,$y,$x+(($i+1)*$gap)-20,$y)};$pen.Dispose()
  $b=New-Object System.Drawing.SolidBrush((C $p.accent));for($i=0;$i -lt $count;$i++){$g.FillEllipse($b,$x+($i*$gap)-15,$y-15,30,30)};$b.Dispose()
}
function Draw($g,$palette,[string]$scene){
  switch($scene){
    "home"{
      Card $g $palette 120 125 430 255; Steps $g $palette 190 205 4 92; Line $g $palette 175 260 315; Line $g $palette 175 300 250; Line $g $palette 175 336 205
      Card $g $palette 560 220 390 235; foreach($i in 0..4){Check $g 615 (300+($i*42)) $palette.accent; Line $g $palette 655 (306+($i*42)) (225-($i*12))}
      Card $g $palette 1020 125 380 215; Block $g $palette.accent 1072 185 118 58 18; Block $g $palette.accent2 1230 185 118 58 18; $d=New-Object System.Drawing.Pen((C $palette.line 110),3);$g.DrawLine($d,1210,160,1210,280);$d.Dispose(); Line $g $palette 1072 275 92; Line $g $palette 1230 275 92
    }
    "hub-workflows"{
      foreach($c in @(@(90,150,320,240),@(460,110,320,240),@(830,200,320,240),@(1200,140,300,240))){Card $g $palette $c[0] $c[1] $c[2] $c[3]}
      Steps $g $palette 140 225 3 72
      foreach($l in @(@(150,270,200),@(150,306,152),@(520,230,200),@(520,266,152),@(890,320,200),@(890,356,152),@(1250,260,180),@(1250,296,132))){Line $g $palette $l[0] $l[1] $l[2]}
      Arrow $g (C $palette.accent2 185) 410 272 460 232; Arrow $g (C $palette.accent2 185) 780 232 830 322; Arrow $g (C $palette.accent2 185) 1150 322 1200 262
    }
    "hub-blueprints"{
      Card $g $palette 160 160 520 320; Card $g $palette 720 115 330 240; Card $g $palette 1085 220 340 265
      $grid=New-Object System.Drawing.Pen((C $palette.line 95),2);for($x=235;$x -le 610;$x+=76){$g.DrawLine($grid,$x,260,$x,430)};for($y=220;$y -le 430;$y+=52){$g.DrawLine($grid,220,$y,630,$y)};$grid.Dispose()
      Block $g $palette.accent 235 275 110 74 18; Block $g $palette.accent2 385 275 160 74 18; Block $g $palette.accent 430 370 120 48 16 175
      Arrow $g (C $palette.accent2 165) 680 320 720 250; Arrow $g (C $palette.accent2 165) 1050 235 1085 295
      foreach($l in @(@(775,210,220),@(775,248,178),@(775,284,132),@(1140,315,225),@(1140,353,183),@(1140,389,137))){Line $g $palette $l[0] $l[1] $l[2]}
    }
    "hub-comparisons"{
      Card $g $palette 170 130 510 610; Card $g $palette 920 130 510 610; $d=New-Object System.Drawing.Pen((C $palette.accent2 160),7);$d.StartCap='Round';$d.EndCap='Round';$g.DrawLine($d,760,435,860,435);$d.Dispose()
      Block $g $palette.accent 240 215 180 62 18; Block $g $palette.accent2 980 215 180 62 18
      foreach($l in @(@(240,330,305),@(240,404,281),@(240,478,257),@(240,552,233),@(980,330,299),@(980,404,323),@(980,478,299),@(980,552,323))){Line $g $palette $l[0] $l[1] $l[2]}
    }
    "hub-templates"{
      foreach($c in @(@(145,135,320,250),@(525,205,320,250),@(905,135,320,250),@(1180,265,255,220))){Card $g $palette $c[0] $c[1] $c[2] $c[3]; foreach($i in 0..3){Check $g ($c[0]+36) ($c[1]+78+($i*36)) $palette.accent; Line $g $palette ($c[0]+76) ($c[1]+84+($i*36)) ($c[2]-124-($i*12))}}
    }
    "hub-glossary"{
      Card $g $palette 420 170 520 360; Block $g $palette.accent2 480 248 400 54 16 210; Line $g $palette 480 340 360; Line $g $palette 480 378 295; Line $g $palette 480 416 250
      foreach($c in @(@(1030,120,290,210,1080,185,190),@(1045,420,275,195,1095,475,170),@(190,430,280,190,240,485,175))){Card $g $palette $c[0] $c[1] $c[2] $c[3]; Line $g $palette $c[4] $c[5] $c[6]; Line $g $palette $c[4] ($c[5]+34) ($c[6]-46)}
    }
    "hub-faq"{
      foreach($c in @(@(180,150,420,240,245,228,290),@(590,255,390,230,655,333,230),@(980,140,420,250,1045,218,310))){Card $g $palette $c[0] $c[1] $c[2] $c[3]; Line $g $palette $c[4] $c[5] $c[6]; Line $g $palette $c[4] ($c[5]+44) ($c[6]-52); Line $g $palette $c[4] ($c[5]+88) ($c[6]-94)}
    }
    "workflow-lifecycle"{
      foreach($c in @(@(95,155,255,170),@(390,155,255,170),@(685,155,255,170),@(980,155,255,170),@(1275,155,220,170))){Card $g $palette $c[0] $c[1] $c[2] $c[3]}
      Steps $g $palette 165 235 5 295
      foreach($l in @(@(138,405,260),@(138,445,210),@(508,405,250),@(508,445,200),@(878,405,265),@(878,445,216),@(1185,405,255),@(1185,445,205))){Line $g $palette $l[0] $l[1] $l[2]}
    }
    "workflow-intake"{
      Card $g $palette 140 120 430 610; Block $g $palette.accent2 205 205 300 60 18; foreach($i in 0..4){Line $g $palette 205 (315+($i*58)) (285-($i*18))}
      $p=New-Object System.Drawing.Pen((C $palette.accent 185),9);$p.StartCap='Round';$p.EndCap='Round';$g.DrawLine($p,690,210,1010,210);$g.DrawLine($p,730,290,970,290);$g.DrawLine($p,780,370,920,370);$g.DrawLine($p,825,450,875,450);$p.Dispose()
      Card $g $palette 1040 170 340 280; Check $g 1090 255 $palette.accent; Line $g $palette 1130 261 170; Line $g $palette 1090 317 215; Line $g $palette 1090 355 165
    }
    "workflow-handoff"{
      Card $g $palette 105 145 560 520; Card $g $palette 935 145 560 520; Steps $g $palette 215 255 4 125; Steps $g $palette 1015 255 4 125
      foreach($l in @(@(165,340,420),@(165,380,360),@(995,340,420),@(995,380,320))){Line $g $palette $l[0] $l[1] $l[2]}
      Arrow $g (C $palette.accent2 190) 665 405 935 405
    }
    "workflow-automation"{
      Card $g $palette 410 210 420 250; Line $g $palette 490 300 250; Line $g $palette 490 340 195
      foreach($c in @(@(160,185),@(1080,165),@(1115,500),@(180,510))){Card $g $palette $c[0] $c[1] 250 170; Line $g $palette ($c[0]+42) ($c[1]+92) 155; Line $g $palette ($c[0]+42) ($c[1]+126) 115}
      foreach($a in @(@(410,305,410,270),@(830,300,1080,250),@(690,460,1115,565),@(525,460,430,565))){Arrow $g (C $palette.accent2 165) $a[0] $a[1] $a[2] $a[3]}
    }
    "blueprint-lean"{
      Card $g $palette 150 145 520 590; Block $g $palette.accent 230 235 120 60 18; Block $g $palette.accent2 390 235 170 60 18; Block $g $palette.accent 300 345 200 58 18 185; Block $g $palette.accent2 245 458 270 60 18 175
      Arrow $g (C $palette.accent2 175) 350 295 400 345; Arrow $g (C $palette.accent2 175) 400 403 380 458
      Card $g $palette 835 205 510 360; foreach($i in 0..2){Line $g $palette 900 (290+($i*78)) (350-($i*42))}
    }
    "blueprint-collaboration"{
      Card $g $palette 110 150 560 540; Card $g $palette 935 150 560 540; Block $g $palette.accent 190 240 170 66 18; Block $g $palette.accent2 1015 240 170 66 18
      foreach($i in 0..3){Line $g $palette 190 (350+($i*52)) (330-($i*20)); Line $g $palette 1015 (350+($i*52)) (290-($i*24))}
      Arrow $g (C $palette.accent2 180) 670 420 935 420
    }
    "blueprint-migration"{
      Card $g $palette 95 145 360 255; Card $g $palette 510 235 390 245; Card $g $palette 980 145 470 300
      foreach($x in @(150,205,260,315,370)){Block $g $palette.accent $x (230+((($x/55)%2)*48)) 28 28 14 210}
      foreach($x in @(565,635,705)){Block $g $palette.accent2 $x 335 26 26 13 195}
      $grid=New-Object System.Drawing.Pen((C $palette.line 95),2);for($x=1060;$x -le 1340;$x+=62){$g.DrawLine($grid,$x,215,$x,370)};for($y=215;$y -le 370;$y+=48){$g.DrawLine($grid,1035,$y,1380,$y)};$grid.Dispose()
      Block $g $palette.accent 1095 275 120 78 18; Arrow $g (C $palette.accent2 180) 455 280 510 350; Arrow $g (C $palette.accent2 180) 900 350 980 285
    }
    "comparison-crm-pm"{
      Card $g $palette 145 145 560 590; Card $g $palette 895 145 560 590; Block $g $palette.accent 225 235 175 62 18; Block $g $palette.accent2 975 235 175 62 18
      foreach($l in @(@(225,345,360),@(225,417,338),@(225,489,316),@(225,561,294),@(975,345,330),@(975,417,354),@(975,489,330),@(975,561,354))){Line $g $palette $l[0] $l[1] $l[2]}
    }
    "comparison-notion-clickup"{
      Card $g $palette 120 155 470 520; Card $g $palette 760 155 720 520; foreach($i in 0..3){Line $g $palette 185 (255+($i*64)) (280-($i*25))}
      $grid=New-Object System.Drawing.Pen((C $palette.line 110),2);for($x=855;$x -le 1360;$x+=104){$g.DrawLine($grid,$x,280,$x,560)};for($y=280;$y -le 560;$y+=70){$g.DrawLine($grid,835,$y,1405,$y)};$grid.Dispose()
      Block $g $palette.accent 910 325 120 80 18; Block $g $palette.accent2 1080 325 160 80 18
    }
    "template-onboarding"{
      Card $g $palette 190 125 470 610; foreach($i in 0..4){Check $g 255 (225+($i*72)) $palette.accent; Line $g $palette 300 (231+($i*72)) (265-($i*18))}
      Card $g $palette 910 200 420 300; Block $g $palette.accent2 980 280 280 58 18; Line $g $palette 980 366 220; Line $g $palette 980 404 180
    }
    "template-delivery-qa"{
      Card $g $palette 135 165 470 520; foreach($i in 0..4){Check $g 205 (255+($i*60)) $palette.accent; Line $g $palette 248 (261+($i*60)) (255-($i*20))}
      Card $g $palette 835 200 560 280; Line $g $palette 900 286 395; Line $g $palette 900 330 330; Line $g $palette 900 374 260; Arrow $g (C $palette.accent2 180) 605 430 835 340
    }
    "template-invoice"{
      Card $g $palette 150 135 430 590; Block $g $palette.accent 215 225 145 70 18; foreach($i in 0..4){Line $g $palette 215 (330+($i*56)) (255-($i*16))}
      Card $g $palette 830 155 470 250; Card $g $palette 980 470 320 200; Arrow $g (C $palette.accent2 175) 580 430 830 280; Arrow $g (C $palette.accent2 175) 1065 405 1140 470
    }
    "template-offboarding"{
      Card $g $palette 145 150 420 470; Card $g $palette 640 220 330 250; Card $g $palette 1045 140 390 340
      foreach($i in 0..3){Check $g 205 (240+($i*64)) $palette.accent; Line $g $palette 248 (246+($i*64)) (230-($i*14))}
      Line $g $palette 705 315 200; Line $g $palette 705 355 155; Block $g $palette.accent2 1110 245 255 68 18; Line $g $palette 1110 344 215; Line $g $palette 1110 382 170
    }
    "template-weekly-ops"{
      Card $g $palette 150 150 600 520; $grid=New-Object System.Drawing.Pen((C $palette.line 105),2);for($x=245;$x -le 650;$x+=90){$g.DrawLine($grid,$x,255,$x,590)};for($y=255;$y -le 590;$y+=78){$g.DrawLine($grid,220,$y,680,$y)};$grid.Dispose()
      Block $g $palette.accent 248 284 82 54 16; Block $g $palette.accent2 428 362 82 54 16; Block $g $palette.accent 608 440 82 54 16 170
      Card $g $palette 940 205 360 260; foreach($i in 0..2){Line $g $palette 1000 (288+($i*56)) (220-($i*18))}
    }
    "glossary-system-record"{
      Card $g $palette 425 170 560 360; Block $g $palette.accent2 495 255 420 60 18; Line $g $palette 495 352 355; Line $g $palette 495 392 285
      Card $g $palette 1080 135 260 200; Line $g $palette 1128 215 160; Line $g $palette 1128 249 118
      Card $g $palette 230 445 260 180; Line $g $palette 278 518 150; Line $g $palette 278 552 116
    }
    "glossary-workflow-handoff"{
      Card $g $palette 150 160 450 420; Card $g $palette 1000 160 450 420; Line $g $palette 220 270 280; Line $g $palette 220 310 225; Line $g $palette 1070 270 280; Line $g $palette 1070 310 225; Arrow $g (C $palette.accent 185) 600 370 1000 370
    }
    "faq"{
      foreach($c in @(@(185,150,410,260,245,228,290),@(610,245,350,240,670,323,230),@(965,150,430,260,1025,228,310))){Card $g $palette $c[0] $c[1] $c[2] $c[3]; Line $g $palette $c[4] $c[5] $c[6]; Line $g $palette $c[4] ($c[5]+44) ($c[6]-52); Line $g $palette $c[4] ($c[5]+88) ($c[6]-94)}
    }
  }
}

function Write-Utf8NoBom([string]$Path,[string]$Content){
  $dir = Split-Path -Parent $Path
  if(-not (Test-Path $dir)){New-Item -ItemType Directory -Path $dir -Force | Out-Null}
  $encoding = New-Object System.Text.UTF8Encoding($false)
  if(-not $Content.EndsWith("`n")){$Content += "`n"}
  [System.IO.File]::WriteAllText($Path,$Content,$encoding)
}

function Get-RelativePathCompat([string]$BasePath,[string]$ChildPath){
  $base = (Resolve-Path $BasePath).Path.TrimEnd('\','/')
  $child = (Resolve-Path $ChildPath).Path
  if($child.StartsWith($base,[System.StringComparison]::OrdinalIgnoreCase)){
    return $child.Substring($base.Length).TrimStart('\','/')
  }

  throw "Unable to compute relative path for $ChildPath from $BasePath"
}

function Get-FeatureSvg([string]$scene){
  switch($scene){
    "workflow-lifecycle-svg" {
@'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Freelance client workflow system illustration</title>
  <desc id="desc">An editorial workflow illustration using a simple stage path, a central operating board, and clear routing cues from inquiry through payment.</desc>
  <defs>
    <linearGradient id="workflow-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f4fbfb" />
      <stop offset="100%" stop-color="#edf5fb" />
    </linearGradient>
    <linearGradient id="workflow-panel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f8b8d" />
      <stop offset="100%" stop-color="#115e66" />
    </linearGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#workflow-bg)" />
  <circle cx="1328" cy="170" r="150" fill="#dcf4f1" />
  <circle cx="238" cy="742" r="144" fill="#e4eef9" />

  <rect x="108" y="92" width="1384" height="716" rx="46" fill="#ffffff" stroke="#d9e5ec" stroke-width="4" />

  <text x="170" y="184" font-family="Georgia, 'Times New Roman', serif" font-size="42" fill="#122838">Client workflow</text>
  <rect x="170" y="200" width="238" height="18" rx="9" fill="#173042" opacity=".12" />

  <rect x="170" y="248" width="1260" height="122" rx="36" fill="#f8fbfd" stroke="#d9e5ec" stroke-width="3" />
  <path d="M300 309h118m96 0h118m96 0h118m96 0h118" stroke="#0f8b8d" stroke-width="12" stroke-linecap="round" />
  <path d="M418 309l-18-18m18 18l-18 18M632 309l-18-18m18 18l-18 18M846 309l-18-18m18 18l-18 18M1060 309l-18-18m18 18l-18 18" stroke="#0f8b8d" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
  <circle cx="252" cy="309" r="34" fill="#d8f3f1" />
  <circle cx="466" cy="309" r="34" fill="#dfe9fb" />
  <circle cx="680" cy="309" r="34" fill="#fff0db" />
  <circle cx="894" cy="309" r="34" fill="#dff7e8" />
  <circle cx="1108" cy="309" r="34" fill="#ffe8d7" />
  <rect x="1244" y="275" width="128" height="68" rx="34" fill="#102633" />
  <circle cx="1288" cy="309" r="12" fill="#d8f3f1" />
  <circle cx="1324" cy="309" r="12" fill="#fff0db" />
  <text x="188" y="352" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#0f766e">Inquiry</text>
  <text x="604" y="352" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#8a5d27">Deliver</text>
  <text x="1020" y="352" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#18794e">Invoice</text>
  <text x="1218" y="352" font-family="Arial, sans-serif" font-size="26" font-weight="700" fill="#d6faf5">Close</text>

  <rect x="170" y="410" width="790" height="324" rx="38" fill="url(#workflow-panel)" />
  <rect x="234" y="474" width="188" height="192" rx="28" fill="#ffffff" opacity=".12" />
  <rect x="470" y="474" width="188" height="192" rx="28" fill="#ffffff" opacity=".12" />
  <rect x="706" y="474" width="188" height="192" rx="28" fill="#fff1db" />
  <text x="264" y="507" font-family="Arial, sans-serif" font-size="29" font-weight="700" fill="#d6faf5">Client record</text>
  <text x="486" y="507" font-family="Arial, sans-serif" font-size="29" font-weight="700" fill="#d6faf5">Delivery lane</text>
  <text x="726" y="507" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#8a5d27">Billing status</text>
  <rect x="266" y="518" width="122" height="16" rx="8" fill="#d6faf5" opacity=".86" />
  <rect x="266" y="548" width="88" height="16" rx="8" fill="#d6faf5" opacity=".48" />
  <rect x="266" y="594" width="124" height="12" rx="6" fill="#d6faf5" opacity=".32" />
  <rect x="266" y="618" width="98" height="12" rx="6" fill="#d6faf5" opacity=".22" />
  <rect x="502" y="518" width="116" height="16" rx="8" fill="#d6faf5" opacity=".86" />
  <rect x="502" y="548" width="132" height="16" rx="8" fill="#d6faf5" opacity=".48" />
  <rect x="502" y="594" width="134" height="12" rx="6" fill="#d6faf5" opacity=".32" />
  <rect x="502" y="618" width="104" height="12" rx="6" fill="#d6faf5" opacity=".22" />
  <rect x="738" y="518" width="106" height="16" rx="8" fill="#b8823f" opacity=".52" />
  <rect x="738" y="548" width="82" height="16" rx="8" fill="#b8823f" opacity=".32" />
  <circle cx="820" cy="616" r="20" fill="#102633" opacity=".18" />

  <rect x="1004" y="410" width="426" height="324" rx="38" fill="#f8fbfd" stroke="#d9e5ec" stroke-width="3" />
  <rect x="1062" y="470" width="310" height="74" rx="28" fill="#ffffff" stroke="#d9e5ec" stroke-width="3" />
  <rect x="1062" y="570" width="310" height="74" rx="28" fill="#ffffff" stroke="#d9e5ec" stroke-width="3" />
  <text x="1092" y="455" font-family="Arial, sans-serif" font-size="29" font-weight="700" fill="#334b5c">Routing rules</text>
  <text x="1100" y="518" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#334b5c">Owner before kickoff</text>
  <text x="1100" y="618" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#334b5c">Invoice at stage exit</text>
  <circle cx="1310" cy="507" r="14" fill="#0f8b8d" />
  <circle cx="1310" cy="607" r="14" fill="#0f8b8d" />
  <rect x="1110" y="494" width="142" height="14" rx="7" fill="#c9d9e4" />
  <rect x="1110" y="518" width="104" height="14" rx="7" fill="#c9d9e4" />
  <rect x="1110" y="594" width="152" height="14" rx="7" fill="#c9d9e4" />
  <rect x="1110" y="618" width="112" height="14" rx="7" fill="#c9d9e4" />
  <rect x="1062" y="674" width="180" height="16" rx="8" fill="#d8f3f1" />
  <rect x="1260" y="674" width="112" height="16" rx="8" fill="#fff0db" />
</svg>
'@
    }
    "hub-workflows-svg" {
@'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Client workflow systems hub illustration</title>
  <desc id="desc">An editorial hub illustration using a single workflow spine, connected side nodes, and simple system cards for the client lifecycle cluster.</desc>
  <defs>
    <linearGradient id="hub-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f4fbfb" />
      <stop offset="100%" stop-color="#edf5fb" />
    </linearGradient>
    <linearGradient id="hub-panel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#113247" />
      <stop offset="100%" stop-color="#102633" />
    </linearGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#hub-bg)" />
  <circle cx="1304" cy="172" r="150" fill="#dbf4f2" />
  <circle cx="240" cy="740" r="146" fill="#e4eef9" />

  <rect x="108" y="92" width="1384" height="716" rx="46" fill="#ffffff" stroke="#d8e5ec" stroke-width="4" />

  <text x="170" y="184" font-family="Georgia, 'Times New Roman', serif" font-size="42" fill="#122838">Workflow systems</text>
  <rect x="170" y="200" width="270" height="18" rx="9" fill="#173042" opacity=".12" />

  <rect x="170" y="248" width="1260" height="122" rx="36" fill="#f8fbfd" stroke="#d8e5ec" stroke-width="3" />
  <path d="M298 309h144m92 0h144m92 0h144m92 0h144" stroke="#0f8b8d" stroke-width="12" stroke-linecap="round" />
  <circle cx="246" cy="309" r="32" fill="#d8f3f1" />
  <circle cx="482" cy="309" r="32" fill="#dfe9fb" />
  <circle cx="718" cy="309" r="32" fill="#fff0db" />
  <circle cx="954" cy="309" r="32" fill="#dff7e8" />
  <circle cx="1190" cy="309" r="32" fill="#102633" />
  <path d="M426 309l-16-16m16 16l-16 16M662 309l-16-16m16 16l-16 16M898 309l-16-16m16 16l-16 16M1134 309l-16-16m16 16l-16 16" stroke="#0f8b8d" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
  <text x="190" y="352" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#0f766e">Intake</text>
  <text x="658" y="352" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#8a5d27">Deliver</text>
  <text x="1128" y="352" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#102633">Close</text>

  <rect x="170" y="410" width="656" height="324" rx="38" fill="url(#hub-panel)" />
  <rect x="236" y="470" width="154" height="74" rx="28" fill="#d8f3f1" />
  <rect x="420" y="470" width="154" height="74" rx="28" fill="#dfe9fb" />
  <rect x="604" y="470" width="154" height="74" rx="28" fill="#fff0db" />
  <text x="258" y="518" font-family="Arial, sans-serif" font-size="27" font-weight="700" fill="#0f766e">Intake</text>
  <text x="430" y="518" font-family="Arial, sans-serif" font-size="27" font-weight="700" fill="#36589a">Delivery</text>
  <text x="628" y="518" font-family="Arial, sans-serif" font-size="27" font-weight="700" fill="#8a5d27">Billing</text>
  <rect x="236" y="572" width="154" height="94" rx="30" fill="#ffffff" opacity=".12" />
  <rect x="420" y="572" width="154" height="94" rx="30" fill="#ffffff" opacity=".12" />
  <rect x="604" y="572" width="154" height="94" rx="30" fill="#ffffff" opacity=".12" />
  <rect x="272" y="603" width="82" height="14" rx="7" fill="#d6faf5" opacity=".84" />
  <rect x="272" y="630" width="112" height="14" rx="7" fill="#d6faf5" opacity=".44" />
  <rect x="456" y="603" width="82" height="14" rx="7" fill="#d6faf5" opacity=".84" />
  <rect x="456" y="630" width="112" height="14" rx="7" fill="#d6faf5" opacity=".44" />
  <rect x="640" y="603" width="82" height="14" rx="7" fill="#d6faf5" opacity=".84" />
  <rect x="640" y="630" width="112" height="14" rx="7" fill="#d6faf5" opacity=".44" />

  <rect x="878" y="410" width="552" height="324" rx="38" fill="#f8fbfd" stroke="#d8e5ec" stroke-width="3" />
  <text x="1046" y="454" font-family="Arial, sans-serif" font-size="29" font-weight="700" fill="#334b5c">Cluster map</text>
  <circle cx="1154" cy="572" r="56" fill="#d8f3f1" />
  <circle cx="1052" cy="492" r="42" fill="#dfe9fb" />
  <circle cx="1262" cy="494" r="42" fill="#fff0db" />
  <circle cx="1018" cy="650" r="42" fill="#ffe8d7" />
  <circle cx="1288" cy="650" r="42" fill="#dff7e8" />
  <text x="988" y="458" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#36589a">Status</text>
  <text x="1210" y="460" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#8a5d27">Review</text>
  <text x="966" y="718" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#a14d1e">Handoff</text>
  <text x="1228" y="718" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#18794e">Closeout</text>
  <path d="M1086 516l34 28M1220 520l-32 24M1054 620l44-22M1252 620l-42-22" stroke="#0f8b8d" stroke-width="8" stroke-linecap="round" />
  <rect x="1070" y="558" width="168" height="28" rx="14" fill="#102633" opacity=".14" />
  <rect x="1078" y="690" width="150" height="14" rx="7" fill="#c9d9e4" />
</svg>
'@
    }
    "blueprint-lean-svg" {
@'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Solo freelancer lean budget blueprint illustration</title>
  <desc id="desc">An editorial blueprint illustration using a simple stack map, upgrade path, and deferred add-on blocks for a lean solo setup.</desc>
  <defs>
    <linearGradient id="blueprint-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f6fafc" />
      <stop offset="100%" stop-color="#eef4fb" />
    </linearGradient>
    <linearGradient id="blueprint-panel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#17355f" />
      <stop offset="100%" stop-color="#234d82" />
    </linearGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#blueprint-bg)" />
  <circle cx="1290" cy="164" r="150" fill="#e2eefb" />
  <circle cx="286" cy="744" r="140" fill="#e8f5f2" />

  <rect x="108" y="92" width="1384" height="716" rx="46" fill="#ffffff" stroke="#d9e5ec" stroke-width="4" />

  <text x="170" y="184" font-family="Georgia, 'Times New Roman', serif" font-size="42" fill="#122838">Stack blueprint</text>
  <rect x="170" y="200" width="232" height="18" rx="9" fill="#173042" opacity=".12" />

  <rect x="170" y="248" width="1260" height="122" rx="36" fill="#f8fbfd" stroke="#d9e5ec" stroke-width="3" />
  <rect x="228" y="276" width="188" height="64" rx="32" fill="#d8f3f1" />
  <rect x="454" y="276" width="188" height="64" rx="32" fill="#dfe9fb" />
  <rect x="680" y="276" width="188" height="64" rx="32" fill="#fff0db" />
  <rect x="946" y="268" width="356" height="80" rx="40" fill="#ecf8f2" />
  <path d="M416 308h38m188 0h38m188 0h38" stroke="#0f8b8d" stroke-width="10" stroke-linecap="round" />
  <path d="M902 308h24" stroke="#0f8b8d" stroke-width="10" stroke-linecap="round" />
  <text x="252" y="320" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#0f766e">Lean stack</text>
  <text x="720" y="320" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#8a5d27">Billing</text>
  <text x="1020" y="320" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#18794e">Add-ons</text>

  <rect x="170" y="410" width="712" height="324" rx="38" fill="url(#blueprint-panel)" />
  <rect x="246" y="476" width="560" height="74" rx="30" fill="#ffffff" opacity=".12" />
  <rect x="246" y="572" width="250" height="84" rx="30" fill="#d8f3f1" />
  <rect x="530" y="572" width="276" height="84" rx="30" fill="#dfe9fb" />
  <text x="276" y="462" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#eef6ff">Core stack</text>
  <text x="292" y="626" font-family="Arial, sans-serif" font-size="27" font-weight="700" fill="#0f766e">Client hub</text>
  <text x="584" y="626" font-family="Arial, sans-serif" font-size="27" font-weight="700" fill="#36589a">Docs + notes</text>
  <rect x="308" y="505" width="198" height="16" rx="8" fill="#eef6ff" opacity=".86" />
  <rect x="532" y="505" width="170" height="16" rx="8" fill="#eef6ff" opacity=".48" />
  <rect x="312" y="605" width="118" height="18" rx="9" fill="#0f766e" opacity=".88" />
  <rect x="586" y="605" width="148" height="18" rx="9" fill="#36589a" opacity=".86" />
  <circle cx="742" cy="614" r="18" fill="#ffffff" opacity=".48" />

  <rect x="924" y="410" width="506" height="324" rx="38" fill="#f8fbfd" stroke="#d9e5ec" stroke-width="3" />
  <rect x="990" y="474" width="142" height="96" rx="30" fill="#ffffff" stroke="#d9e5ec" stroke-width="3" />
  <rect x="1160" y="474" width="142" height="96" rx="30" fill="#ffffff" stroke="#d9e5ec" stroke-width="3" />
  <rect x="1074" y="612" width="144" height="74" rx="28" fill="#fff1db" />
  <text x="1012" y="460" font-family="Arial, sans-serif" font-size="29" font-weight="700" fill="#334b5c">Upgrade path</text>
  <text x="1010" y="532" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#334b5c">Trigger</text>
  <text x="1188" y="532" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#334b5c">Wait</text>
  <text x="1082" y="660" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#8a5d27">Add-ons</text>
  <path d="M1132 522h28M1232 522h28" stroke="#0f8b8d" stroke-width="8" stroke-linecap="round" />
  <path d="M1146 538l14-16m-14 16l14 16M1246 538l14-16m-14 16l14 16" stroke="#0f8b8d" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
  <rect x="1018" y="506" width="88" height="14" rx="7" fill="#c9d9e4" />
  <rect x="1188" y="506" width="88" height="14" rx="7" fill="#c9d9e4" />
  <rect x="1110" y="642" width="72" height="14" rx="7" fill="#b8823f" opacity=".6" />
  <rect x="990" y="642" width="86" height="18" rx="9" fill="#fee2e2" />
  <rect x="1218" y="642" width="86" height="18" rx="9" fill="#dff7e8" />
</svg>
'@
    }
    "comparison-crm-pm-svg" {
@'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">CRM versus project management illustration</title>
  <desc id="desc">An editorial comparison illustration using two balanced system panels for CRM-first and project-management-first operating models.</desc>
  <defs>
    <linearGradient id="compare-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fbf7f0" />
      <stop offset="100%" stop-color="#f1f6fb" />
    </linearGradient>
    <linearGradient id="crm-panel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#17355f" />
      <stop offset="100%" stop-color="#214b7d" />
    </linearGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#compare-bg)" />
  <circle cx="1282" cy="170" r="150" fill="#f5ead8" />
  <circle cx="258" cy="736" r="144" fill="#e4eef9" />

  <rect x="108" y="92" width="1384" height="716" rx="46" fill="#ffffff" stroke="#d8e5ec" stroke-width="4" />

  <text x="170" y="184" font-family="Georgia, 'Times New Roman', serif" font-size="42" fill="#122838">CRM vs PM</text>
  <rect x="170" y="200" width="176" height="18" rx="9" fill="#173042" opacity=".12" />

  <rect x="170" y="248" width="594" height="476" rx="38" fill="url(#crm-panel)" />
  <rect x="836" y="248" width="594" height="476" rx="38" fill="#f8fbfd" stroke="#d8e5ec" stroke-width="3" />

  <rect x="220" y="288" width="168" height="52" rx="26" fill="#d8f3f1" />
  <text x="244" y="322" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#0f766e">CRM-first</text>
  <rect x="884" y="288" width="158" height="52" rx="26" fill="#dfe9fb" />
  <text x="910" y="322" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#36589a">PM-first</text>

  <rect x="220" y="392" width="178" height="190" rx="32" fill="#ffffff" opacity=".12" />
  <rect x="428" y="392" width="178" height="190" rx="32" fill="#ffffff" opacity=".12" />
  <rect x="636" y="392" width="74" height="190" rx="32" fill="#fff1db" />
  <text x="244" y="420" font-family="Arial, sans-serif" font-size="25" font-weight="700" fill="#d6faf5">Pipeline</text>
  <text x="452" y="420" font-family="Arial, sans-serif" font-size="25" font-weight="700" fill="#d6faf5">Nurture</text>
  <text x="632" y="420" font-family="Arial, sans-serif" font-size="23" font-weight="700" fill="#8a5d27">Billing</text>
  <rect x="258" y="434" width="102" height="16" rx="8" fill="#d6faf5" opacity=".86" />
  <rect x="258" y="464" width="122" height="16" rx="8" fill="#d6faf5" opacity=".52" />
  <rect x="258" y="516" width="96" height="16" rx="8" fill="#d6faf5" opacity=".28" />
  <rect x="466" y="434" width="94" height="16" rx="8" fill="#d6faf5" opacity=".86" />
  <rect x="466" y="464" width="126" height="16" rx="8" fill="#d6faf5" opacity=".52" />
  <rect x="466" y="516" width="114" height="16" rx="8" fill="#d6faf5" opacity=".28" />
  <circle cx="673" cy="446" r="16" fill="#102633" opacity=".18" />
  <circle cx="673" cy="510" r="16" fill="#102633" opacity=".18" />
  <circle cx="673" cy="574" r="16" fill="#102633" opacity=".18" />

  <rect x="220" y="626" width="490" height="54" rx="27" fill="#fff1db" />
  <text x="242" y="618" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#8a5d27">Lead truth stays central</text>
  <rect x="294" y="644" width="150" height="18" rx="9" fill="#b8823f" opacity=".56" />
  <rect x="470" y="644" width="112" height="18" rx="9" fill="#b8823f" opacity=".34" />

  <rect x="886" y="392" width="224" height="86" rx="30" fill="#dfe9fb" />
  <rect x="886" y="500" width="224" height="86" rx="30" fill="#dff7e8" />
  <rect x="1140" y="392" width="224" height="86" rx="30" fill="#fff0db" />
  <rect x="1140" y="500" width="224" height="86" rx="30" fill="#fee2e2" />
  <text x="934" y="420" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#36589a">Milestones</text>
  <text x="930" y="528" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#18794e">Delivery</text>
  <text x="1200" y="420" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#8a5d27">Owners</text>
  <text x="1218" y="528" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#b91c1c">Risk</text>
  <rect x="954" y="426" width="88" height="16" rx="8" fill="#36589a" opacity=".78" />
  <rect x="952" y="534" width="92" height="16" rx="8" fill="#18794e" opacity=".68" />
  <rect x="1210" y="426" width="84" height="16" rx="8" fill="#8a5d27" opacity=".58" />
  <rect x="1210" y="534" width="84" height="16" rx="8" fill="#b91c1c" opacity=".58" />

  <rect x="948" y="626" width="356" height="54" rx="27" fill="#ffffff" stroke="#d8e5ec" stroke-width="3" />
  <text x="984" y="618" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#334b5c">Delivery truth stays central</text>
  <rect x="1010" y="644" width="110" height="18" rx="9" fill="#c9d9e4" />
  <rect x="1142" y="644" width="104" height="18" rx="9" fill="#c9d9e4" />
</svg>
'@
    }
    default {
      throw "Unknown SVG scene: $scene"
    }
  }
}

function Escape-Xml {
  param([string]$Text)
  if($null -eq $Text){ return "" }
  return [System.Security.SecurityElement]::Escape($Text)
}

function To-TitleWord {
  param([string]$Word)
  if([string]::IsNullOrWhiteSpace($Word)){ return "" }
  $lower = $Word.ToLowerInvariant()
  $special = @{
    "crm" = "CRM"; "pm" = "PM"; "qa" = "QA"; "va" = "VA"; "faq" = "FAQ"; "saas" = "SaaS"; "ai" = "AI"
  }
  if($special.ContainsKey($lower)){ return $special[$lower] }
  return ($lower.Substring(0,1).ToUpperInvariant() + $lower.Substring(1))
}

function Convert-SlugToTitle {
  param([Parameter(Mandatory=$true)][string]$Slug)
  return (($Slug.Split('-', [System.StringSplitOptions]::RemoveEmptyEntries) | ForEach-Object { To-TitleWord $_ }) -join ' ')
}

function Split-FeatureTitle {
  param([Parameter(Mandatory=$true)][string]$Title)
  if($Title.Length -le 24){ return @($Title) }
  $words = $Title.Split(' ', [System.StringSplitOptions]::RemoveEmptyEntries)
  if($words.Count -lt 2){ return @($Title) }
  $midpoint = [Math]::Ceiling($words.Count / 2)
  return @(
    ($words[0..($midpoint-1)] -join ' ')
    ($words[$midpoint..($words.Count-1)] -join ' ')
  )
}

function Get-Theme {
  param([string]$Kind)
  switch($Kind){
    "site" { @{BgA="#f6fafc";BgB="#eef4fb";Accent="#0f8b8d";AccentSoft="#d8f3f1";Navy="#17355f";Ink="#122838";Cream="#fff1db";Stroke="#d9e5ec";Panel="#ffffff";Soft="#dfe9fb";Good="#dff7e8"} }
    "hubs" { @{BgA="#f7fbfc";BgB="#eef5fb";Accent="#0f766e";AccentSoft="#d8f3f1";Navy="#183b63";Ink="#132838";Cream="#fff0db";Stroke="#d9e5ec";Panel="#ffffff";Soft="#dfe9fb";Good="#dff7e8"} }
    "workflows" { @{BgA="#f4faf9";BgB="#edf4fb";Accent="#0f8b8d";AccentSoft="#d7f2ef";Navy="#17355f";Ink="#102633";Cream="#fff1db";Stroke="#d9e4ea";Panel="#ffffff";Soft="#dfe9fb";Good="#dff7e8"} }
    "blueprints" { @{BgA="#f6fafc";BgB="#eef4fb";Accent="#1d7f84";AccentSoft="#d8f3f1";Navy="#17355f";Ink="#122838";Cream="#fff0db";Stroke="#d9e5ec";Panel="#ffffff";Soft="#dfe9fb";Good="#ecf8f2"} }
    "comparisons" { @{BgA="#fbf7f0";BgB="#f0f5fb";Accent="#0f8b8d";AccentSoft="#d8f3f1";Navy="#17355f";Ink="#122838";Cream="#fff1db";Stroke="#d9e5ec";Panel="#ffffff";Soft="#dfe9fb";Good="#dff7e8"} }
    "templates" { @{BgA="#f7faf7";BgB="#eff5fb";Accent="#0f766e";AccentSoft="#d8f3f1";Navy="#183b63";Ink="#132838";Cream="#fff0db";Stroke="#d9e5ec";Panel="#ffffff";Soft="#dfe9fb";Good="#ecf8f2"} }
    "glossary" { @{BgA="#f7fafc";BgB="#edf4fb";Accent="#216f8a";AccentSoft="#dceefa";Navy="#17355f";Ink="#132838";Cream="#fff1db";Stroke="#d9e5ec";Panel="#ffffff";Soft="#dfe9fb";Good="#dff7e8"} }
    "faq" { @{BgA="#fbf8f2";BgB="#eef4fb";Accent="#0f766e";AccentSoft="#d8f3f1";Navy="#17355f";Ink="#132838";Cream="#fff1db";Stroke="#d9e5ec";Panel="#ffffff";Soft="#dfe9fb";Good="#dff7e8"} }
    default { Get-Theme "site" }
  }
}

function Get-FeatureMeta {
  param([Parameter(Mandatory=$true)][string]$RelativePath)
  $normalized = $RelativePath.Replace('\','/')
  $kind = ($normalized -split '/')[0]
  $slug = [IO.Path]::GetFileNameWithoutExtension($normalized)
  $titles = @{
    "site/soloopsguide-home.svg" = "SoloOpsGuide"
    "hubs/client-workflow-systems.svg" = "Workflow systems"
    "hubs/software-stack-blueprints.svg" = "Stack blueprints"
    "hubs/workflow-comparisons.svg" = "Workflow comparisons"
    "hubs/templates-checklists.svg" = "Templates"
    "hubs/glossary.svg" = "Glossary"
    "hubs/faq.svg" = "FAQ"
    "workflows/freelance-client-workflow-system.svg" = "Client workflow"
    "workflows/workflow-automation-basics.svg" = "Automation basics"
    "blueprints/solo-freelancer-lean-budget.svg" = "Lean stack"
    "blueprints/consultant-va-collaboration.svg" = "Consultant + VA"
    "blueprints/migrate-from-scattered-tools.svg" = "Tool migration"
    "blueprints/software-stack-without-overbuying.svg" = "Buy less, fit better"
    "comparisons/crm-vs-project-management.svg" = "CRM vs PM"
    "comparisons/notion-vs-clickup.svg" = "Notion vs ClickUp"
    "comparisons/all-in-one-vs-specialized-stack.svg" = "All-in-one vs stack"
    "comparisons/billing-status-home.svg" = "Billing status home"
    "comparisons/calendly-vs-built-in-booking.svg" = "Booking options"
    "comparisons/email-vs-client-portal.svg" = "Email vs portal"
    "templates/client-onboarding-checklist.svg" = "Onboarding checklist"
    "templates/delivery-qa-checklist.svg" = "Delivery QA"
    "templates/invoice-payment-checklist.svg" = "Invoice follow-up"
    "templates/client-offboarding-template.svg" = "Offboarding"
    "templates/weekly-client-operations.svg" = "Weekly ops"
    "faq/solo-service-workflow-stack-faq.svg" = "Workflow stack FAQ"
  }
  $labels = @{
    "site/soloopsguide-home.svg" = @("Guide", "Systems", "Templates", "Comparisons")
    "hubs/client-workflow-systems.svg" = @("Intake", "Delivery", "Billing", "Offboarding")
    "hubs/software-stack-blueprints.svg" = @("Lean", "Collaborative", "Migration", "Upgrade path")
    "hubs/workflow-comparisons.svg" = @("CRM", "PM", "Booking", "Portal")
    "hubs/templates-checklists.svg" = @("Checklist", "Routing", "Status", "Reset")
    "hubs/glossary.svg" = @("Terms", "Roles", "Handoffs", "Definitions")
    "hubs/faq.svg" = @("Answers", "Breakdowns", "Maintenance", "Stack fit")
    "workflows/freelance-client-workflow-system.svg" = @("Lead", "Project", "Billing", "Close")
    "workflows/client-intake-qualification-workflow.svg" = @("Inquiry", "Fit", "Discovery", "Decision")
    "workflows/proposal-contract-handoff.svg" = @("Proposal", "Approval", "Contract", "Kickoff")
    "workflows/workflow-automation-basics.svg" = @("Trigger", "Wait", "Route", "Notify")
    "workflows/client-offboarding-workflow.svg" = @("Wrap-up", "Archive", "Billing", "Follow-up")
    "workflows/client-onboarding-workflow.svg" = @("Kickoff", "Inputs", "Setup", "Live")
    "workflows/client-status-update-workflow.svg" = @("Progress", "Risks", "Next step", "Send")
    "workflows/invoice-payment-workflow.svg" = @("Invoice", "Reminder", "Resolve", "Paid")
    "workflows/milestone-delivery-workflow.svg" = @("Draft", "Review", "Approve", "Deliver")
    "workflows/proposal-revision-approval-workflow.svg" = @("Revise", "Review", "Approve", "Send")
    "workflows/change-request-workflow.svg" = @("Request", "Scope", "Price", "Decision")
    "blueprints/solo-freelancer-lean-budget.svg" = @("Core stack", "Client hub", "Billing", "Add-ons")
    "blueprints/consultant-va-collaboration.svg" = @("Owner", "VA lane", "Shared hub", "QA")
    "blueprints/migrate-from-scattered-tools.svg" = @("Audit", "Merge", "Move", "Stabilize")
    "blueprints/software-stack-without-overbuying.svg" = @("Must-have", "Nice-to-have", "Delay", "Review")
    "comparisons/crm-vs-project-management.svg" = @("CRM-first", "PM-first", "Lead truth", "Delivery truth")
    "comparisons/notion-vs-clickup.svg" = @("Docs", "Tasks", "Views", "Scale")
    "comparisons/all-in-one-vs-specialized-stack.svg" = @("Single app", "Specialized", "Trade-offs", "Control")
    "comparisons/billing-status-home.svg" = @("Status view", "Finance", "Aging", "Next action")
    "comparisons/calendly-vs-built-in-booking.svg" = @("External", "Embedded", "Routing", "Control")
    "comparisons/email-vs-client-portal.svg" = @("Inbox", "Portal", "Search", "Visibility")
    "templates/client-onboarding-checklist.svg" = @("Start", "Assets", "Contacts", "Confirm")
    "templates/delivery-qa-checklist.svg" = @("Scope", "Proof", "QA", "Release")
    "templates/invoice-payment-checklist.svg" = @("Send", "Track", "Remind", "Close")
    "templates/client-offboarding-template.svg" = @("Wrap", "Archive", "Feedback", "Reconnect")
    "templates/weekly-client-operations.svg" = @("Check", "Update", "Escalate", "Plan")
    "templates/approval-feedback-routing-worksheet.svg" = @("Feedback", "Route", "Owner", "Decision")
    "templates/client-change-request-template.svg" = @("Request", "Impact", "Approve", "Reset")
    "templates/client-input-dependency-worksheet.svg" = @("Need", "Owner", "Due", "Nudge")
    "templates/escalation-pause-state-worksheet.svg" = @("Flag", "Pause", "Recover", "Resume")
    "templates/project-start-readiness-handoff-boundary-worksheet.svg" = @("Ready", "Handoff", "Owner", "Start")
    "templates/recovery-update-revised-plan-notice-template.svg" = @("Reset", "Plan", "Update", "Next step")
    "templates/scope-reset-recovery-worksheet.svg" = @("Scope", "Reset", "Options", "Approve")
    "templates/stack-audit-consolidation-worksheet.svg" = @("Audit", "Keep", "Merge", "Cut")
    "templates/system-of-record-rules-worksheet.svg" = @("Source", "Rules", "Sync", "Exceptions")
    "templates/weekly-client-status-update-template.svg" = @("Wins", "Risks", "Next", "Share")
    "glossary/approval-owner.svg" = @("Decision", "Owner", "Review", "Release")
    "glossary/client-dependency.svg" = @("Dependency", "Client", "Blocker", "Nudge")
    "glossary/next-action-owner.svg" = @("Action", "Owner", "Due", "Follow-up")
    "glossary/system-of-record.svg" = @("Source", "Truth", "Rules", "Sync")
    "glossary/workflow-handoff.svg" = @("Handoff", "Boundary", "Owner", "Ready")
    "faq/client-input-delay-faq.svg" = @("Missing input", "Wait", "Escalate", "Recover")
    "faq/client-silence-review-faq.svg" = @("Silence", "Reminder", "Deadline", "Move")
    "faq/solo-service-workflow-stack-faq.svg" = @("Stack", "Fit", "Tools", "Ops")
    "faq/workflow-maintenance-faq.svg" = @("Checkups", "Drift", "Refresh", "Keep")
  }
  $title = if($titles.ContainsKey($normalized)) { $titles[$normalized] } else { Convert-SlugToTitle $slug }
  $labelSet = if($labels.ContainsKey($normalized)) { $labels[$normalized] } else { @($slug.Split('-', [System.StringSplitOptions]::RemoveEmptyEntries) | Select-Object -First 4 | ForEach-Object { To-TitleWord $_ }) }
  if($labelSet.Count -lt 4){ $labelSet = @($labelSet + @("System","Flow","Owner","Status"))[0..3] }
  @{
    Kind = $kind
    Path = $normalized
    Slug = $slug
    Title = $title
    Labels = @($labelSet | Select-Object -First 4)
  }
}

function New-FeatureSvg {
  param([Parameter(Mandatory=$true)][string]$RelativePath)
  $meta = Get-FeatureMeta $RelativePath
  $theme = Get-Theme $meta.Kind
  $title = Escape-Xml $meta.Title
  $titleLines = @(Split-FeatureTitle $meta.Title | ForEach-Object { Escape-Xml $_ })
  $desc = Escape-Xml ("A SoloOpsGuide {0} feature image with readable labels and aligned workflow blocks for {1}." -f $meta.Kind, $meta.Title.ToLowerInvariant())
  $idBase = ($meta.Path -replace '[^a-zA-Z0-9]+','-').ToLowerInvariant()
  $a = Escape-Xml $meta.Labels[0]
  $b = Escape-Xml $meta.Labels[1]
  $c = Escape-Xml $meta.Labels[2]
  $d = Escape-Xml $meta.Labels[3]
  $body = switch($meta.Kind){
    "site" { @"
  <rect x="170" y="250" width="1260" height="486" rx="42" fill="$($theme.Panel)" stroke="$($theme.Stroke)" stroke-width="3" />
  <circle cx="800" cy="492" r="120" fill="$($theme.Navy)" />
  <text x="800" y="480" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#eef6ff">SoloOps</text>
  <text x="800" y="522" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#eef6ff">Guide</text>
  <rect x="276" y="336" width="250" height="118" rx="30" fill="$($theme.AccentSoft)" /><rect x="1074" y="336" width="250" height="118" rx="30" fill="$($theme.Soft)" /><rect x="276" y="550" width="250" height="118" rx="30" fill="$($theme.Cream)" /><rect x="1074" y="550" width="250" height="118" rx="30" fill="$($theme.Good)" />
  <path d="M526 395h118M956 395h118M526 609h118M956 609h118" stroke="$($theme.Accent)" stroke-width="10" stroke-linecap="round" />
  <text x="334" y="406" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="$($theme.Accent)">$a</text><text x="1136" y="406" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#36589a">$b</text><text x="336" y="620" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#8a5d27">$c</text><text x="1134" y="620" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#18794e">$d</text>
"@ }
    "hubs" { @"
  <rect x="170" y="250" width="1260" height="486" rx="42" fill="$($theme.Panel)" stroke="$($theme.Stroke)" stroke-width="3" />
  <rect x="604" y="344" width="392" height="176" rx="36" fill="$($theme.Navy)" />
  <text x="800" y="412" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" font-weight="700" fill="#eef6ff">$title</text>
  <rect x="316" y="308" width="212" height="86" rx="30" fill="$($theme.AccentSoft)" /><rect x="1072" y="308" width="212" height="86" rx="30" fill="$($theme.Soft)" /><rect x="316" y="584" width="212" height="86" rx="30" fill="$($theme.Cream)" /><rect x="1072" y="584" width="212" height="86" rx="30" fill="$($theme.Good)" />
  <path d="M528 351h76m468 0h76M528 627h76m468 0h76" stroke="$($theme.Accent)" stroke-width="10" stroke-linecap="round" />
  <text x="356" y="360" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="$($theme.Accent)">$a</text><text x="1118" y="360" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#36589a">$b</text><text x="360" y="636" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#8a5d27">$c</text><text x="1110" y="636" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#18794e">$d</text>
"@ }
    "workflows" { @"
  <rect x="170" y="250" width="1260" height="486" rx="42" fill="$($theme.Panel)" stroke="$($theme.Stroke)" stroke-width="3" />
  <rect x="228" y="426" width="220" height="112" rx="32" fill="$($theme.AccentSoft)" /><rect x="510" y="426" width="220" height="112" rx="32" fill="$($theme.Soft)" /><rect x="792" y="426" width="220" height="112" rx="32" fill="$($theme.Cream)" /><rect x="1074" y="426" width="220" height="112" rx="32" fill="$($theme.Good)" />
  <path d="M448 482h62m220 0h62m220 0h62" stroke="$($theme.Accent)" stroke-width="10" stroke-linecap="round" />
  <circle cx="338" cy="384" r="18" fill="$($theme.Navy)" /><circle cx="620" cy="384" r="18" fill="$($theme.Navy)" opacity=".75" /><circle cx="902" cy="384" r="18" fill="$($theme.Navy)" opacity=".55" /><circle cx="1184" cy="384" r="18" fill="$($theme.Navy)" opacity=".35" />
  <text x="282" y="492" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="$($theme.Accent)">$a</text><text x="566" y="492" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#36589a">$b</text><text x="846" y="492" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#8a5d27">$c</text><text x="1128" y="492" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#18794e">$d</text>
"@ }
    "blueprints" { @"
  <rect x="170" y="250" width="1260" height="486" rx="42" fill="$($theme.Panel)" stroke="$($theme.Stroke)" stroke-width="3" />
  <rect x="228" y="310" width="980" height="102" rx="34" fill="#f8fbfd" stroke="$($theme.Stroke)" stroke-width="3" />
  <rect x="260" y="454" width="562" height="210" rx="36" fill="$($theme.Navy)" />
  <rect x="856" y="454" width="486" height="210" rx="36" fill="#f8fbfd" stroke="$($theme.Stroke)" stroke-width="3" />
  <rect x="284" y="332" width="204" height="58" rx="29" fill="$($theme.AccentSoft)" /><rect x="520" y="332" width="204" height="58" rx="29" fill="$($theme.Soft)" /><rect x="756" y="332" width="184" height="58" rx="29" fill="$($theme.Cream)" /><rect x="972" y="332" width="188" height="58" rx="29" fill="$($theme.Good)" />
  <text x="330" y="369" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="$($theme.Accent)">$a</text><text x="568" y="369" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#36589a">$b</text><text x="806" y="369" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#8a5d27">$c</text><text x="1016" y="369" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#18794e">$d</text>
  <text x="316" y="514" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#eef6ff">Core stack</text><rect x="316" y="548" width="192" height="18" rx="9" fill="#eef6ff" opacity=".82" /><rect x="316" y="584" width="234" height="18" rx="9" fill="#eef6ff" opacity=".46" />
  <text x="926" y="514" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="$($theme.Ink)">Upgrade path</text><rect x="926" y="548" width="170" height="18" rx="9" fill="#c9d9e4" /><rect x="926" y="584" width="196" height="18" rx="9" fill="#c9d9e4" opacity=".62" />
"@ }
    "comparisons" { @"
  <rect x="170" y="250" width="1260" height="486" rx="42" fill="$($theme.Panel)" stroke="$($theme.Stroke)" stroke-width="3" />
  <rect x="214" y="304" width="516" height="360" rx="36" fill="$($theme.Navy)" />
  <rect x="870" y="304" width="516" height="360" rx="36" fill="#f8fbfd" stroke="$($theme.Stroke)" stroke-width="3" />
  <rect x="252" y="334" width="180" height="52" rx="26" fill="$($theme.AccentSoft)" /><rect x="908" y="334" width="180" height="52" rx="26" fill="$($theme.Soft)" />
  <text x="282" y="368" font-family="Arial, sans-serif" font-size="25" font-weight="700" fill="$($theme.Accent)">$a</text><text x="950" y="368" font-family="Arial, sans-serif" font-size="25" font-weight="700" fill="#36589a">$b</text>
  <rect x="252" y="438" width="192" height="86" rx="30" fill="#ffffff" opacity=".12" /><rect x="476" y="438" width="192" height="86" rx="30" fill="#ffffff" opacity=".12" /><rect x="916" y="438" width="192" height="86" rx="30" fill="$($theme.Cream)" /><rect x="1140" y="438" width="192" height="86" rx="30" fill="$($theme.Good)" />
  <text x="292" y="490" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#eef6ff">$c</text><text x="514" y="490" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#eef6ff">Routing</text><text x="958" y="490" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#8a5d27">$d</text><text x="1176" y="490" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#18794e">Owners</text>
  <rect x="318" y="590" width="308" height="54" rx="27" fill="$($theme.Cream)" /><rect x="974" y="590" width="308" height="54" rx="27" fill="$($theme.Panel)" stroke="$($theme.Stroke)" stroke-width="3" />
  <text x="352" y="626" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#8a5d27">Lead truth stays central</text><text x="998" y="626" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="$($theme.Ink)">Delivery truth stays central</text>
"@ }
    "templates" { @"
  <rect x="170" y="250" width="1260" height="486" rx="42" fill="$($theme.Panel)" stroke="$($theme.Stroke)" stroke-width="3" />
  <rect x="250" y="302" width="364" height="384" rx="36" fill="#f8fbfd" stroke="$($theme.Stroke)" stroke-width="3" />
  <rect x="650" y="302" width="700" height="384" rx="36" fill="$($theme.Navy)" />
  <rect x="292" y="350" width="280" height="18" rx="9" fill="#c9d9e4" /><rect x="292" y="392" width="250" height="18" rx="9" fill="#c9d9e4" opacity=".78" /><rect x="292" y="434" width="232" height="18" rx="9" fill="#c9d9e4" opacity=".56" /><rect x="292" y="510" width="248" height="74" rx="26" fill="$($theme.AccentSoft)" />
  <text x="338" y="556" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="$($theme.Accent)">$a</text>
  <rect x="714" y="356" width="246" height="72" rx="28" fill="$($theme.AccentSoft)" /><rect x="1004" y="356" width="246" height="72" rx="28" fill="$($theme.Soft)" /><rect x="714" y="468" width="246" height="72" rx="28" fill="$($theme.Cream)" /><rect x="1004" y="468" width="246" height="72" rx="28" fill="$($theme.Good)" />
  <text x="772" y="401" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="$($theme.Accent)">$b</text><text x="1064" y="401" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#36589a">$c</text><text x="782" y="513" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#8a5d27">$d</text>
"@ }
    "glossary" { @"
  <rect x="170" y="250" width="1260" height="486" rx="42" fill="$($theme.Panel)" stroke="$($theme.Stroke)" stroke-width="3" />
  <circle cx="410" cy="492" r="144" fill="$($theme.Navy)" />
  <text x="410" y="486" text-anchor="middle" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#eef6ff">$a</text><text x="410" y="526" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#d9eef7">Key term</text>
  <rect x="696" y="340" width="520" height="84" rx="30" fill="$($theme.AccentSoft)" /><rect x="696" y="458" width="520" height="84" rx="30" fill="$($theme.Soft)" /><rect x="696" y="576" width="520" height="84" rx="30" fill="$($theme.Cream)" />
  <path d="M554 492h114" stroke="$($theme.Accent)" stroke-width="10" stroke-linecap="round" />
  <text x="742" y="392" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="$($theme.Accent)">$b</text><text x="742" y="510" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#36589a">$c</text><text x="742" y="628" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#8a5d27">$d</text>
"@ }
    "faq" { @"
  <rect x="170" y="250" width="1260" height="486" rx="42" fill="$($theme.Panel)" stroke="$($theme.Stroke)" stroke-width="3" />
  <circle cx="360" cy="414" r="92" fill="$($theme.Navy)" />
  <text x="360" y="430" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="88" fill="#eef6ff">?</text>
  <rect x="520" y="326" width="740" height="92" rx="32" fill="$($theme.AccentSoft)" /><rect x="520" y="454" width="740" height="92" rx="32" fill="$($theme.Soft)" /><rect x="520" y="582" width="740" height="92" rx="32" fill="$($theme.Cream)" />
  <text x="576" y="382" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="$($theme.Accent)">$a</text><text x="576" y="510" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#36589a">$b</text><text x="576" y="638" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#8a5d27">$c</text>
  <rect x="1008" y="608" width="182" height="40" rx="20" fill="$($theme.Good)" /><text x="1042" y="635" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#18794e">$d</text>
"@ }
  }
  $titleMarkup = if($titleLines.Count -gt 1){
@"
  <text x="170" y="170" font-family="Georgia, 'Times New Roman', serif" font-size="40" fill="$($theme.Ink)">$($titleLines[0])</text>
  <text x="170" y="214" font-family="Georgia, 'Times New Roman', serif" font-size="40" fill="$($theme.Ink)">$($titleLines[1])</text>
  <rect x="170" y="228" width="290" height="16" rx="8" fill="$($theme.Ink)" opacity=".10" />
"@
  } else {
@"
  <text x="170" y="184" font-family="Georgia, 'Times New Roman', serif" font-size="42" fill="$($theme.Ink)">$title</text>
  <rect x="170" y="200" width="250" height="18" rx="9" fill="$($theme.Ink)" opacity=".10" />
"@
  }
@"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">$title</title>
  <desc id="desc">$desc</desc>
  <defs><linearGradient id="${idBase}-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="$($theme.BgA)" /><stop offset="100%" stop-color="$($theme.BgB)" /></linearGradient></defs>
  <rect width="1600" height="900" fill="url(#${idBase}-bg)" />
  <circle cx="1290" cy="164" r="150" fill="$($theme.Soft)" opacity=".6" />
  <circle cx="286" cy="744" r="140" fill="$($theme.AccentSoft)" opacity=".8" />
  <rect x="108" y="92" width="1384" height="716" rx="46" fill="$($theme.Panel)" stroke="$($theme.Stroke)" stroke-width="4" />
$titleMarkup
$body
</svg>
"@
}

$out = Join-Path $PSScriptRoot "..\\assets\\images\\features"
$svgOut = Join-Path $PSScriptRoot "..\\static\\images\\features"
$svgTemplateRoot = Join-Path $PSScriptRoot "feature-image-templates"
$specs = @(
  @{path="site/soloopsguide-home.png";palette="site";scene="home"},
  @{path="hubs/client-workflow-systems.png";palette="workflow";scene="hub-workflows"},
  @{path="hubs/software-stack-blueprints.png";palette="blueprint";scene="hub-blueprints"},
  @{path="hubs/workflow-comparisons.png";palette="comparison";scene="hub-comparisons"},
  @{path="hubs/templates-checklists.png";palette="template";scene="hub-templates"},
  @{path="hubs/glossary.png";palette="support";scene="hub-glossary"},
  @{path="hubs/faq.png";palette="support";scene="hub-faq"},
  @{path="workflows/freelance-client-workflow-system.png";palette="workflow";scene="workflow-lifecycle"},
  @{path="workflows/client-intake-qualification-workflow.png";palette="workflow";scene="workflow-intake"},
  @{path="workflows/proposal-contract-handoff.png";palette="workflow";scene="workflow-handoff"},
  @{path="workflows/workflow-automation-basics.png";palette="workflow";scene="workflow-automation"},
  @{path="blueprints/solo-freelancer-lean-budget.png";palette="blueprint";scene="blueprint-lean"},
  @{path="blueprints/consultant-va-collaboration.png";palette="blueprint";scene="blueprint-collaboration"},
  @{path="blueprints/migrate-from-scattered-tools.png";palette="blueprint";scene="blueprint-migration"},
  @{path="comparisons/crm-vs-project-management.png";palette="comparison";scene="comparison-crm-pm"},
  @{path="comparisons/notion-vs-clickup.png";palette="comparison";scene="comparison-notion-clickup"},
  @{path="templates/client-onboarding-checklist.png";palette="template";scene="template-onboarding"},
  @{path="templates/delivery-qa-checklist.png";palette="template";scene="template-delivery-qa"},
  @{path="templates/invoice-payment-checklist.png";palette="template";scene="template-invoice"},
  @{path="templates/client-offboarding-template.png";palette="template";scene="template-offboarding"},
  @{path="templates/weekly-client-operations.png";palette="template";scene="template-weekly-ops"},
  @{path="glossary/system-of-record.png";palette="support";scene="glossary-system-record"},
  @{path="glossary/workflow-handoff.png";palette="support";scene="glossary-workflow-handoff"},
  @{path="faq/solo-service-workflow-stack-faq.png";palette="support";scene="faq"}
)

if(-not (Test-Path $svgTemplateRoot)){
  throw "SVG template root not found: $svgTemplateRoot"
}

$svgSpecs = Get-ChildItem -Path $svgTemplateRoot -Recurse -File -Filter *.svg |
  Sort-Object FullName |
  ForEach-Object {
    @{
      template = $_.FullName
      path = Get-RelativePathCompat $svgTemplateRoot $_.FullName
    }
  }

foreach($s in $specs){
  $path=Join-Path $out $s.path
  if($DryRun){
    Write-Output "DRY RUN: would generate $path"
    continue
  }

  $bmp=New-Object System.Drawing.Bitmap 1600,900
  $g=[System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode='AntiAlias';$g.InterpolationMode='HighQualityBicubic';$g.PixelOffsetMode='HighQuality';$g.CompositingQuality='HighQuality'
  $pal=B $s.palette; BG $g $pal 1600 900; Draw $g $pal $s.scene
  $dir=Split-Path -Parent $path; if(-not (Test-Path $dir)){New-Item -ItemType Directory -Path $dir -Force|Out-Null}
  $bmp.Save($path,[System.Drawing.Imaging.ImageFormat]::Png); $g.Dispose(); $bmp.Dispose()
}

foreach($s in $svgSpecs){
  $path = Join-Path $svgOut $s.path
  $templatePath = Join-Path $svgTemplateRoot $s.path
  if($DryRun){
    Write-Output "DRY RUN: would generate $path and refresh $templatePath"
    continue
  }

  $svg = New-FeatureSvg $s.path
  Write-Utf8NoBom $templatePath $svg
  Write-Utf8NoBom $path $svg
}

if($DryRun){
  Write-Output "Dry run complete: $($specs.Count) PNG feature image files and $($svgSpecs.Count) SVG feature image files would be generated"
  exit 0
}

Write-Output "Generated $($specs.Count) PNG feature image sources in $out"
Write-Output "Generated $($svgSpecs.Count) SVG feature image sources in $svgOut and refreshed templates in $svgTemplateRoot"
