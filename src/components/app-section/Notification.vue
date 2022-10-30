<template>
  <div class="notification">
    <el-radio-group v-model="radio">
      <el-radio :label="1">正序</el-radio>
      <el-radio :label="2">倒序</el-radio>
    </el-radio-group>
    <ul>
      <li v-for="(item, index) in notify" :key="index">
        <h3>Version: {{ item.version }}</h3>
        <h5>Date: {{ item.date }}</h5>
        <p>{{ item.data }}</p>
        <el-divider content-position="right">小小分割线</el-divider>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from "vue";

let radio = ref(1)

let notify = reactive([
  {
    version: "1.0.0",
    date: "2022-08-18 13:24",
    data: "中国疫情统计图表",
  },
  {
    version: "1.1.0",
    date: "2022-08-20 13:18",
    data: "增加了识别本机ip地址并定位所在城市的功能, ip定位相比GPS精准度更低, 偶尔可能出错",
  },
  {
    version: "1.2.0",
    date: "2022-08-20 13:53",
    data: "增加根据确诊人数/治愈人数/死亡人数的排序功能, 增加了表格部分的宽度",
  },
  {
    version: "1.2.1",
    date: "2022-08-20 14:31",
    data: "框架例行更新",
  },
  {
    version: "1.3.0",
    date: "2022-08-20 14:53",
    data: "app部分增加了loading效果, 在数据请求过程中显示, DOM加载完成后则关闭",
  },
  {
    version: "1.3.1",
    date: "2022-08-22 14:03",
    data: "完成设置组件, 下个版本用户将可以设置暗黑模式起始与结束时间",
  },
  {
    version: "1.4.0",
    date: "2022-08-24 19:09",
    data: "新增定时暗黑模式功能, 可动态重置暗黑模式",
  },
  {
    version: "1.4.2",
    date: "2022-08-25 14:38",
    data: "完善了一些小细节",
  },
  {
    version: "1.4.3",
    date: "2022-08-26 16:37",
    data: "若数据请求失败或用户网络问题导致空数据则显示错误页面",
  },
  {
    version: "1.4.4",
    date: "2022-10-5 16:18",
    data: "一些无关代码的删减, ⚠⚠注意: 此应用仅适配于电脑屏幕且尺寸中等或以上, 笔记本电脑可能会样式错乱",
  },

  {
    version: "1.4.6",
    date: "2022-10-19 18:33",
    data: "一些不必要的代码删减，并减少数据耦合",
  },
  {
    version: "1.4.7",
    date: "2022-10-19 18:42",
    data: "对更新日志添加了排序选项",
  },
  {
    version: "1.4.8",
    date: "2022-10-19 18:55",
    data: "对isBetween方法添加了TS类型限制",
  },
  {
    version: "1.4.9",
    date: "2022-10-30 14:17",
    data: "开发结束, 后续不再维护",
  },
]);

// notify.reverse();
watch(radio, newVal => {
  if (newVal._value == 2) {
    notify = notify
  } else {
    notify = notify.reverse()
  }
})
</script>

<style lang="less" scoped>
.notification {
  margin: 0 auto;

  .el-radio-group {
    margin-left: 2.22vw;
  }

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
