// 语言切换工具
import store from '@/store'

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from '@/language/zh-cn'
import en from '@/language/en-us'

Vue.use(VueI18n)

export default new VueI18n({
  locale: store.state.language,
  messages: {
    'zh-cn':zh,   // 中文语言包
    'en-us':en,   // 中文语言包
    // zh,
    // en
  }
})
