<template>
    <div class="home">
    <header>
        <a href="#/home" class="head_left"><span>首页</span></a>
        <a href="#" class="head_right"><span>登陆|注册</span></a>
    </header>
    <div class="top">
        <span>当前定位城市:</span>
        <span>定位不准时，请在城市列表中选择</span>
    </div>
     <router-link :to="'/huntsite/'+data.id">
      <a class="top_two">
        <span class="top_two_left">{{data.name}}</span>
        <span class="top_two_right">></span>
    </a>
    </router-link>
    <Hotcity></Hotcity>
    <Groupcity></Groupcity>
</div>
</template>
<script>
import Groupcity from "./groupcity";
import Hotcity from "./hotcity";
export default {
  name: "home",
  components: {
    Groupcity,
    Hotcity
  },
  data: () => ({
    data: []
  }),
  created() {
    let api = "https://elm.cangdu.org/v1/cities?type=guess";
    this.$http.get(api).then(res => {
      this.data = res.data;
    });
  }
};
</script>
<style scoped>
.home {
  background: #f5f5f5;
  width: 100%;
  margin-top: 2.2rem;
}

header {
  height: 2.4rem;
  background: #3190e8;
  line-height: 2.4rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;
  overflow: hidden;
  width: 100%;
}
header span {
  font-size: 1rem;
  color: white;
}
.head_left {
  float: left;
  margin-left: 3%;
}
.head_right {
  float: right;
  margin-right: 3%;
  font-style: normal;
}
.top {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  padding: 0 3% 0 3%;
  color: #333;
  border-bottom: 1px solid gainsboro;
  height: 2.4rem;
  line-height: 2.4rem;
}
.top_two {
  display: flex;
  justify-content: space-between;
  padding: 0 3% 0 3%;
  border-bottom: 1.2px solid gainsboro;
  height: 2.4rem;
  line-height: 2.4rem;
  font-size: 1.2rem;
  text-decoration: none;
}
.top_two_right {
  color: #333;
}
.top_two_left {
  color: #3190e8;
}
</style>

