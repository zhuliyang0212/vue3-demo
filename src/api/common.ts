import service from "@/utils/service/service";

export default {
  // 获取路由
  getRoutes: () => {
    return service({
      method: "get",
      url: "/api/getRoutes",
    });
  },
};
