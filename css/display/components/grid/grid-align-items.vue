<script>
export default {
  name: "grid-align-items",
};
</script>
<template>
  <div class="container">
    <div>
      <pre>
        <code >align-items: stretch</code>
      </pre>
      <div class="wrap align-items-stretch">
        <div v-for="item in 4" :key="item">{{ item }}</div>
      </div>
    </div>
    <div>
      <pre>
        <code >align-items: start</code>
      </pre>
      <div class="wrap align-items-start">
        <div v-for="item in 4" :key="item">{{ item }}</div>
      </div>
    </div>
    <div>
      <pre>
        <code >align-items: center</code>
      </pre>
      <div class="wrap align-items-center">
        <div v-for="item in 4" :key="item">{{ item }}</div>
      </div>
    </div>
    <div>
      <pre>
        <code >align-items: end</code>
      </pre>
      <div class="wrap align-items-end">
        <div v-for="item in 4" :key="item">{{ item }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.align-items-stretch {
  align-items: stretch;
}
.align-items-start {
  align-items: start;
}
.align-items-center {
  align-items: center;
}
.align-items-end {
  align-items: end;
}
.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  > div {
    width: 48%;
    span {
      display: inline-block;
      padding-bottom: 3px;
    }
  }
  .wrap {
    border: 1px solid #99a9c0;
    margin-bottom: 20px;
    display: grid;
    grid-template-rows: 80px 80px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "content content"
      "content content";
    div {
      margin: 5px;
      background-color: #e5e9f2;
      text-align: center;
      color: #8a96b1;
    }
  }
}
</style>
