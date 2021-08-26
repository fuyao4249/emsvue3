<template>
  <div class="login-content">
    <h3>后台管理系统</h3>
    <el-tabs type="border-card" class="login-tab" v-model="currentTab" stretch>
      <el-tab-pane name="acctount">
        <template #label>
          <span><i class="el-icon-user-solid">账号登录</i></span>
        </template>
        <login-num ref="accountRef" :checked="checked"></login-num>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机号登录</span>
        </template>
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="acctount-control">
      <el-checkbox v-model="checked" @change="handleCheck"
        >记住密码</el-checkbox
      >
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="longin-btn" @click="handleLogin"
      >立即登录</el-button
    >
  </div>
</template>

<script>
import LoginNum from './LoginNum.vue'
import LoginPhone from './LoginPhone.vue'
import { ref } from 'vue'
import localCache from '@/utils/cache'

export default {
  components: { LoginNum, LoginPhone },
  setup() {
    const checked = ref(false)
    checked.value = localCache.getCache('checked')
    const accountRef = ref('')
    const phoneRef = ref('')
    const currentTab = ref('acctount')
    const handleLogin = () => {
      if (currentTab.value === 'acctount') {
        accountRef.value.loginAction()
      } else {
        console.log('手机号登录')
      }
      // console.log(currentTab.value)
    }
    const handleCheck = () => {
      window.localStorage.setItem('checked', checked.value)
    }

    return {
      handleLogin,
      accountRef,
      currentTab,
      phoneRef,
      checked,
      handleCheck
    }
  }
}
</script>

<style lang="less" scoped>
.login-content {
  // position: absolute;
  // top: 40%;
  // left: 40%;
  width: 320px;
  text-align: center;
}
.acctount-control {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.longin-btn {
  margin-top: 10px;
  width: 100%;
}
</style>
