<!--  关于我们  -->
<template>
  <div>
    <head-top :num="4"></head-top>
    <div class="skin-setting">
      <h1 class="p-title">关于我们</h1>

      <div class="p-content">
        <!--  左侧菜单  -->
        <div class="p-aside">
          <img class="avatar" :src="avatar" alt="">
        </div>

        <!--  右侧内容  -->
        <div class="p-article">
          <p>国际数字货币管理中心 （http://www.idcmex.com/）创办于2013年12月，是中国最早的比特币交易平台之一，现由International Digital Currency Managment  Limited负
责主体运营。创始团队成员主要来自于微软亚洲研究院（MSRA）、思科（Cisco）、阿里巴巴（Alibaba）等一流机构和公司，创办之初即获得百万美元级的天使投资。率先成
为立足亚洲 ，服务全球的专业比特币交易平台。
        </p>

          <p>比特币交易网团队通过3年的不断努力，逐渐发展成为一支由超50位长期从事互联网、金融行业人员组成的专业队伍，为平台持续提供稳定、安全、便捷的服务保障。比特币交
易网一向崇尚安全合规的管理和理念，同时与汤森路透等顶级全球金融机构建立战略合作并委派独立金融服务组建立第三方合规监察服务为全球客户提供合法合规的资金运营交
易清算等优质服务环境和体验.比特币交易网同时是比特币基金会（Bitcoin Foundation）会员、亚洲数字资产金融协会（DACA）理事会成员比特币交易网坚持以用户利益为核
心，秉承开放、自由、分享的互联网精神，致力于为全球客户提供卓越的综合性数字货币服务。
        </p>
        </div>
      </div>
    </div>
    <public-foot></public-foot>
  </div>
</template>

<script>
  export default {
    data () {
      return {
          avatar: require('@/assets/images/user.jpg'),
      }
    }
  }
</script>
<style lang="less" scoped>
  .p-content {
    padding: 60px;
    min-height: 656px;
  }
  .p-aside {
    text-align: right;
  }
  .avatar {
    max-width: 100%;
    width: 420px;
  }
  .p-article {
    padding-left: 60px;
    p {
      font-size: 14px;
      line-height: 36px;
      color: #eaeaea;
      margin: 0 0 20px 0;
    }
  }
</style>
