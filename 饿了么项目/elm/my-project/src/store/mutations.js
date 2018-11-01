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
    var numm = 0
    state.dqdata=state.datahe.filter(num => num.id == a.aa)[0].foods.filter(num=>num.specfoods[0].food_id ==a.bb);
    state.dqdata[0].specfoods[0].count--
    for(let ii =0;ii<state.xzdata.length;ii++){
      if(state.xzdata[ii].specfoods[0].count == 0){
        state.xzdata.splice(ii,1)
      }
      
    };
    for(let i=0;i<state.xzdata.length;i++){
      numm += state.xzdata[i].specfoods[0].price*state.xzdata[i].specfoods[0].count
    }
    state.num =numm
    console.log(state.num)
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
  jiagou2(state,id){
    var numm = 0;
    state.xzdata.filter(num => num.specfoods[0].food_id ==id)[0].specfoods[0].count++;
    for(let i=0;i<state.xzdata.length;i++){
      numm += state.xzdata[i].specfoods[0].price*state.xzdata[i].specfoods[0].count
    }
    state.num =numm
  },
  jiangou2(state,id){
    var numm = 0;
    state.xzdata.filter(num => num.specfoods[0].food_id ==id)[0].specfoods[0].count--;
    for(let ii =0;ii<state.xzdata.length;ii++){
      if(state.xzdata[ii].specfoods[0].count == 0){
        state.xzdata.splice(ii,1)
      }
      
    };
    for(let i=0;i<state.xzdata.length;i++){
      numm += state.xzdata[i].specfoods[0].price*state.xzdata[i].specfoods[0].count
    }
    state.num =numm
  },
  // 获取餐馆id
  getcgid(state,getid){
    state.cgid=getid
  }
}
