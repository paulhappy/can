---
title:md语法
---

This is grammar about Markdown.

## 标题
```
# Class1
## Class2
### Class3
#### Class4
##### Class5
###### Class6
```
# Class1
## Class2
### Class3
#### Class4
##### Class5
###### Class6

## 文字

```
**这是加粗的文字**
*这是倾斜的文字*
***这是斜体加粗的文字***
~~这是加删除线的文字~~
```
**这是加粗的文字**

*这是倾斜的文字*

***这是斜体加粗的文字***

~~这是加删除线的文字~~

## 引用
```
>1请问  Markdwon  怎么用？
>>2请问  Markdwon  怎么用？
>>>3请问  Markdwon  怎么用？
```
>1请问  Markdwon  怎么用？
>>2请问  Markdwon  怎么用？
>>>3请问  Markdwon  怎么用？


## 分割线
```
***
*****
-------
---
```
***
*****
-------
---

## 图片
```
![blockchain](https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=702257389,1274025419&fm=27&gp=0.jpg "区块链")
```
![blockchain](https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=702257389,1274025419&fm=27&gp=0.jpg "区块链")

## 链接
[简书](http://jianshu.com)
[百度](http://baidu.com)

## 无序列表
```
（用 - + * 任何一种都可以）
- 列表内容
+ 列表内容
* 列表内容
```
- 列表内容
+ 列表内容
* 列表内容

## 有序列表
```
1. 列表内容
2. 列表内容
3. 列表内容
```
1. 列表内容
2. 列表内容
3. 列表内容

## 列表嵌套
```
（上一级和下一级之间敲三个空格即可）
- 一级列表内容
   + 二级列表内容

1. 一级列表内容
   2. 二级列表内容
```
- 一级列表内容
   + 二级列表内容

1. 一级列表内容

   2. 二级列表内容


## 表格
```
表头|表头|表头
---|:--:|---:
内容|内容|内容
内容|内容|内容

第二行分割表头和内容。
- 有一个就行，为了对齐，多加了几个
文字默认居左
-两边加：表示文字居中
-右边加：表示文字居右
注：原生的语法两边都要用 | 包起来。此处省略
```

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


## 单行代码
```
代码之间分别用一个反引号包起来
`代码内容`
```
`代码内容`


## 代码块
代码之间分别用三个反引号包起来，且两边的反引号单独占一行
```
function fun(){
    echo "这是一句非常牛逼的代码";
  }
```

## 流程图

```flow
st=>start: Start
op=>operation: My Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
```
