<template>
	<div class="">
		<h1>选择器</h1>
		奇数行和偶数行
		<div class="test-nth-child">
			<div>div1</div>
			<div>div2</div>
			<div>div3</div>
			<div>div4</div>
			<div>div5</div>
			<div>div6</div>
			<div>div7</div>
			<div>div8</div>
			<div>div9</div>
			<div>div10</div>
		</div>
		第一行
		<div class="test-nth-child1">
			<div>div1</div>
			<div>div2</div>
			<div>div3</div>
			<div>div4</div>
			<div>div5</div>
			<div>div6</div>
			<div>div7</div>
			<div>div8</div>
			<div>div9</div>
			<div>div10</div>
		</div>
	</div>
</template>

<style lang='scss' scoped>
.test-nth-child div:nth-child(2n+1){
	background-color: #ff0000;
}
.test-nth-child div:nth-child(2n){
	background-color: #00ff00;
}
.test-nth-child1 div:nth-child(1){
	background-color: #0000ff;
}
.test-nth-child1 div:nth-last-child(2n){
	background-color: #0000ff;
}

</style>