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
  import {getSettings,getUserInfo,jumpTo,switchTab,login,setStorage,getStorage} from '../../utils/utils.js'
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
        let that = this
        wx.showModal({
          title:'请确认手机号',
          content: `请您二次验证您的手机号${this.tel}是否正确，如果正确请点击确定按钮，上传您的信息。`,
          success(res){
            if(res.confirm){
              wx.request({
                url: `https://bang.zhengsj.top/user/info/${that.userId}`,
                method: 'POST',
                header: {
                  cookie: that.cookie
                },
                data: {
                  userName: that.name2,
                  trueName: that.name,
                  phone: that.tel,
                  schoolId: that.schoolId,
                  gender: that.gender
                },
                success(res) {
                  if(res.statusCode == 200) {
                    wx.showToast({
                      title:'修改成功',
                      complete(){
                        that.num = ''
                        setTimeout(() => {
                          wx.navigateBack()
                        },500)
                      }
                    })
                  } else {
                    wx.showToast({
                      title:'修改失败，请检查信息是否填写完整',
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
      getStorage('cookie').then((res) => {
          this.cookie = res.data
        })
        getStorage('userInfo').then(res => {
            let that = this
            wx.request({
              url: `https://bang.zhengsj.top/user/${this.userId}`,
              method: 'GET',
              header: {
                Cookie: this.cookie
              },
              success(res){
                that.tel = res.data.data.phone
                that.name2 = res.data.data.userName
                that.name = res.data.data.trueName
                if (that.selectedSex !== 'NOLIMITED') {
                  that.selectedSex = res.data.data.gender == 'MALE' ? "您原来的性别是'男'" : "您原来的性别是'女'"
                }
                that.schoolId = res.data.data.schoolId
              }
            })
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

