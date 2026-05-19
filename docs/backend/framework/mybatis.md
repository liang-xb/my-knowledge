# MyBatis

MyBatis 是一款优秀的持久层框架，支持自定义 SQL、存储过程和高级映射。

## 核心组件

| 组件 | 说明 |
|------|------|
| SqlSessionFactory | 创建 SqlSession 的工厂 |
| SqlSession | 执行 SQL 的接口 |
| Mapper | 映射接口，定义 SQL 操作 |

## 基础用法

### 依赖

```xml
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.5.15</version>
</dependency>
```

### XML 映射

```xml
<!-- UserMapper.xml -->
<mapper namespace="com.example.mapper.UserMapper">
    <select id="findById" resultType="com.example.entity.User">
        SELECT * FROM user WHERE id = #{id}
    </select>

    <insert id="insert" parameterType="com.example.entity.User">
        INSERT INTO user(name, age) VALUES(#{name}, #{age})
    </insert>

    <update id="update">
        UPDATE user SET name = #{name} WHERE id = #{id}
    </update>

    <delete id="delete">
        DELETE FROM user WHERE id = #{id}
    </delete>
</mapper>
```

### 注解方式

```java
@Mapper
public interface UserMapper {
    @Select("SELECT * FROM user WHERE id = #{id}")
    User findById(Long id);

    @Insert("INSERT INTO user(name, age) VALUES(#{name}, #{age})")
    void insert(User user);
}
```

## 动态 SQL

```xml
<select id="findByCondition" resultType="User">
    SELECT * FROM user
    <where>
        <if test="name != null and name != ''">
            AND name LIKE CONCAT('%', #{name}, '%')
        </if>
        <if test="age != null">
            AND age = #{age}
        </if>
    </where>
</select>
```

### 常用标签

| 标签 | 用途 |
|------|------|
| `<if>` | 条件判断 |
| `<where>` | 自动添加 WHERE |
| `<foreach>` | 遍历集合 |
| `<set>` | UPDATE SET 语句 |
| `<choose>` | 类似 switch |
