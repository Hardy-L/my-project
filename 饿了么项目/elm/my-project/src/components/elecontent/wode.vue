<template>
<div>
     <div class="bottom">
     <!-- 外卖 -->
      <router-link to="/Aaa" class="icon" @click="waimaicli">
         <img  class="jiujiujiu" v-show="waimai" src="@/assets/elmhui03.png" alt="">
         <img class="jiujiujiu" v-show="!waimai" src="@/assets/elmlan01.png" alt="">
       <p class="icon-wenzi">外卖</p>
       </router-link>
       <!-- 搜索 -->
     <router-link to="/seatch" class="icon"  @click="sousuocli" >
          <img v-show="sousuo" src="@/assets/sousuohui01.png" alt="">
          <img v-show="!sousuo" src="@/assets/sousuo01.png" alt="">
       <p class="icon-wenzi">搜索</p>
       </router-link>
       
       <!-- 订单 -->
     <router-link to="/info_data" class="icon" @click="dingdancli">
           <img v-show="dingdan" src="@/assets/dingdanhui01.png" alt="">
           <img v-show="!dingdan" src="@/assets/dingdanlan01.png" alt="">
       <p class="icon-wenzi">订单</p>
       </router-link>


       <!-- 我的 -->
    <router-link to="/myele" class="icon" @click="wodecli" >
          <img v-show="wode" src="@/assets/wodehui01.png" alt="">
          <img v-show="!wode" src="@/assets/wodelan01.png" alt="">
       <p class="icon-wenzi">我的</p>
     </router-link>

   </div>
</div>
</template>
<script>
export default {
  name: "wode",
  data() {
    return {
      waimai: false,
      sousuo: false,
      dingdan: false,
      wode: false
    };
  },
  methods: {
    waimaicli() {
      this.waimai = true;
      this.sousuo = this.dingdan = this.wode = false;
    },
    sousuocli() {
      this.sousuo = true;
      this.waimai = this.dingdan = this.wode = false;
    },
    dingdancli() {
      this.sousuo = true;
      this.waimai = this.dingdan = this.wode = false;
    },
    wodecli() {
      this.wode = true;
      this.waimai = this.dingdan = this.sousuo = false;
    }
  }
};
</script>
<style scoped>
.bottom {
  width: 100%;
  background-color: white;
  display: flex;
  position: fixed;
  bottom: -0.1rem;
  left: 0em;
}
.icon {
  width: 25%;
  text-align: center;
}
.icon > img {
  width: 35%;
  padding-top: 10%;
}
.icon .icon-wenzi {
  color: gray;
  font-size: 1rem;
  width: 100%;
  height: 1rem;
}
.icon > p {
  padding: 0%;
  margin: 0;
  text-align: center
}
.body-top {
  height: 13.35rem;
  overflow: hidden;
}
.icon>.jiujiujiu {
  width: 75%;
  padding: 0;
  margin-top: -10%;
}
.jiujiujiu+.icon-wenzi{
  margin-top: -20%;
}
</style>