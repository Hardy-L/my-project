<template>
    <div class="account_editoraddress">
     <!-- 头部 -->
      <div class="hand">
        <!-- 返回 -->
<span class="el-icon-arrow-left" @click="$router.back(-1)"></span>    
<div class="title_head">  
      <span class="title_text">编辑地址</span>
    </div>
    </div>
    <div class="profile-1reTe">
            <ul>
                 <router-link  to="/account_newaddress">
            <li>
                <div class="myorder-div">
                <span>新增地址</span>
                </div>
                <span class="el-icon-arrow-right" id="arrow-right"></span>
                </li>
                </router-link>
            </ul>
            </div>
    </div>
</template>

<script>
export default {
  name: "account_editoraddress"
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
.editoraddress {
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
.el-icon-arrow-right#arrow-right {
  color: rgb(84, 79, 79);
  line-height: 3rem;
  float: right;
}
.profile-1reTe {
  background-color: #fff;
  width: 100%;
  margin: 0.6rem 0;
}
.profile-1reTe ul li {
  height: 3rem;
  width: 100%;
  border-top: 0.01rem solid rgb(218, 198, 198);
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
  color: rgb(29, 29, 28);
  font-size:1.2rem;
  line-height: 3rem;
  margin-left: 0.5rem;
}
</style>

