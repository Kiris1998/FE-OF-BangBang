<template>
  <div class="indexPage">
    <div class="title">
        请选择帮帮发布任务
    </div>
    <ul>
        <li @click="linkToSend">
          <img src="/static/image/helpSend.png"/>
        </li>
        <li @click="linkToShop">
          <img src="/static/image/helpShop.png"/>
        </li>
        <li @click="linkToFree">
          <img src="/static/image/freeCarry.png"/>
        </li>
    </ul>
  </div>
</template>

<script>
import card from '@/components/card'
import {jumpTo} from '../../utils/utils'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
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
  @import '../../common/style/page/selectStyle.scss';
  page{
  background: #FCD800;
    margin:0 auto;
  }
</style>

