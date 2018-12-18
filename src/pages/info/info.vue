<template>
  <div class="pages">
    <div class="avatRow">
      <span>头像</span>
      <img class="avatr" :src=avatarUrl>
    </div>
    <div class="inputRow">
      <span>姓名： </span>
      <input type="text" v-model="name" placeholder-class="small" placeholder="为了保证交易安全请填写真实姓名">
    </div>
    <div class="selectRow">
      <div style="margin-left:-10px">
        <span>性别：</span>
        <span :class=sexClass >{{selectedSex}}</span>
      </div>
      <div>
        <span @click="gender='MALE';selectedSex = '男';sexClass = 'big'">男</span>
        <span @click="gender='FEMALE';selectedSex = '女';sexClass = 'big'">女</span>
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
      <picker :range="array" :value="schoolId" @change="selectSchool($event)">
        <span> 学校： </span><span :class="{small:schoolId == 0}" style="width:70vw;display:inline-block">{{array[schoolId]}}</span>
      </picker>
    </div>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
  import store from '../../store/vuex'
  export default {
    data () {
      return {
        name: '',
        name2: '',
        tel: '',
        avatarUrl: '',
        userId: '',
        nickName: '',
        gender: null,
        cookie: '',
        selectedSex: '请选择您的性别',
        sexClass:'small',
        array: ['请选择您的学校', '西安邮电大学', '陕西国际商贸学院', '陕西科技大学镐京学院','欧亚学院','西京学院','西北大学','西安工业大学','咸阳财经学院','西安电子科技大学','西安体育学院','西安美术学院','西安科技大学'],
        schoolId: 0
      }
    },
    methods: {
      submit: function () {
        console.log(this.name);
        console.log(this.name2);
        console.log(this.tel);
        console.log(this.name);
        console.log(this.gender);
        wx.request({
          url: `https://bang.zhengsj.top/user/info/${this.userId}`,
          method: 'POST',
          header: {
            cookie: this.cookie
          },
          data: {
            userName: this.name2,
            trueName: this.name,
            phone: this.tel,
            schoolId: this.schoolId,
            gender: this.gender,
            userName: this.name2
          },
          success(res) {
            if(res.statusCode == 200) {
              wx.showToast({
                title:'修改成功',
                complete(){
                  that.num = ''
                  setTimeout(() => {
                    wx.navigateBack()
                  },1500)
                }
              })
            } else {
              wx.showToast({
                title:'修改失败，请检查信息',
                icon: 'none',
                complete(){
                  that.num = ''
                  setTimeout(() => {
                    wx.navigateBack()
                  },1500)
                }
              })
            }
          }
        })
      },
      selectSchool(e){
        this.schoolId = e.mp.detail.value
      }
    },
    onLoad () {
      this.avatarUrl = store.state.userInfo.avatar,
      this.userId = store.state.userInfo.id
      let that = this
      wx.getStorage({
        key:'cookie',
        success(res){
          that.cookie = res.data
        },
      })
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
    background: #fed901;
    color: white;
    text-align: center;
    line-height: 6px;
    border-radius: 15px;
    font-size: 13px;
    margin: 0 4px;
  }
  button {
    background: #fed901;
    color: white;
    width: 100px;
    height:40px;
    line-height:40px;
    margin-top:30px;
}
</style>

