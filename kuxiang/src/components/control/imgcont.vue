<template>
	<div class="imgcont clearfix">
		<ul class="tab-ul">
			<li :class="{active: tab==0}" @click="tab=0">图片库</li>
			<li :class="{active: tab==1}" @click="tab=1">机构图片</li>
		</ul>
		<div class="img-div clearfix img1">
			<ul>
				<li v-for="(item, index) in tabs"><a :class="{active: imgTab==index}" @click="imgTab=index">{{item}}</a></li>
			</ul>
			<pinterest style="height: calc(100vh - 300px);float: left;margin: 10px 0 0 10px;width: 280px;"></pinterest>
		</div>
		<div class="img-div clearfix img2">
		</div>
		<a class="chooseFile">
			<input type="file" name="myfile" id="file1" @change='onUpload($event)'>上传图片</a>
	</div>
</template>
<script>
import pinterest from '@/components/custom/pinterest'
export default {
	data() {
		return {
			tab: 0,
			tabs: ['热门', '背景', '商务', '活动', '企业', '节目', '热门', '背景', '商务', '活动', '企业', '节目', '热门', '背景', '商务', '活动', '企业', '节目'],
			imgTab: 0
		}
	},
	methods: {
		onUpload(event) {

		}
	},
	components: {
		pinterest,
	},

}

</script>

<style lang="less" scoped>
.imgcont {
	background: #444;width: 100%;height: 100%;text-align: center;
	ul.tab-ul {
		width: 100%;
		li {
			width: 50%;
			box-sizing: border-box;
			height: 50px;
			line-height: 50px;
			background: #202020;
			text-align: center;
			cursor: pointer;
		}
		li.active {
			background: #444;
		}
	}
	div.img-div {
		padding-top: 12px;
		float: left;
		li {
			width: 50px;
			height: 30px;
			text-align: center;
			a {
				display: inline-block;
				padding: 4px 8px 6px;
				border-radius: 3px;
				font-size: 13px;
			}
			a.active {
				background: #676767;
				color: #DBDBDB;
			}
		}
	}
	a.chooseFile {
      display: inline-block;
      background: #161616;
      width: 240px;
      height: 34px;
      border-radius: 5px;
      line-height: 34px;
      margin-top: 23px;
      text-align: center;
      position: relative;
      overflow: hidden;
      input {
        position: absolute;
        top: 0;
        right: 0;
        opacity: 0;
      }
    }
}

</style>
