<template>
<div>
  <div class="setSend">
    <div class="textHolder">
        <span>
            随意帮
        </span>
        <textarea v-model="indentContent"  placeholder-class="place-holder" class="setSend-baseInfo" placeholder="买什么，从哪里买？输入物品名称和数量等基本信息" auto-focus />
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
      indentContent:'',
      indentPrice:'',
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
  components: {
    bottom
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
      console.log(info)
      this.couponInfo = info
      couponInfo.state.info = ''
      couponInfo.state.id = ''
    },
  },

  methods: {
    chooseCoupon(){
      this.isClear = false
      jumpTo('../coupon/main?src=helpSend')
    },
    chooseThisSex(res){
      this.requireGender = res
    },
    submitForm(){
      let data = {
        indentType:'HELP_OTHER',
        requireGender:this.requireGender,
        publisherId:store.state.userInfo.id,
        indentContent:this.indentContent,
        indentPrice:this.indentPrice,
        couponId:this.couponId
      }
      function test(){
        console.log(data)
        submitHelpSend(data).then((res)=>{
            showToast('订单提交成功','success',true,1000)
            setTimeout(()=>{
              wx.navigateBack()
            },1000)
            hideLoading()
        })
        .catch((err)=>{
          showModal(err)
          hideLoading()
        })
      }
      throttle(test,300)()
    }
  }
}
</script>

<style scoped>

</style>
<style lang="scss">
  @import '../../common/style/page/freeCarry.scss';
  page{
  background: #E6E6E6;
    margin:0 auto;
  }
</style>

