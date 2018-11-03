<template>
    
        <div class="warp">
            <div class="bottom">
              
                <ul v-show="aaa" class="show">
                  <div class="header">
                    <span>购物车</span>
                    <span @click="empty">清空</span>
                  </div>
                    <li v-for="(k,index) in arrs" :key="index" v-show="arrs">
                        <p>{{k.name}}</p>
                        <p>{{k.price}}￥</p>
                        <!-- 商品加减 -->
                      <div class="add">
                        <span @click="jiangou2(k)">
                          <img src="@/assets/减号.png" alt="" class="gouwu1">
                        </span>
                        <span> {{k.count}}</span>
                       <span @click="jiagou2(k)">
                         <img src="@/assets/加购物车.png" alt="" class="gouwu1">
                       </span>
                    </div>
                    </li>
                </ul>
            </div>
            <div class="gouwu" @click="dianji">
            <img src="@/assets/购物车白色.png" alt="">
            </div>
           <span class="yunfei">
           <div class="yunfei-top">
                {{this.$store.state.num}}
           </div>
           <div class="yunfei-bottom">
               配送费¥5元
           </div>
           </span>
               <div  class="qisong" v-show = "show>0">还差¥{{show}}元起送</div>
               <router-link  class="qisong" v-show = "show<=0" to="/orderfrom" style="backgroundColor:#4cd964" @click="aaa">去结算</router-link>
        </div>
</template>
<script>
export default {
  data() {
    return {
      data17: "",
      aaa: false
    };
  },
  computed: {
    arrs() {
      return this.$store.state.xzdata;
    },
    show() {
      return 20 - this.$store.state.num;
    },
    data16() {
      return this.$store.state.datahe;
    }
  },
  created() {},
  methods: {
    dianji() {
      this.aaa = !this.aaa;
    },
    jiagou2(id) {
      console.log(id);
      this.$store.commit("add", id);
    },
    jiangou2(id) {
      this.$store.commit("app", id);
    },
    empty() {
      this.$store.commit("qingkong");
    }
  }
};
</script>
<style scoped>
a {
  text-emphasis: none;
  color: #333;
}
.warp {
  width: 100%;
  background-color: rgb(66, 64, 64);
  overflow: hidden;
  position: fixed;
  left: 0;
  bottom: 0;
}
.gouwu {
  position: fixed;
  bottom: 1.4rem;
  left: 1rem;
  width: 25%;
  border: 0.2rem solid rgb(114, 113, 113);
  background-color: rgb(66, 64, 64);
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
}
.yunfei {
  margin: 0.5rem 0 0 6rem;
  padding-left: 1rem;
  float: left;
  width: 30%;
}
.yunfei-top {
  font-size: 2rem;
  color: #fff;
}
.yunfei-bottom {
  color: #fff;
}
.qisong {
  text-align: center;
  float: right;
  width: 29%;
  font-size: 1rem;
  color: #fff;
  padding: 1.2rem 0.9rem 1.6rem 0;
  background-color: rgb(112, 111, 111);
}
.gouwu1 {
  width: 1.2rem;
}
/* .bottom {
  border: 1px solid red;
} */
.show {
  background: #fff;
}
.show li {
  /* border: 1px solid black; */
  border-bottom: 1px solid #ededed;
  height: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.show p:nth-child(1) {
  color: #666;
  margin-left: 1rem;
  width: 4rem;
  text-align: center;
  /* border: 1px solid red; */
}
.show p:nth-child(2) {
  color: #666;
  margin-left: 6rem;
  width: 4rem;
  text-align: center;
  color: #f60;
  /* border: 1px solid red; */
}
/* .add {
  border: 1px solid black;
} */
.show span {
  color: #333;
}
.header {
  background: #eceff1;
  height: 2.5rem;
  line-height: 2.5rem;
  color: #666;
  font-weight: 400;
}
.header span:nth-child(1) {
  padding-left: 1rem;
  font-size: 1.2rem;
}
.header span:nth-child(2) {
  margin-left: 15rem;
  color: #666;
  font-size: 0.9rem;
}
</style>