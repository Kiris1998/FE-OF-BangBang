<template>
  <div class="personInfo">
      <div>
        <span class="name">Kiris</span>
        <span class="school">西安电子科技大学</span>
        <p class="_id">15991266003</p>
      </div>
      <img class="avatr" src="http://thyrsi.com/t6/400/1540826774x1822611437.jpg">
    </div>
</template>

<script>
</script>

<style scoped>
  .personInfo {
    background: #fed901;
    width: 90vw;
    height: 90px;
    margin: 50px 0 10px 0;
    border-radius: 10px;
    padding: 20px 10px 20px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .avatr {
    width: 80px;
    height: 70px;
    border-radius: 50%;
    display: block;
  }
  .name {
    font-weight: bold;
    color: #248cd6;
    font-size: 30px;
    margin-right: 5px;
    display: inline-block;
    margin-left: 10px;
  }
  .school {
    font-weight: 300;
    font-size: 13px;
  }
  ._id {
    color:#4d4d4d;
    margin-left: 10px;
    display: inline-block;
    font-size: 14px;
  }
</style>
