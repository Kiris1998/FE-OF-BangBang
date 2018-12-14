<template>
    <div class="order">
        <div class="order-title"> 
            Billy.Z的帮购订单详情
        </div>
        <div class="order-details">
            <div class="avatar">
            </div>
            <div class="rightSide">
                <div class="firstRow">
                    <span>Billy.Z</span>
                    <img src="/static/image/orderDetails/man.png"/>
                </div>
                <span class="college">{{info.performerSchool}}</span>
                <ul class="list">
                    <li class="remark">
                        <img class="first" src="/static/image/orderDetails/details.png"/>
                        <div>{{info.indentContent}}</div>
                    </li>
                    <li class="address">
                        <img class="first" src="/static/image/orderDetails/fetch.png"/>
                        <div>{{info.takeGoodAddress}}</div>
                    </li>
                    <li class="address">
                        <img class="first" src="/static/image/orderDetails/send.png"/>
                        <div>{{info.shippingAddress}}</div>
                    </li>
                    <li v-show="info.secretText != ''" class="secret">
                        <div>{{info.secretText}}</div>
                    </li>
                    <li class="reward">
                        <img class="first" src="/static/image/orderDetails/send.png"/>
                        <div>可获得金额 （元）</div>
                        <div class="price"><span>￥</span>{{info.indentPrice}}</div>
                    </li>        
                </ul>
            </div>
        </div>
        <div class="order-status">
            <div class="progressBar">
                <div class="line">
                </div>
                <div class="circle">
                    <span :style="{ background: status.first}"></span>
                    <span :style="{ background: status.second}"></span>
                    <span :style="{ background: status.third}"></span>
                    <span :style="{ background: status.fourth}"></span>
                </div>
                <div class="theLabel">
                    <span :style="{ color: status.first}">
                        新发布
                    </span>
                    <span :style="{ color: status.second}">
                        已接单
                    </span>
                    <span :style="{ color: status.third}">
                        已送达
                    </span>
                    <span :style="[{ 'color': status.fourth,'margin-right':0 }]">
                        完成订单
                    </span>
                </div>
            </div>
        </div>
        <div class="footer">信息涉及到隐私，接单后可查看更多关于订单信息。</div>
        <div class="order-bnt">
            <button :disabled="bntEnable" @click="configSend">{{state}}</button>
        </div>
        <div v-show="info.indentState != 'WAIT_FOR_PERFORMER' && info.indentState != 'COMPLETED'" class="order-bnt2">
            <button @click="deleteOrde">取消订单</button>
        </div>
    </div>
</template>

<script>
import card from '@/components/card'
import {getOrderDetails,finishOrder,deleteOrder,takeOrder,configOrder} from '../../utils/API.js'
  import {getSettings,getUserInfo,jumpTo,switchTab,login,setStorage,getStorage} from '../../utils/utils.js'
import store from '../../store/vuex'

export default {
data () {
    return {
        cookie:'',
        bntEnable:true,
        info:{
            indentType:'',
            requireGender:'',
            indentContent:'',
            indentPrice:'',
            indentState:'',
            secretText:'',
            goodPrice:'',
            takeGoodAddress:'',
            shippingAddress:'',
            publisherNickName:'',
            performerGender:'',
            performerSchool:'',
            performerAvatar:''
        },
        status:{
        }
    }
    },
    components: {
        card
    },
    computed:{
        state(){
            if(this.info.indentState == 'WAIT_FOR_PERFORMER'){
                this.bntEnable = false
                return '立即抢单'
            } else if(this.info.indentState == 'PERFORMING'){
                this.bntEnable = false
                return '确认送达'
            } else if(this.info.indentState == 'ARRIVED'){
                this.bntEnable = true
                return '已送达'
            } else{
                this.bntEnable = true
                return '订单完成'
            }
        },
    },
    mounted(){
        var data =  {
            "userId":store.state.userInfo.id,
            "indentId":32,
        }
        getOrderDetails(data).then((res)=>{
            this.info = res.data.data
            var site = {
                'WAIT_FOR_PERFORMER':{
                    first:'red',
                    second:'white',
                    third:'white',
                    fourth:'white'
                },
                'PERFORMING':{
                    first:'red',
                    second:'red',
                    third:'white',
                    fourth:'white'
                },
                'ARRIVED':{
                    first:'red',
                    second:'red',
                    third:'red',
                    fourth:'white'
                },
                'COMPLETED':{
                    first:'red',
                    second:'red',
                    third:'red',
                    fourth:'red'
                }
            }
            console.log(site[this.info.indentState])
            this.status = site[this.info.indentState]
        })
        .catch((err)=>{
            console.log(err)
        })
    },
  methods: {
      deleteOrde(){
        var data =  {
            "userId":store.state.userInfo.id,
            "indentId":32
        }
        deleteOrder(data).then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
      },
      configSend(){
        var data =  {
            "userId":store.state.userInfo.id,
            "indentId":32
        }
        finishOrder(data).then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
      },
      deleteOrde(){
        var data =  {
            "userId":store.state.userInfo.id,
            "indentId":32
        }
        deleteOrder(data).then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
      },
      configSend(){
        var data =  {
            "userId":store.state.userInfo.id,
            "indentId":32
        }
          if(this.info.indentState == 'WAIT_FOR_PERFORMER'){
              //立即抢单
            takeOrder(data).then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            })
          } else{
              //确认送达
                configOrder(data).then((res)=>{
                    console.log(res)
                })
                .catch((err)=>{
                    console.log(err)
                })
          }
      }
  }
}
</script>

<style scoped>

</style>
<style lang="scss">
  @import '../../common/style/page/orderDetails.scss';
  page{
  background: #E6E6E6;
    margin:0 auto;
  }
</style>

