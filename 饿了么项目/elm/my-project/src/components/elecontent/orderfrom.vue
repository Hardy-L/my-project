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
   
   <p class="log-in">
     <router-link to="/login" class="top-right">登录</router-link>
     <span class="top-right">|</span>
     <router-link to="/login" class="top-right">注册</router-link>
     </p>  
 </div>
 
<div class="ul_li">
 <!-- 添加收货地址 -->
 <div class="dizhi">
   <div>
  <img src="../../assets/dizhi.png" alt="">
  <span>请添加一个收货地址</span>
   </div>
  <span class="el-icon-arrow-right"></span>
   </div>
 <div style="width:100%;height:0.2rem;background:linear-gradient(to right,skyblue, pink,skyblue, pink,skyblue, pink,skyblue, pink,skyblue, pink,skyblue, pink,skyblue, pink,skyblue, pink,skyblue, pink,skyblue, pink,skyblue, pink,skyblue, pink);margin-bottom:1rem;"></div>
 <!-- 送达时间 -->
 <div class="songda">
   <div class="sdsj">送达时间</div>
   
   <div class="sd-right">
     <span class="jink">
       尽快送达
     </span>
     <span class="yuji">预计20分钟后</span>
     <div class="fengniao">蜂鸟专送</div>
     </div>
  
 </div>

 <div class="profile-1reTe">
<ul>
  <li>
    <div class="myorder-div">
    <span>支付方式</span></div> 
  <div class="rig">
    <span>在线支付</span>
    <span class="el-icon-arrow-right"></span>
  </div>
    </li>

    <li>
    <div class="myorder-div">
    <span>红包</span></div> 
  <div class="rig">
    <span>暂时只在饿了么App中支持</span>
  </div>
    </li>
  </ul>
 </div>
<div class="profile-1reTe">
<ul v-for="(item,index) in arrs" :key="index">
<li style="height: 6rem;">
  <div class="dizhi">
    <div>
    <img src="../../assets/elmlogo.jpg" alt="">
    <span>二万五v</span>
    </div>
    </div> 
    </li>
    <li>
      <div class="myorder-div">
    <span>{{item.name}}</span></div> 
  <div class="rig">
    <b>x{{item.count}}</b>
    <span>¥{{item.price}}</span>
  </div>

    </li>
    <li>
      <div class="myorder-div">
    <span>餐盒</span></div> 
  <div class="rig">
    <span>在线支付¥{{num}}</span>
    <span class="el-icon-arrow-right"></span>
  </div>
    </li>


    <li>
      <div class="myorder-div">
    <span>配送费</span></div> 
  <div class="rig">
    <span>¥{{num}}</span>
  </div>
    </li>

     <li>
      <div class="myorder-div">
    <span>订单{{item.name}}</span></div> 
  <div class="rig">
    <b>待支付</b>
    <br>
    <b>¥{{$store.state.num}}</b>
  </div>
    </li>
</ul>
</div>
</div>
<div class="bottom">
  <div class="loding">待支付¥{{$store.state.num}}</div>
  <router-link to="/info_data">
  <div class="order" @click="dianji">确认下单</div>
  </router-link>
</div>
  </div>
</template>
<script>
export default {
  name: "elecontent",
  data: () => ({
    data11: [],
    data31: [],
    num: "1"
  }),
  methods: {
    dianji() {
      this.$store.commit("dianji")
      alert("下单成功");
    }
  },
  created() {
    //   //接口31
    //  var  api31="https://elm.cangdu.org/bos/v2/users/"+this.$store.state.usermsg.id +"/orders"
    //  this.$http.get(api31).then((data31)=>{
    //    this.data31=data31.data
    //  });
    // //  接口11
    //  var api11="https://elm.cangdu.org/shopping/restaurant/"+this.$store.state.cgid;
    //  this.$http.get(api11).then((data11)=>{
    //    this.data11 = data11.data
    //  });
  },
  computed: {
    arrs() {
      return this.$store.state.xzdata;
    }
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
  /* background: repeating-linear-gradient(to right, skyblue 5%, pink 10%); */
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
  /* background: #f58fa0; */
  line-height: 3rem;
  float: left;
  margin-left: 4.5rem;
  text-align: center;
  width: 8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.location span a {
  text-emphasis: none;
  color: white;
  font-size: 1rem;
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
.swiper-slide {
  background: #fff;
}

/*添加地址*/
.dizhi {
  background-color: #fff;
  height: 5rem;
  font-size: 1.5rem;
  overflow: hidden;
}
.dizhi img {
  width: 2rem;
  height: 2rem;
  float: left;
  margin: 1.5rem 0.5rem;
}
.dizhi div span {
  float: left;
  line-height: 5rem;
  font-size: 1rem;
  margin-right: 4rem;
}
.songda {
  /* border: 1px solid red; */
  height: 6rem;
  background-color: #fff;
  font-size: 1rem;
  overflow: hidden;
}
.sdsj {
  font-size: 1rem;
  font-weight: 700;
  float: left;
  line-height: 6rem;
  margin-left: 2rem;
  /* border: 0.1rem solid red; */
}
.sd-right {
  margin: 0.9rem 0.4rem;
  float: right;
  /* border: 0.1rem solid red; */
  line-height: 2.3rem;
}
.sd-right span {
  font-family: Helvetica Neue, Tahoma, Arial;
}

.jink {
  color: #3190e8;
  font-size: 1rem;
}
.yuji {
  color: #3190e8;
  font-size: 1rem;
  border-left: 0.2rem solid #3190e8;
  margin-left: 0.8rem;
  padding-left: 0.8rem;
}
.fengniao {
  width: 4.2rem;
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  font-size: 0.8rem;
  border-radius: 0.45rem;
  background-color: #3190e8;
  color: white;
  font-weight: 700;
  margin-top: 0.5rem;
  margin-left: 8rem;
}

.el-icon-arrow-left {
  float: left;
  line-height: 2.5rem;
  text-decoration-line: none;
  font-weight: bold;
  color: #fff;
  font-size: 1.2rem;
  margin-left: 0.4rem;
}
.el-icon-arrow-right {
  float: right;
  line-height: 5rem;
  font-size: 1.5rem;
  text-decoration-line: none;
  font-weight: bold;
  color: rgb(111, 111, 111);
}
/* 支付部分 */
.profile-1reTe {
  background-color: #fff;
  width: 100%;
  margin: 0.6rem 0;
}
.profile-1reTe ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  width: 100%;
  font-size: 0.9rem;
  border-bottom: 0.01rem solid rgb(218, 198, 198);
}
.myorder-div img {
  width: 2.8rem;
  margin-left: 1rem;
}

.myorder-div span {
  display: inline-block;
  color: rgb(84, 79, 79);
  margin-left: 0.5rem;
  font-size: 1.1rem;
}
.rig {
  margin-right: 0.5rem;
}
.rig span {
  color: #999;
  font-size: 0.9rem;
  line-height: 2rem;
}
.rig b {
  color: orange;
  margin: 2.5rem 0.8rem;
}
.bottom {
  width: 100%;
  height: 3rem;
  display: flex;
  /* border:  0.1rem solid red; */
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
}
.bottom .loding {
  flex: 2;
  background: #666;
  line-height: 3rem;
}
.bottom .order {
  flex: 3;
  background: #4cd964;
  line-height: 3rem;
  text-align: center;
  color: #fff;
}
.ul_li {
  height: 35.2rem;
  overflow: scroll;
}
</style>
