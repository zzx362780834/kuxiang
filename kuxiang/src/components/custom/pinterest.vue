<template>
	<div class="pinterest">
		<div class="box">
			<!-- 	<div v-for="item in imgs" class="boximg">
				<img :src="item">
			</div> -->
			<div class="boximg">
				<img src="../../img/tem_img_1.png">
			</div>
			<div class="boximg">
				<img src="../../img/tem_img_2.png">
			</div>
			<div class="boximg">
				<img src="../../img/tem_img_3.png">
			</div>
			<div class="boximg">
				<img src="../../img/tem_img_4.png">
			</div>
			<div class="boximg">
				<img src="../../img/tem_img_5.png">
			</div>
			<div class="boximg">
				<img src="../../img/tem_img_6.png">
			</div>
			<div class="boximg">
				<img src="../../img/tem_img_7.png">
			</div>
			<div class="boximg">
				<img src="../../img/tem_img_8.png">
			</div>
			<div class="boximg">
				<img src="../../img/tem_img_9.png">
			</div>
			<div class="boximg">
				<img src="../../img/tem_img_10.png">
			</div>
			<div class="boximg">
				<img src="../../img/tem_img_11.png">
			</div>
			<div class="boximg">
				<img src="../../img/tem_img_12.png">
			</div>
			<div class="boximg">
				<img src="../../img/tem_img_13.png">
			</div>
			<div class="boximg">
				<img src="../../img/tem_img_14.png">
			</div>
			<div class="boximg">
				<img src="../../img/tem_img_1.png">
			</div>
			<div class="boximg">
				<img src="../../img/tem_img_2.png">
			</div>
			<div class="boximg">
				<img src="../../img/tem_img_3.png">
			</div>
			<div class="boximg">
				<img src="../../img/tem_img_4.png">
			</div>
			<div class="boximg">
				<img src="../../img/tem_img_5.png">
			</div>
			<div class="boximg">
				<img src="../../img/tem_img_6.png">
			</div>
			<div class="boximg">
				<img src="../../img/tem_img_7.png">
			</div>
			<div class="boximg">
				<img src="../../img/tem_img_8.png">
			</div>
			<div class="boximg">
				<img src="../../img/tem_img_9.png">
			</div>
			<div class="boximg">
				<img src="../../img/tem_img_10.png">
			</div>
			<div class="boximg">
				<img src="../../img/tem_img_11.png">
			</div>
			<div class="boximg">
				<img src="../../img/tem_img_12.png">
			</div>
			<div class="boximg">
				<img src="../../img/tem_img_13.png">
			</div>
			<div class="boximg">
				<img src="../../img/tem_img_14.png">
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			imgs: []
		}
	},
	mounted() {
		var _this = this;
		setTimeout(function() {
			var allArr = $('.boximg');
			var num = 2; 
			_this.getMinHeightOfCols(allArr, num);
		}, 100)

	},
	methods: {
		getMinHeightOfCols(chirdArr, num) {
			var onlyOneColsArr = [];
			for (var i = 0; i < chirdArr.length; i++) {
				if (i < num) {
					onlyOneColsArr[i] = chirdArr[i].offsetHeight;
				} else {
					var minHeightOfCols = Math.min.apply(null, onlyOneColsArr);
					var minHeightOfindex = this.getminIndex(onlyOneColsArr, minHeightOfCols);
					chirdArr[i].style.position = "absolute";
					chirdArr[i].style.top = minHeightOfCols + "px";
					chirdArr[i].style.left = chirdArr[minHeightOfindex].offsetLeft + "px";
					onlyOneColsArr[minHeightOfindex] += chirdArr[i].offsetHeight;
				}
			}

		},
		getminIndex(onlyOneColsArr, min) {
			for (var i in onlyOneColsArr) {
				if (onlyOneColsArr[i] == min) {
					return i;
				}
			}
		}
	}
}

</script>
<style scoped>
.pinterest {
	position: relative;
	background: #161616;
	border-radius: 5px;
	overflow: hidden;
}

.pinterest .box {
	overflow-y: scroll;
	width: 300px;
	height: 100%;
	position: relative;
}

.pinterest .boximg {
	float: left;
	padding: 5px 0 0 5px;
}

.pinterest .boximg img {
	width: 132px;
	height: auto;
}

</style>
