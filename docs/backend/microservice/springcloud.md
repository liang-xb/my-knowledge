# Spring Cloud

Spring Cloud 是微服务架构的一站式解决方案。

## 核心组件

| 组件 | 作用 |
|------|------|
| Nacos | 注册中心 + 配置中心 |
| Gateway | API 网关 |
| OpenFeign | 服务调用 |
| Sentinel | 熔断限流 |
| Seata | 分布式事务 |
| Sleuth + Zipkin | 链路追踪 |

## 服务架构

```
客户端 → Gateway（网关）→ Service A（业务服务）
                         → Service B（业务服务）
                         → Service C（业务服务）
注册中心（Nacos）：所有服务注册到这里
配置中心（Nacos Config）：统一管理配置
```

## Nacos

### 注册中心

```yaml
spring:
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848
```

### 配置中心

```yaml
spring:
  cloud:
    nacos:
      config:
        server-addr: localhost:8848
        file-extension: yaml
```

## OpenFeign（服务间调用）

```java
@FeignClient("user-service")
public interface UserClient {
    @GetMapping("/api/users/{id}")
    User getUser(@PathVariable("id") Long id);
}

// 使用
@Autowired
private UserClient userClient;

public void doSomething() {
    User user = userClient.getUser(1L);
}
```

## Gateway（网关）

```yaml
spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://user-service
          predicates:
            - Path=/api/users/**
```

## Sentinel（流量控制）

```java
@RestController
public class DemoController {

    @GetMapping("/hello")
    @SentinelResource(value = "hello", fallback = "fallback")
    public String hello() {
        return "Hello";
    }

    public String fallback(Throwable t) {
        return "服务繁忙，请稍后重试";
    }
}
```
