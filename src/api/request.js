// 对于axios进行二次封装,为了用到请求和响应拦截器
import axios from "axios";

// 引入进度条
// start方法代表进度条开始
// done方法代表进度条结束
import nProgress from "nprogress";
// 引入进度条样式后才能看到效果
import 'nprogress/nprogress.css'

// 在当前模块引入store
import store from '@/store'

const requests = axios.create({
    // 配置对象
    // url:'http://localhost:8080/',
    // 基础路径，发请求的时候，路径当中会出现api
    baseURL: '/api',
    // 代表请求超时时间
    timeout:5000
})

// 请求拦截器：在请求发送之前做一些事情
requests.interceptors.request.use((config) => {
    // config:配置对象，里面有一个header请求头属性
    if (store.state.detail.uuid_token) {
        config.headers.userTempId = store.state.detail.uuid_token;
    }
    if (store.state.user.token) {
        config.headers.token = store.state.user.token;
    }
    nProgress.start()
    return config
})


// 响应拦截器
requests.interceptors.response.use((response) => {
    // 成功回调
    nProgress.done()
    // console.log(response.data);
    return response.data
}, (error) => {
// 失败的回调
    return Promise.reject(new Error('failed'))
})

export default requests;

