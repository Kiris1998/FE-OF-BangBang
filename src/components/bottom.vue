<template>
  <div class="setSend-bottom">
    <div class="setSend-bottom-info">
      <div class="setSend-bottom-info-1">
        下单支付：<span>￥{{totalPrice}}</span>
      </div>
      <div class="setSend-bottom-info-2">
        基础速递费{{basePrice}}元+悬赏金{{givenPrice}}元+优惠券{{benefit}}元
      </div>
    </div>
    <button>
        确认下单
    </button>
  </div>
</template>
<script>
export default {
    data(){
      return{
        totalPrice:'3.50',
        basePrice:2,
        givenPrice:3,
        benefit:0
      }
    }
}
</script>

<style>

</style>
