<template>
  <div>
    <head-top :num="0"></head-top>
    <div class="skin-setting">
      <h1 class="p-title">个人中心</h1>

      <div class="p-content">
        <!--  左侧菜单  -->
        <div class="p-aside">
          <idcm-left-menu :type="'setting'"></idcm-left-menu>
        </div>

        <!--  右侧内容  -->
        <div class="p-article">
          <form class="skin-form">
            <h1 class="s-title">实名认证</h1>
            <div class="orange-tip">提示：您必须年满18岁才可以进行身份证验证，没有年龄上限，但60岁以上的人不建议交易比特币，考虑价格波动和风险承受能力。</div>

            <div class="form-item">
              <input type="text" placeholder="真实姓名" v-model="form.username">
            </div>

            <div class="form-item">
              <el-select v-model="form.type" placeholder="请选择ID证件">
                <el-option v-for="item,i in card_type" :key="i" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </div>

            <div class="form-item">
              <input type="text" placeholder="证件编号" v-model="form.card">
            </div>

            <div class="upload-img">
              <div class="up-title">证件正面照</div>
              <el-upload
                class="up-upload"
                :action="uploadimgurl"
                :show-file-list="false"
                :on-error="uploadError"
                :on-success="uploadFrontSuccess">
                <img v-if="front_url" :src="front_url" class="avatar">
                <div v-else>
                  <img class="up-img-tip" :src="upimgurl" alt="">
                </div>
              </el-upload>
            </div>

            <div class="upload-img" style="margin-top: 20px;">
              <div class="up-title">证件反面照</div>
              <el-upload
                class="up-upload"
                :action="uploadimgurl"
                :show-file-list="false"
                :on-error="uploadError"
                :on-success="uploadBackSuccess">
                <img v-if="back_url" :src="back_url" class="avatar">
                <div v-else>
                  <img class="up-img-tip" :src="upimgurl" alt="">
                </div>
              </el-upload>
            </div>

            <div class="upload-tip">ID必须晰原色数码版本，它可以是扫描或者招聘拍摄通过数码相机，<br />仅支持JPG/JPEG/BMG大小不超过2m</div>

            <div class="form-sub-btn">
              <div class="check">
                <el-checkbox v-model="form.condition">我保证提交的所有信息属于我自己，没有窃取他人的文档行文。</el-checkbox>
              </div>
              <button class="btn btn-sub" @click="subForm()" type="button">提交</button>
            </div>

          </form>
        </div>
      </div>
    </div>
    <public-foot></public-foot>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        uploadimgurl: '',           //  上传图片URL
        upimgurl: require('@/assets/images/setting/upimgtip.jpg'),        //  上传图片背景提示图
        front_url: '',              //  正面照图片预览路径
        back_url: '',               //  反面照图片预览路径
        card_type: [
          {id: 1, name: '身份证'}
        ],
        form: {
          username: '',             //  真实姓名
          type: '',                 //  证件类型
          card: '',                 //  证件编号
          front_fid: '',            //  证件正面照
          back_fid: '',             //  证件反面照
          condition: false
        }
      }
    },
    methods: {
      uploadError(err, file, fileList) {  //  图片上传失败
        this.$message.error('上传失败')
      },
      uploadFrontSuccess(res, file) {  //  正面照 图片上传成功
        /**
         * res:  服务器返回值
         * */
        this.form.front_fid = res.fid; // fid  图片唯一标识
        this.front_url = URL.createObjectURL(file.raw);
      },
      uploadBackSuccess(res, file) {  //  反面照 图片上传成功
        /**
         * res:  服务器返回值
         * */
        this.form.back_fid = res.fid; // fid  图片唯一标识
        this.back_url = URL.createObjectURL(file.raw);
      },
      subForm () {
        let data = this.form

        let msg = ''
        if(!data.username) {
          msg = '请输入真实姓名'
        }else if(!data.type) {
          msg = '请选择证件类型'
        }else if(!data.card) {
          msg = '请输入证件编号'
        }else if(!data.front_fid) {
          msg = '请上传证件正面照'
        }else if(!data.back_fid) {
          msg = '请上传证件正面照'
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
<style lang="less" scoped>
  .upload-img {
    .up-title {
      line-height: 36px;
      color: #ebebeb;
    }
    .up-upload {
      margin: 10px 0;
      width: 200px;
      height: 125px;
      background-color: rgba(42, 75, 113, 1);
      border: dashed 1px rgba(81, 109, 142, 1);
      text-align: center;
      color: #b3b3b3;
      .icon {
        margin-top: 40px;
      }
    }
  }

  .check {
    margin-bottom: 10px;
  }
  .upload-tip {
    font-size: 14px;
    line-height: 20px;
    color: #c4c4c4;
  }
  .orange-tip {
    font-size: 14px;
    line-height: 36px;
    color: #ff6939;
    margin-top: -40px;
  }
</style>

<style lang="less">
  .upload-img .up-upload .el-upload {
    width: 100%;
    height: 100%;
  }
  .check {
    .el-checkbox__label {
      color: #ebebeb;
    }
    .el-checkbox__inner {
      width: 14px;
      height: 14px;
      border: solid 1px rgba(235, 235, 235, 1);
      background: transparent;
      border-radius: 0;
    }
  }
</style>
