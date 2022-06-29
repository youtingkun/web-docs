<script>
export default {
  name: "grid-row",
};
</script>
<template>
  <div class="container">
    <div>
      <span>从第一行开始，到第四行结束，不包括第四行：</span>
      <pre>
        <code >grid-row-start: 1;</code>
        <code >grid-row-end: 4;</code>
      </pre>
      <div class="wrap">
        <div class="item1">1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.item1 {
  grid-row-start: 1;
  grid-row-end: 4;
}
.container {
  .wrap {
    display: grid;
    border: 1px solid #99a9c0;
    margin-bottom: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    div {
      margin: 5px;
      background-color: #e5e9f2;
      text-align: center;
      color: #8a96b1;
    }
  }
}
</style>
