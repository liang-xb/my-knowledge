# IDEA 安装与配置

本文介绍 IntelliJ IDEA 的下载、安装与基本配置步骤。

## 下载安装包

IntelliJ IDEA 分为两个版本：

| 版本 | 说明 | 下载地址 |
|------|------|----------|
| **Ultimate** | 完整功能，支持 Spring、数据库工具等，需付费 | [JetBrains 官网](https://www.jetbrains.com/idea/download) |
| **Community** | 免费开源，基础 Java/Kotlin 开发支持 | [JetBrains 官网](https://www.jetbrains.com/idea/download) |

> **建议**：日常学习和开发使用 Community 版即可满足大部分需求。如果涉及 Spring Boot、数据库、前端 etc 全栈开发，建议使用 Ultimate 版（学生可免费申请）。

## 安装步骤

### Windows 安装

1. 访问 [JetBrains 官网](https://www.jetbrains.com/idea/download)，下载 `.exe` 安装包
2. 双击安装包，点击 **Next**
3. 选择安装路径，建议不要包含中文和空格
4. 勾选以下选项：
   - **64-bit launcher** — 添加快捷方式
   - **Add "Open Folder as Project"** — 右键菜单打开项目
   - **`.java`、`.kt`** — 关联文件类型
5. 点击 Install，等待安装完成
6. 启动 IDEA，按向导完成初始配置

### macOS 安装

```bash
# 如果已安装 Homebrew，可直接通过命令行安装
brew install --cask intellij-idea-ce
```

或手动下载 `.dmg` 文件，将 IDEA 拖入 `Applications` 文件夹。

### 初次启动配置

首次启动时，IDEA 会引导完成以下配置：

- **UI 主题**：选择 Darcula（深色）或 IntelliJ Light（浅色）
- **插件推荐**：可根据需要禁用默认启用的插件，加快启动速度
- **字体大小**：建议 Editor 字体设为 14-16px

## 注意事项

1. **JDK 依赖**：IDEA 自带 JetBrains Runtime，无需单独安装 JDK，但编译项目时需要配置 JDK
2. **内存设置**：大型项目建议修改 `idea64.exe.vmoptions`，调整 `-Xmx` 参数
3. **插件安装**：避免安装过多插件，会影响启动速度和稳定性
4. **快捷键冲突**：Windows 下注意与输入法快捷键的冲突（如 `Ctrl + 空格`）
5. **项目路径**：建议项目统一放在一个父目录下，便于管理

## 配置优化

### 推荐插件

| 插件 | 用途 |
|------|------|
| Chinese Language Pack | 中文语言包 |
| Maven Helper | Maven 依赖管理增强 |
| MyBatisX | MyBatis 开发辅助 |
| SonarLint | 代码质量检查 |
| GitToolBox | Git 集成增强 |

### 内存优化

```ini
# idea64.exe.vmoptions
-Xms256m
-Xmx2048m
-XX:ReservedCodeCacheSize=512m
```

- `-Xms`：启动时分配的内存
- `-Xmx`：最大可用内存（根据机器配置调整）
- `-XX:ReservedCodeCacheSize`：代码缓存大小

## 小结

安装 IDEA 是 Java 开发的第一步。配置好开发环境后，可以开始创建第一个 Java 项目了。
