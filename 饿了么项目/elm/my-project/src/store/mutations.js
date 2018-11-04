import Vue from "vue";
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
  changesousuo(state, value) {
    state.sousuo = value;
  },
  changebbb(state,value){
    state.bbb = value;
  },
  getdatahe(state,value){
    state.datahe=value;
    // console.log(state.datahe)
  },
  add(state,a){
    //点击的商品的count++
    // console.log(a)
    a.count++
    //数组内如果没有那就添加
    if(state.xzdata.indexOf(a) == -1){
      state.xzdata.push(a)
    }
    //总价格+点击商品的价格
    state.num +=a.price
  },
  app(state,a){
    //点击的商品的count++
    a.count--
    //如果为0则从数组内删除
    for(let i =0;i<state.xzdata.length;i++){
      if(state.xzdata[i].count == 0){
        state.xzdata.splice(i,1)
      }
    };
    //总价格-点击商品的价格
    state.num -=a.price
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
  },
  // 获取餐馆id
  getcgid(state,getid){
    state.cgid=getid
  },
  qingkong(state){
    for(let ii =0;ii<state.xzdata.length;ii++){
        state.xzdata[ii].count = 0
        state.xzdata.splice(ii,1)
        ii--;
    };
    state.num=0
  },
  changebotchoice(state, value) {
    state.botchoice = value;
  },
  dianji(state){
  console.log(state.xzdata)
    Vue.set(state.dingdan,"a",state.xzdata);
    // for(let ii =0;ii<state.xzdata.length;ii++){
    //   state.xzdata[ii].count = 0
    //   state.xzdata.splice(ii,1)
    //   ii--;
    // };
  state.num=0;
  }
}
