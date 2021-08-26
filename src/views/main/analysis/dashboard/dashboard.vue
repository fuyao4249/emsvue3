<template>
  <div class="dashboard">
    <div class="main" ref="main"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
import { option } from './config/chartsOption'
export default {
  name: 'dashboard',
  setup() {
    const main = ref()
    onMounted(() => {
      const myChart = echarts.init(main.value)
      myChart.setOption(option)
    })

    return {
      main
    }
  }
}
</script>

<style lang="less" scoped>
.dashboard {
  width: 800px;
  height: 600px;
  .main {
    width: 800px;
    height: 600px;
  }
}
</style>
