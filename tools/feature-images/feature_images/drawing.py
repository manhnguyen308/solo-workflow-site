from __future__ import annotations

from PIL import ImageColor


def rounded_box(draw, box, fill, outline=None, width=1, radius=26):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def shadowed_box(draw, box, fill, outline, shadow, radius=26, offset=8):
    x1, y1, x2, y2 = box
    draw.rounded_rectangle((x1, y1 + offset, x2, y2 + offset), radius=radius, fill=shadow)
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=3)


def pill(draw, box, fill, text, font, text_fill):
    draw.rounded_rectangle(box, radius=(box[3] - box[1]) // 2, fill=fill)
    text_box = draw.textbbox((0, 0), text, font=font)
    text_width = text_box[2] - text_box[0]
    text_height = text_box[3] - text_box[1]
    x = box[0] + ((box[2] - box[0]) - text_width) / 2
    y = box[1] + ((box[3] - box[1]) - text_height) / 2 - 2
    draw.text((x, y), text, font=font, fill=text_fill)


def connector(draw, start, end, color, width=8):
    draw.line([start, end], fill=color, width=width)
    draw.ellipse((end[0] - 10, end[1] - 10, end[0] + 10, end[1] + 10), fill=color)


def wrap_text(draw, text, font, max_width):
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        trial = word if not current else f"{current} {word}"
        trial_box = draw.textbbox((0, 0), trial, font=font)
        if (trial_box[2] - trial_box[0]) <= max_width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_text_block(draw, text, font, fill, bounds, line_gap, report, warning_label, max_lines=None):
    x, y, width, height = bounds
    lines = wrap_text(draw, text, font, width)
    if max_lines is not None and len(lines) > max_lines:
        report.warn(f"{warning_label} exceeded {max_lines} lines; truncating.")
        lines = lines[:max_lines]
        if lines:
            lines[-1] = lines[-1].rstrip(". ") + "..."

    metrics = draw.textbbox((0, 0), "Ag", font=font)
    line_height = metrics[3] - metrics[1]
    total_height = (line_height * len(lines)) + (line_gap * max(0, len(lines) - 1))
    if total_height > height:
        report.warn(f"{warning_label} exceeded box height.")

    cursor_y = y
    for line in lines:
        draw.text((x, cursor_y), line, font=font, fill=fill)
        cursor_y += line_height + line_gap


def linear_gradient(image, top_color, bottom_color):
    width, height = image.size
    top_rgb = ImageColor.getrgb(top_color)
    bottom_rgb = ImageColor.getrgb(bottom_color)
    for y in range(height):
        ratio = y / max(height - 1, 1)
        color = tuple(int(top_rgb[i] + (bottom_rgb[i] - top_rgb[i]) * ratio) for i in range(3))
        image.paste(color, (0, y, width, y + 1))
