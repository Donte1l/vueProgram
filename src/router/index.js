import Vue from "vue";
import VueRouter from "vue-router";
import MainBox from "@/views/MainBox.vue";
import CatchList from "@/views/catchList/CatchList.vue";
import NotFound from "@/views/notFound/NotFound.vue";
import Manager from "@/views/manager/Manager.vue";
import Center from "@/views/center/Center.vue";
import SignList from "@/views/signList/SignList.vue";

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
        path: "/center",
        component: Center,
      },
      {
        path: "/list",
        component: CatchList,
      },
      {
        path: "/upload",
        component: SignList,
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
