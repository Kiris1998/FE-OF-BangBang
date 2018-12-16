import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
      info: '',
      id:''
    },
    mutations: {
        commitInfo:(state,val)=>{
            state.info = val
        },
        commitId:(state,val)=>{
            state.id = val
        }
    }
});