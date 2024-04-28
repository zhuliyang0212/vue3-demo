<template>
  <el-scrollbar class="sidebar">
    <div class="logo">Vue3+TS</div>
    <el-menu :collapse="isCollapse" class="z-menu">
      <sidebarItem v-for="route in routes" :key="route.path" :route="route" />
    </el-menu>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { ref } from "vue";
import sidebarItem from "./sidebarItem.vue";
import { menuList } from "@/store/menus";
import { reqGet } from "@/api/common";

let routes = menuList().menus;

let isCollapse = ref(false);

console.log(routes, "routes");

const getRoutes = () => {
  reqGet("/api/getRoutes").then((res) => {
    console.log(res, "getRoutes");
  });
};

getRoutes();
</script>
<style lang="less" scoped>
.el-scrollbar {
  height: 100%;
}
.logo {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
</style>
