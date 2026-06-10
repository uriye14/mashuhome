from PIL import Image
import os

src = r'\\wsl.localhost\Ubuntu\home\uriye\.hermes\image_cache\img_59477db00986.jpg'
out_dir = r'images\recipes'
slug = 'mi-bu-ding'

img = Image.open(src)
print(f'Original size: {img.size}, mode: {img.mode}')

resized = img.resize((640, 520), Image.LANCZOS)
rgb = resized.convert('RGB') if resized.mode in ('RGBA', 'P', 'LA') else resized

jpg_path = os.path.join(out_dir, f'{slug}.jpg')
rgb.save(jpg_path, 'JPEG', quality=85)
print(f'Saved JPG: {jpg_path}')

webp_path = os.path.join(out_dir, f'{slug}.webp')
rgb.save(webp_path, 'WEBP', quality=80, method=6)
print(f'Saved WEBP: {webp_path}')
print('Done!')
