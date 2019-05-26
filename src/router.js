import Vue from 'vue'
import Router from 'vue-router'
import * as config from './config'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '备忘录',
        showNavbar: true,
        showTabbar: true,
        actionSheet: 'notes'
      },
      component: () => import(/* webpackChunkName: "home" */ './views/index')
    },
    {
      path: '/new',
      name: 'new',
      meta: {
        title: '新建',
        showNavbar: true,
        showTabbar: true
      },
      component: () => import(/* webpackChunkName: "new" */ './views/new')
    },
    {
      path: '/star',
      name: 'star',
      meta: {
        title: '收藏',
        showNavbar: true,
        showTabbar: true
      },
      component: () => import(/* webpackChunkName: "star" */ './views/star')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {
        title: '我的',
        showNavbar: true,
        showTabbar: true
      },
      component: () =>
        import(/* webpackChunkName: "profile" */ './views/profile')
    },
    {
      path: '/note/:id',
      name: 'note_id',
      meta: {
        title: '详情',
        showNavbar: true
      },
      component: () =>
        import(/* webpackChunkName: "detail" */ './views/note/_id')
    },
    {
      path: '*',
      name: '404',
      meta: {
        title: '404'
      },
      component: () => import(/* webpackChunkName: "404" */ './views/404')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || config.title
  next()
})

export default router
