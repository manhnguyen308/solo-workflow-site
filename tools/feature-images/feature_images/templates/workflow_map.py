def render_workflow_map(spec, context):
    draw = context["draw"]
    palette = context["palette"]
    fonts = context["fonts"]
    report = context["report"]
    helpers = context["helpers"]

    helpers["shadowed_box"](draw, (96, 84, 1504, 816), palette["frame"], palette["stroke"], palette["shadow"], radius=42)
    helpers["pill"](draw, (150, 128, 350, 174), palette["accent_soft"], spec["eyebrow"], fonts["pill"], palette["accent"])
    draw.text((150, 208), spec["title"], font=fonts["title"], fill=palette["ink"])
    helpers["draw_text_block"](
        draw,
        spec["subtitle"],
        fonts["subtitle"],
        palette["muted"],
        (150, 282, 760, 72),
        8,
        report,
        "workflow subtitle",
        max_lines=2,
    )

    panel = (150, 384, 1450, 640)
    helpers["rounded_box"](draw, panel, fill="#f8fbfd", outline=palette["stroke"], width=3, radius=34)
    items = spec["items"]
    card_width = 274
    card_height = 210
    gap = 38
    start_x = 195
    top_y = 418
    connector_y = top_y + (card_height // 2)
    last_card_x = start_x + ((len(items) - 1) * (card_width + gap))
    draw.line(
        (start_x + (card_width // 2), connector_y, last_card_x + (card_width // 2), connector_y),
        fill=palette["accent_soft"],
        width=14,
    )
    for index, item in enumerate(items):
        x = start_x + index * (card_width + gap)
        box = (x, top_y, x + card_width, top_y + card_height)
        fill = [palette["accent_soft"], palette["secondary_soft"], palette["warm_soft"], palette["good_soft"]][index % 4]
        helpers["rounded_box"](draw, box, fill=fill, outline=palette["stroke"], width=2, radius=28)
        helpers["pill"](draw, (x + 24, top_y + 24, x + 148, top_y + 68), palette["frame"], item["kicker"], fonts["small"], palette["muted"])
        draw.text((x + 28, top_y + 88), item["label"], font=fonts["panel_title"], fill=palette["ink"])
        if index < len(items) - 1:
            draw.line((x + card_width, connector_y, x + card_width + gap, connector_y), fill=palette["accent"], width=8)
            draw.ellipse((x + card_width + gap - 11, connector_y - 11, x + card_width + gap + 11, connector_y + 11), fill=palette["accent"])

    note_box = (150, 660, 760, 782)
    signal_box = (790, 660, 1450, 782)
    helpers["rounded_box"](draw, note_box, fill="#f3f8fb", outline=palette["stroke"], width=2, radius=28)
    helpers["rounded_box"](draw, signal_box, fill="#f7fbf8", outline=palette["stroke"], width=2, radius=28)
    draw.text((182, 680), spec["supporting_note"]["title"], font=fonts["card_title"], fill=palette["ink"])
    helpers["draw_text_block"](draw, spec["supporting_note"]["body"], fonts["card_body"], palette["muted"], (182, 718, 530, 54), 6, report, "workflow supporting note", max_lines=2)
    draw.text((822, 680), spec["signal_note"]["title"], font=fonts["card_title"], fill=palette["ink"])
    helpers["draw_text_block"](draw, spec["signal_note"]["body"], fonts["card_body"], palette["muted"], (822, 718, 550, 54), 6, report, "workflow signal note", max_lines=2)
