    <template>
         <div class="addDetail">
     <!-- 头部 -->
      <div class="hand">
        <!-- 返回 -->
<span class="el-icon-arrow-left" @click="$router.back(-1)"></span>    
<div class="title_head">  
      <span class="title_text">搜索地址</span>
    </div>
    </div>
    <!-- coontent -->
    <div class="add-detail">
      <input v-model="store" type="text" placeholder="请输入小区/写字楼/学校等"> 
      <button @click="submit()">确认</button>
      </div> 
      <div class="warnpart">为了满足商家的送餐要求，建议您从列表中选择地址</div>
       <div class="point">
         <p>找不到地址？</p>
         <p>请尝试输入小区、写字楼或学校名</p> 
         <p>详细地址（如门牌号）可稍后输入哦.</p>
         </div>

<div class="details">
  <ul>
    <li>搜索结果</li>
    
  <li v-for="item in arr" :key="item.id">
    <router-link :to="{path:'/account_newaddress',query:{address:item.name}}" >
    <h4>{{item.name}}</h4>
    <p>{{item.address}}</p>
     </router-link>
  </li>
 
</ul>

</div>
    </div>
    </template>
    
    <script>
export default {
  name: "addDetail",
  data() {
    return {
      arr: [],
      store: "",
      id:""
    };
  },
  created() {
    
  },
  methods: {
    submit() {
      var _this = this;
         _this.id = this.$store.state.homeid;
      //api3:https://elm.cangdu.org/v1/pois?city_id=32&keyword=aa
      let url =
        "https://elm.cangdu.org/v1/pois?city_id=" +
        _this.id + "&keyword=" + _this.store;
      this.$http.get(url).then(res => {
        _this.arr = res.data;
        console.log('name',res.data);
        this.$store.commit("address", res.data.name);
        console.log('arr',res.data);
      });
    }
  }
};
</script>
    
    <style scoped>
* {
  padding: 0;
  margin: 0;
}
.account p {
  color: #3190e8;
  font-size: 0.6rem;
  float: right;
}
/*头部 */
p,
span {
  font-family: Helvetica Neue, Tahoma, Arial;
}
.info-members {
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
/* content*/
.add-detail {
  width: 100%;
  background: #fff;
  padding: 0.6rem 0;
  display: flex;
  justify-content: space-around;
}
.warnpart {
  background: #fff6e4;
  font-size: 0.8rem;
  color: #ff883f;
  text-align: center;
  padding: 0.4rem 0;
}
.point {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}
.point p {
  width: 100%;
  text-align: center;
  font-size: 0.8rem;
  color: #969696;
  margin-bottom: 0.4rem;
}
.add-detail input {
  display: block;
  width: 13rem;
  padding: 0.7rem;
  background: #f2f2f2;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}
.add-detail button {
  display: block;
  width: 5rem;
  background: #3199e8;
  font-size: 0.8rem;
  color: #fff;
  border-radius: 5px;
}
/*搜索结果样式*/
.details {
  position: absolute;
  left: 0;
  top: 9.3rem;
  width: 100%;
  border-top: 1px solid #e4e4e4;
}
.details li {
  background-color: #fff;
  height: 3.5rem;
  padding-top: 0.6rem;
  color: #333;
  border-bottom: 1px solid #e4e4e4;
  font-size:1rem;
}
.details p { 
  margin-left: 1rem;
  font-size: 0.8rem;
  color: #999;
  margin-top: 0.5rem;
}
.details h4 {
  margin-left: 1rem;
  font-size: 1rem;
  padding: 1%;
}
.details a {
  text-emphasis: none;
  color: #333;
}
</style>
    