<template>
    <div class="store">
       <header>
            <div class="header_left"></div>
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
              <li class="active">热销榜</li>
              <li>热搜榜</li>
              <li>面条🍜</li>
              <li>肯德基🍟</li>
              <li>麦当劳🍔</li>
              <li>面包</li>
              <li>大米</li>
              <li>小吃零食</li>
              <li>奶茶</li>
              <li>商务套餐</li>
           </ul>
          </div>
          <div class="content_body_right">
           <section class="head">
             <strong class="head_strong">热销榜</strong>
             <span class="head_span">是的分身乏术</span>
           </section>
            <section class="stop">

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
      activeIndex: "1"
    };
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
.store {
  background: #333;
}
header {
  border: 1px solid gainsboro;
  height: 5rem;
  overflow: hidden;
}
.header_left {
  width: 2rem;
  height: 2rem;
  float: left;
  border: 1px solid white;
  margin: 1.3rem 1.2rem 0 1.2rem;
}
.header_right {
  color: white;
  float: left;
  margin-top: 0.7rem;
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
.content_body{
 overflow: hidden;
}
.content_body_left {
  background: #ededed;
  font-size: 1.2rem;
  float: left;
  width: 25%;
}
.content_body_left li {
  text-align: center;
  padding: 1rem 0;
  color: #666;
  border-bottom: .5px solid #e4e4e4;
}
.active {
  border-left: 0.23rem solid #3190e8;
  background: #fff;
}
.content_body_right{
  /* border: 1px solid black; */
  float: left;
  width: 75%;
}
.head{
  background: #ededed;
  color: #666;
  padding: .5rem;
}
.head_strong{
  color: #666;
  font-size: 1.2rem;
}
.head_span{
  color: #999;
  font-size: .8rem;
}
.stop{
  border: 1px solid yellow;

}
</style>
