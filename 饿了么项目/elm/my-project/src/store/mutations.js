//  vuex中去操作数据的方法 （只能同步执行）
export default {
  changeusermsg(state, value) {
    this.state.usermsg = value;
  }
}
