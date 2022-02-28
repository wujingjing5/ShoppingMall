// home自己的小仓库

import {reqCategoryList} from '@/api'
import {reqGetBannerList , reqGetFloorList} from '@/api'
const state = {
    categoryList: [],
    bannerList: [],
    floorList:[]
}
const actions = {
    async categoryList({commit}) {
        let result =await reqCategoryList()
        // console.log(result);
        if (result.code == 200) {
            commit('CATEGORYLIST',result.data)
        }
        
    },
    // 获取首页轮播图的数据
    async getBannerList({commit}) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
            commit('GETBANNERLIST',result.data)
        }
    },
    async getFloorList({commit}) {
        let result = await reqGetFloorList();
        if (result.code == 200) {
            commit('GETFLOORLIST',result.data)
        }
    }
}
const mutations = {
    CATEGORYLIST(state,categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state,bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state,floorList) {
        state.floorList = floorList
    },

}
const getters = {}


export default {
    state,
    actions,
    mutations,
    getters
}