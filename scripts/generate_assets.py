import sys
sys.path.insert(0, r"E:\python_libs")
import os
from PIL import Image, ImageDraw, ImageFilter
import numpy as np

PUBLIC_DIR = r"E:\Freelance\3D2 portfolio\public"

# ── 1. Fix transparent profile image ──────────────────────────────────────────
print("Processing profile image...")
img = Image.open(r"E:\Freelance\3D2 portfolio\Image 1.png").convert("RGBA")
data = np.array(img, dtype=np.float64)
r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
# Remove white/near-white background
white = (r > 240) & (g > 240) & (b > 240)
data[:, :, 3][white] = 0
# Feather edges
near = (r > 200) & (g > 200) & (b > 200) & (~white)
bright = (r[near] + g[near] + b[near]) / 3.0
data[:, :, 3][near] = np.clip(((255.0 - bright) / 55.0) * 255.0, 0, 255)
out = Image.fromarray(data.astype(np.uint8))
out.save(os.path.join(PUBLIC_DIR, "profile-transparent.png"), "PNG")
print("  ✓ profile-transparent.png saved")


# ── 2. Priora dashboard background ───────────────────────────────────────────
print("Creating Priora background...")
W, H = 1200, 700
img = Image.new("RGB", (W, H), "#050810")
draw = ImageDraw.Draw(img)

# Gradient base
for y in range(H):
    t = y / H
    r_v = int(5 + 8*t)
    g_v = int(8 + 12*t)
    b_v = int(16 + 25*t)
    draw.line([(0,y),(W,y)], fill=(r_v, g_v, b_v))

# Blue glow blobs
glow_img = Image.new("RGBA", (W, H), (0,0,0,0))
gd = ImageDraw.Draw(glow_img)
# Left glow
for r_off in range(200, 0, -20):
    alpha = int(15 * (1 - r_off/200))
    gd.ellipse([100-r_off, 180-r_off, 100+r_off, 180+r_off], fill=(30, 100, 255, alpha))
# Right glow
for r_off in range(180, 0, -20):
    alpha = int(12 * (1 - r_off/180))
    gd.ellipse([900-r_off, 400-r_off, 900+r_off, 400+r_off], fill=(80, 40, 200, alpha))
glow_blurred = glow_img.filter(ImageFilter.GaussianBlur(radius=60))
img.paste(Image.alpha_composite(img.convert("RGBA"), glow_blurred).convert("RGB"))

# UI grid lines
draw = ImageDraw.Draw(img)
for x in range(0, W, 60):
    draw.line([(x, 0), (x, H)], fill=(255, 255, 255, 8), width=1)
for y in range(0, H, 60):
    draw.line([(0, y), (W, y)], fill=(255, 255, 255, 8), width=1)

# Dashboard panel rects
panels = [
    (40, 60, 320, 200, (20, 60, 120)),
    (340, 60, 700, 200, (15, 50, 110)),
    (720, 60, 1160, 200, (18, 55, 115)),
    (40, 220, 700, 420, (12, 45, 105)),
    (720, 220, 1160, 420, (16, 52, 112)),
    (40, 440, 460, 640, (14, 48, 108)),
    (480, 440, 1160, 640, (13, 46, 106)),
]
for (x1,y1,x2,y2,col) in panels:
    panel_img = Image.new("RGBA", (x2-x1, y2-y1), col+(60,))
    img.paste(Image.alpha_composite(
        Image.new("RGBA", (x2-x1, y2-y1), (0,0,0,0)), panel_img
    ).convert("RGB"), (x1,y1))
    draw.rectangle([x1,y1,x2,y2], outline=(40,120,255,80), width=1)

# Simulated bar chart
bar_x = 60
for i, h_bar in enumerate([80, 120, 60, 140, 100, 90, 130]):
    bx = 480 + i * 90
    draw.rectangle([bx, 540-h_bar, bx+50, 540], fill=(40, 120, 255))

img.save(os.path.join(PUBLIC_DIR, "priora-bg.png"), "PNG")
print("  ✓ priora-bg.png saved")


# ── 3. Aegis security background ─────────────────────────────────────────────
print("Creating Aegis background...")
img = Image.new("RGB", (W, H), "#050808")
draw = ImageDraw.Draw(img)
for y in range(H):
    t = y / H
    draw.line([(0,y),(W,y)], fill=(int(5+10*t), int(5+5*t), int(8+8*t)))

