"""Crop and colour-grade the FourthWave photos into one deep-ocean tone.

usage: py -I tools/grade_photos.py .   (needs Pillow; writes assets/sections and assets/team)
"""
import os
import sys
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageOps

ROOT = sys.argv[1]
SRC = os.path.join(ROOT, "public", "images")
OUT_S = os.path.join(ROOT, "assets", "sections")
OUT_T = os.path.join(ROOT, "assets", "team")
os.makedirs(OUT_S, exist_ok=True)
os.makedirs(OUT_T, exist_ok=True)

# Shadows -> deep water -> brand blue -> warm highlight.
STOPS = [
    (0.00, (3, 6, 10)),
    (0.30, (6, 26, 46)),
    (0.62, (0, 98, 178)),
    (0.86, (40, 168, 255)),
    (1.00, (255, 222, 160)),
]


def lut():
    out = []
    for c in range(3):
        for i in range(256):
            x = i / 255
            for (a, ca), (b, cb) in zip(STOPS, STOPS[1:]):
                if a <= x <= b:
                    t = (x - a) / (b - a)
                    out.append(round(ca[c] + (cb[c] - ca[c]) * t))
                    break
    return out


LUT = lut()


def grade(im, keep=0.0, contrast=1.15):
    """Gradient-map the luminance; keep a little of the original colour if asked."""
    im = im.convert("RGB")
    g = ImageOps.autocontrast(im.convert("L"), cutoff=1)
    g = ImageEnhance.Contrast(g).enhance(contrast)
    mapped = Image.merge("RGB", (g, g, g)).point(LUT)
    if keep:
        mapped = Image.blend(mapped, im, keep)
    return mapped


def crop_frac(im, l, t, r, b):
    w, h = im.size
    return im.crop((int(l * w), int(t * h), int(r * w), int(b * h)))


def fit(im, aspect, cx=0.5, cy=0.5):
    """Largest crop of the given aspect (w/h) centred near (cx, cy)."""
    w, h = im.size
    if w / h > aspect:
        nw, nh = int(h * aspect), h
    else:
        nw, nh = w, int(w / aspect)
    x = min(max(int(cx * w - nw / 2), 0), w - nw)
    y = min(max(int(cy * h - nh / 2), 0), h - nh)
    return im.crop((x, y, x + nw, y + nh))


def soften(im, box, radius=45):
    """Blur away a small distracting object (a logo, a wallpaper word)."""
    w, h = im.size
    x0, y0, x1, y1 = int(box[0] * w), int(box[1] * h), int(box[2] * w), int(box[3] * h)
    blurred = im.filter(ImageFilter.GaussianBlur(radius))
    mask = Image.new("L", im.size, 0)
    ImageDraw.Draw(mask).ellipse((x0, y0, x1, y1), fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(radius / 2))
    return Image.composite(blurred, im, mask)


def save(im, name, width):
    im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    im.save(os.path.join(OUT_S, name), "WEBP", quality=80, method=6)


# Each section: the source, what to blur out, then a wide and a tall crop.
SECTIONS = {
    "web": dict(src="web-development.jpg",
                # Drop the shelf and the framed pictures above the monitors.
                region=(0.0, 0.42, 1.0, 0.95), blur=[], wide=(0.5, 0.45), tall=(0.42, 0.5)),
    "mobile": dict(src="mobile-development.jpg",
                   # The wall TV and its wallpaper go; keep monitors, keyboard and PC.
                   region=(0.0, 0.40, 1.0, 0.98), blur=[(0.30, 0.50, 0.76, 0.71)], wide=(0.45, 0.5), tall=(0.32, 0.5)),
    "video": dict(src="video-editing.jpg",
                  # Below the TV: the editor at the desk.
                  region=(0.0, 0.48, 1.0, 1.0), blur=[(0.27, 0.60, 0.43, 0.71), (0.02, 0.75, 0.22, 0.86)], wide=(0.5, 0.45), tall=(0.55, 0.5)),
    "marketing": dict(src="digital-marketing.jpg",
                      region=(0.0, 0.0, 1.0, 1.0), blur=[(0.44, 0.56, 0.64, 0.70)], wide=(0.5, 0.55), tall=(0.5, 0.5)),
}

for name, s in SECTIONS.items():
    im = Image.open(os.path.join(SRC, "services", s["src"])).convert("RGB")
    for box in s["blur"]:
        im = soften(im, box)
    im = crop_frac(im, *s["region"])
    graded = grade(im, keep=0.08)
    save(fit(graded, 16 / 9, *s["wide"]), f"{name}-wide.webp", 1920)
    save(fit(graded, 9 / 14, *s["tall"]), f"{name}-tall.webp", 900)
    print(name, "ok")

# Team: the matching studio portraits (same wall, same t-shirt) in
# public/images/team/generated/, cut from one 2x2 grid. Same 3:4 crop and
# tone for all four; a colour version for hover.
TEAM = {
    "adem-halilovic": dict(src="generated/adem-halilovic.jpg", box=(0, 0, 1, 1)),
    "kenan-cosic": dict(src="generated/kenan-cosic.jpg", box=(0, 0, 1, 1)),
    "ammar-kahrimanovic": dict(src="generated/ammar-kahrimanovic.jpg", box=(0, 0, 1, 1)),
    "sumeja-halilovic": dict(src="generated/sumeja-halilovic.jpg", box=(0, 0, 1, 1)),
}

for name, s in TEAM.items():
    im = Image.open(os.path.join(SRC, "team", s["src"])).convert("RGB")
    im = crop_frac(im, *s["box"])
    im = fit(im, 3 / 4, 0.5, 0.5)
    im = im.resize((600, 800), Image.LANCZOS)
    grade(im, keep=0.12, contrast=1.1).save(os.path.join(OUT_T, f"{name}.webp"), "WEBP", quality=82, method=6)
    ImageEnhance.Color(im).enhance(0.9).save(os.path.join(OUT_T, f"{name}-color.webp"), "WEBP", quality=82, method=6)
    print(name, "ok")
