# 章节练习题 — 第二阶段

面向对象编程练习题。

## 练习 1：银行账户

设计一个银行账户类，包含开户、存款、取款功能。

```java
public class BankAccount {
    private String accountNo;
    private double balance;

    public BankAccount(String accountNo) {
        this.accountNo = accountNo;
        this.balance = 0;
    }

    public void deposit(double amount) {
        balance += amount;
        System.out.println("存款成功，余额：" + balance);
    }

    public void withdraw(double amount) {
        if (amount > balance) {
            System.out.println("余额不足");
        } else {
            balance -= amount;
            System.out.println("取款成功，余额：" + balance);
        }
    }
}
```

## 练习 2：继承示例

创建动物类及其子类。

```java
abstract class Animal {
    abstract void makeSound();
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("喵喵");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("汪汪");
    }
}
```

## 练习 3：接口练习

定义一个 USB 接口并通过不同设备实现。

```java
interface USB {
    void connect();
}

class Mouse implements USB {
    @Override
    public void connect() {
        System.out.println("鼠标已连接");
    }
}

class Keyboard implements USB {
    @Override
    public void connect() {
        System.out.println("键盘已连接");
    }
}
```
