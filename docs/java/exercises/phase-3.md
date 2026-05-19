# 章节练习题 — 第三阶段

Java 高级特性练习题。

## 练习 1：集合去重与统计

```java
public class CollectionTest {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("apple", "banana", "apple", "orange");

        // 去重
        Set<String> set = new HashSet<>(list);
        System.out.println("去重后：" + set);

        // 统计词频
        Map<String, Integer> map = new HashMap<>();
        for (String s : list) {
            map.put(s, map.getOrDefault(s, 0) + 1);
        }
        System.out.println("词频：" + map);
    }
}
```

## 练习 2：文件读写

```java
public class FileIOTest {
    public static void main(String[] args) {
        // 写入
        try (BufferedWriter writer = new BufferedWriter(new FileWriter("test.txt"))) {
            writer.write("Hello\nJava\nWorld");
        } catch (IOException e) {
            e.printStackTrace();
        }

        // 读取
        try (BufferedReader reader = new BufferedReader(new FileReader("test.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

## 练习 3：多线程打印

交替打印奇偶数。

```java
class PrintNumber {
    private int count = 1;
    private final Object lock = new Object();

    public void printOdd() {
        while (count <= 10) {
            synchronized (lock) {
                if (count % 2 == 1) {
                    System.out.println(Thread.currentThread().getName() + "：" + count++);
                }
            }
        }
    }

    public void printEven() {
        while (count <= 10) {
            synchronized (lock) {
                if (count % 2 == 0) {
                    System.out.println(Thread.currentThread().getName() + "：" + count++);
                }
            }
        }
    }
}
```
