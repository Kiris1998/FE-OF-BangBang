<template>
<div>
  <div class="setSend">
    <div class="textHolder">
        <span>
            帮我速递
        </span>
        <textarea placeholder-class="place-holder" class="setSend-baseInfo" placeholder="送什么，取什么？输入物品名称、数量、重量等基本信息" auto-focus />
    </div>
    <div>
        <ul class="setSend-con">
            <li class="setSend-con-sex">
                <img src="/static/image/sendHelp/sex.png"/>
                <span>请选择您的性别</span>
                <div>男</div>
                <div>女</div>
            </li>
            <li class="setSend-con-localGet">
              <img class="first-img" src="/static/image/sendHelp/location.png"/>
              <div>
                <span>选择收货地址</span>
                <img class="second-img" src="/static/image/sendHelp/go.png"/>
              </div>
            </li>
            <li class="setSend-con-localSend">
              <div>
                <span>选择送达地址</span>
                <img class="second-img" src="/static/image/sendHelp/go.png"/>
              </div>
            </li>
            <li class="setSend-con-phone">
                <img src="/static/image/sendHelp/phone.png"/>
                <input placeholder="请填写联系电话" class="name"/>
            </li>
            <li class="setSend-con-name">
                <img src="/static/image/sendHelp/people.png"/>
                <input placeholder="请填写联系人姓名" class="name"/>
            </li>
            <li class="setSend-con-sendInfo">
              <div class="firstCol" @click="changeShow">
                <img src="/static/image/sendHelp/sendInfo.png"/>
                <span id="sendInfoTitle">快递信息</span>
                <span id="warning">选填</span>
                <img class="second-img" src="/static/image/sendHelp/go.png"/>
              </div>
              <div class="changeDiv" @click="changeShow" :id="!isClick?'show':'hide'">
                代取快递是填写具体取件码和快递公司信息，此内容属于隐私内容，接单人接单后放可以查看
              </div>
              <info-sec :hiddenName="isClick"/>
            </li>
            <li class="setSend-con-reward">
                <img src="/static/image/sendHelp/reward.png"/>
                <span id="rewardTitle">悬赏金</span>
                <input id="rewardInput" placeholder="填写悬赏金"/>
            </li>
        </ul>
        <button class="setSend-btn">
          ￥00.00
        </button>
    </div>
  </div>
  <div class="setSend-bottom">
    <div class="setSend-bottom-info">
      <div class="setSend-bottom-info-1">
        下单支付：<span>￥3.00</span>
      </div>
      <div class="setSend-bottom-info-2">
        基础速递费2元+悬赏金3元+优惠券0元
      </div>
    </div>
    <button>
        确认下单
    </button>
  </div>
</div>
</template>

<script>
import card from '@/components/card';
import infoSec from '@/components/infoSec'

export default {
  data () {
    return {
      isClick:false
    }
  },

  components: {
    card,
    infoSec
  },

  methods: {
    changeShow(){
      this.isClick = !this.isClick
    }
  }
}
</script>

<style scoped>

</style>
<style lang="scss">
  @import '../../common/style/page/helpSend.scss';
  page{
    background: #E6E6E6;
  }
</style>

