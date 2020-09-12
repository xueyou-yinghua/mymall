import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "../components/content/Home/home";
import classify from "../components/content/classify/classify";
import shopping from "../components/content/shopping/shopping";
import mine from "../components/content/mine/mine";



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'home'
  },
  {
    path:'/home',
    name:'home',
    meta:{
      title:'首页'
    },
    component:home
  },
  {
    path:'/classify',
    meta:{
      title:'分类'
    },
    component:classify,
  },
  {
    path:'/shopping',
    meta:{
      title:'购物车'
    },
    component:shopping,
  },
  {
    path:'/mine',
    meta:{
      title:'我的'
    },
    component:mine,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
