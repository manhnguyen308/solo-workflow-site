from __future__ import annotations


class ValidationReport:
    def __init__(self, image_id: str) -> None:
        self.image_id = image_id
        self.warnings: list[str] = []

    def warn(self, message: str) -> None:
        self.warnings.append(message)

    def print_warnings(self) -> None:
        for warning in self.warnings:
            print(f"WARNING [{self.image_id}] {warning}")
