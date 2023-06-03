<template>
  <div class="test">
    <div ref="echartRef" class="echart"></div>
  </div>
</template>
<script setup>
import { ref, onMounted, defineProps, watch } from 'vue';
import * as echarts from 'echarts';
const echartRef = ref();
const info = ref('')
const newVal = ref('')
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
  dataLine: {
    type: Array,
    required: false
  }
});
watch(props.dataY, (newValue, oldValue)=> {
  console.log(newValue, oldValue, 776)
  if(newVal.value !== newValue) {
    newVal.value = newValue
    info.value.clear()
    let option = myChart.setOption(dataY)
    info.value(option)
  }
})
onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(echartRef.value);
  info.value = myChart
  // 绘制图表
  myChart.setOption({
    title: {
      text: props.name,
    },
    tooltip: {},
    // x轴数据滚动
    dataZoom: [
      {
        type: 'slider',
        show: false,
        start: 54,
        end: 100,
        handleSize: 1
      },
      {
        type: 'inside',
        start: 94,
        end: 100,
      },
      // y轴滚动
      // {
      //   type: 'slider',
      //   show: true,
      //   yAxisIndex: 0,
      //   filterMode: 'empty',
      //   width: 0,
      //   height: '70%',
      //   handleSize: 8,
      //   // showDataShadow: false,
      //   left: '93%',
      // },
    ],
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
        type: 'bar',
        data: props.dataY,
        itemStyle: {
          normal: {
            barBorderRadius: [30, 30, 0, 0],
            },
          },
      },
      // 柱状图上的线
      {
        // name: 'Temperature',
        type: 'line',
        // yAxisIndex: 10,
        smooth: true,
        tooltip: {
          valueFormatter: function (value) {
            return value + ' %';
          }
        },
        data: props.dataLine
      }
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
