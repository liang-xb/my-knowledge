# CSS

CSS（Cascading Style Sheets）用于控制网页的样式和布局。

## 引入方式

```html
<!-- 外部样式（推荐） -->
<link rel="stylesheet" href="style.css">

<!-- 内部样式 -->
<style>
  .box { color: red; }
</style>

<!-- 行内样式 -->
<div style="color: red;">
```

## 选择器

```css
/* 标签选择器 */
div { }

/* 类选择器 */
.box { }

/* ID 选择器 */
#app { }

/* 后代选择器 */
.container p { }

/* 伪类选择器 */
a:hover { }
```

## 盒模型

```
┌─────────────┐
│   margin    │
│  ┌───────┐  │
│  │ border │  │
│  │ ┌───┐ │  │
│  │ │pad│ │  │
│  │ │con│ │  │
│  │ └───┘ │  │
│  └───────┘  │
└─────────────┘
```

```css
.box {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 1px solid #ccc;
  margin: 10px;
  box-sizing: border-box; /* 推荐 */
}
```

## Flex 布局

```css
.container {
  display: flex;
  justify-content: center;  /* 主轴对齐 */
  align-items: center;      /* 交叉轴对齐 */
  gap: 16px;                /* 间距 */
}
```

## Grid 布局

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
```

## 常用属性

| 属性 | 说明 |
|------|------|
| `color` | 文字颜色 |
| `background` | 背景 |
| `font-size` | 字体大小 |
| `border-radius` | 圆角 |
| `box-shadow` | 阴影 |
| `transition` | 过渡动画 |
| `opacity` | 透明度 |
| `z-index` | 层级 |
