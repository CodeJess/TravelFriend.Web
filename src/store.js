import Vue from "vue";
import Vuex from "vuex";
import config from "./config/config.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    //改变state值的方法
    saveToken(state,data){
      state.token = data
    }
  },
  actions: {},
  modules: {}
});
