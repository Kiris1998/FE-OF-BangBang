<template>
<div>
  <div class="setSend">
    <div class="textHolder">
        <span>
            帮我速递
        </span>
        <textarea placeholder-class="place-holder" class="setSend-baseInfo" placeholder="送什么，取什么？输入物品名称、数量、重量等基本信息(请不要包括取件码等私密信息)" auto-focus />
    </div>
    <div>
        <ul class="setSend-con">
            <li class="setSend-con-sex">
                <img src="/static/image/sendHelp/sex.png"/>
                <span>请选择您的性别</span>
                <div :id="sexChoose == 'man'?'activeClass':'errorClass'" @click="chooseThisSex('man')">男</div>
                <div :id="sexChoose == 'woman'?'activeClass':'errorClass'" @click="chooseThisSex('woman')">女</div>
                <div :id="sexChoose == 'noLimit'?'activeClass':'errorClass'" @click="chooseThisSex('noLimit')">不限</div>
            </li>
            <li class="setSend-con-localGet">
              <img class="first-img" src="/static/image/sendHelp/location.png"/>
              <div>
                <span>填写待取地址</span>
              </div>
            </li>
            <li class="setSend-con-localext">
                <input placeholder="请输入用户的取货地址"/>
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
                <!-- <span id="warning">选填</span> -->
                <img class="second-img" src="/static/image/sendHelp/go.png"/>
              </div>
              <!-- <div class="changeDiv" @click="changeShow" :id="!isClick?'show':'hide'">
                请填写取件所需的必要信息，如取件码，取件人，手机号等(订单被接后对方才能看见这些信息)
              </div> -->
              <textarea class="changeDiv" placeholder="请填写取件所需的必要信息，如取件码，取件人，手机号等(订单被接后对方才能看见这些信息)"></textarea>
              <!-- <info-sec :hiddenName="isClick"/> -->
            </li>
            <li class="setSend-con-reward">
                <img src="/static/image/sendHelp/reward.png"/>
                <span id="rewardTitle">悬赏金</span>
                <input id="rewardInput" placeholder="填写悬赏金"/>
            </li>
        </ul>
    </div>
  </div>
  <bottom></bottom>
</div>
</template>

<script>
import card from '@/components/card';
// import infoSec from '@/components/infoSec'
import bottom from '@/components/bottom'
import {jumpTo} from '../../utils/utils'
import Bus from '@/mixins/event-bus'
import store from '../../store/vuex'

export default {
  data () {
    return {
      sexChoose:'noLimit',
      address:'北京市复兴门外大街'
    }
  },
  computed: {
    userAddr() {
      return store.state.info;
    }
  },
  components: {
    card,
    // infoSec,
    bottom
  },
  mounted(){
    // Bus.$on('getAddr', params => {
    //   console.log(params)
    //   this.address = params.address
    // })
  },

  methods: {
    chooseThisSex(res){
      this.sexChoose = res
    },
    chooseRecive(){
      jumpTo('../chooseAddr/main')
    },
    chooseSend(){
      jumpTo('../chooseAddr/main')
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

