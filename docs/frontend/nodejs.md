# Node.js

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时。

## 核心概念

### npm (Node Package Manager)

Node.js 自带的包管理工具，用于安装和管理第三方库。

```bash
# 初始化项目
npm init -y

# 安装依赖
npm install <package>
npm install <package> --save-dev

# 全局安装
npm install -g <package>
```

### package.json

项目的配置文件和依赖清单。

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.4.0"
  },
  "devDependencies": {
    "vite": "^5.0.0"
  }
}
```

## 常用命令

```bash
node app.js           # 运行 JS 文件
npm run dev           # 运行 scripts 中的命令
npm list              # 查看已安装的包
npm update            # 更新依赖
npm uninstall <pkg>   # 卸载包
```

## nvm 版本管理

```bash
# 安装 nvm 后
nvm install 20        # 安装 Node 20
nvm use 20            # 切换到 Node 20
nvm list              # 查看已安装版本
nvm alias default 20  # 设置默认版本
```

## 模块系统

```javascript
// CommonJS
const fs = require('fs');
module.exports = { foo };

// ES Module
import fs from 'fs';
export { foo };
```
