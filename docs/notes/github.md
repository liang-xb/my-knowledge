# Github

GitHub 是全球最大的代码托管平台，基于 Git 版本控制系统，提供代码托管、版本管理、协作开发等功能。

## 核心功能

| 功能 | 说明 |
|------|------|
| Repository | 代码仓库，存放项目文件和历史记录 |
| Branch | 分支，支持多人并行开发 |
| Pull Request | 代码审查和合并请求 |
| Issues | 问题追踪和任务管理 |
| Actions | CI/CD 自动化工作流 |
| Pages | 免费静态网站托管 |
| Gist | 代码片段分享 |

## 注册与设置

1. 访问 [GitHub](https://github.com/) 注册账号
2. 配置 SSH Key：

```bash
# 生成 SSH 密钥
ssh-keygen -t ed25519 -C "your_email@example.com"

# 复制公钥
cat ~/.ssh/id_ed25519.pub
```

3. 在 GitHub Settings → SSH and GPG keys 中添加公钥

## 基本工作流

```bash
# 克隆仓库
git clone https://github.com/username/repo.git

# 创建分支
git checkout -b feature/new-feature

# 添加更改
git add .

# 提交
git commit -m "feat: add new feature"

# 推送
git push origin feature/new-feature
```

## GitHub Pages

GitHub 提供免费的静态网站托管服务：

- 每个账号可创建一个用户站点（`username.github.io`）
- 每个仓库可创建项目站点（`username.github.io/repo`）
- 支持 Jekyll、VitePress、Hugo 等静态站点生成器

## 相关资源

- [GitHub 官方文档](https://docs.github.com/)
- [GitHub Skills](https://skills.github.com/) — 交互式学习
- [GitHub Desktop](https://desktop.github.com/) — 桌面客户端
