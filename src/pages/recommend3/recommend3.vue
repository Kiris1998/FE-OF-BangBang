<template>
  <div class="page">
    <p class="title">我的被推荐人</p>
    <div class="money">
      <p>被推荐人今日累计收益提成</p>
      <div>
        <span>0.00</span>
        <span>收益提成自动转入账户余额</span>
      </div>
    </div>
    <recommend-info></recommend-info>
    <button>邀请有奖</button>
  </div>
</template>

<script>
  import recommendInfo from '@/components/recommendInfo'
  export default {
    components: {
      recommendInfo
    }
  }
</script>

<style scoped>
  .page {
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .title {
    color: #808080;
    position: absolute;
    top: 10px;
    left: 20px;; 
    font-weight: bold;
  }
  .money {
    margin-top: 55px;
    width: 90vw;
    border-bottom: #b7b7b7 solid 1px;
    border-top: #b7b7b7 solid 1px;
    padding: 15px 0;
    margin-bottom: -20px;
  }
  .money p {
    color: #b7b7b7;
    font-size: 13px;
  }
  .money div {
    display: flex;
    justify-content: space-between;
  }
  .money div span:nth-child(1) {
    font-size: 40px;
    font-weight: bold;
  }
  .money div span:nth-child(2) {
    font-size: 13px;
    color: #717071;
    position: relative;
    top: 35px;
  }
  button {
    background: black;
    color: white;
    width: 90vw;
    position: absolute;
    bottom: 20px;
    left: 5vw;
  }
</style>
