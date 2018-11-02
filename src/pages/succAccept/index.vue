<template>
  <div class="succAccept">
      <div class="succAccept-avatar">
      </div>
      <span class="succAccept-name">
          Nene.jiao
      </span>
      <span class="succAccept-school">
          西安美术学院
      </span>
      <span class="succAccept-cong">
          恭喜您
      </span>
      <div class="succAccept-bottom">
          <div class="left">

          </div>
          <div class="left-dot">
          </div>
          <span>
            已成功接到小姐姐的任务
          </span>
          <div class="right-dot">
          </div>
          <div class="right">
          </div>
      </div>
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

  }
}
</script>

<style scoped>

</style>
<style lang="scss">
  @import '../../common/style/page/succAccept.scss';
  page{
  background: #E6E6E6;
    margin:0 auto;
  }
</style>

