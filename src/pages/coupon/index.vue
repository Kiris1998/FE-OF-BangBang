<template>
    <div>
        <ul class="coupon">
            <li v-for="item in getCoupons" :key="item.couponId" @click="checkInfo(item.couponId)">
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
                        <span class="coupon-right-bnt" @click.stop="getThis(item.couponId)">
                            点击领取
                        </span>
                    </div>
                    <div class="coupon-right-2">
                        所有订单可用,按原价购买可用
                    </div>
                </div>
            </li>
            <li v-for="item in liveCoupons" :key="item.couponId" >
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
                        <span v-show="isChoose" class="coupon-right-bnt" @click.stop="chooseThis(item.reducePrice,item.couponId)">
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
import {couponList,getCoupon} from '../../utils/API.js'
import store from '../../store/vuex'
import { jumpTo } from '../../utils/utils'
import {showModal,showToast,showLoading,hideLoading} from '../../utils/wxAPI.js'

export default {
    data(){
        return{
            isChoose:false,
            liveCoupons:[],
            getCoupons:[]
        }
    },
    onLoad:function(options){
        showLoading()
        if(options.src != undefined)
            this.isChoose = true
        else
            this.isChoose = false
    },
    onShow(){
        couponList(store.state.userInfo.id).then((res)=>{
            console.log(res)
            res.data.data.getCoupons.forEach((element) => {
                let date = new Date(element.invalidTime);
                var theDate = date.getFullYear() + '.' + date.getMonth() + '.' + date.getDate()
                element.invalidTime = theDate
            });
            res.data.data.liveCoupons.forEach((element) => {
                let date = new Date(element.invalidTime);
                var theDate = date.getFullYear() + '.' + date.getMonth() + '.' + date.getDate()
                element.invalidTime = theDate
            });
            this.getCoupons = res.data.data.getCoupons;
            this.liveCoupons = res.data.data.liveCoupons;
            hideLoading()
        })
        .catch((err)=>{ 
            console.log(err)
            let info = err || '请求失败'
            showModal(info)
            hideLoading()
        })
    },
    methods:{
        chooseThis(info,id){
            if(this.isChoose){
                couponInfo.commit('commitInfo',info)
                couponInfo.commit('commitId',id)
                wx.navigateBack()
            }
        },
        getThis(id){
            var data = {
                couponId:id,
                userId:store.state.userInfo.id
            }
            showLoading()
            getCoupon(data).then((res)=>{
                couponList(store.state.userInfo.id).then((res)=>{
                    res.data.data.getCoupons.forEach((element) => {
                        let date = new Date(element.invalidTime);
                        var theDate = date.getFullYear() + '.' + date.getMonth() + '.' + date.getDate()
                        element.invalidTime = theDate
                    });
                    res.data.data.liveCoupons.forEach((element) => {
                        let date = new Date(element.invalidTime);
                        var theDate = date.getFullYear() + '.' + date.getMonth() + '.' + date.getDate()
                        element.invalidTime = theDate
                    });
                    this.getCoupons = res.data.data.getCoupons;
                    this.liveCoupons = res.data.data.liveCoupons;
                    hideLoading()
                })
                .catch((err)=>{ 
                    let info = err || '请求失败'
                    showModal(info)
                    hideLoading()
                })
            })
            .catch((err)=>{
                let info = err || '请求失败'
                showModal(info)
                hideLoading()
            })
        },
        checkInfo(couponId){
            jumpTo(`../couponInfo/main?id=${couponId}`)
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
