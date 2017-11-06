<template>
  <div id="app" :class="idcm_page ? 'icdm-app' : ''">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'app',
    data() {
      return {
        accessToken: '',
        idcm_page: false  //  是否是交易所页面
      }
    },
    created() {
      this.idcm_page = this.$router.currentRoute.path === '/idcm'
    },
    watch: {
      '$route' () {
        this.idcm_page = this.$router.currentRoute.path === '/idcm'
      }
    }
  }
</script>
<style lang="less">
  * {
    font-family: "Microsoft YaHei";
  }
  #app{
    min-height: 100vh;
    position: relative;
    margin-bottom: 56px;
    margin-top: 100px;
    &.icdm-app {
      margin: 0;
      padding-bottom: 56px;
      padding-top: 100px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
  }
</style>
