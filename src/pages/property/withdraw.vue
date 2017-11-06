<template>
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

        <form class="skin-form p-accounts"  style="min-height: 0;">

          <div class="has-label">
            <span class="form-label">虚拟币存入钱包地址</span>
            <div class="form-item ff" style="width:36%">
              <input type="text" v-model="form.psd"  placeholder="">
            </div>
          </div>

        </form>


        <div class="main">
          <div class="table-border">
            <table class="table">
              <thead>
              <tr>
                <th>存入时间</th>
                <th>存入标识码</th>
                <th>存入虚拟货币</th>
                <th>存入地址</th>
                <th>存入数量</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item,i in list">
                <td>{{ item.time }}</td>
                <td>{{ item.ip }}</td>
                <td>{{ item.money }}</td>
                <td>{{ item.procedure }}</td>
                <td>{{ item.num }}</td>
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
</template>

<script>
  export default {
    data () {
      return {
        list: [],   //  当前表格中显示的数据
        pagecount: 10,    //  总页数
        form: {
          psd: ''                           //  地址
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
            money:'1325602',
            procedure:'qweyhqwwuejjhsdfkahoiw***',
            num:0.0005,
          })
        }

        this.list = data
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
  .con{
    font-size: 14px;
    margin-top: 52px;
    p{
      line-height: 48px;
    }
  }

/*tab*/
   .main {
    width: 78%;
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
        padding: 0 5px;

        &:first-child {
          text-align: left;
          padding-left: 15px
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
