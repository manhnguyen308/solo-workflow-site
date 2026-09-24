from __future__ import annotations

from PIL import Image, ImageDraw


CANVAS_WIDTH = 1600
CANVAS_HEIGHT = 900


def create_canvas(width: int = CANVAS_WIDTH, height: int = CANVAS_HEIGHT, background: str = "#ffffff") -> tuple[Image.Image, ImageDraw.ImageDraw]:
    image = Image.new("RGB", (width, height), background)
    return image, ImageDraw.Draw(image)
