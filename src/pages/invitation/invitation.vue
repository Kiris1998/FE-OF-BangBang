<template>
  <div class="page">
    <div class="top">
      <h3>我的邀请码</h3>
      <img class="avatr" :src=avatarUrl>
      <p>分享推荐码</p>
      <div class="sharedNum">{{id}}</div>
    </div>
    <div class="bottom">
      <h2>成功邀请好友可获得</h2>
      <img class="invitation" src="../../static/image/invitation.png">
      <button @click=share>获取邀请码</button>
    </div>  
  </div>
</template>

<script>
  import store from '../../store/vuex'
  export default{
    data() {
      return {
        avatarUrl: '',
        id: ''
      }
    },
    mounted() {
      this.avatarUrl = store.state.userInfo.avatar,
      this.id = store.state.userInfo.id
    },
    methods: {
      share() {
        wx.setClipboardData({
          data: store.state.userInfo.id,
          success (res) {
            wx.showToast({
              title: '邀请码复制成功',
              icon: 'success',
              duration: 2000
            })
          }
        })
      }
    }
  }
</script>

<style scoped>
  .avatr {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-top: 50px;
  }
  .page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h3 {
    position: absolute;
    left: 30px;
    top: 20px;
    font-size: 20px;
  }
  .avatr+p{
    text-align: center;
    color: #808080;
    font-size: 15px;
    margin-top: 8px;
  }
  .sharedNum {
    text-align: center;
    font-weight: bold;
    font-size: 50px;
    border-bottom: solid #4d4d4d 3px;
  }
  .top {
    height: 60vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .bottom {
    height: 40vh;
    background: #f0f0f0;
    width: 100vw;
  }
  h2 {
    font-weight: bold;
    color: #849eb6;
    font-size: 20px;
    margin: 40px 0 0 40px;
  }
  button {
    background: black;
    color: white;
    width: 90vw;
    position: absolute;
    bottom: 20px;
    left: 5vw;
  }
  .invitation {
    width: 250px;
    height: 50px;
    margin: 10px 0 0 60px;
  }
</style>

