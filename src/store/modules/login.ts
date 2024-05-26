import { defineStore } from "pinia";

export const userInfo = defineStore("userInfo", () => ({
  state: {
    token: "",
  },
}));
