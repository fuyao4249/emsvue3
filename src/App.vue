<template>
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>

<script>
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
export default {
  setup() {
    return {
      zhCn
    }
  }
}
</script>
<style lang="less"></style>
