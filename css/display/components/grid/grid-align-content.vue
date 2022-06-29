<script>
export default {
  name: "grid-align-content",
};
</script>
<template>
  <div class="container">
    <div>
      <pre>
        <code >align-content: start;</code>
      </pre>
      <div class="wrap align-content-start">
        <div v-for="item in 16" :key="item">{{ item }}</div>
      </div>
    </div>
    <div>
      <pre>
        <code >align-content: end;</code>
      </pre>
      <div class="wrap align-content-end">
        <div v-for="item in 16" :key="item">{{ item }}</div>
      </div>
    </div>
    <div>
      <pre>
        <code >align-content: center;</code>
      </pre>
      <div class="wrap align-content-center">
        <div v-for="item in 16" :key="item">{{ item }}</div>
      </div>
    </div>
    <div>
      <pre>
        <code >align-content: space-around;</code>
      </pre>
      <div class="wrap align-content-space-around">
        <div v-for="item in 16" :key="item">{{ item }}</div>
      </div>
    </div>
    <div>
      <pre>
        <code >align-content: space-between;</code>
      </pre>
      <div class="wrap align-content-space-between">
        <div v-for="item in 16" :key="item">{{ item }}</div>
      </div>
    </div>
    <div>
      <pre>
        <code >align-content: space-evenly;</code>
      </pre>
      <div class="wrap align-content-space-evenly">
        <div v-for="item in 16" :key="item">{{ item }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.align-content-start {
  align-content: start;
}
.align-content-end {
  align-content: end;
}
.align-content-center {
  align-content: center;
}
.align-content-space-around {
  align-content: space-around;
}
.align-content-space-between {
  align-content: space-between;
}
.align-content-space-evenly {
  align-content: space-evenly;
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
