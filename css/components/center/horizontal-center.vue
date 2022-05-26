<template>
<div>
 <div class="parent"><span>行内元素水平居中</span></div>
  <div class="parent1"><div class="son1">知道宽度的块元素水平居中</div></div>
</div>

</template>
<style scoped lang="scss">

 .parent{
    text-align: center;
	}

  .parent1{
    .son1{
      width: 250px;
      margin:0 auto;
      border: #f00 1px solid;

    }
  }
</style>
