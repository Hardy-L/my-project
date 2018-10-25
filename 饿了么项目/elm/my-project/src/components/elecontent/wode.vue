<template>
<div>
     <div class="bottom">
     <!-- 外卖 -->
      <router-link to="/Aaa" class="icon">
       <span class="icon-img"><img src="@/assets/放大镜.png" alt=""></span>
       <span class="icon-wenzi">外卖</span>
       </router-link>
       <!-- 搜索 -->
     <router-link to="/seatch" class="icon">
        <span class="icon-img"><img src="@/assets/3搜索2.png" alt=""> </span>
       <span class="icon-wenzi">搜索</span>
       </router-link>
       
       <!-- 订单 -->
     <router-link to="/info_data" class="icon">
         <span class="icon-img"><img src="@/assets/订单.png" alt=""></span>
       <span class="icon-wenzi">订单</span>
       </router-link>


       <!-- 我的 -->
    <router-link to="/myele" class="icon">
        <span class="icon-img"><img src="@/assets/个人中心.png" alt=""></span>
       <span class="icon-wenzi">我的</span>
     </router-link>

   </div>
</div>
</template>
<script>
export default {
  name: "wode"
};
</script>
<style scoped>
.bottom {
  width: 100%;
  background-color: #3190e8;
  /* border: 1px solid red; */
  display: flex;
  position: fixed;
  bottom: 0em;
  left: 0em;
}
.icon {
  /* border: 2px solid black; */
  width: 25%;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.icon .icon-img img {
  width: 2rem;
}
.icon .icon-wenzi {
  color: white;
}
.body-top {
  height: 13.35rem;
  overflow: hidden;
}
</style>