<template>
  <div class="skin-setting">
    <h1 class="p-title">个人中心</h1>

    <div class="p-content">
      <!--  左侧菜单  -->
      <div class="p-aside">
        <idcm-left-menu :data="data"></idcm-left-menu>
      </div>

      <!--  右侧内容  -->
      <div class="p-article">
        安全设置首页
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        data: [
          {label: '安全设置', url: '/setting/index'},
          {label: '安全记录', url: '/setting/log'},
          {label: '实名认证', url: '/setting/certify'}
        ]
      }
    }
  }
</script>


<style lang="less" scoped>

</style>
