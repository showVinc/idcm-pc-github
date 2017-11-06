import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import SettingIndex from '@/pages/setting/set'    //  安全设置
import SettingLog from '@/pages/setting/log'    //  安全记录
import SettingCertify from '@/pages/setting/certify'    //  实名认证
//个人信息验证
import Login from '@/pages/login/Login'    //  登录
import Register from '@/pages/login/Register'    //  注册
import Forget from '@/pages/login/Forget'    //  忘记密码
import Reset from '@/pages/login/Reset'    //  重置


//新闻页面
import News from '@/pages/news/News'    //  新闻
import Newsdetail from '@/pages/news/Newsdetail'    //  新闻详细页


import SetMobile from '@/pages/setting/mobile'    //  绑定手机号
import SetFundpassword from '@/pages/setting/fundpassword'    //  资金密码
import SetUserinfo from '@/pages/setting/userinfo'    //  修改资料
import SetEmail from '@/pages/setting/email'    //  邮箱绑定
import SetLoginPassword from '@/pages/setting/loginpassword'    //  重置登录密码
import SetFindfundpass from '@/pages/setting/findfundpass'    //  找回资金密码
import About from '@/pages/about'    //  关于我们
import Contact from '@/pages/contact'    //  加入我们
import IDCM from '@/pages/idcm'    //  交易所

//资产
import Passetview from '@/pages/property/assetview.vue'    //  资产总览
import Paccounts from '@/pages/property/accounts.vue'    //  货币资金转账
import Pdeposit from '@/pages/property/deposit.vue'    //  虚拟货存入
import Pwithdraw from '@/pages/property/withdraw.vue'    //  虚拟货币提取
import Pentrust from '@/pages/property/entrust.vue'    //  委托管理
import Pmack from '@/pages/property/mack.vue'    //  成交记录
import Pfund from '@/pages/property/fund.vue'    //  资金流水记录
import Pposition from '@/pages/property/position.vue'    //  持仓流水记录
import Pterrace from '@/pages/property/terrace.vue'    //  平台互转

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    { path:"*", redirect:"/" },
    {path: '/setting', redirect: '/setting/index'},
    {
      type: 'setting',   // 表示是 安全设置相关的菜单
      pos: 1,            //  在安全设置菜单中的位置
      path: '/setting/index',
      name: '安全设置',
      component: SettingIndex,
      children: [
        {
          path: '/setting/index/mobile',
          name: '绑定手机',
          component: SetMobile,
        },
        {
          path: '/setting/index/fundpassword',
          name: '修改资金密码',
          component: SetFundpassword
        },
        {
          path: '/setting/index/userinfo',
          name: '修改资料',
          component: SetUserinfo
        },
        {
          path: '/setting/index/email',
          name: '绑定邮箱',
          component: SetEmail
        },
        {
          path: '/setting/index/loginpassword',
          name: '登录密码',
          component: SetLoginPassword
        },
        {
          path: '/setting/index/findfundpass',
          name: '找回资金密码',
          component: SetFindfundpass
        }
      ]
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
    },
    {
      path: '/reset',
      name: 'Reset',
      component: Reset
    },
   // 资产
    {path: '/property', redirect: '/property/assetview'},
    {
      type: 'property',   // 表示是 安全设置相关的菜单
      pos: 1,            //  在安全设置菜单中的位置
      path: '/property/assetview',
      name: '资产总览',
      component: Passetview
    },
    {
      type: 'property',   // 表示是 安全设置相关的菜单
      pos: 2,            //  在安全设置菜单中的位置
      path: '/property/accounts',
      name: '货币资金转账',
      component: Paccounts
    },
    {
      type: 'property',   // 表示是 安全设置相关的菜单
      pos: 3,            //  在安全设置菜单中的位置
      path: '/property/deposit',
      name: '虚拟货存入',
      component: Pdeposit
    },
    {
      type: 'property',   // 表示是 安全设置相关的菜单
      pos: 4,            //  在安全设置菜单中的位置
      path: '/property/withdraw',
      name: '虚拟货币提取',
      component: Pwithdraw
    },
    {
      type: 'property',   // 表示是 安全设置相关的菜单
      pos: 5,            //  在安全设置菜单中的位置
      path: '/property/entrust',
      name: '委托管理',
      component: Pentrust
    },
    {
      type: 'property',   // 表示是 安全设置相关的菜单
      pos: 6,            //  在安全设置菜单中的位置
      path: '/property/mack',
      name: '成交记录',
      component: Pmack
    },
    {
      type: 'property',   // 表示是 安全设置相关的菜单
      pos: 7,            //  在安全设置菜单中的位置
      path: '/property/fund',
      name: '资金流水记录',
      component: Pfund
    },
    {
      type: 'property',   // 表示是 安全设置相关的菜单
      pos:8,            //  在安全设置菜单中的位置
      path: '/property/position',
      name: '持仓流水记录',
      component: Pposition
    },
    {
      type: 'property',   // 表示是 安全设置相关的菜单
      pos: 9,            //  在安全设置菜单中的位置
      path: '/property/terrace',
      name: '平台互转',
      component: Pterrace
    },
    {
      path: '/news',
      component: News,
      name: 'News',
    },
    {
      path: '/news/detail',
      component: Newsdetail,
      name: 'Newsdetail',
    },
    {
      path: '/about',
      name: '关于我们',
      component: About
    },
    {
      path: '/contact',
      name: '加入我们',
      component: Contact
    },
    {
      path: '/idcm',
      name: '交易所',
      component: IDCM
    }
  ]
})
