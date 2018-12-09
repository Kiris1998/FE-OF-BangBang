<template>
    <div>
        <ul class="coupon">
            <li v-for="item in myCoupon" :key="item.id">
                <div class="coupon-left">
                    <span class="coupon-left-1">
                        ￥{{item.price}}
                    </span>
                    <span class="coupon-left-2">
                        满{{item.info}}可用
                    </span>
                </div>
                <div class="coupon-right">
                    <div class="coupon-right-1">
                        <span>
                            有效期至{{item.date}}
                        </span>
                        <span class="coupon-right-bnt">
                            立即使用
                        </span>
                    </div>
                    <div class="coupon-right-2">
                        所有订单可用，按原价购买可用
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
export default {
    data(){
        return{
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
            ]
        }
    }
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
