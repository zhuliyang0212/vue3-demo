import service from "@/utils/service/service";

export default {
  login: (data: object) => {
    return service({
      method: "post",
      url: "/api/login",
      data,
    });
  },
  register: (data: object) => {
    return service({
      method: "post",
      url: "/api/register",
      data,
    });
  },
};
