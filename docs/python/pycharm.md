# PyCharm

PyCharm 是 JetBrains 开发的 Python 专用 IDE。

## 版本选择

| 版本 | 说明 |
|------|------|
| Community | 免费，适合基础开发 |
| Professional | 付费，支持 Web 开发和数据库 |

新手推荐 Community 版。

## 下载安装

从 [jetbrains.com/pycharm](https://www.jetbrains.com/pycharm/) 下载安装。

## 创建项目

1. File → New Project
2. 选择项目路径
3. 选择 Python 解释器（推荐使用虚拟环境）
4. 点击 Create

## 常用快捷键

| 快捷键 | 功能 |
|--------|------|
| `Ctrl + Space` | 代码补全 |
| `Ctrl + /` | 注释 |
| `Ctrl + D` | 复制行 |
| `Ctrl + Alt + L` | 格式化代码 |
| `Shift + F10` | 运行 |
| `Shift + F9` | 调试 |
| `Double Shift` | 全局搜索 |

## 推荐插件

| 插件 | 用途 |
|------|------|
| Chinese (Simplified) | 中文语言包 |
| Rainbow CSV | CSV 文件高亮 |
| Jupyter | Jupyter 笔记本支持 |

## 配置解释器

1. File → Settings → Project → Python Interpreter
2. 选择或添加 Python 解释器
3. 推荐为每个项目创建虚拟环境（venv）

## 虚拟环境

```bash
# 创建虚拟环境
python -m venv venv

# 激活（Windows）
venv\Scripts\activate

# 激活（macOS/Linux）
source venv/bin/activate
```
