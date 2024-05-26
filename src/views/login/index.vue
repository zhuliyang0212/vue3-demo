<template>
  <div class="container">
    <login v-if="toggle === 'login'" @nav-register="toggle = 'register'" />
    <register v-if="toggle === 'register'" @nav-login="toggle = 'login'" />
  </div>
</template>

<script setup lang="ts">
import login from "./components/login.vue";
import register from "./components/register.vue";
import { ref } from "vue";

let toggle = ref("login");
</script>
<style lang="less" scoped>
.container {
  height: 100%;
  width: 100%;
  background-color: cyan;
  position: relative;
}
</style>
