<template>
  <div class="sec-info"
    :id="[hiddenName?'show':'']">
      <li class="sendComopany">
        <span>快递公司</span>
        <input placeholder="请选择快递公司"/>
      </li>
      <li>
        <span>取件码</span>
        <input placeholder="请输入取件码"/>
      </li>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  props:{
    hiddenName:{
      default:true
    }
  },

  components: {
    card
  },

  methods: {
    
  },
  onLoad(){
    console.log('ss')
  }

}
</script>

<style scoped>

</style>
<style lang="scss">
  @import '../common/style/components/infoSec';
</style>

