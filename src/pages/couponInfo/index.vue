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
        this.couponId = options.id
        getCouponInfo(this.couponId).then((res)=>{
            this.couponInfo = res.data.data
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    mathods:{
        getIt(){
            var data = {
                couponId:id,
                userId:store.state.userInfo.id
            }
            console.log(data)
            getCoupon(data).then((res)=>{
                console.log(res)
                wx.navigateBack()
            })
            .catch((err)=>{
                console.log(err)
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
