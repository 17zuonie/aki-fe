import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

import './meting.js'
import router from './router'
import axios from './http'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  store: store,
  render: h => h(App),
}).$mount('#app')
