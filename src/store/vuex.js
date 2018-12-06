import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
      info: '请选择送达地址'
    },
    mutations: {
        commitInfo:(state,val)=>{
            state.info = val.address
        }
    }
  });
  