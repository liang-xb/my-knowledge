# HTML

HTML（HyperText Markup Language）是网页的骨架。

## 基本结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>页面标题</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
```

## 常用标签

### 文本标签

| 标签 | 说明 |
|------|------|
| `<h1>` ~ `<h6>` | 标题 |
| `<p>` | 段落 |
| `<span>` | 行内文本 |
| `<a>` | 超链接 |
| `<br>` | 换行 |

### 布局标签

| 标签 | 说明 |
|------|------|
| `<div>` | 块级容器 |
| `<header>` | 页头 |
| `<nav>` | 导航 |
| `<main>` | 主内容 |
| `<footer>` | 页脚 |
| `<section>` | 分区 |
| `<article>` | 文章 |

### 表单标签

```html
<form action="/submit" method="post">
  <input type="text" placeholder="请输入用户名">
  <input type="password" placeholder="请输入密码">
  <input type="checkbox"> 记住我
  <button type="submit">提交</button>
</form>
```

### 表格

```html
<table>
  <thead>
    <tr><th>姓名</th><th>年龄</th></tr>
  </thead>
  <tbody>
    <tr><td>张三</td><td>20</td></tr>
  </tbody>
</table>
```

## 行内元素 vs 块级元素

| 类型 | 特点 | 示例 |
|------|------|------|
| 块级 | 独占一行 | div, p, h1 |
| 行内 | 不换行 | span, a, img |

## 常用属性

- `class`：类名（可重复）
- `id`：唯一标识（不可重复）
- `style`：行内样式
- `data-*`：自定义数据属性
