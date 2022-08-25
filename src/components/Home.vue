<template>
  <div class="temp">
    <div class="showHelp">
      <span @click="$router.push('/home/application')"
        >长风破浪会有时 - 直挂云帆济沧海</span
      >
    </div>

    <img src="../../public/logo.svg" alt="chartsReport" class="logo" />

    <h1>新型冠状病毒</h1>
    <h2>大数据动态图表统计系统</h2>

    <input
      type="text"
      placeholder="try to search something"
      ref="search"
      @click="changeColor"
      @blur="backColor"
    />

    <!-- dark mode -->
    <el-tooltip content="点击切换显示模式" effect="light">
      <el-button
        @click="toggleDark()"
        type="primary"
        text="primary"
        class="changeMode"
        style="font-weight: bold"
        >暗黑模式</el-button
      >
    </el-tooltip>
    <el-icon class="modeSetting" @click="drawer = true"><Setting /></el-icon>
    <el-drawer v-model="drawer" :title="turn" size="22%" direction="ltr">
      <div class="demo-time-range">
        <h5>起始时间</h5>
        <el-time-select
          v-model="starTime"
          :max-time="endTime"
          placeholder="开始"
          start="00:00"
          step="00:15"
          size="large"
          end="23:45"
        />
        <h5>结束时间</h5>
        <el-time-select
          v-model="endTime"
          :min-time="starTime"
          placeholder="结束"
          start="00:00"
          step="00:15"
          size="large"
          end="23:45"
        />
        <el-switch
          v-model="ON"
          inline-prompt
          :active-icon="Check"
          :inactive-icon="Close"
          @click="confirm"
        />
      </div>
      <div class="contentWrap">
        <h3>made by Gmz✨✨✨</h3>
        <h4>Computer Science, Front end orientation</h4>
        <h5>GMZchartReport已经逐渐开发完毕, 目前已传至GitHub仓库</h5>
      </div>
    </el-drawer>

    <!-- user display control section -->
    <div class="isComponent" v-if="exist">
      <el-avatar
        style="vertical-align: middle"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <span>{{ username }}</span>
      <p>IP地址: {{ useStoreIP.ipAnalyes }}</p>
    </div>
    <ul v-else>
      <li>
        <el-button type="primary" text="primary" @click="goLogin"
          >登录</el-button
        >
      </li>
      <li>
        <el-button type="primary" @click="goRegister">注册</el-button>
      </li>
    </ul>

    <svg
      width="100%"
      height="100%"
      id="svg"
      viewBox="0 0 1440 444"
      xmlns="http://www.w3.org/2000/svg"
      class="transition duration-300 ease-in-out delay-150"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stop-color="#002bdc66"></stop>
          <stop offset="95%" stop-color="#32ded466"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,600 C 0,600 0,150 0,150 C 96.3179487179487,164.46153846153845 192.6358974358974,178.92307692307693 280,172 C 367.3641025641026,165.07692307692307 445.77435897435896,136.76923076923077 513,138 C 580.225641025641,139.23076923076923 636.2666666666667,169.99999999999997 700,160 C 763.7333333333333,150.00000000000003 835.1589743589743,99.23076923076923 923,105 C 1010.8410256410257,110.76923076923077 1115.0974358974358,173.07692307692307 1204,190 C 1292.9025641025642,206.92307692307693 1366.451282051282,178.46153846153845 1440,150 C 1440,150 1440,600 1440,600 Z"
        stroke="none"
        stroke-width="0"
        fill="url(#gradient)"
        class="transition-all duration-300 ease-in-out delay-150 path-0"
      ></path>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stop-color="#002bdc88"></stop>
          <stop offset="95%" stop-color="#32ded488"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,600 C 0,600 0,300 0,300 C 71.55384615384614,280.5615384615385 143.10769230769228,261.12307692307695 219,259 C 294.8923076923077,256.87692307692305 375.12307692307684,272.0692307692307 474,270 C 572.8769230769232,267.9307692307693 690.4000000000001,248.6 763,252 C 835.5999999999999,255.4 863.276923076923,281.53076923076924 936,279 C 1008.723076923077,276.46923076923076 1126.4923076923078,245.27692307692305 1218,244 C 1309.5076923076922,242.72307692307695 1374.753846153846,271.3615384615385 1440,300 C 1440,300 1440,600 1440,600 Z"
        stroke="none"
        stroke-width="0"
        fill="url(#gradient)"
        class="transition-all duration-300 ease-in-out delay-150 path-1"
      ></path>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stop-color="#002bdcff"></stop>
          <stop offset="95%" stop-color="#32ded4ff"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,600 C 0,600 0,450 0,450 C 75.91025641025641,452.9307692307692 151.82051282051282,455.8615384615384 224,453 C 296.1794871794872,450.1384615384616 364.6282051282052,441.4846153846155 449,433 C 533.3717948717948,424.5153846153845 633.6666666666665,416.19999999999993 725,423 C 816.3333333333335,429.80000000000007 898.7051282051284,451.71538461538466 982,458 C 1065.2948717948716,464.28461538461534 1149.5128205128203,454.9384615384615 1226,451 C 1302.4871794871797,447.0615384615385 1371.2435897435898,448.53076923076924 1440,450 C 1440,450 1440,600 1440,600 Z"
        stroke="none"
        stroke-width="0"
        fill="url(#gradient)"
        class="transition-all duration-300 ease-in-out delay-150 path-2"
      ></path>
    </svg>

    <el-divider>
      <el-icon><star-filled /></el-icon>
    </el-divider>

    <footer style="margin-bottom: 1.11vh">
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
  </div>

  <notification class="notify"></notification>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import router from '../router'
