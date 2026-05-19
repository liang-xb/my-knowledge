# Redis

Redis 是一个高性能的 key-value 内存数据库。

## 五大数据类型

| 类型 | 特点 | 常用场景 |
|------|------|----------|
| String | 字符串 | 缓存、计数器、分布式锁 |
| Hash | 哈希表 | 存储对象 |
| List | 列表 | 消息队列、最新列表 |
| Set | 无序集合 | 去重、共同好友 |
| ZSet | 有序集合 | 排行榜 |

## 常用命令

```bash
# String
SET key value
GET key
SETEX key 60 value    # 带过期时间
INCR key              # 自增

# Hash
HSET user:1 name "张三" age 20
HGET user:1 name
HGETALL user:1

# List
LPUSH list 1 2 3
RPOP list
LRANGE list 0 -1

# Set
SADD set 1 2 3
SISMEMBER set 1    # 判断是否存在

# ZSet
ZADD rank 100 player1
ZRANGE rank 0 -1 WITHSCORES   # 按分数排序
```

## 过期策略

```bash
EXPIRE key 60        # 60秒后过期
TTL key              # 查看剩余时间
PERSIST key          # 移除过期时间
```

## 缓存穿透/击穿/雪崩

| 问题 | 原因 | 解决方案 |
|------|------|----------|
| 穿透 | 查不存在的数据 | 布隆过滤器、缓存空值 |
| 击穿 | 热点 key 过期 | 互斥锁、永不过期 |
| 雪崩 | 大量 key 同时过期 | 随机过期时间、多级缓存 |

## Java 使用 Redis

### Spring Data Redis

```java
@Autowired
private StringRedisTemplate redisTemplate;

// 操作 Redis
redisTemplate.opsForValue().set("key", "value", 60, TimeUnit.SECONDS);
String value = redisTemplate.opsForValue().get("key");
```

## 持久化

| 方式 | 说明 | 优劣 |
|------|------|------|
| RDB | 快照 | 恢复快，可能丢数据 |
| AOF | 日志 | 数据全，文件大 |
| 混合 | RDB + AOF | 兼顾两者优点 |
