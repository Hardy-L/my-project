<template>
    <div class="store">
       <header>
            <div class="bg"><img :src="'//elm.cangdu.org/img/'+datas.image_path" alt=""></div>
            <div class="header_left">
              <img :src="'//elm.cangdu.org/img/'+datas.image_path" alt="">
            </div>
            <div class="header_right">
                <h3>{{datas.name}}</h3>
                <p>{{datas.category}}</p>
                <p>{{datas.promotion_info}}</p>
            </div>
            <router-link to="/Aaa"> <b class="return">&lt;</b></router-link>
            <router-link :to="{name:'shops',params:{id:datas.id}}"> <b class="next">&gt;</b></router-link>
       </header>
       <div class="content">
           <el-menu 
           :default-active="activeIndex"
            class="el-menu-demo" 
            mode="horizontal"
            menu-trigger="click"
             @select="handleSelect">
             <el-menu-item index="1" @click="click1">商品</el-menu-item>
             <el-menu-item index="2" @click="click2">评价</el-menu-item>
             </el-menu>
       </div>
       <div class="content_body" v-show="clic1">
         <!-- 左边部分 -->
          <div class="content_body_left">
            <ul  id="menu" v-for="(item,index) in data16" :key="index" >
              <li @click="menu(index)" :class="{active:index==facevalue}">
                <a :href="'#Top'+item.id">{{item.name}}</a>
              </li>
            </ul>
          </div>
          <!-- 右边部 -->
        <div class="content_body_right" >
          <!-- 右边头部 -->
           <section class="head" v-for="(value,index) in data16" :key="index">
             <div class="head_top" :id="'Top'+value.id">
               <strong class="head_strong">{{value.name}}</strong>
               <span class="head_span">{{value.description}}</span>
             </div>
           <!-- 右边店铺详情 -->
            <section class="stop" v-for="(stores,index) in value.foods" :key="index">
                 <div class="stop_left">
                   <router-link 
                   :to="{path:'/deta',
                   query:{image_path:stores.image_path,
                   name:stores.name,
                   description:stores.description,
                   tips:stores.tips,
                   id:datas.id
                   }}">
                   <img :src="'//elm.cangdu.org/img/'+stores.image_path" alt="">
                 </router-link>
                 </div>
                 <div class="stop_right">
                     <h3>{{stores.name}}</h3>
                     <p>{{stores.description}}</p>
                     <strong>{{stores.tips}}</strong>
                    <section class="sections" >
                     <span> ¥{{stores.specfoods[0].price}}</span>
                     <div class="sections_right">
                      <span @click="jiangou(value.id,stores.specfoods[0].food_id,stores.specfoods[0].count)">
                      <img src="@/assets/减号.png" alt="" class="gouwu">
                      </span><span> {{stores.specfoods[0].count}}</span>
                       <span @click="jiagou(value.id,stores.specfoods[0].food_id,stores)">
                      
                      <img src="@/assets/加购物车.png" alt="" class="gouwu">
                    </span>
                      </div>
                      </section>
                   
                 </div>   
              </section>   
            </section>
          </div>
         
       </div>
       <!-- 评价 -->
       <div class="content-right" v-show="clic2">
         <div class="content-right-top">
           <ul class="content-right-top-left">
             <li>
               <p>{{pingfen}}</p>
               <p>综合评价</p>
               <p>高于周边商家{{gaoyu}}%</p>
             </li>
           </ul>
           <ul class="content-right-top-right">
             <li>
               <div class="pingfen"> <span>服务态度</span> <span>
                 <el-rate
                     v-model="fuwu"
                     disabled
                     show-score
                     text-color="#ff9900"
                     score-template="{value}">
                </el-rate>
                 </span> </div>
                
              <div class="pingfen"> <span>菜品评价</span> <span>
                 <el-rate
                     v-model="caipin"
                     disabled
                     show-score
                     text-color="#ff9900"
                     score-template="{value}">
                </el-rate>
                 </span>  </div>
               <div class="sd"><span>送达时间 </span><span>分钟</span></div>
             </li>
           </ul>
         </div>
         <div class="content-right-bottom">
          <ul class="content-right-bottom-top">
            <li v-for="(item,key) in data19" :key="key" >
               <span @click="active(key)" :class="{styles:key==value}" >{{item.name}}({{item.count}})</span>
            </li>
          </ul>
           <ul class="content-right-bottom-bottom">
              <li v-for="(item,index) in data17" :key="index"> 
               
                 <div class="tops">{{item.username}}</div>
                 <div class="btom">
                <span> <el-rate
                  v-model="a"
                  disabled
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate></span>
                  <span>准时送达</span>
                 </div>
                 <div v-if="index==0" class="imags">
                  <span><img :src="'https://fuss10.elemecdn.com/'+img1+'.jpeg'" alt="">
                  </span><span><img :src="'https://fuss10.elemecdn.com/'+img2+'.jpeg'" alt=""></span>
                 </div>
                
                  <div v-else-if="index==1" class="imags">
                  <span><img :src="'https://fuss10.elemecdn.com/'+img3+'.jpeg'" alt=""></span>
                 </div>
                 <div v-else></div>
                 
                 <div v-for=" (aaa ,index) in item.item_ratings" :key="index" class="shop">
               <p >{{aaa.food_name}}</p>
                 </div>
               </li>
           </ul>
         </div>
       </div>
      <div class="bottom">
       <bycar/>
       </div>  
    </div>  
  </div>    
