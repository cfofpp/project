import axios from 'axios'; // 引入iview的消息提示组件，用于提示接口的报错等
import store from '../store/index'; // 引入vuex-store
export function request(config) {
  const a = axios.create({
    baseURL: '/api',
    settimeout: 20000,
    withCredentials: true
    // Headers:window.sessionStorage.getItem("token")
    // headers:window.sessionStorage.getItem("token")==null?'':window.sessionStorage.setItem("token")
  })
  //获取登录状态
  // Headers:window.sessionStorage.setItem("token")
  a.interceptors.request.use((config) => {
    // if (store.state.token) {
    //   console.log(store.state.token);
    //   config.headers['token'] = store.state.token // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    // if(window.sessionStorage.setItem("token")){
    //   config.headers['token'] = window.sessionStorage.getItem('token')
    // }
      return config
    }, error => {}
    // console.log(error)
  )
  a.interceptors.response.use((res) => {
    console.log(res.data);
    return res.data
  }, err => {
    console.log(err);
  })
  return a(config)
}