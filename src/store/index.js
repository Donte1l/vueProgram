import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCollapsed: false, // 侧边栏是否折叠
  },
  getters: {},
  mutations: {
    changeCollapsed(state, isCollapsed) {
      state.isCollapsed = !state.isCollapsed;
    },
  },
  actions: {},
  modules: {},
});
