# JavaSE — 第二阶段

面向对象编程核心。

## 学习目标

- 深入理解面向对象三大特性
- 掌握常用 API
- 理解异常处理机制

## 知识点

### 1. 类与对象

```java
public class Student {
    // 属性
    private String name;
    private int age;

    // 构造器
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // 方法
    public void study() {
        System.out.println(name + "在学习");
    }

    // Getter / Setter
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}
```

### 2. 封装、继承、多态

```java
// 继承
public class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("汪汪");
    }
}

// 多态
Animal animal = new Dog();
animal.makeSound(); // 输出：汪汪
```

### 3. 抽象类和接口

```java
// 抽象类
abstract class Shape {
    abstract double area();
}

// 接口
interface Flyable {
    void fly();
}
```

### 4. 常用类

| 类 | 说明 |
|----|------|
| String | 字符串 |
| StringBuilder | 可变字符串 |
| Math | 数学运算 |
| Arrays | 数组工具 |
| Objects | 对象工具 |

### 5. 异常处理

```java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("除零异常：" + e.getMessage());
} finally {
    System.out.println("始终执行");
}
```
