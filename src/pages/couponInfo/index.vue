<template>
    <div class="container">
        <img/>
        <ul class="infoList">
            <li>
                满{{couponInfo.leastPrice}}元可用
            </li>
            <li>
                优惠{{couponInfo.reducePrice}}元
            </li>
            <li>
                有效期至{{couponInfo.invalidTime}}
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
            couponId:'',
            couponInfo:''
        }
    },
    onLoad:function(options){
        console.log(options.id)
        showLoading()
        this.couponId = options.id
        getCouponInfo(this.couponId).then((res)=>{
            this.couponInfo = res.data.data
            hideLoading()
        })
        .catch((err)=>{
            hideLoading()
            showModal(err).finally(()=>{
                wx.navigateBack()
            })
        })
    },
    mathods:{
        getIt(){
            showLoading()
            var data = {
                couponId:id,
                userId:store.state.userInfo.id
            }
            getCoupon(data).then((res)=>{
                hideLoading()
                wx.navigateBack()
            })
            .catch((err)=>{
                hideLoading()
                showModal(err)
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
    background: rgb(8, 35, 189);
    margin:0 auto;
  }
</style>
