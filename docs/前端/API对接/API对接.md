---
sidebar: false
aside: left
outline: [2, 3]
---

# <center>API 对接</center>

---

后端接口写好了，前端怎么优雅地调用？这一篇梳理前后端对接的核心实践。

## 一、axios 封装

### 基础配置

```js
// utils/request.js
import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080',
  timeout: 10000,
})

export default request
```

### 请求拦截器 — 统一加 Token

```js
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)
```

### 响应拦截器 — 统一错误处理

```js
request.interceptors.response.use(
  (response) => {
    const res = response.data
    // 根据后端约定的返回格式判断
    if (res.code !== 200 && res.code !== 0) {
      ElMessage.error(res.message || '请求失败')
      return Promise.reject(new Error(res.message || '请求失败'))
    }
    return res
  },
  (error) => {
    if (error.response?.status === 401) {
      // Token 过期，跳转登录
      localStorage.removeItem('token')
      router.push('/login')
    }
    ElMessage.error(error.message || '网络错误')
    return Promise.reject(error)
  }
)
```

## 二、API 层组织

按模块拆分，一个模块一个文件：

```js
// api/user.js
import request from '@/utils/request'

export function login(data) {
  return request({ url: '/api/user/login', method: 'post', data })
}

export function getUserInfo() {
  return request({ url: '/api/user/info', method: 'get' })
}

export function updatePassword(data) {
  return request({ url: '/api/user/password', method: 'put', data })
}
```

```js
// api/article.js
import request from '@/utils/request'

export function getArticleList(params) {
  return request({ url: '/api/articles', method: 'get', params })
}

export function getArticleDetail(id) {
  return request({ url: `/api/articles/${id}`, method: 'get' })
}

export function createArticle(data) {
  return request({ url: '/api/articles', method: 'post', data })
}

export function deleteArticle(id) {
  return request({ url: `/api/articles/${id}`, method: 'delete' })
}
```

## 三、常见业务模式

### 分页列表

```vue
<script setup>
import { ref, onMounted } from 'vue'
import { getArticleList } from '@/api/article'

const list = ref([])
const total = ref(0)
const query = ref({ page: 1, pageSize: 10 })

const fetchData = async () => {
  const res = await getArticleList(query.value)
  list.value = res.data.records
  total.value = res.data.total
}

const handlePageChange = (page) => {
  query.value.page = page
  fetchData()
}

onMounted(() => fetchData())
</script>
```

### 表单提交（带校验）

```vue
<script setup>
import { reactive, ref } from 'vue'
import { createArticle } from '@/api/article'

const formRef = ref(null)
const form = reactive({ title: '', content: '', category: '' })
const loading = ref(false)

const rules = {
  title: [{ required: true, message: '标题不能为空', trigger: 'blur' }],
  content: [{ required: true, message: '内容不能为空', trigger: 'blur' }],
}

const handleSubmit = async () => {
  const valid = await formRef.value.validate().catch(() => false)
  if (!valid) return
  loading.value = true
  try {
    await createArticle(form)
    ElMessage.success('创建成功')
  } finally {
    loading.value = false
  }
}
</script>
```

## 四、与后端约定最佳实践

| 项目 | 建议 |
|------|------|
| 返回格式 | 统一 `{ code, message, data }` |
| 分页格式 | `{ code, data: { records, total, page, pageSize } }` |
| 时间格式 | ISO 8601 字符串，前端 `dayjs` 格式化 |
| 权限控制 | JWT 放 Header，403 统一跳转 |
| 跨域 | 开发环境 Vite proxy，生产环境 Nginx 反代 |

### Vite 代理配置

```js
// vite.config.js
export default {
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      }
    }
  }
}
```

## 五、总结

核心思路就三点：

1. **axios 封装** — 统一 baseURL、拦截器、错误处理
2. **API 模块化** — 一个业务模块一个 API 文件
3. **与后端约定** — 统一返回格式，减少沟通成本

前端对接后端不是技术难题，是工程规范的体现。
