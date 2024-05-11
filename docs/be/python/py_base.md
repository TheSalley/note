# `Python` 基础

## 1、`Python`变量与数据类型

变量是可以赋值的标签，也可以说变量指向特定的值。(有些像`C` 的指针)

> 命名规则：

- 只能包含字母、数字、下划线。但不能以数字开头。

- 不能用关键字和保留字。

- 区分大小写

数字类型、字符串类型、布尔类型、空类型、列表类型、元组类型、字典类型

> 关键字

`Python` 内部自带的一些单词，如`if`、`True`、`def`......

## 2、数字类型

整型`int`、浮点型`float`

- 将任意两个数相除时，结果总是浮点数，即使这两个数都是整数且能够整除。

- 一整一浮点的情况下，结果也总是浮点数。

```python
# 定义
count_100_01 = int(100)
count_100_02 = 100

pi_01 = float(3.14)
pi_02 = 3.14

print(4 / 2)  # 2.0
print(1 + 2.0)  # 3.0
print(2 * 1.0)  # 2.0
print(3.0 ** 2)  # 9.0
```

## 3、字符串类型

使用单引号、双引号包裹。

```python
str_01 = str(This is also a string)
str_02 = 'This is a string'
str_03 = "This is also a string"
```

## 4、布尔类型

真假
## 5、空类型
None

不确定类型时，可以使用`None`

## 6、列表类型

由一系列元素按特定的顺序组成。

## 7、元组类型

与列表不同，元组是不可变的。(即值不能被修改，但可以被重新赋值)

元组比列表占用资源更小

## 8、字典类型

key 可以是字符串、数字、元组