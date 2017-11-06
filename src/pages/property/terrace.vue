<template>
  <div>
    <head-top :num="2"></head-top>
  <div class="skin-setting cc">
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
          <!-- <input v-model="post.num" placeholder="可用数量"></input>
          <el-form :inline="true" :model="formInline" class="demo-form-inline terace-select">
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
          </div> -->

          <div class="bgDev">
            <input type="text" placeholder="可用数量" v-model="post.num">
          </div>

          <!-- 平台 -->
          <div class="bgdev">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">

              <el-form-item>
                <el-select v-model="formInline.region" placeholder="活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>

          <div class="bgdev">
            <input type="text" placeholder="转出地址" v-model="post.ip">
          </div>

          <div class="bgdev">
            <input type="text" placeholder="转出数量" v-model="post.outnum">
          </div>


          <div class="bgdev">
            <input type="text" placeholder="资金密码" v-model="post.psw">
          </div>
          <div class="lastInput bgdev">
            <input type="text" placeholder="验证码" v-model="post.code">
            <img src="../../assets/images/home/yz.png">
          </div>
          <div class="lastInput bgdev">
            <input type="text" placeholder="验证码" v-model="post.code1">
            <div class="right">
              发送验证码
            </div>
          </div>
        </div >
        <div class="button"  @click="sub">
          <button>提交</button>
        </div>
      </div>
    </div>

  </div>
    <public-foot></public-foot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
        options: [{
          value: '平台1',
        }, {
          value: '平台2',
        }],
         post:{
          num:'',
          gj:'zh',
          tel:'',
          psw:'',
          code:'',
          code1:'',

          // ip
          ip:'',
          outnum:'',
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
//    },
 methods: {
      sub(){
        if(!this.post.num){
          this.$message({
            message: '可用数量不能为空',
            type: 'warning'
          });
          return false
        } else if(!this.formInline){
          this.$message({
            message: '平台选择不能为空',
            type: 'warning'
          });
          return false
        }else  if(!this.post.ip){
          this.$message({
            message: '转出地址不能为空',
            type: 'warning'
          });
          return false
        }else  if(!this.post.outnum){
          this.$message({
            message: '转出数量不能为空',
            type: 'warning'
          });
          return false
        }else  if(!this.post.psw){
          this.$message({
            message: '资金密码不能为空',
            type: 'warning'
          });
          return false
        }else  if(!this.post.code){
          this.$message({
            message: '验证码不能为空',
            type: 'warning'
          });
          return false
        }else  if(!this.post.code1){
          this.$message({
            message: '再次验证码不能为空',
            type: 'warning'
          });
          return false
        }else{
          this.$message({
            message: '提交成功',
            type: 'success'
          });
        }
      },
     onSubmit() {
       console.log('submit!');
     }
    },
  }
</script>
<style lang="less" scoped type="text/less">
  .title{
    font-size: 18px;
    color: #eaeaea;
    line-height: 36px;
  }
  .bgdev{
    position: relative;
    img{
      position: absolute;
      top: 10px;
      right: 0;
       width: 90px;
        height: 30px;
        float: right;
    }
    .right{
      position: absolute;
      right:0;
      width: 90px;
      height: 30px;
      background: #999;
      text-align: center;
      line-height: 28px;
      top:12px;
    }
  }
  .el-select{
    width: 352px;
    height: 44px;
    margin-bottom: 20px;
    .el-input__inner{
      background: #254161;
      border:1px solid #516d8e;
    }
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
      color: #eaeaea;
      img{
        width: 90px;
        height: 30px;
      }
    }
    .pos{
      position: relative;

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
<style type="text/less" lang="less">
  .cc{
   /*.el-input__icon+.el-input__inner {
    padding-right: 35px;
    width: 352px;
    height: 50px;
    color: #ebebeb;
  }
  .el-input__inner{
    background: #254161;
    border:1px solid #516d8e;
    padding-left: 20px;
  }*/
    .input{
      .bgdev{
        .el-select{
          .el-input__inner{
            width: 352px;
            height: 50px;
            background: #254161!important;
            border:1px solid #516d8e;
            color: #ebebeb;
          }
        }
        .el-form-item{
          margin-bottom: 10px;
        }
      }


    }
  }
</style>
