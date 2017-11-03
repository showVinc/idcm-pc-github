import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import SettingIndex from '@/pages/setting/set'    //  安全设置
import SettingLog from '@/pages/setting/log'    //  安全记录
import SettingCertify from '@/pages/setting/certify'    //  实名认证

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
      path: '/setting/index',
      name: '安全设置',
      component: SettingIndex
    },
    {
      path: '/setting/log',
      name: '安全记录',
      component: SettingLog
    },
    {
      path: '/setting/certify',
      name: '实名认证',
      component: SettingCertify
    }
  ]
})
