<template>
    <div class="hbHistory">
     <!-- 头部 -->
      <div class="hand">
        <!-- 返回 -->
  <span class="el-icon-arrow-left" @click="$router.back(-1)"></span>
    <div class="title_head">  
      <span class="title_text">历史红包</span>
    </div>
    </div>
    <!-- content -->
     <div class="hongbao_container">
    <header class="hongbao_title">
      <div class="total_number">
    有<span>{{length}}</span>个红包即将到期</div>
    <div class="hongbao_description"> 
    <a href="#/benefit/hbDescription" class="hongbao_detail">红包说明</a>
    </div>
    </header>

    <ul class="hongbao_list_ul">
      <li class="hongbao_list_li" v-for="(item,index) in arr" :key="index">
      <div class="list_item">
      <div class="list_item_left">
      <span>¥</span> 
      <span>{{item.amount}}</span>
      <span>.</span>
      <span>0</span> 
      <p>满 <span>{{item.sum_condition}}</span> 元可用</p>
      </div> 

      <div class="list_item_right">
        <h4>{{item.name}}</h4> 
        <p>{{item.end_date}}</p> 
        <p>限收货手机号为 {{item.phone}}</p>
        </div> <div class="time_left"><img style="width:5rem;margin-top:-1rem;" src="../../../assets/yiguoqi.png" alt=""></div>
        </div> 
        </li>
        </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "hbHistory",
  data(){
    return{
    user_id:"",
    limit:"",
    offset:"",
    arr:[],
    length:""
    }
  },
  created() {
    var user_id = this.$store.state.usermsg.user_id
     let api35 = "https://elm.cangdu.org/promotion/v2/users/"+user_id+"/expired_hongbaos?limit=20&offset=0"
     this.$http.get(api35).then(res=>{
       console.log('过期红包',res);   
       this.arr = res.data;
       this.length = res.data.length
     })

  }
  
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
.hbHistory {
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
  color: #404040;
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
  border-top: 0.3rem dashed gray;
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
  color: gray;
  font-weight: 700;
}
.hongbao_container
  .hongbao_list_ul
  .hongbao_list_li
  .list_item
  .list_item_left
  span:nth-of-type(2) {
  font-size: 1.5rem;
  color: gray;
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
  color: gray;
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
  color: gray;
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

