<script setup>
import GridTemplateRows from "./components/grid/grid-template-rows.vue"
import GridTemplateColumns from "./components/grid/grid-template-columns.vue"

import GridColumn from './components/grid/grid-column.vue'
import GridRow from './components/grid/grid-row.vue'
import GridArea from './components/grid/grid-area.vue'
import GridGap from './components/grid/grid-gap.vue'
import GridJustifyContent from './components/grid/grid-justify-content.vue';
import GridAlignContent from './components/grid/grid-align-content.vue';
import GridJustifyItems from './components/grid/grid-justify-items.vue';
import GridAlignItems from './components/grid/grid-align-items.vue';
import GridAutoRows from './components/grid/grid-auto-rows.vue';
import GridAutoColumns from './components/grid/grid-auto-columns.vue';
import GridAutoFlow from './components/grid/grid-auto-flow.vue';
</script>

# Grid 布局

## 概念

网格行(row)：网格项的水平线称为行
![图片 2.png](https://i.loli.net/2019/12/12/AVCJ1LSt9nqTEYQ.png)

网格列(column):网格项的垂直线称为列
![图片 1.png](https://i.loli.net/2019/12/12/zEutn5FosJ3N68S.png)

网格间隙(gap)：每列/行之间的空间称为网格间隙

![图片 3.png](https://i.loli.net/2019/12/12/R29CTmvLbEYxXPV.png)

## 声明 grid 布局

```css
/*定义一个块级元素为网格布局  */
display: grid;
/* 定义一个行内元素为网格布局 */
display: inline-grid;
/* 定义一个继承父级网格容器行和列大小的网格容器 */
display: subgrid;
```

## 可以使用的单位

- fr：
- %:
- px:
- rem:
- em:

## 父元素属性

父元素属性主要分为四个方面：

- 定义网格大小： grid-template: grid-template-rows、grid-template-columns 和 grid-template-areas。
- 定义网格间距： grid-gap: grid-row-gap 和 grid-column-gap。
- 定义隐式网格的大小： grid-auto-rows、grid-auto-columns 和 grid-auto-flow。
- 定义横纵方向的对齐方式：justify-content、align-content、justify-items 和 align-items。

### 1. 定义网格大小

**grid-template：**

`grid-template-rows + grid-template-columns + grid-template-areas` 的缩写

**grid-template-rows：**

定义网格的每一行

<GridTemplateRows></GridTemplateRows>

**grid-template-columns：**

定义网格的每一列

<GridTemplateColumns></GridTemplateColumns>

**grid-template-areas：**

网格区块 (grid areas) 和网格项 (grid item) 沒有关联，但是它们可以和一些网格定位属性关联起来，比如 grid-row-start， grid-row-end， grid-column-start 和 grid-column-end；

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/youtingkun/embed/oNqgQzP?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/youtingkun/pen/oNqgQzP">
  Untitled</a> by youtingkun (<a href="https://codepen.io/youtingkun">@youtingkun</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 2. 定义网格间距

**grid-gap:**

`grid-row-gap + grid-column-gap` 的缩写。

<GridGap></GridGap>

**grid-row-gap:**

设置行间隔

**grid-column-gap:**

设置列间隔

### 3. 定义隐式网格的大小

隐式网格是指没有被声明的网格。

**grid-auto-rows:**

设置隐式网格行的大小

<GridAutoRows></GridAutoRows>

**grid-auto-columns:**

设置隐式网格列的大小

<GridAutoColumns></GridAutoColumns>

**grid-auto-flow:**

设置没有被声明在网格网格上的元素的自动放置方向

<GridAutoFlow></GridAutoFlow>

### 4. 定义横纵方向的对齐方式

**place-content:**

`align-content + justify-content` 的缩写

**justify-content：**

justify-content 指定网格元素的水平分布方式。此属性需要网格总宽度小于 grid 容器宽度时有效果。

```css
/* 可选值： */
start | center| end | space-evenly | space-around | space-between;
```

<GridJustifyContent></GridJustifyContent>

**align-content：**
align-content 指定垂直方向每一行 grid 元素的分布方式。如果所有 grid 子项只有一行，则 align-content 属性没有效果。此属性也需要网格的总高度小于 grid 容器高度时有效果。

```css
/* 可选值： */
start | center | end | space-between | space-evenly| space-around;
```

<GridAlignContent></GridAlignContent>

**place-items:**

`align-items + justify-items`的缩写

**justify-items：**

设置每一个子元素在内部网格的水平位置

```css
justify-items: start | end | center | stretch(默认);
```

<GridJustifyItems></GridJustifyItems>

**align-items：**

设置每一个子元素在内部网格的垂直方向上的位置

```css
align-items: start | end | center | stretch(默认);
```

<GridAlignItems></GridAlignItems>

## 子元素属性

子元素属性主要分为两个个方面：

- 定义子元素的大小：grid-area：grid-row-start、grid-column-start、grid-row-end 和 grid-column-end。
- 定义子元素的位置：justify-self 和 align-self。

### 1. 定义子元素的大小

**grid-area:**

`grid-row-start + grid-column-start + grid-row-end + grid-column-end` 的缩写

<GridArea></GridArea>

**grid-row:**

设置元素所占的行数，`grid-row-start + grid-row-end` 的缩写

<GridRow></GridRow>

**grid-column:**

设置元素所占的列数，`grid-column-start + grid-column-end` 的缩写。

<GridColumn></GridColumn>

### 2. 定义子元素的位置

**justify-self:**

单独设置当前元素在内部网格的水平位置

```css
justify-self: start | end | center | stretch(默认);
```

**align-self:**

单独设置当前元素在内部网格的垂直方向上的位置

```css
align-self: start | end | center | stretch(默认);
```
