def render_concept_map(spec, context):
    draw = context["draw"]
    palette = context["palette"]
    fonts = context["fonts"]
    report = context["report"]
    helpers = context["helpers"]

    helpers["shadowed_box"](draw, (96, 84, 1504, 816), palette["frame"], palette["stroke"], palette["shadow"], radius=42)
    helpers["pill"](draw, (150, 128, 348, 174), palette["accent_soft"], spec["eyebrow"], fonts["pill"], palette["accent"])
    draw.text((150, 208), spec["title"], font=fonts["title"], fill=palette["ink"])
    helpers["draw_text_block"](draw, spec["subtitle"], fonts["subtitle"], palette["muted"], (150, 282, 760, 72), 8, report, "concept subtitle", max_lines=2)

    # Left concept box — dark background, concept name centered
    concept_box = (150, 420, 540, 748)
    helpers["rounded_box"](draw, concept_box, fill=palette["secondary"], outline=palette["secondary"], width=2, radius=32)
    helpers["pill"](draw, (178, 448, 512, 488), palette["secondary_soft"], "Key concept", fonts["small"], palette["secondary_soft"])
    helpers["draw_text_block"](draw, spec["concept"], fonts["panel_title"], "#ffffff", (178, 548, 330, 100), 8, report, "concept label", max_lines=2)

    # Y-branch connector from concept box right edge to attribute grid
    mid_y = 584  # vertical midpoint of concept box
    top_row_cy = 499  # midpoint of top attribute rows: (420 + 578) // 2
    bot_row_cy = 678  # midpoint of bottom attribute rows: (608 + 748) // 2
    trunk_x = 590
    draw.line((540, mid_y, trunk_x, mid_y), fill=palette["accent"], width=5)
    draw.line((trunk_x, top_row_cy, trunk_x, bot_row_cy), fill=palette["accent"], width=5)
    draw.line((trunk_x, top_row_cy, 630, top_row_cy), fill=palette["accent"], width=5)
    draw.line((trunk_x, bot_row_cy, 630, bot_row_cy), fill=palette["accent"], width=5)

    # 2x2 attribute grid
    attr_boxes = [
        (630, 420, 1030, 578),
        (1060, 420, 1450, 578),
        (630, 608, 1030, 748),
        (1060, 608, 1450, 748),
    ]
    attr_fills = [palette["accent_soft"], palette["secondary_soft"], palette["warm_soft"], palette["good_soft"]]
    attributes = spec.get("attributes", [])
    for idx, (box, fill) in enumerate(zip(attr_boxes, attr_fills)):
        helpers["rounded_box"](draw, box, fill=fill, outline=palette["stroke"], width=2, radius=26)
        if idx < len(attributes):
            attr = attributes[idx]
            draw.text((box[0] + 24, box[1] + 22), attr["label"], font=fonts["card_title"], fill=palette["ink"])
            helpers["draw_text_block"](draw, attr["note"], fonts["card_body"], palette["muted"], (box[0] + 24, box[1] + 64, (box[2] - box[0]) - 48, 56), 6, report, f"concept attr {idx}", max_lines=2)
