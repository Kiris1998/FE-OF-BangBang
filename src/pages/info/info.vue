<template>
  <div class="pages">
    <div class="avatRow">
      <span>头像</span>
      <img class="avatr" src="http://thyrsi.com/t6/400/1540826774x1822611437.jpg">
    </div>
    <div class="inputRow">
      <span>姓名： </span>
      <input type="text" v-model="name" placeholder-class="small" placeholder="为了保证交易安全请填写真实姓名">
    </div>
    <div class="selectRow">
      <div>
        <span>性别： </span>
        <span class="small">请选择性别</span>
      </div>
      <div>
        <span>男</span>
        <span>女</span>
      </div>
    </div>
    <div class="inputRow">
      <span>昵称： </span>
      <input v-model="name2" type="text" placeholder-class="small" placeholder="输入你的昵称">
    </div>
    <div class="inputRow">
      <span>电话： </span>
      <input v-model="tel" type="text" placeholder-class="small" placeholder="填写你的电话">
    </div>
    <div class="inputRow">
      <span>学校： </span>
      <input v-model="school" type="text" placeholder-class="small" placeholder="填写学校全称">
    </div>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: '',
        name2: '',
        tel: '',
        school: ''
      }
    },
    methods: {
      submit: function () {
        console.log(this.name)
      }
    }
  }
</script>

<style scoped>
  .pages {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .avatr {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  .avatRow {
    display: flex;
    justify-content: space-between;
    width: 90vw;
    align-items: center;
    border-bottom: solid #b2b2b2 1px;
  }
  .inputRow {
    display: flex;
    align-items: center;
    border-top: solid #b2b2b2 1px;
    padding: 10px 0;
  }
  .avatRow+.inputRow {
    border: none;
  }
  .inputRow input {
    width: 70vw;
    display: inline-block;
  }
  .inputRow span {
    margin-left: -10px;
  }
  .small{
    font-size: 12px;
  }
  .selectRow {
    display: flex;
    justify-content: space-between;
    width: 90vw;
    border-top: solid #b2b2b2 1px;
  }
  .selectRow div:nth-child(2) span{
    display: inline-block;
    width: 30px;
    height: 10px;
    padding: 10px 20px;
    border: solid #fed901 1px;
    text-align: center;
    line-height: 10px;
    border-radius: 10px;
  }
</style>

