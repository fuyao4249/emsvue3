import axios from "axios";
import router from "../router";


export function request(config) {
  const instance = axios.create({
    baseURL: '/api',
    timeout: 5000,
  })

  // 请求拦截
  instance.interceptors.request.use(config => {
    // 如果有一个接口需要认证才能访问，就在这里统一设置
    const token = window.localStorage.getItem('token');
    // 请求成功 就带上表头
    // config.headers.Authorization = 'Basic c2FiZXI6c2FiZXJfc2VjcmV0';

    if(token) {
      config.headers["Authorization"] = token;
    }


    // 直接放行
    return config;
  }, error => {

  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data ? res.data : res;
  },err => {
    // 如果有需要授权才可以访问的接口，统一去login授权
    if(err.response.status === '401') {
      console.log(123)
      router.push({path: '/login'});
    }
    // 如果有错误，这里面会处理，显示错误信息
    // Notify(err.response.data.errors[Object.keys(err.response.data.errors)[0]][0])
  })

  return instance(config)
}
