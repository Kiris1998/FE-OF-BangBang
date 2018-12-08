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
      <div style="margin-left:-10px">
        <span>性别：</span>
        <span class="small">请选择性别</span>
      </div>
      <div>
        <span :id="form.sexChoose == 'MALE'?'activeClass':'errorClass'" @click="chooseThisSex('MALE')">男</span>
        <span :id="form.sexChoose == 'FEMALE'?'activeClass':'errorClass'" @click="chooseThisSex('FEMALE')">女</span>
      </div>
    </div>
    <div class="inputRow">
      <span>昵称： </span>
      <input v-model="form.nickName" type="text" placeholder-class="small" placeholder="输入你的昵称">
    </div>
    <div class="inputRow">
      <span>电话： </span>
      <input v-model="form.tel" type="text" placeholder-class="small" placeholder="填写你的电话">
    </div>
    <div class="inputRow">
      <span>学校： </span>
      <input v-model="form.school" type="text" placeholder-class="small" placeholder="填写学校全称">
    </div>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
  import store from '../../store/vuex'
  export default{
    data () {
      return {
        form:{
          name: '',
          nickName: '',
          tel: '',
          school: '',
          sexChoose:'MALE',
        }
      }
    },
    methods: {
      submit() {
        wx.request({
          url: `https://bang.zhengsj.top/user/info/${store.state.userInfo.id}`, 
          method:'POST',
          data: {
            userName:this.form.nickName,
            trueName:this.form.name,
            phone:this.form.tel,
            schoolId:9,
            gender:this.form.sexChoose
          },
          success (res) {
            console.log(res)
          },
          fail(){

          }
        })
        console.log(this.form.name)
      },
      chooseThisSex(sex){
        this.form.sexChoose = sex
        console.log(this.form.sexChoose)
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
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .avatRow {
    display: flex;
    justify-content: space-between;
    width: 90vw;
    align-items: center;
    border-bottom: solid #e0e0e0 1px;
    height: 180px;
    margin-bottom: 10px;
  }
  .inputRow {
    display: flex;
    align-items: center;
    border-top: solid #e0e0e0 1px;
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
    color: #808080;
  }
  .selectRow {
    display: flex;
    justify-content: space-between;
    width: 83vw;
    border-top: solid #e0e0e0 1px;
    padding: 10px 0;
  }
  .selectRow div:nth-child(2) span{
    display: inline-block;
    width: 25px;
    height: 6px;
    padding: 7px 13px;
    border: solid #fed901 1px;
    text-align: center;
    line-height: 6px;
    border-radius: 15px;
    font-size: 13px;
    color: #808080;
    margin: 0 4px;
  }
  #activeClass{
    border-color: brown
  }
  #errorClass{
    border-color: chartreuse
  }   
</style>

