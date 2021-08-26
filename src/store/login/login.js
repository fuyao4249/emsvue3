import { login, getRoleMenu, usersInfo } from '../../network/api'
import localCache from '../../utils/cache'
import router from '@/router'
import { mapMenusToRoutes } from '@/utils/map-menus'
const loginModule = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenu: {}
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token) {
      state.token = token
    },
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    changeUserMenu(state, userMenu) {
      state.userMenu = userMenu
       // userMenus => routes
       const routes = mapMenusToRoutes(userMenu)

       // 将routes => router.main.children
       routes.forEach((route) => {
         router.addRoute('main', route)
       })
    }
  },
  actions: {
    async accountLoginAction({commit}, payload) {
      // 登录获取token
      const result = await login(payload)
      const {id, token} = result.data
      commit('changeToken', token)
      // localCache.setCache('token', token)
      window.localStorage.setItem('token', token)

      // 获取用户信息
      const userResult = await usersInfo(id)
      const userInfo = userResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)


      //获取菜单信息
      const RoleResult = await getRoleMenu(userInfo.role.id)
      const userMenu = RoleResult.data
      commit('changeUserMenu', userMenu)
      localCache.setCache('userMenu', userMenu)

      // 跳转
      router.push('/main')
    },
    loadLocalLogin({commit}) {
      const token = window.localStorage.getItem('token')
      if(token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if(userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenu = localCache.getCache('userMenu')
      if(userMenu) {
        commit('changeUserMenu', userMenu)
      }

    }
  }
}

export default loginModule
