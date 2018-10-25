import Vue from 'vue'
import Router from 'vue-router'
import Huntsite from '../components/elm/huntsite'
import Home from '../components/elm/home'
import Store from '../components/elm/store.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
       path:'/',
       component:Home
    },
    {
      path:'/home',
      component:Home
    },
    {
      path: '/huntsite/:id?',
      component: Huntsite
    },{
      path:'/store',
      component:Store
    }
  ]
})
