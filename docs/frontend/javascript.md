# JavaScript

JavaScript 是前端开发的核心编程语言。

## 基础知识

### 变量声明

```javascript
// let — 可变变量（推荐）
let name = '张三';

// const — 常量（优先使用）
const PI = 3.14159;

// var — 旧语法，不推荐
var age = 20;
```

### 数据类型

```javascript
// 基本类型
let str = 'hello';           // string
let num = 42;                // number
let bool = true;             // boolean
let empty = null;            // null
let undef;                   // undefined

// 引用类型
let arr = [1, 2, 3];        // Array
let obj = { name: '张三' };  // Object
```

### 函数

```javascript
// 普通函数
function add(a, b) {
  return a + b;
}

// 箭头函数（推荐）
const multiply = (a, b) => a * b;

// 回调函数
arr.map(item => item * 2);
```

## ES6+ 重要特性

### 解构赋值

```javascript
const { name, age } = user;
const [first, second] = arr;
```

### 模板字符串

```javascript
const msg = `你好 ${name}，今年 ${age} 岁`;
```

### 展开运算符

```javascript
const newArr = [...oldArr, 4, 5];
const newObj = { ...oldObj, name: '李四' };
```

## 异步编程

```javascript
// Promise
fetch('/api/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// async / await（推荐）
async function getData() {
  try {
    const res = await fetch('/api/data');
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
```

## DOM 操作

```javascript
const el = document.querySelector('.box');
el.addEventListener('click', () => {
  el.classList.toggle('active');
});
```
