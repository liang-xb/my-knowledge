# 蓝桥杯

蓝桥杯全国软件和信息技术专业人才大赛——Java 组备赛笔记。

## 比赛信息

| 项目 | 说明 |
|------|------|
| 主办方 | 工业和信息化部人才交流中心 |
| 语言组 | C/C++、Java、Python |
| 赛制 | 省赛 → 国赛 |

## Java 组考点

- **基础语法**：输入输出、字符串处理、日期处理
- **数据结构**：数组、List、Map、Set、Stack、Queue
- **算法**：排序、查找、递归、贪心、DP
- **数学**：数论、排列组合、大数运算

## 常用模板

```java
// 快速输入
Scanner sc = new Scanner(System.in);
int n = sc.nextInt();

// 排序
Arrays.sort(arr);

// 集合
Set<Integer> set = new HashSet<>();
Map<Integer, Integer> map = new HashMap<>();

// 大数
BigInteger a = new BigInteger("123456789");
```

## 注意事项

1. 类名必须是 `Main`
2. 不要有 `package` 声明
3. 注意时间复杂度和空间限制
4. 提交前删除所有调试输出
5. 大数运算用 `BigInteger`

## 常用技巧

- 日期计算用 `Calendar` 或 `LocalDate`
- 字符串拼接用 `StringBuilder`
- `BufferedReader` 比 `Scanner` 更快
- 递归注意栈溢出，必要时转迭代
