<template>
  <div class="deta">
      <header>
        <span class="el-icon-arrow-left" @click="$router.back(-1)"></span>
        <span>{{this.$route.query.name}}</span>
      </header>
      
      <img class="imgs" :src="'//elm.cangdu.org/img/'+this.$route.query.image_path" alt="">
     <div class="content"> 
      <p>{{this.$route.query.name}}</p>
      <p>{{this.$route.query.description}}</p>
      <p>{{this.$route.query.tips}}</p>
     </div>
  </div>
</template>
<script>
export default {
  name: "deta"
};
</script>
<style>
.deta{
    background: #fff;
     position: fixed;
     height: 100%;
     width: 100%;
}  

header {
  height: 3rem;
  background: #3290e8;
  line-height: 3rem;
}
header span:nth-child(2) {
  margin-left: 35%;
  color: white;
  font-weight: 600;
}
.el-icon-arrow-left {
  float: left;
  line-height: 3rem;
  text-decoration-line: none;
  font-weight: bold;
  color: #fff;
  font-size: 1.2rem;
  margin-left: 0.4rem;
}
.imgs {
  width: 100%;
  margin-bottom: .5rem;
  border-bottom: 1px solid #e4e4e4;
}
.content p:nth-child(1){
    font-size: 1.2rem;
    padding-left: 1rem;
    margin: .5rem 0;
    color: #666;
}
.content p:nth-child(2){
    color: #333;
    font-size: .9rem;
    padding-left: 1rem;
    margin-bottom: .5rem;
}
.content p:nth-child(3){
     color: #666;
     font-size: .9rem;
     font-weight: 500;
     padding-left: 1rem;
}
</style>
