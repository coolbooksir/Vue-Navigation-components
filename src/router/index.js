import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:Home
  },
  {
    path: '/home',
    meta:{
      title:'首页'
    },
    name: 'Home',
    component: Home
  },
  {
    path:'/recyclables',
    meta:{
      title:'可回收物'
    },
    name:'recyclables',
    component:() => import('../views/recyclables/Recyclables')
  },
  {
    path:'/Kitchen',
    meta:{
      title:'厨余'
    },
    name:'Kitchen',
    component:() => import('../views/kitchen/Kitchen')
  },
  {
    path:'/hazardous',
    meta:{
      title:'有害物'
    },
    name:'hazardous',
    component:() => import('../views/hazardous/Hazardous')
  },
  {
    path:'/other',
    meta:{
      title:'其他'
    },
    name:'other',
    component:() => import('../views/other/Other')
  },
  {
    path:'/login',
    meta:{
      title:'登录'
    },
    name:'login',
    component:() => import('../views/login/Login')
  },
  {
    path:'/regist',
    meta:{
      title:'注册'
    },
    name:'regist',
    component:() => import('../views/regist/Regist')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  document.title=to.matched[0].meta.title;
  next()
})

export default router
