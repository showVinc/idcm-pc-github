<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'app',
    data() {
      return {
        accessToken: ''
      }
    },
    created() {
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
  }
</style>
