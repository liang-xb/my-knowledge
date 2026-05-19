# MyBatis-Plus

MyBatis-Plus 是 MyBatis 的增强工具，简化 CRUD 操作。

## 核心特性

- **无侵入**：只做增强不做改变
- **通用 CRUD**：内置 BaseMapper
- **条件构造器**：强大的 Wrapper 查询
- **分页插件**：自动分页
- **代码生成器**：快速生成代码

## 快速入门

```java
// Entity
@Data
@TableName("user")
public class User {
    @TableId(type = IdType.AUTO)
    private Long id;
    private String name;
    private Integer age;
}

// Mapper
@Mapper
public interface UserMapper extends BaseMapper<User> {
    // 继承 BaseMapper 后拥有通用 CRUD，无需写 SQL
}
```

## 常用操作

```java
// 插入
userMapper.insert(user);

// 根据 ID 查询
User user = userMapper.selectById(1L);

// 条件查询
List<User> users = userMapper.selectList(
    new LambdaQueryWrapper<User>()
        .eq(User::getAge, 20)
        .like(User::getName, "张")
);

// 分页查询
Page<User> page = new Page<>(1, 10);
userMapper.selectPage(page, null);

// 更新
userMapper.updateById(user);

// 删除
userMapper.deleteById(1L);
```

## 条件构造器

```java
// 等值查询
new LambdaQueryWrapper<User>().eq(User::getName, "张三");

// 模糊查询
new LambdaQueryWrapper<User>().like(User::getName, "张");

// 范围查询
new LambdaQueryWrapper<User>().between(User::getAge, 18, 30);

// 排序
new LambdaQueryWrapper<User>().orderByDesc(User::getCreateTime);

// 分组
new LambdaQueryWrapper<User>().groupBy(User::getAge);
```

## 分页配置

```java
@Configuration
public class MybatisPlusConfig {
    @Bean
    public MybatisPlusInterceptor mybatisPlusInterceptor() {
        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
        interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.MYSQL));
        return interceptor;
    }
}
```
