import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
 

axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3';

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue);
Vue.config.productionTip = false


new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
