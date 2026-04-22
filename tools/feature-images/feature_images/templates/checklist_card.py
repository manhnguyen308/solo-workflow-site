def render_checklist_card(spec, context):
    draw = context["draw"]
    palette = context["palette"]
    fonts = context["fonts"]
    report = context["report"]
    helpers = context["helpers"]

    helpers["shadowed_box"](draw, (96, 84, 1504, 816), palette["frame"], palette["stroke"], palette["shadow"], radius=42)
    helpers["pill"](draw, (150, 128, 380, 174), palette["accent_soft"], spec["eyebrow"], fonts["pill"], palette["accent"])
    draw.text((150, 208), spec["title"], font=fonts["title"], fill=palette["ink"])
    helpers["draw_text_block"](draw, spec["subtitle"], fonts["subtitle"], palette["muted"], (150, 282, 760, 72), 8, report, "checklist subtitle", max_lines=2)

    # Left trigger box — when to run this checklist
    trigger_box = (150, 390, 500, 780)
    helpers["rounded_box"](draw, trigger_box, fill=palette["secondary_soft"], outline=palette["secondary"], width=2, radius=28)
    helpers["pill"](draw, (178, 420, 472, 462), palette["secondary"], "When to run", fonts["small"], "#eef6ff")
    helpers["draw_text_block"](draw, spec["trigger"]["label"], fonts["card_title"], palette["ink"], (178, 490, 294, 80), 8, report, "checklist trigger label", max_lines=2)
    helpers["draw_text_block"](draw, spec["trigger"]["note"], fonts["card_body"], palette["muted"], (178, 578, 298, 80), 6, report, "checklist trigger note", max_lines=3)

    # Right steps area — 4 task rows
    draw.text((540, 402), "Steps", font=fonts["panel_title"], fill=palette["ink"])
    steps = spec.get("steps", [])
    row_fills = [palette["accent_soft"], palette["secondary_soft"], palette["warm_soft"], palette["good_soft"]]
    for index, step in enumerate(steps[:4]):
        y = 456 + (index * 82)
        row_box = (540, y, 1450, y + 66)
        helpers["rounded_box"](draw, row_box, fill=row_fills[index % 4], outline=palette["stroke"], width=2, radius=20)
        helpers["draw_text_block"](draw, step["label"], fonts["card_title"], palette["ink"], (568, y + 16, 680, 50), 6, report, f"checklist step {index}", max_lines=1)
        helpers["pill"](draw, (1278, y + 12, 1422, y + 54), palette["frame"], step["tag"], fonts["small"], palette["muted"])
