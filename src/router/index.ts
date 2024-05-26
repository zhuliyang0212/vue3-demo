import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/components/layout/index.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
      },
      {
        path: "/chart",
        children: [
          {
            path: "lineCharts",
            name: "lineCharts",
            component: () => import("@/views/charts/lineCharts/index.vue"),
          },
          {
            path: "barCharts",
            name: "barCharts",
            component: () => import("@/views/charts/barCharts/index.vue"),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

//设置路由白名单
const allowList = ["login"];

// 路由守卫
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem("token");
  console.log(token, "token");
  if (token) {
    if (to.name === "login") {
      next({ path: "/dashboard" });
    } else {
      next();
    }
  } else {
    if (allowList.includes(to.name as string)) {
      next();
    } else {
      next({
        path: "/login",
        query: {},
        replace: true,
      });
    }
  }
});

export default router;
