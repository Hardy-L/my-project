<template>
 <div class="shopsafe">
        <!-- 食品监督公示详情头部 -->
  <header>
      <span @click="$router.back(-1)">&lt;</span>
      <span>食品监督安全公示</span>
  </header>
   
  <div class="head">
     <p>食品监督安全公示</p>
     <div class="deta"></div>
  </div>
  <!-- 登记信息 -->
  <div class="content">
      <p class="title">工商登记信息</p>
      <ul class="message">
          <li>企业名称</li>
          <li>工商执照注册号</li>
          <li>注册资本</li>
          <li>注册地址</li>
          <li>属地监管所</li>
          <li>法定代表人</li>
          <li>经营范围</li>
      </ul>
  </div>
  <!-- 许可证 -->
  <div class="bottom">
      <p class="title">餐饮许可证</p>
      <ul class="message">
          <li>营业范围</li>
          <li>许可证有效期</li>
          <li>许可证号</li>
          <li>发证时间</li>
      </ul>
  </div>
 </div>
</template>
<script>
export default {
  name: "shopsafe"
};
</script>
<style>
/* 外层div */
.shopsafe {
  background: #e4e4e4;
}
/* 头部 */
header {
  height: 2.5rem;
  background: #3190e8;
  color: white;
  font-size: 1.2rem;
  line-height: 2.5rem;
}
 header a {
  text-decoration: none;
  color: white;
}
header span:nth-child(1) {
  margin-left: 1rem;
  font-size: 1.5rem;
}
header span:nth-child(2) {
  margin-left: 4rem;
}
 /* head */
 .head{
     /* border: 1px solid red; */
     background: #fff;
 }
 .head p {
     height: 2rem;
     line-height: 2rem;
     font-size: 1.2rem;
     font-style: normal;
     padding-left: .8rem;
 }
 .deta{
     height: 6rem;
     border-top:1px solid #ededed;
     border-bottom:1px solid #ededed
 }
  /* 登记信息 */
  .content{
      /* border: 1px solid red; */
      margin-top: .6rem;
      background: #fff;
  }
 .title{
     height: 2rem;
     line-height: 2rem;
     font-size: 1.2rem;
     padding-left: .5rem;
     border-bottom:  1px solid #ededed;
 }
 .message li{
    font-size: .8rem;
    height: 1.6rem;
    color: #333;
    font-style: normal;
    line-height: 1.6rem;
    padding: .5rem 0 .2rem .6rem;
 }
 
  /* 许可证 */
  .bottom{
      /* border: 1px solid black; */
      margin-top: .6rem;
      background: #fff;
  }
</style>

