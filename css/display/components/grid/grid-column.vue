<script>
export default {
  name: "grid-column",
};
</script>
<template>
  <div class="container">
    <div>
      <span>从第一列开始，到第四列结束，不包括第四列 ：</span>
      <pre>
        <code >grid-column-start: 1;</code>
        <code >grid-column-end: 4;</code>
      </pre>
      <div class="wrap grid-column">
        <div class="item1">1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.item1 {
  grid-column-start: 1;
  grid-column-end: 4;
}
.container {
  .wrap {
    display: grid;
    border: 1px solid #99a9c0;
    margin-bottom: 20px;
    div {
      margin: 5px;
      background-color: #e5e9f2;
      text-align: center;
      color: #8a96b1;
    }
  }
}
</style>
