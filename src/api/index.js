// 此文件对api进行统一管理
import requests from './request'
import mockRequests from './mockAjax'

// 一、三级联动接口
// 请求地址：/api/product/getBaseCategoryList
// 请求方式：GET
// 参数类型：无参数

 // 发请求：axios发请求返回结果是Promise对象
export const reqCategoryList = () => {
    return requests({
        url: '/product/getBaseCategoryList',
        method: 'get'
    })
};

// 获取banner（home首页轮播图接口）
export const reqGetBannerList = ()=>mockRequests.get('/banner')

// 获取floor数据
export const reqGetFloorList = () => mockRequests.get('/floor')

// 获取搜索页面数据 地址：/api/list 方式：post 需要带参数
export const reqGetSearchInfo = (params) => requests( { url:'/list',method:'post',data:params})

// 请求商品详情页数据/api/item/{ skuId }，get，参数：skuId(必须)
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' })

// 添加到购物车 /api/cart/addToCart/{ skuId }/{ skuNum }，post 参数必须
export const reqAddOrUpdateShopCart =(skuId,skuNum) =>requests({url:`/cart/addToCart/${ skuId }/${ skuNum }`,method:'post'})

// 获取购物车列表 /api/cart/cartList ，get ，无参数
export const reqCartList = ()=>requests({url:'/cart/cartList ',method:'get'})

// 删除购物车 /api/cart/deleteCart/{skuId} ，delete，参数skuId
export const reqDeleteCart = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })

// 切换商品选中状态 /api/cart/checkCart/{skuID}/{isChecked}，get ，两个参数
export const reqUpdateCheckedById = (skuId,isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })

// 获取验证码
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })

// 注册请求 /api/user/passport/register post ,参数：号码，验证码，密码
export const reqUserRegister = (data ) => requests({ url: '/user/passport/register', data,method: 'post' })

// 登录请求 /api/user/passport/login post ,参数：号码，密码
export const reqUserLogin = (data ) => requests({ url: '/user/passport/login', data,method: 'post' })

// 获取用户信息，需携带token
export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' })

// 获取用户地址信息 
export const reqAddressInfo = () => requests({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' })

// 获取结算商品清单 /api/order/auth/trade
export const reqOrderInfo = () => requests({ url: '/order/auth/trade', method: 'get' })

// 提交订单 /api/order/auth/submitOrder?tradeNo={tradeNo}，post 很多参数
export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: 'post' })

// 获取订单支付信息 /api/payment/weixin/createNative/{orderId}
export const reqPayInfo = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' })
