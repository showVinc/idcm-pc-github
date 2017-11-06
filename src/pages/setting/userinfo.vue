<template>
  <div>
    <head-top :num="0"></head-top>
    <form class="skin-form">
      <h1 class="s-title">修改资料</h1>

      <div class="has-label">
        <span class="form-label">头像</span>

        <!--  el-upload:  elementUI 的组件 -->
        <div class="upload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">

          <el-upload
            class="upload-box"
            :action="uploadimgurl"
            :show-file-list="false"
            :on-error="uploadError"
            :on-success="uploadSuccess" >
            <span class="btn-upload">上传头像</span>
          </el-upload>
        </div>
      </div>


      <div class="has-label">
        <span class="form-label">性别</span>
        <el-radio-group v-model="form.gender" class="radios">
          <el-radio :label="1">男</el-radio>
          <el-radio :label="2">女</el-radio>
          <el-radio :label="3">保密</el-radio>
        </el-radio-group>

      </div>

      <div class="has-label">
        <span class="form-label">真实姓名</span>
        <div class="form-item">
          <input type="text" placeholder="请填写真实姓名" v-model="form.username">
        </div>
      </div>

      <div class="has-label">
        <span class="form-label">城市</span>
        <div class="form-item">
          <el-select v-model="form.city">
            <el-option v-for="item,i in areas" :key="i" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </div>
      </div>

      <div class="has-label">
        <span class="form-label">邮政编码</span>
        <div class="form-item">
          <input type="text" v-model="form.postalcode">
        </div>
      </div>

      <div class="has-label">
        <span class="form-label">电子邮箱</span>
        <div class="form-item">
          <input type="text" v-model="form.email">
        </div>
      </div>

      <div class="has-label">
        <span class="form-label">电话</span>
        <div class="form-item">
          <input type="text" v-model="form.tel">
        </div>
      </div>

      <div class="has-label">
        <span class="form-label">地址</span>
        <div class="form-item">
          <el-select v-model="form.address">
            <el-option v-for="item,i in address_list" :key="i" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </div>
      </div>

      <div class="form-sub-btn">
        <button class="btn btn-sub form-has-label" @click="subForm()" type="button">提交</button>
      </div>

    </form>
    <public-foot></public-foot>
  </div>


</template>

<script>
  export default {
    data () {
      return {
        tel: '+8618654685475',
        imageUrl: require('@/assets/images/user.jpg'),      //  上传图片时，前端预览图片的路径
        uploadimgurl: '',  //  上传图片地址
        areas: [
          {id: 1, name: '北京'},
          { id: 2, name: '深圳'}
        ],
        address_list: [
          {id: 1, name: '北京'},
          { id: 2, name: '深圳'}
        ],
        form: {
          fid: '1sadgsag',                      //  个人头像对应的图片唯一标识
          gender: 1,                            //  性别
          username: '',                         //  姓名
          city: '',                             //  城市
          postalcode: '',                       //  邮政编码
          email: '',                            //  电子邮箱
          tel: '',                              //  电话
          address: ''                           //  地址
        }
      }
    },
    methods: {
      uploadError(err, file, fileList) {  //  图片上传失败
        this.$message.error('上传失败')
      },
      uploadSuccess(res, file) {  //  图片上传成功
        /**
         * res:  服务器返回值
         * */
        this.form.fid = res.fid; // fid  图片唯一标识
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      subForm () {
        let data = this.form

        let msg = ''
        if(!data.fid) {
          msg = '请上传个人头像'
        }else if(!data.gender) {
          msg = '请选择性别'
        }else if(!data.username) {
          msg = '请输入真实姓名'
        }else if(!data.city) {
          msg = '请选择城市'
        }else if(!data.postalcode) {
          msg = '请输入邮政编码'
        }else if(!data.email) {
          msg = '请输入电子邮箱'
        }else if(!data.tel) {
          msg = '请输入电话'
        }else if(!data.address) {
          msg = '请选择地址'
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

<style lang="less" scope>
  .upload {
    &, .upload-box {
      display: inline-block;
    }

    margin: 20px 0;
    .avatar {
      width: 60px;
      height: 60px;
      display: inline-block;
      border-radius: 50%;
      margin-right: 65px;
      vertical-align: middle;
    }
    .btn-upload {
      color: #5ba6fe;
      font-size: 14px;
    }
  }

  .radios {
    color: #b3b3b3;
    margin: 10px 0;
  }


  .btn-sub.form-has-label {
    margin-left: 64px;
  }
</style>

<style lang="less">
  .radios {
    .el-radio__label {
      color: #b3b3b3;
      margin-left: 8px;
    }

    .el-radio__input .el-radio__inner {
      background: transparent;
      width: 16px;
      height: 16px;
      border: solid 1px rgba(53, 96, 146, 1);
    }

    .el-radio__input.is-checked .el-radio__inner {
      border: solid 1px rgba(53, 96, 146, 1);
      &:after {
        width: 10px;
        height: 10px;
        background-color: rgba(53, 96, 146, 1);
      }
    }

    .el-radio+.el-radio {
      margin-left: 25px;
    }
  }

</style>

