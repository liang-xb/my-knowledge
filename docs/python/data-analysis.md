# 数据分析

Python 数据分析三件套：NumPy、Pandas、Matplotlib。

## 技术栈概览

| 库 | 作用 |
|----|------|
| NumPy | 数值计算、矩阵运算 |
| Pandas | 数据处理、分析 |
| Matplotlib | 数据可视化 |

## 数据读取

```python
import pandas as pd

# 读取 CSV
df = pd.read_csv('data.csv')

# 读取 Excel
df = pd.read_excel('data.xlsx')

# 读取 SQL
from sqlalchemy import create_engine
engine = create_engine('mysql://user:pass@localhost/db')
df = pd.read_sql('SELECT * FROM table', engine)
```

## 数据预览

```python
df.head(10)        # 前 10 行
df.tail(5)         # 后 5 行
df.info()          # 数据类型
df.describe()      # 统计信息
df.shape           # 行列数
df.columns         # 所有列名
```

## 数据清洗

```python
# 处理缺失值
df.dropna()                    # 删除含空值的行
df.fillna(0)                   # 空值填充为 0
df.fillna(df.mean())           # 用均值填充

# 去重
df.drop_duplicates()

# 类型转换
df['age'] = df['age'].astype(int)

# 条件筛选
df[df['age'] > 18]
df[(df['age'] > 18) & (df['city'] == '北京')]
```

## 数据统计

```python
# 分组统计
df.groupby('city')['salary'].mean()
df.groupby('city').agg({'salary': 'mean', 'age': 'max'})

# 排序
df.sort_values('salary', ascending=False)

# 透视表
pd.pivot_table(df, values='salary', index='city', columns='gender')
```

## 可视化

```python
import matplotlib.pyplot as plt

# 折线图
plt.plot(df['date'], df['sales'])

# 柱状图
df['city'].value_counts().plot(kind='bar')

# 饼图
df['category'].value_counts().plot(kind='pie')

# 散点图
plt.scatter(df['height'], df['weight'])
```
