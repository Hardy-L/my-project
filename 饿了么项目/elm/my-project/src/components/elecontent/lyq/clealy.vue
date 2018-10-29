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
      
    <div class="category_title"><span  class="choosed">红包</span> <span class="">商家代金券</span></div>
    <div class="hongbao_container">
      <header class="hongbao_title"><div  class="total_number">有 
        <span >3</span> 个红包即将到期
                          </div> <div class="hongbao_description"> <a href="#/benefit/hbDescription" class="hongbao_detail">红包说明</a></div></header>

    <ul  class="hongbao_list_ul"><li class="hongbao_list_li">
      <section class="list_item"><div  class="list_item_left">
        <span >¥</span> <span >1</span>
     <span >.</span>
      <span >0</span> 
      <p>满 20 元可用</p>
      </div> 
      <div class="list_item_right">
        <h4 >分享红包</h4> 
        <p >2017-05-23到期</p> 
        <p >限收货手机号为 13681711254</p>
        </div> <div  class="time_left">剩3日</div>
        </section> 
        
        </li><li class="hongbao_list_li"><section  class="list_item"><div  class="list_item_left"><span >¥</span> <span >2</span> <span>.</span> <span>0</span> <p >满 40 元可用</p></div> <div class="list_item_right"><h4>分享红包</h4> <p>2017-05-23到期</p> <p >限收货手机号为 13681711254</p></div> <div class="time_left">剩3日</div></section> <!----></li><li class="hongbao_list_li"><section  class="list_item"><div class="list_item_left"><span>¥</span> <span>4</span> <span >.</span> <span >5</span> <p >满 30 元可用</p></div> <div  class="list_item_right"><h4 >分享红包</h4> <p >2017-05-23到期</p> <p >限收货手机号为 13681711254</p></div> <div class="time_left">剩3日</div></section> <footer class="list_item_footer"><p>限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</p></footer></li></ul>
        </div>
        <a href="#/benefit/hbHistory" class="history_hongbao"><span  class="check_history">查看历史红包></span> </a>
        <footer  class="hongbao_footer"><a  href="#/benefit/exchange" class="hongbao_style" style="border-right: 1px solid rgb(245, 245, 245);">
                          兑换红包
                      </a> <a  href="#/benefit/commend" class="hongbao_style">
                          推荐有奖
                      </a></footer>
    </div>
</template>

<script>
export default {
  name: "clealy"
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
  line-height: 2rem;
}
.hongbao_description {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.hongbao_container .hongbao_list_ul .hongbao_list_li {
  background: #fff;
  background-size: 0.5rem 0.2rem;
  margin-bottom: 0.5rem;
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
  font-size: 0.75rem;
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
  font-size: 0.8rem;
  color: #999;
}
.hongbao_container .hongbao_list_ul .hongbao_list_li .list_item .time_left {
  font-size: 0.8rem;
  color: #ff5340;
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
