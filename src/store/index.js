import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from "./mutations";
import actions from "./actions";

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
