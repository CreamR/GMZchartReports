<template>
  <!-- container -->
  <div class="container">
    <div id="singleMap"></div>
  </div>
</template>

<script setup>
import { onBeforeUpdate, defineProps } from 'vue'
import * as echarts from 'echarts/core'
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components'
import { PieChart } from 'echarts/charts'
import { LabelLayout } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { number } from 'echarts/core'

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout,
])

const props = defineProps({
  existNum: number,
  totalNum: number,
  cureNum: number,
  deathNum: number,
  expireDate: String,
})

onBeforeUpdate(() => {
  let myChart = echarts.init(document.querySelector('#singleMap'), null, {
    // function test
  })

  myChart.setOption({
    title: {
      text: '国内疫情数据统计',
      subtext: `截至${props.expireDate}`,
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: props.existNum, name: '现存病例' },
          { value: props.totalNum, name: '累计病例' },
          { value: props.cureNum, name: '累计治愈' },
          { value: props.deathNum, name: '累计死亡' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  })
})
</script>

<style lang="less" scoped>
.container {
  display: block;
  width: 22.22vw;
  height: 22.22vw;

  margin: 0.99vw 0;
  padding: 0.38vw;
  padding-top: 2.38vw;
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

  #singleMap {
    display: block;
    width: 111%;
    height: 111%;

    text-align: center;
  }
}
</style>
