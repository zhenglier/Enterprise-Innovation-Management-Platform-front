import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import app from "./modules/app";
import settings from "./modules/settings";
import user from "./modules/user";

Vue.use(Vuex);

//这里是分的模块
const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
  },
  getters,
});

export default store;
