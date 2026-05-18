# 建站教程

从零开始搭建 VitePress 个人知识文档站。

## 项目初始化

```bash
mkdir my-knowledge && cd my-knowledge
npm init -y
npm install vitepress vue
```

修改 `package.json`：

```json
{
  "type": "module",
  "scripts": {
    "dev": "vitepress dev docs",
    "build": "vitepress build docs",
    "preview": "vitepress preview docs"
  }
}
```

## 创建目录结构

```
docs/
├── .vitepress/
│   ├── config.mts       # 站点配置
│   └── theme/
│       ├── index.ts      # 主题入口
│       └── custom.css    # 自定义样式
├── index.md              # 首页
└── public/               # 静态资源
```

## 基础配置

`docs/.vitepress/config.mts`：

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的文档站',
  description: '个人知识库',
  lang: 'zh-CN',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/intro' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ]
  }
})
```

## 配置首页

`docs/index.md` 使用 VitePress 内置的 home 布局：

```yaml
---
layout: home

hero:
  name: "我的文档站"
  text: "知识体系"
  tagline: 持续学习，持续记录
  actions:
    - theme: brand
      text: 开始阅读
      link: /guide/intro
---
```

## 启动开发服务

```bash
npm run dev
```

浏览器打开 `http://localhost:5173` 就能看到你的文档站了。

## 后续优化

- 添加搜索：`search: { provider: 'local' }`
- 自定义样式：修改 `custom.css`
- 添加组件：在 `theme/components/` 下创建 Vue 组件
- 部署上线：参考腾讯云部署或 GitHub 部署
