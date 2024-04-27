<template>
  <el-scrollbar class="sidebar">
    <div>LOGO</div>
    <el-menu :collapse="isCollapse" class="z-menu">
      <!-- <sidebarItem v-for="route in routes" :key="route.path" :route="route" /> -->
      <div v-for="route in routes" :key="route.path">
        <el-sub-menu
          v-if="route.children && route.children.length"
          :index="route.path"
        >
          <template #title>
            <span>{{ route.name }}</span>
          </template>
          <template>
            <el-menu-item
              v-for="item in route.children"
              :key="item.path"
              :index="item.path"
              >{{ item.name }}</el-menu-item
            >
          </template>
        </el-sub-menu>
        <template v-else>
          <el-menu-item :index="route.path">
            <template #title>
              {{ route.name }}
            </template>
          </el-menu-item>
        </template>
      </div>
    </el-menu>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { ref } from "vue";
// import sidebarItem from "./sidebarItem.vue";
import { menuList } from "@/store/menus";
import { reqGet } from "@/api/common";

let routes = menuList().menus;

let isCollapse = ref(false);

const getMenus = () => {
  reqGet("/getMenu").then((res) => {
    console.log(res, "menus");
  });
};

getMenus();
</script>
<style lang="less" scoped>
.el-scrollbar {
  height: 100%;
}
</style>
