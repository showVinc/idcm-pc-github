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
              <dd>
                <p class='news-title'>{{item.title}}</p>
                <p class="news-times"><span>{{item.name}}</span><span>{{item.time}}</span><span>{{item.hourTime}}</span></p>
              </dd>
              <dt><img v-bind:src="item.img" alt=""></dt>
              <dd>
                <p class='news-content'>{{item.content}}</p>
                <p class='news-content'>泰晤士高等教育2018世界大学排名使用了13项“精心调节的绩效指标提供最全面且均衡的比较，得到学生、学者、大学领导、行业和政府的信赖。”其2018国际教育联盟评估
表的调查结果由普华永道独立审计，以确保数据的准确性，从而使该排名成为“全球此类排名中唯一经过全面独立审查的”。快速浏览该列表会发现，许多世界顶级学府都将增
设区块链教育课程及模块。这就表明，大学之间的法域竞争将把提供区块链技术课程作为各机构吸引最好的学术人才的竞争优势。
                </p>

                <p class='news-content'>许多行业已经转向区块链技术，并将其与机器学习和人工智能一起认定为转变全球经济的基础。而像高盛、微软以IBM等机构已经进入这一领域。学术界和政府如法炮制也只不
过是时间的问题。为了更好地了解大学如何将区块链技术纳入其课程从而保持相关性，ETHNews采访了泰晤士高等教育2018顶级大学列表中榜上有名的新加坡国立大学的Dr.
TAN Chuan Hoo。TAN对ETHNews表示：
                </p>
                <p class='news-content'>“区块链是一项在金融领域具有重要应用的新型颠覆性技术。我们信息系统专业的学生必须对最新技术具备坚实的了解，同时具备更新的技能组合从而在关键行业领域（如金
融行业）巧妙利用，这是十分重要的。今年，我们正为我们的计算（信息系统）学士学位课程开设金融科技专业方向。在这一专业方向，我们设有三个核心模块和三个选修模块
。而区块链技术模块是金融科技专业方向的三大核心模块之一。 ”
                </p>
                <p class='news-content'>许多行业已经转向区块链技术，并将其与机器学习和人工智能一起认定为转变全球经济的基础。也许会存在一个方程式描述高等教育机构的技术采用是如何展开的。这可能就解释了前瞻性学者在大型企业中有权势的经纪人之后就区块链的重要性达成共识的原因。无论如何
，似乎业界与学术界都将走在世界多国政府之前利用区块链技术的优势。如果描述这些关系的方程式并不存在，那么下列世界级的学术机构之一就可以找到。虽然泰晤士高等教
育2018列表上的几乎所有学校都有可能提供某种形式的区块链相关课程、社团或学会，但是 ETHNews也花了一些时间去确定这之中的一些领袖。
                </p>
                <p class='news-content'>泰晤士高等教育2018世界大学排名第二位的英国剑桥大学
                </p>
              </dd>
            </dl>
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
      this.getList(1)
    },
    methods: {
      sub(){

      }
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

  }
  .p-content{
    height: 1377px;
    overflow: hidden;
  }
  .skin-setting .p-article {
    width: 30%;
    height: 100%;
    margin-left: 1%;
    background: #254161;
    padding-left: 0;
    padding-top: 26px;
  }
  .skin-setting .p-aside {
    width: 69%;
    height: 100%;
    background: #254161;
  }
  .news-list{
    height:650px;
    padding: 54px 60px 35px;
    box-sizing: border-box;
    height: 248px;
   /* &:nth(1){
      background: red;
    };*/
    dd{
      p{
        font-size: 30px;
        span{
          font-size: 14px;
        }
      }
      .news-content{
        /*text-indent:34px;*/
        padding-bottom: 24px;
      }
    }
  }
  .news-list dt{
    /*width: 272px;
    height: 151px;
    margin-right:60px;*/
  }
  .news-list dt img{
    width:90%;
    max-height: 500px;
    min-height:350px;
    padding-bottom: 60px;
  }
  .news-list dd{
    color: #ebebeb;
    padding-bottom: 49px;
    /*border-bottom: 1px solid #516d8e;*/
    &:first-child{
      p{
        font-size:30px;
      }
    };
  }
  .news-list .news-title{
    font-size: 14px;

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
    font-size: 14px;
    color: #ebebeb;
  }
  .right{
    float: right;
    margin-right:60px;
  }

  .hot-aside{
    width: 266px;
    margin: 0 auto;
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


