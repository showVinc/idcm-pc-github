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
          <div class="main">
            <div class="table-border">
              <table class="table">
                <thead>
                <tr>
                  <th>登录信息</th>
                  <th>登录IP</th>
                  <th>参考地点</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item,i in list">
                  <td>{{ item.date }}</td>
                  <td>{{ item.ip }}</td>
                  <td>{{ item.address }}</td>
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
        pagecount: 10    //  总页数
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
            date: '2017-10-25 14:38:13',
            ip: '45.55.***.***',
            address: `登录${p}`,
          })
        }

        this.list = data
      }
    }
  }
</script>
<style lang="less" scoped>
  .main {
    width: 60%;
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
      th, td {
        text-align: center;
        line-height: 40px;
        padding: 0 20px 0 30px;

        &:first-child {
          text-align: left;
        }
        &:last-child {
          text-align: right;
        }
      }

      th {
        color: #999;
        font-weight: normal;
        border-bottom: 1px solid #516d8e;
      }
      td {
        color: #ebebeb;
        border-bottom: 1px dashed #516d8e;
      }
    }
  }
</style>
