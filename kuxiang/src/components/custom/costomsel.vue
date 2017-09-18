<template>
	<div class="costomsel">
		<a @click="isShow=!isShow">{{select}}<i class="iconfont icon-select" style="float: right;color: #000;font-size: 24px;margin-right: 3px;"></i></a>
		<ul v-show="isShow" class="animated fadeInUp" :class="{down: type == 'down'}">
			<li v-for="item in list" @click="selectClick(item)">{{item}}</li>
		</ul>
	</div>
</template>
<script>
export default {
	props: ['list', 'type'],
	data() {
		return {
			isShow: false,
			select: this.list[0]
		}
	},
	methods: {
		selectClick(val) {
			this.isShow = false;
			this.select = val;
			this.$emit('chooseSel',val)
		}
	}
}

</script>
<style scoped>
.costomsel {
	width: 100%;
	height: 30px;
	position: relative;
}

.costomsel a {
	color: #d9d9d9;
	display: block;
	width: 100%;
	height: 100%;
	text-indent: 10px;
	line-height: 30px;
	font-size: 13px;
	border-radius: 4px;
	border: 1px solid #2c2c2c;
	background: #515151;
}

.costomsel ul {
	position: absolute;
	left: 0;
	background: #444;
	border: 1px solid #2c2c2c;
	margin-top: 1px;
	border-radius: 4px;
	width: 100%;
}

.costomsel li {
	padding: 2px 0;
	width: 100%;
	text-indent: 10px;
	font-size: 13px;
}

.costomsel li:hover {
	background: #515151;
	cursor: pointer;
	color: #d9d9d9;
}

.costomsel ul.down {
	bottom: 30px;
}

</style>
