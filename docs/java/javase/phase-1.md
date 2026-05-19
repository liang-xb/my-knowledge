# JavaSE — 第一阶段

Java 基础语法入门。

## 学习目标

- 掌握 Java 基本语法
- 理解面向对象基础
- 能写简单的控制台程序

## 知识点

### 1. Java 概述
- Java 语言特点（跨平台、面向对象）
- JDK、JRE、JVM 的关系
- 第一个程序：HelloWorld

### 2. 变量和数据类型

```java
// 基本数据类型
byte b = 127;
short s = 32767;
int i = 100;
long l = 100L;
float f = 3.14f;
double d = 3.14159;
char c = 'A';
boolean flag = true;

// 引用类型
String str = "Hello";
int[] arr = {1, 2, 3};
```

### 3. 运算符

| 类型 | 符号 |
|------|------|
| 算术 | + - * / % ++ -- |
| 比较 | == != > < >= <= |
| 逻辑 | && \|\| ! |
| 赋值 | = += -= *= /= |
| 三元 | ? : |

### 4. 流程控制

```java
// if-else
if (score >= 90) {
    grade = 'A';
} else if (score >= 60) {
    grade = 'B';
} else {
    grade = 'C';
}

// switch
switch (day) {
    case 1: System.out.println("周一"); break;
    default: System.out.println("其他");
}

// for 循环
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}

// while 循环
while (condition) {
    // ...
}
```

### 5. 数组

```java
int[] arr = new int[5];
int[] arr2 = {1, 2, 3, 4, 5};

// 遍历
for (int i = 0; i < arr2.length; i++) {
    System.out.println(arr2[i]);
}

// 增强 for
for (int num : arr2) {
    System.out.println(num);
}
```
