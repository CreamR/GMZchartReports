<template>
  <div class="error">
    <el-result
      icon="error"
      title="错误"
      sub-title="好像有什么地方出了点儿问题, 刷新页面也许会解决!"
    >
      <template #extra>
        <el-button type="primary" @click="$router.push('/home')"
          >返回</el-button
        >
      </template>
    </el-result>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.error {
  margin-top: 11.11vw;
}
</style>
