<template>
    <div class="account_username">
     <!-- 头部 -->
      <div class="hand">
        <!-- 返回 -->
  <span class="el-icon-arrow-left" @click="$router.back(-1)"></span>
    <div class="title_head">  
      <span class="title_text">修改用户名</span>
    </div>
    </div>
     <div class="myorder-div">
               <input type="text" placeholder="输入用户名">
               <p>用户名只能修改一次(2-24字符之间)</p>
                </div>

    <div class="login_container" >确认修改</div>
    </div>
</template>

<script>
export default {
  name: "account_username"
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
/*表单*/
.myorder-div input[type="text"] {
  display: block;
  width: 22rem;
  font-size: 1rem;
  margin: 0.4rem 0.4rem;
  padding: 0.5rem 0.3rem;
  background: #f3f2f2;
  border: 1px solid #ddd;
  border-radius: 0.1rem;
}
.myorder-div p {
  font-size: 0.7rem;
  color: #666;
  padding: 0.4rem 0.5rem 1rem;
  margin-right: 1rem;
}
/* 确认button*/
.login_container {
  margin: 0 0.5rem 1rem;
  font-size: 1.1rem;
  color: rgb(235, 231, 231);
  background-color: #3190e8;
  padding: 0.8rem 0;
  border: 1px;
  border-radius: 0.06rem;
  text-align: center;
}
</style>

