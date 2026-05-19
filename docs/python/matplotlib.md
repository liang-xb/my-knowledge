# Matplotlib

Matplotlib 是 Python 最基础的数据可视化库。

## 安装

```bash
pip install matplotlib
```

## 基本用法

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.plot(x, y)
plt.title('正弦函数')
plt.xlabel('X 轴')
plt.ylabel('Y 轴')
plt.grid(True)
plt.show()
```

## 常用图表

### 折线图

```python
plt.plot(x, y1, label='Line 1')
plt.plot(x, y2, label='Line 2', linestyle='--')
plt.legend()
plt.show()
```

### 柱状图

```python
categories = ['A', 'B', 'C', 'D']
values = [10, 25, 15, 30]

plt.bar(categories, values, color=['#3b82f6', '#10b981', '#f59e0b', '#ef4444'])
plt.title('柱状图示例')
plt.show()
```

### 饼图

```python
sizes = [30, 25, 20, 15, 10]
labels = ['Python', 'Java', 'JS', 'C++', '其他']
colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']
explode = (0.05, 0, 0, 0, 0)  # 突出第一块

plt.pie(sizes, labels=labels, colors=colors, explode=explode,
        autopct='%1.1f%%', startangle=90)
plt.title('编程语言占比')
plt.axis('equal')
plt.show()
```

### 散点图

```python
x = np.random.randn(100)
y = np.random.randn(100)
colors = np.random.rand(100)

plt.scatter(x, y, c=colors, alpha=0.6, cmap='viridis')
plt.colorbar()
plt.show()
```

### 子图

```python
fig, axes = plt.subplots(2, 2, figsize=(10, 8))

axes[0, 0].plot(x, y)
axes[0, 0].set_title('折线图')

axes[0, 1].bar(categories, values)
axes[0, 1].set_title('柱状图')

axes[1, 0].scatter(x, y)
axes[1, 0].set_title('散点图')

axes[1, 1].hist(np.random.randn(1000))
axes[1, 1].set_title('直方图')

plt.tight_layout()
plt.show()
```

## 中文支持

```python
plt.rcParams['font.sans-serif'] = ['SimHei']  # 或 ['Microsoft YaHei']
plt.rcParams['axes.unicode_minus'] = False    # 解决负号显示问题
```
