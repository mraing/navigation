import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  // mode: 'hash',
  mode: 'history',
  linkActiveClass: 'open-link-action',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
