<script>
export default {
  name: "grid-auto-flow",
};
</script>
<template>
  <div class="container">
    <div>
      <span></span>
      <pre>
        <code >grid-auto-flow: row</code>
      </pre>
      <div class="wrap grid-auto-flow-row">
        <div v-for="item in 4" :key="item">{{ item }}</div>
      </div>
    </div>
    <div>
      <span></span>
      <pre>
        <code >grid-auto-flow: column</code>
      </pre>
      <div class="wrap grid-auto-flow-column">
        <div v-for="item in 4" :key="item">{{ item }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.grid-auto-flow-row {
  grid-auto-flow: row;
}
.grid-auto-flow-column {
  grid-auto-flow: column;
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
