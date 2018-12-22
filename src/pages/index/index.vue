<template>
  <div class="page" :style="{height: orderInfos.length <= 2 ? '100vh' : ''}">
    <swiper indicator-dots=true
            autoplay=true
            indicator-color="#a9a8a9"
            indicator-active-color="#444444"
            class="swiper">
      <block v-for="(item,index) in coupons" :index="index" :key="index">
        <swiper-item @click="fetchCoupon(index)">
          <image :src="item.pictureLink" mode="widthFix"/>
        </swiper-item>
      </block>
    </swiper>
    <div class="bar">
      <div :class="{selected:selectedNum === 0}" @click="selectDefault">默认</div>
      <div :class="{selected:selectedNum === 1}" @click="selectTime">时间</div>
      <div :class="{selected:selectedNum === 2}" @click="selectPrice">价格</div>
    </div>
    <index-infos v-for="item in orderInfos" :key="item.indentId" :detailInfo="item"></index-infos>
  </div>
</template>

<script>
  function goInfo(){
     
  }
  import globalStore from '@/store/vuex.js'
  import indexInfos from '@/components/indexInfos'
  import store from '../../store/vuex'
  import {showModal,showToast,showLoading,hideLoading} from '../../utils/wxAPI.js'
  import {getSettings,getUserInfo,jumpTo,switchTab,login,setStorage,getStorage} from '../../utils/utils.js'
  import {getUserInfor} from '../../utils/API.js'
import { fail } from 'assert';
  export default {
    components: {
      indexInfos
    },
    data () {
      return {
        coupons: [
        ],
        selectedNum: 0,
        sex: '',
        orderInfos:[],
        cookie: '',
        id: ''
      }
    },
    methods:{
      getList(sort){
        let that = this
        getStorage('cookie').then((res) => {
          this.cookie = res.data
          wx.request({
            url: "https://bang.zhengsj.top/indent/list",
            method: 'GET',
            header: {
              cookie: this.cookie
            },
            data: {
              sexType: 'MALE',
              sort: sort
            },
            success(res){
              that.orderInfos = res.data.data
              console.log(res.data.data);
            }
          })
        })
      },
      getCoupons(){
        let that = this
        getStorage('cookie').then((res) => {
          this.cookie = res.data
          wx.request({
            url: "https://bang.zhengsj.top/coupon/list",
            method: 'GET',
            header: {
              cookie: this.cookie
            },
            success(res){
              // res.data.data.forEach(item => {
              //   item.pictureLink = "http://cx-can-read.oss-cn-beijing.aliyuncs.com/bike.png"
              // })
              that.coupons = res.data.data
              console.log(res.data.data);
            }
          })
        })
      },
      fetchCoupon(index){
        id = this.coupons[index].couponId
        jumpTo(`../couponInfo/main?id=${id}`)
      },
      selectTime(){
        this.selectedNum = 1
        this.getList(10)
      },
      selectPrice(){
        this.selectedNum = 2
        this.getList(20)
      },
      selectDefault(){
        this.selectedNum = 0
        this.getList(0)
      }
    },
    onReady(){
      let that = this
      var code;
      var encryptedData;
      var iv;
      var header
      showLoading()
      getUserInfo()
        .then((res)=>{
            console.log('userInfo',res)
            encryptedData = res.encryptedData
            iv = res.iv
            return login()
        })
        .then((res)=>{
            console.log('res',res)
            code = res.code
            hideLoading()
            var data = {
                "code":code,
                "encryptedData": encryptedData,
                "iv": iv
            }
            return getUserInfor(data)
        })
        .then((res)=>{
          console.log(res)
          header = res.header
          setStorage('userInfo',res.data.data)
          store.commit('getUserDetail', res.data.data)
          setStorage('cookie',header["Set-Cookie"])
          console.log('eeeee',header["Set-Cookie"])
          this.getList(0)
          this.getCoupons()
          this.sex = res.data.gender
          hideLoading()
          wx.request({
              url: `https://bang.zhengsj.top/user/${res.data.data.id}`,
              method: 'GET',
              header: {
                Cookie: this.cookie
              },
              success(res){
                let info = res.data.data
                if(info.gender=='NOLIMITED'||info.phone == null||schoolId == null||info.trueName == null||userName == null){
                  wx.showModal({
                    title:'提示',
                    content:'您的基本信息不完整，请点击确定完善信息。',
                    success(res){
                      if(res.confirm){
                        jumpTo('../info/main')
                      }
                    }

                  })
                }
              }
            })
        })
        .catch(()=>{
          console.log('登录失败')
        })
        getStorage('cookie').then((res) => {
          this.cookie = res.data
        })
        getStorage('userInfo').then(res => {
            this.id = res.data.id
            let that = this
            wx.request({
              url: `https://bang.zhengsj.top/user/${this.id}`,
              method: 'GET',
              header: {
                Cookie: this.cookie
              },
              success(res){
                let info = res.data.data
                if(info.gender=='NOLIMITED'||info.phone == null||schoolId == null||info.trueName == null||userName == null){
                  wx.showModal({
                    title:'提示',
                    content:'您的基本信息不完整，请点击确定完善信息。',
                    showCancel: false,
                    success(res){
                      if(res.confirm){
                        jumpTo('../info/main')
                      }
                    }

                  })
                }
              }
            })
        })
    }
  }
</script>

<style scoped>
  .swiper {
    height: 165px;
  }
  .swiper image {
    width: 100%;
  }
  .page {
    background: #e2e2e2;
    width: 100vw;
  }
  .bar {
    width: 100vw;
    height: 40px;
    font-size: 15px;
    box-sizing: border-box;
    background: white;
    color: #636363;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }
  .bar div {
    line-height: 40px;
    box-sizing: border-box;
    height: 100%;
    padding: 0 20px;
  }
  .selected {
    border-bottom: solid #fdd000 3px;
    color: #fdd000;
  }
</style>
