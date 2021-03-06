<script setup>
import selectComponent from "./components/select.vue";
</script>

# 选择器

思维导图：![](https://raw.githubusercontent.com/youtingkun/image-bucket/main/images/css-selector.png)

## 一、简单选择器

1. 标签选择器`div`

2. 类选择器`.nav`

3. id 选择器`#nav`

4. 通用选择器`*`

## 二、方括号[]属性选择器

属性选择器是一种特殊类型的选择器，它根据元素的 属性 和属性值来匹配元素。
它们的通用语法由方括号 ([]) 组成，其中包含属性名称，后跟可选条件以匹配属性的值。
属性选择器可以根据其匹配属性值的方式分为两类： 存在和值属性选择器和子串值属性选择器。

1.存在值选择器：

![B93503BC-BBF1-41B3-BAD1-1606A6221438.png](https://i.loli.net/2019/11/15/x2DMfuJ4r3dFmbS.jpg)

2.正则表达式选择器：

![0B58C48F-B243-4AC9-8EE5-7A184B9376B9.png](https://i.loli.net/2019/11/15/NSJejtr5KdLME7A.jpg)

## 三、伪类和伪元素选择器

**1.伪类：**

CSS 伪类（pseudo-class） 是一个以冒号(:)作为前缀，被添加到一个选择器末尾的关键字，当你希望样式在特定状态下才被呈现到指定的元素时，你可以往元素的选择器后面加上对应的伪类（pseudo-class）。你可能希望某个元素在处于某种状态下呈现另一种样式，例如当鼠标悬停在元素上面时，或者当一个复选框被禁用或被勾选时，又或者当一个元素是它在 DOM 树中父元素的第一个子元素时。

| 伪类选择器 | 描述                                                                                    |
| ---------- | --------------------------------------------------------------------------------------- |
| :checked   | 选中 radio（单选按钮）、或 checkbox（复选框）、或 opting（select 中的一项）被选中的元素 |

![D10E1DFF-A1DE-4DF5-8BD4-2707E8177B91.png](https://i.loli.net/2019/11/15/CFHOsuEq6JjRpeQ.jpg)

- :nth-child(an+b)伪类选择器函数

要注意：这里的 a 和 b 都必须为整数，这个表达式其实就相当于一个公式，会计算 n 每一次加 1 时所匹配到的元素

| 参数      | 描述                           |
| --------- | ------------------------------ |
| 2n+1      | 表示选中子元素奇数行           |
| 2n        | 表示选中子元素偶数行           |
| 0n+1 或 1 | 这个两种都表示选中第一个子元素 |

- :nth-last-child(an+b)

和 nth-last-child 和 nth-child 有些类似，不同之处在于 nth-child 是从上到下来计算元素的，而 nth-last-child 是从下到上来计算元素位置的，区别就在于一个正着数，一个倒着数。

<selectComponent />

- :nth-of-type(an+b)

选择兄弟元素，匹配（an+b）表达式的元素。其实和:nth-child 像是，不同之处在于:nth-child 是相对于子元素来说的，而:nth-of-type 是相对于兄弟元素。

**2.伪元素：**

伪元素（Pseudo-element）跟伪类很像，但它们又有不同的地方。它们都是关键字，但这次伪元素前缀是两个冒号 `::` ， 同样是添加到选择器后面去选择某个元素的某个部分。

![7ECBD191-2174-4756-990D-FAECE3337B1D.png](https://i.loli.net/2019/11/15/fpQaSP87Y4sZ5kn.jpg)

## 四、组合选择器

| 名称           | 组合器 | 选择                                                 |
| -------------- | ------ | ---------------------------------------------------- |
| 选择器组       | .A,.B  | 匹配满足 A(和/或）B 的任意元素                       |
| 后代选择器     | .A .B  | 匹配满足 B 是 A 的后代节点的元素，中间有空格         |
| 串联选择器     | .A.B   | 同时满足 B 和 A 的元素                               |
| 子选择器       | .A>.B  | 匹配满足 B 是 A 的直接子节点                         |
| 相邻兄弟选择器 | .A+.B  | AB 具有相同的父节点，并且 B 紧跟在 A 的后面          |
| 通用兄弟选择器 | .A~.B  | AB 具有相同的父节点，B 在 A 的后面，但不一定紧跟着 A |

后代选择器和串联选择器的区别在于：后代选择器的`.A`和`.B`是在不同的标签上，而串联选择器的`.A`和`.B`是在同一个标签上

后代选择器和子选择器的区别在于：后代选择器会选择满足`.B`的所有元素，包括子元素和孙子元素，而子选择器只会选择`.A`的直接子元素。

## 五、选择器优先级（权重）

| 选择器                                                                 | 权重       |
| ---------------------------------------------------------------------- | ---------- |
| 通配选择符（`*`）和关系选择符(`+`,`>`,`~`)                             | 0，0，0，1 |
| 标签选择器（`div`）、伪类元素选择器（`::before`）                      | 0，0，0，1 |
| 类选择器(`.example`)，属性选择器（`[type="radio"]`）和伪类（`:hover`） | 0，0，1，0 |
| id 选择器（`#example`）                                                | 0，1，0，0 |
| 行内样式（`style=""`）                                                 | 1，0，0，0 |
| 每个!important 重要的                                                  | ∞ 无穷大   |

**注意**：权重数位之间没有进制，级别之间不可超越。
