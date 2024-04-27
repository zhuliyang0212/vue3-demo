import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface RequestInterceptors {
  //请求拦截
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (error: any) => any;
  //响应拦截
  responseInterceptors?: (response: AxiosResponse) => AxiosResponse;
  responseInterceptorsCatch?: (error: any) => any;
}

export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors;
}
