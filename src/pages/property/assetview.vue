<template>
  <div>
    <head-top :num="2"></head-top>

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
          个人资产
        </div>
        <div class="info">
          提示：交易前，你还需要完成 <b>安全设置</b> 和 <b>实名认证</b>
        </div>
        <div class="wrap">
          <div class="card">
            <div class="on"><strong>$(USD)</strong></div>
            <div class="wraps">
              <div class="cont">
                <p>可用金额</p>
                <p><strong>30000.00</strong></p>
              </div>
              <div class="cont">
                <p>冻结</p>
                <p><strong>30000.00</strong></p>
              </div>
            </div>
            <button @click="tixian">提现</button>
          </div>
          <div class="card">
            <div class="on"><strong>$(BTC)</strong></div>
            <div class="wraps">
              <div class="cont">
                <p>可用金额</p>
                <p><strong>30000.00</strong></p>
              </div>
              <div class="cont">
                <p>冻结</p>
                <p><strong>30000.00</strong></p>
              </div>
            </div>
            <button @click="tixian">提现</button>
          </div>
        </div>

        <div class="button">
          <button @click="chong">充值</button>
        </div>
      </div>
    </div>
  </div>
    <public-foot></public-foot>
  </div>
</template>

<script>
  export default {
    methods:{
      tixian(){
        this.$router.push('/property/deposit');
      },
      chong(){
        this.$router.push('/property/withdraw');
      }
    }
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
  .wrap{
    width: 730px;
    height: 155px;
    padding-top: 50px;
    display: flex;
    /*justify-content: space-between;*/
    .card{
      position: relative;
      width: 300px;
      height: 155px;
      border: 1px solid #516d8e;
      padding-left: 20px;
      border-radius: 5px;
      margin-right: 30px;
      &:last-child{
        float: right;
      }
      .on{
        position: absolute;
        font-size: 20px;
        color: #6594c9;
        width: 100px;
        background: #254161;
        text-align: center;
        top: -15px;

      }
      .wraps{
        display: flex;
        .cont{
          flex: 1;
         p{
           &:first-child{
             padding-top: 38px;
             color: #868e93;
             font-size: 12px;
           }
           &:last-child{
             color: #ebebeb ;
             font-size: 18px;
             line-height: 36px;
           }
         }
        }
      }
      button{
        width: 100px;
        height: 30px;
        font-size: 14px;
        color: #ebebeb;
        line-height: 30px;
        background: #356092;
        border: none;
        border-radius: 5px;
        margin-top: 8px;
      }
    }
  }
  .button{
   button{
     width: 320px;
     height: 46px;
     font-size: 14px;
     color: #ebebeb;
     line-height: 46px;
     background: #356092;
     border: none;
     border-radius: 5px;
     margin-top: 90px;
     text-align: center;
   }
  }
</style>
