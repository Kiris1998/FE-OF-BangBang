<template>
    <div class="personInfo">
      <div>
        <span class="name" :style="{color: userInfo.gender == 'MALE' ? '#248cd6' : '#eb2f74'}">
          {{userInfo.userName}}
        </span>
        <span class="school">{{userInfo.schoolName}}</span>
        <span :style="{color: userInfo.gender == 'MALE' ? '#248cd6' : '#eb2f74',position: 'relative'}">
          {{userInfo.gender == 'MALE' ? '♂' : '♀'}}
        </span>
        <p v-if="userInfo.phone" class="_id">{{userInfo.phone}}</p>
      </div>
      <img class="avatr" :src=userInfo.avatar>
    </div>
</template>

<script>
  export default {
    props: {
      userInfo: Object
    }
  }
</script>

<style scoped>
  .personInfo {
    background: #fed901;
    width: 90vw;
    height: 90px;
    margin: 10px 0 10px 0;
    border-radius: 10px;
    padding: 20px 10px 20px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .avatr {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: block;
  }
  .name {
    font-weight: bold;
    color: #248cd6;
    font-size: 25px;
    margin-right: 5px;
    display: inline-block;
    margin-left: 10px;
  }
  .school {
    font-weight: bolder;
    font-size: 12px;
    position: relative;
  }
  ._id {
    color:#4d4d4d;
    margin-left: 70px;
    font-size: 18px;
  }
</style>
