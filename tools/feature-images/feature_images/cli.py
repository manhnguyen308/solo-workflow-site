from __future__ import annotations

import argparse
from pathlib import Path

from .canvas import create_canvas
from .drawing import draw_text_block, linear_gradient, pill, rounded_box, shadowed_box
from .exporter import ensure_output_path, export_webp
from .fonts import get_font_set
from .palette import get_palette
from .specs import REPO_ROOT, get_spec, load_all_specs
from .templates import TEMPLATES
from .validation import ValidationReport


def build_context(spec: dict) -> dict:
    image, draw = create_canvas()
    palette = get_palette(spec.get("palette", "workflow"))
    fonts = get_font_set()
    report = ValidationReport(spec["id"])
    linear_gradient(image, palette["bg_top"], palette["bg_bottom"])
    return {
        "image": image,
        "draw": draw,
        "palette": palette,
        "fonts": fonts,
        "report": report,
        "helpers": {
            "draw_text_block": draw_text_block,
            "pill": pill,
            "rounded_box": rounded_box,
            "shadowed_box": shadowed_box,
        },
    }


def render_spec(spec: dict) -> Path:
    renderer = TEMPLATES[spec["layout"]]
    context = build_context(spec)
    renderer(spec, context)
    output_path = ensure_output_path(REPO_ROOT / spec["output_path"], REPO_ROOT)
    export_webp(context["image"], output_path)
    context["report"].print_warnings()
    print(f"GENERATED [{spec['id']}] {output_path}")
    return output_path


def main_generate_one() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--id", required=True)
    args = parser.parse_args()
    render_spec(get_spec(args.id))
    return 0


def main_generate_many() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--category")
    parser.add_argument("--layout")
    args = parser.parse_args()
    specs = load_all_specs()
    if args.category:
        specs = [spec for spec in specs if spec.get("category") == args.category]
    if args.layout:
        specs = [spec for spec in specs if spec.get("layout") == args.layout]
    if not specs:
        raise SystemExit("No feature-image configs matched the requested filters.")
    for spec in specs:
        render_spec(spec)
    return 0


def main_generate_all() -> int:
    for spec in load_all_specs():
        render_spec(spec)
    return 0
