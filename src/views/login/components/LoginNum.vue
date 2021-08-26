<template>
  <div>
    <el-form
      status-icon
      label-width="100px"
      :rules="rules"
      ref="formRef"
      :model="account"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input show-password v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { rules } from '../config/num-config'
import { login } from '@/network/api'
import { useStore } from 'vuex'
import { ElLoading } from 'element-plus'
import localCache from '@/utils/cache'
export default {
  props: {
    checked: {
      type: Boolean
    }
  },
  setup(props) {
    const account = ref({
      name: '',
      password: ''
    })
    if (localCache.getCache('account')) {
      account.value = localCache.getCache('account')
    }

    console.log(account)
    const formRef = ref()
    const store = useStore()

    const loginAction = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // console.log(valid);
          // 登录验证
          if (props.checked) {
            localCache.setCache('account', account.value)
          }

          const loading = ElLoading.service({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          })
          setTimeout(() => {
            loading.close()
            store.dispatch('login/accountLoginAction', { ...account.value })
          }, 500)
        }
      })
      // login(account).then((res) => {
      //   console.log(res)
      // })
    }

    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
}
</script>

<style lang="scss" scoped></style>
