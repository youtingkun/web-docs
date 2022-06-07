<template>
	<div >
		<span class="inline">行内元素</span><span class="inline">行内元素2</span>
		<div class="block">块元素</div>
		<div class="inline-block">行内块元素</div><div class="inline-block">行内块元素</div><div class="inline-block">行内块元素</div>
	</div>
</template>

<style lang='scss' scoped>
.inline{
	display:inline;
	border:#f00 1px solid;
	width: 100px;
	height:100px;
	margin:20px;
	padding:30px;
}
.block{
	border:#ff0 1px solid;
	width: 100px;
	height:100px;
	margin:20px;
	padding:30px;
}
.inline-block{
	display: inline-block;
	border:#0f0 1px solid;
	width: 100px;
	height:100px;
	margin:20px;
	padding:30px;
}
</style>