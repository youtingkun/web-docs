<script setup>
import GridTemplateRows from "./components/grid/grid-template-rows.vue"
import GridTemplateColumns from "./components/grid/grid-template-columns.vue"
import GridTemplateAreas from "./components/grid/grid-template-areas.vue"
import GridColumn from './components/grid/grid-column.vue'
import GridRow from './components/grid/grid-row.vue'
import GridArea from './components/grid/grid-area.vue'
import GridGap from './components/grid/grid-gap.vue'
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

父元素属性主要分为三方面：

- 定义网格大小： grid-template: grid-template-rows、grid-template-columns 和 grid-template-areas。
- 定义网格间距： grid-gap: column-gap(旧 grid-column-gap) 和 row-gap(旧 grid-row-gap)。
- 定义隐式网格的大小： grid-auto-rows、grid-auto-columns 和 grid-auto-flow。

### 定义网格大小

**grid-template：**

grid-template-rows + grid-template-columns + grid-template-areas 的缩写

**grid-template-rows：**

定义网格的每一行

<GridTemplateRows></GridTemplateRows>

**grid-template-columns：**

定义网格的每一列

<GridTemplateColumns></GridTemplateColumns>

**grid-template-areas：**

网格区块 (grid areas) 和网格项 (grid item) 沒有关联，但是它们可以和一些网格定位属性关联起来，比如 grid-row-start， grid-row-end， grid-column-start 和 grid-column-end；

父元素：

```css
grid-template-areas:
  "header header header header header header"
  "menu main main main right right"
  "menu footer footer footer footer footer";
/* 如果不占据某个位置可以用“ . ”代替。" . "表示没有设置名称的网格项 */
```

子元素：

```css
.item1 {
  grid-area: header;
}
.item2 {
  grid-area: menu;
}
.item3 {
  grid-area: main;
}
.item4 {
  grid-area: right;
}
.item5 {
  grid-area: footer;
}
```

HTML：

```html
<div class="grid-container">
  <div class="item1">Header</div>
  <div class="item2">Menu</div>
  <div class="item3">Main</div>
  <div class="item4">Right</div>
  <div class="item5">Footer</div>
</div>
```

效果为：

<GridTemplateAreas></GridTemplateAreas>

### 定义网格间距

**grid-gap:**

`grid-row-gap + grid-column-gap` 的缩写。

<GridGap></GridGap>

**grid-row-gap:**

设置行间隔

**grid-column-gap:**

设置列间隔

### 定义隐式网格的大小

隐式网格是指没有被声明的网格。

**grid-auto-columns:**

设置隐式网格列的大小

**grid-auto-rows:**

设置隐式网格行的大小

**grid-auto-flow:**

设置没有明确放置在网格上的元素的自动放置方法

```css
/* 水平依次排列放置 */
grid-auto-flow:row
/* 垂直依次排列 */
grid-auto-flow:column
```

### 声明横纵方向的对齐方式

**place-content:**

align-content + justify-content 的缩写

```css
place-content: <align-content> <justify-content>;
```

**justify-content：**

justify-content 指定网格元素的水平分布方式。此属性仅在网格总宽度小于 grid 容器宽度时有效果。

```css
/* 网格中每一个元素平均排列 */
justify-content: space-evenly;
/* 网格中每一个元素平均排列，最两边的元素宽度为中间元素间距的一半 */
justify-content: space-around;
/* 网格中每一个元素平均排列，最两个的元素没有宽度 */
justify-content: space-between;
/* 网格以本身的宽度排列在中心 */
justify-content: center;
/* 网格以本身的宽度排列在开始 */
justify-content: start;
/* 网格以本身的宽度排列在结尾 */
justify-content: end;
```

**align-content：**
align-content 指定垂直方向每一行 grid 元素的分布方式。如果所有 grid 子项只有一行，则 align-content 属性是没有任何效果的。此属性也需要网格的总高度小于 grid 容器高度时有效果。

```css
align-content: space-evenly;
align-content: space-around;
align-content: space-between;
align-content: center;
align-content: start;
align-content: end;
```

**place-items:**

align-items 和 justify-items 的简写

```css
place-items: <align-items> <justify-items>;
```

**justify-items：**

设置每一个子元素在内部网格的水平位置

```css
justify-items: start | end | center | stretch(默认);
```

**align-items：**

设置每一个子元素在内部网格的垂直方向上的位置

```css
align-items: start | end | center | stretch(默认);
```

## 子元素属性

**grid-area:**

grid-row-start + grid-column-start + grid-row-end + grid-column-end 的缩写

```css
/* 从第 2 行和第 1 列开始，并跨越 2 行 3列 */
grid-area: 2 / 1 / span 2 / span 3;
```

<GridArea></GridArea>

**grid-row:**

设置元素所占的行数，grid-row-start + grid-row-end 的缩写

<GridRow></GridRow>

**grid-column:**

设置元素所占的列数，grid-column-start + grid-column-end 的缩写。

<GridColumn></GridColumn>

**justify-self:**

设置当前元素在内部网格的水平位置

```css
justify-self: start | end | center | stretch(默认);
```

**align-self:**

设置当前元素在内部网格的垂直方向上的位置

```css
align-self: start | end | center | stretch(默认);
```
