<template>
  <div class="addAdr">
      <div class="addAdr-title">
          请补充发货信息
      </div>
      <div class="addAdr-content">
        <div class="addAdr-content-local">
            <img class="first" src="/static/image/addAdr/local.png"/>
            <span>西安美术学院</span>
            <img class="second" src="/static/image/addAdr/go.png"/>
        </div>
        <div class="localFor">
            西安市雁塔区含光路南段100号
        </div>
        <ul class="configList">
            <li class="config-number">
                <input placeholder="请补充具体楼层门牌号"/>
            </li>
            <li class="config-tele">
                <img src="/static/image/addAdr/telephone.png"/>
                <span>123456789</span>
            </li>
            <li class="config-name">
                <img src="/static/image/addAdr/people.png"/>
                <input placeholder="请补充具体楼层门牌号"/>
            </li>
        </ul>
      </div>
      <button class="addAdr-config">
          确认
      </button>
  </div>
</template>

<script>
import card from '@/components/card'
import {jumpTo} from '../../utils/utils'

export default {
  data () {
    return {
        
    }
  },

  components: {
    card
  },

  methods: {
    linkToSend(){
      jumpTo('../helpSend/main')
    },
    linkToShop(){
      jumpTo('../helpShop/main')
    },
    linkToFree(){
      jumpTo('../freeCarry/main')
    }

  }
}
</script>

<style scoped>

</style>
<style lang="scss">
  @import '../../common/style/page/addAddr.scss';
  page{
    background: #E6E6E6;
    margin:0 auto;
  }
</style>

