<!--  加入我们  -->
<template>
  <div>
    <head-top :num="5"></head-top>
    <div class="skin-setting">
      <h1 class="p-title">加入我们</h1>

      <div class="p-content">
        <div class="item">
          <h5 class="i-title">高级软件开发工程师（2名）</h5>

          <div class="small-title">职位描述</div>
          <ul>
            <li>负责公司基础平台SOA化的建设</li>
            <li>负责公司开放平台系统的架构和开发</li>
            <li>财务系统及互联网金融网站的设计和开发</li>
          </ul>

          <div class="small-title">职位要求</div>
          <ul>
            <li>四年以上Java互联网开发经验，1年以上应用架构经验。</li>
            <li>精通Spring MVC，Mybatis,redis等常用开源组件。</li>
            <li>熟悉各种常用设计模式，能将设计模式应用到日常工作。</li>
            <li>熟悉至少一种较为常见的主流数据库及SQL语言，有一定的sql调优经验、Linux
操作系统、常用版本管理软件操作(如：svn,git)。</li>
            <li>熟悉多线程编程，有一定的jvm调优经验 。</li>
            <li>加分项： 熟悉dubbo系统，看过源码更好;熟悉开放平台建设，了解OAuth;
websocket socket.io;有金融或财务类应用系统建设经验者优先。</li>
            <li>计算机相关专业本科以上学历。</li>
            <li>具有良好的沟通表达能力和团队协作能力。</li>
          </ul>
        </div>

        <div class="address">地址: 香港中环 威灵顿街1号 荆威广场 13楼 1315室</div>
      </div>
    </div>
    <public-foot></public-foot>
  </div>
</template>

<style lang="less" scoped>
  .p-content {
    color: #ebebeb;
    padding: 70px;
    font-size: 14px;
    min-height: 656px;
    .item {
      margin-bottom: 30px;
    }
    .i-title {
      font-size: 14px;
      font-weight: bold;
      line-height: 16px;
      margin: 0;
    }
    .small-title {
      line-height: 15px * 2 + 14px;
      margin-top: 15px;
    }
    ul {
      margin: 0;
      padding: 0;
      li {
        line-height: 14px + 10px;
      }
    }
    .address {
      font-weight: bold;
      line-height: 16px;
      margin: 24px 0;
    }
  }
</style>
