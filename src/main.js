import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './registerServiceWorker'

import 'normalize.css'
import './assets/css/index.less'

import {
  Popup,
  Picker,
  Dialog,
  ActionSheet,
  Toast,
  SwitchCell,
  Cell,
  CellGroup,
  Field,
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
  Icon
} from 'vant'
;[
  Popup,
  Picker,
  Dialog,
  ActionSheet,
  Toast,
  SwitchCell,
  Cell,
  CellGroup,
  Field,
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
  Icon
].forEach(component => Vue.use(component))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
