# 快速开始

欢迎使用知识文档站！本指南将帮助你快速上手。

## 项目简介

知识文档站是一个基于 VitePress 构建的个人知识管理系统，专注于 **Java 后端核心知识体系** 的整理与沉淀。

## 技术栈

- **VitePress 1.x** - 静态站点生成器
- **Vue 3** - 前端框架
- **Markdown** - 文档编写

## 如何使用

### 本地开发

```bash
npm run dev
```

启动后访问 `http://localhost:5173` 即可预览站点。

### 构建生产版本

```bash
npm run build
```

构建产物位于 `docs/.vitepress/dist` 目录。

### 预览构建结果

```bash
npm run preview
```

## 文档目录规划

```
docs/
├── guide/          # 入门指南
├── java-core/      # Java核心
├── framework/      # 框架相关
├── middleware/     # 中间件
├── database/       # 数据库
└── devops/         # 运维部署
```

## 下一步

开始编写你的第一篇知识文档吧！
