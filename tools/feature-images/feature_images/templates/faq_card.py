def render_faq_card(spec, context):
    draw = context["draw"]
    palette = context["palette"]
    fonts = context["fonts"]
    report = context["report"]
    helpers = context["helpers"]

    helpers["shadowed_box"](draw, (96, 84, 1504, 816), palette["frame"], palette["stroke"], palette["shadow"], radius=42)
    helpers["pill"](draw, (150, 128, 300, 174), palette["accent_soft"], spec["eyebrow"], fonts["pill"], palette["accent"])
    draw.text((150, 208), spec["title"], font=fonts["title"], fill=palette["ink"])
    helpers["draw_text_block"](draw, spec["subtitle"], fonts["subtitle"], palette["muted"], (150, 282, 760, 72), 8, report, "faq subtitle", max_lines=2)

    # Left problem box — shows when this FAQ applies
    problem_box = (150, 390, 640, 780)
    helpers["rounded_box"](draw, problem_box, fill=palette["warm_soft"], outline=palette["warm"], width=2, radius=30)
    helpers["pill"](draw, (178, 420, 420, 462), palette["warm"], "Problem", fonts["small"], palette["frame"])
    draw.text((178, 496), spec["problem"]["label"], font=fonts["card_title"], fill=palette["ink"])
    helpers["draw_text_block"](draw, spec["problem"]["condition"], fonts["card_body"], palette["muted"], (178, 548, 428, 72), 6, report, "faq problem condition", max_lines=3)

    # Right routes area — where this FAQ routes you
    draw.text((680, 402), "Resolution routes", font=fonts["panel_title"], fill=palette["ink"])
    routes = spec.get("routes", [])
    row_fills = [palette["secondary_soft"], palette["accent_soft"], palette["secondary_soft"], palette["accent_soft"]]
    for index, route in enumerate(routes[:4]):
        y = 456 + (index * 82)
        row_box = (680, y, 1450, y + 66)
        helpers["rounded_box"](draw, row_box, fill=row_fills[index % 2], outline=palette["stroke"], width=2, radius=20)
        draw.text((708, y + 18), route["label"], font=fonts["card_title"], fill=palette["ink"])
        helpers["pill"](draw, (1150, y + 12, 1422, y + 54), palette["frame"], route["note"], fonts["small"], palette["muted"])
