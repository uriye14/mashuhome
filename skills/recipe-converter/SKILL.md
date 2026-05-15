# 菜谱图片转换技能 (Recipe Image Converter)

## 概述

将用户上传的菜谱图片（手写、印刷、截图等）转换为符合 mashuhome.com 风格的 HTML 菜谱页面。

---

## Step 1：分析图片，提取结构化数据

仔细观察图片，提取以下字段（无法识别的字段留空）：

```
菜名:         （必填）
副标题/描述:  （可选，一句话介绍这道菜的特色）
难度:         简单 / 中等 / 困难
烹饪时间:     （如：30分钟）
准备时间:     （如：10分钟）
份量:         （如：2人份）
菜系:         （如：川菜、家常菜、粤菜）

食材列表:
  - 食材名: 用量
  - ...

步骤列表:
  1. 步骤描述
  2. ...

小贴士:       （可选，图片中的注意事项或技巧）
```

提取完成后，**先向用户展示提取结果**，询问：
> 「我识别到以上信息，有没有需要补充或修改的地方？」

用户确认后再生成 HTML。

---

## Step 2：生成 Slug

规则：菜名拼音或英文翻译，全小写，空格换连字符。

```
红烧肉      → hong-shao-rou
番茄炒蛋    → fan-qie-chao-dan
蒜蓉西兰花  → garlic-broccoli
```

---

## Step 3：生成菜谱详情页

文件路径：`recipes/{slug}/index.html`

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{菜名} - Mashu Home</title>
  <meta name="description" content="{副标题或菜名的简短描述}">
  <link rel="stylesheet" href="../../css/style.css">
</head>
<body>

  <!-- 导航 -->
  <nav class="site-nav">
    <a href="../../index.html" class="nav-logo">Mashu Home 🏠</a>
    <a href="../../recipes/index.html" class="nav-link">← 所有菜谱</a>
  </nav>

  <!-- 菜谱头部 -->
  <article class="recipe-detail">
    <header class="recipe-header">
      <h1 class="recipe-title">{菜名}</h1>
      <p class="recipe-description">{副标题/描述}</p>

      <!-- 菜谱元信息 -->
      <div class="recipe-meta">
        <span class="meta-item">
          <span class="meta-icon">⏱️</span>
          <span class="meta-label">准备时间</span>
          <span class="meta-value">{准备时间}</span>
        </span>
        <span class="meta-item">
          <span class="meta-icon">🍳</span>
          <span class="meta-label">烹饪时间</span>
          <span class="meta-value">{烹饪时间}</span>
        </span>
        <span class="meta-item">
          <span class="meta-icon">👥</span>
          <span class="meta-label">份量</span>
          <span class="meta-value">{份量}</span>
        </span>
        <span class="meta-item">
          <span class="meta-icon">📊</span>
          <span class="meta-label">难度</span>
          <span class="meta-value">{难度}</span>
        </span>
      </div>
    </header>

    <!-- 菜谱图片（若有） -->
    <!-- <figure class="recipe-image">
      <img src="../../images/recipes/{slug}.jpg" alt="{菜名}" loading="lazy">
    </figure> -->

    <div class="recipe-body">

      <!-- 食材 -->
      <section class="ingredients-section">
        <h2>🥘 食材</h2>
        <ul class="ingredients-list">
          <!-- 按以下格式生成每个食材 -->
          <li class="ingredient-item">
            <span class="ingredient-name">{食材名}</span>
            <span class="ingredient-amount">{用量}</span>
          </li>
          <!-- 重复以上 li 标签 -->
        </ul>
      </section>

      <!-- 步骤 -->
      <section class="steps-section">
        <h2>👩‍🍳 做法</h2>
        <ol class="steps-list">
          <!-- 按以下格式生成每个步骤 -->
          <li class="step-item">
            <span class="step-number">{序号}</span>
            <p class="step-text">{步骤描述}</p>
          </li>
          <!-- 重复以上 li 标签 -->
        </ol>
      </section>

      <!-- 小贴士（有则添加，无则省略整个 section） -->
      <section class="tips-section">
        <h2>💡 小贴士</h2>
        <ul class="tips-list">
          <li>{贴士内容}</li>
        </ul>
      </section>

    </div>

    <!-- 页脚导航 -->
    <footer class="recipe-footer">
      <a href="../../recipes/index.html" class="btn-back">← 返回菜谱列表</a>
    </footer>

  </article>

  <script src="../../js/main.js"></script>
</body>
</html>
```

---

## Step 4：更新菜谱列表页

在 `recipes/index.html` 中找到菜谱卡片列表区域，追加新的卡片。

新卡片模板：
```html
<article class="recipe-card">
  <a href="./{slug}/index.html" class="recipe-card-link">
    <!-- 若有配图则取消注释 -->
    <!-- <img class="recipe-card-image" src="../images/recipes/{slug}.jpg" alt="{菜名}" loading="lazy"> -->
    <div class="recipe-card-body">
      <h3 class="recipe-card-title">{菜名}</h3>
      <p class="recipe-card-desc">{副标题/描述}</p>
      <div class="recipe-card-meta">
        <span>⏱️ {总时间}</span>
        <span>👥 {份量}</span>
        <span>📊 {难度}</span>
      </div>
    </div>
  </a>
</article>
```

> 总时间 = 准备时间 + 烹饪时间（如果两者都有）

---

## Step 5：处理图片（可选）

如果用户同时上传了菜品照片：

1. 询问：「要把这张图片也上传到网站吗？」
2. 确认后，将图片保存到 `images/recipes/{slug}.jpg`（或 .png）
3. 取消菜谱详情页和列表页中图片相关的注释

---

## 质量检查清单

生成文件后，逐项确认：

- [ ] `<title>` 包含菜名和品牌名
- [ ] 所有链接路径正确（`../../` 层级对应）
- [ ] 食材无遗漏
- [ ] 步骤编号连续、描述清晰
- [ ] HTML 结构完整，无未闭合标签
- [ ] 文件编码为 UTF-8

---

## 常见图片类型处理建议

| 图片类型 | 处理要点 |
|----------|----------|
| 手写菜谱 | 仔细辨认字迹，不确定处询问用户 |
| 书籍/杂志截图 | 注意版权，内容转述而非逐字复制 |
| 手机截图（小红书等） | 提取结构，忽略平台特有格式 |
| 模糊/低清晰度 | 提取可识别部分，明确告知用户哪些字段无法识别 |
