<template>
  <div class="oldOrders">
    <p v-if="meOrOthers" class="title">已完成订单</p>
    <p v-else class="title">已完成抱单</p>
     <div class="info">
      <div class="row">
        <div class="orderInfo">
          <img class="avatr" src="http://thyrsi.com/t6/400/1540826774x1822611437.jpg">
          <span class="orderHelper">Kiris|</span>
          <span>西安电子科技大学</span>
        </div>
        <div style="position:relative;right:35px;">
          <span class="orderDate">10.13| </span>
          <span>已完成</span>
        </div>
      </div>
      <div class="details">
        <p>123131231</p>
        <p>123123123121231231</p>
        <p>12312312312</p>
      </div>
      <div class="lastRow">
        <div class="orderMoney">
          <span>成交金额:</span>
          <span>¥6.00</span>
        </div>
        <div class="btns">
          <button>评价</button>
          <button v-if="meOrOthers">联系接单人</button>
          <button v-else>联系发单人</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      meOrOthers: Boolean
    }
  }
</script>

<style scoped>
  .title {
    font-weight: bold;
    color: #808080;
    display: block;
    margin: 20px 0 5px 20px;
    font-size: 15px;
  }
  .info {
    background: white;
    width: 100vw;
    height: 150px;
    padding: 10px 0 0 10px;
    margin-bottom: 7px;
  }
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .orderInfo {
    display: flex;
  }
  .avatr {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .orderHelper {
    color: #2c8dd3;
    position: relative;
    left: 3px;
    top: 5px;
    font-weight: 800;
  }
  .orderHelper+span {
    color: #b2b2b2;
    font-size: 13px;
    position: relative;
    left: 6px;
    top: 12px;
  }
  .orderDate {
    color: #b2b2b2;
    font-size: 15px;
  }
  .orderDate+span {
    color: #7d7d7d;
    font-size: 15px;
  }
  .details {
    display: flex;
    flex-direction: column;
    color: #808080;
    font-size: 13px;
    margin-left: 40px;
  }
  .details p {
    margin: 3px;
  }
  .lastRow {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-top: 7px;
  }
  .orderMoney {
    color: #808080;
    margin-left: 50px;
  }
  .btns button{
    display: inline-block;
    width: 90px;
    height: 20px;
    line-height: 18px;
    margin-right: 3px;
    font-size: 10px;
    color: #808080;
    border: solid #b1b1b1 1px;
    border-radius: 10px;
    background: white;
  }
  .btns {
    margin-right: 20px;
  }
</style>
