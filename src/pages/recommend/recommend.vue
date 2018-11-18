<template>
  <div class="page">
    <p class="title">我的推荐人</p>
    <div class="wrapper">
      <div class="addPerson">
      <p>为您添加一位联系人</p>
      <p>每单获得更高收益</p>
      </div>
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
  .addPerson {
    background: #fed901;
    width: 90vw;
    height: 120px;
    margin: 50px 0 10px 0;
    border-radius: 10px;
    padding: 20px 0 0 20px;
  }
  .wrapper {
    border-bottom: #808080 solid 1px;
    padding-bottom: 10px;
  }
  .addPerson p:nth-child(1) {
    font-weight: bold;
  }
  .addPerson p:nth-child(2) {
    color: #808080;
    font-size: 15px;
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
