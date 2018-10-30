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
            <router-link to="/shops"> <b class="next">&gt;</b></router-link>
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
            <section class="stop" v-for="(stores,key) in value.foods" :key="key">
                 <div class="stop_left">
                   <img :src="'//elm.cangdu.org/img/'+stores.image_path" alt="">
                 </div>
                 <div class="stop_right">
                     <h3>{{stores.name}}</h3>
                     <p>{{stores.description}}</p>
                     <strong>{{stores.tips}}</strong>
                 </div> 
              </section>                 
            </section>
          </div>
       </div>
       <div class="content-right" v-show="clic2">
         <div class="content-right-top">
           <ul class="content-right-top-left">
             <li>
               <span>{{pingfen}}</span>
               <span>综合评价</span>
               <span>高于周边商家{{gaoyu}}%</span>
             </li>
           </ul>
           <ul class="content-right-top-right">
             <li>
               <div> <span>服务态度</span> <span>
                 <el-rate
                     v-model="fuwu"
                     disabled
                     show-score
                     text-color="#ff9900"
                     score-template="{value}">
                </el-rate>
                 </span> </div>
                
              <div> <span>菜品评价</span> <span>
                 <el-rate
                     v-model="caipin"
                     disabled
                     show-score
                     text-color="#ff9900"
                     score-template="{value}">
                </el-rate>
                 </span>  </div>
               <div><span>送达时间 </span><span>分钟</span></div>
             </li>
           </ul>
         </div>
         <div class="content-right-bottom">
          <ul class="content-right-bottom-top">
            <li v-for="item in data19" :key="item.id"> <span >{{item.name}}({{item.count}})</span></li>
          </ul>
           <ul class="content-right-bottom-bottom">
              <li v-for="(item,index) in data17" :key="index"> <span ></span>
               <span>
                 <div>{{item.username}}</div>
                 <div>
                <span> <el-rate
                  v-model="a"
                  disabled
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate></span>
                  <span>准时送达</span>
                 </div>
                 <div v-if="index==0">
                  <span><img :src="'https://fuss10.elemecdn.com/'+img1+'.jpeg'" alt="">
                  </span><span><img :src="'https://fuss10.elemecdn.com/'+img2+'.jpeg'" alt=""></span>
                 </div>
                  <div v-else-if="index==1">
                  <span><img :src="'https://fuss10.elemecdn.com/'+img3+'.jpeg'" alt=""></span>
                 </div>
                 <div v-else></div>
                 <div> </div>
                 </span> 
                 <div v-for=" (aaa ,index) in item.item_ratings" :key="index">
               <span>{{aaa.food_name}}</span>
                 </div>
               </li>
           </ul>
         </div>
       </div>
    </div>  
</template>
<script>
export default {
  name: "store",
  data() {
    return {
      activeIndex: "1",
      data16: [],
      facevalue: "0",
      datas: [],
      clic1:true,
      clic2:false,
      data19:[],
      data6:[],
      data18:[],
      data17:[],
      pingfen:"",
      fuwu:5,
      caipin:5,
      gaoyu:"",
      a:5,
      img1:"",
      img2:"",
      img3:"",
    };
  },
  created() {
    var _this = this;
    // 接口16
    let api ="api/shopping/v2/menu?restaurant_id=" +this.$route.params.id;
    this.$http.get(api).then(res => {
      _this.data16 = res.data;
    });
    let url ="api/shopping/restaurant/" + this.$route.params.id;
    this.$http.get(url).then(data11 => {
      _this.datas = data11.data;
    });
    //接口19
    let api19="https://elm.cangdu.org/ugc/v2/restaurants/"+this.$route.params.id+"/ratings/tags";
    this.$http.get(api19).then(data19=>{
      _this.data19 = data19.data;
      // console.log(data19.data.name)
    });
    // 接口18
    let api18="https://elm.cangdu.org/ugc/v2/restaurants/"+this.$route.params.id+"/ratings/scores";
    this.$http.get(api18).then(data18=>{
      _this.data18=data18.data
      this.pingfen=parseInt(data18.data.food_score*10)/10
      this.fuwu=parseInt(data18.data.overall_score*10)/10
      this.caipin=parseInt(data18.data.service_score*10)/10
      this.gaoyu=parseInt(data18.data.compare_rating*100)
      // console.log(this.pingfen+"aaaaaaaaaaaaaaaaaaaaaaaaaaa")
    })
    // 接口17 
    let api17="https://elm.cangdu.org/ugc/v2/restaurants/"+this.$route.params.id+"/ratings";
     this.$http.get(api17).then(data17=>{
      _this.data17 = data17.data;
      // console.log(data19.data.name)
      this.img1= _this.data17[0].item_ratings[0].image_hash
      this.img2=_this.data17[0].item_ratings[1].image_hash
      this.img3=_this.data17[1].item_ratings[1].image_hash
      console.log(this.img1)
      console.log(this.img2)
      console.log(this.img3)
    });
  },
  methods: {
    handleSelect(key, keyPath) {},
    menu(id) {
      this.facevalue = id;
    },
    click1(){
      this.clic1=true;
      this.clic2=!this.clic1
    },
    click2(){
      this.clic2=!this.clic2;
       this.clic1=!this.clic2
    }
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
}
header {
  height: 6.6rem;
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
  height: 8rem;
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
  font-size: 1rem;
  margin: 0.5rem 0;
}
.el-menu-demo {
  display: flex;
  justify-content: space-between;
}
.content_body {
  height: 30rem;
}
.content_body_left {
  background: #ededed;
  font-size: 1.2rem;
  float: left;
  width: 25%;
  height: 31.2rem;
  overflow: scroll;
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
  width: 75%;
  height: 31.2rem;
  overflow: scroll;
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
  height: 6.6rem;
  overflow: hidden;
  background: #fff;
  border-bottom: 1px solid #e4e4e4;
  z-index: 100;
}
.stop_left img {
  width: 3.2rem;
  height: 3.2rem;
  float: left;
  margin: 1rem;
  margin-top: 1.6rem;
}
.stop_right {
  float: left;
  margin-top: 1rem;
  font-size: 0.85rem;
}
.stop_right p {
  padding: 1rem 0;
  color: #999;
}
img{
  width:3rem;
}
</style>
