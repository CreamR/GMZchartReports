<template>
  <div class="app">
    <el-container>
      <el-header>
        <div class="left">
          <h3 @click="$router.push('/home')">疫情大数据分布统计系统</h3>
          <span
            >{{ time.year }} · {{ time.month }} · {{ time.day }} -
            {{ time.judgment() }}</span
          >
        </div>
        <img src="../assets/tubiao.svg" alt="logo" title="logo桑" />
        <p>数据源自国家卫健委 - {{ dataList.data.times }}</p>
      </el-header>
      <el-container class="container">
        <el-aside width="348px">
          <el-table
            :data="dataList.data.list"
            lazy="true"
            table-layout="auto"
            stripe="true"
            max-height="999"
            :default-sort="{ prop: 'index', order: 'descending' }"
          >
            <el-table-column type="index" label="序" />
            <el-table-column prop="name" label="省份" />
            <el-table-column
              prop="value"
              label="确诊"
              sortable
              :sort-method="
                (a, b) => {
                  return a.deathNum - b.deathNum
                }
              "
            />
            <el-table-column
              prop="cureNum"
              label="治愈"
              sortable
              :sort-method="
                (a, b) => {
                  return a.deathNum - b.deathNum
                }
              "
            />
            <el-table-column
              prop="deathNum"
              label="死亡"
              sortable
              :sort-method="
                (a, b) => {
                  return a.deathNum - b.deathNum
                }
              "
            />
          </el-table>
        </el-aside>
        <el-main>
          <ul>
            <li>
              <p style="color: #b1b3b8; font-weight: normal">现存确诊</p>
              <p>{{ dataList.data.econNum }}</p>
            </li>
            <li>
              <p style="color: #b1b3b8; font-weight: normal">累计确诊</p>
              <p>{{ dataList.data.gntotal }}</p>
            </li>
            <li>
              <p style="color: #b1b3b8; font-weight: normal">累计治愈</p>
              <p>{{ dataList.data.curetotal }}</p>
            </li>
            <li>
              <p style="color: #b1b3b8; font-weight: normal">累计死亡</p>
              <p>{{ dataList.data.deathtotal }}</p>
            </li>
          </ul>

          <theMap :lineChartData="dataList.data.historylist"></theMap>
          <div class="wrap">
            <theBarMap :barMapData="dataList.data.jwsrTop"></theBarMap>
            <theSingleMap
              :existNum="dataList.data.econNum"
              :totalNum="dataList.data.gntotal"
              :cureNum="dataList.data.curetotal"
              :deathNum="dataList.data.deathtotal"
              :expireDate="dataList.data.mtime"
              class="s"
            ></theSingleMap>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>

  <el-divider>
    <el-icon><star-filled /></el-icon>
  </el-divider>
  <footer style="margin-bottom: 1.11vh; text-align: center">
    <h3>
      made with
      <img
        src="../assets/heart.svg"
        alt="heart"
        title="heart"
        style="width: 1.38vw; vertical-align: middle"
      />
      by Gmz
    </h3>
  </footer>
</template>

<script setup>
import theMap from './app-section/Map.vue'
import theBarMap from './app-section/BarMap.vue'
import theSingleMap from './app-section/SingleMap.vue'
import { StarFilled } from '@element-plus/icons-vue'
import { ref, reactive, onMounted, nextTick } from 'vue'

import { ElLoading } from 'element-plus'

let dataList = reactive({
  data: [],
})

const url = 'https://interface.sina.cn/news/wap/fymap2020_data.d.json'
onMounted(async () => {
  try {
    const data = await fetch(url).then((data) => data.json())
    console.log(data.data)

    dataList.data = data.data
  } catch (error) {
    console.log(error)
  }
  loadingInstance.close()
})

class timer {
  year = new Date().getFullYear()
  month = new Date().getMonth() + 1
  day = new Date().getDate()
  now = new Date().getHours()

  // 面试：为什么在类中不适用箭头函数而是普通函数？
  // 因为箭头函数的this指针指向父类使用this会导致指向错误 故类中一定采用普通函数
  judgment() {
    if (this.now > 0 && this.now < 8) {
      return '早上好'
    } else if (this.now >= 8 && this.now < 12) {
      return '上午好'
    } else if (this.now >= 12 && this.now < 13) {
      return '中午好'
    } else if (this.now >= 13 && this.now < 18) {
      return '下午好'
    } else if (this.now >= 18 && this.now <= 24) {
      return '晚上好'
    } else {
      return 'error!'
    }
  }
}
let time = ref(new timer())

// DOM元素未加载完成前显示loading效果, 完成后关闭
const loadingInstance = ElLoading.service({
  lock: true,
  text: 'Loading',
  background: 'rgba(0, 0, 0, 0.7)',
})
</script>

<style lang="less" scoped>
.app {
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #c6e2ff;
    .left {
      display: flex;
      h3 {
        color: #337ecc;

        padding-right: 0.55vw;
        border-right: 1px solid darkgrey;

        cursor: pointer;
      }
      span {
        font-weight: bold;
        padding-left: 0.55vw;
      }
    }
    img {
      width: 2.58vw;
      transition: all 0.18s ease;

      &:hover {
        transform: scale(1.18);
      }
    }
  }

  .el-main {
    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;

      margin-left: 1.11vw;
      li {
        padding: 0.68vw 0.88vw;
        border-radius: 0.88vw;
        transition: all 0.18s ease;
        box-shadow: 1px 1px 3px rgba(169, 178, 202, 0.5);
        cursor: grab;

        &:hover {
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

        p {
          color: black;
          font-weight: bold;
          margin-top: 0.18vw;
          text-align: center;
        }
      }
    }

    .theMap {
      display: block;
    }
    .wrap {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1100px) {
  .wrap {
    display: flex;
    flex-wrap: wrap;
  }
  .s {
    transform: scale(1.11);
    margin-top: 6.66vw;
  }
}
</style>
