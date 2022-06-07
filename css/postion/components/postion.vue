<template>
  <div>
    <h1>static属性</h1>
    <div class="parent">
      <div class="s-static son">我是子元素</div>
    </div>
    <h1>relative属性</h1>
    <div class="parent">
      一大堆出现在正常流中的文字一大堆出现在正常流中的文字一大堆出现在正常流中的文字一大堆出现在正常流中的文字一大堆出现在正常流中的文字一大堆出现在正常流中的文字一大堆出现在正常流中的文字
      <div class="s-relative son">我是子元素</div>
      一大堆出现在正常流中的文字一大堆出现在正常流中的文字一大堆出现在正常流中的文字一大堆出现在正常流中的文字一大堆出现在正常流中的文字一大堆出现在正常流中的文字一大堆出现在正常流中的文字一大堆出现在正常流中的文字
    </div>
    <h1>absolute属性</h1>
    <div class="parent absolute-parent">
      一大堆出现在正常流中的文字一大堆出现在正常流中的文字一大堆出现在正常流中的文字一大堆出现在正常流中的文字一大堆出现在正常流中的文字一大堆出现在正常流中的文字一大堆出现在正常流中的文字123
      <div class="s-absolute son">我是子元sdf素</div>
      一大堆出现在正常流中的文字一大堆出现在正常流中的文字一大堆出现在正常流中的文字一大堆出现在正常流中的文字一大堆出现在正常流中的文字一大堆出现在正常流中的文字一大堆出现在正常流中的文字一大堆出现在正常流中的文字
    </div>
    <h1>fixed固定定位</h1>
    <div class="fixed">我是固定定位的元素</div>
    <h1>sticky固定定位</h1>
    一大堆出现在正常流中的文字一大堆出现在正常流中的文字一大堆出现在正常流中的文字一大堆出现在正常流中的文字一大堆出现在正常流中的
    <div class="sticky">我是粘性定位的元素</div>
    <h1>浮动文档流与定位文档流</h1>
    <div class="parent absolute-parent">
      一大堆出现在正常流中的文字一大堆出现在正常流中的文字一大堆出现在正常流中的文字一大堆出现在正常流中的文字一大堆出现在正常流中的
      <div class="float son">float1</div>
      <div class="float son">float2</div>

      <div class="no-float">
        我不是float元素啊,这个元素计算位置的时候是忽略了上面的float元素的,但是里面的文字会环绕float元素，这里可以看到float和absolute都会脱离普通文档流，但是absolute的优先级更高一些。
      </div>
      <div class="float-absolute">我是绝对定位元素</div>
      <div class="float son">float3</div>
    </div>
    <div>flot1</div>
    <div>flot2</div>
    <div>flot3</div>
  </div>
</template>

<style lang="scss" scoped>
.parent {
  background-color: antiquewhite;
  width: 100%;
  min-height: 100px;
}
.son {
  background-color: red;
}
.s-static {
  position: static;
  // 无效的设置
  left: 30px;
  z-index: -1；;
}
.s-relative {
  position: relative;
  // 有效的设置
  left: 30px;
}
.absolute-parent {
  position: relative;
}
.s-absolute {
  position: absolute;
  // 有效的设置
  top: 30px;
  left: 30px;
}
.fixed {
  position: fixed;
  top: 10px;
  z-index: 10000;
  background-color: red;
}
.sticky {
  position: sticky;
  bottom: 50px;
  left: 50px;
  z-index: 10000;
  background-color: red;
}
.float {
  float: left;
  height: 50px;
  left: 50px;
}
.no-float {
  background-color: aqua;
}
.float-absolute {
  position: absolute;
  top: 60px;
  left: 30px;
  background-color: aquamarine;
}
</style>
