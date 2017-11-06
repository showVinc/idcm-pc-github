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
          委托管理
        </div>
        <div class="con">
           <p>BTC</p>
          <p>交易品种</p>
          <p>
            <span>时间点</span>
            <span>
              <div class="block">
                <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="选择日期"
                  :picker-options="pickerOptions0">
                </el-date-picker>
              </div>-
              <div class="block">
                <el-date-picker
                  v-model="value2"
                  align="right"
                  type="date"
                  placeholder="选择日期"
                  :picker-options="pickerOptions1">
                </el-date-picker>
              </div>
            </span>
            <span class="times">时间点</span>
            <span>7天</span>
            <span>15天</span>
            <span>30天</span>
          </p>
        </div>


        <div class="main">
          <div class="table-border">
            <table class="table">
              <thead>
              <tr>
                <th>时间</th>
                <th>类型</th>
                <th>货币</th>
                <th>交易品种</th>
                <th>委托价格</th>
                <th>总数量</th>
                <th>总金额</th>
                <th>剩余数量</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item,i in list">
                <td>{{ item.time }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.money }}</td>
                <td>{{ item.breed }}</td>
                <td>{{ item.delegation }}</td>
                <td>{{ item.nums }}</td>
                <td>{{ item.moneys }}</td>
                <td>{{ item.over }}</td>
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
        pagecount: 10,    //  总页数
         pickerOptions0: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
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
            type: '666666',
            // address: `登录${p}`,
            money:'BTC',
            breed:'BTC',
            delegation:'12,000',
            nums:'0,0005',
            moneys:'12012,00',
            over:'已完成',
            status:'已完成',
            remack:`已完成${p}`
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
    /*color: #eaeaea;*/
    line-height: 36px;
  }
  .con{
    font-size: 14px;
    margin-top: 52px;
    p{
      line-height: 48px;
      span{
        padding-right: 20px;
        &:first-child{
          width:100px;
        };
      }
    }
  }

/*tab*/
   .main {
    width: 100%;
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
          padding-left:15px;
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
</style>
<style lang="less" type="text/less">
.el-date-editor.el-input{
  width: 145px;
  input{
    background: #254161;
    border-color: #356092;
    height: 48px;
  }
}
  .block{
        margin-left: 10px;
        display: inline-block;
        div{
          display: inline-block;
          width: 145px;
          background: #254161;
        }
      }
      .el-input__inner{
        color: #ebebeb;
      }
</style>