</template>
<script>
import Vue from "vue";
import bycar from "@/components/erjiyemian/bycar";
export default {
  name: "store",
  data() {
    return {
      activeIndex: "1",
      // data16: [],
      facevalue: "0",
      value: "0",
      datas: [],
      clic1: true,
      clic2: false,
      data19: [],
      data6: [],
      data18: [],
      data17: [],
      pingfen: "",
      fuwu: 5,
      caipin: 5,
      gaoyu: "",
      a: 5,
      img1: "",
      img2: "",
      img3: "",
      qianshu: 0,
      cishu: 0,
      datahe: [],
      c: 0,
      clidata: {}
    };
  },
  computed: {
    data16() {
      return this.$store.state.datahe;
    }
  },
  created() {
    var _this = this;
    // 接口16
    // let api ="api/shopping/v2/menu?restaurant_id=" +this.$route.params.id;
    // let api = "api/shopping/v2/menu?restaurant_id=1";
    let api = "api/shopping/v2/menu?restaurant_id=" + this.$route.params.id;
    this.$http.get(api).then(res => {
      // _this.data16 = res.data;
      for (let i = 0; i < res.data.length; i++) {
        for (let ii = 0; ii < res.data[i].foods.length; ii++) {
          Vue.set(res.data[i].foods[ii].specfoods[0], "count", 0);
        }
      }
      this.$store.commit("getdatahe", res.data);
    });
    let url = "api/shopping/restaurant/" + this.$route.params.id;
    this.$http.get(url).then(data11 => {
      _this.datas = data11.data;
    });
    //接口19
    let api19 =
      "https://elm.cangdu.org/ugc/v2/restaurants/" +
      this.$route.params.id +
      "/ratings/tags";
    this.$http.get(api19).then(data19 => {
      _this.data19 = data19.data;
      // console.log(data19.data.name)
    });
    // 接口18
    let api18 =
      "https://elm.cangdu.org/ugc/v2/restaurants/" +
      this.$route.params.id +
      "/ratings/scores";
    this.$http.get(api18).then(data18 => {
      _this.data18 = data18.data;
      this.pingfen = parseInt(data18.data.food_score * 10) / 10;
      this.fuwu = parseInt(data18.data.overall_score * 10) / 10;
      this.caipin = parseInt(data18.data.service_score * 10) / 10;
      this.gaoyu = parseInt(data18.data.compare_rating * 100);
      // console.log(this.pingfen+"aaaaaaaaaaaaaaaaaaaaaaaaaaa")
    });
    // 接口17
    let api17 =
      "https://elm.cangdu.org/ugc/v2/restaurants/" +
      this.$route.params.id +
      "/ratings";
    this.$http.get(api17).then(data17 => {
      _this.data17 = data17.data;
      // console.log(data19.data.name)
      this.img1 = _this.data17[0].item_ratings[0].image_hash;
      this.img2 = _this.data17[0].item_ratings[1].image_hash;
      this.img3 = _this.data17[1].item_ratings[1].image_hash;
    });
  },
  methods: {
    handleSelect(key, keyPath) {},
    menu(id) {
      this.facevalue = id;
    },
    active(id){
      this.value = id;
    },
    click1() {
      this.clic1 = true;
      this.clic2 = !this.clic1;
    },
    click2() {
      this.clic2 = !this.clic2;
      this.clic1 = !this.clic2;
    },
    
    jiagou(aaa) {
         this.$store.commit("add",aaa)
    },
    jiangou(aaa) {
        this.$store.commit("app", aaa);
    },
    // this.$store.commit("getid",{this.$route.params.id})
  },
  components: {
    bycar
  },
 
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: #333;
}
.store {
  background: #ededed;
  height: 100%;
}
header {
  height: 6.4rem;
  overflow: hidden;
}
.return {
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  font-size: 2rem;
  font-weight: normal;
}
.next {
  position: absolute;
  top: 1.8rem;
  right: 0.3rem;
  color: white;
  font-size: 1.5rem;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 7rem;
  overflow: hidden;
  filter: blur(16px);
}
.bg img {
  width: 100%;
}
.header_left {
  width: 4.5rem;
  float: left;
  margin: 0.9rem 1.2rem 0 1.2rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}
