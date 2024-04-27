import { defineStore } from "pinia";

export const menuList = defineStore("menuList", () => ({
  menus: [
    {
      path: "/dashboard",
      name: "仪表盘",
      component: () => import("@/views/dashboard/index.vue"),
    },
    {
      path: "/chart",
      name: "图表",
      children: [
        {
          path: "/chart/lineCharts",
          name: "折线图",
        },
        {
          path: "/chart/barCharts",
          name: "柱状图",
        },
      ],
    },
  ],
}));
