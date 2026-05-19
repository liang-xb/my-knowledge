# 章节练习题 — 第一阶段

Java 基础语法练习题。

## 练习 1：HelloWorld

编写一个 Java 程序，输出 "Hello, World!"。

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

## 练习 2：两数之和

输入两个整数，输出它们的和。

```java
public class Add {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        System.out.println(a + b);
    }
}
```

## 练习 3：判断奇偶

输入一个整数，判断是奇数还是偶数。

```java
public class OddEven {
    public static void main(String[] args) {
        int num = 7;
        if (num % 2 == 0) {
            System.out.println("偶数");
        } else {
            System.out.println("奇数");
        }
    }
}
```

## 练习 4：九九乘法表

使用双重循环打印九九乘法表。

```java
public class MultiplicationTable {
    public static void main(String[] args) {
        for (int i = 1; i <= 9; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j + "×" + i + "=" + (i * j) + "\t");
            }
            System.out.println();
        }
    }
}
```

## 练习 5：数组最值

找出数组中的最大值和最小值。

```java
public class ArrayMinMax {
    public static void main(String[] args) {
        int[] arr = {5, 2, 9, 1, 7};
        int max = arr[0], min = arr[0];
        for (int num : arr) {
            if (num > max) max = num;
            if (num < min) min = num;
        }
        System.out.println("最大值：" + max + "，最小值：" + min);
    }
}
```
