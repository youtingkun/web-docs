<script>
export default {
  name: "grid-auto-columns",
};
</script>
<template>
  <div class="container">
    <div>
      <span
        >只指定第一列宽为30px，其它列宽通过grid-auto-columns设置为70px：</span
      >
      <pre>
        <code >grid-auto-columns: 70px;</code>
      </pre>
      <div class="wrap grid-auto-columns">
        <div v-for="item in 6" :key="item">{{ item }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.grid-auto-columns {
  grid-auto-columns: 70px;
}
.container {
  .wrap {
    display: grid;
    border: 1px solid #99a9c0;
    margin-bottom: 20px;
    grid-template-columns: 30px;
    grid-auto-flow: column;
    div {
      margin: 5px;
      background-color: #e5e9f2;
      text-align: center;
      color: #8a96b1;
    }
  }
}
</style>
