import Vue from 'vue'; 
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
// 需要注册vuex到vue中
Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations
})