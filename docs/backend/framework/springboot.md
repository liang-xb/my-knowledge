# Spring Boot

Spring Boot 是 Spring 生态的一站式脚手架，简化 Spring 应用开发。

## 核心特性

- **自动配置**：根据依赖自动配置 Bean
- **起步依赖**：一组预定义的依赖集合
- **内嵌服务器**：内置 Tomcat，无需部署 WAR
- **Actuator**：生产级监控端点

## 创建项目

### 方式一：Spring Initializr

访问 [start.spring.io](https://start.spring.io/) 生成项目。

### 方式二：IDEA 创建

File → New → Project → Spring Initializr

### 基本项目结构

```
src/main/java/
└── com.example/
    ├── Application.java        # 启动类
    ├── controller/              # 控制器
    ├── service/                 # 业务层
    ├── mapper/                  # 数据层
    └── entity/                  # 实体类
src/main/resources/
├── application.yml              # 配置文件
└── static/                      # 静态资源
```

## 常用配置

```yaml
# application.yml
server:
  port: 8080

spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mydb
    username: root
    password: 123456
    driver-class-name: com.mysql.cj.jdbc.Driver

  redis:
    host: localhost
    port: 6379
```

## RESTful 接口

```java
@RestController
@RequestMapping("/api/users")
public class UserController {

    @GetMapping("/{id}")
    public Result<User> getUser(@PathVariable Long id) {
        // ...
    }

    @PostMapping
    public Result<Void> createUser(@RequestBody @Valid User user) {
        // ...
    }

    @PutMapping("/{id}")
    public Result<Void> updateUser(@PathVariable Long id, @RequestBody User user) {
        // ...
    }

    @DeleteMapping("/{id}")
    public Result<Void> deleteUser(@PathVariable Long id) {
        // ...
    }
}
```

## 常用注解

| 注解 | 说明 |
|------|------|
| `@SpringBootApplication` | 启动类注解 |
| `@RestController` | REST 控制器 |
| `@RequestMapping` | 请求映射 |
| `@GetMapping` / `@PostMapping` | Get / Post 请求 |
| `@RequestParam` | 请求参数 |
| `@PathVariable` | 路径变量 |
| `@RequestBody` | 请求体 |
| `@Valid` | 参数校验 |

## 全局异常处理

```java
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public Result<Void> handleException(Exception e) {
        return Result.error(e.getMessage());
    }
}
```
