<template>
  <div class="dashborad">
    dashborad
    <chart :chartData="chartData" :chartOptions="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import chart from "@/components/chart.vue";

let chartData = ref([
  { value: 99.15, name: "开发区东部" },
  { value: 98.84, name: "开发区" },
  { value: 96.45, name: "普兰店市" },
  { value: 95.67, name: "高新园区" },
  { value: 95.53, name: "瓦房店市" },
]);
let chartOptions = ref({
  series: [
    {
      barWidth: 40,
      type: "bar",
      label: {
        show: false, // 显示数值
        position: "right", // 数值显示的位置
        color: "#FFF",
        fontSize: "30",
      },
      // data: [99.15, 98.84, 96.45, 95.67, 95.53],
    },
  ],
});
</script>
<style lang="less" scoped></style>
