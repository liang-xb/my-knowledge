# IDEA 模板

IDEA 的 Live Templates 和 File Templates 配置。

## Live Templates（代码片段）

`File → Settings → Editor → Live Templates`

### 内置常用模板

| 缩写 | 生成代码 |
|------|----------|
| `psvm` | `public static void main(String[] args)` |
| `sout` | `System.out.println()` |
| `souf` | `System.out.printf()` |
| `fori` | `for (int i = 0; i < ; i++)` |
| `iter` | `for (xx : xx)` |
| `ifn` | `if (xx == null)` |
| `inn` | `if (xx != null)` |

### 自定义模板

1. 进入 Live Templates 设置
2. 点击 `+` → Template Group 创建分组
3. 点击 `+` → Live Template 添加模板

示例 — 日志输出模板：

```
缩写：log
描述：日志输出
模板：
private static final Logger log = LoggerFactory.getLogger($CLASS_NAME$.class);
变量：CLASS_NAME → className()
应用范围：Java → declaration
```

## File Templates（文件模板）

`File → Settings → Editor → File and Code Templates`

### 类注释模板

```java
#if (${PACKAGE_NAME} && ${PACKAGE_NAME} != "")
package ${PACKAGE_NAME};
#end

/**
 * @author lxb
 * @date ${YEAR}-${MONTH}-${DAY}
 * @description
 */
public class ${NAME} {
}
```

## Postfix Completion（后缀补全）

| 输入 | 效果 |
|------|------|
| `变量.sout` | `System.out.println(变量)` |
| `变量.var` | 自动生成变量声明 |
| `变量.nn` | 非空判断 |
| `变量.for` | 增强 for 循环 |
| `变量.fori` | 带索引 for 循环 |
