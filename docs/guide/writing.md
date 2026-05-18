# 使用指南

本指南说明如何添加文章、修改配置和使用自定义组件。

## 添加新文章

在 `docs/` 目录下创建 `.md` 文件即可。文件路径决定了 URL：

```
docs/java/idea/installation.md  →  /java/idea/installation
docs/backend/database/mysql.md  →  /backend/database/mysql
```

### 文件命名规范

- 使用小写英文 + 连字符：`getting-started.md`, `my-first-post.md`
- 每个目录下可以有多个 `.md` 文件
- 目录自动生成侧边栏导航

### 文章头部 (Frontmatter)

可选的 YAML 头部，用于设置文章元信息：

```yaml
---
title: 自定义标题        # 覆盖 Markdown 一级标题
description: 文章摘要     # SEO 描述
outline: false           # 是否隐藏右侧目录
---
```

## 修改导航栏

编辑 `docs/.vitepress/config.mts`，找到 `nav` 数组：

```ts
nav: [
  { text: '首页', link: '/' },

  // 下拉菜单
  {
    text: '笔记',
    items: [
      { text: 'Github', link: '/notes/github' },
      // 添加更多...
    ]
  },

  // 嵌套菜单（两级）
  {
    text: '后端',
    items: [
      {
        text: '数据库',
        items: [
          { text: 'MySQL', link: '/backend/database/mysql' }
        ]
      }
    ]
  }
]
```

修改后 dev server 会自动重启。

## 侧边栏

侧边栏由 `sidebar.ts` 中的 `autoSidebar()` 自动生成——扫描对应目录，目录变成可折叠分组，`.md` 文件变成链接。

**手动添加侧边栏条目**：如果某个目录还不存在但想预留入口，可以在 `config.mts` 中手动补充：

```ts
sidebar: {
  '/java/': [
    { text: '手动条目', link: '/java/manual' },
    ...autoSidebar('java')   // 自动扫描的放后面
  ]
}
```

## 使用自定义组件

以下组件已在主题中全局注册，可在任何 `.md` 文件中直接使用：

### Tip 提示组件

```md
<Tip title="小技巧">使用 Ctrl+Shift+P 打开命令面板。</Tip>
```

### Warning 警告组件

```md
<Warning title="注意">生产环境请勿开启 debug 模式。</Warning>
```

### CodeBlock 增强代码块

```md
<CodeBlock lang="java" code="public static void main(String[] args) { }" />
```

### HomePage 首页组件

仅在 `docs/index.md` 中使用，展示自定义首页。

## 修改主题样式

| 文件 | 作用 |
|------|------|
| `docs/.vitepress/config.mts` | 站点配置（标题、导航、侧边栏、搜索、页脚） |
| `docs/.vitepress/theme/index.ts` | 主题入口（注册组件、加载自定义布局） |
| `docs/.vitepress/theme/custom.css` | 全局样式 + CSS 变量覆盖 + 响应式 |
| `docs/.vitepress/theme/components/*.vue` | 自定义 Vue 组件 |

### 修改配色

编辑 `custom.css` 开头的 CSS 变量：

```css
:root {
  --vp-c-brand-1: #3b82f6;   /* 主色调 */
  --vp-c-brand-2: #60a5fa;   /* 浅色调 (hover) */
}

.dark {
  --vp-c-bg: #0f172a;        /* 深色背景 */
}
```

### 修改字体

在 `custom.css` 中搜索 `font-family` 并替换。

## 更新网站内容

1. 编辑或新增 `docs/` 下的 `.md` 文件
2. dev server 会自动热更新（`npm run dev`）
3. 确认无误后提交到 Git 仓库
4. GitHub Actions 会自动构建并部署

## 本地命令速查

```bash
npm run dev       # 启动开发服务器 (http://localhost:5173)
npm run build     # 构建生产版本 (输出到 docs/.vitepress/dist)
npm run preview   # 预览构建结果 (http://localhost:4173)
```
