<template>
	<div class="home-nav clearfix">
		<a class="user">
			<img src="../../img/design_top_user_normal.png" >
		小小商</a>
		<input type="text" placeholder="未命名一">
		<div class="nav-cout ">
			<a>保存</a>
			<a>预览</a>
			<a>发布</a>
		</div>
	</div>
</template>
<style lang="less" scoped>
.home-nav {
	background: #000 url('../../img/design_top_logo.png') no-repeat 15px center;position: relative;
	a.user {
		width: 90px;
		height: 26px;
		line-height: 26px;
		text-align: center;
		background: #272727;
		margin-left: 160px;
		margin-top: 19px;
		display: inline-block;
		border-radius: 3px;
		position: relative;
		img {
			display: inline-block;
			width: 26px;
			height: 26px;
			position: absolute;
			top: 0;
			left: -13px;
		}
	}
	input {
		display: inline-block;
		width: 300px;
		height: 30px;
		background: #272727;
		position: absolute;top: 15px;left: 50%;margin-left: -150px;border-radius: 5px;
		text-align: center;
	}
	input::-webkit-input-placeholder {
		text-align: center;
	}
	input::-ms-input-placeholder {
		text-align: center;
	}
	div.nav-cout{
		width: 285px;
		float: right;height: 100%;
		a{
			display: block;float: left;
			width: 33.3%;box-sizing: border-box;text-indent: 44px;line-height: 60px;
		}
		a:nth-of-type(1){background: url('../../img/design_top_save.png') no-repeat 17px center;}
		a:nth-of-type(2){background: url('../../img/design_preview.png') no-repeat 17px center;}
		a:nth-of-type(3){background: url('../../img/design_top_publish.png') no-repeat 17px center;}
	}
}

</style>
