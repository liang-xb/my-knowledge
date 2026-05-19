# VS Code

VS Code（Visual Studio Code）是目前最流行的前端代码编辑器。

## 为什么选择 VS Code

- **轻量级**：启动快，占用资源少
- **插件丰富**：拥有庞大的插件生态
- **跨平台**：支持 Windows、macOS、Linux
- **内置终端**：无需切换窗口即可运行命令
- **Git 集成**：可视化 Git 操作

## 常用快捷键

| 快捷键 | 功能 |
|--------|------|
| `Ctrl + P` | 快速打开文件 |
| `Ctrl + Shift + P` | 命令面板 |
| `Ctrl + D` | 选择相同词 |
| `Ctrl + /` | 切换注释 |
| `Ctrl + B` | 切换侧边栏 |
| `Ctrl + `` ` | 打开终端 |
| `Alt + ↑/↓` | 移动行 |
| `Shift + Alt + F` | 格式化代码 |

## 推荐设置

```json
{
  "editor.fontSize": 14,
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "editor.minimap.enabled": false,
  "files.autoSave": "afterDelay"
}
```

## 必备插件

| 插件 | 用途 |
|------|------|
| Prettier | 代码格式化 |
| Live Server | 实时预览 |
| Vue - Official | Vue 官方支持 |
| GitLens | Git 增强 |
| Auto Rename Tag | 自动重命名标签 |
| Path Intellisense | 路径补全 |

## 多光标编辑

- `Alt + Click`：添加光标
- `Ctrl + Alt + ↑/↓`：添加上/下光标
- `Ctrl + Shift + L`：选中所有相同词
