import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import './network/request'
import '../src/assets/css/base.css'
import 'normalize.css'
import {setupStore} from './store'
import registerProperties from '@/global/register-properties'

setupStore()
createApp(App).use(store).use(router).use(ElementPlus).use(registerProperties).mount('#app')
