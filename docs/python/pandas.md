# Pandas

Pandas 是 Python 中最常用的数据分析库。

## 安装

```bash
pip install pandas
```

## 核心数据结构

### Series（一维）

```python
import pandas as pd

s = pd.Series([10, 20, 30], index=['a', 'b', 'c'])
s['a']       # 10
s.values     # [10, 20, 30]
```

### DataFrame（二维）

```python
data = {
    'name': ['张三', '李四', '王五'],
    'age': [20, 25, 30],
    'city': ['北京', '上海', '广州']
}
df = pd.DataFrame(data)
```

## 数据读取与写入

```python
df = pd.read_csv('data.csv', encoding='utf-8')
df = pd.read_excel('data.xlsx', sheet_name='Sheet1')

df.to_csv('output.csv', index=False)
df.to_excel('output.xlsx', index=False)
```

## 数据查看

```python
df.head(10)          # 前 10 行
df.tail(5)           # 后 5 行
df.info()            # 列信息、数据类型
df.describe()        # 数值列的统计信息
df['name'].value_counts()  # 计数
```

## 数据选择

```python
# 选列
df['name']
df[['name', 'age']]

# loc — 标签索引
df.loc[0, 'name']
df.loc[:5, ['name', 'age']]

# iloc — 位置索引
df.iloc[0, 0]
df.iloc[:5, :3]

# 条件筛选
df[df['age'] > 25]
df.query('age > 25 and city == "北京"')
```

## 数据处理

```python
# 添加列
df['adult'] = df['age'] >= 18

# 删除列
df.drop('column_name', axis=1)

# 重命名列
df.rename(columns={'old': 'new'})

# 排序
df.sort_values('age', ascending=False)

# 分组聚合
df.groupby('city')['salary'].agg(['mean', 'sum', 'count'])
```

## 缺失值处理

```python
df.isnull().sum()    # 查看缺失值数量
df.dropna()          # 删除含缺失的行
df.fillna(0)         # 填充 0
df.fillna(method='ffill')  # 前向填充
```
