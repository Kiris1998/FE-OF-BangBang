<template>
    <div class="choose">
        <div class="choose-title">
            <span>
                西安市
            </span>
            <img src="/static/image/chooseAddr/search.png" />
            <input placeholder="物品从哪儿取"/>
        </div>
        <div class="choose-content">
            <ul>
                <li v-for="(item,index) in msg" :key="item.id">
                   <div class="choose-content-avatar" @click="linkToSend">
                        {{item.firstname}}
                    </div>
                    <div class="choose-content-info" @click="linkToSend">
                        <div class="choose-content-info-1">
                            <div>
                                {{item.name}}
                            </div>
                            <span>
                                {{item.telePhone}}
                            </span>
                        </div>
                        <div class="choose-content-info-2">
                            {{item.address}}
                        </div>
                    </div>
                    <div class="choose-content-addr" @click="linkToEdit(index)">
                        <img src="/static/image/chooseAddr/edit.png" />
                    </div>
                </li>
            </ul>
            <div class="choose-content-bnt"  @click="linkToEdit()">
                <img src="/static/image/chooseAddr/config.png"/>
            </div>
        </div>
    </div>
</template>

<script>
import card from '@/components/card'    
import {jumpTo} from '../../utils/utils'
import Bus from '@/mixins/event-bus'

export default {
  data () {
    return {
        msg:[
            {
                name:'王小明',
                firstname:'',
                telePhone:'15929320201',
                address:'西安市新城区韩森寨幸福南路100号 西安建筑科技大学华清学院西安市新城区韩森寨幸福南路100号 西安建筑科技大学华清学院'
            },{
                name:'白果',
                firstname:'',
                telePhone:'15929320201',
                address:'西安市新城区韩森寨幸福南路100号 西安建筑科技大学华清学院西安市新城区韩森寨幸福南路100号 西安建筑科技大学华清学院'
            }
        ]
    }
  },

  components: {
    card
  },

  methods: {
    linkToSend(){
        let params = { 
            address:this.address
        }
        Bus.$emit('getParams', params)
        wx.navigateBack()
    },
    linkToShop(){
        jumpTo('../helpShop/main')
    },
    linkToEdit(index){
        // console.log(index)
        if(index == undefined){
            jumpTo(`../addAddr/main`)
        }
        else{
            var info = this.msg[index]
            info = JSON.stringify(info)
            jumpTo(`../addAddr/main?info=${info}`)
        }
    }
  },
  beforeMount(){
      for(let i = 0;i < this.msg.length;i++){
        this.msg[i].firstname = this.msg[i].name.substr(0,1)
      }
  }
}
</script>

<style scoped>

</style>
<style lang="scss">
  @import '../../common/style/page/chooseAddr.scss';
  page{
  background: #E6E6E6;
    margin:0 auto;
  }
</style>