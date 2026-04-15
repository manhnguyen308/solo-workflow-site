def render_timeline_cover(spec, context):
    draw = context["draw"]
    palette = context["palette"]
    fonts = context["fonts"]
    report = context["report"]
    helpers = context["helpers"]

    helpers["shadowed_box"](draw, (96, 84, 1504, 816), palette["frame"], palette["stroke"], palette["shadow"], radius=42)
    helpers["pill"](draw, (150, 128, 342, 174), palette["accent_soft"], spec.get("eyebrow", "Editorial cover"), fonts["pill"], palette["accent"])
    draw.text((150, 208), spec["title"], font=fonts["title"], fill=palette["ink"])
    helpers["draw_text_block"](draw, spec.get("subtitle", ""), fonts["subtitle"], palette["muted"], (150, 282, 780, 72), 8, report, "timeline subtitle", max_lines=2)
    helpers["rounded_box"](draw, (150, 410, 1450, 722), fill="#f8fbfd", outline=palette["stroke"], width=2, radius=34)
    timeline = spec.get("timeline", [])
    if not timeline:
        report.warn("timeline_cover template has no timeline items configured.")
        return
    start_x = 250
    end_x = 1350
    step = (end_x - start_x) / max(len(timeline) - 1, 1)
    draw.line((start_x, 570, end_x, 570), fill=palette["accent"], width=8)
    for index, item in enumerate(timeline):
        x = int(start_x + (step * index))
        draw.ellipse((x - 16, 554, x + 16, 586), fill=palette["accent"])
        helpers["rounded_box"](draw, (x - 120, 462, x + 120, 534), fill="#ffffff", outline=palette["stroke"], width=2, radius=24)
        helpers["pill"](draw, (x - 80, 606, x + 80, 644), palette["accent_soft"], item["label"], fonts["small"], palette["accent"])
