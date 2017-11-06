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
        <div class="p-article" v-if="is_main">
          <div class="userinfo">
            <img :src="userinfo.img" alt="">
            <div class="info">
              <h3 class="title">{{ userinfo.username }}</h3>
              <p>{{ userinfo.uid }}</p>
            </div>

            <router-link to="/setting/index/userinfo" class="link">资料修改</router-link>
          </div>

          <div class="node" v-for="item,i in node" :key="i">
            <h5 class="n-title">{{ item.label }}</h5>
            <div class="item" v-for="el,k in item.list" :key="k">
              <div class="icon">
                <img :src="el.icon" alt="">
              </div>
              <div class="info">
                <h6 class="i-title" :class="el.active ? 'active' : ''">{{ el.label }}</h6>
                <p>{{ el.data }}</p>
              </div>

              <router-link class="link" v-if="el.link" :to="el.link.path">
                {{ el.link.label }}
            </router-link>
            </div>
          </div>
        </div>

        <!--  子页面  -->
        <div class="p-article" v-else>
          <router-view></router-view>
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
        is_main: true, //  当前是否是主页面(安全设置主页面）
        userinfo: {  //  用户信息
          img: require('@/assets/images/setting/user.png'),
          username: 'Elvis',
          uid: 'UID:(HY553202)'
        },
        node: []
      }
    },
    mounted () {
      this.setMain()

      this.setNode()
    },
    watch: {
      '$route' () {
        this.setMain()
      }
    },
    methods: {
      /**
       * 判断当前页面是否是安全设置主页面
       * */
      setMain () {
        this.is_main = this.$router.currentRoute.path === '/setting/index'
      },
      setNode () {

        let tel = '1821****654'   //  绑定的手机号
        let fundpass = '1821****654'  //  资金密码
        let email = ''           //  邮箱
        let loginpass = true  //  是否设置登录密码

        this.node =  [
          {
            label: '安全策略',
            list: [
              {
                icon: tel ? require('@/assets/images/setting/tel.png') : require('@/assets/images/setting/tel-c.png'),
                label: '电话',
                data: tel
              },
              {
                icon: fundpass ? require('@/assets/images/setting/fund-pass.png') : require('@/assets/images/setting/fund-pass-c.png'),
                label: '资金密码',
                data: fundpass
              }
            ]
          },
          {
            label: '安全信息',
            list: [
              {
                icon: email ? require('@/assets/images/setting/email.png') : require('@/assets/images/setting/email-c.png'),
                label: `邮箱（${email ? '已绑定' : '未绑定'}）`,
                data: `${email ? email : '暂未绑定邮箱'}`,
                active: !email,
                link: {
                  label: email ? '修改' : '绑定',
                  path: '/setting/index/email'
                }
              },
              {
                icon: tel ? require('@/assets/images/setting/tel.png') : require('@/assets/images/setting/tel-c.png'),
                label: `手机（${tel ? '已绑定' : '未绑定'}）`,
                data: `${tel ? tel : '暂未绑定手机'}`,
                active: !tel,
                link: {
                  label: tel ? '修改' : '绑定',
                  path: '/setting/index/mobile'
                }
              },
              {
                icon: loginpass ? require('@/assets/images/setting/login.png') : require('@/assets/images/setting/login-c.png'),
                label: `登录密码（${loginpass ? '已设置' : '未设置'}）`,
                data: '登录时使用',
                active: !loginpass,
                link: {
                  label: loginpass ? '修改' : '设置',
                  path: '/setting/index/loginpassword'
                }
              },
              {
                icon: fundpass ? require('@/assets/images/setting/fund-pass.png') : require('@/assets/images/setting/fund-pass-c.png'),
                label: `资金密码（${fundpass ? '已绑定' : '未绑定'}）`,
                data: '账户资金变动时，需先验证该资金密码。（默认和登录密码一样）',
                active: !fundpass,
                link: {
                  label: fundpass ? '修改' : '绑定',
                  path: '/setting/index/fundpassword'
                }
              }
            ]
          },
          {
            label: '安全策略',
            list: [
              {
                icon: require('@/assets/images/setting/exchange.png'),
                label: '确认交易',
                data: '账户资金变动时，需先验证该资金密码。（默认和登录密码一样）'
              },
              {
                icon: require('@/assets/images/setting/pass.png'),
                label: '通过',
                data: '每两个小时验证一次',
                /* link: {
                   label: '修改',
                   path: ''
                 }*/
              }
            ]
          }
        ]
      }
    }
  }
</script>
<style lang="less" scoped>
  img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
  }
  .link {
    color: #5ba6fe;
    text-decoration: none;
  }

  .userinfo {
    font-size: 14px;
    margin-top: 55px;
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    .info {
      display: inline-block;
      vertical-align: middle;
      margin-left: 15px;
      .title, p {
        margin: 0;
        line-height: 26px;
        font-weight: normal;
      }

      .title {
        color: #ebebeb;
        font-size: 18px;
      }
      p {
        color: #ccc;
      }
    }


    .link {
      margin-left: 80px;
    }
  }


  .node {
    width: 54%;
    font-size: 14px;
    color: #ebebeb;
    .item, .n-title {
      border-bottom: 1px solid #516d8e;
    }
    .n-title {
      font-size: 18px;
      line-height: 18px * 3;
      margin: 0;
      padding-top: 75px - 18px * 3;
      font-weight: normal;
    }
    .item {
      line-height: 26px;
      padding: (75px - 26px * 2)/2 0;
      display: flex;
      align-items: center;
      .icon {
        width: 45px;
        line-height: 26px * 2;
        img {
          max-width: 60%;   //  测试样式，有图标后可删除
        }
      }
      .i-title {
        font-size: 16px;
        font-weight: normal;
        &.active {
          color: #ff6939;
        }
      }
      .info {
        flex: 1;
        p {
          color: #b3b3b3;
        }
      }

      .link {
        padding: 0 10px;
      }
    }
  }


</style>

