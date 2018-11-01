<template>
    
        <div class="warp">
            <div>
                <ul v-show="aaa">
                    <!-- <li v-for="(value,index) in data16" :key="index" >
                    <div v-for="(item,index) in value.foods"  :key="index"> -->
                    <li v-for="(k,index) in arrs" :key="index" style="color:white" v-show="arrs">
                        <p>{{k.specfoods[0].name}}</p>
                        <p>默认</p>
                        <p>{{k.specfoods[0].price*k.specfoods[0].count}}</p>
                        <p>{{k.specfoods[0].count}}</p>






                            <span @click="jiangou2(k.specfoods[0].food_id)">
                      <img src="@/assets/减号.png" alt="" class="gouwu1">
                      </span>
                      <span> {{k.specfoods[0].count}}</span>
                       <span @click="jiagou2(k.specfoods[0].food_id)">
                      
                      <img src="@/assets/加购物车.png" alt="" class="gouwu1">
                    </span>
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
           <span class="qisong">
               <div v-show = "show>0">还差¥{{show}}元起送</div>
               <router-link v-show = "show<=0" to="/orderfrom">去结算</router-link>
           </span>
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
      this.$store.commit("jiagou2", id);
    },
    jiangou2(id) {
      this.$store.commit("jiangou2", id);
    }
  }
};
</script>
<style scoped>
.warp {
  width: 100%;
  background-color: rgb(66, 64, 64);
  /* border: 0.1rem solid red; */
  overflow: hidden;
}
.gouwu {
  float: left;
  width: 25%;
  border: 0.2rem solid rgb(114, 113, 113);
  background-color: rgb(66, 64, 64);
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  /* border:0.1rem solid white; */
}
.yunfei {
  margin-top: 0.5rem;
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
  float: right;
  width: 45%;
  font-size: 1.5rem;
  color: #fff;
  padding: 1.2rem 0.9rem 1.2rem 0;
  background-color: rgb(112, 111, 111);
}
.gouwu1 {
  width: 1.2rem;
}
</style>