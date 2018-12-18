<template>
  <div class="info" @click="gotoDetail(detailInfo.indentId)">
    <div class="content">
      <img class="avatr" :src="detailInfo.publisherAvatar">
      <div class="details">
        <div class="baseInfo">
          <span :style="{color: detailInfo.publisherGender == 'MALE' ? '#248cd6' : '#eb2f74'}" class="name">
            {{detailInfo.publisherNickName}}
          </span>
          <span class="school">
            {{detailInfo.publisherSchool}}
          </span>
          <span :style="{color: detailInfo.publisherGender == 'MALE' ? '#248cd6' : '#eb2f74'}" class="sex">
            {{detailInfo.publisherGender == 'MALE' ? '♂' : '♀'}}
          </span>
          <p class="time">
            {{detailInfo.createTime}}
          </p>
        </div>
        <div class="information">{{detailInfo.indentContent}}</div>
        <div class="place">
          <div class="overHide">{{detailInfo.takeGoodAddress}}</div>
          <div class="overHide">{{detailInfo.shippingAddress}}</div>
        </div>
      </div>
    </div>
    <div class="logo">
      <div class="title">悬赏金</div>
      <div>
        <span style="font-size:13px">￥</span><span>{{detailInfo.indentPrice}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  function getDetailDate(date) {
    let year,month,day,hours,minutes
    year = date.getFullYear()
    if (date.getMonth()+1 < 10) month = `0${date.getMonth()+1}`
    else month = date.getMonth()+1
    if (date.getDate() < 10) day = `0${date.getDate()+1}`
    else day = date.getDate()
    hours = date.getHours()
    minutes = date.getMinutes()
    return `${year}-${month}-${day}-${hours}:${minutes}`
  }
  import {getSettings,getUserInfo,jumpTo,switchTab,login,setStorage,getStorage} from '../utils/utils.js'
  export default {
    props: {
      detailInfo: Object
    },
    methods: {
      gotoDetail(id){
        jumpTo(`../orderDetails/main?id=${id}`)
      }
    },
    data () {
      return {
        
      }
    },
    created(){
      this.detailInfo.createTime = getDetailDate(new Date(this.detailInfo.createTime))
    }
  }
</script>

<style scoped>
  .info {
    width: 100vw;
    height: 110px;
    margin-top: 10px;
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
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: url("http://cx-can-read.oss-cn-beijing.aliyuncs.com/3%E9%A6%96%E9%A1%B5.png");
    background-size: 100% 110px;
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
  .sex {
    font-size: 9px;
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
  .overHide{
    overflow: hidden;
  }
</style>
