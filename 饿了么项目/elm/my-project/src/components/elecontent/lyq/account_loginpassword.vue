<template>
    <div class="account_loginpassword">
     <!-- 头部 -->
      <div class="hand">
        <!-- 返回 -->
<span class="el-icon-arrow-left" @click="$router.back(-1)"></span>    <div class="title_head">  
      <span class="title_text">重置密码</span>
    </div>
    </div>
     <div class="account_wrap">
    <ul>
    <li class="account"><input type="text" placeholder="账号" v-model="username">
    </li>
    <li class="account">
      <input type="password" placeholder="旧密码" v-model="oldpassword">
    </li>
    
    <li class="account"><input type="text" placeholder="请输入新密码" v-model="newpassword">
    </li>
    <li class="account"><input type="text" placeholder="请确认密码" v-model="confirmpassword">
    </li>

    <li class="account"><input type="text" placeholder="验证码" v-model="captcha_code">
    <img style="width:4.5rem" :src="img" alt="">
    <!-- <span class="sp1">看不清</span><br> -->
    <p @click="reng()">换一张</p>
    </li>
  </ul>
  </div>
  <div class="login_container" @click="change()">确定修改</div>
    </div>
</template>

<script>
import login_account from "../lyq/login_account";
export default {
  name: "account_loginpassword",
  components: {
    login_account
  },
  data() {
    return {
      ended: true,
      username: "",
      oldpassword: "",
      newpassword: "",
      confirmpassword: "",
      captcha_code: "",
      img: "",
      login: ""
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
    change() {
      const url = "https://elm.cangdu.org/v2/changepassword";
      var _this = this;
      this.$http({
        //调用接口
        method: "post",
        url: url, //this指data
        // 获取信息
        withCredentials: true,
        data: {
          username: _this.username,
          oldpassWord: _this.oldpassword,
          newpassword: _this.newpassword,
          confirmpassword: _this.confirmpassword,
          captcha_code: _this.captcha_code
        }
      }).then(response => {
        //接口返回数据
        console.log("tap", response);
        if (response.data.status) {
          alert("更改密码成功");
          _this.$router.push({ name: "login_account" });
        } else {
          alert(response.data.message);
          _this.getCode();
        }
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
/*表单*/
.account {
  background-color: #fff;
  width: 100%;
  margin: 0rem 0 0 0.01rem;
}
.account_wrap ul {
  margin-top: 0.9rem;
  border-bottom: 0.02rem solid rgb(205, 210, 214);
}
/* .account>p{
  font-size: 0.55rem;
  float: right;
} */
ul li {
  height: 3.1rem;
  width: 100%;
  line-height: 3.1rem;
  /* border-bottom: 0.01rem solid rgb(205, 210, 214); */
  border-top: 0.01rem solid rgb(205, 210, 214);
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
/* 确认button*/
.login_container {
  margin: 0.6rem 0.5rem 1rem;
  font-size: 1.1rem;
  color: #fff;
  background-color: #4cd964;
  padding: 0.7rem 0;
  border: 1px;
  border-radius: 0.15rem;
  text-align: center;
}
</style>

