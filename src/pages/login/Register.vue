<template>
  <div class="login">
    <div class="loginLogo" @click="$router.push('/')">
      <img src="../../assets/images/home/registerLogo.png">
    </div>
    <div class="loginMain">
      <div class="prompt">
        提示：
        <span>
          建议使用本人实名登记的手机号，如果不使用因此产生的一切风险和损失，本平台不予负责
        </span>
      </div>
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
        <input type="text" placeholder="验证码" v-model="post.code">
        <div>
          发送验证码
        </div>
      </div>
      <div class="bgDev">
        <input type="text" placeholder="密码" v-model="post.psw">
      </div>
      <div class="bgDev">
        <input type="text" placeholder="确认密码" v-model="post.surepsw">
      </div>
      <div class="isShow">
        <el-checkbox v-model="checked">我已阅读并同意 <span>《用户协议》</span></el-checkbox>
      </div>
      <div class="btn" @click="sub">
        注册
      </div>
      <div class="register">
        已有账号，<span @click="$router.push('/login')">立即登录</span>
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
        checked:true,
        post:{
          gj:'zh',
          tel:'',
          psw:'',
          surepsw:'',
          code:''
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
        }else  if(!this.post.code){
          this.$message({
            message: '验证码不能为空',
            type: 'warning'
          });
          return false
        }else  if(!this.post.psw){
          this.$message({
            message: '密码不能为空',
            type: 'warning'
          });
          return false
        }else  if(!this.post.surepsw){
          this.$message({
            message: '确认密码不能为空',
            type: 'warning'
          });
          return false
        }else  if(this.post.surepsw!=this.post.psw){
          this.$message({
            message: '两次密码不相同',
            type: 'warning'
          });
          return false
        }else{
          this.$message({
            message: '注册成功',
            type: 'success'
          });
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
      .prompt{
        width: 400px;
        color: #ff6939;
        font-size: 14px;
        margin-bottom: 20px;
        span{
          color: #b3b3b3;
        }
      }
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
            width: calc(~'100% - 120px');
            box-sizing: border-box;
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
      .isShow{
        display: flex;
        width: 400px;
        color: #ebebeb;
        span{
          color: #356092;
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
    .el-checkbox__input.is-checked .el-checkbox__inner{
      background-color: #333;
      border-color: #333;
    }
  }
</style>
