<template>
	<div class="backgroundCont">
		<p class="page-cont-p page-cont-p1">页面设置</p>
		<div class="page-cont-div">
			<p>节目类型 : <a>机构节目</a></p>
			<p>节目比例 : 
				<label><input type="radio">横16:9</label>
				<label><input type="radio">竖9:16</label>
				<label><input type="radio">自定义</label>
				<div>
					<p>宽度 : <input type="text" >px</p>
					<p>高度 : <input type="text" >px</p>
				</div>
			</p>
			
			<p>
				<label><input type="checkbox">横16:9</label>
				<label><input type="checkbox">竖9:16</label>
			</p>
		</div>
		<p class="page-cont-p page-cont-p2">场景动画</p>
		<div>
			<ul>
				<li v-for="item in animations">
					<div class="img">
						<img src="">
					</div>
					{{item}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			animations: ['无效果','橡皮筋','放大','光速进入','向左飞入','向右飞入','向上飞入','向下飞入','滚入','摇摆','抖动','强调']
		}
	}
}
</script>

<style lang="less" scoped>
.backgroundCont{
	p.page-cont-p{

	}
}
</style>