import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import NearbyShops from '@/components/NearbyShops'
import PrefferedShops from '@/components/PrefferedShops'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/nearbyshops',
      name: 'nearbyshops',
      component: NearbyShops
    },
    {
      path: '/prefferedshops',
      name: 'prefferedshops',
      component: PrefferedShops
    }
  ]
})