glow_img = Image.new("RGBA", (W, H), (0,0,0,0))
gd = ImageDraw.Draw(glow_img)
for r_off in range(250, 0, -20):
    alpha = int(18 * (1 - r_off/250))
    gd.ellipse([200-r_off, 200-r_off, 200+r_off, 200+r_off], fill=(200, 40, 40, alpha))
for r_off in range(180, 0, -20):
    alpha = int(14 * (1 - r_off/180))
    gd.ellipse([1000-r_off, 350-r_off, 1000+r_off, 350+r_off], fill=(200, 100, 20, alpha))
glow_blurred = glow_img.filter(ImageFilter.GaussianBlur(radius=70))
img.paste(Image.alpha_composite(img.convert("RGBA"), glow_blurred).convert("RGB"))

draw = ImageDraw.Draw(img)
for x in range(0, W, 50):
    draw.line([(x, 0), (x, H)], fill=(255,255,255,5), width=1)

# Risk heatmap cells
colors = [(200,40,40), (220,100,20), (200,40,40), (180,30,30), (220,100,20),
          (160,160,20), (220,100,20), (200,40,40), (180,30,30), (160,160,20)]
for idx, col in enumerate(colors):
    cx = 80 + (idx % 5) * 120
    cy = 120 + (idx // 5) * 100
    heat_img = Image.new("RGBA", (100, 80), col+(100,))
    img.paste(Image.alpha_composite(Image.new("RGBA",(100,80),(0,0,0,0)), heat_img).convert("RGB"), (cx,cy))
    draw.rectangle([cx,cy,cx+100,cy+80], outline=(*col,120), width=1)

# Alert sidebar
for i, col in enumerate([(200,40,40), (220,100,20), (160,160,20), (40,160,40)]):
    draw.rectangle([750, 80+i*80, 1160, 140+i*80], fill=(col[0]//6, col[1]//6, col[2]//6))
    draw.rectangle([750, 80+i*80, 762, 140+i*80], fill=col)

img.save(os.path.join(PUBLIC_DIR, "aegis-bg.png"), "PNG")
print("  ✓ aegis-bg.png saved")


# ── 4. Builder canvas background ─────────────────────────────────────────────
print("Creating Builder background...")
img = Image.new("RGB", (W, H), "#040609")
draw = ImageDraw.Draw(img)
for y in range(H):
    t = y / H
    draw.line([(0,y),(W,y)], fill=(int(4+6*t), int(6+8*t), int(9+14*t)))

glow_img = Image.new("RGBA", (W, H), (0,0,0,0))
gd = ImageDraw.Draw(glow_img)
for r_off in range(220, 0, -20):
    alpha = int(16 * (1 - r_off/220))
    gd.ellipse([350-r_off, 300-r_off, 350+r_off, 300+r_off], fill=(20, 180, 180, alpha))
for r_off in range(160, 0, -20):
    alpha = int(14 * (1 - r_off/160))
    gd.ellipse([900-r_off, 200-r_off, 900+r_off, 200+r_off], fill=(120, 40, 200, alpha))
glow_blurred = glow_img.filter(ImageFilter.GaussianBlur(radius=65))
img.paste(Image.alpha_composite(img.convert("RGBA"), glow_blurred).convert("RGB"))

draw = ImageDraw.Draw(img)
# Dot grid
for x in range(30, W, 40):
    for y in range(30, H, 40):
        draw.ellipse([x-1, y-1, x+1, y+1], fill=(255,255,255,30))

# Node circles
nodes = [(150,200), (350,150), (550,280), (350,380), (750,180), (900,300), (700,420), (1050,200)]
for (nx, ny) in nodes:
    draw.ellipse([nx-18,ny-18,nx+18,ny+18], fill=(15,50,70), outline=(20,200,200,180), width=2)
    draw.ellipse([nx-6,ny-6,nx+6,ny+6], fill=(20,200,200))

# Connection lines
connections = [(0,1),(1,2),(2,3),(1,3),(4,5),(5,6),(4,6),(5,7)]
node_colors = [(20,200,200), (120,40,200)]
for i,(a_i,b_i) in enumerate(connections):
    ax,ay = nodes[a_i]; bx,by = nodes[b_i]
    draw.line([(ax,ay),(bx,by)], fill=node_colors[i%2]+(120,), width=2)

img.save(os.path.join(PUBLIC_DIR, "builder-bg.png"), "PNG")
print("  ✓ builder-bg.png saved")

print("\n✅ All assets generated!")
