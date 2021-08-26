<template>
  <div class="login">
    <login-tab></login-tab>
  </div>
</template>

<script>
import LoginTab from './components/LoginTab.vue'
export default {
  components: { LoginTab },
  setup() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../../assets/img/login-bg.svg');
}
</style>
