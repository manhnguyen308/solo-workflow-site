from ..drawing import fit_text, lines_fit, tracked_text, wrap_text
from ..fonts import font
from ..palette import AMBER, INK, INK_MID, NAVY, NAVY_SOFT, PAPER, RULE


CATEGORY_LABELS = {
    "workflows": "Workflow",
    "comparisons": "Comparison",
    "templates": "Template",
    "glossary": "Glossary",
    "faq": "FAQ",
    "hubs": "Guide hub",
    "blueprints": "Stack blueprint",
    "site": "SoloOpsGuide",
}

STROKE = 7
MOTIF_BOX = (960, 210, 1480, 690)


def render_editorial_cover(spec, context):
    draw = context["draw"]
    report = context["report"]
    motif = MOTIFS.get(spec["layout"])
    if motif is None:
        raise ValueError(f"[{spec['id']}] layout '{spec['layout']}' has no cover drawing; use one of {sorted(MOTIFS)}.")

    draw.rectangle((40, 40, 1560, 860), outline=RULE, width=3)
    draw.rectangle((110, 128, 190, 136), fill=AMBER)
    tracked_text(draw, (110, 160), CATEGORY_LABELS[spec["category"]].upper(), font("label", 34), NAVY, spacing=5)

    title_font, lines, fits = fit_text(draw, spec["title"], "title", width=760, start=112, floor=72, max_lines=3)
    if not fits:
        report.warn("title does not fit in 3 lines at 72px; shorten it.")
    y = 250
    for line in lines:
        draw.text((110, y), line, font=title_font, fill=INK)
        y += round(title_font.size * 1.16)

    draw.text((110, 776), "soloopsguide.com", font=font("label", 32), fill=INK_MID)
    motif(draw, spec, MOTIF_BOX, report)


def _labels(draw, report, texts, widths, start, floor, max_lines, name):
    """One label size for the whole drawing: the largest size at which every label fits."""
    size = min(fit_text(draw, text, "label", width, start, floor, max_lines)[0].size for text, width in zip(texts, widths))
    label_font = font("label", size)
    wrapped = []
    for text, width in zip(texts, widths):
        lines = wrap_text(draw, text, label_font, width)
        if not lines_fit(draw, lines, label_font, width, max_lines):
            report.warn(f"{name} '{text}' does not fit; shorten it.")
        wrapped.append(lines)
    return label_font, wrapped


def _workflow(draw, spec, box, report):
    # Numbered steps on a vertical line; the last step is the outcome.
    x1, y1, x2, y2 = box
    items = spec["items"]
    radius = 34
    cx = x1 + radius + 10
    label_x = cx + radius + 34
    gap = (y2 - y1 - 2 * radius) / max(len(items) - 1, 1)
    label_font, labels = _labels(draw, report, [item["label"] for item in items], [x2 - label_x] * len(items), 44, 30, 1, "workflow step")
    draw.line((cx, y1 + radius, cx, y2 - radius), fill=NAVY, width=STROKE)
    for index, lines in enumerate(labels):
        cy = y1 + radius + index * gap
        last = index == len(items) - 1
        draw.ellipse((cx - radius, cy - radius, cx + radius, cy + radius), fill=AMBER if last else NAVY_SOFT, outline=NAVY, width=STROKE)
        draw.text((cx, cy), str(index + 1), font=font("bold", 30), fill=PAPER if last else NAVY, anchor="mm")
        draw.text((label_x, cy), lines[0], font=label_font, fill=INK, anchor="lm")


def _comparison(draw, spec, box, report):
    # Two option panels with a "vs" badge between them.
    x1, y1, x2, y2 = box
    gap = 70
    panel_width = (x2 - x1 - gap) / 2
    sides = (spec["left"], spec["right"])
    label_font, labels = _labels(draw, report, [side["kicker"] for side in sides], [panel_width - 40] * 2, 34, 26, 2, "comparison option")
    line_height = round(label_font.size * 1.2)
    for index, lines in enumerate(labels):
        px = x1 + index * (panel_width + gap)
        draw.rectangle((px, y1 + 40, px + panel_width, y2 - 40), fill=NAVY_SOFT if index == 0 else PAPER, outline=NAVY, width=STROKE)
        for row in range(3):
            ly = y1 + 120 + row * 70
            draw.line((px + 36, ly, px + panel_width - 36 - row * 40, ly), fill=NAVY, width=STROKE)
        ly = y2 - 70 - (len(lines) - 1) * line_height
        for line in lines:
            draw.text((px + panel_width / 2, ly), line, font=label_font, fill=INK, anchor="mm")
            ly += line_height
    mx, my = (x1 + x2) / 2, (y1 + y2) / 2
    draw.ellipse((mx - 44, my - 44, mx + 44, my + 44), fill=AMBER)
    draw.text((mx, my), "vs", font=font("bold", 40), fill=PAPER, anchor="mm")


