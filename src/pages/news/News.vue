<template>
  <div>
    <head-top :num="3"></head-top>
    <div>
      我是新闻页面
      <div @click="$router.push('/news/detail')">我是子页面</div>
    </div>
    <public-foot></public-foot>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      sub(){

      }
    },
    mounted() {
    }
  }
</script>
<style lang="less" type="text/less" scoped>
  @media screen and (max-width: 1200px) {

  }
</style>
<style lang="less" type="text/less">

</style>
