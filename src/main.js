import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router.js';
import store from './store';
import axios from 'axios';
import Toasted from 'vue-toasted';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueSlideoutPanel from 'vue2-slideout-panel';
import MdSwitch from 'vue-material/dist/components/MdSwitch';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(VueSlideoutPanel);
Vue.use(MdSwitch);

Vue.config.productionTip = false;
// Vue.prototype.$http = axios
Vue.use(VueRouter);
Vue.use(Toasted, {theme: 'bubble', duration: 3000, position: 'bottom-right'});

// const token = localStorage.getItem('chef_token')
// if (token) {
//   Vue.prototype.$http.defaults.headers.common['Authorization'] = token
// }

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
