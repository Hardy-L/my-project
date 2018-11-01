<template>
    <div class="info-data">
     <!-- 头部 -->
      <div class="hand">
        <!-- 返回 -->
  <span class="el-icon-arrow-left" @click="$router.back(-1)"></span>
    <div class="title_head">  
      <span class="title_text">我的订单</span>
    </div>
    </div>
    <ul class="order_list_ul"><li class="order_list_li"><img src="//elm.cangdu.org/img/16677606b8719449.jpg" class="restaurant_image"> <section class="order_item_right"><section><header class="order_item_right_header"><section class="order_header"><h4><span class="ellipsis">吃啥啦 </span></h4> <p class="order_time">2018-10-30 11:25</p></section> <p class="order_status">  等待支付 </p></header> <section class="order_basket"><p class="order_name ellipsis">qq-默认 等2件商品</p> <p class="order_amount">¥26395.00</p></section></section> <div class="order_again"><div class="page"><span class="rem_time" style="color: orange; border-width: 1px; border-style: solid; border-color: orange;">
	       去支付(还剩12分14秒)
        </span> <!----></div></div></section></li><li class="order_list_li"><img src="//elm.cangdu.org/img/166868e0e1719687.jpg" class="restaurant_image"> <section class="order_item_right"><section><header class="order_item_right_header"><section class="order_header"><h4><span class="ellipsis">京客隆123 </span></h4> <p class="order_time">2018-10-29 12:28</p></section> <p class="order_status">
                            支付超时
                        </p></header> <section class="order_basket"><p class="order_name ellipsis">西瓜丸子1-默认</p> <p class="order_amount">¥26193.00</p></section></section> <div class="order_again"><span class="buy_again">再来一单</span></div></section></li></ul>
    <wode></wode>
    </div>
</template>

<script>
import wode from "../wode";
export default {
  name: "info_data",
  components: {
    wode
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
.info-data {
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
.order_list_ul {
    padding-top: .2rem;
}
.order_list_ul .order_list_li {
    background-color: #fff;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: .5rem;
    padding: .6rem .6rem 0;
}
.order_list_ul .order_list_li .restaurant_image {
    width: 2rem;
    height: 2rem;
    margin-right: .4rem;
}
.order_list_ul .order_list_li .order_item_right {
    -ms-flex: 5;
    flex: 5;
}
.order_list_ul .order_list_li .order_item_right .order_item_right_header {
    border-bottom: .025rem solid #f5f5f5;
    padding-bottom: .3rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.order_list_ul .order_list_li .order_item_right .order_basket {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    line-height: 2rem;
    border-bottom: .025rem solid #f5f5f5;
}
.order_list_ul .order_list_li .order_item_right .order_item_right_header .order_header h4 {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: start;
    justify-content: flex-start;
    font-size: .75rem;
    color: #333;
    line-height: 1rem;
    /* width: 9rem; */
}
.order_list_ul .order_list_li .order_item_right .order_basket .order_name {
    font-size: .6rem;
    color: #666;
    width: 10rem;
}
.order_list_ul .order_list_li .order_item_right .order_basket .order_amount {
    font-size: .6rem;
    color: #f60;
    font-weight: 700;
}
.order_list_ul .order_list_li .order_item_right .order_again {
    text-align: right;
    line-height: 1.6rem;
}
.page {
    display: inline-block;
}
.page .rem_time {
    font-size: .55rem;
    color: orange;
    padding: .1rem .2rem;
    /* border-radius: .15rem; */
}
</style>

