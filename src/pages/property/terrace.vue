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
          平台互转
        </div>
        <div class="input">
          <input v-model="post.num" placeholder="可用数量"></input>
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item>
              <el-select v-model="formInline.region" placeholder="平台">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>

          <input v-model="post.num" placeholder="转出地址"></input>
          <input v-model="post.num" placeholder="转出数量"></input>
          <input v-model="post.num" placeholder="资金密码"></input>

          <div class="pos">
            <input v-model="post.num" placeholder="验证码"></input>
            <div class="right right1">
              49a7
            </div>
          </div>
          <div class="pos">
            <input v-model="post.num" placeholder="验证码"></input>
            <div class="right right2">
              发送验证码
            </div>
          </div>
        </div >
        <div class="button">
          <button>提交</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        post:{
          num:'',
          userEmail:'',
          theme:'',
          text:'',

        },
        formInline: {
          user: '',
          region: ''
        }
      }
    },
//    components: {
//      Top,
//      Foot
//    }
  }
</script>
<style lang="less" scoped type="text/less">
  .title{
    font-size: 18px;
    color: #eaeaea;
    line-height: 36px;
  }
  .input{
    width: 340px;
    padding-top: 50px;
    input{
      width: 310px;
      height: 44px;
      background: #254161;
      border:1px solid #516d8e;
      border-radius: 5px;
      margin-bottom: 20px;
      padding:3px 20px;
      display: block;
      color: #b3b3b3;
    }
    .pos{
      position: relative;
      .right{
        position: absolute;
        right:0;
        top:0;
      }
      .right1{
        width: 85px;
        height: 28px;
        background: #999;
        text-align: center;
        line-height: 28px;
        top:12px;
      }
      .right2{
        width: 139px;
        height: 40px;
        background: #356092;
        text-align: center;
        line-height: 40px;
        top:5px;
        border-radius: 5px;
      }
    }
  }
  .button{
    margin-top: 44px;
    button{
      width: 350px;
      height: 46px;
      font-size: 14px;
      color: #ebebeb;
      line-height: 46px;
      background: #356092;
      border: none;
      border-radius: 5px;
      text-align: center;
    }
  }
</style>
<style type="text/less">
  .el-input__icon+.el-input__inner {
    padding-right: 35px;
    width: 352px;
    height: 50px;
  }
  .el-input__inner{
    background: #254161;
    border:1px solid #516d8e;
    padding-left: 20px;
  }
</style>
