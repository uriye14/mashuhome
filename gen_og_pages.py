import re, os

with open(r'D:\YCH\AI\mashuhome\index.html', encoding='utf-8') as f:
    lines = f.readlines()

os.makedirs(r'D:\YCH\AI\mashuhome\recipe', exist_ok=True)
count = 0

for line in lines:
    line = line.strip()
    if not line.startswith('{id:'):
        continue

    id_m    = re.search(r"id:(\d+)", line)
    title_m = re.search(r"title:'([^']+)'", line)
    img_m   = re.search(r"img:'([^']+)'", line)
    desc_m  = re.search(r"desc:'([^']+)'", line)

    if not all([id_m, title_m, img_m, desc_m]):
        continue

    id_   = id_m.group(1)
    title = title_m.group(1)
    img   = img_m.group(1)
    desc  = desc_m.group(1)

    m = re.search(r'images/recipes/(.+)\.[^.]+$', img)
    slug = m.group(1) if m else f'recipe-{id_}'

    if img.startswith('images/'):
        # 使用 JPEG 版本用于分享卡片（微信爬虫不支持 WebP）
        img_url = f'https://www.mashuhome.com/images/recipes/{slug}.jpg'
    else:
        img_url = 'https://www.mashuhome.com/icons/icon-512.png'

    html = (
        '<!DOCTYPE html>\n'
        '<html lang="zh-CN">\n'
        '<head>\n'
        '  <meta charset="UTF-8" />\n'
        '  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n'
        f'  <title>{title} · 麻薯菜谱</title>\n'
        f'  <meta name="description" content="{desc}" />\n'
        '  <meta property="og:type" content="article" />\n'
        f'  <meta property="og:title" content="{title} · 麻薯菜谱" />\n'
        f'  <meta property="og:description" content="{desc}" />\n'
        f'  <meta property="og:image" content="{img_url}" />\n'
        '  <meta property="og:image:type" content="image/jpeg" />\n'
        '  <meta property="og:image:width" content="800" />\n'
        '  <meta property="og:image:height" content="600" />\n'
        f'  <meta property="og:url" content="https://www.mashuhome.com/recipe/{slug}" />\n'
        '  <meta property="og:locale" content="zh_CN" />\n'
        '  <meta property="og:site_name" content="麻薯菜谱" />\n'
        '  <script>fetch("/").then(function(r){return r.text()}).then(function(h){document.open();document.write(h);document.close()});</script>\n'
        '</head>\n'
        '<body>\n'
        f'  <p>正在加载：<a href="https://www.mashuhome.com/recipe/{slug}">{title}</a></p>\n'
        '</body>\n'
        '</html>\n'
    )

    # 用目录/index.html结构，GitHub Pages 才能正确响应无扩展名URL
    dir_ = rf'D:\YCH\AI\mashuhome\recipe\{slug}'
    os.makedirs(dir_, exist_ok=True)
    with open(os.path.join(dir_, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(html)
    count += 1
    print(f'OK: recipe/{slug}/index.html')

print(f'共生成 {count} 个菜谱页面')
