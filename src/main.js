import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Vuelidate} from 'vuelidate'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.use(Vuelidate).use(PiniaVuePlugin).use(VueAxios, axios)
Vue.config.productionTip = false
const pinia = createPinia()

new Vue({
  router,
  store,
  validations:{},
  pinia,
  render: h => h(App)
}).$mount('#app')
