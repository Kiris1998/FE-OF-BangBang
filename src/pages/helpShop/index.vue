<template>
<div>
  <div class="setSend">
    <div class="textHolder">
        <span>
            帮我购买
        </span>
        <textarea v-model="indentContent" placeholder-class="place-holder" class="setSend-baseInfo" placeholder="买什么，从哪里买？输入物品名称和数量等基本信息" auto-focus />
    </div>
    <div>
        <ul class="setSend-con">
            <li class="setSend-con-sex">
                <img src="/static/image/sendHelp/sex.png"/>
                <span>请选择您的性别</span>
                <div :id="requireGender == 'MALE'?'activeClass':'errorClass'" @click="chooseThisSex('MALE')">男</div>
                <div :id="requireGender == 'FEMALE'?'activeClass':'errorClass'" @click="chooseThisSex('FEMALE')">女</div>
                <div :id="requireGender == 'NO_LIMITED'?'activeClass':'errorClass'" @click="chooseThisSex('NO_LIMITED')">不限</div>
            </li>
            <li class="setSend-con-localGet">
              <img class="first-img" src="/static/image/sendHelp/location.png"/>
              <div>
                <span>填写购买地址</span>
                <img class="second-img" src="/static/image/sendHelp/go.png"/>
              </div>
            </li>
            <li class="setSend-con-localext">
                <input v-model="takeGoodAddress" placeholder="填写购买地址"/>
            </li>
            <li class="setSend-con-localSend" @click="chooseAddr">
              <div>
                <span>选择送达地址</span>
                <img class="second-img" src="/static/image/sendHelp/go.png"/>
              </div>
            </li>
            <li class="setSend-con-localext2">
                <span>{{userAddr}}</span>
            </li>
            <li class="setSend-con-price">
                <img src="/static/image/sendHelp/reward.png"/>
                <span id="rewardTitle">物品金额</span>
            </li> 
            <li class="setSend-con-money">
              <input placeholder="请输入物品价格"/>
            </li>
            <li class="setSend-con-reward">
                <img src="/static/image/sendHelp/reward.png"/>
                <span id="rewardTitle">悬赏金</span>
                <input v-model="indentPrice" id="rewardInput" placeholder="填写悬赏金"/>
            </li> 
            <li class="setSend-con-reward">
                <img src="/static/image/sendHelp/reward.png"/>
                <span id="rewardTitle">商品价格</span>
                <input v-model="goodPrice" id="rewardInput" placeholder="填写购买商品的价格"/>
            </li> 
            <li class="setSend-con-reward" @click="chooseCoupon">
                <img src="/static/image/sendHelp/reward.png"/>
                <span id="rewardTitle">优惠券</span>
                <span id="rewardInput">{{couponId == ''?'请选择优惠券':couponId}}</span>
            </li>
        </ul>
    </div>
  </div>
  <bottom @submit="submitForm"></bottom>
</div>
</template>

<script>
import card from '@/components/card'
import bottom from '@/components/bottom'
import {jumpTo} from '../../utils/utils'
import store from '../../store/vuex'
import {submitHelpSend} from '../../utils/API.js'
import couponInfo from '../../store/couponInfo' 
import {showModal} from '../../utils/wxAPI.js'

export default {
  data () {
    return {
      requireGender:'NO_LIMITED',
      indentContent:'',
      indentPrice:'',
      takeGoodAddress:'',
      shippingAddressId:'',
      goodPrice:'',
    }
  },
  computed: {
    userAddr() {
      return store.state.info;
    },
    couponId(){
      let info = couponInfo.state.info
      couponInfo.state.info = ''
      return info
    },
  },
  components: {
    card,
    bottom
  },
  mounted:function(){
    console.log(this.userInfo)
  },
  methods: {
    chooseCoupon(){
      jumpTo('../coupon/main?src=helpSend')
    },
    chooseThisSex(res){
      this.requireGender = res
    },
    linkToSend(){
      jumpTo('../helpSend/main')
    },
    linkToShop(){
      jumpTo('../helpShop/main')
    },
    chooseAddr(){
      jumpTo('../chooseAddr/main?src=helpShop')
    },
    submitForm(){
      let data = {
        indentType:'HELP_BUY',
        requireGender:this.requireGender,
        publisherId:store.state.userInfo.id,
        indentContent:this.indentContent,
        indentPrice:this.indentPrice,
        takeGoodAddress:this.takeGoodAddress,
        shippingAddressId:this.shippingAddressId,
        couponId:this.couponId,
        goodPrice:''
      }
      console.log(data)
      submitHelpSend(data).then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        showModal(err)
      })
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

