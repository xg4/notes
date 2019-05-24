import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './registerServiceWorker'

import { Button, NavBar, Tabbar, TabbarItem, Tab, Tabs } from 'vant'
;[Button, NavBar, Tabbar, TabbarItem, Tab, Tabs].forEach(component =>
  Vue.use(component)
)

import 'normalize.css'
import 'animate.css'
import 'vant/lib/index.css'
import './assets/css/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
