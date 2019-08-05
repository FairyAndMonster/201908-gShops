import Vue from 'vue'
import Router from 'vue-router'
import MySite from '../pages/mySite/MySite'
import Order from '../pages/Order/Order'
import Search from '../pages/Search/Search'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
import Home from '@/components/Home'

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
  ]
})
