import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/components/layout/index.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
      },
      {
        path: "/chart",
        rediract: "chart",
        children: [
          {
            path: "/chart/lineCharts",
            name: "lineCharts",
            component: () => import("@/views/charts/lineCharts/index.vue"),
          },
          {
            path: "/chart/barCharts",
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

export default router;
