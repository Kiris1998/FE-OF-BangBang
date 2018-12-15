<template>
  <div>
    <div class="bar">
      <div class="select">
        <span :class="{selected:myFlage}" @click="goMine">我的推荐人</span>
        <span :class="{selected:!myFlage}" @click="getMyrecommened">我推荐的人</span>
      </div>
    </div>
    <div style="margin-top:50px"></div>
    <div class="page" :style="{height: bDetailInfo.length <= 2||myFlage ? '100vh' : ''}">
      <div v-if="myFlage">
        <div class="wrapper" v-if="aDetailInfo == null">
          <div class="addPerson">
          <p>为您添加一位推荐人</p>
          <p>每单获得更高收益</p>
          <input v-model="inviteNum" type="text" placeholder=" 请输入邀请码">
          </div>
          <button class="sureInvite" @click="addPerson">确定添加</button>
        </div>
        <recommend-info v-for="item in aDetailInfo" :userInfo="item" :key="item.id"></recommend-info>
      </div>
      <div v-else>
        <div class="money">
          <p>被推荐人今日累计收益提成</p>
          <div>
            <span>{{masterIncome}}</span>
            <span>收益提成自动转入账户余额</span>
          </div>
        </div>
        <recommend-info v-for="item in bDetailInfo" :userInfo="item" :key="item.id"></recommend-info>
      </div>
      <button class="invibtn" @click="gotoInvite" :class="{addToInvitBtn: bDetailInfo.length <= 2||myFlage}">邀请有奖</button>
    </div>
  </div>
</template>

<script>
  import recommendInfo from '@/components/recommendInfo'
  import store from '../../store/vuex'
  import {getSettings,getUserInfo,jumpTo,switchTab,login,setStorage,getStorage} from '../../utils/utils.js'
  import { userInfo } from 'os';
  export default {
    data() {
      return {
        cookie: '',
        aDetailInfo: [],
        bDetailInfo: '',
        inviteNum:'',
        myFlage: true,
        userInfo: '',
        masterIncome: ''
      }
    },
    components: {
      recommendInfo
    },
    onLoad() {
      getStorage('cookie').then(res => {
        this.cookie = res.data
        getStorage('userInfo').then(res => {
        this.userInfo = res.data
        let that = this
        wx.request({
          url: `https://bang.zhengsj.top/user/master/${this.userInfo.id}`,
          method: 'GET',
          header: {
            cookie: this.cookie
          },
          success(res){
            that.aDetailInfo.push(res.data.data)
            console.log(res.data.data)
          }
        })
      })
      })
    },
    methods: {
      gotoInvite(){
        jumpTo('../invitation/main')
      },
      goMine: function () {
        this.myFlage = true
      },
      getMyrecommened: function () {
        console.log(111);
        let that = this
        this.myFlage = false
        wx.request({
          url: `https://bang.zhengsj.top/user/apprentices/${this.userInfo.id}`,
          method:'GET',
          header: {
            cookie: this.cookie
          },
          success(res) {
            console.log(res.data.data)
            that.bDetailInfo = res.data.data
            console.log(that.bDetailInfo);
          }
        })
        wx.request({
          url: `https://bang.zhengsj.top/user/income/master/${this.userInfo.id}`,
          method:'GET',
          header: {
            cookie: this.cookie
          },
          success(res) {
            that.masterIncome = res.data.data.masterIncome
          }
        })
      },
      addPerson(){
        let that = this
        wx.request({
          url:`https://bang.zhengsj.top/user/master/${this.userInfo.id}/${this.inviteNum}`,
          method: 'POST',
          header: {
            cookie: this.cookie
          },
          success(res){
            console.log(res);
          }
        })
      }
    }
  }
</script>

<style scoped>
  .page {
    background: #e2e2e2;
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
  .invibtn {
    background: black;
    color: white;
    width: 90vw;
  }
  .addToInvitBtn {
    position: absolute;
    bottom: 20px;
    left: 5vw;
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
    margin-top:-20px;
  }
  .addPerson p:nth-child(1) {
    font-weight: bold;
  }
  .addPerson p:nth-child(2) {
    color: #808080;
    font-size: 15px;
  }
  .sureInvite {
    width: 300px;
    width:100px;
    background:black;
    color:white;
    font-size:15px;

  }
  input {
    background: white;
    width: 80vw;
    margin: 0 auto;
    height: 30px;
    margin-top:20px;
    border-radius:5px;
  }
  .bar {
    background: #fdd731;
    height: 50px;
    text-align: center;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
  }
  .select{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .select span {
    display: inline-block;
    padding:0 10px 5px 10px;
  }
  .select span:nth-child(1){
    margin-right: 50px;
  }
  .selected {
    border-bottom: solid #e15b4c 3px;
  }
   .money {
    margin-top: 20px;
    width: 90vw;
    border-bottom: #b7b7b7 solid 1px;
    border-top: #b7b7b7 solid 1px;
    padding: 15px 0;
    margin-bottom: 20px;
  }
  .money p {
    color: #b7b7b7;
    font-size: 13px;
  }
  .money div {
    display: flex;
    justify-content: space-between;
  }
  .money div span:nth-child(1) {
    font-size: 40px;
    font-weight: bold;
  }
  .money div span:nth-child(2) {
    font-size: 13px;
    color: #717071;
    position: relative;
    top: 35px;
  }
</style>
