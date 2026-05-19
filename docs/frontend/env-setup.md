# 环境搭建

前端开发环境搭建完整指南。

## 所需工具

| 工具 | 说明 | 下载地址 |
|------|------|----------|
| Node.js | JavaScript 运行时 | [nodejs.org](https://nodejs.org/) |
| VS Code | 代码编辑器 | [code.visualstudio.com](https://code.visualstudio.com/) |
| Git | 版本控制 | [git-scm.com](https://git-scm.com/) |

## 安装步骤

### 1. 安装 Node.js

下载 LTS 版本，安装后验证：

```bash
node -v
npm -v
```

### 2. 安装 VS Code

安装后推荐安装以下插件：
- **Chinese (Simplified)** — 中文语言包
- **Live Server** — 本地开发服务器
- **Prettier** — 代码格式化
- **ES7+ React/Redux/React-Native snippets** — 代码片段
- **Vue - Official** — Vue 3 支持

### 3. 配置 npm 镜像

```bash
# 设置淘宝镜像
npm config set registry https://registry.npmmirror.com

# 验证
npm config get registry
```

## 创建第一个项目

```bash
# 使用 Vite 创建项目
npm create vite@latest my-app -- --template vue

cd my-app
npm install
npm run dev
```

## 环境检查清单

- [ ] Node.js 安装成功
- [ ] npm 可用
- [ ] VS Code 安装完毕
- [ ] Git 配置完成
- [ ] 能成功运行第一个项目
