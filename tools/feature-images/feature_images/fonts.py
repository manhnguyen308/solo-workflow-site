from pathlib import Path

from PIL import ImageFont


WINDOWS_FONTS = Path("C:/Windows/Fonts")

LINUX_BOLD_FONTS = [
    "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    "/usr/share/fonts/truetype/ubuntu/Ubuntu-B.ttf",
]

LINUX_REGULAR_FONTS = [
    "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    "/usr/share/fonts/truetype/ubuntu/Ubuntu-R.ttf",
]

LINUX_SERIF_BOLD_FONTS = [
    "/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf",
]


def _load_font(candidates: list[str], size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    for candidate in candidates:
        path = WINDOWS_FONTS / candidate
        if path.exists():
            return ImageFont.truetype(str(path), size=size)
    return ImageFont.load_default()


def _load_font_cross_platform(windows_candidates: list[str], linux_candidates: list[str], size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    for candidate in windows_candidates:
        path = WINDOWS_FONTS / candidate
        if path.exists():
            return ImageFont.truetype(str(path), size=size)
    for candidate in linux_candidates:
        path = Path(candidate)
        if path.exists():
            return ImageFont.truetype(str(path), size=size)
    return ImageFont.load_default()


def get_font_set() -> dict[str, ImageFont.FreeTypeFont | ImageFont.ImageFont]:
    return {
        "eyebrow": _load_font_cross_platform(["arialbd.ttf", "segoeuib.ttf"], LINUX_BOLD_FONTS, 24),
        "title": _load_font_cross_platform(["georgiab.ttf", "arialbd.ttf"], LINUX_SERIF_BOLD_FONTS + LINUX_BOLD_FONTS, 54),
        "panel_title": _load_font_cross_platform(["georgiab.ttf", "arialbd.ttf"], LINUX_SERIF_BOLD_FONTS + LINUX_BOLD_FONTS, 40),
        "subtitle": _load_font_cross_platform(["arial.ttf", "segoeui.ttf"], LINUX_REGULAR_FONTS, 28),
        "card_title": _load_font_cross_platform(["arialbd.ttf", "segoeuib.ttf"], LINUX_BOLD_FONTS, 28),
        "card_body": _load_font_cross_platform(["arial.ttf", "segoeui.ttf"], LINUX_REGULAR_FONTS, 23),
        "pill": _load_font_cross_platform(["arialbd.ttf", "segoeuib.ttf"], LINUX_BOLD_FONTS, 22),
        "small": _load_font_cross_platform(["arial.ttf", "segoeui.ttf"], LINUX_REGULAR_FONTS, 20),
    }
