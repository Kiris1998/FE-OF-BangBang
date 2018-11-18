<template>
  <div class="page">
    <div class="top">
      <h3>我的邀请码</h3>
      <img class="avatr" src="http://thyrsi.com/t6/400/1540826774x1822611437.jpg">
      <p>分享推荐码</p>
      <div class="sharedNum">123456</div>
    </div>
    <div class="bottom">
      <h2>成功邀请好友可获得</h2>
      <img class="invitation" src="../../static/image/invitation.png">
      <button><i class="iconfont icon-weixin"></i> 微信分享</button>
    </div>  
  </div>
</template>

<script>
  
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

@font-face {
  font-family: 'iconfont';  /* project id 916915 */
  src: url('//at.alicdn.com/t/font_916915_hvtrjg55vk.eot');
  src: url('//at.alicdn.com/t/font_916915_hvtrjg55vk.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_916915_hvtrjg55vk.woff') format('woff'),
  url('//at.alicdn.com/t/font_916915_hvtrjg55vk.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_916915_hvtrjg55vk.svg#iconfont') format('svg');
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:25px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-weixin:before { content: "\e608"; }

i {
  display: inline;
}
</style>

