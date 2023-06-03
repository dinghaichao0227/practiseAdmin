<template>
  <div>
    <echart-bar :dataX="dataX" :dataY="dataY" :name="title"></echart-bar>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const title = ref('个人数据')
import EchartBar from "../../../components/echarts/EchartBar.vue";
const dataX = ref(['老大','老二','老三','老四','老五','老六'])
const dataY = ref([10,20,60,70,50,60])
</script>

<style>

</style>