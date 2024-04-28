import { defineStore } from "pinia";

export const layout = defineStore("layout", () => ({
  state: {
    collapse: false,
  },
}));
