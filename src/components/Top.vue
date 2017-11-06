<template>
  <div class="htadTop">
    <div @click="$router.push('/')">
      <img src="../assets/images/home/logo.png">
    </div>
    <ul>
      <li v-for="(item,index) in topNav" :class="{'navActive':num==index&&num!=6}" @click="navClick(index)">
        <div>
          {{item.key?'':item.name}}
        </div>
        <el-select v-model="value" placeholder="请选择" v-if="item.key">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </li>
      <li v-show="!userInfo" @click="$router.push('/login')">
        <div>
          登录
        </div>
      </li>
      <li class="register" v-if="!userInfo" @click="$router.push('/register')">
        <div>
          注册
        </div>
      </li>
      <li v-if="userInfo" class="userInfo" @click="isShow">
        <img src="../assets/images/user.jpg">
        <div v-show="isUser" class="userWrap">
          <div class="userTit">
            <img src="../assets/images/user.jpg">
            <p>
              Elvis
              <span>
                UID:(HY553202)
              </span>
            </p>
          </div>
          <ul>
            <li @click="$router.push('/setting')">
              个人设置
            </li>
            <li @click="$router.push('/property')">
              个人资产
            </li>
            <li @click="remove">
              退出
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      num: Number
    },
    data() {
      return {
        topNav: [
          {name: '首页'},
          {name: '交易所'},
          {name: '资产'},
          {name: '新闻'},
          {name: '关于我们'},
          {name: '加入我们'},
          {name: '中文', key: 'lang'},
        ],
        isUser:false,
        userInfo:JSON.parse(localStorage.getItem('userInfo')),
        options: [
          {
            value: 'zh',
            label: '中文'
          },
//          {
//            value: 'en',
//            label: 'English'
//          }
        ],
        value: '中文'
      }
    },
    methods: {
      navClick(index) {
        switch (index) {
          case 0:
            this.$router.push('/')
            break;
          case 1:
            this.$router.push('/idcm')
            break;
          case 2:
            this.$router.push('/property')
            break;
          case 3:
            this.$router.push('/news')
            break;
          case 4:
            this.$router.push('/about')
            break;
          case 5:
            this.$router.push('/contact')
            break;
        }
      },
      isShow(){
        this.isUser = !this.isUser
      },
      remove(){
        localStorage.removeItem('userInfo')
        location.reload()
      }
    },
  }
</script>
<style lang="less" type="text/less" scoped>
  @media screen and (max-width: 1200px) {
    .htadTop{
      ul{
        li{
          width: 80px!important;
          min-width: 80px!important;
        }
      }
    }
  }
  .htadTop {
    height: 100px;
    width: 100%;
    background: #0a2131;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    color: #fff;
    align-items: center;
    padding: 0 60px;
    box-sizing: border-box;
    min-width: 1024px;
    ul {
      display: flex;
      align-items: center;
      color: #ebebeb;
      font-size: 18px;
      li {
        min-width: 100px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        img{
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        &.userInfo{
          .userWrap{
            position: absolute;
            top:50px;
            left: -80px;
            width: 200px;
            height: 200px;
            border:1px solid #4d4d4d;
            background: #0a2131;
            border-radius: 5px;
            .userTit{
              display: flex;
              border-bottom: 1px solid #4d4d4d;
              img{
                width: 30px;
                height: 30px;
                border-radius: 50%;
                margin: 15px;
              }
              p{
                font-size: 16px;
                color: #ebebeb;
                display: flex;
                justify-content: center;
                flex-direction: column;
                span{
                  font-size: 14px;
                  color: #b3b3b3;
                }
              }
            }
            ul{
              display: flex;
              flex-direction: column;
              li{
                padding: 15px;
                box-sizing: border-box;
                width: 100%;
                display: flex;
                justify-content: flex-start;
                color: #ebebeb;
                &:hover{
                  background: #436d9e;
                }
              }
            }
          }
        }
        &.register {
          div {
            padding: 1px 5px;
            background: #2e5075;
            border: 1px solid #356092;
            border-radius: 3px;
          }
        }
        &.navActive {
          &:before {
            content: '';
            width: 24px;
            height: 3px;
            background: #fff;
            position: absolute;
            bottom: 0;
            left: calc(~'50% - 12px');
          }
        }
      }
    }
  }
</style>
<style lang="less" type="text/less">
  .htadTop {
    .el-select {
      width: 100px;
    }
    .el-input__inner {
      width: 100%;
      border: none;
      background: #0a2131;
      font-size: 18px;
      color: #ebebeb;
      text-align: center;
      padding: 0 10px 0 0;
    }
  }
</style>
