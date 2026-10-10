"""Create production WebP copies; never modify the original PNG files.

Maintenance only: run with Python + Pillow, not required by Vite or the website.
"""
import hashlib
import json
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "assets" / "images"
OUTPUT = SOURCE / "optimized"
IMAGES = {
    "hero-desarrollador": (1448, "Hero principal"),
    "servicio-desarrollo-web": (960, "Servicios: páginas web y landing pages"),
    "servicio-apps-moviles": (960, "Servicio de aplicaciones móviles"),
    "servicio-sistemas-backend": (960, "Servicio de sistemas y software a medida"),
    "contacto-cotizacion": (720, "Sección de contacto"),
}


def optimize():
    OUTPUT.mkdir(exist_ok=True)
    rows = []
    for name, (width, usage) in IMAGES.items():
        source = SOURCE / f"{name}.png"
        target = OUTPUT / f"{name}.webp"
        source_hash = hashlib.sha256(source.read_bytes()).hexdigest()
        with Image.open(source) as original:
            before = {"bytes": source.stat().st_size, "dimensions": list(original.size),
                      "format": original.format, "mode": original.mode, "sha256": source_hash}
            image = ImageOps.exif_transpose(original).convert("RGBA")
            if image.width > width:
                image = image.resize((width, round(image.height * width / image.width)), Image.Resampling.LANCZOS)
            image.save(target, "WEBP", quality=90, method=6, alpha_quality=100, exact=True)
            with Image.open(target) as result:
                after = {"bytes": target.stat().st_size, "dimensions": list(result.size),
                         "format": result.format, "mode": result.mode}
        assert hashlib.sha256(source.read_bytes()).hexdigest() == source_hash
        rows.append({"name": name, "usage": usage, "before": before, "after": after,
                     "saved_bytes": before["bytes"] - after["bytes"],
                     "saved_percent": round(100 * (1 - after["bytes"] / before["bytes"]), 2)})
    before_total = sum(row["before"]["bytes"] for row in rows)
    after_total = sum(row["after"]["bytes"] for row in rows)
    report = {"quality": 90, "originals_preserved": True, "images": rows,
              "total_before": before_total, "total_after": after_total,
              "total_saved": before_total - after_total,
              "saved_percent": round(100 * (1 - after_total / before_total), 2)}
    (ROOT / "docs").mkdir(exist_ok=True)
    (ROOT / "docs" / "image-optimization.json").write_text(
        json.dumps(report, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(json.dumps(report, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    optimize()
