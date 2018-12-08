<template>
    <div class="order">
        <div class="order-title"> 
            我的帮购订单详情
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
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="theLabel">
                    <span>
                        新发布
                    </span>
                    <span>
                        已接单
                    </span>
                    <span>
                        已送达
                    </span>
                    <span style="margin-right:0">
                        完成订单
                    </span>
                </div>
            </div>
        </div>
        <div class="footer">信息涉及到隐私，接单后可查看更多关于订单信息。</div>
        <div class="order-bnt">
            <button>确认送达</button>
        </div>
    </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
    }
  },

  components: {
    card
  },

  methods: {

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

