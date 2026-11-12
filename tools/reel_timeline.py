"""Build the edit timeline for the video section from assets/content/reel-loop.mp4.

Finds the cuts, writes one small thumbnail per clip to assets/content/reel/
and prints the <li> markup for the timeline track in index.html.

usage: py -I tools/reel_timeline.py .   (needs ffmpeg and ffprobe on PATH)
"""
import os
import re
import subprocess
import sys

ROOT = sys.argv[1]
SRC = os.path.join(ROOT, "assets", "content", "reel-loop.mp4")
OUT = os.path.join(ROOT, "assets", "content", "reel")
os.makedirs(OUT, exist_ok=True)

dur = float(subprocess.check_output(
    ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", SRC], text=True))

log = subprocess.run(
    ["ffmpeg", "-hide_banner", "-i", SRC, "-an", "-vf", "scale=320:-1,select='gt(scene,0.32)',showinfo",
     "-f", "null", "-"], capture_output=True, text=True).stderr
cuts = [float(x) for x in re.findall(r"pts_time:([0-9.]+)", log)]

# Clips shorter than this are flashes inside a transition: fold them in.
MIN = 0.7
edges = [0.0]
for c in cuts:
    if c - edges[-1] >= MIN:
        edges.append(c)
if dur - edges[-1] < MIN:
    edges.pop()
edges.append(dur)

items = []
for i, (a, b) in enumerate(zip(edges, edges[1:])):
    name = f"{i + 1:02d}.webp"
    subprocess.run(
        ["ffmpeg", "-v", "error", "-y", "-ss", f"{a + (b - a) * 0.45:.3f}", "-i", SRC, "-frames:v", "1",
         "-vf", "scale=128:96", "-quality", "70", os.path.join(OUT, name)], check=True)
    items.append(
        f'<li><button type="button" data-t="{a:.2f}" style="--w:{b - a:.2f}">'
        f'<img src="assets/content/reel/{name}" alt="" width="128" height="96" loading="lazy" decoding="async">'
        f"</button></li>")

print(f"{len(items)} clips, {dur:.2f}s", file=sys.stderr)
print("\n".join(items))
