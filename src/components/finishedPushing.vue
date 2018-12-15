<template>
  <div class="oldOrders" @click="checkThis">
     <div class="info">
      <div class="row">
        <div class="orderInfo">
          <img class="avatr" :src="detailInfo.performerAvatar">
          <span v-if="meOrOthers" class="orderHelper" :style="{color: detailInfo.performerGender == 'MALE' ? '#248cd6' : '#eb2f74'}">
            {{detailInfo.performerNickName}}|
          </span>
          <span v-else class="orderHelper" :style="{color: detailInfo.publisherGender == 'MALE' ? '#248cd6' : '#eb2f74'}">
            {{detailInfo.publisherNickName}}|
          </span>
          <span class="hide">{{meOrOthers?detailInfo.performerSchool:detailInfo.publisherSchool}}</span>
          <span v-if="meOrOthers" :style="{color: detailInfo.performerGender == 'MALE' ? '#248cd6' : '#eb2f74'}" style="margin: 5px 0 0 7px;">
            {{detailInfo.performerGender == 'MALE' ? '♂' : '♀'}}
          </span>
          <span v-else :style="{color: detailInfo.publisherGender == 'MALE' ? '#248cd6' : '#eb2f74'}" style="margin: 5px 0 0 7px;">
            {{detailInfo.publisherGender == 'MALE' ? '♂' : '♀'}}
          </span>
        </div>
        <div style="position:relative;right:35px;">
          <span class="orderDate">{{detailInfo.updateTime}}| </span>
          <span>已完成</span>
        </div>
      </div>
      <div class="details">
        <p><i class="iconfont icon-bijiben-copy"></i> {{detailInfo.indentContent}}</p>
        <p><i class="iconfont icon-quhaopaidui"></i> {{detailInfo.shippingAddress}}</p>
        <p><i class="iconfont icon-distribution"></i> {{detailInfo.takeGoodAddress}}</p>
      </div>
      <div class="lastRow">
        <div class="orderMoney">
          <span>成交金额:</span>
          <span style="font-size:20px;color:black;font-weight:bold;">¥{{detailInfo.totalPrice}}.00</span>
        </div>
        <div class="btns">
          <button v-if="meOrOthers" @click.stop="callPerformer">联系接单人</button>
          <button v-else @click.stop="callPublishmer">联系发单人</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getSettings,getUserInfo,jumpTo,switchTab,login,setStorage,getStorage} from '../utils/utils.js'
  export default {
    props: {
      meOrOthers: Boolean,
      detailInfo: Object
    },
    methods: {
      callPerformer(){
        let that = this
        wx.makePhoneCall({
          phoneNumber: that.detailInfo.performerPhone
        })
      },
      callPublishmer(){
        let that = this
        wx.makePhoneCall({
          phoneNumber: that.detailInfo.publisherPhone
        })
      },
      checkThis(){
        if(this.meOrOthers) jumpTo(`../detailsForClient/main?id=${this.detailInfo.indentId}`)
        else jumpTo(`../orderDetails/main?id=${this.detailInfo.indentId}`)
      }
    }
  }
</script>

<style scoped>
  .info {
    background: white;
    width: 100vw;
    height: 150px;
    padding: 10px 0 0 10px;
    margin-bottom: 7px;
  }
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .hide{
    overflow:hidden;
    width:80px;
    display:inline-block;
    white-space:nowrap;
    text-overflow: ellipsis
  }
  .orderInfo {
    display: flex;
  }
  .avatr {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .orderHelper {
    color: #2c8dd3;
    position: relative;
    left: 3px;
    top: 5px;
    font-weight: 800;
  }
  .orderHelper+span {
    color: #b2b2b2;
    font-size: 13px;
    position: relative;
    left: 6px;
    top: 12px;
  }
  .orderDate {
    color: #b2b2b2;
    font-size: 9px;
  }
  .orderDate+span {
    color: #7d7d7d;
    font-size: 15px;
  }
  .details {
    display: flex;
    flex-direction: column;
    color: #808080;
    font-size: 13px;
    margin-left: 40px;
  }
  .details p {
    margin: 3px;
  }
  .lastRow {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-top: 7px;
  }
  .orderMoney {
    color: #808080;
    margin-left: 50px;
  }
  .btns button{
    display: inline-block;
    width: 80px;
    height: 20px;
    line-height: 18px;
    margin-right: 3px;
    font-size: 8px;
    color: #808080;
    border: solid #b1b1b1 1px;
    border-radius: 10px;
    background: white;
  }
  .btns {
    margin-right: 20px;
  }
  i {
    display: inline;
    color: #fdd731;
  }

@font-face {
  font-family: 'iconfont';  /* project id 914500 */
  src: url('//at.alicdn.com/t/font_914500_ubqrj79mjt.eot');
  src: url('//at.alicdn.com/t/font_914500_ubqrj79mjt.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_914500_ubqrj79mjt.woff') format('woff'),
  url('//at.alicdn.com/t/font_914500_ubqrj79mjt.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_914500_ubqrj79mjt.svg#iconfont') format('svg');
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-quhaopaidui:before { content: "\e639"; }

.icon-distribution:before { content: "\e659"; }

.icon-bijiben-copy:before { content: "\e62c"; }


</style>
