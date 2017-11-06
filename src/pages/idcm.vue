<!--  交易所页面 -->
<template>
  <div class="bg">
    <head-top :num="1"></head-top>
    <div class="page-flex">
      <!--  现价 限价 区域 -->
      <div class="calculate">
        <div class="c-item">
          <ul class="c-tab">
            <li role="button" @click="present_price = true" :class="present_price ? 'active' : ''">现价</li>
            <li role="button" @click="present_price = false" :class="!present_price ? 'active' : ''">限价</li>
          </ul>

          <!--  现价  -->
          <div v-if="present_price">
            <div class="btns">
              <span class="item buy" role="button" :class="p_show_buy ? 'active' : ''" @click="p_show_buy = true">买</span>
              <span class="item sell" role="button" :class="!p_show_buy ? 'active' : ''" @click="p_show_buy = false">卖</span>
            </div>

            <!--  买  -->
            <form class="idcm-form" v-if="p_show_buy">
              <label class="block-label">总额</label>
              <div class="form-item">
                <input type="text" placeholder="0.00" v-model="buy_usd">
                <span class="unit">USD</span>
              </div>

              <div class="ca-btc">
                <span class="b-title">总额(BTC)≈</span>
                <span class="b-val">0.00000000</span>
              </div>

              <button class="btn-sub btn-buy" type="button">提交</button>
            </form>

            <!--  卖  -->
            <form class="idcm-form" v-if="!p_show_buy">
              <label class="block-label">总额</label>
              <div class="form-item">
                <input type="text" placeholder="0.00" v-model="buy_usd">
                <span class="unit">USD</span>
              </div>

              <div class="ca-btc">
                <span class="b-title">总额(BTC)≈</span>
                <span class="b-val">0.00000000</span>
              </div>

              <button class="btn-sub btn-sell" type="button">提交</button>
            </form>
          </div>

          <!--  限价  -->
          <div v-if="!present_price">
            <div class="btns">
              <span class="item buy" role="button" :class="l_show_buy ? 'active' : ''" @click="l_show_buy = true">买</span>
              <span class="item sell" role="button" :class="!l_show_buy ? 'active' : ''" @click="l_show_buy = false">卖</span>
            </div>

            <!--  买  -->
            <form class="idcm-form" v-if="l_show_buy">
              <label class="block-label">数量</label>
              <div class="form-item">
                <input type="text" placeholder="0.00" v-model="sell_btc1">
                <span class="unit">BTC</span>
              </div>

              <label class="block-label">数量</label>
              <div class="form-item" style="margin-bottom: 40px;">
                <input type="text" placeholder="0.00" v-model="sell_btc2">
                <span class="unit">BTC</span>
              </div>

              <div class="ca-btc">
                <span class="b-title">总额(BTC)≈</span>
                <span class="b-val">0.00000000</span>
              </div>

              <button class="btn-sub btn-buy" type="button">提交</button>
            </form>

            <!--  卖  -->
            <form class="idcm-form" v-if="!l_show_buy">
              <label class="block-label">数量</label>
              <div class="form-item">
                <input type="text" placeholder="0.00" v-model="sell_btc1">
                <span class="unit">BTC</span>
              </div>

              <label class="block-label">数量</label>
              <div class="form-item" style="margin-bottom: 40px;">
                <input type="text" placeholder="0.00" v-model="sell_btc2">
                <span class="unit">BTC</span>
              </div>

              <div class="ca-btc">
                <span class="b-title">总额(BTC)≈</span>
                <span class="b-val">0.00000000</span>
              </div>

              <button class="btn-sub btn-sell" type="button">提交</button>
            </form>
          </div>
        </div>

        <div class="c-item">
          <div class="c-dt">可用金额</div>
          <div class="c-dd">14.000000 <span>USD</span></div>

          <div class="c-dt">冻结</div>
          <div class="c-dd">14.000000 <span>USD</span></div>
        </div>

        <div class="c-item">
          <div class="c-dt">可用BTC</div>
          <div class="c-dd">14.000000 <span>BTC</span></div>

          <div class="c-dt">冻结</div>
          <div class="c-dd">14.000000 <span>BTC</span></div>
        </div>
      </div>

      <!--  卖  买 区域  -->
      <div class="exchange">
        <h4 class="bg-title">卖</h4>
        <div class="idcm-table">
          <table>
            <thead>
            <tr>
              <th></th>
              <th>市场量</th>
              <th>价格（USD）</th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="item,i in sell_list" :key="i">
              <td width="60"><span class="bar sell" :style="`width: ${item.rate}%`"></span></td>
              <td>{{ item.market | sell_market }}</td>
              <td class="sell">{{ item.price | sell_price }}</td>
            </tr>
            </tbody>
          </table>
        </div>

        <div class="rate">
          <div class="result">6865.00</div>
          <div class="method">
            <span>6850.00</span> / <span>6850.00</span>
          </div>
        </div>

        <div class="b-title">买</div>
        <div class="idcm-table">
          <table>
            <tbody>
            <tr v-for="item,i in buy_list" :key="i">
              <td width="60"><span class="bar buy" :style="`width: ${item.rate}%`"></span></td>
              <td>{{ item.market }}</td>
              <td class="buy">{{ item.price }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!--  图表 -->
      <div class="chart">
        <h4 class="bg-title">行情图表</h4>
        <img :src="chart_url" alt="" style="width:  100%; height: 360px;">

        <div class="chart-tab">
          <ul>
            <li @click="chart_show = true" :class="chart_show ? 'active' : ''">行情图表</li>
            <li @click="chart_show = false" :class="!chart_show ? 'active' : ''">当天成交记录</li>
          </ul>

          <!--  行情图表  -->
          <div class="chart-table" v-if="chart_show">
            <table>
              <thead>
              <tr>
                <th>流水号</th>
                <th>委托时间</th>
                <th>代码</th>
                <th>委托价格</th>
                <th>操作</th>
              </tr>
              </thead>

              <tbody>
              <tr v-for="item,i in chart_list">
                <td>{{ item.lid }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.code }}</td>
                <td>{{ item.price }}</td>
                <td>6666</td>
              </tr>
              </tbody>
            </table>
          </div>

          <!--  当天成交记录-->
          <div class="chart-table" v-if="!chart_show">
            <table>
              <thead>
              <tr>
                <th>流水号</th>
                <th>委托时间</th>
                <th>代码</th>
                <th>委托价格</th>
                <th>操作</th>
              </tr>
              </thead>

              <tbody>
              <tr v-for="item,i in chart_list">
                <td>{{ item.lid }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.code }}</td>
                <td>{{ item.price }}</td>
                <td>6666</td>
              </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>

      <!--  记录  -->
      <div class="log">
        <h4 class="bg-title">交易记录</h4>
        <div class="idcm-table">
          <table>
            <thead>
            <tr>
              <th>市场量</th>
              <th>成交价（USD）</th>
              <th>时间</th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="item,i in log_list" :key="i">
              <td class="white">{{ item.market }}</td>
              <td class="sell">{{ item.price }}</td>
              <td class="gray">{{ item.date }}</td>
            </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        chart_url: require('@/assets/images/user.jpg'),
        buy_usd: '',
        sell_btc1: '',
        sell_btc2: '',
        present_price: true, //  当前选中的现价 （限价：false)
        p_show_buy: true,   //  现价：当前选中的按钮是  买 （卖： false)
        l_show_buy: true,   //  限价：当前选中的按钮是  买 （卖： false)
        chart_show: true,  //  当前选中的是行情图表 （当天成交记录： false )
        sell_list: [
          {rate: '1', market: '4.48000000', price: '6865.03'},
          {rate: '10', market: '4.48000000', price: '6865.03'},
          {rate: '10', market: '4.48000000', price: '6865.03'},
          {rate: '10', market: '4.48000000', price: '6865.03'},
          {rate: '10', market: '4.48000000', price: '6865.03'},
          {rate: '10', market: '4.48000000', price: '6865.03'},
          {rate: '10', market: '4.48000000', price: '6865.03'},
          {rate: '60', market: '4.48000000', price: '6865.03'},
          {rate: '10', market: '4.48000000', price: '6865.03'},
          {rate: '10', market: '4.48000000', price: '6865.03'},
          {rate: '10', market: '4.48000000', price: '6865.03'},
          {rate: '10', market: '4.48000000', price: '6865.03'},
          {rate: '10', market: '4.48000000', price: '6865.03'},
          {rate: '10', market: '4.48000000', price: '6865.03'}
        ],
        buy_list: [
          {rate: '10', market: '4.48000000', price: '6865.03'},
          {rate: '10', market: '4.48000000', price: '6865.03'},
          {rate: '10', market: '4.48000000', price: '6865.03'},
          {rate: '10', market: '4.48000000', price: '6865.03'},
          {rate: '10', market: '4.48000000', price: '6865.03'},
          {rate: '80', market: '4.48000000', price: '6865.03'},
          {rate: '10', market: '4.48000000', price: '6865.03'},
          {rate: '10', market: '4.48000000', price: '6865.03'},
          {rate: '10', market: '4.48000000', price: '6865.03'},
          {rate: '10', market: '4.48000000', price: '6865.03'},
          {rate: '10', market: '4.48000000', price: '6865.03'},
          {rate: '10', market: '4.48000000', price: '6865.03'},
          {rate: '10', market: '4.48000000', price: '6865.03'},
          {rate: '10', market: '4.48000000', price: '6865.03'},
          {rate: '10', market: '4.48000000', price: '6865.03'},
          {rate: '10', market: '4.48000000', price: '6865.03'},
        ],
        log_list: [
          {market: '4.48000000', price: '6865.03', date: '10:43:14'},
          {market: '4.48000000', price: '6865.03', date: '10:43:14'},
          {market: '4.48000000', price: '6865.03', date: '10:43:14'},
          {market: '4.48000000', price: '6865.03', date: '10:43:14'},
          {market: '4.48000000', price: '6865.03', date: '10:43:14'},
          {market: '4.48000000', price: '6865.03', date: '10:43:14'},
          {market: '4.48000000', price: '6865.03', date: '10:43:14'},
          {market: '4.48000000', price: '6865.03', date: '10:43:14'},
          {market: '4.48000000', price: '6865.03', date: '10:43:14'},
          {market: '4.48000000', price: '6865.03', date: '10:43:14'},
          {market: '4.48000000', price: '6865.03', date: '10:43:14'},
          {market: '4.48000000', price: '6865.03', date: '10:43:14'},
          {market: '4.48000000', price: '6865.03', date: '10:43:14'},
          {market: '4.48000000', price: '6865.03', date: '10:43:14'},
          {market: '4.48000000', price: '6865.03', date: '10:43:14'},
          {market: '4.48000000', price: '6865.03', date: '10:43:14'},
          {market: '4.48000000', price: '6865.03', date: '10:43:14'}
        ],
        chart_list: [
          {lid: '2014090954654646464', date: '2017.10.01 10:31', code: '888888.00', price: '888888.00'},
          {lid: '2014090954654646464', date: '2017.10.01 10:31', code: '888888.00', price: '888888.00'}
        ]
      }
    }
  }
