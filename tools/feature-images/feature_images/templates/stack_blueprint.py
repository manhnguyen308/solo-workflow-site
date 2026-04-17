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

    main_box = (150, 386, 834, 768)
    side_box = (882, 386, 1450, 768)
    helpers["rounded_box"](draw, main_box, fill="#f7fbff", outline=palette["stroke"], width=2, radius=34)
    helpers["rounded_box"](draw, side_box, fill="#fdfcf8", outline=palette["stroke"], width=2, radius=34)

    stack_fills = [
        (palette["accent"], palette["accent_soft"]),
        (palette["secondary"], palette["secondary_soft"]),
        (palette["warm"], palette["warm_soft"]),
    ]
    stack_boxes = [
        (198, 630, 786, 724),
        (232, 524, 752, 616),
        (272, 418, 712, 510),
    ]
    for idx, (x1, y1, x2, y2) in enumerate(stack_boxes):
        border_color, bg_color = stack_fills[idx]
        helpers["rounded_box"](draw, (x1, y1, x2, y2), fill=bg_color, outline=border_color, width=3, radius=26)
        layer = spec["stack_layers"][idx]
        draw.text((x1 + 28, y1 + 18), layer["title"], font=fonts["card_title"], fill=palette["ink"])
        helpers["draw_text_block"](draw, layer["detail"], fonts["small"], palette["muted"], (x1 + 28, y1 + 52, (x2 - x1) - 56, 48), 4, report, f"stack layer {layer['title']}", max_lines=2)

    draw.text((922, 432), spec["side_panel"]["title"], font=fonts["panel_title"], fill=palette["ink"])
    for index, item in enumerate(spec["side_panel"]["items"]):
        y = 502 + (index * 90)
        fill = [palette["accent_soft"], palette["secondary_soft"], palette["warm_soft"]][index % 3]
        helpers["rounded_box"](draw, (922, y, 1410, y + 74), fill=fill, outline=palette["stroke"], width=2, radius=24)
        draw.text((950, y + 14), item["label"], font=fonts["pill"], fill=palette["ink"])
        helpers["draw_text_block"](draw, item["note"], fonts["small"], palette["muted"], (950, y + 42, 420, 24), 4, report, f"stack trigger {item['label']}", max_lines=1)
