# Spring

Spring 是最流行的 Java 企业级开发框架。

## 核心特性

### IoC（控制反转）

将对象的创建和管理交给 Spring 容器。

```java
// 传统方式：自己 new
UserService service = new UserServiceImpl();

// Spring 方式：容器管理
@Service
public class UserServiceImpl implements UserService {
    // ...
}
```

### DI（依赖注入）

```java
@Service
public class UserService {

    // 构造器注入（推荐）
    private final UserMapper userMapper;
    public UserService(UserMapper userMapper) {
        this.userMapper = userMapper;
    }
}

// 或使用 Lombok
@RequiredArgsConstructor
```

### AOP（面向切面编程）

```java
@Aspect
@Component
public class LogAspect {

    @Before("execution(* com.example.service.*.*(..))")
    public void before() {
        System.out.println("方法执行前");
    }

    @Around("@annotation(log)")
    public Object around(ProceedingJoinPoint pjp, Log log) throws Throwable {
        System.out.println("开始：" + log.value());
        Object result = pjp.proceed();
        System.out.println("结束：" + log.value());
        return result;
    }
}
```

## Bean 生命周期

```
实例化 → 属性赋值 → 初始化 → 使用 → 销毁
```

## 常用注解

| 注解 | 说明 |
|------|------|
| `@Component` | 注册为 Bean |
| `@Service` | 业务层组件 |
| `@Repository` | 数据层组件 |
| `@Controller` | 控制器组件 |
| `@Autowired` | 自动注入 |
| `@Value` | 读取配置 |
| `@Configuration` | 配置类 |
| `@Bean` | 注册 Bean |
