def render_hub_overview(spec, context):
    draw = context["draw"]
    palette = context["palette"]
    fonts = context["fonts"]
    report = context["report"]
    helpers = context["helpers"]

    helpers["shadowed_box"](draw, (96, 84, 1504, 816), palette["frame"], palette["stroke"], palette["shadow"], radius=42)
    helpers["pill"](draw, (150, 128, 334, 174), palette["accent_soft"], spec["eyebrow"], fonts["pill"], palette["accent"])
    draw.text((150, 208), spec["title"], font=fonts["title"], fill=palette["ink"])
    helpers["draw_text_block"](draw, spec["subtitle"], fonts["subtitle"], palette["muted"], (150, 282, 720, 72), 8, report, "hub subtitle", max_lines=2)

    anchor_box = (150, 392, 620, 748)
    helpers["rounded_box"](draw, anchor_box, fill=palette["secondary"], outline=palette["secondary"], width=2, radius=36)
    draw.text((190, 438), spec["anchor"]["title"], font=fonts["title"], fill="#eef6ff")
    helpers["draw_text_block"](draw, spec["anchor"]["body"], fonts["card_body"], "#d8e6f7", (190, 530, 360, 108), 8, report, "hub anchor body", max_lines=4)

    modules = spec["modules"]
    module_boxes = [
        (744, 392, 1060, 550),
        (1108, 392, 1424, 550),
        (744, 590, 1060, 748),
        (1108, 590, 1424, 748),
    ]
    for box, module in zip(module_boxes, modules):
        helpers["rounded_box"](draw, box, fill="#f8fbfd", outline=palette["stroke"], width=2, radius=28)
        helpers["pill"](draw, (box[0] + 24, box[1] + 22, box[0] + 144, box[1] + 60), palette["accent_soft"], module["kicker"], fonts["small"], palette["accent"])
        draw.text((box[0] + 24, box[1] + 82), module["title"], font=fonts["card_title"], fill=palette["ink"])
        helpers["draw_text_block"](draw, module["detail"], fonts["card_body"], palette["muted"], (box[0] + 24, box[1] + 122, 248, 64), 6, report, f"hub module {module['title']}", max_lines=2)

    connector_x1 = 620
    connector_x2 = 700
    draw.line((connector_x1, 570, connector_x2, 570), fill=palette["accent"], width=8)
    draw.line((connector_x2, 470, connector_x2, 670), fill=palette["accent"], width=8)
    for y in (470, 670):
        draw.line((connector_x2, y, 744, y), fill=palette["accent"], width=8)
        draw.line((connector_x2, y, 1108, y), fill=palette["accent"], width=8)
