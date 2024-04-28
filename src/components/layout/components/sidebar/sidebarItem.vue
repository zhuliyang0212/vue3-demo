<template>
  <el-sub-menu
    v-if="route.children && route.children.length"
    :index="route.path"
    teleported
  >
    <template #title>
      <span v-if="route.name">{{ route.name }}</span>
    </template>
    <template v-if="route.children">
      <sidebarItem
        v-for="child in route.children"
        :key="child.path"
        :route="child"
      />
    </template>
  </el-sub-menu>
  <template v-else>
    <el-menu-item :index="route.path" @click="menuClick(route.path)">
      <template v-if="route.name" #title>
        {{ route.name }}
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

let router = useRouter();

interface route {
  path: string;
  name: string;
  children?: route[];
}

let props = defineProps({
  route: {
    type: Object,
    required: true,
  },
});

const menuClick = (path: string) => {
  router.push(path);
};
</script>
<style lang="scss" scoped></style>
