<template>
    <div class="choose">
        <div class="choose-title">
            <span>
                西安市
            </span>
            <img src="/static/image/chooseAddr/search.png" />
            <input v-model="theKey" @input="changeInput" placeholder="物品从哪儿取"/>
            <button @click="checkAddr">查询</button>
        </div>
        <div class="choose-content">
            <ul>
                <li v-for="(item,index) in msg" :key="item.id">
                   <div class="choose-content-avatar" @click="linkToSend(index)">
                        {{item.firstname}}
                    </div>
                    <div class="choose-content-info" @click="linkToSend(index)">
                        <div class="choose-content-info-1">
                            <div>
                                {{item.userName}}
                            </div>
                            <span>
                                {{item.phone}}
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
import store from '../../store/vuex'
import {getAddrList,checkAddr} from '../../utils/API.js'
import {showModal,showToast,showLoading,hideLoading} from '../../utils/wxAPI.js'

export default {
  data () {
    return {
        msg:[
        ],
        isChoose:false,
        theKey:''
    }
  },

  components: {
    card
  },
    onLoad:function(options){
        if(options.src != undefined)
            this.isChoose = true
    },
  methods: {
    changeInput(){
        if(this.theKey == ''){
            showLoading()
            checkAddr(store.state.userInfo.id,{key:this.theKey}).then((res)=>{
                this.msg = res.data.data
                //得到这个人的姓
                for(let i = 0;i < this.msg.length;i++){
                    this.msg[i].firstname = this.msg[i].userName.substr(0,1)
                    this.msg[i].label = i + 1
                }
                wx.hideLoading()
            })
            .catch(err=>{
                showModal(err)
                wx.hideLoading()
            })
        }
    },
    checkAddr(){
        showLoading()
        checkAddr(store.state.userInfo.id,{key:this.theKey}).then((res)=>{
            this.msg = res.data.data
            //得到这个人的姓
            for(let i = 0;i < this.msg.length;i++){
                this.msg[i].firstname = this.msg[i].userName.substr(0,1)
                this.msg[i].label = i + 1
            }
            wx.hideLoading()
        })
        .catch(err=>{
            showModal(err)
            wx.hideLoading()
        })
    },
    linkToSend(index){
        if(this.isChoose){
            let params = { 
                address:this.msg[index].address,
                id:this.msg[index].id
            }
            store.commit('commitInfo',params)
            wx.navigateBack()
        }
    },
    linkToEdit(index){
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
  onShow(){
        getAddrList(store.state.userInfo.id).then((res)=>{
            console.log(res.data)
            this.msg = res.data.data
            //得到这个人的姓
            for(let i = 0;i < this.msg.length;i++){
                this.msg[i].firstname = this.msg[i].userName.substr(0,1)
                this.msg[i].label = i + 1
            }
        })
      .catch((err)=>{
            showModal(err).finally(()=>{
                wx.navigateBack()
            })
            wx.hideLoading()
      })
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