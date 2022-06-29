<script>
export default {
  name: "grid-gap",
};
</script>
<template>
  <div class="container">
    <div>
      <span>行间隔100px，列间隔1em：</span>
      <pre>
        <code >grid-gap: 100px 1rem;</code>
      </pre>
      <div class="wrap grid-gap1">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
    <div>
      <span>行间隔2rem，列间隔2rem：</span>
      <pre>
        <code >grid-gap: 2rem</code>
      </pre>
      <div class="wrap grid-gap2">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.grid-gap1 {
  grid-gap: 100px 1rem;
}
.grid-gap2 {
  grid-gap: 2rem;
}
.container {
  .wrap {
    display: grid;
    border: 1px solid #99a9c0;
    margin-bottom: 20px;

    grid-template-columns: 1fr 1fr;
    div {
      margin: 5px;
      background-color: #e5e9f2;
      text-align: center;
      color: #8a96b1;
    }
  }
}
</style>
