# 设计模式

常见设计模式的 Java 实现。

## 创建型模式

### 单例模式

```java
// 饿汉式
public class Singleton {
    private static final Singleton INSTANCE = new Singleton();
    private Singleton() {}
    public static Singleton getInstance() { return INSTANCE; }
}

// 懒汉式（双重检查锁）
public class Singleton {
    private static volatile Singleton instance;
    private Singleton() {}
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
```

### 工厂模式

```java
interface Product { void use(); }

class ProductA implements Product {
    public void use() { System.out.println("A"); }
}

class ProductFactory {
    public static Product create(String type) {
        return switch (type) {
            case "A" -> new ProductA();
            default -> throw new IllegalArgumentException();
        };
    }
}
```

### 建造者模式

```java
@Builder  // Lombok
public class User {
    private String name;
    private int age;
    private String email;
}
```

## 结构型模式

### 适配器模式

```java
// 将旧接口适配为新接口
class OldService { void oldMethod() {} }

interface NewService { void newMethod(); }

class Adapter implements NewService {
    private OldService oldService;
    public void newMethod() { oldService.oldMethod(); }
}
```

### 代理模式

```java
// Spring AOP 就是基于动态代理
interface Service { void doSomething(); }

class ServiceProxy implements Service {
    private Service target;
    public void doSomething() {
        System.out.println("前置增强");
        target.doSomething();
        System.out.println("后置增强");
    }
}
```

## 常用模式速查

| 模式 | 应用 |
|------|------|
| 单例 | Spring Bean（默认） |
| 工厂 | BeanFactory |
| 代理 | AOP |
| 模板方法 | JdbcTemplate、RestTemplate |
| 观察者 | 事件监听 |
| 策略 | 支付策略选择 |
| 责任链 | 过滤器链 |
