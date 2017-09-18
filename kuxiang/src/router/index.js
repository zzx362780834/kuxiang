import Vue from 'vue'
import Router from 'vue-router'


const Home = resolve => require(['@/components/Home'], resolve)
Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			component: Home,
		},
	]
})
