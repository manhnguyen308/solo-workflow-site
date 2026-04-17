def render_comparison_split(spec, context):
    draw = context["draw"]
    palette = context["palette"]
    fonts = context["fonts"]
    report = context["report"]
    helpers = context["helpers"]

    helpers["shadowed_box"](draw, (96, 84, 1504, 816), palette["frame"], palette["stroke"], palette["shadow"], radius=42)
    helpers["pill"](draw, (150, 128, 364, 174), palette["accent_soft"], spec["eyebrow"], fonts["pill"], palette["accent"])
    draw.text((150, 208), spec["title"], font=fonts["title"], fill=palette["ink"])
    helpers["draw_text_block"](draw, spec["subtitle"], fonts["subtitle"], palette["muted"], (150, 282, 760, 72), 8, report, "comparison subtitle", max_lines=2)

    left_box = (150, 392, 722, 736)
    right_box = (878, 392, 1450, 736)
    helpers["rounded_box"](draw, left_box, fill="#fbf6ee", outline=palette["stroke"], width=2, radius=34)
    helpers["rounded_box"](draw, right_box, fill="#f4f8fd", outline=palette["stroke"], width=2, radius=34)

    for box, side, fill, pill_fill, pill_text in (
        (left_box, spec["left"], palette["warm"], palette["warm_soft"], palette["warm"]),
        (right_box, spec["right"], palette["secondary"], palette["secondary_soft"], palette["secondary"]),
    ):
        helpers["pill"](draw, (box[0] + 30, box[1] + 26, box[0] + 210, box[1] + 66), pill_fill, side["kicker"], fonts["small"], pill_text)
        draw.text((box[0] + 30, box[1] + 94), side["title"], font=fonts["panel_title"], fill=palette["ink"])
        for index, item in enumerate(side["items"]):
            y = box[1] + 170 + (index * 92)
            helpers["rounded_box"](draw, (box[0] + 30, y, box[2] - 30, y + 70), fill="#ffffff", outline=palette["stroke"], width=2, radius=22)
            draw.text((box[0] + 54, y + 19), item["label"], font=fonts["card_title"], fill=palette["ink"])
            helpers["pill"](draw, (box[2] - 182, y + 14, box[2] - 32, y + 56), pill_fill, item["note"], fonts["small"], pill_text)

    draw.line((800, 416, 800, 540), fill=palette["stroke"], width=3)
    draw.line((800, 608, 800, 716), fill=palette["stroke"], width=3)
    helpers["pill"](draw, (754, 540, 846, 608), palette["frame"], "vs", fonts["card_title"], palette["muted"])

    decision_box = (344, 754, 1256, 800)
    helpers["rounded_box"](draw, decision_box, fill=palette["frame"], outline=palette["stroke"], width=2, radius=28)
    draw.text((382, 768), spec["decision"]["title"], font=fonts["pill"], fill=palette["ink"])
    helpers["draw_text_block"](draw, spec["decision"]["body"], fonts["small"], palette["muted"], (580, 760, 620, 24), 4, report, "comparison decision", max_lines=1)
