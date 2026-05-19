# JavaSE — 第三阶段

Java 高级特性。

## 学习目标

- 掌握集合框架
- 理解泛型、IO、多线程
- 了解反射和注解

## 知识点

### 1. 集合框架

```java
// List
List<String> list = new ArrayList<>();
list.add("A");

// Set — 去重
Set<Integer> set = new HashSet<>();
set.add(1);

// Map — 键值对
Map<String, Integer> map = new HashMap<>();
map.put("key", 1);
```

### 2. 泛型

```java
// 泛型类
public class Box<T> {
    private T value;
    public T getValue() { return value; }
    public void setValue(T value) { this.value = value; }
}

// 泛型方法
public static <T> T getFirst(List<T> list) {
    return list.get(0);
}
```

### 3. IO 流

```java
// 读取文件
try (BufferedReader reader = new BufferedReader(new FileReader("input.txt"))) {
    String line;
    while ((line = reader.readLine()) != null) {
        System.out.println(line);
    }
}

// 写入文件
try (BufferedWriter writer = new BufferedWriter(new FileWriter("output.txt"))) {
    writer.write("Hello World");
}
```

### 4. 多线程

```java
// 方式一：继承 Thread
class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("线程运行");
    }
}

// 方式二：实现 Runnable
Thread t = new Thread(() -> {
    System.out.println("线程运行");
});
t.start();
```

### 5. 反射

```java
Class<?> clazz = Class.forName("com.example.Student");
Object obj = clazz.getDeclaredConstructor().newInstance();
Method method = clazz.getMethod("study");
method.invoke(obj);
```
