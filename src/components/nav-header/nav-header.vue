<template>
  <div class="nav-content">
    <i class="nav-header el-icon-s-fold" @click="handleHeader"></i>
    <div class="content">
      <div class="header-left">
        <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
      </div>
      <div class="header-right">
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar src="../../assets/img/logo.svg"></el-avatar>
            <span class="nav-span">{{ name }}</span>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="escClick">退出登录</el-dropdown-item>
              <el-dropdown-item divided>用户中心</el-dropdown-item>
              <el-dropdown-item>系统管理</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useRoute, useRouter } from 'vue-router'
import Breadcrumb from '../../base-ui/breadcrumb/src/breadcrumb.vue'
import { ElLoading } from 'element-plus'
export default {
  emits: ['foldChange'],
  components: {
    Breadcrumb
  },
  setup(props, { emit }) {
    const fold = ref(false)
    const store = useStore()
    const name = store.state.login.userInfo.name
    const handleHeader = () => {
      fold.value = !fold.value
      emit('foldChange', fold.value)
    }

    // 面包屑数据
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenu
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    // 退出登录
    const router = useRouter()
    const escClick = () => {
      const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      setTimeout(() => {
        loading.close()
        window.localStorage.removeItem('token')
        router.push('/login')
      }, 500)
    }

    return {
      handleHeader,
      name,
      breadcrumbs,
      escClick
    }
  }
}
</script>

<style lang="less" scoped>
.nav-content {
  width: 100%;
  display: flex;
  align-items: center;
  .nav-header {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    .header-left {
      margin-left: 10px;
    }
    .header-right {
      cursor: pointer;
      .el-dropdown-link {
        display: flex;
        align-items: center;

        .nav-span {
          margin-left: 7px;
        }
      }
    }
  }
}
</style>
