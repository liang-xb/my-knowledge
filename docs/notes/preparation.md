# 准备工作

搭建 VitePress 知识文档站之前需要准备的环境和工具。

## 环境要求

| 工具 | 用途 | 最低版本 |
|------|------|---------|
| [Node.js](https://nodejs.org/) | JavaScript 运行环境 | 18+ |
| [Git](https://git-scm.com/) | 版本控制 | 任意 |
| [VS Code](https://code.visualstudio.com/) | 代码编辑器 | 推荐最新版 |

## 安装 Node.js

### Windows

1. 访问 [Node.js 官网](https://nodejs.org/) 下载 LTS 版本
2. 双击安装包，一路 Next 即可
3. 验证安装：

```bash
node -v   # 显示版本号即成功
npm -v    # npm 随 Node.js 自带
```

> 推荐使用 **nvm-windows** 管理 Node 版本，方便切换。

### macOS

```bash
brew install node
```

## 安装 Git

### Windows

下载 [Git for Windows](https://git-scm.com/download/win)，安装时默认选项即可。

### 验证

```bash
git --version
```

## VS Code 推荐插件

| 插件 | 用途 |
|------|------|
| Chinese Language Pack | 中文界面 |
| Markdown Preview Enhanced | Markdown 预览增强 |
| Prettier | 代码格式化 |
| ESLint | 代码检查 |
| Vue - Official | Vue 3 语法支持 |

## 新建项目

```bash
# 创建项目目录
mkdir my-knowledge
cd my-knowledge

# 初始化
npm init -y

# 安装 VitePress
npm install vitepress vue
```

准备工作完成后，下一步就是建站配置了。
