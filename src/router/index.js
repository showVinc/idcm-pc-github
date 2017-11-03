import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import SettingIndex from '@/pages/setting/set'    //  安全设置
import SettingLog from '@/pages/setting/log'    //  安全记录
import SettingCertify from '@/pages/setting/certify'    //  实名认证
import Login from '@/pages/login/Login'    //  登录
import Register from '@/pages/login/Register'    //  注册
import Forget from '@/pages/login/Forget'    //  忘记密码

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {path: '/setting', redirect: '/setting/index'},
    {
      type: 'setting',   // 表示是 安全设置相关的菜单
      pos: 1,            //  在安全设置菜单中的位置
      path: '/setting/index',
      name: '安全设置',
      component: SettingIndex
    },
    {
      type: 'setting',
      pos: 2,
      path: '/setting/log',
      name: '安全记录',
      component: SettingLog
    },
    {
      type: 'setting',
      pos: 3,
      path: '/setting/certify',
      name: '实名认证',
      component: SettingCertify
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/forget',
      name: 'Forget',
      component: Forget
    }
  ]
})
