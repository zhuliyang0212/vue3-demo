<template>
  <div class=""></div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  chartData: {
    type: Array,
    required: true,
  },
  chartOptions: {
    type: Object,
    required: true,
  },
});

let init = () => {
  let deepData = JSON.parse(JSON.stringify(props.chartData));

  let series = [
    {
      barWidth: 30,
      type: "bar",
      itemStyle: {
        normal: {
          color: "#526ade",
        },
      },
      data: deepData.map((el: any) => {
        return el.value;
      }),
    },
  ];
  let chartOption = {
    series: series,
  };

  console.log(chartOption, "chartOption");
  format(chartOption);
};

let format = (chartOption: any) => {
  let options: any = {};
  for (let k in chartOption) {
    if (k == "series") {
      let temp: any = [];
      chartOption[k].forEach((v: any, i: number) => {
        temp.push(Object.assign(v, props.chartOptions[k][i]));
      });
      options[k] = temp;
    } else {
      options[k] = props.chartOptions[k]
        ? Object.assign(chartOption[k], props.chartOptions[k])
        : chartOption[k];
    }
  }
  console.log(options, "options");
};

init();
</script>
<style lang="less" scoped></style>
