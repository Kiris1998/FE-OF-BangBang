<template>
  <div class="page" :style="{height: orderInfos.length <= 2 ? '100vh' : ''}">
    <swiper indicator-dots=true
            autoplay=true
            indicator-color="#a9a8a9"
            indicator-active-color="#444444"
            class="swiper">
      <block v-for="(item,index) in pictures" :index="index" :key="index">
        <swiper-item>
          <image :src="item" mode="widthFix"/>
        </swiper-item>
      </block>
    </swiper>
    <div class="bar">
      <div :class="{selected:selectedNum === 0}" @click="selectedNum = 0">默认</div>
      <div :class="{selected:selectedNum === 1}" @click="selectedNum = 1">时间</div>
      <div :class="{selected:selectedNum === 2}" @click="selectedNum = 2">价格</div>
    </div>
    <index-infos v-for="item in orderInfos" :key="item.indentId" :detailInfo="item"></index-infos>
  </div>
</template>

<script>
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
        pictures: [
        ],
        selectedNum: 0,
        sex: '',
        sort: 0,
        orderInfos:[],
        cookie: ''
      }
    },
    onReady(){
      let that = this
      var code;
      var encryptedData;
      var iv;
      var header
      showLoading()
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
            sort: this.sort
          },
          success(res){
            console.log(res);
            that.orderInfos = res.data.data
          }
        })
      })
      getStorage('userInfo').then((res)=>{
          store.commit('getUserDetail', res.data)
          that.sex = res.data.gender
          hideLoading()
      })
      .catch(()=>{
        getUserInfo()
        .then((res)=>{
            encryptedData = res.encryptedData
            iv = res.iv
            return login()
        })
        .then((res)=>{
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
          setStorage('cookie',header["Set-Cookie"])
        })
        .catch(()=>{
          console.log('登录失败')
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
