<template>
    <div class="payment">
     <!-- 头部 -->
      <div class="hand">
        <!-- 返回 -->
  <span class="el-icon-arrow-left" @click="$router.back(-1)"></span>
    <div class="title_head">  
      <span class="title_text">在线支付</span>
    </div>
    </div>
    <div class="show_time_amount">
        <div>
            <header class="time_last">支付剩余时间</header> 
            <p class="time">00 : 10 : 37</p> 
            </div>
            </div>
            
    </div>
</template>

<script>
export default {
  name: "payment"
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
.payment {
  background-color: rgb(236, 236, 236);
}
.hand {
  text-align: center;
  background-color: #3190e8;
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
/* content*/
.show_time_amount {
  background-color: #fff;
  padding: 0.7rem;
  text-align: center;
}
.show_time_amount .time_last {
  font-size: 0.6rem;
  color: #666;
  margin-top: 1rem;
}
.show_time_amount .time {
  font-size: 1.5rem;
  color: #333;
  margin: 0.3rem 0 1rem;
}
.pay_way {
  background-color: #f1f1f1;
  padding: 0 0.7rem;
  font-size: 0.7rem;
  color: #666;
  line-height: 1.8rem;
}
.pay_way_list {
    background-color: #fff;
}
</style>

