import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  }
  ,
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/city',
    name: 'city',
    component: () => import(/* webpackChunkName: "about" */ '../views/city/City.vue')
  },
  {
    path: '/detail/:id',
    name: 'goodsDetail',
    component: () => import('views/goodsDetail/GoodsDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
