<!--  找回资金密码页面  -->

<template>
  <div>
    <head-top :num="0"></head-top>
    <form class="skin-form">
      <h1 class="s-title">找回资金密码</h1>
      <div class="form-tip-1">您正在为账户{{ uid }}重置资金密码</div>

      <div class="form-item">
        <input type="text" placeholder="手机号码" v-model="form.tel">
      </div>

      <div class="form-item">
        <input type="password" placeholder="确认资金密码" v-model="form.oldpassword">
      </div>

      <div class="form-item form-img-code">
        <input type="text" placeholder="验证码" v-model="form.imgcode">
        <img :src="codeimg" alt="">
      </div>

      <div class="form-item form-tel-code">
        <input type="text" placeholder="验证码" v-model="form.telcode">
        <button class="btn btn-code">发送验证码</button>
      </div>

      <div class="form-item">
        <input type="password" placeholder="新资金密码" v-model="form.newpassword">
      </div>

      <div class="form-item">
        <input type="password" placeholder="确认资金密码" v-model="form.confirmpassword">
      </div>

      <div class="form-sub-btn">
        <button class="btn btn-sub" @click="subForm()" type="button">提交</button>
      </div>

    </form>
    <public-foot></public-foot>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        uid: 'UID:(HY553202)',
        codeimg: require('@/assets/images/code.jpg'),  //验证码图片
        form: {
          tel: '',                             //  手机号
          oldpassword: '',                     //  旧资金密码
          imgcode: '',                         //  图片验证码
          telcode: '',                         //  短信验证码
          newpassword: '',                     //  新资金密码
          confirmpassword: ''                  //  确认新资金密码
        }
      }
    },
    methods: {
      subForm () {
        let data = this.form

        let msg = ''
        if(!data.tel) {
          msg = '请输入手机号'
        }else if(!data.oldpassword) {
          msg = '请输入资金密码'
        }else if(!data.imgcode) {
          msg = '请输入图形验证码'
        }else if(data.imgcode !== '2907') {
          msg = '图形验证码输入有误'
        }else if(!data.telcode) {
          msg = '请输入短信验证码'
        }else if(!data.newpassword) {
          msg = '请输入新资金密码'
        }else if(!data.confirmpassword) {
          msg = '请输入确认新资金密码'
        }else if(data.newpassword !== data.confirmpassword) {
          msg = '两次密码输入不一致'
        }

        if(msg) {
          this.$message.error(msg)
        }else {
          //  提交表单
          //  to do
          //  ....

          this.$message.success('提交成功')
          setTimeout(() => {
            this.$router.push({path: '/setting'})
          }, 2000)
        }
      }
    }
  }
</script>

