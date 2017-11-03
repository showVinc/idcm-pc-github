<template>
  <form class="skin-form">
    <h1 class="s-title">修改绑定手机</h1>
    <div class="form-tip-1">您正在为账户 {{ uid }} 绑定手机</div>
    <div class="form-tip-2">
      <span class="label">手机号</span>
      <span class="data"> {{ tel }}</span>
    </div>

    <div class="form-item form-img-code">
      <input type="text" placeholder="验证码" v-model="form.code">
      <img :src="codeimg" alt="">
    </div>

    <div class="form-item form-tel-code">
      <input type="text" placeholder="验证码" v-model="form.oldtelcode">
      <button class="btn btn-code">发送验证码</button>
    </div>

    <div class="form-item">
      <el-select v-model="form.type">
        <el-option v-for="item,i in tel_type" :key="i" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </div>

    <div class="form-item">
      <input type="text" placeholder="新手机号码" v-model="form.mobile">
    </div>

    <div class="form-item form-tel-code">
      <input type="text" placeholder="验证码" v-model="form.newtelcode">
      <button class="btn btn-code">发送验证码</button>
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
        uid: 'UID:(HY553202)',
        tel: '+8618654685475',
        codeimg: require('@/assets/images/code.jpg'),  //验证码图片
        tel_type: [
          {id: 1, name: '中国（+86）'},
          { id: 2, name: '英国（+55）'}
        ],
        form: {
          code: '',                 //  图片验证码
          oldtelcode: '',           //  第一个短信验证码
          type: '',                 //  手机号区号
          mobile: '',               //  手机号
          newtelcode: ''            //  第二个短信验证码
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
        }else if(!data.oldtelcode) {
          msg = '请输入短信验证码'
        }else if(!data.type) {
          msg = '请选择手机号码区号'
        }else if(!data.mobile) {
          msg = '请输入手机号'
        }else if(!data.newtelcode) {
          msg = '请输入新手机号码的短信验证码'
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

