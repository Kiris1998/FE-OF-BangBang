<template>
  <div class="page">
    <img class="avatr" src="http://thyrsi.com/t6/400/1540826774x1822611437.jpg">
    <p class="name">Kiris.</p>
    <p>账号：12312312</p>
    <div class="money">
      <div class="moneyNum">
        <span>账户余额</span>
        <span>1.11</span>
      </div>
      <button>余额提现</button>
    </div>
    <ul class="items">
      <li>个人信息</li>
      <li>邀请码</li>
      <li>地址管理</li>
      <li>我的优惠照</li>
      <li>意见反馈</li>
      <li>用户指南</li>
      <li>退出账户</li>
    </ul>
  </div>
</template>

<script>
  
</script>

<style scoped>
  .page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .avatr {
    width: 150px;
    height: 150px;
    border-radius: 50%
  }
  .name {
    color: #248cd6;
    font-weight: bold;
  }
  .name+p {
    color: #4d4d4d;
  }
  .money {
    display: flex;
    justify-content: space-between;
    width: 90vw;
    border-top: solid #b2b2b2 1px;
    border-bottom: solid #b2b2b2 1px;
  }
  .moneyNum {
    display: flex;
    flex-direction: column;
  }
  .moneyNum span:nth-child(1) {
    color: #b2b2b2;
  }
  .money button{
    padding: 0 30px;
    margin: 0;
    background: #fed901;
  }
  .items {
    margin-left: -250px;
  }
</style>
