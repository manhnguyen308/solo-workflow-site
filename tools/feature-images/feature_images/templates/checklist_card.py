def render_checklist_card(spec, context):
    draw = context["draw"]
    palette = context["palette"]
    fonts = context["fonts"]
    report = context["report"]
    helpers = context["helpers"]

    helpers["shadowed_box"](draw, (96, 84, 1504, 816), palette["frame"], palette["stroke"], palette["shadow"], radius=42)
    helpers["pill"](draw, (150, 128, 420, 180), palette["accent_soft"], spec["eyebrow"], fonts["card_title"], palette["accent"])
    draw.text((150, 208), spec["title"], font=fonts["title"], fill=palette["ink"])
    helpers["draw_text_block"](draw, spec["subtitle"], fonts["card_body"], palette["muted"], (150, 282, 820, 72), 8, report, "checklist subtitle", max_lines=2)

    # Left trigger box — when to run this checklist
    trigger_box = (150, 370, 530, 780)
    helpers["rounded_box"](draw, trigger_box, fill=palette["secondary_soft"], outline=palette["secondary"], width=3, radius=28)
    helpers["pill"](draw, (178, 402, 500, 452), palette["secondary"], "When to run", fonts["card_title"], "#eef6ff")
    helpers["draw_text_block"](draw, spec["trigger"]["label"], fonts["card_title"], palette["ink"], (178, 474, 314, 160), 8, report, "checklist trigger label", max_lines=4)
    helpers["draw_text_block"](draw, spec["trigger"]["note"], fonts["card_body"], palette["muted"], (178, 650, 314, 100), 6, report, "checklist trigger note", max_lines=3)

    # Right steps area — 4 task rows with large readable labels
    draw.text((566, 374), "Checklist", font=fonts["panel_title"], fill=palette["ink"])
    steps = spec.get("steps", [])[:4]
    row_fills = [palette["accent_soft"], palette["secondary_soft"], palette["warm_soft"], palette["good_soft"]]

    def label_room(step):
        tag_width = draw.textbbox((0, 0), step["tag"], font=fonts["card_title"])[2] + 36
        return (1432 - max(176, tag_width)) - 16 - 592

    # One label size per image, reduced until every row clears its tag pill.
    label_font = fonts["panel_title"]
    while label_font.size > 30 and any(draw.textbbox((0, 0), step["label"], font=label_font)[2] > label_room(step) for step in steps):
        label_font = label_font.font_variant(size=label_font.size - 1)
    label_metrics = draw.textbbox((0, 0), "Ag", font=label_font)
    label_offset = (74 - (label_metrics[1] + label_metrics[3])) // 2

    for index, step in enumerate(steps):
        y = 436 + (index * 88)
        row_box = (560, y, 1460, y + 74)
        helpers["rounded_box"](draw, row_box, fill=row_fills[index % 4], outline=palette["stroke"], width=2, radius=22)
        helpers["draw_text_block"](draw, step["label"], label_font, palette["ink"], (592, y + label_offset, label_room(step), 74 - label_offset), 6, report, f"checklist step {index}", max_lines=1)
        helpers["pill"](draw, (1256, y + 14, 1432, y + 60), palette["frame"], step["tag"], fonts["card_title"], palette["muted"], anchor="right")
