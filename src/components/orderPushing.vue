<template>
    <div class="content" @click="checkThis">
      <div class="pushing">
        <div class="pushingLogo"></div>
        <div class="pushingContent">
          <div class="pushingInfo">
            <p class="task hide">{{detailInfo.indentContent}}</p>
            <span class="hide">{{detailInfo.shippingAddress}}</span>
            <span class="hide">{{detailInfo.takeGoodAddress}}</span>
            <div class="pushingTips">
              <p class="pushingMoney">¥{{detailInfo.totalPrice}}</p>
              <p v-if="meOrOthers" class="tip">提高悬赏金可使任务更快被发现</p>
            </div>
          </div>
          <div v-if="meOrOthers" class="pushingBtn">
            <p>提高悬赏金</p>
            <button @click.stop="addMoney">+1</button>
          </div>
          <div v-else class="othersBtn" @click.stop="ToPhone">
            <img src="../static/image/phone.png">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import store from '../store/vuex'
  import {getSettings,getUserInfo,jumpTo,switchTab,login,setStorage,getStorage} from '../utils/utils.js'
  export default {
    props: {
      meOrOthers: Boolean,
      detailInfo: String
    },
    methods:{
      ToPhone(){
        let that = this
        wx.makePhoneCall({
          phoneNumber: that.detailInfo.publisherPhone
        })
      },
      checkThis(){
        if(this.meOrOthers) jumpTo(`../detailsForClient/main?id=${this.detailInfo.indentId}`)
        else jumpTo(`../orderDetails/main?id=${this.detailInfo.indentId}`)
      },
      addMoney(){
        let that = this
        wx.showModal({
          title: '加价提醒',
          content: '点击下方确定加价按钮，您的订单悬赏金额将上涨一元',
          confirmText: '确定加价',
          success(res){
            if(res.confirm){
                let cookie = ''
                getStorage('cookie').then((res) => {
                  cookie = res.data
                  wx.request({
                    url: 'https://bang.zhengsj.top/indent/price',
                    method: 'POST',
                    header: {
                      cookie:cookie
                    },
                    data: {
                      indentId: that.detailInfo.indentId,
                      userId: store.state.userInfo.id
                    },
                    success(res){
                      console.log(res);
                      if(res.statusCode == 200){
                        wx.showToast({
                          title:'加价成功'
                        })
                      }
                    }
                })
                })
            }
          }
        })
      }
    }
  }
</script>

<style scoped>
  .content {
    display: flex;
    justify-content: center;
  }
  .pushing {
    width: 95vw;
    height: 80px;
    margin-top: 10px;
    display: flex;
  }
  .pushingLogo {
    width: 25%;
    background: url("http://cx-can-read.oss-cn-beijing.aliyuncs.com/bike.png");
    height: 100%;
    background-size: 100% 80px;
  }
  .pushingContent {
    display: flex;
    width: 75%;
    background: #fdd731;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    align-items: center;
  }
  .hide{
    overflow:hidden;
    width:50%;
    display:inline-block;
    white-space:nowrap;
    text-overflow: ellipsis
  }
  .pushingInfo {
    color: #4d4d4d;
    padding: 10px 20px 5px 20px;
    font-size: 10px;
    width: 75%;
  }
  .task {
    display: block;
    padding-bottom: 3px;
    border-bottom: solid #c09d2c 1px;
    overflow: hidden;
  }
  .pushingTips {
    background: url("http://cx-can-read.oss-cn-beijing.aliyuncs.com/bar.png");
    margin-top: 5px;
    border-radius: 6px;
    background-size: 100% 33px
  }
  .pushingMoney {
    font-size: 15px;
    text-align: center;
  }
  .tip {
    color: #e0d186;
    font-size: 7px;
    text-align: center;
  }
  .pushingBtn {
    color: #4d4d4d;
    font-size: 9px;
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    margin-right: 15px;
    flex-direction: column;
  }
  .othersBtn{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    margin-right: 15px;
  }
  .pushingBtn button{
    background: #e15b4c;
    color: white;
    border-radius: 50%;
    margin: 2px 0;
  }
  .othersBtn img {
    width: 40px;
    height: 40px;
    margin: 3px;
  }
</style>
