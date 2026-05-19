# 单元测试

Java 单元测试使用 JUnit 框架。

## JUnit 5 基础

### 依赖

```xml
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.10.0</version>
    <scope>test</scope>
</dependency>
```

### 基本用法

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {

    @Test
    void testAdd() {
        Calculator calc = new Calculator();
        int result = calc.add(2, 3);
        assertEquals(5, result);
    }

    @Test
    void testDivide() {
        Calculator calc = new Calculator();
        assertThrows(ArithmeticException.class,
            () -> calc.divide(10, 0));
    }
}
```

## 常用注解

| 注解 | 说明 |
|------|------|
| `@Test` | 标记测试方法 |
| `@BeforeEach` | 每个测试方法前执行 |
| `@AfterEach` | 每个测试方法后执行 |
| `@BeforeAll` | 所有测试方法前执行一次 |
| `@AfterAll` | 所有测试方法后执行一次 |
| `@DisplayName` | 测试显示名称 |
| `@Disabled` | 禁用测试 |

## 断言方法

```java
assertEquals(expected, actual);          // 相等
assertNotEquals(expected, actual);       // 不等
assertTrue(condition);                   // 为真
assertFalse(condition);                  // 为假
assertNull(obj);                         // 为 null
assertNotNull(obj);                      // 非 null
assertThrows(Exception.class, () -> {}); // 抛异常
assertTimeout(Duration.ofSeconds(1), () -> {}); // 超时
```

## Mockito — Mock 工具

```java
// 创建 Mock 对象
UserService userService = mock(UserService.class);

// 设置行为
when(userService.findById(1L)).thenReturn(new User("张三"));

// 验证调用
verify(userService, times(1)).findById(1L);
```

## 命名规范

```
方法名_测试场景_期望结果
// 例：add_twoPositiveNumbers_returnsSum
```
