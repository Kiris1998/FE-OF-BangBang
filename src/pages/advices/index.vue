<template>
    <div class="container">
         <textarea v-model="text" placeholder="请填写您的意见" name="textarea"/>
         <button @click="submitForm">点击提交</button>
    </div>
</template>
<script>
import store from '../../store/vuex'
import {submitAdvices} from '../../utils/API.js'
import {showModal,showToast,showLoading,hideLoading} from '../../utils/wxAPI.js'
export default {
    data(){
        return{
            text:''
        }
    },
    methods:{
        submitForm(){
            let data = {
                userId:store.state.userInfo.id,
                content:this.text
            }
            console.log(data)
            submitAdvices(data).then((res)=>{
                console.log(res)
                showToast('反馈意见成功','success',true,1000)
                setTimeout(()=>{
                    this.text = ''
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
        }
    }
}
</script>
<style lang="scss">
  @import '../../common/style/page/advices.scss';
    page{
        background: #FCD800;
        margin:0 auto;
    }
</style>
