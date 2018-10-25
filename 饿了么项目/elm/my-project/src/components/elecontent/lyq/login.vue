<template>
   <div class="login">
       <div class="hand">
        <!-- 返回 -->
  <router-link class="el-icon-arrow-left" to="/myele"></router-link>
    <div class="title_head">  
      <span class="title_text">密码登录</span>
    </div>
    </div>
    <!-- ===表单== -->
  <!-- 账号 -->
  <div class="account_wrap">
    <ul>
    <li class="account"><input type="text" placeholder="账号">
    </li>
    <li class="account"><input type="password" placeholder="密码">
    <!-- 一个假的button -->
    <div class="button_switch">
      <div class="circle_button"></div>
      <span>abc</span>
      <span>...</span>
    </div>

    </li>
    <li class="account"><input type="text" placeholder="验证码"></li>
  </ul>
  </div>
  <p class="login_tips">
        温馨提示：未注册过的账号，登录时将自动注册
    </p>
    <p class="login_tips">
        注册过的用户可凭账号密码登录
    </p>
    <div class="login_container">登录</div>
    <!-- 密码重置 -->
    <a href="#/forget" class="to_forget">重置密码？</a>
       </div>  

</template>

<script>
export default {
  name: "login"
};
</script>

<style scoped>
.login {
  height: 100%;
  background-color: rgb(236, 236, 236);
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
/*表单*/
.account {
  background-color: #fff;
  width: 100%;
  margin: 0rem 0 0 0.01rem;
}
.account_wrap ul {
  margin-top: 0.9rem;
}
ul li {
  height: 3.1rem;
  width: 100%;
  line-height: 3.1rem;
  border-bottom: 0.01rem solid rgb(205, 210, 214);
}
.account input[type="text"],
.account input[type="password"] {
  /* -web-kit-appearance: none;
  -moz-appearance: none; */
  outline: 0;
  height: 2.5em;
  width: 12rem;
  padding: 0rem 1.3rem;
  /* border: 1px solid #f1f1f1; */
  font-size: 1rem;
  font-weight: 400;
  color: #666;
}
/* 假button总布局*/
.button_switch {
  background-color: #ccc;
  /* background-color: #11a522; */
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  width: 2rem;
  height: 0.7rem;
  padding: 0 0.2rem;
  border: 1px;
  border-radius: 0.5rem;
  position: relative;
  top: -1.8rem;
  left: 19rem;
}
/*radius*/
.button_switch .circle_button {
  transition: all 0.3s;
  position: absolute;
  top: -0.4rem;
  z-index: 1;
  left: -0.3rem;
  /* left: 1.1rem; */
  width: 1.4rem;
  height: 1.4rem;
  box-shadow: 0 0.02667rem 0.05333rem 0 rgba(0, 0, 0, 0.1);
  background-color: #f1f1f1;
  border-radius: 50%;
}
/* abc*/
.button_switch span {
  font-size: 0.45rem;
  color: #fff;
  /* transform: translateY(0.05rem); */
  line-height: 0.6rem;
  font-family: Helvetica Neue, Tahoma, Arial;
}
/* 温馨提示:红色字体*/
.login_tips {
  font-size: 0.7rem;
  color: red;
  padding: 0.4rem 0.6rem;
  line-height: 0.5rem;
}
.login_container {
  margin: 0 0.5rem 1rem;
  font-size: 1.1rem;
  color: #fff;
  background-color: #4cd964;
  padding: 1rem 0;;
  border: 1px;
  border-radius: 0.15rem;
  text-align: center;
}
.to_forget {
  float: right;
  font-size: 0.8rem;
  color: #3b95e9;
  margin-right: 0.3rem; 
}
</style>
