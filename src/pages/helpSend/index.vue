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
                <span>请选择接单人的性别</span>
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
                <span>{{userAddr == '' ? '请选择送达地址':userAddr}}</span>
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
                <span id="rewardInput">{{couponInfo == ''?'请选择优惠券':couponInfo}}</span>
            </li>
        </ul>
    </div>
  </div>
  <bottom @submit="submitForm" :givenPrice="indentPrice" :benefit="couponInfo"></bottom>
</div>
</template>

<script>
import card from '@/components/card'
import bottom from '@/components/bottom'
import {jumpTo,throttle} from '../../utils/utils'
import store from '../../store/vuex'
import {submitHelpSend} from '../../utils/API.js'
import couponInfo from '../../store/couponInfo' 
import {showModal,showToast,showLoading,hideLoading} from '../../utils/wxAPI.js'

export default {
  data () {
    return {
      isClear:true,
      requireGender:'NO_LIMITED',
      shippingAddressId:'',
      indentContent:'',
      indentPrice:'',
      takeGoodAddress:'',
      secretText:'',
      userAddr:'',
      couponId:'',
      couponInfo:''
    }
  },
  onShow(){
    if(this.isClear){
      Object.assign(this.$data, this.$options.data())
    }
    this.isClear = true;
  },
  computed: {
    userAddr1() {
      let info = store.state.info   
      this.userAddr = info
      store.state.info = ''
    },
    coupon(){
      let info = couponInfo.state.info
      let id = couponInfo.state.id
      this.couponId = id
      this.couponInfo = info
      couponInfo.state.info = ''
      couponInfo.state.id = ''
    },
    shippingAddressId1(){
      this.shippingAddressId = store.state.id
      store.state.id = ''
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
      this.isClear = false
    },
    chooseThisSex(res){
      this.requireGender = res
    },
    chooseSend(){
      jumpTo('../chooseAddr/main?src=helpSend')
      this.isClear = false
    },
    submitForm(){
      showLoading()
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
      function test(){
        console.log(data)
        submitHelpSend(data).then((res)=>{
            hideLoading()
            showToast('订单提交成功','success',true,1000)
            setTimeout(()=>{
              wx.navigateBack()
            },1000)
        })
        .catch((err)=>{
            if(typeof(err) == Object){
                err = '发生了异常，请重试'
            }
            hideLoading()
            if(err == '用户余额不足'){
              this.isClear = false
              jumpTo('../pay/main')
            }
            showModal(err)
        })
      }
      throttle(test,300,this)()
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

