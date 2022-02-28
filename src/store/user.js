// 登录与注册的模块

import {reqGetCode,reqUserRegister,reqUserLogin,reqUserInfo} from '@/api'

const state = {
    code: '',
    token: localStorage.getItem('TOKEN'),
    userInfo:{}
}
const actions = {
    // 获取验证码
    async getCode({ commit },phone) {
        let result = await reqGetCode(phone);
        if (result.code == 200) {
            commit('GETCODE', result.data);
            return 'ok';
        } else {
         return Promise.reject(new Error("failed"))
            
        }
        
    },
    // 用户注册
    async userRegister({commit},user) {
        let result = await reqUserRegister(user);
        if (result.code == 200) {
            // commit('GETCODE', result.data);
            return 'ok';
        } else {
         return Promise.reject(new Error("failed"))
            
        }
    },
    // 用户登录
    async userLogin({commit},data) {
        let result = await reqUserLogin(data);
        if (result.code == 200) {
            // 用户已经成功登录并获取到token，需要使用持久化存储将token存储
            commit('USERLOGIN', result.data.token);
            localStorage.setItem('TOKEN',result.data.token)
            return 'ok';
        } else {
            return Promise.reject(new Error('failed'));
            
        }
    },
    async getUserInfo({commit}) {
        let result = await reqUserInfo();
        // console.log(result);
        if (result.code == 200) {
            commit('GETUSERINFO', result.data);
            return 'ok';
        } else {
            return Promise.reject(new Error('failed'));
        }
    },
}
const mutations = {
    GETCODE(state,code) {
        state.code = code;
    },
    USERLOGIN(state, token) {
        state.token = token;
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    }
}
const getters = {}

export default {
    state,
    actions,
    mutations,
    getters
}