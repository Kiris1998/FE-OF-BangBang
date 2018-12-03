<template>
<div>
  <div class="setSend">
    <div class="textHolder">
        <span>
            帮我购买
        </span>
        <textarea placeholder-class="place-holder" class="setSend-baseInfo" placeholder="买什么，从哪里买？输入物品名称和数量等基本信息" auto-focus />
    </div>
    <div>
        <ul class="setSend-con">
            <li class="setSend-con-sex">
                <img src="/static/image/sendHelp/sex.png"/>
                <span>请选择您的性别</span>
                <div>男</div>
                <div>女</div>
                <div>不限</div>
            </li>
            <li class="setSend-con-localGet">
              <img class="first-img" src="/static/image/sendHelp/location.png"/>
              <div>
                <span>填写购买地址</span>
                <img class="second-img" src="/static/image/sendHelp/go.png"/>
              </div>
            </li>
            <li class="setSend-con-localext">
                <input placeholder="填写购买地址"/>
            </li>
            <li class="setSend-con-localSend">
              <div>
                <span>选择送达地址</span>
                <img class="second-img" src="/static/image/sendHelp/go.png"/>
              </div>
            </li>
            <li class="setSend-con-localext">
                <input placeholder="补充具体楼号和门牌号"/>
            </li>
            <!-- <li class="setSend-con-phone">
                <img src="/static/image/sendHelp/phone.png"/>
                <input placeholder="请填写联系电话" class="name"/>
            </li>
            <li class="setSend-con-name">
                <img src="/static/image/sendHelp/people.png"/>
                <input placeholder="请填写联系人姓名" class="name"/>
            </li> -->
            <li class="setSend-con-price">
                <img src="/static/image/sendHelp/reward.png"/>
                <span id="rewardTitle">物品金额</span>
            </li> 
            <li class="setSend-con-money">
              <input placeholder="请输入物品价格"/>
            </li>
            <li class="setSend-con-reward">
                <span id="rewardTitle">悬赏金</span>
                <input id="rewardInput" placeholder="填写悬赏金"/>
            </li> 
        </ul>
        <!-- <button class="setSend-btn">
          ￥00.00
        </button> -->
    </div>
  </div>
  <div class="setSend-bottom">
    <div class="setSend-bottom-info">
      <div class="setSend-bottom-info-1">
        下单支付：<span>￥3.00</span>
      </div>
      <div class="setSend-bottom-info-2">
        物品价格5元+基础速递费2元+悬赏金3元+优惠券0元
      </div>
    </div>
    <button>
        确认下单
    </button>
  </div>
</div>
</template>

<script>
import card from '@/components/card'
import bottom from '@/components/bottom'
import {jumpTo} from '../../utils/utils'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  components: {
    card,
    bottom
  },

  methods: {
    linkToSend(){
      jumpTo('../helpSend/main')
    },
    linkToShop(){
      jumpTo('../helpShop/main')
    }
  }
}
</script>

<style scoped>

</style>
<style lang="scss">
  @import '../../common/style/page/helpShop.scss';
  page{
  background: #E6E6E6;
    margin:0 auto;
  }
</style>

