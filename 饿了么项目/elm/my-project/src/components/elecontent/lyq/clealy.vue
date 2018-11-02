<template>
    <div class="clealy">
        <div class="hand">
        <!-- 返回 -->
  <router-link class="el-icon-arrow-left" to="/myele"></router-link>
    <div class="title_head">  
      <span class="title_text">我的优惠</span>
    </div>
    </div>  
      <!-- content -->
    <div class="category_title">
      <span class="choosed" :class="{xian:ended}">红包</span> 
      <span class="">商家代金券</span>
      </div>

    <div class="hongbao_container">
    <header class="hongbao_title">
      <div class="total_number">
    有<span >3</span>个红包即将到期</div>
    <div class="hongbao_description">
      <img style="width: 0.8rem;margin-right: 0.1rem;" src="../../../assets/wenhao.png" alt="">
      <router-link to="/vipDescription" class="hongbao_detail">
      红包说明
      </router-link> 
   
    </div>
    </header>

    <ul class="hongbao_list_ul">
      <li class="hongbao_list_li" v-for="item in arr" :key="item.id">
      <div class="list_item">
      <div class="list_item_left">
      <span>¥</span> 
      <span>1</span>
      <span>.</span>
      <span>0</span> 
      <p>满 <span>20</span> 元可用</p>
      </div> 

      <div class="list_item_right">
        <h4>{{item.name}}</h4> 
        <p>{{item.end_date}}</p> 
        <p>限收货手机号为 {{item.phone}}</p>
        </div> <div class="time_left">剩3日</div>
        </div> 
        </li>
        </ul>
        </div>


          <router-link to="/hbHistory" class="history_hongbao">
          <span class="check_history">
          查看历史红包>
          </span>
          </router-link>


        <footer class="hongbao_footer">
        <router-link class="hongbao_style" to="/exchange" style="border-right: 1px solid rgb(245, 245, 245);">兑换红包</router-link>
  <router-link class="hongbao_style" to="/commend">推荐有奖</router-link>
         </footer>
    </div>
</template>

<script>
export default {
  name: "clealy",
  data() {
    return {
      user_id: "",
      limit: "",
      offset: "",
      arr: [],
      ended: false
    };
  },
  created() {
    var user_id = this.$store.state.usermsg.user_id;
    // console.log(this.$store.state.id)
    let api34 =
      "https://elm.cangdu.org/promotion/v2/users/" +
      user_id +
      "/hongbaos?limit=20&offset=0";
    this.$http.get(api34).then(res => {
      console.log("res", res);
      this.arr = res.data;
      this.$store.commit("lm", this.arr.length);
    });
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
.clealy {
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
/*content*/
.category_title {
  width: 100%;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -ms-flex-align: center;
  align-items: center;
  height: 2.8rem;
  background-color: #fff;
}
.category_title span {
  text-align: center;
  font-size: 1rem;
  color: #333;
  padding-bottom: 0.2rem;
  border-bottom: 0.1rem solid #fff;
}
.hongbao_container .hongbao_title {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  font-size: 0.5rem;
  line-height: 2.7rem;
}
.hongbao_description {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.hongbao_container .hongbao_title .total_number {
  color: #666;
  margin-left: 1.1rem;
  font-size: 0.8rem;
}
.hongbao_container .hongbao_title .total_number span {
  color: #ff5340;
  font-size: 0.8rem;
}
.hongbao_description .hongbao_detail {
  color: #3190e8;
  font-size: 0.8rem;
  margin-right: 1.2rem;
}
.hongbao_container .hongbao_list_ul .hongbao_list_li {
  width: 90%;
  background: #fff;
  background-size: 0.5rem 0.2rem;
  margin: 0.5rem auto;
  border-radius: 0.25rem;
  padding-top: 0.5rem;
  border-top: 0.3rem dashed red;
  height: 5rem;
}
.hongbao_container .hongbao_list_ul .hongbao_list_li .list_item {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 1rem 0.5rem 0.8rem;
}
.hongbao_container
  .hongbao_list_ul
  .hongbao_list_li
  .list_item
  .list_item_left
  span:first-of-type {
  font-size: 0.75rem;
  color: #ff5340;
  font-weight: 700;
}
.hongbao_container
  .hongbao_list_ul
  .hongbao_list_li
  .list_item
  .list_item_left
  span:nth-of-type(2) {
  font-size: 1.5rem;
  color: #ff5340;
}
.hongbao_container
  .hongbao_list_ul
  .hongbao_list_li
  .list_item
  .list_item_left
  span:nth-of-type(3),
.hongbao_container
  .hongbao_list_ul
  .hongbao_list_li
  .list_item
  .list_item_left
  span:nth-of-type(4) {
  font-size: 1rem;
  color: #ff5340;
  font-weight: 700;
}
.hongbao_container
  .hongbao_list_ul
  .hongbao_list_li
  .list_item
  .list_item_left
  p {
  font-size: 0.65rem;
  color: #999;
}
.hongbao_container
  .hongbao_list_ul
  .hongbao_list_li
  .list_item
  .list_item_right {
  padding-left: 1rem;
  border-left: 0.01rem solid #999;
}
.hongbao_container
  .hongbao_list_ul
  .hongbao_list_li
  .list_item
  .list_item_right
  h4 {
  font-size: 1rem;
  color: #666;
}
.hongbao_container
  .hongbao_list_ul
  .hongbao_list_li
  .list_item
  .list_item_right
  p {
  list-style-type: disc;
  font-size: 0.7rem;
  color: #999;
}
.hongbao_container .hongbao_list_ul .hongbao_list_li .list_item .time_left {
  font-size: 0.9rem;
  color: #ff5340;
  font-weight: 700;
  margin-right: 0.5rem;
}
.hongbao_container .hongbao_list_ul .hongbao_list_li .list_item_footer {
  background-color: #f9f9f9;
  padding: 0.4rem;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
.hongbao_container .hongbao_list_ul .hongbao_list_li .list_item_footer p {
  list-style-type: disc;
  font-size: 0.4rem;
  color: #999;
}
.history_hongbao {
  padding: 2.5rem 0 5rem;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.history_hongbao .check_history {
  font-size: 0.8rem;
  color: #999;
  margin-right: 0.2rem;
}
.hongbao_footer {
  position: fixed;
  height: 3rem;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  display: -ms-flexbox;
  display: flex;
}
.hongbao_footer .hongbao_style {
  -ms-flex: 1;
  flex: 1;
  line-height: 3rem;
  text-align: center;
  font-size: 0.8rem;
  color: #555;
}
</style>
