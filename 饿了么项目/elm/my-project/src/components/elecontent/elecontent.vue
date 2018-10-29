<template>
<!--商品分类-->
 <div>
 <div class="head">
   <div class="top-left">
 <router-link to="/seatch"  class="el-icon-search"></router-link>
   </div>
   <div class="location">
     <span><router-link to="/home">{{this.$route.query.address}}</router-link></span>
   </div>
   <!--<i class="el-icon-search"></i>-->
   
   <p class="log-in">
     <router-link to="/login" class="top-right">登录</router-link>
     <span class="top-right">|</span>
     <router-link to="/login" class="top-right">注册</router-link>
     </p>
    
    
 </div>
 <div class="merchant">
  <div v-for="(item,index) in data" :key="index" class="merchant-single">

    <div v-if="index<8" class="left">
      <router-link :to="{name:'elecontenter',params:{value:item.title} }">
      <img :src="'https://fuss10.elemecdn.com'+item.image_url" alt="">
      <p class="wenzi">{{item.title}}</p>
      </router-link>
    </div> 
  
     <div v-else class="right">
      <router-link :to="{name:'elecontenter',params:{value:item.title} }">
      <img :src="'https://fuss10.elemecdn.com'+item.image_url" alt="">
      {{item.title}}
      </router-link>
    </div>
  </div>
  </div>
</div> 

   <!-- <merchantlist></merchantlist> -->
   <!-- <router-view></router-view> -->
</template>
<script>
import elecontenter from "@/components/erjiyemian/elecontenter";
export default {
  // name: "elecontent"
  data: () => ({
    data: []
  }),
  mounted() {},
  created() {
    // 接口  5
    var api5 = "https://elm.cangdu.org/v2/index_entry";
    var _this = this;
    this.$http.get(api5).then(data => {
      // params: {
      //     shopid: this.id
      //   }
      // console.log(shopid)
      //关闭加载提示
      // loadingInstance1.close();
      // 成功后的回调
      // console.log("成功了....");
      //展示所有商店名
      // console.log(data);
      _this.data = data.data;
      // console.log(_this.data);
    });
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
  border: 1px solid red;
  float: left;
  text-align: center;
}
.merchant-single img {
  width: 75%;
}
.wenzi {
  color: gray;
}
</style>
