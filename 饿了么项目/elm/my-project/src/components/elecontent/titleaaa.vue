<template>
<!--导航栏-->
<div class="head">
   <router-link class="fanhui" to="/Aaa"> &lt;</router-link>
   <!-- <p class="log-in"></p> -->
   <!-- <router-link class="fanhui" to="/Aaa"> &it; </router-link> -->
   <!-- <i class="el-icon-search"></i> -->
   <p class="log1">{{name2}}</p>
  </div>
</template>
<script>
export default {

  name: "titleaaa",
 
     data(){
       return{
         shopId:"",
         name2:""
       }
     },

  created(){
    //  var id =  this.$router.params.nameID
    //  ...
    //  _this.shopId=data
    // this.name2.push(this.title)
    this.name2=this.title;
    // console.log(this.title+"................")
    
  },
  props:["title"],
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
.log1 {
  /* overflow: hidden; */
  text-align: center;
  font-size: 1.5em;
  /* border: 1px solid red; */
  width: 5rem;
  height: 1rem;
  float: right;
  margin-right: 9rem;
}
</style>