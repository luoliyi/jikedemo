import Vue from 'vue'
import Router from 'vue-router'
// 导入加载滚动条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(Router)

const router = new Router({
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

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})
export default router
