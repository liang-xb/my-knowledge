---
outline: [2, 3]
aside: right
---

# MyBatis

---

官网：<https://mybatis.org/mybatis-3/zh_CN/getting-started.html>

## 基本介绍

MyBatis 是一款优秀的**持久层框架**，用于简化 JDBC 开发。前身是 Apache 的开源项目 iBatis，2010 年更名为 MyBatis。

**对比 JDBC 的优势：** 原生的 JDBC 需要大量代码完成连接、预编译、处理结果集、释放资源等操作，MyBatis 只需几行注解或 XML 配置即可完成相同的功能。

## 入门程序

### 创建项目

创建 SpringBoot 项目，勾选三个依赖：**Lombok、MySQL Driver、MyBatis Framework**。

### 配置数据库连接

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/web
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.username=root
spring.datasource.password=root@1234
```

### 数据准备

```sql
CREATE TABLE user(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT COMMENT 'ID',
    username VARCHAR(20) COMMENT '用户名',
    password VARCHAR(32) COMMENT '密码',
    name VARCHAR(10) COMMENT '姓名',
    age TINYINT UNSIGNED COMMENT '年龄'
) COMMENT '用户表';
```

### 实体类

实体类的属性名与表的字段名一一对应：

```java
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private Integer id;
    private String username;
    private String password;
    private String name;
    private Integer age;
}
```

### Mapper 接口

在 `mapper` 包下创建持久层接口（命名规范：`XxxMapper`）：

```java
@Mapper
public interface UserMapper {
    @Select("select * from user")
    List<User> findAll();
}
```

| 注解 | 说明 |
| ---- | ---- |
| `@Mapper` | 标记为 MyBatis Mapper 接口，框架自动生成代理对象，并交给 Spring IoC 容器管理 |
| `@Select` | 声明 select 查询语句 |

### 单元测试

```java
@SpringBootTest
class SpringbootMybatisQuickstartApplicationTests {
    @Autowired
    private UserMapper userMapper;

    @Test
    public void testFindAll() {
        List<User> userList = userMapper.findAll();
        userList.forEach(System.out::println);
    }
}
```

### 配置 SQL 日志

```properties
mybatis.configuration.log-impl=org.apache.ibatis.logging.stdout.StdOutImpl
```

## 连接池

### 为什么需要连接池

每次执行 SQL 都创建新连接、执行完毕释放连接，频繁创建/销毁非常消耗性能。

数据库连接池在程序启动时预先创建一定数量的 Connection 对象，客户端执行 SQL 时从池中获取、用完归还，实现**资源重用**、**提升响应速度**、**避免连接遗漏**。

### 常见连接池

C3P0、DBCP、Druid、**Hikari（SpringBoot 默认）**。目前 Hikari 和 Druid 使用较多。

### 切换为 Druid

```xml
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>druid-spring-boot-starter</artifactId>
    <version>1.2.19</version>
</dependency>
```

```properties
spring.datasource.type=com.alibaba.druid.pool.DruidDataSource
spring.datasource.druid.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.druid.url=jdbc:mysql://localhost:3306/web
spring.datasource.druid.username=root
spring.datasource.druid.password=1234
```

## CRUD 操作

### 动态参数占位符

使用 `#{...}` 作为参数占位符，方法参数值会自动替换占位符。

| 注解 | 说明 |
| ---- | ---- |
| `@Delete` | 删除，返回删除行数 |
| `@Insert` | 新增 |
| `@Update` | 更新 |
| `@Select` | 查询 |

### DELETE

```java
@Delete("delete from user where id = #{id}")
void deleteById(Integer id);
```

### INSERT

多个参数时封装到对象中，通过 `#{对象属性名}` 获取属性值：

```java
@Insert("insert into user(username, password, name, age) values(#{username}, #{password}, #{name}, #{age})")
void insert(User user);
```

### UPDATE

```java
@Update("update user set username=#{username}, password=#{password}, name=#{name}, age=#{age} where id=#{id}")
void update(User user);
```

### SELECT

多参数使用 `@Param` 注解指定参数名（官方骨架创建的 SpringBoot 项目会保留形参名，可以省略）：

