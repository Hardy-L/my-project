<template>
    <div class="store">
       <header>
            <div class="bg"></div>
            <div class="header_left">
              <img src="//elm.cangdu.org/img/164ad0b6a3917599.jpg" alt="">
            </div>
            <div class="header_right">
                <h3>效果演示</h3>
                <p>商家配送/分钟送达/配送费￥5</p>
                <p>公告：欢迎光临，用餐高峰请提前下单，谢谢</p>
            </div>
       </header>
       <div class="content">
           <el-menu 
           :default-active="activeIndex"
            class="el-menu-demo" 
            mode="horizontal"
            menu-trigger="click"
             @select="handleSelect">
             <el-menu-item index="1">商品</el-menu-item>
             <el-menu-item index="2">评价</el-menu-item>
             </el-menu>
       </div>
       <div class="content_body">
          <div class="content_body_left">
            <ul id="menu" @click="
            menu()">
              <li v-for="(item,index) in data16" :key="index" >{{item.name}}</li>
           </ul>
          </div>
          <div class="content_body_right">
           <section class="head">
             <strong class="head_strong">热销榜</strong>
             <span class="head_span">是的分身乏术</span>
           </section>
            <section class="stop">
                 <div class="stop_left">
                   <img src="//elm.cangdu.org/img/1661a8e8aa318572.png" alt="">
                 </div>
                 <div class="stop_right">
                     <h3>好吃的</h3>
                     <p>是的分身乏术、分身乏术方式</p>
                     <strong>月售907份 好评率76%</strong>
                 </div>
            </section>
             <section class="stop">
                 <div class="stop_left">
                   <img src="//elm.cangdu.org/img/165d62a981f17748.png" alt="">
                 </div>
                 <div class="stop_right">
                     <h3>好吃的</h3>
                     <p>是的分身乏术、分身乏术方式</p>
                     <strong>月售907份 好评率76%</strong>
                 </div>
            </section>
             <section class="stop">
                 <div class="stop_left">
                   <img src="//elm.cangdu.org/img/165d5d1d2cd17735.jpg" alt="">
                 </div>
                 <div class="stop_right">
                     <h3>好吃的</h3>
                     <p>是的分身乏术、分身乏术方式</p>
                     <strong>月售907份 好评率76%</strong>
                 </div>
            </section>
             <section class="stop">
                 <div class="stop_left">
                   <img src="//elm.cangdu.org/img/165eb397b2a17949.jpg" alt="">
                 </div>
                 <div class="stop_right">
                     <h3>好吃的</h3>
                     <p>是的分身乏术、分身乏术方式</p>
                     <strong>月售907份 好评率76%</strong>
                 </div>
            </section>
             <section class="stop">
                 <div class="stop_left">
                   <img src="//elm.cangdu.org/img/1664a1947f618863.jpg" alt="">
                 </div>
                 <div class="stop_right">
                     <h3>好吃的</h3>
                     <p>是的分身乏术、分身乏术方式</p>
                     <strong>月售907份 好评率76%</strong>
                 </div>
            </section>
             <section class="stop">
                 <div class="stop_left">
                   <img src="//elm.cangdu.org/img/1664a1947f618863.jpg" alt="">
                 </div>
                 <div class="stop_right">
                     <h3>好吃的</h3>
                     <p>是的分身乏术、分身乏术方式</p>
                     <strong>月售907份 好评率76%</strong>
                 </div>
            </section> 
            <section class="stop">
                 <div class="stop_left">
                   <img src="//elm.cangdu.org/img/1664a1947f618863.jpg" alt="">
                 </div>
                 <div class="stop_right">
                     <h3>好吃的</h3>
                     <p>是的分身乏术、分身乏术方式</p>
                     <strong>月售907份 好评率76%</strong>
                 </div>
            </section>
          </div>
       </div>
    </div>  
</template>
<script>
import $ from "jquery";
export default {
  name: "store",
  data() {
    return {
      activeIndex: "1",
      data16:[]
    };
  },
  created() {
    var _this=this;
    // 接口16
    let api = "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1"
    this.$http.get(api).then(data16 => {
     
      _this.data16=data16.data;
       console.log(_this.data16)
    });
  },
  methods: {
    handleSelect(key, keyPath) {},
    menu() {
      $("#menu li").click(function() {
        $(this)
          .siblings("li")
          .removeClass("active"); //删除其他元素的样式
        $(this).addClass("active"); // 添加当前元素的样式
      });
    }
  }
};
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.store {
  background: #333;
}
header {
  height: 5rem;
  overflow: hidden;
}
.bg {
  background-image: url(//elm.cangdu.org/img/164ad0b6a3917599.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(4px);
  height: 6rem;
}
.header_left {
  width: 3.3rem;
  height: 3.3rem;
  float: left;
  margin: 0.9rem 1.2rem 0 1.2rem;
  position: absolute;
  top: 0;
  left: 0;
}
.header_left img {
  width: 100%;
}
.header_right {
  color: white;
  float: left;
  margin-top: 0.7rem;
  position: absolute;
  top: 0;
  left: 5.5rem;
}
.header_right h3 {
  margin-bottom: 0.5rem;
}
.header_right p {
  font-size: 0.8rem;
  margin: 0.5rem 0;
}
.el-menu-demo {
  display: flex;
  justify-content: space-between;
}
.content_body {
 height:32.8rem;
}
.content_body_left {
  background: #ededed;
  font-size: 1.2rem;
  float: left;
  width: 25%;
  height: 32.8rem;
  overflow: scroll;
}
.content_body_left::-webkit-scrollbar{
  display: none;
}
.content_body_left li {
  text-align: center;
  padding: 1.2rem 0;
  color: #666;
  border-bottom: 0.5px solid #e4e4e4;
}
.active {
  border-left: 0.23rem solid #3190e8;
  background: #fff;
}
.content_body_right {
  float: left;
  width: 75%;
  height: 32.8rem;
  overflow: scroll;
}
.content_body_right::-webkit-scrollbar{
  display: none;
}
.head {
  background: #ededed;
  color: #666;
  padding: 0.65rem;
}
.head_strong {
  color: #666;
  font-size: 1.2rem;
}
.head_span {
  color: #999;
  font-size: 0.8rem;
}
.stop {
  height: 7.4rem;
  overflow: hidden;
  background: #fff;
}
.stop_left img {
  width: 4rem;
  height: 4rem;
  float: left;
  margin: 1rem;
}
.stop_right {
  float: left;
  margin-top: 1rem;
  font-size: 0.85rem;
}
.stop_right p {
  padding: 1rem 0;
  color: #999;
}
</style>
