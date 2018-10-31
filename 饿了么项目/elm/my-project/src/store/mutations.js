//  vuex中去操作数据的方法 （只能同步执行）
export default {
  changeusermsg(state, value) {
    this.state.usermsg = value;
    console.log(state.usermsg)
  },
  qufan(state, reg) {
    state.bool = reg;
  },
  clear(state) {
    state.usermsg = "";
      state.bool = false
  },
  cityid(state,id){
    state.homeid = id;
  },
  address(state,price){
    state.newadd = price;
  },
  idok(state,el){
    this.state.id = el
    console.log(el)
  },
  lm (state,sn ){
    this.state.limit = sn;
  }
}
