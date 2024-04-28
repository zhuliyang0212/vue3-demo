import { resolve } from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueDevTools from "vite-plugin-vue-devtools";

const pathSrc = resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueDevTools()],
  css: {
    preprocessorOptions: {
      less: {
        math: "always",
      },
    },
  },
  resolve: {
    alias: {
      "@": pathSrc,
    },
  },
  server: {
    hmr: true,
    open: true,
    // port: 10200,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
