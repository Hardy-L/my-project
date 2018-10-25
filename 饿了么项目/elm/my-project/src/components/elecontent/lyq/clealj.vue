<template>
    <div class="clealj">
        <div class="hand">
        <!-- 返回 -->
  <router-link class="el-icon-arrow-left" to="/myele"></router-link>
    <div class="title_head">  
      <span class="title_text">我的积分</span>
    </div>
    </div>
    <!-- 余额模块 -->
    <div class="cleal_content">
        <div class="current">
            <p>当前余额</p>
            <!-- 余额说明 -->
            <div class="explain">
                <img src="../../../assets/我的余额叹号.png" alt="">
               <span>当前积分</span>
               </div>     
               <div class="sp">
            <span>0</span>
            <b>分</b>
            </div>
            <div class="withdrawal">积分兑换商品</div>
        </div>
    </div>
    <p>最近30天积分记录</p>
    <div class="no_log">
        <img src="../../../assets/无积分记录.png" alt="">
        <p>最近30天积分记录</p>
        <span>快去下单赚取大量积分吧</span>
        </div>      


    </div>
</template>

<script>
export default {
name:"clealj"
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
/*头部 */
p,
span {
  font-family: Helvetica Neue, Tahoma, Arial;
}
.clealj {
  background-color: rgb(236, 236, 236);
}
.hand {
  text-align: center;
  background-color: #3190e8;
}

.hand {
  border-bottom: 0.01rem ridge rgb(201, 187, 187);
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
.title_head {
  width: 50%;
  height: 2.8rem;
  margin: 0 auto;
  line-height: 3rem;
}
.title_text {
  font-size: 1.1rem;
  color: rgb(255, 255, 255);
  font-weight: bold;
}
/*当前余额积分*/
.current {
  width: 22.5rem;
  height: 10rem;
  background-color: #fff;
  border-radius: 0.3rem;
  margin: 0 auto;
  overflow: hidden;
  /* border: 1px solid black; */
}
.current > p {
  color: rgb(71, 71, 71);
  font-size: 0.9rem;
  text-align: center;
  margin: 0.8rem 10rem 0.3rem 0.6rem;
  float: left;
}
/*积分说明*/
.explain {
  float: right;
  margin: 0.8rem 0.6rem;
  color: #3190e8;
  font-size: 0.8rem;
  /* border: 0.1rem solid red; */
}
.explain img {
  width: 0.8rem;
  margin-right: 0.1rem;
}
.sp {
  float: left;
}
.cleal_content {
  background-color: #3190e8;
  padding: 0.5rem 0;
}
.sp {
  margin-left: 0.5rem;
  float: left;
}
.sp b {
  color: blank;
  font-size: 0.8rem;
}
.sp span {
  color: black;
  font-size: 3rem;
}
.withdrawal {
  margin: 6rem 0.5rem 1rem 0.5rem;
  font-size: 1.1rem;
  color: #fff;
  background-color: red;
  padding: 1rem 0;
  border: 1px;
  border-radius: 0.15rem;
  text-align: center;
}
.clealj > p {
  font-size: 0.5 rem;
  color: #999;
  line-height: 2rem;
  padding-left: 0.5rem;
}
.no_log {
  text-align: center;
  margin-top: 1rem;
  padding-bottom: 30rem;
  color: gray;
  font-size: 0.7rem;
}
.no_log p{
    padding: 1rem 0;
    font-size: 1rem;
}
.no_log img {
    padding-top: 2rem;
    width: 12rem;
}
</style>
