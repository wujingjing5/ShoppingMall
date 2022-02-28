import {reqCartList,reqDeleteCart,reqUpdateCheckedById} from '../api'
const state = {
    cartList:[],
}
const actions = {
    // 获取购物车列表
    async getCartList({commit}) {
        let result = await reqCartList();
        // console.log(result);
        if (result.code == 200) {
            commit('GETCARTLIST', result.data);
        }
    },
    // 删除购物车某个产品
    async deleteCartListBySkuId({commit},skuId) {
        let result = await reqDeleteCart(skuId);
        // console.log(result);
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    //修改购物车商品是否选中
    async updateCheckedById({ commit }, { skuId, isChecked }) {
        let result = await reqUpdateCheckedById(skuId,isChecked);
        // console.log(result);
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    // 删除全部选中的商品
    deleteAllChexkedCart({ dispatch, getters }) {
        let PromiseAll=[]
        getters.cartList.cartInfoList.forEach(item => {
            let promise = item.isChecked == 1? dispatch('deleteCartListBySkuId',item.skuId):""
            PromiseAll.push(promise);
        });
        return Promise.all(PromiseAll)
    },
    // 修改全部商品的状态
    updateAllCartChecked({dispatch,getters },isChecked) {
        let PromiseAll=[]
        getters.cartList.cartInfoList.forEach(item => {
            let promise = dispatch('updateCheckedById', { skuId: item.skuId, isChecked })
            PromiseAll.push(promise);
        });
        return Promise.all(PromiseAll)
    },
}
const mutations = {
    GETCARTLIST(state, cartList) {
       state.cartList = cartList;
    }
}
const getters = {
    cartList(state) {
        return state.cartList[0] || {};
    },
    // cartInfoList(state) {
    //     return state.cartList[0].cartInfoList || [];
    // }
}

export default {
    state,
    actions,
    mutations,
    getters
} 