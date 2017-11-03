<template>
  <div>

  </div>
</template>
<script>

  export default {
    data() {
      return {
        imgNum:1
      }
    },
    methods: {},
    mounted() {
    },
    components: {}
  }
</script>
<style lang="less" type="text/less" scoped>
  .main {
    position: relative;
    .home {
      .bannerImg {
        width: 100%;
        min-width: 1024px;
        object-fit: cover;
        max-height: 782px;
        display: block;
      }
    }
    .mainText {
      color: #fff;
      background: #676c73;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      height: 440px;
      min-width: 1024px;
      div {
        text-align: center;
        width: 1160px;
        font-size: 30px;
        margin-bottom: 30px;
      }
      p {
        width: 1020px;
        margin-bottom: 30px;
        font-size: 22px;
        color: #e4e4e4;
      }
    }
    .core {
      color: #333;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 460px;
      min-width: 1024px;
      div {
        font-size: 38px;
        margin-bottom: 30px;
      }
      ul {
        width: 1160px;
        display: flex;
        justify-content: space-between;
        li {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          /*font-size: 18px;*/
          height: 160px;
          width: 230px;
          box-sizing: border-box;
          &:hover {
            border: 1px solid #f2f2f2;
            box-shadow: 0 0 20px #ccc;
          }
        }
      }
    }
    .partner {
      color: #333;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background: #f7f7f7;
      height: 460px;
      min-width: 1024px;
      .tit {
        font-size: 38px;
        margin-bottom: 50px
      }
      .img{
        display: flex;
        justify-content: space-between;
        width: 1000px;
        box-sizing: border-box;
        img{
          max-width: 260px;
          height: 52px;
          filter: grayscale(100%);
          opacity: 0.4;
          transition-duration: 0.4s;
          transition-property: all;
          &:hover{
            filter: grayscale(0%);
            opacity: 1;
          }
        }
      }
      p{
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 1s;
        span{
          width: 15px;
          height: 15px;
          display: inline-block;
          background: #cecece;
          border-radius: 50%;
          margin: 30px 15px;
          &.imgActive{
            background: #434343;
          }
        }
      }
    }
    .tel{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 300px;
      background: #676c73;
      color: #fff;
      min-width: 1024px;
      div{
        font-size: 38px;
        margin-bottom: 50px;
      }
      p{
        margin-bottom: 10px;
        font-size: 18px;
      }
    }
  }
</style>
