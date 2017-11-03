import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import SettingIndex from '@/pages/setting/set'    //  安全设置
import SettingLog from '@/pages/setting/log'    //  安全记录
import SettingCertify from '@/pages/setting/certify'    //  实名认证
import SetMobile from '@/pages/setting/mobile'    //  绑定邮箱
import SetFundpassword from '@/pages/setting/fundpassword'    //  资金密码
import SetUserinfo from '@/pages/setting/userinfo'    //  修改资料

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
      component: SettingIndex,
      children: [
        {
          path: '/setting/index/mobile',
          name: '邮箱绑定',
          component: SetMobile,
        },
        {
          path: '/setting/index/fundpassword',
          name: '资金密码',
          component: SetFundpassword
        },
        {
          path: '/setting/index/userinfo',
          name: '修改资料',
          component: SetUserinfo
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
    }
  ]
})
