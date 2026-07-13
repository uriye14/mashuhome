---
description: 更新菜谱的展示图片，将图片转为WebP并推送到网站。用法：/update-image
disable-model-invocation: true
allowed-tools: Bash PowerShell Read Edit Write
---

更新一道菜谱的展示图片，按以下步骤执行：

## Step 1：同步最新代码

```bash
git -c http.sslBackend=openssl pull origin main
```

## Step 2：确认目录

确认 `images/recipes/` 目录存在，不存在则创建：

```powershell
if (-not (Test-Path "images\recipes")) { New-Item -ItemType Directory "images\recipes" }
```

## Step 3：复制图片

从 `菜谱图片\` 复制到 `images\recipes\`，用 slug 命名：

```powershell
Copy-Item "菜谱图片\{原文件名}" "images\recipes\{slug}.{ext}"
```

**slug 命名规则**：菜谱名拼音，全小写，空格换连字符。  
例：水煮牛肉 → `shui-zhu-niu-rou`，红烧肉 → `hong-shao-rou`

## Step 4：转换为 WebP

```python
python -c "
from PIL import Image
img = Image.open('images/recipes/{slug}.{ext}')
rgb = img.convert('RGB') if img.mode in ('RGBA','P') else img
w, h = rgb.size
if max(w, h) > 1200:
    scale = 1200 / max(w, h)
    rgb = rgb.resize((int(w * scale), int(h * scale)), Image.LANCZOS)
rgb.save('images/recipes/{slug}.webp', 'WEBP', quality=80, method=6)
"
```

## Step 5：删除原格式文件

```powershell
Remove-Item "images\recipes\{slug}.{ext}"
```

最终只保留 `.webp` 文件。

## Step 6：更新 index.html

在 `index.html` 中找到对应菜谱对象，把 `img` 字段改为：

```
"images/recipes/{slug}.webp"
```

## Step 7：自动发布

```bash
git add images/recipes/ index.html
git commit -m "🎨 更新图片：{菜名}"
git -c http.sslBackend=openssl push origin master:main
```

发布成功后告知用户：「✅ 已发布！约 1~2 分钟后在 mashuhome.com 生效。」
