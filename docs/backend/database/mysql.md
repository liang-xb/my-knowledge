# MySQL

MySQL 是最流行的开源关系型数据库。

## 基础概念

### 数据库三范式

| 范式 | 要求 |
|------|------|
| 1NF | 列不可再分，原子性 |
| 2NF | 消除部分依赖（非主键完全依赖主键） |
| 3NF | 消除传递依赖（非主键不依赖其他非主键） |

## 常用 SQL

### 数据库操作

```sql
CREATE DATABASE mydb;
USE mydb;
DROP DATABASE mydb;
```

### 表操作

```sql
CREATE TABLE student (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    age INT DEFAULT 18,
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 增
INSERT INTO student (name, age) VALUES ('张三', 20);

-- 删
DELETE FROM student WHERE id = 1;

-- 改
UPDATE student SET age = 21 WHERE id = 1;

-- 查
SELECT * FROM student WHERE age > 18 ORDER BY id DESC LIMIT 10;
```

### 联表查询

```sql
-- 内连接
SELECT * FROM student s
INNER JOIN class c ON s.class_id = c.id;

-- 左连接
SELECT * FROM student s
LEFT JOIN class c ON s.class_id = c.id;
```

## 索引

```sql
-- 创建索引
CREATE INDEX idx_name ON student(name);

-- 联合索引（最左匹配原则）
CREATE INDEX idx_name_age ON student(name, age);
```

## 事务

```sql
START TRANSACTION;
UPDATE account SET balance = balance - 100 WHERE id = 1;
UPDATE account SET balance = balance + 100 WHERE id = 2;
COMMIT; -- 或 ROLLBACK;
```

### ACID 特性

| 特性 | 说明 |
|------|------|
| 原子性 | 操作不可分割 |
| 一致性 | 数据状态一致 |
| 隔离性 | 事务互不干扰 |
| 持久性 | 提交后永久保存 |

## 常用函数

| 函数 | 说明 |
|------|------|
| COUNT() | 计数 |
| SUM() | 求和 |
| AVG() | 平均值 |
| MAX() / MIN() | 最值 |
| GROUP_CONCAT() | 分组拼接 |
