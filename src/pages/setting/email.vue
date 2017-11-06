<template>
  <div>
    <head-top :num="0"></head-top>
    <form class="skin-form">
      <h1 class="s-title">绑定邮箱</h1>
      <div class="form-tip-2">
        <span class="label">电子邮箱</span>
        <span class="data"> {{ email }}</span>
      </div>

      <div class="form-item form-img-code">
        <input type="text" placeholder="验证码" v-model="form.code">
        <img :src="codeimg" alt="">
      </div>

      <div class="form-item form-tel-code">
        <input type="text" placeholder="电子邮箱验证码" v-model="form.emailcode">
        <button class="btn btn-code">发送验证码</button>
      </div>

      <div class="form-item">
        <input type="text" placeholder="新电子邮箱" v-model="form.email">
      </div>

      <div class="form-item form-tel-code">
        <input type="text" placeholder="新电子邮箱验证码" v-model="form.newemailcode">
        <button class="btn btn-code">发送验证码</button>
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
        email: '656847@**.com',
        codeimg: require('@/assets/images/code.jpg'),  //验证码图片
        form: {
          code: '',                      //  图片验证码
          emailcode: '',                 //  电子邮箱验证码
          email: '',                     //  邮箱
          newemailcode: ''               //  新电子邮箱验证码
        }
      }
    },
    methods: {
      subForm () {
        let data = this.form

        let msg = ''
        if(!data.code) {
          msg = '请输入图形验证码'
        }else if(data.code !== '2907') {
          msg = '图形验证码输入有误'
        }else if(!data.emailcode) {
          msg = '请输入电子邮箱验证码'
        }else if(!data.email) {
          msg = '请输入邮箱'
        }else if(!data.newemailcode) {
          msg = '请输入新电子邮箱验证码'
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

