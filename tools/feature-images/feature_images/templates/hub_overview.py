def render_hub_overview(spec, context):
    draw = context["draw"]
    palette = context["palette"]
    fonts = context["fonts"]
    report = context["report"]
    helpers = context["helpers"]

    helpers["shadowed_box"](draw, (96, 84, 1504, 816), palette["frame"], palette["stroke"], palette["shadow"], radius=42)
    helpers["pill"](draw, (150, 128, 334, 174), palette["accent_soft"], spec["eyebrow"], fonts["pill"], palette["accent"])
    draw.text((150, 208), spec["title"], font=fonts["title"], fill=palette["ink"])
    helpers["draw_text_block"](draw, spec["subtitle"], fonts["subtitle"], palette["muted"], (150, 282, 760, 72), 8, report, "hub subtitle", max_lines=2)

    anchor_box = (150, 392, 630, 748)
    helpers["rounded_box"](draw, anchor_box, fill=palette["secondary_soft"], outline=palette["secondary"], width=2, radius=36)
    helpers["pill"](draw, (190, 430, 374, 470), palette["secondary"], "Operating center", fonts["pill"], "#eef6ff")
    helpers["draw_text_block"](draw, spec["anchor"]["title"], fonts["panel_title"], palette["ink"], (190, 500, 330, 110), 10, report, "hub anchor title", max_lines=2)
    helpers["draw_text_block"](draw, spec["anchor"]["body"], fonts["card_body"], palette["muted"], (190, 626, 360, 82), 8, report, "hub anchor body", max_lines=3)

    modules = spec["modules"]
    module_boxes = [
        (708, 392, 1048, 560),
        (1090, 392, 1430, 560),
        (708, 580, 1048, 748),
        (1090, 580, 1430, 748),
    ]
    for box, module in zip(module_boxes, modules):
        helpers["rounded_box"](draw, box, fill="#f8fbfd", outline=palette["stroke"], width=2, radius=28)
        helpers["pill"](draw, (box[0] + 24, box[1] + 22, box[0] + 156, box[1] + 60), palette["accent_soft"], module["kicker"], fonts["pill"], palette["accent"])
        draw.text((box[0] + 24, box[1] + 86), module["title"], font=fonts["card_title"], fill=palette["ink"])
        helpers["draw_text_block"](draw, module["detail"], fonts["card_body"], palette["muted"], (box[0] + 24, box[1] + 126, 280, 64), 6, report, f"hub module {module['title']}", max_lines=2)

    # Left-gap connectors: anchor box → left-column (middle) modules
    # trunk_x is in the gap between anchor right (630) and left-column left (708)
    trunk_x = 676
    top_cy = 476    # centre y of top-row module boxes: (392+560)//2
    bottom_cy = 664 # centre y of bottom-row module boxes: (580+748)//2
    anchor_cy = 570 # centre y of anchor box: (392+748)//2

    draw.line((630, anchor_cy, trunk_x, anchor_cy), fill=palette["accent"], width=6)
    draw.line((trunk_x, top_cy, trunk_x, bottom_cy), fill=palette["accent"], width=6)
    draw.ellipse((trunk_x - 12, anchor_cy - 12, trunk_x + 12, anchor_cy + 12), fill=palette["accent"])
    draw.line((trunk_x, top_cy, 708, top_cy), fill=palette["accent"], width=6)
    draw.line((trunk_x, bottom_cy, 708, bottom_cy), fill=palette["accent"], width=6)

    # Right-gap connectors: left-column (middle) modules → right-column modules
    # Left-column right edge: 1048; right-column left edge: 1090
    draw.line((1048, top_cy, 1090, top_cy), fill=palette["accent"], width=6)
    draw.line((1048, bottom_cy, 1090, bottom_cy), fill=palette["accent"], width=6)
