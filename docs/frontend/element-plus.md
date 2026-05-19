# Element Plus

Element Plus 是 Vue 3 最流行的 UI 组件库。

## 安装

```bash
npm install element-plus
```

## 完整引入

```javascript
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';

const app = createApp(App);
app.use(ElementPlus);
app.mount('#app');
```

## 常用组件

### 按钮

```vue
<el-button type="primary">主要按钮</el-button>
<el-button type="success">成功按钮</el-button>
<el-button type="danger">危险按钮</el-button>
<el-button :icon="Search" circle />
```

### 表单

```vue
<el-form :model="form" label-width="80px">
  <el-form-item label="用户名">
    <el-input v-model="form.name" />
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="form.password" type="password" />
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">登录</el-button>
  </el-form-item>
</el-form>
```

### 表格

```vue
<el-table :data="tableData" border>
  <el-table-column prop="name" label="姓名" />
  <el-table-column prop="age" label="年龄" />
  <el-table-column label="操作">
    <template #default="scope">
      <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
      <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
    </template>
  </el-table-column>
</el-table>
```

### 对话框

```vue
<el-dialog v-model="visible" title="提示">
  <p>这是对话框内容</p>
  <template #footer>
    <el-button @click="visible = false">取消</el-button>
    <el-button type="primary" @click="visible = false">确定</el-button>
  </template>
</el-dialog>
```

## 常用组件速查

| 组件 | 用途 |
|------|------|
| ElButton | 按钮 |
| ElInput | 输入框 |
| ElSelect | 下拉选择 |
| ElTable | 表格 |
| ElForm | 表单 |
| ElDialog | 对话框 |
| ElMessage | 消息提示 |
| ElPagination | 分页 |
| ElUpload | 文件上传 |
