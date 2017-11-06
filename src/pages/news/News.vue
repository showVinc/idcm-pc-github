<template>
  <div>
    <head-top :num="3"></head-top>

    <div class="skin-setting">
      <h1 class="p-title">新闻</h1>

      <div class="p-content">
        <!--  左侧菜单  -->
        <div class="p-aside">
          <div href="#" v-for='item in newsList'>
            <dl class="news-list"  @click="$router.push('/news/detail')">
              <dt><img v-bind:src="item.img" alt=""></dt>
              <dd>
                <p class='news-title'>{{item.title}}</p>
                <p class="news-times"><span>{{item.name}}</span><span>{{item.time}}</span><span>{{item.hourTime}}</span></p>
                <p class='news-content'>{{item.content}}</p>
              </dd>
            </dl>

          </div>


            <!-- 页码  -->
          <div class="page right">
            <span class="item" @click="handlerPage(1)">首页</span>
            <el-pagination layout="prev,pager,next" :page-count="pagecount" @current-change="handlerPage"></el-pagination>
            <span class="item" @click="handlerPage(pagecount)">尾页</span>
          </div>
        </div>

        <!--  右侧内容  -->
        <div class="p-article">
            <div class="hot-aside">
              <h2 class="p-hot">热门</h2>
              <div class="hot-cont"  v-for='item in hotList'>
                  <img v-bind:src="item.img" alt="">
                  <p class='hot-title'>{{item.title}}</p>
              </div>
            </div>
            <div class="hot-aside">
              <h2 class="p-hot">标签</h2>
              <div class="hot-cont">
                  <span class='hot-tag' v-for='item in tagList'>{{item}}</span>
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
    data() {
      return {
        newsList:[
          {"img":require("../../assets/images/home/bg.png"),"title":"泰晤士高等教育透露学术界正在采用区块链技术","name":"IDCMEX","time":"2016.10.6","hourTime":"10:30","content":"泰晤士高等教育（Times Higher Education）发布了2018世界大学排名，而榜上有名的许多顶级学府都为保持其领先优势而增设了区块链技术课程。区块链在业界，尤其是金融届的应用已经发展的如火如荼，而如今..."},
          {"img":require("../../assets/images/home/bg.png"),"title":"泰晤士高等教育透露学术界正在采用区块链技术","name":"IDCMEX","time":"2016.10.6","hourTime":"10:30","content":"泰晤士高等教育（Times Higher Education）发布了2018世界大学排名，而榜上有名的许多顶级学府都为保持其领先优势而增设了区块链技术课程。区块链在业界，尤其是金融届的应用已经发展的如火如荼，而如今..."},
          {"img":require("../../assets/images/home/bg.png"),"title":"泰晤士高等教育透露学术界正在采用区块链技术","name":"IDCMEX","time":"2016.10.6","hourTime":"10:30","content":"泰晤士高等教育（Times Higher Education）发布了2018世界大学排名，而榜上有名的许多顶级学府都为保持其领先优势而增设了区块链技术课程。区块链在业界，尤其是金融届的应用已经发展的如火如荼，而如今..."},
          {"img":require("../../assets/images/home/bg.png"),"title":"泰晤士高等教育透露学术界正在采用区块链技术","name":"IDCMEX","time":"2016.10.6","hourTime":"10:30","content":"泰晤士高等教育（Times Higher Education）发布了2018世界大学排名，而榜上有名的许多顶级学府都为保持其领先优势而增设了区块链技术课程。区块链在业界，尤其是金融届的应用已经发展的如火如荼，而如今..."},
          {"img":require("../../assets/images/home/bg.png"),"title":"泰晤士高等教育透露学术界正在采用区块链技术","name":"IDCMEX","time":"2016.10.6","hourTime":"10:30","content":"泰晤士高等教育（Times Higher Education）发布了2018世界大学排名，而榜上有名的许多顶级学府都为保持其领先优势而增设了区块链技术课程。区块链在业界，尤其是金融届的应用已经发展的如火如荼，而如今..."},
        ],
        hotList:[
            {"img":require("../../assets/images/home/bg1.png"),"title":"shapeshift支持augur的去中心化预测市场 信用代币，声誉（REP）"},
            {"img":require("../../assets/images/home/bg1.png"),"title":"shapeshift支持augur的去中心化预测市场 信用代币，声誉（REP）"}
        ],
        tagList:['火币网（10）','比特币（10）','香港（10）','中国（10）','汇集（10）','香港（10）','中国（10）','汇集（10）'],
        pagecount: 10   //  总页数
      }
    },
    mounted () {
    },
    methods: {
      sub(){

      },
      /**
       * 点击页码获取数据
       * */
       handlerPage(val) {

       },

      /**
       * 获取记录列表
       * 参数 p: 页码
       * */
      // getList(p) {
      //   let data = []
      //   let rows = 7   //  每页要显示的条数
      //   for(let k=0; k<rows; k++) {
      //     data.push({
      //       time: '2017-10-25 14:38:13',
      //       ip: '666666',
      //       money:'1325602',
      //       procedure:'qweyhqwwuejjhsdfkahoiw***',
      //       num:0.0005,
      //     })
      //   }

      //   this.list = data
      // }
    }

  }
