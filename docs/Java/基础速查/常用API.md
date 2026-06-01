---
sidebar: false
aside: left
outline: [2, 3]
---

# <center>常用 API 速查</center>

---

## String 常用方法

```java
String s = "hello world";

// 基本操作
s.length()              // 长度
s.charAt(0)             // 获取索引处字符 → 'h'
s.substring(0, 5)       // 截取 [0,5) → "hello"
s.contains("wo")        // 是否包含 → true
s.indexOf("o")          // 首次出现位置 → 4
s.lastIndexOf("o")      // 最后出现位置 → 7

// 判断
s.isEmpty()             // 是否空字符串
s.isBlank()             // 是否空白（Java11+）
s.equals("hello")       // 内容比较（不要用 ==）
s.equalsIgnoreCase("HELLO") // 忽略大小写比较

// 转换
s.toUpperCase()         // 转大写
s.toLowerCase()         // 转小写
s.trim()                // 去首尾空格
s.strip()               // 去首尾空格（支持 Unicode，Java11+）
s.replace("o", "x")     // 替换字符
s.replaceAll("\\s", "") // 正则替换（去掉所有空白）

// 分割与拼接
s.split(" ")            // 按空格分割 → ["hello", "world"]
String.join("-", arr)   // 用分隔符拼接数组
```

---

## 包装类

| 基本类型 | 包装类 | 常用方法 |
|----------|--------|----------|
| int | Integer | `Integer.parseInt("123")` `Integer.valueOf(123)` |
| long | Long | `Long.parseLong("123")` |
| double | Double | `Double.parseDouble("3.14")` |
| boolean | Boolean | `Boolean.parseBoolean("true")` |

```java
// 自动装箱/拆箱（Java5+）
Integer i = 100;        // 自动装箱
int n = i;              // 自动拆箱

// 注意：-128~127 有缓存，用 == 比较会出问题
Integer a = 128, b = 128;
a == b;                 // false！用 equals
a.equals(b);            // true
```

---

## 日期与时间（Java8+）

```java
// 本地日期/时间
LocalDate date = LocalDate.now();           // 2026-06-01
LocalTime time = LocalTime.now();           // 14:30:00
LocalDateTime dt = LocalDateTime.now();     // 2026-06-01T14:30:00

// 创建指定日期
LocalDate.of(2026, 6, 1)
LocalDateTime.of(2026, 6, 1, 14, 30)

// 日期运算
date.plusDays(7)        // 加 7 天
date.minusMonths(1)     // 减 1 月
date.withDayOfMonth(1)  // 设为本月第一天

// 格式化
DateTimeFormatter fmt = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
dt.format(fmt)                              // 格式化
LocalDateTime.parse("2026-06-01 14:30:00", fmt)  // 解析

// 计算时间差
Duration.between(time1, time2)   // 时分秒差
Period.between(date1, date2)     // 年月日差
```

---

## 集合常用操作

### List

```java
List<String> list = new ArrayList<>();
list.add("a");
list.add(0, "b");        // 指定位置插入
list.get(0);             // 按索引获取
list.set(0, "c");        // 替换
list.remove(0);          // 按索引删除
list.remove("a");        // 按元素删除
list.contains("a");      // 是否包含
list.size();             // 大小
list.isEmpty();          // 是否为空

// 遍历
for (String s : list) { }
list.forEach(s -> System.out.println(s));

// 排序
Collections.sort(list);
list.sort(Comparator.naturalOrder());
```

### Map

```java
Map<String, Integer> map = new HashMap<>();
map.put("key", 1);
map.get("key");              // 不存在返回 null
map.getOrDefault("key", 0);  // 不存在返回默认值
map.containsKey("key");
map.remove("key");
map.size();

// 遍历
for (Map.Entry<String, Integer> e : map.entrySet()) {
    e.getKey();      // key
    e.getValue();    // value
}
map.forEach((k, v) -> System.out.println(k + "=" + v));
```

### Set

```java
Set<String> set = new HashSet<>();
set.add("a");
set.contains("a");
set.remove("a");
// 去重常用：new ArrayList<>(new HashSet<>(list))
```

---

## Math / Arrays / Collections 工具类

```java
// Math
Math.max(a, b);   Math.min(a, b);
Math.abs(-5);                   // 绝对值 → 5
Math.pow(2, 3);                 // 2³ → 8.0
Math.sqrt(16);                  // 平方根 → 4.0
Math.random();                  // [0, 1) 随机数

// Arrays
Arrays.toString(arr);           // 打印数组
Arrays.sort(arr);               // 排序
Arrays.binarySearch(arr, key);  // 二分查找（需先排序）
Arrays.asList(1, 2, 3);        // 快速创建 List
Arrays.copyOf(arr, newLen);    // 复制数组

// Collections
Collections.sort(list);
Collections.reverse(list);
Collections.shuffle(list);
Collections.max(list);
Collections.min(list);
```

---

> **建议**：不要死记，多用 IDE 的自动补全。写得多了自然就熟了。
