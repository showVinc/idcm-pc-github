<template>
  <div>
    <head-top :num="0"></head-top>
    <div class="homeTop">
      <div v-for="item in homeTop">
        {{item.name}}
        <span class="percentage" :class="{'color':item.status}">{{item.percentage}}</span>
        <span class="price">{{item.price}}</span>
      </div>
    </div>
    <div class="homeBg">
      <div class="bgWrap" v-if="!userInfo">
        <div class="bgLeft">
          最快捷的虚拟资产交易
          <p>IDCMEX专业人士和机构专注于比特币的资产置换</p>
          <div @click="$router.push('/idcm')">
            交易中心
          </div>
        </div>
        <div class="bgRight">
          <div class="bgDev">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="bgDev">
            <input type="text" placeholder="请输入手机号" v-model="post.tel">
          </div>
          <div class="bgDev">
            <input type="password" placeholder="请输入密码" v-model="post.psw">
          </div>
          <div class="lastInput bgDev">
            <input type="text" placeholder="验证码" v-model="post.code">
            <img src="../assets/images/home/yz.png">
          </div>
          <div class="forget">
            <span @click="$router.push('/forget')">忘记密码</span>
          </div>
          <div class="btn" @click="sub">
            登录
          </div>
        </div>
      </div>
    </div>
    <div class="homeMain">
      <div class="mainWrap">
        <div class="buy">
          <p>实时成交</p>
          <ul>
            <li>
              <span>交易量</span>
              <span>价格（USD）</span>
              <span>时间</span>
            </li>
            <li v-for="item in market">
              <span>{{item.num}}</span>
              <span>{{item.price}}</span>
              <span>{{item.create_time}}</span>
            </li>
          </ul>
        </div>
        <div class="buy">
          <p>买</p>
          <ul>
            <li>
              <span>交易量</span>
              <span>价格（USD）</span>
              <span></span>
            </li>
            <li v-for="item in buy1">
              <span>{{item.num}}</span>
              <span>{{item.price}}</span>
              <span>{{item.create_time}}</span>
            </li>
          </ul>
        </div>
        <div class="buy">
          <p>买</p>
          <ul>
            <li>
              <span>交易量</span>
              <span>价格（USD）</span>
              <span></span>
            </li>
            <li v-for="item in buy1">
              <span>{{item.num}}</span>
              <span>{{item.price}}</span>
              <span>{{item.create_time}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="marketPrice">
        <ul>
          <li v-for="item in marketPrice">
            {{item.name}}
            <span :class="{'priceActive':item.status}">{{item.price}}</span>
          </li>
        </ul>
      </div>
      <div class="marketImg">
        <img src="../assets/images/home/footImg.png">
      </div>
    </div>
    <div class="homeFoot">
      <div class="footFirst">
        <div class="title">安全专业的数字交易平台</div>
        <div class="footMain">
          <div>
            <p>
              安全
              <span>
              通过单独的钱包并且验证最先进的加密方式
            </span>
            </p>
            <p>
              多种货币
              <span>
              美元、欧元、英镑、人民等多种货币与比特币切换交易
            </span>
            </p>
          </div>
          <div>
            <p>
              费用小
              <span>
              最低手续费，进行现金的提现与比特币的充值
            </span>
            </p>
            <p>
              速度快，覆盖广
              <span>
              在全球任何一个国家，任何一个地方可以随时随地的进行比特币交易
            </span>
            </p>
          </div>
        </div>
      </div>
      <div class="footLast">
        <img src="../assets/images/home/bg1.png">
        <img src="../assets/images/home/bg2.png">
        <img src="../assets/images/home/bg3.png">
        <img src="../assets/images/home/bg4.png">
      </div>
    </div>
    <public-foot></public-foot>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        imgNum: 1,
        userInfo:JSON.parse(localStorage.getItem('userInfo')),
        homeTop: [
          {
            name: 'CMY/BTC',
            percentage: '3.21%',
            price: '284757.33 CMY'
          },
          {
            name: 'USB/BTC',
            percentage: '3.21%',
            price: '3002.00 USD'
          },
          {
            name: 'USB/BTC',
            percentage: '-3.21%',
            price: '3002.00 USD',
            status:2
          },
          {
            name: 'USB/BTC',
            percentage: '3.21%',
            price: '3002.00 USD'
          }
        ],
        options: [{
          value: 'zh',
          label: '中国+86'
        }, {
          value: 'en',
          label: 'English+99'
        }],
        value: '中国+86',
        market:[
          {
            num:'5.00000000',
            price:'5674.06',
            create_time:'10:33:58',
          },
          {
            num:'5.00000000',
            price:'5674.06',
            create_time:'10:33:58',
          }
        ],
        buy1:[
          {
            num:'5.00000000',
            price:'5674.06',
            create_time:'-',
          },
          {
            num:'5.00000000',
            price:'5674.06',
            create_time:'-',
          }
        ],
        marketPrice:[
          {
            name:'BTC最新价格',
            price:'$6383.0000',
            status:1
          },
          {
            name:'24h最低价',
            price:'$6383.0000'
          },
          {
            name:'24h最高价',
            price:'$6383.0000'
          },
          {
            name:'涨幅',
            price:'8.36%',
            status:1
          },
          {
            name:'24h成交量',
            price:'$6383.0000'
          }
        ],
        post:{
          gj:'zh',
          tel:'',
          psw:'',
          code:''
        }
      }
    },
    methods: {
      sub(){
        if(!this.post.tel){
          this.$message({
            message: '手机号不能为空',
            type: 'warning'
          });
          return false
        }else  if(!this.post.psw){
          this.$message({
            message: '密码不能为空',
            type: 'warning'
          });
          return false
        }else  if(!this.post.code){
          this.$message({
            message: '验证码不能为空',
            type: 'warning'
          });
          return false
        }else{
          this.$message({
            message: '登录成功',
            type: 'success'
          });
          localStorage.setItem('userInfo',JSON.stringify(this.post))
          this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
        }
      }
    },
    mounted() {
    }
  }
