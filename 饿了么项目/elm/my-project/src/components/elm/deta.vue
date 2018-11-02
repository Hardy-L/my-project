<template>
  <div class="deta">
      <header>
        <span class="el-icon-arrow-left" @click="goback()"></span>
        <p>{{this.$route.query.name}}</p>
      </header>
      
      <img class="imgs" :src="'//elm.cangdu.org/img/'+this.$route.query.image_path" alt="">
     <div class="content"> 
      <p>{{this.$route.query.description}}</p>
      <p>{{this.$route.query.name}}</p>
      <p>{{this.$route.query.tips}}</p>
     </div>
  </div>
</template>
<script>
export default {
  name: "deta",
  methods: {
    goback() {
      this.$router.push({ path: "/store/" + this.$route.query.id });
    }
  }
};
</script>
<style scoped>
.deta {
  width: 100%;
  background: #fff;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
}
header {
  height: 3rem;
  background: #3290e8;
  line-height: 3rem;
}
header p{
  /* margin-left: 35%; */
  margin: 0 auto;
  color: white;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 6rem;
  text-align: center;
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
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #e4e4e4;
}
.content p:nth-child(1) {
  font-size: 1.4rem;
  padding-left: 1rem;
  margin: 1rem 0;
  color: #666;
}
.content p:nth-child(2) {
  color: #333;
  font-size: 0.9rem;
  padding-left: 1rem;
  margin-bottom: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 8rem;
}
.content p:nth-child(3) {
  color: #666;
  font-size: 0.9rem;
  font-weight: 500;
  padding-left: 1rem;
}
</style>
