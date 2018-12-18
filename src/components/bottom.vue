<template>
  <div class="setSend-bottom">
    <div class="setSend-bottom-info">
      <div class="setSend-bottom-info-1">
        下单支付：<span>￥{{totalPrice}}</span>
      </div>
      <div class="setSend-bottom-info-2">
        悬赏金{{givenPrice == '' || givenPrice == undefined?0:givenPrice}}元-优惠券{{benefit == '' || benefit == undefined?0:benefit}}元
      </div>
    </div>
    <button @click="submit">
        确认下单
    </button>
  </div>
</template>
<script>
export default {
    props: ["givenPrice","benefit"],
    data(){
      return{
        givenPrice:''
      }
    },
    onShow(){
      console.log(this.givenPrice)
    },
    computed:{
      totalPrice(){
        if(this.givenPrice == '' || this.givenPrice == undefined)
          return 0;
        else if(this.benefit == '' || this.benefit == undefined)
          return this.givenPrice;
        else
          return this.givenPrice-this.benefit;
      }
    },
    methods:{
      submit(){
        this.$emit('submit')
      }
    }
}
</script>

<style>

</style>