def _checklist(draw, spec, box, report):
    # Four checklist rows, three ticked.
    x1, y1, x2, y2 = box
    row_height = (y2 - y1) / 4
    size = 30
    for row in range(4):
        cy = y1 + row * row_height + row_height / 2
        ticked = row < 3
        draw.rectangle((x1, cy - size, x1 + 2 * size, cy + size), fill=AMBER if ticked else None, outline=NAVY, width=STROKE)
        if ticked:
            draw.line((x1 + 14, cy, x1 + 26, cy + 14, x1 + 48, cy - 14), fill=PAPER, width=8, joint="curve")
        draw.line((x1 + 2 * size + 40, cy, x2 - (row % 2) * 90, cy), fill=NAVY, width=STROKE)


def _faq(draw, spec, box, report):
    x1, y1, x2, y2 = box
    mx, my = (x1 + x2) / 2, (y1 + y2) / 2
    draw.rectangle((mx - 170, y1, mx + 170, y2), fill=NAVY_SOFT, outline=NAVY, width=STROKE)
    draw.text((mx, my), "?", font=font("title", 330), fill=AMBER, anchor="mm")


def _glossary(draw, spec, box, report):
    # A definition card: the term, an accent rule, and text lines filling the space left.
    x1, y1, x2, y2 = box
    card_top, card_bottom = y1 + 30, y2 - 30
    draw.rectangle((x1, card_top, x2, card_bottom), fill=NAVY_SOFT, outline=NAVY, width=STROKE)
    term_font, lines, fits = fit_text(draw, spec["concept"], "title", width=(x2 - x1) - 88, start=58, floor=40, max_lines=2)
    if not fits:
        report.warn(f"glossary term '{spec['concept']}' does not fit; shorten it.")
    ty = card_top + 50
    for line in lines:
        draw.text((x1 + 44, ty), line, font=term_font, fill=INK)
        ty += round(term_font.size * 1.2)
    rule_y = ty + 24
    draw.line((x1 + 44, rule_y, x1 + 150, rule_y), fill=AMBER, width=10)
    first, last = rule_y + 60, card_bottom - 48
    row_gap = min(64, (last - first) / 2)
    for row in range(3):
        ly = first + row * row_gap
        draw.line((x1 + 44, ly, x2 - 44 - row * 70, ly), fill=NAVY, width=STROKE)


def _hub(draw, spec, box, report):
    # Four tiles for the pages the hub routes to; the first is highlighted.
    x1, y1, x2, y2 = box
    gap = 36
    tile_width = (x2 - x1 - gap) / 2
    tile_height = (y2 - y1 - gap) / 2
    modules = spec["modules"][:4]
    label_font, labels = _labels(draw, report, [module["title"] for module in modules], [tile_width - 44] * len(modules), 34, 26, 2, "hub tile")
    line_height = round(label_font.size * 1.2)
    for index, lines in enumerate(labels):
        tx = x1 + (index % 2) * (tile_width + gap)
        ty = y1 + (index // 2) * (tile_height + gap)
        first = index == 0
        draw.rectangle((tx, ty, tx + tile_width, ty + tile_height), fill=AMBER if first else NAVY_SOFT, outline=NAVY, width=STROKE)
        ly = ty + tile_height - 30 - len(lines) * line_height
        for line in lines:
            draw.text((tx + 22, ly), line, font=label_font, fill=PAPER if first else INK)
            ly += line_height


def _blueprint(draw, spec, box, report):
    # Three stacked layers, narrowing upwards; the base layer is highlighted.
    x1, y1, x2, y2 = box
    layer_height = (y2 - y1) / 3
    layers = spec["stack_layers"][:3]
    insets = [index * 40 for index in range(len(layers))]
    label_font, labels = _labels(draw, report, [layer["title"] for layer in layers], [(x2 - x1) - 2 * inset - 60 for inset in insets], 34, 24, 2, "stack layer")
    line_height = round(label_font.size * 1.2)
    for index, (inset, lines) in enumerate(zip(insets, labels)):
        ly = y2 - (index + 1) * layer_height + 10
        base = index == 0
        draw.rectangle((x1 + inset, ly, x2 - inset, ly + layer_height - 30), fill=AMBER if base else NAVY_SOFT, outline=NAVY, width=STROKE)
        ty = ly + (layer_height - 30) / 2 - (len(lines) - 1) * line_height / 2
        for line in lines:
            draw.text((x1 + inset + 30, ty), line, font=label_font, fill=PAPER if base else INK, anchor="lm")
            ty += line_height


MOTIFS = {
    "workflow_map": _workflow,
    "comparison_split": _comparison,
    "checklist_card": _checklist,
    "faq_card": _faq,
    "concept_map": _glossary,
    "hub_overview": _hub,
    "stack_blueprint": _blueprint,
}
