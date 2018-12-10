<template>
<div>
  <div class="setSend">
    <div class="textHolder">
        <span>
            帮我速递
        </span>
        <textarea v-model="indentContent" placeholder-class="place-holder" class="setSend-baseInfo" placeholder="送什么，取什么？输入物品名称、数量、重量等基本信息(请不要包括取件码等私密信息)" auto-focus />
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
                <span>填写待取地址</span>
              </div>
            </li>
            <li class="setSend-con-localext">
                <input v-model="takeGoodAddress" placeholder="请输入用户的取货地址"/>
            </li>
            <li class="setSend-con-localSend" @click="chooseSend">
              <div>
                <span>选择送达地址</span>
                <img class="second-img" src="/static/image/sendHelp/go.png"/>
              </div>
            </li>
            <li class="setSend-con-localext">
                <span>{{userAddr}}</span>
            </li>
            <li class="setSend-con-sendInfo">
              <div class="firstCol" @click="changeShow">
                <img src="/static/image/sendHelp/sendInfo.png"/>
                <span id="sendInfoTitle">快递信息</span>
              </div>
              <textarea v-model="secretText" class="changeDiv" placeholder="请填写取件所需的必要信息，如取件码，取件人，手机号等(订单被接后对方才能看见这些信息)"></textarea>
            </li>
            <li class="setSend-con-reward">
                <img src="/static/image/sendHelp/reward.png"/>
                <span id="rewardTitle">悬赏金</span>
                <input v-model="indentPrice" id="rewardInput" placeholder="填写悬赏金"/>
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
import card from '@/components/card';
import bottom from '@/components/bottom'
import {jumpTo} from '../../utils/utils'
import Bus from '@/mixins/event-bus'
import store from '../../store/vuex'
import {submitHelpSend} from '../../utils/API.js'
import couponInfo from '../../store/couponInfo' 

export default {
  data () {
    return {
      requireGender:'NO_LIMITED',
      indentContent:'',
      indentPrice:20,
      takeGoodAddress:'ddd',
      shippingAddressId:4,
      secretText:'aaa'
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
    }
  },
  components: {
    card,
    bottom
  },
  mounted(){
    this.couponInfo = ''
  },

  methods: {
    chooseCoupon(){
      jumpTo('../coupon/main?src=helpSend')
    },
    chooseThisSex(res){
      this.requireGender = res
    },
    chooseRecive(){
      jumpTo('../chooseAddr/main')
    },
    chooseSend(){
      jumpTo('../chooseAddr/main?src=helpSend')
    },
    submitForm(){
      let data = {
        indentType:'HELP_SEND',
        requireGender:this.requireGender,
        publisherId:store.state.userInfo.id,
        indentContent:this.indentContent,
        indentPrice:this.indentPrice,
        takeGoodAddress:this.takeGoodAddress,
        shippingAddressId:this.shippingAddressId,
        secretText:this.secretText,
        couponId:this.couponId,
        goodPrice:''
      }
      console.log(data)
      submitHelpSend(data).then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
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

