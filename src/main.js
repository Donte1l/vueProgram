import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "./assets/font/font.css";
import { detectZoom } from "@/utils/detectZoom.js";
const m = detectZoom();
if (window.screen.width * window.devicePixelRatio >= 3840) {
  console.log("m", m);
  switch (m) {
    // 4k屏时屏幕缩放比为100%
    case 100:
      document.body.style.zoom = 100 / 50;
      break;
    // 4k屏时屏幕缩放比为125%
    case 125:
      document.body.style.zoom = 100 / 62.5;
      break;
    // 4k屏时屏幕缩放比为150%
    case 150:
      document.body.style.zoom = 100 / 75;
      break;
    // 4k屏时屏幕缩放比为175%
    case 175:
      document.body.style.zoom = 100 / 87.4715;
      break;
    case 219:
      document.body.style.zoom = 140 / 100;
      break;
    // 4k屏时屏幕缩放比为225%
    case 225:
      document.body.style.zoom = 100 / 112.485;
      break;

    default:
      break;
  }
} else {
  document.body.style.zoom = 155 / Number(m);
}
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
