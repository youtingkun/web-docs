<script>
export default {
  name: "grid-auto-rows",
};
</script>
<template>
  <div class="container">
    <div>
      <span>只指定第一行高为30px，其它行高通过grid-auto-rows设置为70px：</span>
      <pre>
        <code >grid-auto-rows: 70px;</code>
      </pre>
      <div class="wrap grid-auto-rows">
        <div v-for="item in 6" :key="item">{{ item }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.grid-auto-rows {
  grid-auto-rows: 70px;
}
.container {
  .wrap {
    display: grid;
    border: 1px solid #99a9c0;
    margin-bottom: 20px;
    grid-template-rows: 30px;
    grid-template-columns: repeat(2, 1fr);
    div {
      margin: 5px;
      background-color: #e5e9f2;
      text-align: center;
      color: #8a96b1;
    }
  }
}
</style>
