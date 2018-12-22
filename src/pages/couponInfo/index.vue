<template>
    <div class="container">
        <div class="pic">
            <div class="sign">￥</div>
            <div class="right">
                <div class="up">{{couponInfo.reducePrice}}元</div>
                <div class="down">满{{couponInfo.leastPrice}}元可用</div>
            </div>
        </div>
        <ul class="infoList">
            <li>
                <span class="title1">有效日期</span>
                <span class="content">至{{theDate}}</span>
            </li>
            <li class="second">
                <span class="title2">使用条件</span>
                <span class="content">仅可领取并使用一次</span>
            </li>
            <li>
                <span class="title3"></span>
                <span class="content">不可与其他优惠劵叠加使用</span>
            </li>
            <li>
                <span class="title3"></span>
                <span class="content">所有订单可用</span>
            </li>
        </ul>
        <button @click="getIt">
            点击领取
        </button>
    </div>
</template>
<script>
import {getCoupon,getCouponInfo} from '../../utils/API.js'
import store from '../../store/vuex'
import {showModal,showToast,showLoading,hideLoading} from '../../utils/wxAPI.js'
export default {
    data(){
        return{
            theDate:'',
            couponId:'',
            couponInfo:''
        }
    },
    onLoad:function(options){
        showLoading()
        this.couponId = options.id
        getCouponInfo(this.couponId).then((res)=>{
            this.couponInfo = res.data.data
            var date = new Date(this.couponInfo.invalidTime);
            this.theDate = date.getFullYear() + '.' + (date.getMonth()+1) + '.' + date.getDate()
            hideLoading()
        })
        .catch((err)=>{
            if(typeof(err) == Object){
                err = '发生了异常，请重试'
            }
            hideLoading()
            showModal(err).finally(()=>{
                wx.navigateBack()
            })
        })
    },
    methods:{
        getIt(){
            showLoading()
            var data = {
                couponId:this.couponId,
                userId:store.state.userInfo.id
            }
            getCoupon(data).then((res)=>{
                hideLoading()
                showToast('优惠劵领取成功','success',true,2000)
                setTimeout(()=>{
                    wx.navigateBack()
                },1000)
            })
            .catch((err)=>{
                if(typeof(err) == Object){
                    err = '发生了异常，请重试'
                }
                hideLoading()
                showModal(err).finally(()=>{
                    wx.navigateBack()
                })
            })
        }
    }
}
</script>
<style>

</style>
<style lang="scss">
  @import '../../common/style/page/couponInfo.scss';
  page{
    background: #FCD800;
    margin:0 auto;
  }
</style>
