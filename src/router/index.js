import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	// mode: 'history',
	routes: [{
		path: '/',
		redirect: '/home'
	}, {
		path: '/home',
		name: 'Activity1',
		component: resolve => require(['../components/activity/index1'], resolve)
	}, {
		path: '/main',
		name: 'Activity2',
		component: resolve => require(['../components/activity/index2'], resolve)
	}, {
		path: '/loan',
		name: 'Activity3',
		component: resolve => require(['../components/activity/index3'], resolve)
	}, {
		path: '/page',
		name: 'Activity4',
		component: resolve => require(['../components/activity/index4'], resolve)
	}, {
		path: '/page5',
		name: 'Activity5',
		component: resolve => require(['../components/activity/index5'], resolve)
	}, {
		path: '/page6',
		name: 'Activity6',
		component: resolve => require(['../components/activity/index6'], resolve)
	}, {
		path: '/perfectinfo/:backurl',
		name: 'Form3',
		component: resolve => require(['../components/activity/index3/form3'], resolve)
	}, {
		path: '/service',
		name: 'service',
		component: resolve => require(['../components/service'], resolve)
	}, {
		path: '/serviceyyd',
		name: 'serviceyyd',
		component: resolve => require(['../components/service-yyd'], resolve)
	}, {
		path: '/servicegs',
		name: 'servicegs',
		component: resolve => require(['../components/service-gs'], resolve)
	}, {
		path: '/success',
		name: 'success',
		component: resolve => require(['../components/success-page'], resolve)
	}, {
		path: '/product/:url',
		name: 'product',
		component: resolve => require(['../components/product-ad'], resolve)
	}, {
		path: '/iframe/:url',
		name: 'iframe',
		component: resolve => require(['../components/iframe'], resolve)
	}, {
		path: "*",
		redirect: '/home'
	}]
})