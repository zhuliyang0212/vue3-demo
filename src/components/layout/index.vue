<template>
  <div class="layout">
    <!-- 侧边菜单 -->
    <sidebar />
    <!-- 右边内容 -->
    <div class="container">
      <div class="navbar">这是顶部导航</div>
      <div class="tags-view">
        <el-tag>首页</el-tag>
      </div>
      <div class="app-main">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { ref } from "vue";

import sidebar from "./components/sidebar/index.vue";
</script>
<style lang="less" scoped>
.layout {
  height: 100%;
  display: flex;

  .sidebar {
    width: 210px;
    height: 100%;
    overflow-y: auto;
    border-right: 1px solid #ccc;
  }

  .container {
    flex: 1;

    .navbar {
      height: 50px;
      line-height: 50px;
      padding: 0 10px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    }

    .tags-view {
      height: 30px;
      line-height: 30px;
      padding: 0 10px;
      border-bottom: 1px solid #ccc;
    }

    .app-main {
      width: 100%;
      height: calc(100% - 80px);
      background-color: cyan;

      > div {
        height: 100%;
      }
    }
  }
}
</style>
