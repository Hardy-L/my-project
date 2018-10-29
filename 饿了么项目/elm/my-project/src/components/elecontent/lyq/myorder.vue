<template>
    <div class="myorder">
     <!-- 头部 -->
      <div class="hand">
        <!-- 返回 -->
  <span class="el-icon-arrow-left" @click="$router.back(-1)"></span>
    <div class="title_head">  
      <span class="title_text">服务中心</span>
    </div>
    </div>
    <!-- content部分 -->
   <div class="service">
      <div class="service-serve">
          <div class="service-serve-router">
            <img src="../../../assets/客服.png">
            <span>在线客服</span>
          </div>

          <div class="service-serve-router">
            <img src="../../../assets/电话.png">
            <span>在线客服</span>
          </div>
      </div>
      <h4>热门问题</h4>
      <div class="issue">
        
       <div class="scroll">
          <ul>
          <li v-for="(k,index) in data" :key="index">
            <router-link :to="{name:'Myorder_text',params:{title:k,tapo:index}}">
           <span>{{k}}</span>
            <img src="../../../assets/右箭头.png">
            </router-link>
          </li>
        </ul>
       </div>
      </div>
  </div>


    </div>
</template>

<script>
import Myorder_text from "./myorder_text";
export default {
  name: "myorder",
  components: {
    Myorder_text
  }
  ,
  data() {
    return {
      data: [],
      datas: []
    };
  },
  created() {
    let api = "https://elm.cangdu.org/v3/profile/explain";
    this.$http.get(api).then(data => {
      this.data = data.data;
      // 调取原始内容
      for (let k in this.data) {
        // console.log(this.data[k]);
        this.datas.push(this.data[k]);
      }
      // console.log(this.datas);
      this.datas.splice(24, 1);
      let data1 = [];
      // 排序
      for (let i = 0; i <= this.datas.length; i++) {
        if (i % 2 !== 0) {
          data1.push(this.datas[i]);
        }
      }
      data1.splice(8, 2);
      this.data = data1;
      // console.log(data1);
      // console.log(this.data);
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
.myorder {
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
/* content部分*/
.service {
  background: white;
}
.service-span {
  color: white;
  display: inline-block;
  font-weight: 550;
  line-height: 0.56rem;
}
.service-serve {
  margin-top: 0.57rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  border-bottom: 0.00023rem solid #f5f5f5;
}
.service-serve-router {
  width: 50%;
  height: 5rem;
  text-align: center;
  border-right: 0.00023rem solid #f5f5f5;
  border-bottom: #666666 0.01rem solid;
  margin: 0.2rem 0;
}
.service-serve-router img {
  margin-top: 0.14rem;
  width: 2.5rem;
  height: 2.5rem;
}
.service-serve-router span {
  margin-top: 0.12rem;
  display: block;
  font-size: 0.7rem;
  color: #898989;
}
.issue {
  overflow: hidden;
  height: 30rem;
}
.issue {
  overflow: scroll;
}
.issue::-webkit-scrollbar {
  display: none;
}
h4 {
  height: 0.89rem;
  line-height: 0.89rem;
  padding-left: 0.2rem;
  color: #1d1616;
  font-size: 1rem;
}
.issue li {
  border-bottom: 0.01rem solid rgb(196, 194, 191);
}
.issue li a {
  height: 2rem;
  line-height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 0.2rem;
  border-top: 0.00023rem solid #f5f5f5;
}
.issue li span {
  font-weight: 300;
  color: #666666;
}
.issue li img {
  width: 1rem;
}
</style>

