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

$out = Join-Path $PSScriptRoot "..\\assets\\images\\features"
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

foreach($s in $specs){
  $bmp=New-Object System.Drawing.Bitmap 1600,900
  $g=[System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode='AntiAlias';$g.InterpolationMode='HighQualityBicubic';$g.PixelOffsetMode='HighQuality';$g.CompositingQuality='HighQuality'
  $pal=B $s.palette; BG $g $pal 1600 900; Draw $g $pal $s.scene
  $path=Join-Path $out $s.path; $dir=Split-Path -Parent $path; if(-not (Test-Path $dir)){New-Item -ItemType Directory -Path $dir -Force|Out-Null}
  $bmp.Save($path,[System.Drawing.Imaging.ImageFormat]::Png); $g.Dispose(); $bmp.Dispose()
}

Write-Output "Generated $($specs.Count) feature image sources in $out"
