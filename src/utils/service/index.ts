import axios from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

class Service {
  instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    this.instance.interceptors.request.use(
      (res: InternalAxiosRequestConfig) => res,
      (err: any) => err
    );

    // 去掉一层data
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => res.data,
      (err: any) => err
    );
  }
  get(url: string, config?: AxiosRequestConfig) {
    return this.instance.get(url, config);
  }
}

export default Service;
