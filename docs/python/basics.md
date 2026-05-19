# Python 基础语法

Python 是一门简洁、易学、功能强大的编程语言。

## Hello World

```python
print("Hello, World!")
```

## 变量和数据类型

```python
# 基本类型
name = "张三"           # str
age = 20               # int
height = 1.75          # float
is_student = True      # bool

# 复合类型
nums = [1, 2, 3]       # list
info = {'name': '张三'} # dict
items = (1, 2)          # tuple
unique = {1, 2, 3}      # set
```

## 条件判断

```python
score = 85

if score >= 90:
    print("优秀")
elif score >= 60:
    print("及格")
else:
    print("不及格")
```

## 循环

```python
# for 循环
for i in range(5):
    print(i)

# 遍历列表
for item in items:
    print(item)

# while 循环
count = 0
while count < 5:
    print(count)
    count += 1
```

## 函数

```python
def greet(name, greeting="你好"):
    return f"{greeting}，{name}"

print(greet("张三"))
print(greet("李四", "Hello"))
```

## 列表操作

```python
nums = [1, 2, 3, 4, 5]

# 切片
nums[0:3]       # [1, 2, 3]
nums[-1]        # 5（最后一个）

# 列表推导式
squares = [x ** 2 for x in nums]  # [1, 4, 9, 16, 25]
evens = [x for x in nums if x % 2 == 0]  # [2, 4]
```

## 字典操作

```python
user = {'name': '张三', 'age': 20}

# 遍历
for key, value in user.items():
    print(f"{key}: {value}")

# 字典推导式
squares = {x: x ** 2 for x in range(5)}
```
