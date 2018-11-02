<template>
  <div class="info">
    <div class="content">
      <img class="avatr" src="http://thyrsi.com/t6/400/1540826774x1822611437.jpg">
      <div class="details">
        <div class="baseInfo">
          <span class="name">
            Kiris
          </span>
          <span class="school">
            西安电子科技大学
          </span>
          <span class="time">
            12：23发布
          </span>
        </div>
        <div class="information">我在说中文1231231231212sws121s1212w312</div>
        <div class="place">
          <div>北门快递</div>
          <div>东门公交</div>
        </div>
      </div>
    </div>
    <div class="logo">
      <div class="title">悬赏金</div>
      <div>
        <span style="font-size:13px">￥</span><span>5.00</span>
      </div>
      <div>首发3元+增加2元</div>
    </div>
  </div>
</template>

<script>
  
</script>

<style scoped>
  .info {
    width: 100vw;
    height: 110px;
    margin-top: 15px;
    display: flex;
  }
  .content {
    background: white;
    width: 67%;
    padding: 10px 0 15px 20px;
    display: flex;
    align-items: center;
  }
  .logo {
    background: #fed304;
    width: 33%;
  }
  .avatr {
    width: 62px;
    height: 62px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .details {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-top: -15px;
  }
  .name {
    color: #2081d0;
    font-size: 17px;
    font-weight: bold;
  }
  .school {
    color: #a9a9a9;
    font-size: 9px;
  }
  .time {
    color: #757575;
    font-size: 7px;
  }
  .information {
    color: #4d4d4d;
    font-size: 11px;
    height: 30px;
    width: 100%;
    white-space: break-word;
    box-sizing: border-box;
  }
  .place {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 9px;
    height: 10px;
    box-sizing: border-box;
    margin-top: 15px;
    color: #878787;
  }
  .place div {
    width: 50%;
    padding-left: 2px;
  }
  .place div:nth-child(1) {
    border-left: solid #48b053 3px;
  }
  .place div:nth-child(2) {
    border-left: solid #ef5732 3px;
  }
  .baseInfo {
    margin-bottom: 5px;
  }
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

  }
  .title {
    color: white;
    font-size: 10px;
  }
  .logo div:nth-child(2){
    font-size: 23px;
    margin: 10px 0;
  }
  .logo div:nth-child(3){
    font-size: 10px;
    font-weight: 300;
  }
</style>
