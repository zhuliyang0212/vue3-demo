import { AxiosResponse } from "axios";

declare module "axios" {
  interface AxiosInterface {
    (config: AxiosResponseConfig): Promise<any>;
  }
}
