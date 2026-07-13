---
description: 扫描菜谱/和菜谱图片/文件夹，自动处理所有新文件并发布到网站
disable-model-invocation: true
allowed-tools: Bash PowerShell Read Edit Write Glob
---

扫描并处理所有未处理的新文件，按以下步骤执行：

## Step 1：读取已处理记录

```powershell
Get-Content processed_recipes.txt -Encoding utf8 -ErrorAction SilentlyContinue
Get-Content processed_recipe_images.txt -Encoding utf8 -ErrorAction SilentlyContinue
```

将文件名统一 `.ToLower()` 处理，避免大小写导致漏检。

## Step 2：扫描新菜谱卡片图

```powershell
Get-ChildItem '菜谱\' | Where-Object { $_.Extension -in '.jpg','.jpeg','.png' }
```

找出不在 `processed_recipes.txt` 中的文件。

## Step 3：扫描新菜谱展示图

```powershell
Get-ChildItem '菜谱图片\' | Where-Object { $_.Extension -in '.jpg','.jpeg','.png','.webp' }
```

找出不在 `processed_recipe_images.txt` 中的文件。

⚠️ 不要用 `-Include` 参数（PowerShell 已知 bug：路径末尾无 `\*` 时 `-Include` 无效）

## Step 4：处理新菜谱卡片图

对每张新菜谱卡片图，执行「添加新菜谱」流程：

1. `git -c http.sslBackend=openssl pull origin main`
2. 用 Read 工具读取图片，分析提取菜谱信息
3. 在 `index.html` 的 recipes 数组末尾插入新菜谱对象（使用 Unsplash 占位图）
4. 执行自动发布（见 Step 6）

## Step 5：处理新菜谱展示图

对每张新菜谱展示图，执行「更新菜谱展示图片」流程（含 WebP 转换）。

## Step 6：更新记录文件

将所有新处理的文件名追加到对应记录文件：

```powershell
Add-Content processed_recipes.txt "新文件名" -Encoding utf8
Add-Content processed_recipe_images.txt "新文件名" -Encoding utf8
```

## Step 7：重新生成 OG 分享页

```bash
python gen_og_pages.py
```

## Step 8：自动发布

```bash
git add recipe/ processed_recipes.txt processed_recipe_images.txt
git commit -m "✨ 批量添加菜谱"
git -c http.sslBackend=openssl push origin master:main
```

发布成功后告知用户：「✅ 已发布！约 1~2 分钟后在 mashuhome.com 生效。」
