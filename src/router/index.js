import Vue from 'vue'
import Router from 'vue-router'
import MySite from '../pages/mySite/MySite'
import Order from '../pages/Order/Order'
import Search from '../pages/Search/Search'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
import Home from '@/components/Home'
import Shops from '../pages/Shops/Shops'
import Foods from '../pages/Shops/Foods/Foods.vue'
import Comments from '../pages/Shops/comments/comments.vue'
import Bussness from '../pages/Shops/Bussness/Bussness.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/MySite',
      component: MySite,
      name: MySite,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/Order',
      component: Order,
      name: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Search',
      component: Search,
      name: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Profile',
      component: Profile,
      name: Profile,
      meta: {
        showFooter: true
      }
    }, 
    {
      path: '/Login',
      component: Login,
      name: Login
    },
    {
      path: '/',
      redirect: 'MySite'
    },
    {
      path: '/shops',
      component: Shops,
      name: Shops,
      children:[
        {
          path: '/shops/foods',
          component: Foods
        },
        {
          path: '/shops/comments',
          component: Comments
        },
        {
          path: '/shops/Bussness',
          component: Bussness
        },
        {
          path: '/',
          redirect: 'Foods'
        }
      ]
    }
  ]
})
