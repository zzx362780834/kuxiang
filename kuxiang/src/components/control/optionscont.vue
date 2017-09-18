<template>
	<div class="optionsCont">
		<p class="page-cont-p page-cont-p1">页面设置</p>
		<div class="page-cont-div">
			<div class="control-p">节目类型 : <a>机构节目</a></div>
			<div class="control-p control-p2">节目比例 :
				<label>
					<input type="radio" checked>&nbsp; 横16:9</label>
				<label>
					<input type="radio">&nbsp; 竖9:16</label>
				<label>
					<input type="radio">&nbsp; 自定义</label>
				<div class="div-2">
					<p>宽度 :
						<input type="text">px</p>
					<p>高度 :
						<input type="text">px</p>
				</div>
			</div>
			<div class="div-3">
				<label>
					<input type="checkbox"> 参考线</label>
				<label>
					<input type="checkbox"> 智能参考线</label>
			</div>
		</div>
		<p class="page-cont-p page-cont-p2">场景动画</p>
		<div class="animation-div">
			<ul>
				<li v-for="item in animations">
					<div class="img">
						<img>
					</div>
					{{item}}
				</li>
			</ul>
		</div>
		<costomsel :list="list" type="down" @chooseSel="chooseSel" style="width: 140px;float: left;margin:26px 0 0 16px;"></costomsel>
	</div>
</template>
<script>
import costomsel from '@/components/custom/costomsel'
export default {
	data() {
		return {
			animations:  ['无效果', '橡皮筋', '放大', '光速进入', '向左飞入', '向右飞入', '向上飞入', '向下飞入', '滚入', '摇摆', '抖动', '强调'],
			list: ['时间 : 1秒','时间 : 2秒','时间 : 3秒','时间 : 4秒','时间 : 5秒','时间 : 6秒']
		}
		
	},
	components: {
		costomsel,
	},
	methods: {
		chooseSel(val){
			console.log(val)
		}
	}
}

</script>
<style lang="less" scoped>
.optionsCont {
	p.page-cont-p {
		height: 46px;
		width: 100%;
		line-height: 46px;
		text-indent: 42px;
	}
	p.page-cont-p1 {
		background: #171717 url('../../img/design_right_setting.png') no-repeat 10px center;
	}
	p.page-cont-p2 {
		background: #171717 url('../../img/design_mid_icon_scene.png') no-repeat 10px center;
	}
	div.page-cont-div {
		padding: 20px 10px 0 12px;
		font-size: 13px;
		background: #444;
		color: #828282;
		div.control-p {
			margin-bottom: 24px;
			a {
				color: #3166ff;
				padding-left: 10px;
			}
			label {
				padding-left: 10px;
				text-indent: 20px;
			}
			div.div-2 {
				// display: none;
				padding: 16px 0 0 72px;

				p {
					margin-bottom: 16px;
					input {
						display: inline-block;
						width: 112px;
						height: 22px;
						background: #303030;
						border-radius: 3px;
						margin: 0 14px 0 8px;
					}
				}
				border-bottom: 1px solid #363636;
			}
		}
		div.control-p2 {
			margin-bottom: 0;
		}
		div.div-3 {
			padding: 16px 0 22px 72px;
			label {
				padding-right: 22px;
			}
		}
	}
	div.animation-div {
		li {
			margin: 20px 0 0 16px;
			font-size: 14px;
			font-weight: 100;
			text-align: center;
			color: #6f6f6f;
			width: 56px;
			cursor: pointer;
			div.img {
				width: 100%;
				height: 56px;
				border-radius: 10px;
				border: 1px solid #ccc;
				margin-bottom: 14px;
				overflow: hidden;
				img {
					display: block;
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}

</style>
