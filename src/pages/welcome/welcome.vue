<template>
  <div class="page">
    <img class="logo" src="../../static/image/welcome/logo.png">
    <p>让美好的遇见从帮帮开始</p>
    <button open-type="getUserInfo" @getuserinfo="bindinfo">获取用户的信息</button>
  </div>
</template>

<script>
import {showModal,showToast,showLoading,hideLoading} from '../../utils/wxAPI.js'
import {getSettings,getUserInfo,jumpTo,switchTab} from '../../utils/utils.js'
export default{
  data(){
    return{
      num:2
    }
  },
  mounted(){
    showLoading()
    getSettings().then((res)=>{
      hideLoading()
      var authInfo = res.authSetting['scope.userInfo'];
      //如果没有做过授权或者用户拒绝了授权
      if(authInfo == undefined || authInfo == false){
        showModal('请授权，否则无法正常使用')
      } else{
        showToast('您已授权，即将进入小程序首页','none',true)
        setTimeout(()=>{
          switchTab('../index/main')
        },1500)
      }
    },(err)=>{
        hideLoading()
        showToast('获取授权信息失败，请稍后重试')
    })
  },
  methods: {
    bindinfo:function(){
      showLoading()
      getUserInfo().then((res)=>{
        hideLoading()
        showToast('授权成功','success')
        setTimeout(()=>{
          switchTab('../index/main')
        },1500)
      },(err)=>{
        hideLoading()
        showToast('授权失败,请重试')
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
    height: 200px;
    width: 200px;
    position: relative;
    bottom: 180px;
  }
  p {
    margin-top: -130px;
    font-weight: bolder;
    font-size: 25px;
  }
</style>
