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
    helpers["rounded_box"](draw, anchor_box, fill=palette["secondary"], outline=palette["secondary"], width=2, radius=36)
    helpers["pill"](draw, (190, 430, 374, 470), "#43679b", "Operating center", fonts["small"], "#eef6ff")
    helpers["draw_text_block"](draw, spec["anchor"]["title"], fonts["panel_title"], "#eef6ff", (190, 500, 330, 110), 10, report, "hub anchor title", max_lines=2)
    helpers["draw_text_block"](draw, spec["anchor"]["body"], fonts["card_body"], "#d8e6f7", (190, 626, 360, 82), 8, report, "hub anchor body", max_lines=3)

    modules = spec["modules"]
    module_boxes = [
        (708, 392, 1048, 560),
        (1090, 392, 1430, 560),
        (708, 580, 1048, 748),
        (1090, 580, 1430, 748),
    ]
    for box, module in zip(module_boxes, modules):
        helpers["rounded_box"](draw, box, fill="#f8fbfd", outline=palette["stroke"], width=2, radius=28)
        helpers["pill"](draw, (box[0] + 24, box[1] + 22, box[0] + 156, box[1] + 60), palette["accent_soft"], module["kicker"], fonts["small"], palette["accent"])
        draw.text((box[0] + 24, box[1] + 86), module["title"], font=fonts["card_title"], fill=palette["ink"])
        helpers["draw_text_block"](draw, module["detail"], fonts["card_body"], palette["muted"], (box[0] + 24, box[1] + 126, 280, 64), 6, report, f"hub module {module['title']}", max_lines=2)

    connector_x1 = 630
    connector_x2 = 676
    draw.line((connector_x1, 570, connector_x2, 570), fill=palette["accent"], width=6)
    draw.line((connector_x2, 476, connector_x2, 664), fill=palette["accent"], width=6)
    draw.ellipse((connector_x2 - 12, 558, connector_x2 + 12, 582), fill=palette["accent"])
    for y, x in ((476, 708), (476, 1090), (664, 708), (664, 1090)):
        draw.line((connector_x2, y, x, y), fill=palette["accent"], width=6)
