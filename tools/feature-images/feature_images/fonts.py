from functools import lru_cache
from pathlib import Path

from PIL import ImageFont


WINDOWS_FONTS = Path("C:/Windows/Fonts")

# Windows faces come first: Georgia and Segoe UI are the fallbacks in the site's own
# font stacks. Liberation/DejaVu only keep Linux runs working; they look different,
# so publish images generated on Windows.
FACES = {
    "title": (
        ["georgiab.ttf"],
        ["/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf", "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf"],
    ),
    "label": (
        ["seguisb.ttf", "segoeuib.ttf", "arialbd.ttf"],
        ["/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"],
    ),
    "bold": (
        ["segoeuib.ttf", "arialbd.ttf"],
        ["/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"],
    ),
}


@lru_cache(maxsize=None)
def font(face: str, size: int) -> ImageFont.FreeTypeFont:
    windows_names, linux_paths = FACES[face]
    candidates = [WINDOWS_FONTS / name for name in windows_names] + [Path(path) for path in linux_paths]
    for path in candidates:
        if path.exists():
            return ImageFont.truetype(str(path), size=size)
    raise FileNotFoundError(f"No font found for '{face}'. Tried: {', '.join(str(path) for path in candidates)}")
