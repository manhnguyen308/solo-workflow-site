from pathlib import Path

from PIL import ImageFont


WINDOWS_FONTS = Path("C:/Windows/Fonts")


def _load_font(candidates: list[str], size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    for candidate in candidates:
        path = WINDOWS_FONTS / candidate
        if path.exists():
            return ImageFont.truetype(str(path), size=size)
    return ImageFont.load_default()


def get_font_set() -> dict[str, ImageFont.FreeTypeFont | ImageFont.ImageFont]:
    return {
        "eyebrow": _load_font(["arialbd.ttf", "segoeuib.ttf"], 24),
        "title": _load_font(["georgiab.ttf", "arialbd.ttf"], 54),
        "panel_title": _load_font(["georgiab.ttf", "arialbd.ttf"], 40),
        "subtitle": _load_font(["arial.ttf", "segoeui.ttf"], 28),
        "card_title": _load_font(["arialbd.ttf", "segoeuib.ttf"], 28),
        "card_body": _load_font(["arial.ttf", "segoeui.ttf"], 23),
        "pill": _load_font(["arialbd.ttf", "segoeuib.ttf"], 22),
        "small": _load_font(["arial.ttf", "segoeui.ttf"], 20),
    }
