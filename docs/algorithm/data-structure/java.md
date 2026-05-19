# 数据结构 — Java 版本

Java 中常用数据结构的实现和使用。

## 数组

```java
int[] arr = new int[10];
int[] arr2 = {1, 2, 3, 4, 5};
Arrays.sort(arr);
Arrays.fill(arr, 0);
```

## List

```java
// ArrayList — 查询快
List<Integer> list = new ArrayList<>();
list.add(1);
list.get(0);
list.remove(0);
list.size();

// LinkedList — 增删快
LinkedList<Integer> linkedList = new LinkedList<>();
linkedList.addFirst(1);
linkedList.addLast(2);
linkedList.removeFirst();
```

## Map

```java
// HashMap — 无序
Map<String, Integer> map = new HashMap<>();
map.put("key", 1);
map.get("key");
map.containsKey("key");
map.remove("key");

// 遍历
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    entry.getKey();
    entry.getValue();
}
```

## Set

```java
// HashSet — 去重
Set<Integer> set = new HashSet<>();
set.add(1);
set.contains(1);
set.remove(1);

// TreeSet — 有序
Set<Integer> treeSet = new TreeSet<>();
```

## Stack

```java
Stack<Integer> stack = new Stack<>();
stack.push(1);
stack.pop();
stack.peek();
stack.isEmpty();
```

## Queue

```java
Queue<Integer> queue = new LinkedList<>();
queue.offer(1);
queue.poll();
queue.peek();
queue.isEmpty();

// 双端队列
Deque<Integer> deque = new ArrayDeque<>();
deque.addFirst(1);
deque.addLast(2);
deque.pollFirst();
deque.pollLast();
```

## PriorityQueue (堆)

```java
// 小顶堆
PriorityQueue<Integer> minHeap = new PriorityQueue<>();
// 大顶堆
PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);
```

## String / StringBuilder

```java
String s = "hello";
s.length();
s.charAt(0);
s.substring(0, 3);
s.toCharArray();

StringBuilder sb = new StringBuilder();
sb.append("hello");
sb.reverse();
sb.toString();
```
