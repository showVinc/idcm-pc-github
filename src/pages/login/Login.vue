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
        <input type="text" placeholder="请输入手机号">
      </div>
      <div class="bgDev">
        <input type="text" placeholder="请输入密码">
      </div>
      <div class="lastInput bgDev">
        <input type="text" placeholder="验证码">
        <img src="../../assets/images/home/yz.png">
      </div>
      <div class="forget">
        <span @click="$router.push('/forget')">忘记密码</span>
      </div>
      <div class="btn">
        登录
      </div>
      <div class="register">
        没有账号，<span @click="$router.push('/register')">立即注册</span>
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
        value: '中国+86',
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
          padding-right:15px;
          input{
            width: calc(~'100% - 98px');
            box-sizing: border-box;
          }
          img{
            width: 98px;
            height: 34px;
          }
        }
      }
      .forget{
        display: flex;
        width: 400px;
        justify-content:flex-end;
        color: #356092;
        span{
          color: #356092;
          border-bottom: 1px solid #356092;
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
    }
    .register{
      font-size: 16px;
      margin-top: 50px;
      color: #ebebeb;
      span{
        color: #356092;
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
  }
</style>
