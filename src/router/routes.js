// 引入路由组件
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'
import Detail from '../pages/Detail'
import ShopCart from '../pages/ShopCart'
import Trade from '../pages/Trade'
import Pay from '../pages/Pay'
import AddCartSuccess from '../pages/AddCartSuccess'
export default [
    {
        path: '/pay',
        name:'pay',
        component: Pay,
        meta: {
            show:true,
        }
    },
    {
        path: '/shopcart',
        name:'shopcart',
        component: ShopCart,
        meta: {
            show:true,
        }
    },
    {
        path: '/trade',
        name:'trade',
        component: Trade,
        meta: {
            show:true,
        }
    },
    {
        path: '/addcartsuccess',
        name:'addcartsuccess',
        component: AddCartSuccess,
        meta: {
            show:true,
        }
    },
    {
        path: '/home',
        component: Home,
        meta: {
            show:true,
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            show:false,
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            show:false,
        }
    },
    {
        name:'search',
        path: '/search/:k?',
        // path: '/search',
        component: Search,
        meta: {
            show:true,
        }
    },
    {
        name:'detaial',
        path: '/detail/:skuid?',
        component: Detail,
        meta: {
            show:true,
        }
    },

    // 重定向
    {
        path: '/',
        redirect:'/home'
    }
]