import { StarFilled, Setting, Check, Close } from '@element-plus/icons-vue'
import ScrollReveal from 'scrollreveal'
import { storeIP } from '../store/pinia'
// component
import notification from './app-section/Notification.vue'

// animate section
class Animate {
  logoAnimate = {
    delay: 1888,
    duration: 999,
    origin: 'bottom',
    distance: '22.22px',
  }
  inputAnimate = {
    delay: 1111,
    duration: 888,
    origin: 'bottom',
    distance: '22.22px',
  }
  tempAnimate = {
    delay: 555,
    duration: 666,
    origin: 'bottom',
    distance: '22.22px',
  }
}
const myAnimate = new Animate()
onMounted(() => {
  ScrollReveal({ reset: true })
  ScrollReveal().reveal('.logo', myAnimate.logoAnimate)
  ScrollReveal().reveal('input', myAnimate.inputAnimate)
  ScrollReveal().reveal('.temp', myAnimate.tempAnimate)

  getIP()
})

let exist = ref()
exist = sessionStorage.getItem('token') == 1 ? true : false

const username = ref(localStorage.getItem('nickname'))
const isDark = useDark()
const toggleDark = useToggle(isDark)
const search = ref(null)

const changeColor = () => {
  search.value.style.border = '2.22px solid skyblue'
}
const backColor = () => {
  search.value.style.border = '1px solid darkgrey'
}
const goLogin = () => {
  router.push('/home/login')
}
const goRegister = () => {
  router.push('/home/register')
}

// 默认定位
const useStoreIP = storeIP()
const getIP = async () => {
  try {
    await fetch('https://ip.nf/me.json')
      .then((data) => data.json())
      .then((data) => (useStoreIP.ipAnalyes = data.ip.city))
  } catch (error) {
    console.log(error)
  }
}

//control the setting of dark mode
let drawer = ref(false)
let starTime = ref('')
let endTime = ref('')
let ON = ref(false)
let turn = ref('')

if (
  (localStorage.getItem('darkModeStarTime') != '' &&
    localStorage.getItem('darkModeEndTime')) != ''
) {
  turn = '暗黑模式-已定时'
} else {
  turn = '暗黑模式-未定时'
}

