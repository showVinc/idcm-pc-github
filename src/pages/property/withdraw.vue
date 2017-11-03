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
          虚拟货币提取
        </div>
        <div class="text">
          <div class="input">
            虚拟币存入钱包地址 <input type="text">
          </div>
        </div>
        <div class="title">
          充币记录
        </div>
        <div class="block">
        </div>
        <div class="block">
          <span class="demonstration">大于 7 页时的效果</span>
          <el-pagination
            layout="prev, pager, next"
            :total="300">
          </el-pagination>
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
  .text{
    padding-top:55px;
    .input{
      font-size: 14px;
      color: #ebebeb;
      line-height: 46px;
      margin-bottom: 46px;
      input{
        border-radius: 5px;
        height: 46px;
        border:1px solid #356092;
        margin-left: 26px;
        display: inline-block;
        max-width: 528px;
        min-width: 300px;
        background: none;
      }
    }
  }
</style>
<style lang="less" type="text/less">

</style>
