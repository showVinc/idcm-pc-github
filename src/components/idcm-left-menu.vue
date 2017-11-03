<template>
  <div class="menu">
    <router-link
      class="item"
      v-for="item,i in data" :key="i"
      :to="item.url">

      {{ item.label }}

      <!-- 图标待替换 -->
      <span class="icon"> > </span>

    </router-link>
  </div>
</template>

<script>
  export default {
    props: {
      data: Array
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
    }
  }
</style>
