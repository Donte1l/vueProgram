import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "./assets/font/font.css";
import { detectZoom } from "@/utils/detectZoom.js";
const m = detectZoom();
document.body.style.zoom = 155 / Number(m);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
