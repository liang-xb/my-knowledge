# 前端框架

主流前端框架对比与选择指南。

## 三大框架对比

| 特性 | Vue | React | Angular |
|------|-----|-------|---------|
| 作者 | 尤雨溪 | Meta | Google |
| 学习曲线 | 平缓 | 中等 | 陡峭 |
| 数据绑定 | 双向 | 单向 | 双向 |
| 语法 | 模板 + 选项式 | JSX | 模板 |
| 生态 | 完善 | 极其丰富 | 大而全 |
| 适用场景 | 中小项目 | 中大项目 | 大型企业级 |

## Vue（推荐）

```vue
<template>
  <div class="app">
    <h1>{{ message }}</h1>
    <button @click="increment">计数: {{ count }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('Hello Vue!');
const count = ref(0);

function increment() {
  count.value++;
}
</script>
```

适合：中小项目、快速开发、新手友好

## React

```jsx
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello React!</h1>
      <button onClick={() => setCount(count + 1)}>
        计数: {count}
      </button>
    </div>
  );
}
```

适合：中大型项目、团队协作、生态需求高

## 如何选择

| 场景 | 推荐 |
|------|------|
| 初学者 | Vue |
| 国内就业 | Vue、React |
| 外包/快速开发 | Vue |
| 大型企业 | React、Angular |
| 个人项目 | Vue |
