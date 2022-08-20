<template>
  <div class="myTemplate">
    <el-steps active="3">
      <el-step title="昵称" />
      <el-step title="密码" />
      <el-step title="学校" />
    </el-steps>

    <div class="box">
      <el-row>
        <el-col :span="12">
          <img
            src="../assets/login.jpg"
            alt="register"
            title="register"
            class="register"
          />
        </el-col>
        <el-col :span="12">
          <div class="info">
            <h1>登录</h1>
            <h4>填写您的必要信息</h4>
          </div>

          <el-form
            label-position="top"
            label-width="100px"
            :model="formLabelAlign"
            style="max-width: 460px"
            ref="ruleFormRef"
          >
            <el-form-item
              label="昵称"
              prop="nickname"
              :rules="[
                {
                  required: true,
                  min: 1,
                  max: 5,
                  message: '长度需要在1到5之间',
                },
              ]"
            >
              <el-input v-model="formLabelAlign.nickname" />
            </el-form-item>
            <el-form-item
              label="密码"
              :rules="[
                {
                  required: true,
                  min: 3,
                  max: 10,
                  message: '长度需要在3到10之间',
                },
              ]"
              prop="password"
            >
              <el-input v-model="formLabelAlign.password" type="password" />
            </el-form-item>
            <el-form-item
              label="学校"
              prop="collage"
              :rules="[
                {
                  required: true,
                  type: 'string',
                  message: '只能输入字符',
                },
              ]"
            >
              <el-input v-model="formLabelAlign.collage" />
            </el-form-item>

            <div class="wrap">
              <div class="wrapContent">
                <div class="vblock">给本项目评个分吧！</div>
                <el-rate
                  v-model="value"
                  :texts="[
                    '辣鸡！',
                    '不忍直视！',
                    '海星！',
                    '有点牛牛！',
                    '太牛了哥！',
                  ]"
                  show-text
                />
              </div>

              <el-form-item>
                <div class="wrapButton">
                  <el-button type="primary" @click="submitForm()"
                    >登录</el-button
                  >
                  <el-button @click="resetForm()">重置</el-button>
                </div>
              </el-form-item>
            </div>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import router from '../router'
import ScrollReveal from 'scrollreveal'

let myBox = {
  delay: 222,
  duration: 555,
  origin: 'bottom',
  distance: '22.22px',
}
onMounted(() => {
  ScrollReveal({ reset: true })
  ScrollReveal().reveal('.box', myBox)
})

const value = ref()
const ruleFormRef = ref()
let formLabelAlign = reactive({
  nickname: '高明昭',
  password: '123456',
  collage: 'test',
})
const resetForm = () => {
  if (!ruleFormRef) return new Error()
  ruleFormRef.value.resetFields()
}
const submitForm = async () => {
  if (!ruleFormRef) return new Error()
  await ruleFormRef.value.validate((valid, fields) => {
    if (
      formLabelAlign.nickname == localStorage.getItem('nickname') &&
      formLabelAlign.password == localStorage.getItem('password') &&
      valid
    ) {
      ElMessage({
        message: '登陆成功！跳转到主页哦！',
        type: 'success',
      })
      router.push('/home')
      // 即时token
      sessionStorage.setItem('token', 1)
    } else {
      ElMessage({
        message: '输入有误，请重新输入！',
        type: 'warning',
      })
      // TEST
      console.log(formLabelAlign.nickname)
    }
  })
}
</script>

<style lang="less" scoped>
.el-steps {
  margin: 0 auto;
  margin-top: 5.55vw;
  width: 55.55vw;
}

.myTemplate {
  .box {
    margin: 0 auto;
    margin-top: 3.88vw;
    padding: 4.22vw;
    width: 55.55vw;

    border-radius: 2.22vw;
    box-shadow: 0 1vh 1.88vh 0 rgb(39 48 54 / 20%);
    .info {
      margin-bottom: 1.11vw;
    }
    .register {
      display: block;
      width: 18.88vw;
      height: 18.88vw;
    }
    .vblock {
      color: darkgrey;
      font-size: small;
      margin-bottom: 0.28vw;
    }
    .el-rate {
      vertical-align: middle;
    }
    .wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
