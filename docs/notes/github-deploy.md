# GitHub 部署

将 VitePress 站点部署到 GitHub Pages，免费且自动 HTTPS。

## 创建仓库

1. 登录 GitHub，点击右上角 **+** → **New repository**
2. 仓库名建议：`my-knowledge`（项目站点）或 `用户名.github.io`（个人站点）
3. 设为 **Public**（GitHub Pages 仅公开仓库免费）
4. 不要勾选初始化选项，保持空仓库

## 推送到 GitHub

```bash
cd my-knowledge
git init
git add -A
git commit -m "init: knowledge docs"
git remote add origin https://github.com/用户名/仓库名.git
git push -u origin main
```

## 配置 base 路径

编辑 `docs/.vitepress/config.mts`：

```ts
export default defineConfig({
  base: '/仓库名/',     // 个人站点用 '/'
  // ...其他配置
})
```

| 站点类型 | `base` 值 | 访问地址 |
|----------|-----------|----------|
| 项目站点 | `/my-knowledge/` | `用户名.github.io/my-knowledge/` |
| 个人站点 | `/` | `用户名.github.io/` |

## GitHub Actions 自动部署

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/deploy-pages@v4
```

## 启用 GitHub Pages

1. 进入仓库 → **Settings** → **Pages**
2. **Source** 选 **GitHub Actions**
3. 推送代码后自动触发部署

## 查看部署状态

仓库 → **Actions** 标签页，看到绿色 ✅ 即部署成功。

## 更新网站

修改文章后，推送代码即可自动部署：

```bash
git add -A
git commit -m "更新内容"
git push
```

等 1-2 分钟刷新网站就更新了。

## 常见问题

**Q：部署后 404？**

检查 `base` 路径是否配置正确。项目站点必须加仓库名。

**Q：样式丢失？**

同样检查 `base` 路径问题，静态资源路径跟 base 有关。

**Q：Actions 报错 "environment protection rules"？**

Settings → Environments → github-pages → 允许当前分支部署，或者从 deploy.yml 中移除 `environment` 配置。
