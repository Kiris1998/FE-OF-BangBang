<template>
  <div class="page">
    <p class="title">我的推荐人</p>
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
    background: #e2e2e2;
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
    margin: 50px 0 10px 0;
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
  button {
    background: black;
    color: white;
    width: 90vw;
    position: absolute;
    bottom: 20px;
    left: 5vw;
  }
</style>
