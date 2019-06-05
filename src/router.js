import Vue from 'vue'
import Router from 'vue-router'
import { TITLE } from './config'

Vue.use(Router)

const Notes = () => import(/* webpackChunkName: "notes" */ './views/notes')
const New = () => import(/* webpackChunkName: "new" */ './views/new')

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '备忘录',
        showNavbar: true,
        showTabbar: true,
        actionSheet: [
          { name: '新建笔记', action: 'new' },
          { name: '按时间排序', action: 'sort' },
          { name: '删除已完成', action: 'deleteCompleted' },
          { name: '删除全部', action: 'deleteAll' }
        ]
      },
      component: Notes
    },
    {
      path: '/new',
      name: 'new',
      meta: {
        title: '新建',
        showNavbar: true
      },
      component: New
    },
    {
      path: '/edit/:id',
      name: 'edit',
      meta: {
        title: '编辑',
        showNavbar: true
      },
      component: New
    },
    {
      path: '/collection',
      name: 'collection',
      meta: {
        title: '收藏',
        showNavbar: true,
        showTabbar: true
      },
      component: Notes
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {
        showNavbar: true,
        showTabbar: true
      },
      component: () =>
        import(/* webpackChunkName: "profile" */ './views/profile')
    },
    {
      path: '/settings',
      name: 'settings',
      meta: {
        showNavbar: true
      },
      component: () =>
        import(/* webpackChunkName: "settings" */ './views/settings')
    },
    {
      path: '/settings/avatar',
      name: 'avatar',
      meta: {},
      component: () =>
        import(/* webpackChunkName: "avatar" */ './views/settings/avatar')
    },
    {
      path: '/settings/name',
      name: 'name',
      meta: {},
      component: () =>
        import(/* webpackChunkName: "name" */ './views/settings/name')
    },
    {
      path: '/note/:id',
      name: 'note',
      meta: {
        title: '详情',
        showNavbar: true,
        actionSheet: [
          { name: '编辑', action: 'edit' },
          { name: '删除', action: 'delete' }
        ]
      },
      component: () => import(/* webpackChunkName: "note" */ './views/note')
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
  document.title = to.meta.title || TITLE
  next()
})

export default router
