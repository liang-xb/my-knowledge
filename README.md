# 📚 知识文档站

> 构建 Java 后端核心知识体系

基于 **VitePress 1.x** 构建的个人知识管理系统，专注 Java 后端技术栈的整理与沉淀。

## 技术栈

- **VitePress 1.x** — 静态站点生成器
- **Vue 3** — 前端框架
- **TypeScript** — 类型安全

## 本地运行

```bash
npm install
npm run dev     # 开发预览 → http://localhost:5173
npm run build   # 构建 → docs/.vitepress/dist
npm run preview # 预览构建结果
```

## 在线地址

https://liang-xb.github.io/my-knowledge/

## 项目结构

```
docs/
├── .vitepress/          # 站点配置
│   ├── config.mts       # 导航、侧边栏、搜索配置
│   ├── sidebar.ts       # 侧边栏自动生成
│   └── theme/           # 主题样式和组件
├── public/              # 静态资源
├── index.md             # 首页
├── guide/               # 使用指南
└── ...                  # 各分类目录
```

## 自动部署

推送 `master` 分支 → GitHub Actions 自动构建部署到 GitHub Pages。
