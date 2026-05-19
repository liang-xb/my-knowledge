# NumPy

NumPy 是 Python 科学计算的基础库，提供高性能的数组运算。

## 安装

```bash
pip install numpy
```

## 创建数组

```python
import numpy as np

# 从列表创建
a = np.array([1, 2, 3])

# 全零/全一数组
zeros = np.zeros((3, 3))
ones = np.ones((2, 4))

# 指定范围
np.arange(0, 10, 2)        # [0, 2, 4, 6, 8]
np.linspace(0, 1, 5)       # [0, 0.25, 0.5, 0.75, 1]

# 随机数组
np.random.rand(3, 2)        # [0,1) 均匀分布
np.random.randn(3, 2)       # 标准正态分布
np.random.randint(0, 10, (3, 2))  # 随机整数
```

## 数组属性

```python
arr = np.array([[1, 2, 3], [4, 5, 6]])

arr.shape      # (2, 3) — 维度
arr.ndim       # 2 — 维数
arr.size       # 6 — 元素总数
arr.dtype      # 数据类型
```

## 数组运算

```python
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# 逐元素运算
a + b      # [5, 7, 9]
a * b      # [4, 10, 18]
a ** 2     # [1, 4, 9]

# 矩阵运算
a @ b      # 点积 = 32
np.dot(a, b)
```

## 索引与切片

```python
arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

arr[0, 1]         # 2
arr[:, 0]          # 第一列 [1, 4, 7]
arr[1:, :2]        # [[4,5], [7,8]]

# 布尔索引
arr[arr > 5]       # [6, 7, 8, 9]
```

## 常用函数

```python
arr = np.array([1, 2, 3, 4, 5])

arr.sum()         # 求和
arr.mean()        # 均值
arr.std()         # 标准差
arr.min()         # 最小值
arr.max()         # 最大值
np.median(arr)    # 中位数
np.percentile(arr, 50)  # 百分位数
```

## 变形

```python
arr = np.arange(6)  # [0,1,2,3,4,5]
arr.reshape(2, 3)   # [[0,1,2],[3,4,5]]
arr.reshape(-1, 2)  # 自动计算行数
```
