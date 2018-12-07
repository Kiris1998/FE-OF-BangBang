<template>
  <div class="addAdr">
      <div class="addAdr-title">
          请补充发货信息
      </div>
      <div class="addAdr-content">
        <div class="addAdr-content-local">
            <img class="first" src="/static/image/addAdr/local.png"/>
            <span>{{college}}</span>
            <img class="second" src="/static/image/addAdr/go.png"/>
        </div>
        <textarea class="localFor" placeholder="请输入收货地址" v-model="address"></textarea>
        <ul class="configList">
            <li class="config-tele">
                <img src="/static/image/addAdr/telephone.png"/>
                <input  placeholder="请输入您的手机号" v-model="telePhone"/>
            </li>
            <li class="config-tele">
                <img src="/static/image/addAdr/people.png"/>
                <input  placeholder="请输入您的姓名" v-model="name"/>
            </li>
        </ul>
      </div>
      <button class="addAdr-config" @click="configAddr">
          确认
      </button>
      <button class="addAdr-config-delect" @click="delectInfo">
          删除纪录
      </button>
  </div>
</template>

<script>
import card from '@/components/card'
import {jumpTo} from '../../utils/utils'
import editAddr from '../../store/editAddr'

export default {
  data () {
    return {
        telePhone:'',
        college:'西安美术学院',
        address:'',
        name:''
    }
  },
  components: {
    card
  },
  methods: {
     configAddr(){
        var params = {
            telePhone:this.telePhone,
            college:this.college,
            address:this.address,
            name:this.name
        }
        editAddr.commit('commitInfo',params)
        wx.navigateBack()
     },
     delectInfo(){

     }
  },
  onLoad(options){
    if(options.info != undefined){
        var obj = JSON.parse(options.info)
        this.telePhone = obj.telePhone
        this.name = obj.name
        this.address = obj.address
    }else{
        this.telePhone = ''
        this.name = ''
        this.address = ''
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

