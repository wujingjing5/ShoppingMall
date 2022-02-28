import Vue from 'vue'
import Vuex from 'vuex'
// 使用插件
Vue.use(Vuex)

// 引入小仓库
import home from './home'
import search from './search'
import detail from './detail'
import shopcart from './shopcart'
import user from './user'
import trade from './trade'
// const actions = {}
// const mutations = {}
// const state = {}
// const getters = {}

// 暴露store类的实例
export default new Vuex.Store({
    // actions,
    // mutations,
    // state,
    // getters
    modules: {
        home,
        search,
        detail,
        shopcart,
        user,
        trade
    }


})