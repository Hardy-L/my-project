// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Swiper from "swiper";
// import 'swiper/dist/css/swiper.min.css';
// Vue.use(Swiper)
// 引入axios插件
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
// import Vuex from 'vuex'
// 引入elementui


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// Vue.use(Vuex);
Vue.config.productionTip = false;

// 引入store模块
import store from "./store"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
