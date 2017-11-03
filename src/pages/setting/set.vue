<template>
  <div class="skin-setting">
    <h1 class="p-title">个人中心</h1>

    <div class="p-content">
      <!--  左侧菜单  -->
      <div class="p-aside">
        <idcm-left-menu :type="'setting'"></idcm-left-menu>
      </div>

      <!--  右侧内容  -->
      <div class="p-article">
        <div class="userinfo">
          <img src="" alt="">
          <div class="info">
            <h3 class="title">Elvis</h3>
            <p>UID:(HY553202)</p>
          </div>

          <router-link>资料修改</router-link>
        </div>






      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>
<style lang="less" scoped>
  .userinfo {
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      vertical-align: middle;
    }

    .info {
      margin-left: 15px;
      .title, p {
        margin: 0;
        line-height: 26px;
        font-weight: normal;
      }

      .title {
        color: #ebebeb;
        font-size: 18px;
      }
      p {
        color: #ccc;
      }
    }
  }


</style>

