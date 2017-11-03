import IdcmLeftMenu from '@/components/idcm-left-menu'
import Top from '@/components/Top'
import Foot from '@/components/Foot'

// 导出组件
export default {
  install: function(Vue){
    Vue.component('idcm-left-menu',IdcmLeftMenu),    //  左侧菜单组件（资产与个人中心页面）
    Vue.component('head-top',Top)    //  公共头部
    Vue.component('public-foot',Foot)    //  公共底部
  }
}
