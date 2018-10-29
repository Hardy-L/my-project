S<template>
  
    <div class="myele">
      <!-- hand-->
      <div class="hand">
        <!-- 返回 -->
  <router-link class="el-icon-arrow-left" to="/Aaa"></router-link>
    <div class="title_head">  
      <span class="title_text">我的</span>
    </div>
    </div>
    <!-- 登录注册 -->
    <router-link to="/login">
     <div class="login">
       <div class="log">
        <div class="log_img">
           <img src="../../assets/头像.png" alt="">
        </div>

         <div class="info_user">
           <p>{{login}}</p>
         <p>
           <img src="../../assets/手机.png" alt="">
          <span>暂无绑定手机号</span>
           </p> 
         </div>
         <span class="el-icon-arrow-right"></span>
     </div>

     </div>
    </router-link>
    <!--余额优惠积分等  -->
    <div class="info">
      <ul>
        <!-- 余额 -->
        <router-link to="/cleal">
        <li>
          <p>
            <span>0.00</span>
            <b>元</b>
            </p>
          <p>我的余额</p>
        </li>
        </router-link>
        
        <!-- 优惠 -->
         <router-link to="/clealy">
        <li>
          <p>
            <span>0</span>
            <b>个</b>
            </p>
          <p>我的优惠</p>
        </li>
         </router-link>
        <!-- 积分 -->
         <router-link to="/clealj">
        <li>
          <p>
            <span>0</span>
            <b>分</b>
            </p>
          <p>我的积分</p>
        </li>
         </router-link>
      </ul>
    </div>

    <!-- 订单等  -->
    
    <div class="profile-1reTe">
    <ul>
       <router-link to="/info_data">
          <li>
            <img src="../../assets/列表.png" alt="">
            <div class="myorder-div">
               <span>我的订单</span>
            </div>
            <span class="el-icon-arrow-right" id="arrow-right"></span>
            </li>
           </router-link>
           <!-- 积分商城 -->
           <router-link to="/info_integral">
            <li>
            <img src="../../assets/积分.png" alt="">
            <div class="myorder-div">
               <span>积分商城</span>
            </div>
            <span class="el-icon-arrow-right" id="arrow-right"></span>
            </li>
            </router-link>
            <!-- 会员卡 -->
            <router-link to="/info_members">
            <li>
            <img src="../../assets/90-皇冠.png" alt="">
            <div class="myorder-div">
               <span>饿了么会员卡</span>
            </div>
            <span class="el-icon-arrow-right" id="arrow-right"></span>
            </li>
            </router-link>
          
        </ul>
    </div>
 
    <!-- 服务中心等 -->
    <div class="profile-1reTe">
      <ul>
        <router-link to="/myorder">
        <li>
            <img src="../../assets/服务中心.png" alt="">
            <div class="myorder-div">
               <span>服务中心</span>
            </div>
            <span class="el-icon-arrow-right" id="arrow-right"></span>
            </li>
            </router-link>
            
            <router-link to="/myorder_two">
            <li>
            <img src="../../assets/饿了么.png" alt="">
            <div class="myorder-div">
               <span>下载饿了么APP</span>
            </div>
            <span class="el-icon-arrow-right" id="arrow-right"></span>
            </li>
            </router-link>
      </ul>
    </div>
    <wode></wode>
    </div>
</template>




<script>
// // 登录注册
import Login from "./lyq/login";
// 余额优惠积分
import Cleal from "./lyq/cleal";
import Clealy from "./lyq/clealy";
import Clealj from "./lyq/clealj";
import wode from "../elecontent/wode";
export default {
  name: "myele",
  data() {
    return {
      login:"",
      username: "",
      password: "",
      captcha_code: ""
    };
  },
  components: {
    wode
  },
  created() {
    this.login=this.$store.state.username;
    this.login=this.$store.state.password;
  }
};
</script >


<style scoped>
* {
  margin: 0;
  padding: 0;
}
.myele {
  height: 100%;
  background-color: rgb(236, 236, 236);
}
/*头部 */
p,
span {
  font-family: Helvetica Neue, Tahoma, Arial;
}
.hand {
  text-align: center;
  background-color: #3190e8;
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
.el-icon-arrow-right {
  float: right;
  line-height: 6rem;
  text-decoration-line: none;
  font-weight: bold;
  color: #fff;
  font-weight: bold;
}
.hand span {
  line-height: 3rem;
}
.title_head {
  background-color: #3190e8;
  width: 50%;
  height: 3rem;
  margin: 0 auto;
}
.title_text {
  font-size: 1.1rem;
  color: rgb(255, 255, 255);
  font-weight: bold;
}
/*登录注册 */
.login {
  border-top: 0.01rem solid white;
  background-color: #3190e8;
  text-align: center;
  width: 100%;
  height: 6rem;
  line-height: 100%;
  overflow: hidden;
}
.log {
  margin: 0 auto;
  width: 90%;
  height: 6rem;
  text-decoration: none;
}
.info_user {
  float: left;
  margin: 1.5rem 0.6rem;
}
.info_user > p:nth-child(1) {
  float: left;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  margin: 0.2rem 2rem 0.4rem 0.2rem;
}

.log p span {
  font-size: 0.8rem;
  float: left;
  color: rgb(255, 255, 255);
  margin-top: 0.1rem;
}

.log img {
  width: 1.1rem;
  float: left;
  color: #fff;
}
.log_img {
  width: 3rem;
  height: 3rem;
  float: left;
  border-radius: 50%;
  margin: 1.5rem auto;
  background-color: #fff;
}
.log_img img {
  width: 3rem;
}
/* 余额优惠积分 */
.info {
  height: 5rem;
  background-color: #fff;
}
.info ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.info ul a {
  width: 33%;
  padding-top: 1rem;
  height: 4rem;
}
.info ul a p {
  color: rgb(84, 79, 79);
  font-size: 0.8rem;
  text-align: center;
  margin-bottom: 0.4rem;
}
.info ul a b {
  color: blank;
  font-size: 0.8rem;
}
.info ul a:nth-child(1) span {
  color: #f90;
  font-weight: bold;
  font-size: 1.7rem;
}
.info ul a:nth-child(2) span {
  color: #ff5f3e;
  font-weight: bold;
  font-size: 1.7rem;
}
.info ul a:nth-child(3) span {
  color: rgb(53, 187, 53);
  font-weight: bold;
  font-size: 1.7rem;
}
.info ul a:nth-child(1) {
  border-right: 0.01rem solid rgb(218, 198, 198);
}
.info ul a:nth-child(3) {
  border-left: 0.01rem solid rgb(218, 198, 198);
}

/*profile-1reTe */
.el-icon-arrow-right#arrow-right {
  color: rgb(84, 79, 79);
  line-height: 2.6rem;
}
.profile-1reTe {
  background-color: #fff;
  width: 100%;
  margin: 0.3rem 0;
}
.profile-1reTe ul li {
  height: 2.6rem;
  width: 100%;
  border-bottom: 0.01rem solid rgb(218, 198, 198);
}
.myorder-div {
  width: 9rem;
  height: 2.6rem;
  border: 1rem soliid red;
  float: left;
}
.myorder-div span {
  display: inline-block;
  color: rgb(84, 79, 79);
  line-height: 2.2rem;
}
.profile-1reTe ul li img {
  width: 1.2rem;
  float: left;
  margin: 0.5rem 0.5rem;
}
</style>
