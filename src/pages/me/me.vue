<template>
  <div class="page">
    <img class="avatr" :src=avatrUrl>
    <p class="name">{{userName}}</p>
    <p>账号：{{id}}</p>
    <div class="money">
      <div class="moneyNum">
        <span>账户余额</span>
        <span>{{balance}}</span>
      </div>
      <button>余额提现</button>
    </div>
    <ul class="items">
      <li @click="toInformation"><i class="iconfont icon-wo"></i> 个人信息</li>
      <li @click="toInvitation"><i class="iconfont icon-erweima"></i> 邀请码</li>
      <li @click="toAdd"><i class="iconfont icon-LC_icon_gps_line_1"></i> 地址管理</li>
      <li @click="toCoupon"><i class="iconfont icon-wodeyouhuijuan"></i> 我的优惠卷</li>
      <li @click="toAdvice"><i class="iconfont icon-duanxin"></i> 意见反馈</li>
    </ul>
  </div>
</template>

<script>
  import {jumpTo} from '../../utils/utils'
  import store from '../../store/vuex'
  export default {
    data: {
      avatrUrl: '',
      id: '',
      balance: '',
      userName: ''
    },
    methods: {
      toInformation(){
        jumpTo('../info/main')
      },
      toInvitation(){
        jumpTo('../invitation/main')
      },
      toAdd(){
        jumpTo('../chooseAddr/main')
      },
      toCoupon(){
        jumpTo('../coupon/main')
      },
      toAdvice(){
        jumpTo('../advices/main')
      }
    },
    mounted() {
      this.avatrUrl = store.state.userInfo.avatar,
      this.id = store.state.userInfo.id,
      this.balance = store.state.userInfo.balance,
      this.userName = store.state.userInfo.userName
    }
  }
</script>

<style scoped>
  .page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f2f2f2;
    height: 100vh;
  }
  .avatr {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin-top: -10px;
  }
  .name {
    color: #248cd6;
    font-weight: bold;
    font-size: 20px;
    margin: 10px 0 2px 0;
  }
  .name+p {
    color: #4d4d4d;
    font-size: 17px;
    margin-bottom: 18px;
  }
  .money {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    border-top: solid #b2b2b2 1px;
    border-bottom: solid #b2b2b2 1px;
    padding: 5px 20px;
    box-sizing: border-box
  }
  .moneyNum {
    display: flex;
    flex-direction: column;
  }
  .moneyNum span:nth-child(1) {
    color: #b2b2b2;
    font-size: 15px;
  }
  .moneyNum span:nth-child(2) {
    font-size: 35px;
    font-weight: bolder
  }
  .money button{
    padding: 0 30px;
    margin: 0;
    background: #fed901;
    height: 30px;
    line-height: 30px;
    width: 120px;
    font-size: 12px;
  }
  .items {
    margin-left: -200px;
    color: #808080;
  }
  .items li {
    font-size: 15px;
    margin: 25px 0;
  }
  .items i {
    display: inline;
  }

@font-face {
  font-family: 'iconfont';  /* project id 916546 */
  src: url('//at.alicdn.com/t/font_916546_fpkc56enspm.eot');
  src: url('//at.alicdn.com/t/font_916546_fpkc56enspm.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_916546_fpkc56enspm.woff') format('woff'),
  url('//at.alicdn.com/t/font_916546_fpkc56enspm.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_916546_fpkc56enspm.svg#iconfont') format('svg');
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-wodeyouhuijuan:before { content: "\e7ee"; }

.icon-LC_icon_gps_line_1:before { content: "\e62e"; }

.icon-erweima:before { content: "\e7dd"; }

.icon-yiwen:before { content: "\e62c"; }

.icon-ai-out:before { content: "\e642"; }

.icon-wo:before { content: "\e663"; }

.icon-duanxin:before { content: "\e7b9"; }


</style>
