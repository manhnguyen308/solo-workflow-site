from __future__ import annotations

import argparse
from pathlib import Path

from .canvas import create_canvas
from .exporter import ensure_output_path, export_image
from .palette import PAPER
from .specs import REPO_ROOT, get_spec, load_all_specs
from .templates import render_editorial_cover
from .validation import ValidationReport


def build_context(spec: dict) -> dict:
    image, draw = create_canvas(background=PAPER)
    return {"image": image, "draw": draw, "report": ValidationReport(spec["id"])}


def render_spec(spec: dict) -> Path:
    context = build_context(spec)
    render_editorial_cover(spec, context)
    output_path = ensure_output_path(REPO_ROOT / spec["output_path"], REPO_ROOT)
    export_image(context["image"], output_path)
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
