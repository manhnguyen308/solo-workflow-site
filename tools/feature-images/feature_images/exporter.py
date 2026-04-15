from __future__ import annotations

from pathlib import Path


def ensure_output_path(path: Path, repo_root: Path) -> Path:
    resolved = path.resolve()
    allowed_root = (repo_root / "static" / "images" / "features").resolve()
    if allowed_root not in resolved.parents:
        raise ValueError(f"Output path must stay inside {allowed_root}: {resolved}")
    resolved.parent.mkdir(parents=True, exist_ok=True)
    return resolved


def export_webp(image, output_path: Path) -> None:
    image.save(output_path, format="WEBP", quality=82, method=6)
