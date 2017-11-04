<template>
  <div class="login">
    <div class="loginLogo" @click="$router.push('/')">
      <img src="../../assets/images/home/logo.png">
    </div>
    <div class="loginMain">
      <div class="bgDev">
        <input type="text" placeholder="新登录密码" v-model="post.psw">
      </div>
      <div class="bgDev">
        <input type="text" placeholder="确认新密码"  v-model="post.surepsw">
      </div>
      <div class="lastInput bgDev">
        <input type="text" placeholder="验证码"  v-model="post.code">
        <img src="../../assets/images/home/yz.png">
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
        idNum:'身份证',
        post:{
          psw:'',
          surepsw:'',
          code:''
        }
      }
    },
    methods:{
      sub(){
        if(!this.post.psw){
          this.$message({
            message: '新密码不能为空',
            type: 'warning'
          });
          return false
        }else if(!this.post.surepsw){
          this.$message({
            message: '确认新密码不能为空',
            type: 'warning'
          });
          return false
        }else if(this.post.surepsw!=this.post.psw){
          this.$message({
            message: '两次密码不相同',
            type: 'warning'
          });
          return false
        }else if(!this.post.code){
          this.$message({
            message: '验证码不能为空',
            type: 'warning'
          });
          return false
        }else{
          this.$router.push({name:'Login',params:{isReset:1}})
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
