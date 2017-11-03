import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
//关于我们
import Aboutus from '@/components/Aboutus'
//传承计划
import Planning from '@/components/Planning'
//财富管理
import Wealthmanag from '@/components/Wealthmanag'
// 财富详情
import Wealth from '@/components/Wealth'
import Wealth1 from '@/components/Wealth1'
import Wealth2 from '@/components/Wealth2'
import Wealth3 from '@/components/Wealth3'
//行业前沿
import Lain from '@/components/Lain'
//联系我们
import Contactus from '@/components/Contactus'
//最新资讯
import News from '@/components/News'
//动态
import Dynamic from '@/components/Dynamic'
//咨询详情
import Detail from '@/components/Detail'
import Detail1 from '@/components/Detail1'
import Detail2 from '@/components/Detail2'
import Detail3 from '@/components/Detail3'
import Detail4 from '@/components/Detail4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/aboutus',
      name: 'Aboutus',
      component: Aboutus
    },
    {
      path: '/planning',
      name: 'Planning',
      component: Planning
    },
    {
      path: '/wealthmanag',
      name: 'Wealthmanag',
      component: Wealthmanag
    },
    {
      path: '/wealth',
      name: 'Wealth',
      component: Wealth
    },
    {
      path: '/wealth1',
      name: 'Wealth1',
      component: Wealth1
    },
    {
      path: '/wealth2',
      name: 'Wealth2',
      component: Wealth2
    },
    {
      path: '/wealth3',
      name: 'Wealth3',
      component: Wealth3
    },
    {
      path: '/lain',
      name: 'Lain',
      component: Lain
    },
    {
      path: '/contactus',
      name: 'Contactus',
      component: Contactus
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/dynamic',
      name: 'Dynamic',
      component: Dynamic
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/detail1',
      name: 'Detail1',
      component: Detail1
    },{
      path: '/detail2',
      name: 'Detail2',
      component: Detail2
    },
    {
      path: '/detail3',
      name: 'Detail3',
      component: Detail3
    },
    {
      path: '/detail4',
      name: 'Detail4',
      component: Detail4
    }

  ]
})
