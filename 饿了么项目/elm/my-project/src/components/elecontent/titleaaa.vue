<template>
<!--导航栏-->
<div class="head">
   <i class="el-icon-search"></i>
   <p class="log-in">甜品饮品</p>
  </div>
</template>
<script>
export default {
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
  background-color: rgb(44, 22, 241);
  /* border: 1px solid red; */
  height: 2.3rem;
  overflow: hidden;
}
.el-icon-search {
  float: left;
  font-size: 2em;
}
.log-in {
  text-align: center;
  font-size: 1.5em;
}
</style>