<template>
    <div class="shops">
        <!-- 导航栏 -->
        <header>
          <span class="el-icon-arrow-left"  @click="$router.back(-1)"></span>
            <span>商家详情</span>
        </header>
        <!-- 活动与属性页 -->
        <div class="activity">
            <p>活动与属性</p>
            <div class="activity_cont">
                <ul>
                    <li class="avtivity_conts">
                        <span style="background-color: rgb(240, 115, 115);">减</span>
                        <span> 满30减5，满60减8(APP专享)</span>
                    </li>
                    <li class="avtivity_conts">
                         <span style="background-color: rgb(112, 188, 70);">新</span>
                        <span> 121231(APP专享)</span>
                    </li>
                    <li class="avtivity_conts">
                         <span style="background-color: rgb(153, 153, 153);">保</span>
                        <span> 已加入“外卖保”计划，食品安全有保障(APP专享)</span>
                    </li>
                    <li class="avtivity_conts">
                         <span style="background-color: rgb(87, 169, 255);">准</span>
                        <span> 准时必达，超时秒赔(APP专享)</span>
                    </li>
                    <li class="avtivity_conts">
                         <span style="background-color: rgb(153, 153, 153);">票</span>
                        <span> 该商家支持开发票，请在下单时填写好发票抬头(APP专享)</span>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 食品安全公示 -->
         <div class="foot">
           <router-link to="/shopsafe">
          <a href="#">
              <span>食品监督安全公示</span>
              <div class="foot_right">
                  <span>企业认证详情</span>
                  <span>&gt;</span>
              </div>
          </a>
          </router-link>
          <div class="messages"></div>
         </div>
         <!-- 商家信息 -->
         <div class="merchant">
            <p>商家信息</p>
            <ul>
              <li>吃啥啦</li>
              <li>地址：北京市海淀区龙翔路14号</li>
              <li>营业时间:[08:00/22:00]</li>
              <li class="btm">营业执照<span>&gt;</span></li>
              <li class="btm">餐饮服务许可证<span>&gt;</span></li>
            </ul>
         </div>
    </div>
</template>
<script>
export default {
  name: "shops"
};
</script>
<style scoped>
/* 外层div */
.shops {
  background: #e4e4e4;
}
/* 导航栏 */
header {
  height: 3rem;
  background: #3190e8;
  color: white;
  line-height: 3rem;
  font-size: 1rem;
}
header a{
  text-decoration: none;
  color: white;
}
header span:nth-child(1) {
  margin-left: 0.5rem;
  font-size: 1.3rem;
}
header span:nth-child(2) {
  margin-left: 8.3rem;
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
/* 活动与属性页  */
.activity {
  background: #fff;
  margin-top: 0.5rem;
}
.activity p {
  color: #333;
  font-size: 1.2rem;
  height: 2.2rem;
  line-height: 2.2rem;
  padding-left: 0.5rem;
}
.activity_cont {
  border-top: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
}
.avtivity_conts {
  font-size: 0.8rem;
  color: #333;
  font-style: normal;
  margin: 1.3rem 0;
  padding-left: 0.5rem;
  box-sizing: border-box;
  font-weight: 400;
}
.avtivity_conts span:nth-child(1) {
  color: white;
  padding: 0.2rem;
}
/* 食品安全 */
.foot {
  margin-top: 0.5rem;
  background: #fff;
}
.foot a {
  text-decoration: none;
  color: #333;
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 2.5rem;
   margin: 0 .4rem;
   font-size: 1.2rem;
   font-style: normal;
}
.foot_right{
  margin-left: 5rem;
    color: #bbb;
    font-size: 1rem;
}
.messages{
  height: 5rem;
  border-top: .5px solid #f1f1f1;
  border-bottom: .5px solid #f1f1f1;
}
 /* 商家信息 */
.merchant{
  background:#fff;
  margin-top: .8rem;
  
}
.merchant p{
  height: 2.65rem;
  line-height: 2.65
  
  rem;
  font-size: 1.3rem;
  padding-left: .5rem;
  border-bottom: 1px solid #f1f1f1;
}
.merchant ul li{
  padding: .8rem ;
  color: #666;
  font-size: .9rem;
  border-bottom: 1px solid #f1f1f1;
}
.btm{
  display: flex;
  justify-content: space-between;
}
</style>
