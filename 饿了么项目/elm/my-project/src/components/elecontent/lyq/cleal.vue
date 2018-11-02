<template>
    <div class="cleal">
        <div class="hand">
        <!-- 返回 -->
  <router-link class="el-icon-arrow-left" to="/myele"></router-link>
    <div class="title_head">  
      <span class="title_text">我的余额</span>
    </div>
    </div>
    <!-- 余额模块 -->
    <div class="cleal_content">
        <div class="current">
            <p>当前余额</p>
            <!-- 余额说明 -->
            <div class="explain">
                <img src="../../../assets/wenhao.png" alt="">
               <span>余额说明</span>
               </div>     
               <div class="sp">
            <span>0.00</span>
            <b>元</b>
            </div>
            <div class="withdrawal">提现</div>
        </div>
    </div>
    <p>交易明细</p>
    <div class="no_log">
        <img src="../../../assets/wujilu.png" alt="">
        </div>      


    </div>
</template>

<script>
export default {
  name: "cleal"
};
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
.cleal {
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
  margin: 0.8rem 8rem 0.3rem 0.6rem;
  float: left;
}
/*余额说明*/
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
  background-color: #c5c7c5;
  padding: 1rem 0;
  border: 1px;
  border-radius: 0.15rem;
  text-align: center;
}
.cleal > p {
  font-size: 0.8 rem;
  color: #999;
  line-height: 2rem;
  padding-left: 0.5rem;
}
.no_log {
  text-align: center;
  margin-top: 1rem;
  padding-bottom: 30rem;
}
.no_log img {
    padding: top 2rem;
    width: 12rem;
}
</style>
