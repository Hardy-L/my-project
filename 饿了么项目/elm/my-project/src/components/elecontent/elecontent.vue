<template>
<!--商品分类-->
 <div>
 <div class="head">
   <div class="top-left">
 <router-link to="/seatch"  class="el-icon-search"></router-link>
   </div>
   <div class="location">
     <router-link to="/home">
      <span v-for="item in data3" :key="item.id">{{item.address}}</span>
     </router-link>
   </div>
   <!--<i class="el-icon-search"></i>-->
   
   <p class="log-in">
     <router-link to="/login" class="top-right">登录</router-link>
     <span class="top-right">|</span>
     <router-link to="/login" class="top-right">注册</router-link>
     </p>
    
    
 </div>
 <div class="merchant">
  
    <!-- slides -->
  
   <swiper  ref="mySwiper" >
    <!-- <div v-if="index<8" class="left"> -->
      <swiper-slide>
        <div v-for="item in data" :key="item.id" class="merchant-single">
      <router-link :to="{name:'elecontenter',params:{value:item.title} }">
      <img :src="'https://fuss10.elemecdn.com'+item.image_url" alt="">
      <p class="wenzi">{{item.title}}</p>
      </router-link>
        </div>
    </swiper-slide>
    <!-- </div>  -->
  
     <!-- <div v-else class="right"> -->
       <swiper-slide>
      <div v-for="item in data2" :key="item.id" class="merchant-single">
      <router-link :to="{name:'elecontenter',params:{value:item.title} }">
      <img :src="'https://fuss10.elemecdn.com'+item.image_url" alt="">
      <p class="wenzi">{{item.title}}</p>
      </router-link>
         </div>
    </swiper-slide>
    <!-- </div> -->
</swiper>

  </div>
   
  </div>
   

   <!-- <merchantlist></merchantlist> -->
   <!-- <router-view></router-view> -->
</template>
<script>
import elecontenter from "@/components/erjiyemian/elecontenter";
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'


export default {
  // name: "elecontent"
  data: () => ({
    data: [],
    data2:[],
    data3:[]
  }),
  mounted() {},
  created() {
    // 接口  5
    var api5 = "/api/v2/index_entry";
    var _this = this;
    this.$http.get(api5).then(data => {
      _this.data = data.data.splice(0,8)
      _this.data2= data.data.splice(0,8)
    });
     this.data3 = JSON.parse(localStorage.getItem("obj"));
  }
};
//组件内的每一个this对象,都是Vue的孩子
//Vue祖宗的原型数据,就会共享给所有的孩子
// Vue.prototype.$axios=axios;
</script>
<style scoped>
.head {
  width: 100%;
  height: 3rem;
  background-color: #3190e8;
  overflow: hidden;
}
.top-left {
  float: left;
  /* border:0.1rem solid red; */
  font-size: 1.6rem;
  padding: 0.3rem;
}
.top-right {
  float: right;
  font-size: 1rem;
  line-height: 2rem;
  padding: 0.5rem;
  color: #ffffff;
}
.location span {
  color: white;
  line-height: 3rem;
  float: left;
  margin-left: 4.3rem;
  width: 8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.location span a{
  text-emphasis: none;
  color: white;
}
/*登录注册*/
.top-right span {
  color: white;
  font-size: 1rem;
  line-height: 2rem;
}
.merchant {
  padding-top: 0.5em;
  width: 100%;
}
.merchant-single {
  font-size: .9rem;
  margin: 0 2%;
  width: 20%;
  height: 5rem;
  /* border: 1px solid red; */
  float: left;
  text-align: center;
}
.merchant-single img {
  width: 3.7rem;
}
.wenzi {
  color: gray;
}
.swiper-slide{
  background: #fff;
}

</style>
