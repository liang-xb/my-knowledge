# Git

Git 是目前最流行的分布式版本控制系统。

## 基本工作流

```
工作区 → git add → 暂存区 → git commit → 本地仓库 → git push → 远程仓库
```

## 常用命令

### 仓库操作

```bash
git init                      # 初始化仓库
git clone <url>               # 克隆仓库
git remote add origin <url>   # 添加远程仓库
```

### 基本操作

```bash
git status                    # 查看状态
git add <file>                # 添加文件到暂存区
git add -A                    # 添加所有文件
git commit -m "message"       # 提交
git push origin main          # 推送
git pull                      # 拉取
```

### 分支操作

```bash
git branch                    # 查看分支
git branch <name>             # 创建分支
git checkout <name>           # 切换分支
git checkout -b <name>        # 创建并切换分支
git merge <name>              # 合并分支
git branch -d <name>          # 删除分支
```

### 撤销操作

```bash
git checkout -- <file>        # 撤销工作区修改
git reset HEAD <file>         # 撤销暂存区
git reset --soft HEAD^        # 撤销 commit（保留修改）
git reset --hard HEAD^        # 撤销 commit（丢弃修改）
```

### 查看历史

```bash
git log                       # 查看提交历史
git log --oneline             # 简洁模式
git log --graph               # 图形化分支
git diff                      # 查看修改差异
```

## .gitignore

```gitignore
node_modules/
target/
*.class
*.log
.idea/
.vscode/
dist/
```

## 常用工作流

### Git Flow

```
main     — 生产分支
develop  — 开发分支
feature/ — 功能分支
release/ — 发布分支
hotfix/  — 紧急修复分支
```

### 提交规范

```
feat: 新功能
fix: 修复 Bug
docs: 文档更新
style: 代码格式
refactor: 重构
test: 测试
chore: 构建/工具
```
