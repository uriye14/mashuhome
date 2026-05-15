#!/bin/bash
# ============================================
# mashuhome.com Agent 一次性配置脚本
# 运行方式：bash setup.sh
# ============================================

set -e

echo "🏠 Mashu Home Agent 配置向导"
echo "================================"
echo ""

# 1. 检查 git 是否安装
if ! command -v git &> /dev/null; then
  echo "❌ 未检测到 git，请先安装 git"
  exit 1
fi
echo "✅ git 已安装：$(git --version)"

# 2. 检查当前目录是否是 git 仓库
if [ ! -d ".git" ]; then
  echo ""
  echo "❌ 当前目录不是 git 仓库。"
  echo "   请先 cd 到你的网站项目目录，再运行此脚本。"
  echo "   例如：cd ~/projects/mashuhome && bash setup.sh"
  exit 1
fi
echo "✅ 检测到 git 仓库"

# 3. 检查远程仓库
REMOTE_URL=$(git remote get-url origin 2>/dev/null || echo "")
if [ -z "$REMOTE_URL" ]; then
  echo ""
  echo "❌ 未配置远程仓库 (origin)。"
  read -p "   请输入你的 GitHub 仓库地址（如 https://github.com/用户名/仓库名.git）：" REPO_URL
  git remote add origin "$REPO_URL"
  echo "✅ 已添加远程仓库：$REPO_URL"
else
  echo "✅ 远程仓库：$REMOTE_URL"
fi

# 4. 配置 GitHub Personal Access Token
echo ""
echo "📋 配置 GitHub 自动推送认证"
echo "   需要一个 Personal Access Token (PAT) 来让 Agent 自动 push。"
echo ""
echo "   获取步骤："
echo "   1. 打开 https://github.com/settings/tokens/new"
echo "   2. Note 填写：mashuhome-agent"
echo "   3. Expiration：按需选择（建议 No expiration 或 1 year）"
echo "   4. 勾选权限：repo（全部子选项）"
echo "   5. 点击 Generate token，复制生成的 token"
echo ""
read -p "   请粘贴你的 GitHub Personal Access Token：" GH_TOKEN

if [ -z "$GH_TOKEN" ]; then
  echo "⚠️  跳过 token 配置，之后 push 时需要手动输入密码。"
else
  # 从现有 remote URL 提取 github.com 后的部分
  REPO_PATH=$(echo "$REMOTE_URL" | sed 's|https://github.com/||' | sed 's|https://.*@github.com/||')
  NEW_URL="https://${GH_TOKEN}@github.com/${REPO_PATH}"
  git remote set-url origin "$NEW_URL"
  echo "✅ GitHub 认证已配置，以后 push 无需输入密码。"
fi

# 5. 配置 git 用户信息
echo ""
CURRENT_NAME=$(git config user.name 2>/dev/null || echo "")
CURRENT_EMAIL=$(git config user.email 2>/dev/null || echo "")

if [ -z "$CURRENT_NAME" ]; then
  read -p "   请输入你的姓名（用于 git commit）：" GIT_NAME
  git config user.name "$GIT_NAME"
fi

if [ -z "$CURRENT_EMAIL" ]; then
  read -p "   请输入你的邮箱（用于 git commit）：" GIT_EMAIL
  git config user.email "$GIT_EMAIL"
fi

echo "✅ git 用户：$(git config user.name) <$(git config user.email)>"

# 6. 复制 Agent 文件到项目（若从外部运行）
echo ""
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [ ! -f "./CLAUDE.md" ]; then
  if [ -f "$SCRIPT_DIR/CLAUDE.md" ]; then
    cp "$SCRIPT_DIR/CLAUDE.md" ./CLAUDE.md
    echo "✅ 已复制 CLAUDE.md 到项目根目录"
  fi
fi

if [ ! -d "./skills/recipe-converter" ]; then
  mkdir -p ./skills/recipe-converter
  if [ -f "$SCRIPT_DIR/skills/recipe-converter/SKILL.md" ]; then
    cp "$SCRIPT_DIR/skills/recipe-converter/SKILL.md" ./skills/recipe-converter/SKILL.md
    echo "✅ 已复制 skills/recipe-converter/SKILL.md"
  fi
fi

# 7. 创建必要目录
mkdir -p recipes images/recipes
echo "✅ 确保 recipes/ 和 images/recipes/ 目录存在"

# 8. 添加 .gitignore 条目（保护 token）
if [ -f ".gitignore" ]; then
  if ! grep -q "skills/" .gitignore 2>/dev/null; then
    echo "" >> .gitignore
    echo "# Agent 技能文件（可选：若不想提交到仓库）" >> .gitignore
    echo "# skills/" >> .gitignore
  fi
fi

# 9. 测试推送
echo ""
echo "🧪 测试 git 连接..."
if git ls-remote origin &>/dev/null; then
  echo "✅ GitHub 连接正常！"
else
  echo "⚠️  无法连接 GitHub，请检查 token 或网络。"
fi

echo ""
echo "================================"
echo "🎉 配置完成！"
echo ""
echo "现在可以在此目录运行 Claude Code："
echo "  claude"
echo ""
echo "然后告诉 Agent：「帮我添加这道菜谱」并上传图片即可。"
echo "================================"