const runCheck = () => {
  const nowHour = new Date().getHours()
  const nowMin = new Date().getMinutes()
  const setedStarTime = localStorage.getItem('darkModeStarTime')
  const setedEndTime = localStorage.getItem('darkModeEndTime')
  if (parseInt(setedStarTime.slice(0, 2)) <= nowHour) {
    if (
      parseInt(setedStarTime.slice(0, 2)) == nowHour &&
      parseInt(setedStarTime.slice(3, 5)) > nowMin
    ) {
      console.log('invalid time')
      // set common mode
      localStorage.setItem('vueuse-color-scheme', 'auto')
    } else {
      if (parseInt(setedEndTime.slice(0, 2)) >= nowHour) {
        if (
          parseInt(setedEndTime.slice(0, 2)) == nowHour &&
          parseInt(setedEndTime.slice(3, 5)) < nowMin
        ) {
          console.log('invalid time')
          // set common mode
          localStorage.setItem('vueuse-color-scheme', 'auto')
        } else {
          // set dark mode
          localStorage.setItem('vueuse-color-scheme', 'dark')
        }
      }
    }
  } else {
    console.log('invalid time')
    // set common mode
    localStorage.setItem('vueuse-color-scheme', 'auto')
  }
}

runCheck()

watch(ON, (newVal) => {
  if (newVal) {
    localStorage.setItem('darkModeStarTime', starTime._value)
    localStorage.setItem('darkModeEndTime', endTime._value)

    runCheck()
    turn = '暗黑模式-已定时'
  } else {
    localStorage.setItem('vueuse-color-scheme', 'auto')
  }
})

setInterval(() => {
  runCheck()
}, 11111)
</script>

<style lang="less" scoped>
.isComponent {
  position: absolute;
  top: 8.88vw;
  right: 9.99vw;

  span {
    color: cadetblue;
    font-weight: bold;
    margin-left: 0.38vw;
  }
  p {
    padding-left: 0.18vw;
    padding-top: 0.18vw;
    color: darkgrey;
    font-size: small;
    text-align: center;
  }
}

