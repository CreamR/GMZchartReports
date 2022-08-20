<template>
  <div class="notification">
    <ul>
      <li v-for="(item, index) in nofify" :key="index">
        <h3>Version: {{ item.version }}</h3>
        <h5>Date: {{ item.date }}</h5>
        <p>{{ item.data }}</p>
        <el-divider content-position="right">小小分割线</el-divider>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const nofify = reactive([
  {
    version: '1.0.0',
    date: '2022-08-18 13:24',
    data: '中国疫情统计图表',
  },
  {
    version: '1.1.0',
    date: '2022-08-20 13:18',
    data: '增加了识别本机ip地址并定位所在城市的功能, ip定位相比GPS精准度更低, 偶尔可能出错',
  },
  {
    version: '1.2.0',
    date: '2022-08-20 13:53',
    data: '增加根据确诊人数/治愈人数/死亡人数的排序功能, 增加了表格部分的宽度',
  },
  {
    version: '1.2.1',
    date: '2022-08-20 14:31',
    data: '包管理器升级为pnpm, 框架升级为3.2.27 | 部分相同逻辑与用途的功能/变量改为类调用, 清除了一些语法书写上的warning',
  },
  {
    version: '1.3.0',
    date: '2022-08-20 14:53',
    data: 'app部分增加了loading效果, 在数据请求过程中显示, DOM加载完成后则关闭',
  },
])
</script>

<style lang="less" scoped>
.notification {
  margin: 0 auto;
  ul {
    li {
      display: block;
      margin: 2.22vw;
      h3 {
        font-weight: bolder;
      }
      h5 {
        font-weight: normal;
        color: #6e7379;
      }
      p {
        font-size: normal;
      }
    }
  }
}
</style>
