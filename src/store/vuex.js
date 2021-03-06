import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
      info: '请选择送达地址',
      id:'',
      userInfo: ''
    },
    mutations: {
        commitInfo:(state,val)=>{
            state.info = val.address
            state.id = val.id
        },
        getUserDetail:(state,val) => {
            state.userInfo = val
        }
    }
  });
  