<template>
<!--导航栏-->
<div class="head">
   <router-link class="fanhui" to="/Aaa"> &lt;</router-link>
   <p class="log-in">{{title}}</p>
   <router-link class="fanhui" to="/Aaa"> &it; </router-link>
   <i class="el-icon-search"></i>
   <p class="log-in">甜品饮品</p>
  </div>
</template>
<script>
export default {
  props:["title"],
  name: "titleaaa"
  
  //    data(){
  //      return{
  //        shopId:""
  //      }
  //    }

  // created(){
  //    var id =  this.$router.params.nameID
  //    ...
  //    _this.shopId=data
  // }
};
</script>
<style scoped>
.head {
  width: 100%;
  background-color: #3190e8;
  height: 3rem;
  line-height: 2.5rem;
  color: #fff;
  font-size: 0.8rem;
  overflow: hidden;
}
p{
  text-align: center;
}
.el-icon-search {
  float: left;
  font-size: 2em;
  margin: 0.4rem 0.3rem;
}
.log-in {
  text-align: center;
  font-size: 1.5em;
}
</style>