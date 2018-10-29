<template>
    <div class="login_account">
     <!-- 头部 -->
      <div class="hand">
        <!-- 返回 -->
  <span class="el-icon-arrow-left" @click="$router.back(-1)"></span>
    <div class="title_head">  
      <span class="title_text">账户信息</span>
    </div>
    </div>
    <!-- content内容 -->
     <div class="profile-1reTe" id="reTe">
    <ul>
        <!-- 头像 -->
          <li >
            <div class="myorder-div">
               <span>头像</span>
            </div>
            <!-- <img src="../../../assets/头像.png" alt=""> -->
            <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">

            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>

            <span class="el-icon-arrow-right" id="arrow-right"></span>
            
            </li>

        <!-- 用户名 -->
       <router-link to="account_username">
            <li>
            <div class="myorder-div">
               <span>用户名:</span>
               <b>{{username}}</b>
            </div>
            <span class="el-icon-arrow-right" id="arrow-right"></span>
            </li>
</router-link>
        <!-- 收货地址 -->
        <router-link to="account_editoraddress">
            <li>
            <div class="myorder-div">
               <span>收货地址</span>
            </div>
            <span class="el-icon-arrow-right" id="arrow-right"></span>
            </li>
            </router-link>
        </ul>
       </div>
       <p>账号绑定</p>
        <div class="profile-1reTe">
        <ul>
        <li>
            <div class="myorder-div">
                <img src="../../../assets/蓝手机.png" alt="">
               <span>手机</span>
            </div>
            <span class="el-icon-arrow-right" id="arrow-right"></span>
            </li>
        </ul>
        </div>
        <!-- 安全设置 -->
        <p>安全设置</p>
            <div class="profile-1reTe">
            <ul>
                 <router-link  to="/account_loginpassword">
            <li>
                <div class="myorder-div">
                <span>登录密码</span>
                </div>
                <span class="el-icon-arrow-right" id="arrow-right"></span>
                </li>
                </router-link>
            </ul>
            </div>
    <router-link to="/login">
    <div class="login_container">退出登录</div>
    </router-link>
    </div>
</template>

<script>
export default {
  name: "login_account",
  data() {
    return {
      username: (this.username = this.$store.state.usermsg.username),
      imageUrl: ""
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
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
  color: #999;
  font-weight: bold;
}
/* 头像*/
.avatar-uploader .el-upload {
  width: 1rem;
  height: 1rem;
  background: red;
  border: 0.6rem solid #3022a0;
  border-radius: 6rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.el-icon-plus {
  width: 2rem;
  height: 2rem;
  background: red;
  border: 0.1rem solid rgb(23, 23, 23);
  text-align: center;
  float: right;
}
/*头部 */
p,
span {
  color: #999;
  font-family: Helvetica Neue, Tahoma, Arial;
}
.login_account {
  background-color: rgb(236, 236, 236);
}
.hand {
  text-align: center;
  background-color: #3190e8;
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
.login_container {
  margin: 0 0.5rem 1rem;
  font-size: 0.9rem;
  color: white;
  background-color: rgb(233, 93, 93);
  padding: 0.5rem 0;
  border: 1px;
  border-radius: 0.15rem;
  text-align: center;
}
/*profile-1reTe */
.el-icon-arrow-right#arrow-right {
  color: rgb(84, 79, 79);
  line-height: 3rem;
}
#reTe ul > li:nth-child(1) {
  line-height: 5rem;
  height: 5rem;
  width: 100%;
  border-bottom: 0.01rem solid rgb(218, 198, 198);
}
#reTe ul > li:nth-child(1) img {
  width: 4rem;
  float: right;
  line-height: 6rem;
  margin: 0.6rem 0.5rem 0.3rem 0rem;
}
.profile-1reTe {
  background-color: #fff;
  width: 100%;
  margin: 0.6rem 0;
}
.profile-1reTe ul li {
  height: 3rem;
  width: 100%;
  border-bottom: 0.01rem solid rgb(218, 198, 198);
}
.myorder-div {
  width: 9rem;
  height: 3rem;
  border: 1rem soliid red;
  float: left;
}

.myorder-div span {
  display: inline-block;
  color: rgb(84, 79, 79);
  line-height: 3rem;
  margin-left: 0.5rem;
}
.profile-1reTe ul li img {
  width: 1.2rem;
  float: left;
  margin: 0.8rem 0rem 0rem 0.5rem;
}
</style>

