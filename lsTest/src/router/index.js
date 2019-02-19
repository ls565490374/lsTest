import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/main'

Vue.use(Router)
// import appOne from '@/components/appOne/index.vue'
const appOne = () => import(/* webpackChunkName: "appOne" */ '@/components/appOne/index.vue')
// import appTwo from '@/components/appTwo/index.vue'
const appTwo = () => import(/* webpackChunkName: "appTwo" */ '@/components/appTwo/index.vue')
// import appThree from '@/components/appThree/index.vue'
const appThree = () => import(/* webpackChunkName: "appThree" */ '@/components/appThree/index.vue')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/appOne',
      name: 'appOne',
      component: appOne
    },
    {
      path: '/appTwo',
      name: 'appTwo',
      component: appTwo
    },
    {
      path: '/appThree',
      name: 'appThree',
      component: appThree
    }
  ]
})
