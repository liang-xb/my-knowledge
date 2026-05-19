# RabbitMQ

RabbitMQ 是一个开源的消息队列中间件。

## 核心概念

| 概念 | 说明 |
|------|------|
| Producer | 生产者，发送消息 |
| Consumer | 消费者，接收消息 |
| Queue | 队列，存储消息 |
| Exchange | 交换机，路由消息 |
| Binding | 绑定，Exchange 和 Queue 的关联 |

## 消息模式

### 简单模式

```
Producer → Queue → Consumer
```

### Work 模式（竞争消费）

```
Producer → Queue → Consumer1
                  → Consumer2
```

### 发布/订阅模式

```
Producer → Exchange → Queue1 → Consumer1
                    → Queue2 → Consumer2
```

### 路由模式

```
Producer → Exchange(routing key) → Queue1 → Consumer1
                                 → Queue2 → Consumer2
```

## Spring Boot 集成

### 依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-amqp</artifactId>
</dependency>
```

### 配置

```yaml
spring:
  rabbitmq:
    host: localhost
    port: 5672
    username: guest
    password: guest
```

### 发送消息

```java
@Autowired
private RabbitTemplate rabbitTemplate;

public void send() {
    rabbitTemplate.convertAndSend("exchange", "routing.key", "hello");
}
```

### 接收消息

```java
@Component
public class MessageReceiver {

    @RabbitListener(queues = "my.queue")
    public void receive(String message) {
        System.out.println("收到消息：" + message);
    }
}
```

## 应用场景

| 场景 | 说明 |
|------|------|
| 异步处理 | 耗时操作异步执行 |
| 应用解耦 | 服务间通过消息通信 |
| 流量削峰 | 应对突发流量 |
| 日志收集 | 统一日志处理 |
