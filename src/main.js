import Vue from 'vue'
import App from './App.vue'
// 注册全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import {Button,MessageBox} from 'element-ui'
// 第一个参数是组件名，第二个是哪一个组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name, Pagination)
Vue.component(Button.name, Button)
// eleUI注册组件的时候，还有下面这种写法，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

// 引入路由
import router from '@/router'
import store from '@/store'
// // 测试get请求能否返回数据
// import { reqCategoryList }  from '@/api'
// reqCategoryList()
// 引入mock虚拟数据
import '@/mock/mockServe'

import 'swiper/css/swiper.css'
Vue.config.productionTip = false

// 统一引入接口api文件里面全部请求函数
import * as API from "@/api";
// console.log(API);

new Vue({
  render: h => h(App),
  // 配置全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  // 注册路由：组件身上都会有$route、$router（共用）属性
  router,
  // 注册仓库，组件身上都会有$store属性
  store,

}).$mount('#app')
