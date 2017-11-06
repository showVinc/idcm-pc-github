<template>
  <div class="menu">
    <router-link
      class="item"
      v-for="item,i in data" :key="i"
      :to="item.url">

      {{ item.label }}

      <!-- 图标待替换 -->
      <img :src="icon_url" class="icon" alt="">

    </router-link>
  </div>
</template>

<script>
  export default {
    props: {
      type: String
    },
    data () {
      return {
        icon_url: require('@/assets/images/setting/icon-right.png'),
        data: []
      }
    },
    mounted () {
      this.setMenu()
    },
    watch: {
      '$router' () {
      //  this.setMenu()
      }
    },
    methods: {
      setMenu () {
        let data = this.$router.options.routes
        let cache = []
        for(let k in data) {
          if(data[k].type === this.type) {
            if(cache.length < data[k].pos) {
              for(let i=0; i<data[k].pos - cache.length; i++) {
                cache.push({})
              }
            }

            cache.splice(data[k].pos - 1, 1, {
              label: data[k].name,
              url: data[k].path
            })
          }
        }

        this.data = cache
      }
    }
  }
</script>


<style lang="less" scoped>
  .menu {
    border: 1px solid #516d8e;
    border-radius: 5px;
    width: 190px;
    margin: 0 0 0 auto;

    .item {
      padding: 0 20px 0 30px;
      font-size: 16px;
      color: #ebebeb;
      line-height: 54px;
      display: block;
      text-decoration: none;

      &:hover {
        background: #436d9e;
      }
    }

    .icon {
      float: right;
      margin-top: 22px;
    }
  }
</style>
