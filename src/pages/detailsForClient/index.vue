<template>
    <div class="order">
        <div class="order-title"> 
            我的发布订单详情
        </div>
        <div class="order-details">
            <div class="avatar">
            </div>
            <div class="rightSide">
                <div class="firstRow">
                    <span>Billy.Z</span>
                    <img src="/static/image/orderDetails/man.png"/>
                </div>
                <span class="college">西安美术学院</span>
                <ul class="list">
                    <li class="remark">
                        <img class="first" src="/static/image/orderDetails/details.png"/>
                        <div>拜托帮忙取一下快递，人没在学校，先帮我取一下明天回去拿回来！</div>
                    </li>
                    <li class="address">
                        <img class="first" src="/static/image/orderDetails/fetch.png"/>
                        <div>快鸟驿站</div>
                    </li>
                    <li class="address">
                        <img class="first" src="/static/image/orderDetails/send.png"/>
                        <div>三号公寓拜托帮忙取一下快递，人没在学校，先帮我取一下明天回去拿回来！</div>
                    </li>
                    <li class="reward">
                        <img class="first" src="/static/image/orderDetails/send.png"/>
                        <div>支出金额（元）</div>
                        <div class="price"><span>￥</span>5.00</div>
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
        <div class="order-bnt">
            <button>待接单</button>
        </div>
        <div class="order-bnt2">
            <button @click="deleteOrder">取消订单</button>
        </div>
    </div>
</template>

<script>
import card from '@/components/card'
import {getOrderDetails} from '../../utils/API.js'
  import {getSettings,getUserInfo,jumpTo,switchTab,login,setStorage,getStorage} from '../../utils/utils.js'
import store from '../../store/vuex'

export default {
  data () {
    return {
        cookie:'',
        status:{
            first:'red',
            second:'red',
            third:'white',
            fourth:'white'
        }
    }
  },

  components: {
    card
  },

    onShow(){
        var data =  {
            "userId":"XB4lFU",
            "indentId":9,
        }
        console.log(data)
        getOrderDetails(data).then((res)=>{
            console.log(res)
        })
    },
  methods: {
      deleteOrder(){
          
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

