<template>
    <div class="store">
       <header>
            <div class="bg"><img :src="'//elm.cangdu.org/img/'+datas.image_path" alt=""></div>
            <div class="header_left">
              <img :src="'//elm.cangdu.org/img/'+datas.image_path" alt="">
            </div>
            <div class="header_right">
                <h3>{{datas.name}}</h3>
                <p>{{datas.category}}</p>
                <p>{{datas.promotion_info}}</p>
            </div>
            <router-link to="/Aaa"> <b class="return">&lt;</b></router-link>
            <router-link to="/shops"> <b class="next">&gt;</b></router-link>
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
       <div class="content_body" >
         <!-- 左边部分 -->
          <div class="content_body_left">
            <ul  id="menu" v-for="(item,index) in data16" :key="index" >
              <li @click="menu(index)" :class="{active:index==facevalue}">
                <a :href="'#Top'+item.id">{{item.name}}</a>
              </li>
            </ul>
          </div>
          <!-- 右边部 -->
        <div class="content_body_right" >
          <!-- 右边头部 -->
           <section class="head" v-for="(value,index) in data16" :key="index">
             <div class="head_top" :id="'Top'+value.id">
               <strong class="head_strong">{{value.name}}</strong>
               <span class="head_span">{{value.description}}</span>
             </div>
           <!-- 右边店铺详情 -->
            <section class="stop" v-for="(stores,key) in value.foods" :key="key">
                 <div class="stop_left">
                   <img :src="'//elm.cangdu.org/img/'+stores.image_path" alt="">
                 </div>
                 <div class="stop_right">
                     <h3>{{stores.name}}</h3>
                     <p>{{stores.description}}</p>
                     <strong>{{stores.tips}}</strong>
                 </div> 
              </section>                 
            </section>
          </div>
       </div>
    </div>  
</template>
<script>
export default {
  name: "store",
  data() {
    return {
      activeIndex: "1",
      data16: [],
      facevalue: "0",
      datas: []
    };
  },
  created() {
    var _this = this;
    // 接口16
    let api =
      "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" +
      this.$route.params.id;
    this.$http.get(api).then(res => {
      _this.data16 = res.data;
    });
    let url =
      "https://elm.cangdu.org/shopping/restaurant/" + this.$route.params.id;
    this.$http.get(url).then(data11 => {
      _this.datas = data11.data;
    });
  },
  methods: {
    handleSelect(key, keyPath) {},
    menu(id) {
      this.facevalue = id;
    },
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: #333;
}
.store {
  background: #ededed;
}
header {
  height: 6.6rem;
  overflow: hidden;
}
.return {
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  font-size: 2rem;
  font-weight: normal;
}
.next {
  position: absolute;
  top: 1.8rem;
  right: 0.3rem;
  color: white;
  font-size: 1.5rem;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 8rem;
  overflow: hidden;
  filter: blur(16px);
}
.bg img {
  width: 100%;
}
.header_left {
  width: 4.5rem;
  float: left;
  margin: 0.9rem 1.2rem 0 1.2rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}
.header_left img {
  width: 100%;
}
.header_right {
  color: white;
  float: left;
  margin-top: 0.8rem;
  position: absolute;
  top: 0.3rem;
  left: 7rem;
}
.header_right h3 {
  margin-bottom: 0.6rem;
}
.header_right p {
  font-size: 1rem;
  margin: 0.5rem 0;
}
.el-menu-demo {
  display: flex;
  justify-content: space-between;
}
.content_body {
  height: 30rem;
}
.content_body_left {
  background: #ededed;
  font-size: 1.2rem;
  float: left;
  width: 25%;
  height: 31.2rem;
  overflow: scroll;
}
.content_body_left::-webkit-scrollbar {
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
  height: 31.2rem;
  overflow: scroll;
}
.content_body_right::-webkit-scrollbar {
  display: none;
}
.head {
  background: #ededed;
  color: #666;
}
.head_top {
  height: 2.5rem;
  line-height: 2.5rem;
  padding-left: 0.6rem;
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
  height: 6.6rem;
  overflow: hidden;
  background: #fff;
  border-bottom: 1px solid #e4e4e4;
  z-index: 100;
}
.stop_left img {
  width: 3.2rem;
  height: 3.2rem;
  float: left;
  margin: 1rem;
  margin-top: 1.6rem;
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
