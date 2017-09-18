<template>
	<div class="home">
		<home-nav style="height: 60px;"></home-nav>
		<div class="content">
			<control style="width: 60px;height: 100%;"></control>	
		</div>
	</div>
</template>

<script>
import HomeNav from '@/components/nav/HomeNav'
import Control from '@/components/control/Control'
export default{
	data(){
		return{

		}
	},
	components: {
		HomeNav,
		Control
	}
}
</script>

<style scoped>
.home{
	width: 100%;height: 100%;
	
}
.content{
		width: 100%;height: calc(100vh - 60px);position: relative;
	}
</style>