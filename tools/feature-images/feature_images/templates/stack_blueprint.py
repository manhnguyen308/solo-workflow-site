def render_stack_blueprint(spec, context):
    draw = context["draw"]
    palette = context["palette"]
    fonts = context["fonts"]
    report = context["report"]
    helpers = context["helpers"]

    helpers["shadowed_box"](draw, (96, 84, 1504, 816), palette["frame"], palette["stroke"], palette["shadow"], radius=42)
    helpers["pill"](draw, (150, 128, 348, 174), palette["secondary_soft"], spec["eyebrow"], fonts["pill"], palette["secondary"])
    draw.text((150, 208), spec["title"], font=fonts["title"], fill=palette["ink"])
    helpers["draw_text_block"](draw, spec["subtitle"], fonts["subtitle"], palette["muted"], (150, 282, 760, 72), 8, report, "blueprint subtitle", max_lines=2)

    main_box = (150, 386, 844, 748)
    side_box = (892, 386, 1450, 748)
    helpers["rounded_box"](draw, main_box, fill="#f7fbff", outline=palette["stroke"], width=2, radius=34)
    helpers["rounded_box"](draw, side_box, fill="#fdfcf8", outline=palette["stroke"], width=2, radius=34)

    stack_boxes = [
        (204, 620, 790, 704, palette["accent"]),
        (238, 528, 756, 606, palette["secondary"]),
        (278, 436, 716, 512, palette["warm"]),
    ]
    for idx, (x1, y1, x2, y2, fill) in enumerate(stack_boxes):
        helpers["rounded_box"](draw, (x1, y1, x2, y2), fill=fill, outline=fill, width=2, radius=26)
        layer = spec["stack_layers"][idx]
        draw.text((x1 + 28, y1 + 20), layer["title"], font=fonts["card_title"], fill="#f7fbfd")
        helpers["draw_text_block"](draw, layer["detail"], fonts["small"], "#e6eef7", (x1 + 28, y1 + 54, (x2 - x1) - 56, 48), 4, report, f"stack layer {layer['title']}", max_lines=2)

    draw.text((932, 432), spec["side_panel"]["title"], font=fonts["card_title"], fill=palette["ink"])
    for index, item in enumerate(spec["side_panel"]["items"]):
        y = 500 + (index * 86)
        fill = [palette["accent_soft"], palette["secondary_soft"], palette["warm_soft"]][index % 3]
        helpers["rounded_box"](draw, (932, y, 1408, y + 66), fill=fill, outline=palette["stroke"], width=2, radius=24)
        draw.text((958, y + 18), item["label"], font=fonts["pill"], fill=palette["ink"])
        draw.text((1230, y + 18), item["note"], font=fonts["small"], fill=palette["muted"])
