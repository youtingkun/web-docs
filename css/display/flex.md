<script setup>
import Flex from "./components/flex.vue";
import FlexDirection from "./components/flex-direction.vue";
import FlexWrap from './components/flex-wrap.vue';
import FlexJustifyContent from './components/flex-justify-content.vue';
import FlexAlignItems from './components/flex-align-items.vue';
import FlexAlignContent from './components/flex-align-content.vue';
import FlexGrow from './components/flex-grow.vue';
import FlexShrink from './components/flex-shrink.vue';
import FlexBasis from './components/flex-basis.vue';
import FlexOrder from './components/flex-order.vue';
import FlexAlignSelf from './components/flex-align-self.vue';
</script>

# flex 布局

<Flex></Flex>

## 父元素属性

### flex-flow

flex-direction + flex-wrap 的组合

### flex-direction

设置主轴的方向

- row：从左到右（默认值）
- row-reverse： 从右到左
- column： 从上到下
- column-reverse 从下到上

<FlexDirection></FlexDirection>

### flex-wrap

当一行放不下时，子元素换行方式

- nowarp：不换行（默认值）
- warp：换行,会根据 flex-direction 的值来确定换行。
- wrap-reverse:换行,但是 cross-start 和 cross-end 互换

<FlexWrap></FlexWrap>

### justify-content

元素按主轴的排列方式

- center: 居中排列
- flex-start: 从行首起始位置开始排列（默认值）
- flex-end: 从行尾位置开始排列
- space-between: 除两边元素外，其它元素间距相等
- space-around: 两个元素之间的间距是两边元素到边的两倍
- space-evenly: 每一个元素的间距都相等

<FlexJustifyContent></FlexJustifyContent>

### align-items

元素按交叉轴(纵轴）排列的方式

- center：处于纵轴的中间
- flex-start：从纵轴的开始进行对齐
- flex-end：从纵轴的结尾开始对齐
- baseline：以子元素中第一行文字的基线对齐
- stretch：弹性项包含外边距的交叉轴尺寸被拉升至行高（默认值）

<FlexAlignItems></FlexAlignItems>

### align-content

align-content 只适用于 Flex 容器在没有足够空间（所有 Flex 项目宽度之和大于 Flex 容器主轴尺寸），并且显式设置 flex-wrap 的值为非 wrap 时。

- flex-start 从交叉轴开始进行对齐
- flex-end 从交叉轴结尾开始对齐
- center 处于交叉轴中间
- space-between 除了上下的元素外，其它行间距相等。
- space-around 每行的间距都相等
- stretch 默认值

<FlexAlignContent></FlexAlignContent>

和 align-items 的区别在于，align-items 更偏向于一行，而 align-content 更偏向于多行。

只有一行时，设置 align-content 会失效，而有多行时设置的 align-items 会被 align-content 的设置覆盖掉。

## 子元素属性

### flex

flex-grow + flex-shrink + flex-basis 的组合。

### flex-grow

设置元素的放大比列，这里的放大比例是指，按剩余空间的大小进行放大。默认值为 0，即不放大，不可以设置负数。1、2、3...为相对剩余空间放大比列。

<FlexGrow></FlexGrow>

### flex-shrink

设置元素的缩小比列。默认值为 1，不可以设置负数。

这里的缩小比例是指放不下时的缩小比列，如果设置了 nowrap，那么此属性无效。

设置的数字越大，空间不足时，缩小的比列越大。

<FlexShrink></FlexShrink>

### flex-basis

设置基准大小

默认值为 auto，即元素本身大小。

如果同时设置了元素本身的宽高，又设置了 flex-basis，计算的时候以 flex-basis 为准

<FlexBasis></FlexBasis>

### order

设置子元素的排列顺序，数值越小越靠前。默认为 0，可以为负数

1、2、3...相对数值

如数值相同，会按照原来的相对位置排列

<FlexOrder></FlexOrder>

### align-self

允许当前元素与其它项目有不一样的对齐方式，即覆盖掉父元素的 align-items 的值。

默认为 auto，即继承父元素的 align-items 的值。

<FlexAlignSelf></FlexAlignSelf>

<!-- <VueCodeView></VueCodeView> -->
