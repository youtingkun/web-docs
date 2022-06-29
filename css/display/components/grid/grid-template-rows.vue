<script>
export default {
  name: "grid-template-rows",
};
</script>
<template>
  <div class="container">
    <div>
      <span>grid-template-rows: 20px 40px 60px;</span>
      <div class="wrap grid-template-rows1">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
    <div>
      <span>grid-template-rows: 1fr 1fr 2fr;</span>
      <div class="wrap grid-template-rows2">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.grid-template-rows1 {
  grid-template-rows: 20px 40px 60px;
}
.grid-template-rows2 {
  grid-template-rows: 1fr 1fr 2fr;
}
.container {
  width: 100%;
  margin: 30px auto;
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
    div {
      margin: 5px;
      background-color: #e5e9f2;
      text-align: center;
      color: #8a96b1;
    }
  }
}
</style>
