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
    <div class="personInfo">
      <div>
        <span class="name">Kiris</span>
        <span class="school">西安电子科技大学</span>
        <p class="_id">15991266003</p>
      </div>
      <img class="avatr" src="http://thyrsi.com/t6/400/1540826774x1822611437.jpg">
    </div>
    <button>邀请有奖</button>
  </div>
</template>

<script>
  
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
  .personInfo {
    background: #fed901;
    width: 90vw;
    height: 120px;
    margin: 30px 0 10px 0;
    border-radius: 10px;
    padding: 20px 10px 20px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .avatr {
    width: 140px;
    height: 100px;
    border-radius: 50%;
    display: block;
  }
  .name {
    font-weight: bold;
    color: #248cd6;
    font-size: 40px;
    margin-right: 5px;
    display: inline-block;
    margin-left: 10px;
  }
  .school {
    font-weight: 300;
    font-size: 15px;
  }
  ._id {
    color:#4d4d4d;
    margin-left: 10px;
    display: inline-block;
  }
  .money {
    margin-top: 55px;
    width: 90vw;
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