</script>
<style lang="less" type="text/less" scoped>
  @media screen and (max-width: 1200px) {
    .homeBg{
      .bgLeft{
        width: 400px!important;
      }
      .bgRight{
        width: 450px!important;

      }
    }
    .homeMain{
      .mainWrap{
        width: 980px!important;
        .buy{
          width: 300px!important;
        }
      }
      .marketPrice{
        width: 980px!important;
      }
    }
    .marketImg{
      width: 980px!important;
    }
  }
  .homeTop{
    display: flex;
    color: #fff;
    background: #122e4f;
    font-size: 14px;
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: space-around;
    min-width: 980px;
    span{
      &.percentage{
        color: #7aed5a;
        padding: 0 10px 0 5px;
        &.color{
          color: #ff7039;
        }
      }
      &.price{
        color: #d7e9ff;
      }
    }
  }
  .homeBg{
    width: 100%;
    max-height: 920px;
    min-width: 1024px;
    height: 920px;
    background-image: url('../assets/images/home/banner1.jpg');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    .bgWrap{
      display: flex;
      .bgLeft{
        width: 530px;
        font-size: 38px;
        color: #ebebeb;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-right: 50px;
        p{
          font-size: 24px;
          margin: 30px 0 50px;
        }
        div{
          width: 240px;
          height: 50px;
          background: #2c5179;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .bgRight{
        width: 530px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgba(3,3,3,0.4);
        padding: 60px 0;
        border-radius: 5px;
        .bgDev{
          height: 56px;
          width: 400px;
          box-sizing: border-box;
          border:1px solid #bfcbd9;
          border-radius:4px;
          display: flex;
          align-items: center;
          margin: 10px 0;
          input{
            width: 100%;
            height: 56px;
            background: none;
            font-size: 16px;
            border:none;
            padding: 3px 10px;
            color: #fff;
            box-sizing: border-box;
          }
          &.lastInput{
            display: flex;
            padding-right:15px;
            input{
              width: calc(~'100% - 98px');
              box-sizing: border-box;
            }
            img{
              width: 98px;
              height: 34px;
            }
          }
        }
        .forget{
          display: flex;
          width: 400px;
          justify-content:flex-end;
          color: #356092;
          span{
            color: #356092;
            border-bottom: 1px solid #356092;
          }
        }
        .btn{
          width: 400px;
          height: 56px;
          background: #356092;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          margin-top: 30px;
        }
      }
    }
  }
  .homeMain{
    background: #254161;
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    align-items:center ;
    min-width: 1024px;
    .mainWrap{
      display: flex;
      justify-content: space-between;
      width: 1200px;
      .buy{
        width: 380px;
        border:1px solid #516d8e;
        border-radius: 5px;
        box-sizing: border-box;
        padding: 15px;
        p{
           font-size: 16px;
          color: #ebebeb;
        }
        ul{
          li{
            display: flex;
            height: 40px;
            align-items: center;
            border-bottom: 1px solid #516d8e;
            &:first-child{
              font-size: 14px;
              color: #b3b3b3;
              span{
                color: #b3b3b3!important;
              }
            }
            &:last-child{
              border: none;
            }
            span{
              flex:1;
              font-size: 14px;
              color: #ebebeb;
              &:nth-child(2){
                text-align: center;
                color: #7aed5a;
              }
              &:last-child{
                text-align: right;
                color: #b3b3b3;
              }
            }
          }
        }
      }
    }
    .marketPrice{
      width: 1200px;
      background: #385a80;
      height: 84px;
      border-radius: 5px;
      margin: 20px 0;
      ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 0 20px;
        box-sizing: border-box;
        li{
          font-size: 12px;
          color: #ebdfdf;
          display:flex;
          flex-direction: column;
          align-items: center;
          span{
            color:#eaeaea ;
            display: block;
            margin-top: 5px;
            &.priceActive{
              color: #7aed5a;
            }
          }
        }
      }
    }
    .marketImg{
      width: 1200px;
      height: 354px;
      img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
    }
  }
  .homeFoot{
    width: 100%;
    min-width: 1024px;
    height: 676px;
    background-image: url('../assets/images/home/bg_foot.png');
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ebebeb;
    .footFirst{
      height: 395px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .title{
        font-size: 24px;
        text-align: center;
        margin-bottom: 50px;
      }
      .footMain{
        display: flex;
        justify-content: center;
        div{
          margin: 0 40px;
          p{
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
            font-size: 14px;
            span{
              display: block;
              margin-top: 5px;
            }
          }
        }
      }
    }
    .footLast{
      display: flex;
      height: 281px;
      align-items: center;
      width: 1024px;
      justify-content: space-between;
      img{
        height: 56px;
      }
    }
  }
</style>
<style lang="less" type="text/less">
  .bgRight{
    .el-input__inner{
      background: none;
      width: 400px;
      color: #fff;
      height: 56px;
      border: none;
    }
  }
</style>
