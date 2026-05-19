# IDEA

IntelliJ IDEA 是 Java 开发的首选 IDE。

## 版本选择

| 版本 | 说明 | 适合 |
|------|------|------|
| Community | 免费开源 | Java SE 开发 |
| Ultimate | 付费 | 企业级开发 |

新手推荐使用 **Community 版**，功能足够。

## 下载安装

详见：[IDEA 安装教程](/java/idea/installation)

## 基本配置

### 1. 设置字体

`File → Settings → Editor → Font`

### 2. 设置编码

`File → Settings → Editor → File Encodings` → 全部设为 UTF-8

### 3. 安装插件

`File → Settings → Plugins`

推荐插件：
- Chinese (Simplified) — 中文语言包
- Lombok — 减少样板代码
- Maven Helper — Maven 依赖管理

## 基本操作

| 操作 | 说明 |
|------|------|
| 创建项目 | New Project → Java |
| 创建类 | 右键 src → New → Java Class |
| 运行 | 右键类 → Run |
| 调试 | 右键类 → Debug |

## 项目结构

```
project/
├── src/
│   └── Main.java
├── out/            # 编译输出
└── project.iml      # IDEA 配置文件
```