</script>

<style lang="less">
  .bg {
    background: #15232c;
    margin-bottom: -56px;
  }
  ul {
    margin: 0;
    padding: 0;
  }

  .page-flex {
    display: flex;
    font-size: 14px;
    background: #15232c;
    min-height: calc(~"100vh - 100px");
    .calculate {
      width: 11%;
      background: #48525a;
      min-height: calc(~"100vh - 100px");
    }
    .exchange {
      width: 17%;
      padding: 0 3px;
    }
    .log {
      width: 14%;
      padding: 0 3px;
    }
    .chart {
      flex: 1;
    }
  }

  .c-item {
    padding: 35px 10px 50px 15px;
    background: #3a444d;
    margin-bottom: 10px;
  }
  .c-tab {
    margin: 20px 0;
    display: flex;
    li {
      flex: 1;
      line-height: 24px;
      color: #78848a;
      text-align: center;
      display: inline-block;
      border-bottom: 2px solid #78848a;
      &.active {
        color: #fff;
        border-bottom-color: #fff;
      }
    }
  }

  .btns {
    &:after {
      content: '';
      display: table;
      clear: both;
    }
    .item {
      width: 48%;
      height: 30px;
      background-color: rgba(93, 101, 108, 1);
      border-radius: 1px 1px 1px 1px;
      font-weight: bold;
      color: #aeb2a7;
      text-align: center;
      display: inline-block;
      line-height: 30px;
      &:last-child {
        float: right;
      }
      &.buy.active, &.buy:hover {
        background-color: rgba(77, 165, 60, 1);
      }
      &.sell.active, &.sell:hover {
        background-color: rgba(255, 105, 57, 1);
      }
      &.active, &:hover {
        color: #fff;
      }
    }
  }

  .idcm-form {
    .block-label {
      color: #ced2d5;
      font-weight: bold;
      line-height: 34px;
      display: block;
    }

    .form-item {
      height: 36px;
      line-height: 36px;
      background-color: rgba(64, 74, 82, 1);
      border-radius: 1px 1px 1px 1px;
      border: solid 1px rgba(80, 89, 98, 1);
      display: flex;
      padding: 0 10px;
      color: #fff;
      margin-bottom: 15px;
      input {
        flex: 1;
        width:auto;
        min-width: 0;
        color: #fff;
        background: transparent;
        border: none;
        cursor: default;
        &:focus {
          outline: none;
        }
      }
    }

    .ca-btc {
      border-top: 2px solid #78848a;
      line-height: 34px;
      color: #ced2d5;
      display: flex;
      .b-title {
        color: #ced2d5;
      }
      .b-val {
        flex: 1;
        text-align: right;
      }
    }

    .btn-sub {
      width: 100%;
      height: 44px;
      border-radius: 2px 2px 2px 2px;
      color: #fff;
      font-weight: bold;
      border: none;
      margin-bottom: 25px;
      &.btn-buy {
        background: rgba(77, 165, 60, 1);
      }
      &.btn-sell {
        background: rgba(255, 105, 57, 1);
      }
    }
  }

  .c-dt, .c-dd {
    font-weight: bold;
    font-size: 12px;
    line-height: 15px + 12px;
    color: #fff;
  }
  .c-dd {
    color: #a9a9a9;
  }



  .bg-title, .b-title {
    font-weight: bold;
    color: #fff;
    font-size: 16px;
    padding-left: 7px;
  }

  .bg-title {
    height: 42px;
    line-height: 42px;
    background-color: rgba(47, 61, 69, 1);
  }

  .b-title {
    height: 32px;
    line-height: 32px;
  }


  .idcm-table {
    font-size: 12px;
    padding-bottom: 6px;
    table {
      width: 100%;
      border-collapse:collapse;
    }
    tbody {
      tr:nth-child(1) td {
        padding-top: 6px;
        border-top: 1px solid #2f3d45;
      }
      .bar {
        display: inline-block;
        height: 15px;
        &.sell {
          background: #8e4a36;
        }
        &.buy {
          background: #51914d;
        }
      }
    }
    tr {
      th {
        line-height: 30px;
        color: #868e93;
      }
      td {
        line-height: 12px + 2px;
        color: #fff;

        &.gray {
          color: #868e93;
        }
        &.white {
          color: #fff;
        }

        &.sell, .sell {
          color: #ff6939;
        }
        &.sell-l, .sell-l {
          color: #8e4a36;
        }

        &.buy, .buy {
          color: #84f766;
        }
        &.buy-l, .buy-l {
          color: #51914d;
        }

      }
    }
  }

  .exchange {
    .idcm-table {
      th, td {
   //     padding-left: 18%;
      }
      th {
        text-align: left;
      }
    }
  }
  .log {
    .idcm-table {
      th {
        text-align: left;
      }
      th, td {
        padding-left: 7px;
      }
    }
  }

  .rate {
    color: #e1e6eb;
    text-align: center;
    padding: 10px 0 15px 0;
    border-top: 1px solid #2f3d45;
    border-bottom: 1px solid #2f3d45;
    .result {
      font-size: 33px;
      line-height: 53px;
    }
    .method {
      font-size: 14px;
      line-height: 24px;
      span {
        margin: 0 10px;
      }
      span:first-child {
        color: #868e93;
      }
    }
  }

  .chart-tab {
    height: 42px;
    line-height: 40px;
    background-color: rgba(47, 61, 69, 1);
    color: #cacaca;
    ul {
      padding: 2px 5px 0 5px;
    }
    li {
      padding: 0 25px;
      display: inline-block;
      &.active {
        background: #1e2b34;
        color: #fff;
      }
    }
  }

  .chart-table {
    table {
      width: 100%;
      th {
        text-align: left;
        color: #5a646a;
        border-bottom: 1px solid #2f3d45;
        line-height: 30px;
      }
      td {
        line-height: 20px;
        color: #c5c5c5;
      }
      th, td {
        padding-left:  5px;
        font-size: 12px;
        font-weight: normal;
      }
    }
  }

</style>

























