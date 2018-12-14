<template>
    <div>
        <ul class="coupon">
            <li v-for="item in getCoupons" :key="item.couponId">
                <div class="coupon-left">
                    <span class="coupon-left-1">
                        ￥{{item.reducePrice}}
                    </span>
                    <span class="coupon-left-2">
                        满{{item.leastPrice}}可用
                    </span>
                </div>
                <div class="coupon-right">
                    <div class="coupon-right-1">
                        <span>
                            有效期至{{item.invalidTime}}
                        </span>
                        <span class="coupon-right-bnt" @click="chooseThis(item.price)">
                            点击领取
                        </span>
                    </div>
                    <div class="coupon-right-2">
                        所有订单可用,按原价购买可用
                    </div>
                </div>
            </li>
            <li v-for="item in liveCoupons" :key="item.couponId">
                <div class="coupon-left">
                    <span class="coupon-left-1">
                        ￥{{item.reducePrice}}
                    </span>
                    <span class="coupon-left-2">
                        满{{item.leastPrice}}可用
                    </span>
                </div>
                <div class="coupon-right">
                    <div class="coupon-right-1">
                        <span>
                            有效期至{{item.invalidTime}}
                        </span>
                        <span v-show="isChoose" class="coupon-right-bnt" @click="chooseThis(item.price)">
                            立即使用
                        </span>
                    </div>
                    <div class="coupon-right-2">
                        所有订单可用,按原价购买可用
                    </div>
                </div>
            </li>
            <div class="footer">
                其实我是有底线的~~
            </div>
        </ul>
    </div>
</template>
<script>
import couponInfo from '../../store/couponInfo'
import {couponList} from '../../utils/API.js'
import store from '../../store/vuex'

export default {
    data(){
        return{
            isChoose:false,
            myCoupon:[
                {
                    price:5,
                    info:20,
                    date:'2018.12.12'
                },
                {
                    price:20,
                    info:50,
                    date:'2018.12.23'
                },
                {
                    price:10,
                    info:20,
                    date:'2019.01.01'
                }
            ],
            liveCoupons:[],
            getCoupons:[]
        }
    },
    onLoad:function(options){
        if(options.src != undefined)
            this.isChoose = true
        couponList(store.state.userInfo.id).then((res)=>{
            console.log(res)
            this.getCoupons = res.data.data.getCoupons;
            this.liveCoupons = res.data.data.liveCoupons;
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    methods:{
        chooseThis(info){
            if(this.isChoose){
                couponInfo.commit('commitInfo',info)
                console.log(info)
                wx.navigateBack()
            }
        }
    },
}
</script>
<style>

</style>
<style lang="scss">
  @import '../../common/style/page/coupon.scss';
  page{
    background: #E6E6E6;
    margin:0 auto;
  }
</style>
