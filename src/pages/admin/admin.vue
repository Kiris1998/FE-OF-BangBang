<template>
  <div class="page">
    <div class="box">
      <img class="logo" src="../../static/image/welcome/logoS.png">
      <input type="text" placeholder="请输入手机号">
      <div class="testBox">
        <input class="test" type="text" placeholder="请输入验证码">
        <button>获取验证码</button>
      </div>
      <button class="admin">确认</button>
      <div>
        <span>登录成功即同意</span>
        <span style="color:#222222">《注册协议》</span>
        <span>和</span>
        <span style="color:#222222">《隐私政策》</span>
      </div>
    </div>
  </div>
</template>

<script>
  
</script>

<style scoped>
  .page {
    background: #e6e6e6;
    width: 100vw;
    height: 100vh;
  }
  .logo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 20px 0 65px 0;
  }
  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input {
    width: 80vw;
    margin-bottom: 15px;
    border-bottom: solid #b2b2b2 1px;
    padding-bottom: 10px;
  }
  .testBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
    border-bottom: solid #b2b2b2 1px;
  }
  .test {
    border: none;
    display: inline-block;
    width: 50%;
    margin-bottom: 0;
  }
  .test+button {
    display: inline-block;
    margin-bottom: 10px;
    height: 30px;
    line-height: 30px;
    background: black;
    color: white;
    font-size: 15px;
    margin-right: 0;
  }
  .admin {
    background: black;
    color: white;
    width: 80vw;
    height: 40px;
    line-height: 40px;
    margin: 30px 0 10px 0;
  }
  span {
    color: #808080;
    font-size: 10px;
  }
</style>
