<template>
   <div class="login">
       <div class="hand">
        <!-- 返回 -->
  <span class="el-icon-arrow-left" @click="$router.back(-1)"></span>
    <div class="title_head">  
      <span class="title_text">密码登录</span>
    </div>
    </div>
    <!-- ===表单== -->
  <!-- 账号 -->
  <div class="account_wrap">
    <ul>
    <li class="account"><input type="text" placeholder="账号" v-model="username">
    </li>
    <li class="account">
      <input type="password" placeholder="密码" v-model="password" v-show="ended">
      <input type="text" placeholder="密码" v-model="password" v-show="!ended">
    <!-- 一个假的button -->
    <div class="button_switch" :class="{bright:!ended}" @click="restart">
      <div class="circle_button" :class="{ren:ended}"></div>
      <span>abc</span>
      <span>...</span>
    </div>

    </li>
    <li class="account"><input type="text" placeholder="验证码" v-model="captcha_code">
    <div  style="float:right">
      <p @click="reng()">换一张</p>
    <!-- <p>看不清</p> -->
    <img style="width:4.5rem;border:.1rem solid #666;margin-top:.5rem" :src="img" alt="">
    </div>
    
    </li>
  </ul>
  </div>
  <p class="login_tips">
        温馨提示：未注册过的账号，登录时将自动注册
    </p>
    <p class="login_tips">
        注册过的用户可凭账号密码登录
    </p>
    <div class="login_container" @click="getLogin(username)">登录</div>
    <!-- 密码重置 -->
    <router-link to="account_loginpassword">
    <b class="to_forget">重置密码？</b>
    </router-link>
       </div>  
</template>

<script>
import myele from "../myele";
import Vue from "vue";
export default {
  name: "login",
  components: {
    myele
  },

  data() {
    return {
      ended: true,
      userInfo: [],
      getLoginurl: "",
      username: "",
      password: "",
      captcha_code: "",
      img: "",
      login: "",
      user_id: ""
    };
  },
  created() {
    var getCode = () => {
      const url = "https://elm.cangdu.org/v1/captchas";
      this.$http({
        method: "post",
        url: url,
        withCredentials: true // 默认false
      }).then(res => {
        console.log("img", res);
        this.img = res.data.code;
      });
    };
    getCode();
    this.$on("clk", () => {
      getCode();
    });
  },
  methods: {
    reng() {
      this.$emit("clk");
    },
    restart() {
      this.ended = !this.ended;
      console.log(this.ended);
    },
    getCode() {
      const url = "https://elm.cangdu.org/v1/captchas";
      this.$http({
        method: "post",
        url: url,
        withCredentials: true // 默认false
      }).then(res => {
        console.log("img", res);
        this.img = res.data.code;
      });
    },
    getLogin(username) {
      var _this = this;
      const url = "https://elm.cangdu.org/v2/login";
      this.$http({
        //调用接口
        method: "Post",
        url: url, //this指data
        // 获取信息
        data: {
          username: this.username,
          password: this.password,
          captcha_code: this.captcha_code,
          user_id: this.user_id
        },
        withCredentials: true
      }).then(response => {
        //接口返回数据
        // this.userInfo=this.response.data;
        // console.log(response);
        // console.log("tap", response.data.message);
        if (response.data.status == 0) {
          alert(response.data.message);
          this.getCode();
        } else {
          _this.user_id = response.data.user_id;
          this.$store.commit("qufan", true);
          this.$store.commit("changeusermsg", response.data);
          this.$store.commit("idok", _this.user_id);
          this.username = this.$store.state.usermsg.username;
          this.$router.push({ name: "myele" });
          localStorage.setItem("loginid", JSON.stringify(response.data));
        }
        console.log("lalal",response.data);
      });
    }
  }
};
</script>

<style scoped>
.account p {
  color: #3190e8;
  font-size: 0.6rem;
  float: right;
}

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
/* .account>p{
  font-size: 0.55rem;
  float: right;
} */
ul li {
  height: 3.1rem;
  width: 100%;
  line-height: 3.1rem;
  border-bottom: 0.01rem solid rgb(205, 210, 214);
}
.account input[type="text"],
.account input[type="password"] {
  outline: 0;
  height: 2.5em;
  width: 12rem;
  padding: 0rem 1rem;
  /* border: 1px solid #cc3d3d; */
  font-size: 1rem;
  font-weight: 400;
  color: #666;
}
/* 假button总布局*/
.button_switch {
  background-color: #ccc;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  width: 2rem;
  height: 0.7rem;
  padding: 0 0.2rem;
  /* border: 1px solid #555; */
  border-radius: 0.5rem;
  position: relative;
  top: 1.2rem;
  /* left: 19rem; */
  transition: all 0.3s;
  float: right;
  margin-right: 0.4rem;
}
.bright {
  background-color: #11a522;
}
/*radius*/
.circle_button {
  position: absolute;
  top: -0.4rem;
  z-index: 1;
  left: -0.3rem;
  width: 1.4rem;
  height: 1.4rem;
  box-shadow: 0 0.02667rem 0.05333rem 0 rgba(0, 0, 0, 0.1);
  background-color: #f1f1f1;
  border-radius: 50%;
  transition: all 0.3s;
}
.ren {
  transition: all 0.3s;
  left: 1.1rem;
}
/* abc*/
.button_switch span {
  font-size: 0.45rem;
  color: #fff;
  transform: translateY(0.05rem);
  transition: all 2s linear 2s;
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
  padding: 1rem 0;
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
