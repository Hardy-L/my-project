//  vuex中去操作数据的方法 （只能同步执行）
export default {
  changeusermsg(state, value) {
    state.usermsg = value;
  },
  qufan(state, reg) {
    state.bool = reg;
  },
  clear(state) {
    state.usermsg = "";
    state.bool = false
  },
  changesousuo(state, value) {
    state.sousuo = value;
  }
}
