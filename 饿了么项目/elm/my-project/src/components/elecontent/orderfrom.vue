<template>
<!--商品分类-->
 <div>
 <div class="head">
   <div class="top-left">
 <!-- <router-link to="/seatch"  class="el-icon-search"></router-link> -->
 <span class="el-icon-arrow-left" @click="$router.back(-1)"></span>
   </div>
   <div class="location">
     <span><router-link to="/home">确认订单</router-link></span>
   </div>
   <!--<i class="el-icon-search"></i>-->
   
   <p class="log-in">
     <router-link to="/login" class="top-right">登录</router-link>
     <span class="top-right">|</span>
     <router-link to="/login" class="top-right">注册</router-link>
     </p>  
 </div>
 

 <!-- 添加收货地址 -->
 <div class="dizhi"><span>请添加一个收货地址</span><span>></span></div>
 <!-- 送达时间 -->
 <!-- <div v-for="(item,index) in data11" :key="index" class="songda">
   <span >尽快送达</span>
   <span>预计{{$item.order_lead_time}}后</span>
   <span>蜂鸟专送</span>
 </div> -->
 <!-- 支付方式(红包) -->
 <div>
   <div class="zhifu">
     <span class="zhifuleft">支付方式</span> <span class="zhifufight">在线支付</span> <span class="xiangyou">></span> 
   
   </div>
   <div>
       <span>红包</span> <span>暂时只在饿了么APP中支持</span> 
   </div>
 </div>
 <!-- 订单详情 -->
     <div v-for="(item,index) in arrs" :key="index">
       <div>
         <span> <img :src="'https://elm.cangdu.org/img/'+item.image_path" alt="" class="flex-left"></span>
         <span>{{item.name}}</span>

       </div>
       <div>
         <span>{{item.name}}</span>
         <span>{{item.count}}</span>
         <span>{{item.price}}</span>
         </div>
         <div>
           <span>订单{{$store.state.num}} </span>
           <span>待支付</span>
         </div>
     </div>
     <div>
       <span>待支付{{$store.state.num}}</span><router-link to="/info_data">

       <span @click="dianji">确认下单</span>
       </router-link>
     </div>
  </div>
</template>
<script>


export default {
  // name: "elecontent"
  data: () => ({
    data11: [],
    data31:[]
  }),
  methods:{
      dianji(){   
    alert("下单成功")
  }
  },
  created() {
    //接口31
   var  api31="https://elm.cangdu.org/bos/v2/users/"+this.$store.state.usermsg.id +"/orders"
   this.$http.get(api31).then((data31)=>{
     this.data31=data31.data
   });
  //  接口11
   var api11="https://elm.cangdu.org/shopping/restaurant/"+this.$store.state.cgid;
   this.$http.get(api11).then((data11)=>{
     this.data11=data11.data
   });
   
  },
  computed:{
   arrs() {
      return this.$store.state.xzdata;
    },
  }
};
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
  margin-left: 4.5rem;
  text-align: center;
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
  margin: 0 2%;
  width: 20%;
  height: 5rem;
  /* border: 1px solid red; */
  float: left;
  text-align: center;
}
.merchant-single img {
  width: 75%;
}
.wenzi {
  color: gray;
}
.swiper-slide{
  background: #fff;
}
el-icon-arrow-left {
  float: left;
  line-height: 3rem;
  text-decoration-line: none;
  font-weight: bold;
  color: #fff;
  font-size: 1.2rem;
  margin-left: 0.4rem;
}
.dizhi{
  padding: 0.5rem 2rem;
}
/* .songda{
  padding: 0.5rem 2rem;
} */
.zhifu{
  padding:0.4rem 1rem;
}
.zhifuright{
  padding-right: 0.2rem;
}
</style>
