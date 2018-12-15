<template>
  <div class="page">
    <div style="position:relative">
      <label>充值金额</label>
      <input type="text" placeholder="请输入充值金额">
    </div>
    <button>微信付款</button>
  </div>
</template>

<script>
  
</script>

<style scoped>
  .page{
    height: 100vh;
    background: #e2e2e2;
  }
  input{
    background: white;
    height: 60px;
    line-height: 60px;
    width: 75%;
    display: inline-block;
    position: absolute;
    top: 10px;
    right: 0;
  }
  label{
    display: inline-block;
    background: white;
    height: 60px;
    line-height: 60px;
    width: 25%;
    position: absolute;
    top: 10px;
    color:gray;
    padding:0 4px;
    box-sizing:border-box;

  }
  button{
    position: relative;
    top: 100px;
    background: #fed901;
    width: 90vw;
    color: white;
  }
</style>
