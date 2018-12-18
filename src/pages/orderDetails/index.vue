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
            <form @submit="configSend" report-submit="true">
                <button :disabled="bntEnable" formType="submit">{{state}}</button>
            </form>
        </div>
        <div v-show="info.indentState != 'WAIT_FOR_PERFORMER' && info.indentState != 'COMPLETED'" class="order-bnt2">
            <form @submit="deleteOrde" report-submit="true">
                <button formType="submit">取消订单</button>
            </form>
        </div>
    </div>
</template>

<script>
import card from '@/components/card'
import {getOrderDetails,deleteOrder,takeOrder,configOrder} from '../../utils/API.js'
import {getSettings,getUserInfo,jumpTo,switchTab,login,setStorage,getStorage} from '../../utils/utils.js'
import store from '../../store/vuex'
import {showModal,showToast,showLoading,hideLoading} from '../../utils/wxAPI.js'
export default {
data () {
    return {
        orderId:'',
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
        },
        site:{
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
    onLoad(options){
        showLoading()
        console.log(options.id)
        this.orderId = options.id
    },
    mounted(){
        var data =  {
            "userId":store.state.userInfo.id,
            "indentId":this.orderId,
        }
        getOrderDetails(data).then((res)=>{
            this.info = res.data.data
            this.status = this.site[this.info.indentState]
            hideLoading()
        })
        .catch((err)=>{
            hideLoading()
            showModal(err).finally(()=>{
                wx.navigateBack()
            })
        })
    },
  methods: {
      //接单人取消订单
    deleteOrde(e){
        var data =  {
            "userId":store.state.userInfo.id,
            "indentId":this.orderId,
            "formId":e.mp.detail.formId
        }
        showModal('您是否确定要取消这个订单？').then(()=>{
            showLoading()
            deleteOrder(data).then((res)=>{
                var data =  {
                    "userId":store.state.userInfo.id,
                    "indentId":this.orderId,
                }
                getOrderDetails(data).then((res)=>{
                    this.info = res.data.data
                    this.status = this.site[this.info.indentState]
                    hideLoading()
                })
                .catch((err)=>{
                    hideLoading()
                    showModal(err).finally(()=>{
                        wx.navigateBack()
                    })
                })
                hideLoading()
            })
            .catch((err)=>{
                showModal(err).finally(()=>{
                    wx.navigateBack()
                })
                hideLoading()
            })
        })
      },
      configSend(e){
        console.log(e.mp.detail.formId)
        var data =  {
            "userId":store.state.userInfo.id,
            "indentId":this.orderId,
            "formId":e.mp.detail.formId
        }
        if(this.info.indentState == 'WAIT_FOR_PERFORMER'){
            //立即抢单
            showModal('您是否确定要接这个订单？').then(()=>{
                showLoading()
                takeOrder(data).then((res)=>{
                    var data =  {
                        "userId":store.state.userInfo.id,
                        "indentId":this.orderId,
                    }
                    getOrderDetails(data).then((res)=>{
                        this.info = res.data.data
                        this.status = this.site[this.info.indentState]
                        hideLoading()
                    })
                    .catch((err)=>{
                        hideLoading()
                        showModal(err).finally(()=>{
                            wx.navigateBack()
                        })
                    })
                    hideLoading()
                })
                .catch((err)=>{
                    showModal(err).finally(()=>{
                        wx.navigateBack()
                    })
                    hideLoading()
                })
            })
        } else{
            //确认送达
            showModal('您是否确定已送达？').then(()=>{
                showLoading()
                configOrder(data).then((res)=>{
                    var data =  {
                        "userId":store.state.userInfo.id,
                        "indentId":this.orderId,
                    }
                    getOrderDetails(data).then((res)=>{
                        this.info = res.data.data
                        this.status = this.site[this.info.indentState]
                        hideLoading()
                    })
                    .catch((err)=>{
                        hideLoading()
                        showModal(err).finally(()=>{
                            wx.navigateBack()
                        })
                    })
                    hideLoading()
                })
                .catch((err)=>{
                    showModal(err).finally(()=>{
                        wx.navigateBack()
                    })
                    hideLoading()
                })
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

