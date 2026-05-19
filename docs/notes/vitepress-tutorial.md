# VitePress 教程

VitePress 是基于 Vite 和 Vue 的静态站点生成器，尤雨溪于 2021 年推出，主打速度优先的文档体验。VitePress 1.x 于 2024 年正式发布，是当前推荐使用的版本。

## 为什么选择 VitePress

| 特性 | 说明 |
|------|------|
| 构建速度 | 基于 Vite，毫秒级热更新 |
| Markdown 增强 | 内置语法高亮、emoji、自定义容器 |
| Vue 驱动 | 可在 Markdown 中使用 Vue 组件 |
| 主题定制 | 支持自定义主题和样式 |
| SEO 友好 | 服务端渲染，自动生成 sitemap |
| 搜索 | 内置本地全文搜索 |

## 快速开始

```bash
# 创建项目
mkdir my-docs && cd my-docs
npm init -y
npm install vitepress vue

# 启动开发服务
npx vitepress dev docs
```

## 目录结构

```
docs/
├── .vitepress/
│   ├── config.mts       # 站点配置
│   └── theme/            # 自定义主题
├── index.md              # 首页
├── guide/                # 内容目录
└── public/               # 静态资源
```

## 核心配置

### 导航栏

```ts
export default defineConfig({
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '分组',
        items: [
          { text: '页面A', link: '/group/a' },
          { text: '页面B', link: '/group/b' }
        ]
      }
    ]
  }
})
```

### 侧边栏

```ts
sidebar: {
  '/guide/': [
    {
      text: '指南',
      items: [
        { text: '介绍', link: '/guide/intro' }
      ]
    }
  ]
}
```

### 搜索

```ts
search: {
  provider: 'local'
}
```

## 部署

### GitHub Pages

使用 GitHub Actions 自动部署：

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

### 其他平台

VitePress 构建产物是静态 HTML，可部署到任何静态托管服务：
- Vercel
- Netlify
- 腾讯云 COS
- Nginx 服务器

## 进阶功能

- **自定义主题**：在 `.vitepress/theme/` 中扩展默认主题
- **Vue 组件**：在 Markdown 中直接使用 Vue SFC
- **多语言**：内置 i18n 支持
- **API 文档**：配合 TypeDoc 生成 API 参考
- **数学公式**：通过插件支持 LaTeX

## 参考资料

- [VitePress 官方文档](https://vitepress.dev/)
- [VitePress GitHub](https://github.com/vuejs/vitepress)
