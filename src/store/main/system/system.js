import { getUserList, deleteUser } from '@/network/api'
const systemModule = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      categoryList: [],
      categoryCount: 0
    }
  },
  getters: {
    pageListData(state) {
      return(pageName) => {
        return (state)[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return(pageName) => {
        return (state)[`${pageName}Count`]
      }
    }
  },
  mutations: {
    changeUsersList(state, userList) {
      state.usersList = userList
    },
    changeUsersCount(state, userCount) {
      state.usersCount = userCount
    },
    changeRoleList(state, roleList) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount) {
      state.roleCount = roleCount
    },
    changeGoodsList(state, goodsList) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount) {
      state.goodsCount = goodsCount
    },
    changeCategoryList(state, CategoryList) {
      state.categoryList = CategoryList
    },
    changeCategoryCount(state, CategoryCount) {
      state.categoryCount = CategoryCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload) {

      // url 地址
      const pageName = payload.pageName
      const pageURl = `/${pageName}/list`

      // 对页面发请求 用户列表
      const pageUserResult = await getUserList(pageURl, payload.queryInfo)

      // 将数据存储到state
      const changePageName = pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      const {list, totalCount} = pageUserResult.data
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)


    },
    async delPageDataAction({dispatch}, payload) {
      // 获取pagename和url
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`

      // 调用删除网络请求
      await deleteUser(pageUrl)

      // 重新请求最新的数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })


    }
  }

}

export default systemModule
