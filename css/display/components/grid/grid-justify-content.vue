<script>
export default {
  name: "grid-justify-content",
};
</script>
<template>
  <div class="container">
    <div>
      <pre>
        <code >justify-content: start;</code>
      </pre>
      <div class="wrap justify-content-start">
        <div v-for="item in 16" :key="item">{{ item }}</div>
      </div>
    </div>
    <div>
      <pre>
        <code >justify-content: end;</code>
      </pre>
      <div class="wrap justify-content-end">
        <div v-for="item in 16" :key="item">{{ item }}</div>
      </div>
    </div>
    <div>
      <pre>
        <code >justify-content: center;</code>
      </pre>
      <div class="wrap justify-content-center">
        <div v-for="item in 16" :key="item">{{ item }}</div>
      </div>
    </div>
    <div>
      <pre>
        <code >justify-content: space-around;</code>
      </pre>
      <div class="wrap justify-content-space-around">
        <div v-for="item in 16" :key="item">{{ item }}</div>
      </div>
    </div>
    <div>
      <pre>
        <code >justify-content: space-between;</code>
      </pre>
      <div class="wrap justify-content-space-between">
        <div v-for="item in 16" :key="item">{{ item }}</div>
      </div>
    </div>
    <div>
      <pre>
        <code >justify-content: space-evenly;</code>
      </pre>
      <div class="wrap justify-content-space-evenly">
        <div v-for="item in 16" :key="item">{{ item }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.justify-content-start {
  justify-content: start;
}
.justify-content-end {
  justify-content: end;
}
.justify-content-center {
  justify-content: center;
}
.justify-content-space-around {
  justify-content: space-around;
}
.justify-content-space-between {
  justify-content: space-between;
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
    display: grid;
    border: 1px solid #99a9c0;
    margin-bottom: 20px;
    width: 100%;
    height: 300px;
    grid-template-columns: repeat(4, 45px);
    grid-template-rows: repeat(4, 45px);
    grid-gap: 0.5em;
    div {
      margin: 5px;
      background-color: #e5e9f2;
      text-align: center;
      color: #8a96b1;
    }
  }
}
</style>