.header_left img {
  width: 100%;
}
.header_right {
  color: white;
  float: left;
  margin-top: 0.8rem;
  position: absolute;
  top: 0.3rem;
  left: 7rem;
}
.header_right h3 {
  margin-bottom: 0.6rem;
}
.header_right p {
  font-size: .9rem;
  margin: 0.5rem 0;
}
.el-menu-demo {
  display: flex;
  justify-content: space-between;
}
.content_body {
  border: 1px solid black;
  overflow: hidden;
}
.content_body_left {
  background: #ededed;
  font-size: 1.2rem;
  float: left;
  width: 24%;
  height: 30rem;
  overflow: scroll;
  border: 1px solid red;
}
.content_body_left::-webkit-scrollbar {
  display: none;
}
.content_body_left li {
  text-align: center;
  padding: 1.2rem 0;
  color: #666;
  border-bottom: 0.5px solid #e4e4e4;
}
.active {
  border-left: 0.23rem solid #3190e8;
  background: #fff;
}
.content_body_right {
  float: left;
  width: 73%;
  height: 30rem;
  overflow: scroll;
  border: 1px solid red;
}
.content_body_right::-webkit-scrollbar {
  display: none;
}
.head {
  background: #ededed;
  color: #666;
}
.head_top {
  height: 2.5rem;
  line-height: 2.5rem;
  padding-left: 0.6rem;
}
.head_strong {
  color: #666;
  font-size: 1.2rem;
}
.head_span {
  color: #999;
  font-size: 0.8rem;
}

.stop {
  height: 7rem;
  overflow: hidden;
  background: #fff;
  border-bottom: 1px solid #e4e4e4;
  z-index: 100;
}
.stop_left img {
  width: 3.4rem;
  height: 3.4rem;
  float: left;
  margin: 1rem;
  margin-top: 1.6rem;
}
.stop_right {
  float: left;
  margin-top: .6rem;
  font-size: 0.85rem;
}
.stop_right p {
  padding: .8rem 0;
  color: #999;
}
.sections{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: .3rem;
}
.sections span:nth-child(1){
  color: #f60;
  font-size: 1rem;
}
.sections_right{
  margin-left: 6rem;
}
img {
  width: 3.5rem;
}
.gouwu {
  width: 1.2rem;
}
.bottom {
  width: 100%;
}
.content-right-top {
  overflow: hidden;
  /* margin-top: .5rem; */
  background: #fff;
  padding: 1rem 0;
}
.content-right-top-left {
  /* border: 1px solid red; */
  width: 40%;
  text-align: center;
  float: left;
}
.content-right-top-left p:nth-child(1) {
  color: #f60;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}
.content-right-top-left p:nth-child(2) {
  color: #666;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
.content-right-top-left p:nth-child(3) {
  color: #999;
  font-size: 0.8rem;
}
.content-right-top-right {
  float: right;
  width: 60%;
  /* border: 1px solid red; */
}
.pingfen {
  display: flex;
  justify-content: space-around;
  margin-bottom: 0.3rem;
  color: #666;
  font-size: 0.9rem;
}
.sd span:nth-child(1) {
  color: #666;
  font-size: 0.9rem;
}
.sd span:nth-child(2) {
  color: #999;
  font-size: 0.7rem;
  margin-left: 1rem;
}
.content-right-bottom {
  margin-top: 0.5rem;
  background: #fff;
  text-align: left;
  height: 24.3rem;
  overflow: scroll;
}
.content-right-bottom::-webkit-scrollbar {
  display: none;
}
.content-right-bottom-top {
  display: flex;
  border-bottom: 1px solid #f2f2f2;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  padding: 0.5rem;
}
.content-right-bottom-top li {
  background: #f5fdff;
  color: #6d7885;
  margin: 0 0.5rem 0.5rem 0.4rem;
  /* padding: .3rem; */
  border: 1px solid #f5fdff;
  border-radius: 2px;
}
.content-right-bottom-top li:nth-child(3) {
  background: #f5f5f5;
  color: #aaa;
}
.styles {
  background: #3190e8;
  color: white;
  border-radius: 3px;
}
.tops {
  margin-top: 0.5rem;
}
.btom {
  /* border: 1px solid red; */
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: flex-start;
}
.imags img {
  width: 3.5rem;
}
.shop {
  display: inline-block;
  margin-left: .5rem;
  margin-top: .3rem;
  border: 1px solid #f1f1f1;
}
.shop p{ 
  width: 4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
