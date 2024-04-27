import request from "@/utils/service/service";

export const reqGet = (url: string, params: Object = {}) => {
  return request({
    url,
    method: "GET",
    data: params,
  });
};
