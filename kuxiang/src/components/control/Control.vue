<template>
	<div class="control">
		<ul>
			<li :class="{active: tab==1}" @click="tab=1"><a>背景</a></li>
			<li :class="{active: tab==2}" @click="tab=2"><a>文字</a></li>
			<li :class="{active: tab==3}" @click="tab=3"><a>图片</a></li>
			<li :class="{active: tab==4}" @click="tab=4"><a>音乐</a></li>
			<li :class="{active: tab==5}" @click="tab=5"><a>视频</a></li>
			<li :class="{active: tab==6}" @click="tab=6"><a>文档</a></li>
			<li :class="{active: tab==7}" @click="tab=7"><a>其他</a></li>
			<li :class="{active: tab==8}" @click="tab=8"><a></a></li>
		</ul>
		
		<div class="coutrol-nav" v-show="tab!=0">
			<backgroudcont v-if="tab==1"></backgroudcont>
			<fontcout v-else-if="tab==2"></fontcout>
			<imgcont v-else-if="tab==3"></imgcont>
			<musicimg v-else-if="tab==4"></musicimg>
			<videocont v-else-if="tab==5"></videocont>
			<documentcout v-else-if="tab==6"></documentcout>
			<othercont v-else-if="tab==7"></othercont>
			<optionscont v-else-if="tab==8"></optionscont>
		</div>

	</div>
</template>

<script>
import backgroudcont from '@/components/control/backgroudcont'
import fontcout from '@/components/control/fontcout'
import imgcont from '@/components/control/imgcont'
import musicimg from '@/components/control/musicimg'
import videocont from '@/components/control/videocont'
import documentcout from '@/components/control/documentcout'
import othercont from '@/components/control/othercont'
import optionscont from '@/components/control/optionscont'
export default{
	data(){
		return{
			tab: 0
		}
	},
 	components: { backgroudcont, fontcout, imgcont, musicimg, videocont, documentcout, othercont, optionscont, }


}
</script>

<style lang="less" scoped>
.control{
	width: 100%;height: 100%;background:#0F0F0F;position: absolute;top:0;right: 0;
	div.coutrol-nav{
		width: 300px;height: 100%;position: absolute;top: 0;left: -300px;background: #343434;
	}

	li{
		width: 100%;height: 70px;
	}
	li.active{
		background: #343434;
	}
	a{
		display: block;width: 100%;height: 100%;font-size: 13px;text-align: center;line-height: 94px;
	}

	li:nth-of-type(1) a{background: url('../../img/design_right_background.png') no-repeat center 10px;}
	li:nth-of-type(2) a{background: url('../../img/design_right_text.png') no-repeat center 13px;}
	li:nth-of-type(3) a{background: url('../../img/design_right_img.png') no-repeat center 11px;}
	li:nth-of-type(4) a{background: url('../../img/design_right_music.png') no-repeat center 14px;}
	li:nth-of-type(5) a{background: url('../../img/design_right_video.png') no-repeat center 18px;}
	li:nth-of-type(6) a{background: url('../../img/design_right_word.png') no-repeat center 12px;}
	li:nth-of-type(7) a{background: url('../../img/design_right_more.png') no-repeat center 10px;}
	li:nth-of-type(8)  {position: absolute;bottom: 0;left: 0;border-top: 2px solid #080808;height: 60px;}
	li:nth-of-type(8) a{background: url('../../img/design_right_setting.png') no-repeat center center;}
}
</style>