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
  changebbb(state,value){
    state.bbb = value;
  },
  getdatahe(state,value){
    state.datahe=value;
    // console.log(state.datahe)
  },
  add(state,a){
    state.aa=a.aa;
    state.bb=a.bb;
    state.cc=a.cc;
    var numm = 0
    state.dqdata=state.datahe.filter(num => num.id == a.aa)[0].foods.filter(num=>num.specfoods[0].food_id ==a.bb);
    state.dqdata[0].specfoods[0].count++;
    if(state.xzdata.indexOf(a.cc) != -1){
      //存在
    }else{
      //不存在
      state.xzdata.push(a.cc)
    }
    console.log(state.xzdata)
    for(let i=0;i<state.xzdata.length;i++){
      numm += state.xzdata[i].specfoods[0].price*state.xzdata[i].specfoods[0].count
    }
    state.num =numm
    console.log(state.num)
  },
  app(state,a){
    state.dd=a.aa;
    state.ee=a.bb;
    state.ff=a.cs;
    var numm = 0
    state.dqdata=state.datahe.filter(num => num.id == a.aa)[0].foods.filter(num=>num.specfoods[0].food_id ==a.bb);
    state.dqdata[0].specfoods[0].count--
    state.qian=state.dqdata[0].specfoods[0].price* state.dqdata[0].specfoods[0].count;
    for(let i=0;i<state.xzdata.length;i++){
      numm += state.xzdata[i].specfoods[0].price*state.xzdata[i].specfoods[0].count
    }
    state.num =numm
  }
}
// .specfoods[0].count++