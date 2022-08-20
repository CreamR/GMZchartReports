<template>
  <!-- container -->
  <div class="container">
    <div id="map"></div>
  </div>
</template>

<script setup>
import {
  ref,
  reactive,
  onMounted,
  defineProps,
  onUpdated,
  onBeforeUpdate,
} from 'vue'
import * as echarts from 'echarts/core'
import {
  DatasetComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  TransformComponent,
  LegendComponent,
  ToolboxComponent,
} from 'echarts/components'
import { LineChart } from 'echarts/charts'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  DatasetComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  TransformComponent,
  LineChart,
  CanvasRenderer,
  LabelLayout,
  UniversalTransition,
  LegendComponent,
  ToolboxComponent,
])

const props = defineProps({
  lineChartData: Array,
})

onBeforeUpdate(() => {
  let myChart = echarts.init(document.querySelector('#map'), null, {
    // function test
  })

  myChart.setOption({
    title: {
      text: '近一周疫情状况',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        },
      },
    },
    legend: {
      data: ['累计确诊', '累计治愈', '累计死亡'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },

    xAxis: {
      type: 'category',
      data: [
        props.lineChartData[6].date,
        props.lineChartData[5].date,
        props.lineChartData[4].date,
        props.lineChartData[3].date,
        props.lineChartData[2].date,
        props.lineChartData[1].date,
        props.lineChartData[0].date,
      ],
      boundaryGap: false,
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '累计确诊',
        data: [
          props.lineChartData[6].cn_conNum,
          props.lineChartData[5].cn_conNum,
          props.lineChartData[4].cn_conNum,
          props.lineChartData[3].cn_conNum,
          props.lineChartData[2].cn_conNum,
          props.lineChartData[1].cn_conNum,
          props.lineChartData[0].cn_conNum,
        ],
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
      },

      {
        name: '累计治愈',
        data: [
          props.lineChartData[6].cn_cureNum,
          props.lineChartData[5].cn_cureNum,
          props.lineChartData[4].cn_cureNum,
          props.lineChartData[3].cn_cureNum,
          props.lineChartData[2].cn_cureNum,
          props.lineChartData[1].cn_cureNum,
          props.lineChartData[0].cn_cureNum,
        ],
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
      },
      {
        name: '累计死亡',
        data: [
          props.lineChartData[6].cn_deathNum,
          props.lineChartData[5].cn_deathNum,
          props.lineChartData[4].cn_deathNum,
          props.lineChartData[3].cn_deathNum,
          props.lineChartData[2].cn_deathNum,
          props.lineChartData[1].cn_deathNum,
          props.lineChartData[0].cn_deathNum,
        ],
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
      },
    ],
  })
})
</script>

<style lang="less" scoped>
.container {
  display: block;
  width: 68.88vw;
  height: 22.22vw;

  margin: 0.88vw auto;
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
    -moz-transform: translate(-2px, -2px);
    -webkit-transform: translate(-2px, -2px);
    -o-transform: translate(-2px, -2px);
    -ms-transform: translate(-2px, -2px);
    transform: translate(-2px, -2px);
    -webkit-box-shadow: 3px 3px 11px rgba(129, 140, 160, 0.5);
    -moz-box-shadow: 3px 3px 11px rgba(129, 140, 160, 0.5);
    -o-box-shadow: 3px 3px 11px rgba(129, 140, 160, 0.5);
    box-shadow: 3px 3px 11px rgba(129, 140, 160, 0.5);
  }
  text-align: center;

  #map {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
