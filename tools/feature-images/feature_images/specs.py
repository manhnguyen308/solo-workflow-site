from __future__ import annotations

import json
from pathlib import Path


PACKAGE_ROOT = Path(__file__).resolve().parent
TOOLS_ROOT = PACKAGE_ROOT.parent
REPO_ROOT = TOOLS_ROOT.parent.parent
DATA_ROOT = PACKAGE_ROOT / "data"


def load_all_specs() -> list[dict]:
    specs: list[dict] = []
    for path in sorted(DATA_ROOT.rglob("*.json")):
        spec = json.loads(path.read_text(encoding="utf-8"))
        spec["_config_path"] = path
        specs.append(spec)
    return specs


def get_spec(image_id: str) -> dict:
    for spec in load_all_specs():
        if spec["id"] == image_id:
            return spec
    raise KeyError(f"Feature image id not found: {image_id}")
