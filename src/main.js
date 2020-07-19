import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//引用api文件
import api from './config/fetch.js'
//将api方法绑定到全局
Vue.prototype.$api = api

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
