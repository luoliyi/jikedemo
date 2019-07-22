import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "Home" */ './views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import(/* webpackChunkName: "UserLayout" */ './layouts/UserLayout.vue'),
      children: [
        {
          path: '/layout/demo1',
          name: 'demo1',
          component: () => import(/* webpackChunkName: "Demo1" */ './views/Demo1.vue')
        }
      ]
    },
    {
      path: '/global',
      name: 'global',
      component: () => import(/* webpackChunkName: "BaseLayout" */ './layouts/BaseLayout.vue'),
      children: [
        {
          path: '/global/demo1',
          name: 'demo1',
          component: () => import(/* webpackChunkName: "Demo1" */ './views/Demo1.vue')
        }
      ]
    }
  ]
})
