<script>
export default {
  name: "grid-template-areas",
};
</script>
<template>
  <div class="container">
    <div>
      <span></span>
      <div class="wrap grid-template-areas">
        <div class="item1">Header</div>
        <div class="item2">Menu</div>
        <div class="item3">Main</div>
        <div class="item4">Right</div>
        <div class="item5">Footer</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.grid-template-areas {
  grid-template-areas:
    "header header header header header header"
    "menu main main main right right"
    "menu footer footer footer footer footer";
}

.item1 {
  grid-area: header;
}
.item2 {
  grid-area: menu;
}
.item3 {
  grid-area: main;
}
.item4 {
  grid-area: right;
}
.item5 {
  grid-area: footer;
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
