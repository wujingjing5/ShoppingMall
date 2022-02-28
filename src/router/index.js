// 此文件是配置路由的

import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入仓库，要使用仓库中的数据判断用户是否登录来进行路由跳转或阻止跳转
import store from '@/store'
// 使用插件
Vue.use(VueRouter)

// 引入路由组件
// import Home from '../pages/Home'
// import Login from '../pages/Login'
// import Register from '../pages/Register'
// import Search from '../pages/Search'
// import Detail from '../pages/Detail'

import routes from './routes'
import { take } from 'lodash'
// 重写push|replace
// 1、先保存一份原本的
let originPush = VueRouter.prototype.push
// 2、第一个参数指定往哪里跳转，第二个是成功的回调，第三个是失败的回调
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this,location,resolve,reject)
    } else {
        originPush.call(this,location,()=>{},()=>{})
    }
    
}


// 配置路由
const router =  new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return {y:0}
    }
})

// 全局守卫：前置守卫，在路由跳转之前进行判读
router.beforeEach( async (to, from, next) => {
   
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    next();
    // 没写退出登录，暂时无法使用
    // if (token) {
    //     if (to.path == '/login') {
    //         next('/home');
    //     } else {
    //         // 如果有用户名，直接跳转
    //         if (name) {
    //             next();
    //         }
    //         // 没有则派发请求action再跳转
    //         else {
    //             try {
    //                 await store.dispatch("getUserInfo");
    //                 next();
    //             } catch (error) {
    //                 // token失效了
    //                 // 发出退出登录请求（我没写action）
    //                 // 回到登录页面
    //                 next('/login')
    //             }
    //         }

    //     }
    // }
    // // 未登录时暂时未处理，直接放行
    // else {
    //     next();
    // }
    // next();
});

export default router;