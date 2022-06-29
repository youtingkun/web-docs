<script>
export default {
  name: "grid-area",
};
</script>
<template>
  <div class="container">
    <div>
      <span
        >从第二行第二列开始，到第五行第四列结束，但不包括第五行第四列：</span
      >
      <pre>
        <code >grid-area: 2 / 2/ 5 /4;</code>
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
    <div>
      <span>从第二行,并跨越三行；从第二列开始，并跨越二列：</span>
      <pre>
        <code >grid-area: 2 / 2 / span 3 / span 2;</code>
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
  grid-area: 2 / 2 / 5 /4;
}
.item2 {
  grid-area: 2 / 2 / span 3 / span 2;
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
