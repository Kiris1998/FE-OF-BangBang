<template>
  <div class="page">
    <!-- <img class="logo" src="http://thyrsi.com/t6/400/1540826774x1822611437.jpg"> -->
    <p id="text" @click="aa">让美好的遇见从帮帮开始</p>
    <button open-type="getUserInfo" @getuserinfo="bindinfo">获取用户的信息</button>
  </div>
</template>

<script>
import {showLoading} from '../../utils/utils.js'
export default{
  data(){
    return{
      num:2
    }
  },
  beforeCreate: function(){
    var obj = {
      name:'liming',
      age:6,
      sex:'man'
    }
    showLoading(obj)
  },
  created(){
    wx.getSetting({
      success(res) {
        wx.hideLoading()
        if(res.authSetting['scope.userInfo'] == undefined || res.authSetting['scope.userInfo'] == false){
          wx.showModal({
            title: '提示',
            content: '请授权，否则无法正常使用'
          })
        }else{
          //跳转到主页面
          console.log('已授权')
        }
        wx.hideLoading()
      }
    })
  },
  methods: {
    aa:function(e){
      console.log(e)
    },
    bb:function(){
      console.log(this)
      this.num++;
    },
    bindinfo:function(){
      wx.getUserInfo({
        success: function (res) {
          wx.showToast({
            title:'授权成功'
          })
          setTimeout(()=>{
            console.log('eee')
          },1500)
        },
        fail: function () {
          wx.showToast({
            icon:'none',
            title:'请点击授权',
            duration: 2000
          });
        }
        })
    },
  }
}  
</script>

<style scoped>
  .page {
    background: #ffcc00;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .logo {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    position: relative;
    bottom: 120px;
  }
</style>
