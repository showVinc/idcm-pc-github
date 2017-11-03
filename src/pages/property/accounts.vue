<template>
  <div class="skin-setting">
    <h1 class="p-title">个人中心</h1>

    <div class="p-content">
      <!--  左侧菜单  -->
      <div class="p-aside">
        <idcm-left-menu :type="'property'"></idcm-left-menu>
      </div>

      <!--  右侧内容  -->
      <div class="p-article">
        <div class="title">
          法定货币资金互转
        </div>
        <div class="info">
          提示：交易前，你还需要完成 <b>安全设置</b> 和 <b>实名认证</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>
<style lang="less" scoped type="text/less">
  .title{
    font-size: 18px;
    color: #eaeaea;
    line-height: 36px;
  }
  .info{
    line-height: 40px;
    font-size: 12px;
    color: #c4c1c0;
  b{
    color: #ff6939;
    font-weight: normal;
  }
  }
</style>
