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
import {jumpTo,redirectTo} from '../../utils/utils'
import store from '../../store/vuex'
import {addAddress,daleteAddr,modifyAddr,getOneSch} from '../../utils/API.js'
import {showModal,showToast,showLoading,hideLoading} from '../../utils/wxAPI.js'

export default {
  data () {
    return {
        isAdd:true,
        telePhone:'',
        college:'',
        address:'',
        name:'',
        id:''
    }
  },
  components: {
    card
  },
    onLoad(options){
        console.log('aa')
        if(options.info != undefined){
            var obj = JSON.parse(options.info)
            this.telePhone = obj.phone
            this.name = obj.userName
            this.address = obj.address
            this.id = obj.id
            this.isAdd = false
        }else{
            this.telePhone = ''
            this.name = ''
            this.address = ''
            this.isAdd = true
        }
        showLoading()
        getOneSch(store.state.userInfo.schoolId).then((res)=>{
            this.college = res.data.data.schoolName
            hideLoading()
        })
        .catch((err)=>{
            showModal(err)
            hideLoading()
        })
    },
  methods: {
    configAddr(){
        showLoading()
        if(this.isAdd){
            var params = {
                "phone":this.telePhone,
                "address":this.address,
                "userName":this.name,
                "userId":store.state.userInfo.id
            }
            addAddress(params).then((res)=>{
                showToast('地址添加成功','success',true,1000)
                setTimeout(()=>{
                    wx.navigateBack()
                },1000)
                hideLoading()
            })
            .catch((err)=>{
                showModal(err)
                hideLoading()
                return;
            })
        }else{
            var params = {
                "phone":this.telePhone,
                "address":this.address,
                "userName":this.name,
                "addressId":this.id,
                "userId":store.state.userInfo.id
            }
            console.log(params)
            modifyAddr(params).then((res)=>{
                showToast('地址修改成功','success',true,1000)
                setTimeout(()=>{
                    wx.navigateBack()
                },1000)
                hideLoading()
            })
            .catch((err)=>{
                if(typeof(err) == Object){
                    err = '发生了异常，请重试'
                }
                hideLoading()
                showModal(err)
            })
        }
    },
    delectInfo(){
        var obj = {
            addressId:this.id
        }
        daleteAddr(obj).then((res)=>{
            showToast('地址删除成功','success',true,1000)
            setTimeout(()=>{
                wx.navigateBack()
            },1000)
        })
        .catch((err)=>{
            if(typeof(err) == Object){
                err = '发生了异常，请重试'
            }
            hideLoading()
            showModal(err)
        })
    },
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

