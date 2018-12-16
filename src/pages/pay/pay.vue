<template>
  <div class="page">
    <div style="position:relative">
      <label>充值金额</label>
      <input v-model="num" placeholder="请输入充值金额">
    </div>
    <button @click="throttlePay">微信付款</button>
  </div>
</template>

<script>
  import {getSettings,getUserInfo,jumpTo,switchTab,login,setStorage,getStorage} from '../../utils/utils.js'
  import { setTimeout } from 'timers';
import { showLoading, hideLoading } from '../../utils/wxAPI.js';
  function throttle(fn){
        let timer
        return function () {
          showLoading()
          if(!timer){
            timer = setTimeout(() => {
              fn.call(this)
              hideLoading()
              timer = null
            }, 3000);
          }
        }
      }
      function pay(){
        if(!this.num) {
          wx.showToast({
            icon:'none',
            title: '请输入充值金额！'
          })
        } else {
        getStorage('cookie').then((res) => {
            this.cookie = res.data
        })
        getStorage('userInfo').then(res => {
          this.id = res.data.id
          let that = this
          wx.request({
            url: `https://bang.zhengsj.top/pay/prepay`,
            method: 'POST',
            header: {
              Cookie: this.cookie
            },
            data:{
              totalFee: this.num,
              userId: this.id
            },
            success(res){
              let {timeStamp,nonceStr,signType} = res.data.data
              let paka = res.data.data.package
              let paySign = res.data.data.sign
              wx.requestPayment({
                timeStamp,
                nonceStr,
                signType,
                paySign,
                package: paka,
                success:function(res){
                  console.log(111);
                  wx.showToast({
                    title:'充值成功',
                    complete(){
                      that.num = ''
                      setTimeout(() => {
                        wx.navigateBack()
                      },1500)
                    }
                  })
                },
                fail:function(){
                  wx.showToast({
                    title:'充值失败',
                    complete(){
                      that.num = ''
                      setTimeout(() => {
                        wx.navigateBack()
                      },1500)
                    }
                  })
                }
              })
              that.payData = res.data.data
            }
          })
        })
        }
      }
  export default{
    data(){
      return {
        num: '',
        cookie: '',
        id: '',
        payData:''
      }
    },
    methods: {
      throttlePay: throttle(pay)
    }
  }
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
