<template>
  <form class="skin-form">
    <h1 class="s-title">修改资金密码</h1>
    <div class="form-tip-1">{{ tel }}修改资金密码</div>

    <div class="form-item">
      <input type="password" placeholder="资金密码" v-model="form.oldpassword">
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
</template>

<script>
  export default {
    data () {
      return {
        tel: '+8618654685475',
        form: {
          oldpassword: '',                     //  旧资金密码
          newpassword: '',                     //  新资金密码
          confirmpassword: ''                  //  确认新资金密码
        }
      }
    },
    methods: {
      subForm () {
        let data = this.form

        let msg = ''
        if(!data.oldpassword) {
          msg = '请输入资金密码'
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

