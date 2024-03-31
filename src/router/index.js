import Vue from "vue";
import VueRouter from "vue-router";
import MainBox from "@/views/MainBox.vue";
import List from "@/views/list/List.vue";
import Upload from "@/views/upload/Upload.vue";
import NotFound from "@/views/notFound/NotFound.vue";
import Manager from "@/views/manager/Manager.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/manager",
    name: "manager",
    component: Manager,
  },
  {
    path: "/mainBox",
    name: "mainBox",
    component: MainBox,
    children: [
      {
        path: "/list",
        component: List,
      },
      {
        path: "/upload",
        component: Upload,
      },
    ],
  },
  {
    path: "/",
    redirect: "/manager", // 默认重定向到List
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

// 解决vue-router在3.0版本以上重复报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default router;
