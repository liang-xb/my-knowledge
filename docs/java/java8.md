# Java 8 新特性

Java 8 是 Java 发展的里程碑版本。

## Lambda 表达式

```java
// 传统写法
new Thread(new Runnable() {
    @Override
    public void run() {
        System.out.println("Hello");
    }
}).start();

// Lambda 写法
new Thread(() -> System.out.println("Hello")).start();
```

### 语法

```java
(参数) -> { 方法体 }

// 单参数可省略括号
x -> x * 2

// 单行可省略 return 和 {}
(a, b) -> a + b
```

## Stream API

```java
List<String> list = Arrays.asList("apple", "banana", "orange");

// 过滤
list.stream().filter(s -> s.startsWith("a")).forEach(System.out::println);

// 映射
list.stream().map(String::toUpperCase).collect(Collectors.toList());

// 排序
list.stream().sorted().collect(Collectors.toList());

// 统计
long count = list.stream().filter(s -> s.length() > 5).count();
```

### Stream 操作分类

| 操作 | 类型 | 示例 |
|------|------|------|
| filter | 中间 | 过滤 |
| map | 中间 | 转换 |
| sorted | 中间 | 排序 |
| collect | 终止 | 收集 |
| forEach | 终止 | 遍历 |
| count | 终止 | 计数 |
| reduce | 终止 | 归约 |

## Optional

```java
// 避免 NullPointerException
Optional<String> opt = Optional.ofNullable(value);
opt.ifPresent(System.out::println);
String result = opt.orElse("默认值");
String result2 = opt.orElseThrow(() -> new RuntimeException("为空"));
```

## 方法引用

```java
// 静态方法引用
list.forEach(System.out::println);

// 构造方法引用
Supplier<Student> supplier = Student::new;
```

## 新的日期 API

```java
LocalDate date = LocalDate.now();
LocalTime time = LocalTime.now();
LocalDateTime dateTime = LocalDateTime.now();

// 日期格式化
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
String formatted = date.format(formatter);
```
