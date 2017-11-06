<template>
  <!--<head-top :num="2"></head-top>-->
<div>
  <head-top :num="2"></head-top>

  <div class="skin-setting bb">

    <h1 class="p-title">个人中心</h1>

    <div class="p-content">
      <!--  左侧菜单  -->
      <div class="p-aside">
        <idcm-left-menu :type="'property'"></idcm-left-menu>
      </div>

      <!--  右侧内容  -->
      <div class="p-article">
        <div class="title">
          法定货币资金互转
        </div>
        <div class="info">
          提示：交易前，你还需要完成 <b>安全设置</b> 和 <b>实名认证</b>
        </div>

        <!-- input -->

        <form class="skin-form p-accounts" style="min-height: 0;">

          <div class="has-label">
            <span class="form-label">从</span>
            <div class="form-item ff" style="width:36%">
              <el-select v-model="form.from">
                <el-option v-for="item,i in from" :key="i" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </div>
          </div>

           <div class="has-label">
            <span class="form-label">转账到</span>
            <div class="form-item ff" style="width:36%">
              <el-select v-model="form.to">
                <el-option v-for="item,i in to" :key="i" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </div>
          </div>

          <div class="has-label">
            <span class="form-label">转出金额</span>
            <div class="form-item ff" style="width:36%">
              <input type="text" v-model="form.over"  placeholder="0">
            </div>
          </div>

          <div class="has-label">
            <span class="form-label">资金密码</span>
            <div class="form-item ff" style="width:36%">
              <input type="text" v-model="form.psd"  placeholder="请输出资金密码">
            </div>
          </div>

          <div class="form-sub-btn"  style="padding:65px 0 0 84px;">
            <button class="btn btn-sub" @click="subForm()" type="button" style="width:36%">提添加银行卡交</button>
          </div>

        </form>

        <!-- tab -->
         <div class="main">
          <div class="table-border">
            <table class="table">
              <thead>
              <tr>
                <th>时间</th>
                <th>转账标识码</th>
                <th>转账资金来源账户</th>
                <th>转账资金到达账户</th>
                <th>转账汇率</th>
                <th>转出金额</th>
                <th>收到金额</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item,i in list">
                <td>{{ item.time }}</td>
                <td>{{ item.ip }}</td>
                <td>{{ item.money }}</td>
                <td>{{ item.procedure }}</td>
                <td>{{ item.sum }}</td>
                <td>{{ item.newmoney }}</td>
                <td>{{ item.remack }}</td>
              </tr>
              </tbody>
            </table>
          </div>


          <!-- 页码  -->
          <div class="page">
            <span class="item" @click="handlerPage(1)">首页</span>
            <el-pagination layout="prev,pager,next" :page-count="pagecount" @current-change="handlerPage"></el-pagination>
            <span class="item" @click="handlerPage(pagecount)">尾页</span>
          </div>
        </div>
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
        list: [],   //  当前表格中显示的数据
        pagecount: 10,    //  总页数


        // input
        from: [
          {id: 1, name: '支付宝'},
          { id: 2, name: '余额'},
          { id: 3, name: '银行卡'},
          { id: 4, name: '微信'},
        ],
        to: [
          {id: 1, name: '支付宝'},
          { id: 2, name: '余额'},
          { id: 3, name: '银行卡'},
          { id: 4, name: '微信'},
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
    mounted () {
      this.getList(1)
    },
    methods: {
      /**
       * 点击页码获取数据
       * */
      handlerPage(val) {
        if(val > 0 && val <= this.pagecount) {
          this.getList(val)
        }
      },

      /**
       * 获取记录列表
       * 参数 p: 页码
       * */
      getList(p) {
        let data = []
        let rows = 7   //  每页要显示的条数
        for(let k=0; k<rows; k++) {
          data.push({
            time: '2017-10-25 14:38:13',
            ip: '666666',
            // address: `登录${p}`,
            money:'BTC',
            procedure:'0,3324',
            sum:'12.000',
            newmoney:0.0005,
            remack:`666666${p}`
          })
        }

        this.list = data
      },

      // input
      subForm () {
        let data = this.form

        let msg = ''
        if(!data.from) {
          msg = '请选择转入方式'
        }else if(!data.to) {
          msg = '请选择转出方式'
        }else if(!data.over) {
          msg = '请输入余额'
        }else if(!data.psd) {
          msg = '请输入资金密码'
        }

        if(msg) {
          this.$message.error(msg)
        }else {
          //  提交表单
          //  to do
          //  ....

          this.$message.success('添加成功')
          // setTimeout(() => {
          //   this.$router.push({path: '/setting'})
          // }, 2000)
        }
      }
    }
  }
</script>
<style lang="less" scoped type="text/less">

  .title{
    font-size: 18px;
    color: #eaeaea;
    line-height: 36px;
  }
  .info{
    line-height: 40px;
    font-size: 12px;
    color: #c4c1c0;
  b{
    color: #ff6939;
    font-weight: normal;
  }
  }


/*tab*/
   .main {
    /*width: 75%;*/
    .page {
      float: right;
    }
  }
  .table-border {
    border: 1px solid #516d8e;
    border-radius: 5px;
    margin-top: 55px;
  }
  .table {
    width: 100%;
    border-collapse:collapse;
    font-size: 14px;

    tr {
      border-bottom: 1px dashed #516d8e;
      th, td {
        text-align: left;
        line-height: 40px;
        padding: 0 5px;

        &:first-child {
          text-align: left;
          padding-left: 15px;
        }
        &:last-child {
          padding-right: 15px;
        }
      }

      th {
        color: #999;
        font-weight: normal;
        border-bottom: 1px solid #516d8e;
      }
      td {
        color: #ebebeb;
      }
    }
  }

  .skin-form{
    margin-top: 60px;
    span{
      padding-right: 20px;
    }
  }
</style>
<style>
.bb{
  .p-accounts{
    .form-item ff{
      width: 36%;
    }
  }

 .skin-setting .skin-form .form-sub-btn {
    padding: 0 0;
    padding: 30px 0 0 86px;
  }
}
  .ff{

  }
</style>
