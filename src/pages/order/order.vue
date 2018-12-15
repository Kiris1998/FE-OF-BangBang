<template>
  <div class="page">
    <div class="bar">
      <div class="select">
        <span :class="{selected:myFlage}" @click="goMine">我的发布</span>
        <span :class="{selected:!myFlage}" @click="goOthers">我的抱单</span>
      </div>
    </div>
    <div style="margin-top:50px"></div>
    <order-pushing v-for="item in pushingDoing" :meOrOthers="myFlage" :detailInfo="item" :key="item.id">
    </order-pushing>
    <p v-if="myFlage" class="title">已完成订单</p>
    <p v-else class="title">已完成抱单</p>
    <finished-pushing v-for="item in pushingCompleted" :meOrOthers="myFlage" :detailInfo="item" :key="item.id">
    </finished-pushing>
  </div>
</template>

<script>
  import orderPushing from '@/components/orderPushing'
  import finishedPushing from '@/components/finishedPushing'
  import store from '../../store/vuex'
  import {getSettings,getUserInfo,jumpTo,switchTab,login,setStorage,getStorage} from '../../utils/utils.js'
  export default{
    components: {
      orderPushing,
      finishedPushing
    },
    data () {
      return {
        myFlage: true,
        pushingCompleted: [],
        pushingDoing: [],
        performCompleted: [],
        performDoing: []
      }
    },
    methods: {
      goMine: function () {
        this.myFlage = true
        this.getPushing()
      },
      goOthers: function () {
        this.myFlage = false
        let id = store.state.userInfo.id
        let cookie = ''
        let that = this
        getStorage('cookie').then((res) => {
          cookie = res.data
          wx.request({
            url: `https://bang.zhengsj.top/indent/performer/${id}`,
            method: 'GET',
            header: {
              cookie:cookie
            },
            success(res){
              console.log(res);
              that.pushingCompleted = []
              that.pushingDoing = []
              res.data.data.forEach(item => {
                item.updateTime = new Date(item.updateTime).toLocaleString()
                if(item.indentState === "COMPLETED") that.pushingCompleted.push(item)
                else that.pushingDoing.push(item)
              })
              console.log(that.pushingCompleted);
              console.log(that.pushingDoing);
            }
          })
        })
      },
      checkThis(){
        console.log('aaa')
      },
      getPushing(){
        let id = store.state.userInfo.id
        let cookie = ''
        let that = this
        getStorage('cookie').then((res) => {
          cookie = res.data
          wx.request({
            url: `https://bang.zhengsj.top/indent/publisher/${id}`,
            method: 'GET',
            header: {
              cookie:cookie
            },
            success(res){
              that.pushingCompleted = []
              that.pushingDoing = []
              res.data.data.forEach(item => {
                item.updateTime = new Date(item.updateTime).toLocaleString()
                if(item.indentState === "COMPLETED") that.pushingCompleted.push(item)
                else that.pushingDoing.push(item)
              })
              console.log(that.pushingCompleted);
              console.log(that.pushingDoing);
            }
          })
        })
      }
    },
    mounted(){
      this.getPushing()
    }
  }
</script>

<style scoped>
  .page {
    background: #e6e6e6;
    width: 100vw;
    height: 100vh;
  }
  .title {
    font-weight: bold;
    color: #808080;
    display: block;
    margin: 20px 0 5px 20px;
    font-size: 15px;
  }
  .bar {
    background: #fdd731;
    height: 50px;
    text-align: center;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
  }
  .select{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .select span {
    display: inline-block;
    padding:0 10px 5px 10px;
  }
  .select span:nth-child(1){
    margin-right: 50px;
  }
  .selected {
    border-bottom: solid #e15b4c 3px;
  }
</style>
