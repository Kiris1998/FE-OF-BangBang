<template>
  <div class="page">
    <div class="top">
      <h3>我的邀请码</h3>
      <img class="avatr" src="http://thyrsi.com/t6/400/1540826774x1822611437.jpg">
      <p>分享推荐码</p>
      <div class="sharedNum">123456</div>
    </div>
    <div class="bottom">
      <h2>成功邀请好友可获得</h2>
      <button>微信分享</button>
    </div>  
  </div>
</template>

<script>
  
</script>

<style scoped>
  .avatr {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-top: 50px;
  }
  .page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h3 {
    position: absolute;
    left: 30px;
    top: 10px;
  }
  img+p{
    text-align: center;
    color: #808080;
  }
  .sharedNum {
    text-align: center;
    font-weight: bold;
    font-size: 50px;
    border-bottom: solid #4d4d4d 3px;
  }
  .top {
    height: 60vh;
  }
  .bottom {
    height: 40vh;
    background: #f0f0f0;
    width: 100vw;
  }
  h2 {
    font-weight: bold;
    color: #849eb6;
    font-size: 20px;
    margin: 50px 0 0 50px;
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

