<template>
  <div class="test">
    <div ref="echartRef" class="echart"></div>
  </div>
</template>
<script setup>
import { ref, onMounted, defineProps } from 'vue';
import * as echarts from 'echarts';
const echartRef = ref();
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  dataX: {
    type: Array,
    required: false,
  },
  dataY: {
    type: Array,
    required: false,
  },
});
onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(echartRef.value);
  // 绘制图表
  myChart.setOption({
    title: {
      text: props.name,
    },
    tooltip: {},
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      data: props.dataX,
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'line',
        data: props.dataY,
      },
    ],
  });
});
</script>
<style lang="scss" scoped>
.test {
  margin: auto;
  max-width: 40vw;
  display: block;

  .echart {
    width: 100%;
    height: 400px;
    display: block;
  }
}
</style>
