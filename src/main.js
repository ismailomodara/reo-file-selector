import Vue from 'vue'
import App from './App.vue'

import './assets/css/main.scss'
import './utils'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
