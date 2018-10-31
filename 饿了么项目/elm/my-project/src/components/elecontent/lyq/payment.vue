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
            <header class="time_last" @click="beforeMount()">支付剩余时间</header> 
            <p class="time">{{timer}}</p> 
            </div>
            </div>
            <!-- 选择支付方式 -->
     <div class="pay_way">选择支付方式</div> 
            <div class="pay_way_list">
<div class="pay_item">
<div class="pay_icon_contaienr">
<img style="width:3rem" src="../../../assets/支付宝.png" alt="">
  <span>支付宝</span></div> 
    
    <img class="choose_icon" src="../../../assets/选中.png" alt="">
    </div>
    
     <div class="pay_item">

       <div class="pay_icon_contaienr"> 
    <img style="width:3rem" src="../../../assets/微信logo.png" alt=""> 
    <span>微信</span>
    </div> 
    <img class="choose_icon" src="../../../assets/选中.png" alt="">
    </div>
    </div>
    <p class="determine">确认支付</p>
            
            
    </div>
</template>

<script>
export default {
  name: "payment",
  data(){
    return{
      timer:""
    }
  },
  mothods:{
  },
   beforeMount() {
    var _this = this;
    var timer = setInterval(getTotelNumber, 1000);
    var newtime = 15 * 60;
    function getTotelNumber() {
      var m = Math.floor(newtime / 60);
      var s = Math.floor(newtime % 60);
      var msg1 = "00:" + m + ":" + s;
      --newtime;
      if (newtime >= 0) {
        _this.timer = msg1;
      } else {
        clearInterval(timer);
        alert("支付超时，请重新支付");
      }
    }
    getTotelNumber();
  }
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
  padding: 2rem 0.7rem;
  text-align: center;
}
.show_time_amount .time_last {
  font-size: 0.7rem;
  color: #666;
  margin-top: 1rem;
}
.show_time_amount .time {
  font-size: 2rem;
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
/* 选择支付方式*/
.pay_way {
  background-color: #f1f1f1;
  padding: 0 1.7rem;
  font-size: 0.9rem;
  color: #666;
  line-height: 1.8rem;
}

.pay_way_list {
  background-color: #fff;
}
.pay_way_list .pay_item .pay_icon_contaienr,
.pay_way_list .pay_item {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 0.3rem;
}
.pay_way_list .pay_item {
    padding: .4rem .7rem;
    line-height: 2.6rem;
    border-bottom: .025rem solid #f5f5f5;
}
.pay_icon_contaienr {
  margin: 0.2rem 0.3rem 0;
}
.pay_way_list .pay_item .pay_icon_contaienr span {
  font-size: 1rem;
  color: #666;
  margin-left: 0.5rem;
}
.pay_way_list .pay_item .choose_icon {
  width: 2rem;
  height: 2rem;
  fill: #ccc;
}
.determine {
  background-color: #4cd964;
  font-size: 0.9rem;
  color: #fff;
  height:2rem;
  text-align: center;
  margin: 0 0.7rem;
  line-height: 1.8rem;
  border-radius: 0.2rem;
  margin-top: 0.9rem;
  font-weight: 700;
}
</style>

