# 项目

收录学习过程中实践的项目。

## 项目列表

### Java 后端项目

| 项目 | 技术栈 | 说明 |
|------|--------|------|
| 知识文档站 | VitePress + Vue 3 | 个人知识管理网站 |
| 用户管理系统 | Spring Boot + MyBatis-Plus | CRUD 完整示例 |
| 博客系统 | Spring Boot + Redis | 文章发布与管理 |
| 电商系统 | Spring Cloud + Nacos | 微服务架构实践 |

### 前端项目

| 项目 | 技术栈 | 说明 |
|------|--------|------|
| 后台管理 | Vue 3 + Element Plus | 通用后台管理模板 |
| 微信小程序 | uni-app | 待办事项小程序 |

## 项目规范

### 命名规范

- 包名：全小写，点分隔 `com.example.project`
- 类名：大驼峰 `UserController`
- 方法名：小驼峰 `getUserById`
- 常量：全大写，下划线分隔 `MAX_PAGE_SIZE`

### Git 提交规范

```
feat: 新功能
fix: Bug 修复
docs: 文档更新
style: 代码格式
refactor: 重构
test: 测试相关
chore: 构建/工具变动
```

## 项目结构建议

```
project/
├── src/main/java/com/example/
│   ├── controller/     # 控制器层
│   ├── service/        # 业务层
│   │   └── impl/       # 实现类
│   ├── mapper/         # 数据访问层
│   ├── entity/         # 实体类
│   ├── dto/            # 数据传输对象
│   ├── config/         # 配置类
│   └── common/         # 公共类
├── src/main/resources/
│   ├── application.yml # 主配置
│   └── mapper/         # MyBatis XML
└── src/test/java/      # 测试代码
```
