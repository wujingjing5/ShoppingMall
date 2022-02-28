import {reqGoodsInfo,reqAddOrUpdateShopCart} from "@/api"
import {getUUID} from '../utils/uuid_token'
// import { result } from "lodash";
const state = {
    goodInfo: {},
    uuid_token:getUUID()
}
const actions = {
    // 获取产品信息
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId);
        if (result.code == 200) {
            commit('GETGOODINFO',result.data)
        }
    },
    // 将产品添加到购物车
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);
        // console.log(result);
        if (result.code == 200) {
            return "ok";
        }
        else {
            return Promise.reject(new Error('failed'))
        }
    }
}
const mutations = {
    GETGOODINFO(state,goodInfo) {
        state.goodInfo = goodInfo
    }
    
}
const getters = {
    categoryView(state) {
        return state.goodInfo.categoryView || {};
    },
    skuInfo(state) {
        return state.goodInfo.skuInfo || {};
    },
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || {}
    }
    
}

export default {
    state,
    actions,
    mutations,
    getters
}