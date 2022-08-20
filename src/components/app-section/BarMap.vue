<template>
  <!-- container -->
  <div class="container">
    <div id="barMap"></div>
  </div>
</template>

<script setup>
import { onBeforeUpdate, defineProps } from 'vue'
import * as echarts from 'echarts/core'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from 'echarts/components'
import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  CanvasRenderer,
])

const props = defineProps({
  barMapData: Array,
})

onBeforeUpdate(() => {
  let myChart = echarts.init(document.querySelector('#barMap'), null, {
    //  function test
  })

  myChart.setOption({
    title: {
      text: '境外输入省份前十名',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: 'category',
      data: [
        props.barMapData[9].name,
        props.barMapData[8].name,
        props.barMapData[7].name,
        props.barMapData[6].name,
        props.barMapData[5].name,
        props.barMapData[4].name,
        props.barMapData[3].name,
        props.barMapData[2].name,
        props.barMapData[1].name,
        props.barMapData[0].name,
      ],
    },
    series: [
      {
        name: '境外输入病例数',
        type: 'bar',
        data: [
          props.barMapData[9].jwsrNum,
          props.barMapData[8].jwsrNum,
          props.barMapData[7].jwsrNum,
          props.barMapData[6].jwsrNum,
          props.barMapData[5].jwsrNum,
          props.barMapData[4].jwsrNum,
          props.barMapData[3].jwsrNum,
          props.barMapData[2].jwsrNum,
          props.barMapData[1].jwsrNum,
          props.barMapData[0].jwsrNum,
        ],
      },
    ],
  })
})
</script>

<style lang="less" scoped>
.container {
  display: block;
  width: 48.88vw;
  height: 22.22vw;

  margin: 0.99vw 0;
  padding: 0.66vw;
  border-radius: 0.88vw;
  transition: all 0.22s ease;
  box-shadow: 2.2px 2.2px 6.6px rgba(172, 180, 201, 0.5);

  &:hover {
    // 包括对Safari Opera FireFox的适配
    -webkit-transition: all 0.22s ease 0s;
    -moz-transition: all 0.22s ease 0s;
    -o-transition: all 0.22s ease 0s;
    transition: all 0.22s ease 0s;
    -webkit-box-shadow: 3px 3px 11px rgba(129, 140, 160, 0.5);
    -moz-box-shadow: 3px 3px 11px rgba(129, 140, 160, 0.5);
    -o-box-shadow: 3px 3px 11px rgba(129, 140, 160, 0.5);
    box-shadow: 3px 3px 11px rgba(129, 140, 160, 0.5);
  }

  #barMap {
    display: block;
    width: 102%;
    height: 100%;
  }
}
</style>
