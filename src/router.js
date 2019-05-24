import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/index')
    },
    {
      path: '/new',
      name: 'new',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "new" */ './views/new')
    },
    {
      path: '/star',
      name: 'star',
      component: () => import(/* webpackChunkName: "star" */ './views/star')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () =>
        import(/* webpackChunkName: "profile" */ './views/profile')
    }
  ]
})
