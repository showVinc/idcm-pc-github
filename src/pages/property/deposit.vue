<template>
  <div>
    <head-top :num="2"></head-top>
  <div class="skin-setting">
    <h1 class="p-title">个人中心</h1>

    <div class="p-content">
      <!--  左侧菜单  -->
      <div class="p-aside">
        <idcm-left-menu :type="'property'"></idcm-left-menu>
      </div>

      <!--  右侧内容  -->
      <div class="p-article">
        <div class="title">
          虚拟货币提取
        </div>
       <!--  <div class="con">
          <p>BTC</p>
          <p>交易品种</p>
          <p><span>时间点</span></p>
        </div> -->


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
            <span class="form-label">请选择钱包</span>
            <div class="form-item ff" style="width:36%">
              <el-select v-model="form.to">
                <el-option v-for="item,i in to" :key="i" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </div>
          </div>

          <div class="has-label">
            <span class="form-label">转出数量</span>
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

         <!--  <div class="form-sub-btn"  style="padding:65px 0 0 84px;">
            <button class="btn btn-sub" @click="subForm()" type="button" style="width:36%">提添加银行卡交</button>
          </div> -->

        </form>

        <div class="main">
          <div class="table-border">
            <table class="table">
              <thead>
              <tr>
                <th>提取时间</th>
                <th>提取标识码</th>
                <th>提取虚拟货币</th>
                <th>提取钱包地址</th>
                <th>虚拟币手续费</th>
                <th>货币手续费</th>
                <th>状态</th>
                <th>操作</th>
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
                <td>{{ item.status }}</td>
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
        pagecount: 10 ,   //  总页数
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
            money:'1,325606',
            procedure:'qweyhqwwuejj hsdfkahoiw***',
            sum:'0.0005',
            newmoney:0.0005,
            status:'已完成',
            remack:`已完成${p}`
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
      }
    }
  }
</script>
<style lang="less" scoped type="text/less">
    .title{
    font-size: 18px;
    /*color: #eaeaea;*/
    line-height: 36px;
  }
  .con{
    font-size: 14px;
    margin-top: 52px;
    p{
      line-height: 48px;
    }
  }

/*tab*/
   .main {
    width: 100%;
     min-width: 719px;
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
      border-bottom: 1px  dashed #516d8e;
      th, td {
        text-align: left;
        line-height: 40px;
        padding: 0 5px 0 5px;
        &:nth-child(4){
          max-width: 102px;
        }

        &:first-child {
          text-align: left;
          padding-left: 15px;
          width: 85px;
        }
        &:last-child {
          /*text-align: right;*/
          padding-right: 15px
        }
        &:nth-child(3){
          text-overflow:ellipsis;

          white-space:nowrap;

          overflow:hidden;
        };
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
  .p-content{
    min-width: 1200px;
  }
</style>
