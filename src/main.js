import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/globle.css'
import axios from 'axios'
Vue.prototype.$http = axios
// axios.defaults.baseURL = 'https://autumnfish.cn/'
axios.defaults.baseURL='/api'

// Vue.config.productionTip = false
Vue.use(Element);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
