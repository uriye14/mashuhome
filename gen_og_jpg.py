"""
把 images/recipes/ 下所有 .webp 文件转成同名 .jpg
用于微信分享卡片（微信爬虫不支持 WebP 的 og:image）
"""
from PIL import Image
import os

recipes_dir = r'D:\YCH\AI\mashuhome\images\recipes'

converted = 0
for fname in os.listdir(recipes_dir):
    if not fname.endswith('.webp'):
        continue
    webp_path = os.path.join(recipes_dir, fname)
    jpg_path  = os.path.join(recipes_dir, fname[:-5] + '.jpg')
    if os.path.exists(jpg_path):
        print(f'跳过（已存在）: {fname[:-5]}.jpg')
        continue
    img = Image.open(webp_path).convert('RGB')
    img.save(jpg_path, 'JPEG', quality=85)
    print(f'转换完成: {fname} → {fname[:-5]}.jpg')
    converted += 1

print(f'\n共转换 {converted} 张图片')
