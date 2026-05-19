# Vue

Vue 3 是当前主流的前端框架，由尤雨溪团队开发。

## Vue 3 核心概念

### 响应式数据

```vue
<script setup>
import { ref, reactive, computed, watch } from 'vue';

// ref — 基本类型响应式
const count = ref(0);

// reactive — 对象响应式
const state = reactive({ name: '张三', age: 20 });

// computed — 计算属性
const doubleCount = computed(() => count.value * 2);

// watch — 监听变化
watch(count, (newVal, oldVal) => {
  console.log(`${oldVal} → ${newVal}`);
});
</script>
```

### 组件通信

```vue
<!-- 父传子：props -->
<script setup>
const props = defineProps({
  title: String,
  count: Number
});
</script>

<!-- 子传父：emit -->
<script setup>
const emit = defineEmits(['update', 'delete']);
emit('update', data);
</script>
```

### 生命周期

| 钩子 | 说明 |
|------|------|
| `onMounted` | 组件挂载后 |
| `onUpdated` | 更新后 |
| `onUnmounted` | 卸载前 |

```vue
<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => console.log('组件已挂载'));
onUnmounted(() => console.log('组件已卸载'));
</script>
```

## Vue Router

```javascript
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('./views/Home.vue') },
  { path: '/about', component: () => import('./views/About.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
```

## Pinia 状态管理

```javascript
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  function increment() { count.value++; }
  return { count, increment };
});
```
