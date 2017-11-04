<template>
  <div class="login">
    <div class="loginLogo" @click="$router.push('/')">
      <img src="../../assets/images/home/logo.png">
    </div>
    <div class="loginMain">
      <div class="bgDev">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="bgDev">
        <input type="text" placeholder="请输入手机号" v-model="post.tel">
      </div>
      <div class="lastInput bgDev">
        <input type="text" placeholder="验证码"  v-model="post.code">
        <img src="../../assets/images/home/yz.png">
      </div>
      <div class="lastInput bgDev">
        <input type="text" placeholder="验证码" v-model="post.msgcode">
        <div>
          发送验证码
        </div>
      </div>
      <div class="bgDev">
        <el-select v-model="idNum" placeholder="请选择">
          <el-option
            v-for="item in idList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="bgDev">
        <input type="text" placeholder="证件编号"  v-model="post.id">
      </div>
      <div class="text">
        如果用户未实名此项可不填
      </div>
      <div class="btn" @click="sub">
        下一步
      </div>
    </div>
    <public-foot></public-foot>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        options: [{
          value: 'zh',
          label: '中国+86'
        }, {
          value: 'en',
          label: 'English+99'
        }],
        idList: [{
          value: 'sfz',
          label: '身份证'
        }, {
          value: 'hz',
          label: '护照'
        }],
        value: '中国+86',
        idNum:'身份证',
        post:{
          gj:'zh',
          tel:'',
          code:'',
          msgcode:'',
          id:''
        }
      }
    },
    methods:{
      sub(){
        if(!this.post.tel){
          this.$message({
            message: '手机号不能为空',
            type: 'warning'
          });
          return false
        }else if(!this.post.code){
          this.$message({
            message: '验证码不能为空',
            type: 'warning'
          });
          return false
        }else if(!this.post.msgcode){
          this.$message({
            message: '短信验证码不能为空',
            type: 'warning'
          });
          return false
        }else{
          this.$router.push('/reset')
        }
      }
    }
  }
</script>
<style lang="less" type="text/less" scoped>
  .login{
    margin-top: -100px;
    padding-top: 60px;
    background-image: url('../../assets/images/home/bg.png');
    background-size: cover;
    width: 100%;
    height: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .loginLogo{
      margin-bottom: 50px;
    }
    .loginMain{
      width: 530px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: rgba(3,3,3,0.2);
      padding: 60px 0;
      border-radius: 5px;
      .bgDev{
        height: 56px;
        width: 400px;
        box-sizing: border-box;
        border:1px solid #bfcbd9;
        border-radius:4px;
        display: flex;
        align-items: center;
        margin: 10px 0;
        input{
          width: 100%;
          height: 56px;
          background: none;
          font-size: 16px;
          border:none;
          padding: 3px 10px;
          color: #fff;
          box-sizing: border-box;
        }
        &.lastInput{
          display: flex;
          justify-content: space-between;
          padding-right:15px;
          input{
            width: calc(~'100% - 120px');
            box-sizing: border-box;
          }
          img{
            width: 98px;
            height: 34px;
          }
          div{
            width: 120px;
            height: 38px;
            border-radius: 5px;
            text-align: center;
            line-height: 40px;
            background: #356092;
            color: #ebebeb;
            font-size: 14px;
          }
        }
      }
      .btn{
        width: 400px;
        height: 56px;
        background: #356092;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        margin-top: 30px;
      }
      .text{
        font-size: 16px;
        color: #ebebeb;
        width: 400px;
        padding-left: 30px;
      }
    }
  }
</style>
<style lang="less" type="text/less">
  .login{
    .el-input__inner{
      background: none;
      width: 400px;
      color: #fff;
      height: 56px;
      border: none;
    }
    .el-checkbox__input.is-checked .el-checkbox__inner{
      background-color: #333;
      border-color: #333;
    }
  }
</style>
