<template>
<!--导航栏-->
<div class="head">
   <router-link class="fanhui" to="/Aaa"> &it; </router-link>
   <p class="log-in">甜品饮品</p>
  </div>
</template>
<script>
export default {
  props:[],
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
.fanhui {
  float: left;
  font-size: 2em;
  margin: 0.2rem 0.3rem;
  /* border:1px solid red; */
  line-height: 1.6rem;
  font-size: 2rem;
  color:white;
}
.log-in {
  text-align: center;
  font-size: 1.5em;
  font-size: 1.3rem;
}
</style>