```java
@Select("select * from user where username = #{username} and password = #{password}")
User findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);
```

## XML 映射文件

### 使用场景

- **注解**：适合简单的增删改查
- **XML 配置**：适合复杂的 SQL 功能

### ⭐ 配置规范

1. XML 文件名与 Mapper **接口名一致**，放在相同包下（**同包同名**）
2. **namespace** 为 Mapper 接口全限定名
3. SQL 语句的 **id** 与 Mapper 接口**方法名一致**，返回类型一致
4. **resultType** 的值与返回的单条记录类型一致

> 一个方法对应的 SQL **不能同时使用注解和 XML 配置**。

### 模板

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
  "https://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.itheima.mapper.EmpMapper">
    <select id="findAll" resultType="com.itheima.pojo.User">
        select * from user
    </select>
</mapper>
```

### 封装标签

| 标签 | 说明 |
| ---- | ---- |
| `resultMap` | 手动封装映射关系 |
| `<id>` | 主键映射 |
| `<result>` | 普通字段映射，共有属性：`column`、`property` |
| `<collection>` | 集合封装，`ofType` 指定集合元素类型 |
| `<association>` | 一对一/多对一关联封装，`select` 指定嵌套查询方法 |

```xml
<association property="region" javaType="Region" column="region_id"
             select="com.dkd.manage.mapper.RegionMapper.selectRegionById"/>
```

### ⭐ 动态 SQL

| 标签 | 说明 |
| ---- | ---- |
| `<if test="...">` | 条件判断，true 则拼接 SQL |
| `<where>` | 自动生成 WHERE 关键字，去除多余的 AND/OR |
| `<set>` | 自动生成 SET 关键字，配合 if 去除多余逗号 |
| `<foreach>` | 遍历集合，`collection`/`item`/`separator`/`open`/`close` |
| `<sql>` + `<include>` | 定义和复用 SQL 片段 |

```xml
<!-- where + if -->
<select id="list" resultType="com.itheima.pojo.Emp">
    select e.*, d.name deptName from emp e left join dept d on e.dept_id = d.id
    <where>
        <if test="name != null and name != ''">
            e.name like concat('%', #{name}, '%')
        </if>
        <if test="gender != null">
            and e.gender = #{gender}
        </if>
    </where>
</select>

<!-- set + if -->
<update id="updateById">
    update emp
    <set>
        <if test="username != null and username != ''">username = #{username},</if>
        <if test="password != null and password != ''">password = #{password},</if>
    </set>
    where id = #{id}
</update>

<!-- foreach 批量插入 -->
<insert id="insertBatch">
    insert into emp_expr (emp_id, begin, end, company, job) values
    <foreach collection="exprList" item="expr" separator=",">
        (#{expr.empId}, #{expr.begin}, #{expr.end}, #{expr.company}, #{expr.job})
    </foreach>
</insert>

<!-- foreach 批量删除 -->
<delete id="deleteByIds">
    delete from emp where id in
    <foreach collection="ids" item="id" open="(" close=")" separator=",">
        #{id}
    </foreach>
</delete>
```

### MyBatisX 插件

IDEA 插件，提供 Mapper 接口与 XML 之间快速跳转、代码生成等功能。

### 指定 XML 映射文件位置

如果 XML 映射文件位置不符合规范（未与 Mapper 接口同包），需手动指定：

```properties
mybatis.mapper-locations=classpath:mapper/*.xml
```

## YML 配置文件

### 基本语法

application.yml 相比 properties 层级结构更清晰。

| 规则 | 说明 |
| ---- | ---- |
| 大小写敏感 | — |
| 数值前必须有空格 | 作为分隔符 |
| 用缩进表示层级 | 只能用空格，不允许 Tab |
| `#` 表示注释 | 从 `#` 到行尾被忽略 |

```yaml
# 对象/Map
user:
  name: zhangsan
  age: 18

# 数组/List/Set
hobby:
  - java
  - game
  - sport
```

> 以 `0` 开头的值需要加引号 `'0xxx'`，否则会被解析为八进制。