</script>
<style lang="less" type="text/less" scoped>
  @media screen and (max-width: 1200px) {

  }
  .skin-setting{
    height: 100%;
  }
  .skin-setting .p-content{
    background: transparent;
    min-width: 980px;
  }
  .p-content{
    max-height: 1630px;
    overflow: hidden;
  }
  .skin-setting .p-article {
    width: 30%;
    height: 1910px;
    margin-left: 1%;
    background: #254161;
    padding-left: 0;
    padding-top: 26px;
  }
  .skin-setting .p-aside {
    width: 69%;
    background: #254161;
    height: 1910px;
  }
  .news-list{
    height:650px;
    padding: 54px 60px 35px;
    box-sizing: border-box;
    max-height: 300px;
    padding-bottom: 0;
    dt{
      float: left;
      width: 49%;
      height: 151px;
      margin-right:60px;

      min-height: 200px;
      img{
        width: 100%;
        height: auto;
        min-height: 150px;
        object-fit: cover;
      }

    }
    dd{
      float: right;
      width: 39%!important;
      color: #ebebeb;
      padding-bottom: 49px;
      border-bottom: 1px solid #516d8e;
      p{
        color: #ebebeb;
      }
    }
   /* &:nth(1){
      background: red;
    };*/
    &:hover{
        background:#283b4f;
        color: #fff;
      };
      dd{
        /*height: auto;*/
        height:195px;
      }
  }
  /*.news-list dt{*/
    /*float: left;*/
    /*width: 272px;*/
    /*height: 151px;*/
    /*margin-right:60px;*/
  /*}*/
  /*.news-list dt img{*/

  /*}*/
  /*.news-list dd{*/

  /*}*/
  .news-list .news-title{
    font-size: 14px;
    color:#ebebeb;

  }
  .news-list .news-times{
    font-size: 10px;
    color: #8e9093;
    margin-top: 14px;
    margin-bottom: 20px;
  }
   .news-list .news-times span{
    display: inline-block;
    margin-right: 15px;
  }
  .news-list .news-content{
    font-size: 12px;
    color: #8e9093;
    line-height:20px;
  }
  .right{
    float: right;
    margin-right:60px;
  }

  .hot-aside{
    width: 266px;
    padding: 0 30px;
    margin-bottom: 110px;
  }
  .p-hot{
    font-size: 16px;
  }
  .hot-cont{
    width:266px;
    margin-top: 20px;
    span{
      &:hover{
        background:#516d8e;
        color: #fff;
      };
    }
  }
  .hot-cont img{
    width: 266px;
    height: 132px;
    object-fit: cover;
  }
  .hot-cont .hot-title{
    color: #ebebeb;
    font-size: 14px;
    line-height: 20px;
  }
  .hot-cont .hot-tag{
    display:inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 8px 10px;
    color: #666666;
    font-size: 14px;
    border-radius:5px;
    background:#dce1e5;
  }
</style>
<style lang="less" type="text/less">

</style>


