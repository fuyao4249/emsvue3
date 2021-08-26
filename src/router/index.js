import { createRouter, createWebHashHistory } from 'vue-router'
import { firstMenu } from '@/utils/map-menus'

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: "login",
    component: () => import ('../views/login/Login.vue')
  },
  {
    path: '/main',
    name: "main",
    component: () => import ('../views/main/Main.vue'),
    children: []
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/not-found/not-found.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to) => {
  if(to.path !== '/login') {
    const token = window.localStorage.getItem('token')
    if(!token) {
      return '/login'
    }
  }
  if(to.path === '/main') {
    return firstMenu.url
  }

})

export default router
