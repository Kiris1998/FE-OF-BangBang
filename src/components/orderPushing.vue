<template>
    <div class="content">
      <div class="pushing">
        <div class="pushingLogo"></div>
        <div class="pushingContent">
          <div class="pushingInfo">
            <p class="task">老铁带包辣条</p>
            <span>二楼超市</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>一区414</span>
            <div class="pushingTips">
              <p class="pushingMoney">¥5</p>
              <p v-if="meOrOthers" class="tip">提高悬赏金可使任务更快被发现</p>
            </div>
          </div>
          <div v-if="meOrOthers" class="pushingBtn">
            <p>提高悬赏金</p>
            <button>+1</button>
            <p>已接单</p>
          </div>
          <div v-else class="othersBtn">
            <img src="../static/image/phone.png">
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
  .content {
    display: flex;
    justify-content: center;
  }
  .pushing {
    width: 95vw;
    height: 80px;
    margin-top: 10px;
    display: flex;
  }
  .pushingLogo {
    width: 25%;
    background: url("http://img.027cgb.com/610462/bike.png");
    height: 100%;
    background-size: 100% 80px;
  }
  .pushingContent {
    display: flex;
    width: 75%;
    background: #fdd731;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    align-items: center;
  }
  .pushingInfo {
    color: #4d4d4d;
    padding: 10px 20px 5px 20px;
    font-size: 10px;
    width: 75%;
  }
  .task {
    display: block;
    padding-bottom: 3px;
    border-bottom: solid #c09d2c 1px;
  }
  .pushingTips {
    background: url("http://img.027cgb.com/610462/bar.png");
    margin-top: 5px;
    border-radius: 6px;
    background-size: 100% 33px
  }
  .pushingMoney {
    font-size: 15px;
    text-align: center;
  }
  .tip {
    color: #e0d186;
    font-size: 7px;
    text-align: center;
  }
  .pushingBtn {
    color: #4d4d4d;
    font-size: 9px;
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    margin-right: 15px;
    flex-direction: column;
  }
  .othersBtn{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    margin-right: 15px;
  }
  .pushingBtn button{
    background: #e15b4c;
    color: white;
    border-radius: 50%;
    margin: 2px 0;
  }
  .othersBtn img {
    width: 40px;
    height: 40px;
    margin: 3px;
  }
</style>
