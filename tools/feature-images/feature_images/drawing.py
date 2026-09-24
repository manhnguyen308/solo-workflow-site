from __future__ import annotations

import re

from .fonts import font


def _tokens(text, break_hyphens):
    # (piece, joiner) pairs; with break_hyphens, "Proposal-to-Contract" can wrap after each hyphen.
    tokens = []
    for word in text.split():
        pieces = re.findall(r"[^-]+-?|-", word) if break_hyphens else [word]
        for index, piece in enumerate(pieces):
            tokens.append((piece, "" if index else " "))
    return tokens


def wrap_text(draw, text, text_font, max_width, break_hyphens=False):
    lines: list[str] = []
    current = ""
    for piece, joiner in _tokens(text, break_hyphens):
        trial = piece if not current else f"{current}{joiner}{piece}"
        if draw.textlength(trial, font=text_font) <= max_width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = piece
    if current:
        lines.append(current)
    return lines


def lines_fit(draw, lines, text_font, width, max_lines):
    if len(lines) > max_lines or max(draw.textlength(line, font=text_font) for line in lines) > width:
        return False
    # Reject a lone symbol such as "+" or "&" stranded on its own line.
    return len(lines) == 1 or all(len(line) > 2 for line in lines)


def fit_text(draw, text, face, width, start, floor, max_lines, step=2):
    """Largest size from `start` down to `floor` where `text` wraps into `max_lines` within `width`.

    Whole words are tried first; breaking after hyphens is the fallback.
    Returns (font, lines, fits); `fits` is False when even `floor` is too big.
    """
    for break_hyphens in (False, True):
        size = start
        while size >= floor:
            text_font = font(face, size)
            lines = wrap_text(draw, text, text_font, width, break_hyphens)
            if lines_fit(draw, lines, text_font, width, max_lines):
                return text_font, lines, True
            size -= step
    text_font = font(face, floor)
    return text_font, wrap_text(draw, text, text_font, width, True), False


def tracked_text(draw, xy, text, text_font, fill, spacing):
    x, y = xy
    for char in text:
        draw.text((x, y), char, font=text_font, fill=fill)
        x += draw.textlength(char, font=text_font) + spacing
