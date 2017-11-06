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
    </ul>
  </div>
</template>
<script>
  export default {
    props:{
      num:Number
    },
    data(){
      return{
        topNav:[
          {name:'首页'},
          {name:'交易所'},
          {name:'资产'},
          {name:'新闻'},
          {name:'关于我们'},
          {name:'加入我们'},
          {name:'中文',key:'lang'},
          {name:'登录'},
          {name:'注册'}
        ],
        options: [{
          value: 'zh',
          label: '中文'
        }, {
          value: 'en',
          label: 'English'
        }],
        value: '中文'
      }
    },
    methods:{
      navClick(index){
        switch (index){
          case 1:
            this.$router.push('/idcm')
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
          case 7:
            this.$router.push('/login')
            break;
          case 8:
            this.$router.push('/register')
            break;
        }
      }
    },
  }
</script>
<style lang="less" type="text/less" scoped>
  .htadTop{
    height:100px;
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
    ul{
      display: flex;
      align-items: center;
      color: #ebebeb;
      font-size: 18px;
      li{
        min-width: 100px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        &:last-child{
          div{
            padding: 1px 5px;
            background: #2e5075;
            border:1px solid #356092;
            border-radius: 3px;
          }
        }
        &.navActive{
          &:before{
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
  .htadTop{
    .el-select{
      width: 100px;
    }
    .el-input__inner{
      width: 100%;
      border:none;
      background: #0a2131;
      font-size: 18px;
      color: #ebebeb;
      text-align: center;
      padding: 0 10px 0 0;
    }
  }
</style>
