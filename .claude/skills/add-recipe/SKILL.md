---
description: 添加单道新菜谱到网站。用户提供菜谱卡片图片时触发。
disable-model-invocation: true
allowed-tools: Bash PowerShell Read Edit Write
---

添加一道新菜谱，按以下步骤执行：

## Step 1：同步最新代码

```bash
git -c http.sslBackend=openssl pull origin main
```

## Step 2：分析菜谱图片

用 Read 工具读取菜谱图片（路径格式：`菜谱\{文件名}.jpg`），提取以下信息：

- 菜名（必填）
- 分类：早餐 / 午餐 / 晚餐 / 甜点 / 汤品 / 其他
- 一句话简介（30字以内）
- 烹饪时间（分钟数）
- 份数
- 难度：简单 / 中等 / 高级
- 食材列表（格式："食材名 用量"）
- 步骤列表（每步含 title、time、desc）

提取完成后先展示给用户确认，确认后再继续。

## Step 3：生成菜谱 JS 对象并插入 index.html

在 `index.html` 的 recipes 数组末尾插入：

```js
{
  id: {下一个id},
  title: "菜名",
  category: "分类",
  time: 烹饪时间数字,
  servings: 份数数字,
  difficulty: "难度",
  img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
  desc: "简介",
  tm: ["TM5", "TM6", "TM7"],
  ingredients: ["食材1 用量1", "食材2 用量2"],
  steps: [{"title": "步骤名", "time": "耗时", "desc": "说明"}]
}
```

id 取现有最大 id + 1。

## Step 4：自动发布

```bash
git add index.html
git commit -m "✨ 添加菜谱：{菜名}"
git -c http.sslBackend=openssl push origin master:main
```

发布成功后告知用户：「✅ 已发布！约 1~2 分钟后在 mashuhome.com 生效。」