footer {
  text-align: center;
}
.logo {
  display: block;
  position: relative;
  width: 5.55vw;

  background-color: whitesmoke;
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 2.22vw;
  box-shadow: 0 1vh 1.88vh 0 rgb(39 48 54 / 20%);
}
input {
  display: block;
  width: 55.55vw;
  height: 5.55vh;

  font-size: large;
  margin: 0 auto;
  margin-top: 2.22vw;
  padding: 1.11vw;

  border: 1.11px solid darkgrey;
  border-radius: 1.11vw;

  box-shadow: 0 1.88px 1.88px 0 rgb(39 48 54 / 20%);
  background-image: url(../assets/sousuo.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: 52.22vw;
}
h1,
h2 {
  text-align: center;
}
h1 {
  padding-top: 3.88vh;
}
h2 {
  padding-top: 1.11vh;
}
.changeMode {
  position: absolute;
  top: 8.88vw;
  left: 9.99vw;
}
.modeSetting {
  position: absolute;
  top: 9.29vw;
  left: 14.58vw;

  cursor: pointer;
}
.el-drawer {
  position: relative;
  .demo-time-range {
    // margin-left: 0.11vw;
    border-radius: 1.11vw;
    padding: 1.88vw;
    padding-bottom: 2.22vw;
    box-shadow: 2.2px 2.2px 6.6px rgba(172, 180, 201, 0.5);
    h5 {
      margin: 0.48vw 0.18vw;
    }
    .el-switch {
      position: absolute;
      top: 1.11vw;
      left: 7.88vw;

      text-align: center;
    }
  }
  .contentWrap {
    border-radius: 1.11vw;
    padding: 1.88vw;
    padding-bottom: 2.22vw;
    box-shadow: 2.2px 2.2px 6.6px rgba(172, 180, 201, 0.5);

    text-align: center;
    margin-top: 3.88vw;
  }
}

ul {
  position: absolute;
  top: 8.88vw;
  right: 9.99vw;
  li {
    display: inline-block;
    margin-left: 1.11vh;
    .el-button {
      font-weight: bold;
    }
  }
}
.showHelp {
  color: whitesmoke;
  font-weight: bold;
  font-size: normal;
  text-align: center;

  padding: 1.88vh;
  background-image: url(../assets/bgc-help.svg);
  span:hover {
    cursor: pointer;
    color: skyblue;
    text-decoration: underline;
  }
}

//SVG样式
.path-0 {
  animation: pathAnim-0 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes pathAnim-0 {
  0% {
    d: path(
      'M 0,600 C 0,600 0,150 0,150 C 96.3179487179487,164.46153846153845 192.6358974358974,178.92307692307693 280,172 C 367.3641025641026,165.07692307692307 445.77435897435896,136.76923076923077 513,138 C 580.225641025641,139.23076923076923 636.2666666666667,169.99999999999997 700,160 C 763.7333333333333,150.00000000000003 835.1589743589743,99.23076923076923 923,105 C 1010.8410256410257,110.76923076923077 1115.0974358974358,173.07692307692307 1204,190 C 1292.9025641025642,206.92307692307693 1366.451282051282,178.46153846153845 1440,150 C 1440,150 1440,600 1440,600 Z'
    );
  }
  25% {
    d: path(
      'M 0,600 C 0,600 0,150 0,150 C 86.4051282051282,150.62564102564102 172.8102564102564,151.25128205128206 249,155 C 325.1897435897436,158.74871794871794 391.1641025641027,165.6205128205128 476,180 C 560.8358974358973,194.3794871794872 664.5333333333334,216.26666666666668 735,204 C 805.4666666666666,191.73333333333332 842.7025641025641,145.3128205128205 919,128 C 995.2974358974359,110.68717948717948 1110.6564102564103,122.48205128205126 1204,131 C 1297.3435897435897,139.51794871794874 1368.6717948717949,144.75897435897437 1440,150 C 1440,150 1440,600 1440,600 Z'
    );
  }
  50% {
    d: path(
      'M 0,600 C 0,600 0,150 0,150 C 68.59230769230771,127.72051282051282 137.18461538461543,105.44102564102565 229,118 C 320.8153846153846,130.55897435897435 435.8538461538461,177.95641025641024 522,195 C 608.1461538461539,212.04358974358976 665.4000000000001,198.73333333333335 726,181 C 786.5999999999999,163.26666666666665 850.5461538461536,141.1102564102564 938,131 C 1025.4538461538464,120.88974358974359 1136.4153846153847,122.825641025641 1224,128 C 1311.5846153846153,133.174358974359 1375.7923076923075,141.5871794871795 1440,150 C 1440,150 1440,600 1440,600 Z'
    );
  }
  75% {
    d: path(
      'M 0,600 C 0,600 0,150 0,150 C 62.82820512820513,120.2025641025641 125.65641025641025,90.4051282051282 218,110 C 310.34358974358975,129.5948717948718 432.2025641025641,198.5820512820513 521,196 C 609.7974358974359,193.4179487179487 665.5333333333333,119.26666666666668 725,113 C 784.4666666666667,106.73333333333332 847.6641025641027,168.35128205128206 928,190 C 1008.3358974358973,211.64871794871794 1105.8102564102564,193.32820512820513 1194,180 C 1282.1897435897436,166.67179487179487 1361.0948717948718,158.33589743589744 1440,150 C 1440,150 1440,600 1440,600 Z'
    );
  }
  100% {
    d: path(
      'M 0,600 C 0,600 0,150 0,150 C 96.3179487179487,164.46153846153845 192.6358974358974,178.92307692307693 280,172 C 367.3641025641026,165.07692307692307 445.77435897435896,136.76923076923077 513,138 C 580.225641025641,139.23076923076923 636.2666666666667,169.99999999999997 700,160 C 763.7333333333333,150.00000000000003 835.1589743589743,99.23076923076923 923,105 C 1010.8410256410257,110.76923076923077 1115.0974358974358,173.07692307692307 1204,190 C 1292.9025641025642,206.92307692307693 1366.451282051282,178.46153846153845 1440,150 C 1440,150 1440,600 1440,600 Z'
    );
  }
}
.path-1 {
  animation: pathAnim-1 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes pathAnim-1 {
  0% {
    d: path(
      'M 0,600 C 0,600 0,300 0,300 C 71.55384615384614,280.5615384615385 143.10769230769228,261.12307692307695 219,259 C 294.8923076923077,256.87692307692305 375.12307692307684,272.0692307692307 474,270 C 572.8769230769232,267.9307692307693 690.4000000000001,248.6 763,252 C 835.5999999999999,255.4 863.276923076923,281.53076923076924 936,279 C 1008.723076923077,276.46923076923076 1126.4923076923078,245.27692307692305 1218,244 C 1309.5076923076922,242.72307692307695 1374.753846153846,271.3615384615385 1440,300 C 1440,300 1440,600 1440,600 Z'
    );
  }
  25% {
    d: path(
      'M 0,600 C 0,600 0,300 0,300 C 91.33846153846156,279.68461538461537 182.67692307692312,259.36923076923074 258,266 C 333.3230769230769,272.63076923076926 392.63076923076926,306.20769230769235 471,309 C 549.3692307692307,311.79230769230765 646.8,283.8 722,267 C 797.2,250.2 850.1692307692309,244.5923076923077 927,244 C 1003.8307692307691,243.4076923076923 1104.5230769230768,247.8307692307692 1194,258 C 1283.4769230769232,268.1692307692308 1361.7384615384617,284.0846153846154 1440,300 C 1440,300 1440,600 1440,600 Z'
    );
  }
  50% {
    d: path(
      'M 0,600 C 0,600 0,300 0,300 C 55.98205128205129,283.46153846153845 111.96410256410257,266.92307692307696 201,285 C 290.0358974358974,303.07692307692304 412.125641025641,355.7692307692308 504,353 C 595.874358974359,350.2307692307692 657.5333333333333,292 727,273 C 796.4666666666667,254.00000000000003 873.7410256410257,274.2307692307692 944,294 C 1014.2589743589743,313.7692307692308 1077.502564102564,333.0769230769231 1159,334 C 1240.497435897436,334.9230769230769 1340.248717948718,317.46153846153845 1440,300 C 1440,300 1440,600 1440,600 Z'
    );
  }
  75% {
    d: path(
      'M 0,600 C 0,600 0,300 0,300 C 78.44871794871796,276.57948717948716 156.8974358974359,253.15897435897438 249,261 C 341.1025641025641,268.8410256410256 446.85897435897436,307.94358974358965 516,304 C 585.1410256410256,300.05641025641035 617.6666666666667,253.06666666666675 692,252 C 766.3333333333333,250.93333333333325 882.4743589743591,295.7897435897435 977,302 C 1071.5256410256409,308.2102564102565 1144.4358974358975,275.77435897435896 1218,269 C 1291.5641025641025,262.22564102564104 1365.7820512820513,281.1128205128205 1440,300 C 1440,300 1440,600 1440,600 Z'
    );
  }
  100% {
    d: path(
      'M 0,600 C 0,600 0,300 0,300 C 71.55384615384614,280.5615384615385 143.10769230769228,261.12307692307695 219,259 C 294.8923076923077,256.87692307692305 375.12307692307684,272.0692307692307 474,270 C 572.8769230769232,267.9307692307693 690.4000000000001,248.6 763,252 C 835.5999999999999,255.4 863.276923076923,281.53076923076924 936,279 C 1008.723076923077,276.46923076923076 1126.4923076923078,245.27692307692305 1218,244 C 1309.5076923076922,242.72307692307695 1374.753846153846,271.3615384615385 1440,300 C 1440,300 1440,600 1440,600 Z'
    );
  }
}
.path-2 {
  animation: pathAnim-2 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes pathAnim-2 {
  0% {
    d: path(
      'M 0,600 C 0,600 0,450 0,450 C 75.91025641025641,452.9307692307692 151.82051282051282,455.8615384615384 224,453 C 296.1794871794872,450.1384615384616 364.6282051282052,441.4846153846155 449,433 C 533.3717948717948,424.5153846153845 633.6666666666665,416.19999999999993 725,423 C 816.3333333333335,429.80000000000007 898.7051282051284,451.71538461538466 982,458 C 1065.2948717948716,464.28461538461534 1149.5128205128203,454.9384615384615 1226,451 C 1302.4871794871797,447.0615384615385 1371.2435897435898,448.53076923076924 1440,450 C 1440,450 1440,600 1440,600 Z'
    );
  }
  25% {
    d: path(
      'M 0,600 C 0,600 0,450 0,450 C 58.035897435897425,474.74102564102566 116.07179487179485,499.48205128205126 202,504 C 287.92820512820515,508.51794871794874 401.74871794871797,492.81282051282045 481,475 C 560.251282051282,457.18717948717955 604.9333333333334,437.2666666666667 689,436 C 773.0666666666666,434.7333333333333 896.5179487179487,452.1205128205128 982,467 C 1067.4820512820513,481.8794871794872 1114.9948717948719,494.2512820512821 1185,491 C 1255.0051282051281,487.7487179487179 1347.502564102564,468.874358974359 1440,450 C 1440,450 1440,600 1440,600 Z'
    );
  }
  50% {
    d: path(
      'M 0,600 C 0,600 0,450 0,450 C 74.94871794871796,481.5051282051282 149.8974358974359,513.0102564102564 242,499 C 334.1025641025641,484.9897435897436 443.35897435897436,425.4641025641025 520,404 C 596.6410256410256,382.5358974358975 640.6666666666665,399.1333333333334 718,417 C 795.3333333333335,434.8666666666666 905.9743589743591,454.00256410256407 986,456 C 1066.0256410256409,457.99743589743593 1115.4358974358972,442.85641025641024 1186,439 C 1256.5641025641028,435.14358974358976 1348.2820512820513,442.57179487179485 1440,450 C 1440,450 1440,600 1440,600 Z'
    );
  }
  75% {
    d: path(
      'M 0,600 C 0,600 0,450 0,450 C 73.25641025641025,463.2769230769231 146.5128205128205,476.55384615384617 226,476 C 305.4871794871795,475.44615384615383 391.2051282051282,461.0615384615385 467,440 C 542.7948717948718,418.9384615384615 608.6666666666667,391.2 690,405 C 771.3333333333333,418.8 868.1282051282052,474.1384615384615 946,493 C 1023.8717948717948,511.8615384615385 1082.8205128205127,494.24615384615385 1162,481 C 1241.1794871794873,467.75384615384615 1340.5897435897436,458.87692307692305 1440,450 C 1440,450 1440,600 1440,600 Z'
    );
  }
  100% {
    d: path(
      'M 0,600 C 0,600 0,450 0,450 C 75.91025641025641,452.9307692307692 151.82051282051282,455.8615384615384 224,453 C 296.1794871794872,450.1384615384616 364.6282051282052,441.4846153846155 449,433 C 533.3717948717948,424.5153846153845 633.6666666666665,416.19999999999993 725,423 C 816.3333333333335,429.80000000000007 898.7051282051284,451.71538461538466 982,458 C 1065.2948717948716,464.28461538461534 1149.5128205128203,454.9384615384615 1226,451 C 1302.4871794871797,447.0615384615385 1371.2435897435898,448.53076923076924 1440,450 C 1440,450 1440,600 1440,600 Z'
    );
  }
}
</style>
