<template>
  <div class="succAccept">
      <img class="succAccept-avatar" :src="url"/>
      <span class="succAccept-name">
          {{name}}
      </span>
      <span class="succAccept-school">
          {{school}}
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
            已成功接到{{info}}的任务
          </span>
          <div class="right-dot">
          </div>
          <div class="right">
          </div>
      </div>
      <button class="bntConfig" @click="config">确定</button>
  </div>
</template>

<script>
import card from '@/components/card'
import {jumpTo} from '../../utils/utils'

export default {
  data () {
    return {
      url:'',
      school:'',
      sex:'',
      name:''
    }
  },
  onLoad(options){
    console.log(options)
    this.name = options.name
    this.url = options.url
    this.school = options.school
    this.sex = options.sex
  },
  components: {
    card
  },
  computed:{
    info(){
      if(this.sex == 'MALE')
      {
        return '小哥哥'
      } else if(this.sex == 'FEMALE')
      {
        return '小姐姐'
      } else{
        return '未知'
      }
    }
  },
  methods: {
    config(){
      wx.navigateBack()
    }
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
  .bntConfig{
    height: 100rpx;
    width: 600rpx;
    background: #000;
    position: absolute;
    bottom: 50rpx;
    color: #E6E6E6
  }
</style>

