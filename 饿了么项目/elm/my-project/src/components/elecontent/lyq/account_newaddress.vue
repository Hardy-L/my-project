<template>
    <div class="account_editoraddress">
     <!-- 头部 -->
      <div class="hand">
        <!-- 返回 -->
<span class="el-icon-arrow-left" @click="$router.back(-1)"></span>    
<div class="title_head">  
      <span class="title_text">新增地址</span>
    </div>
    </div>
    <div class="profile-1reTe">
            <ul>
            <li>
                <div class="myorder-div">
                <input type="text" placeholder="请填写你的姓名">
                </div>
                </li>

                <li>
                <div class="myorder-div">
                <input type="text" placeholder="小区/写字楼/学校等">
                </div>
                </li>
                <li>
                <div class="myorder-div">
                <input type="text" placeholder="请填写能够联系到您的手机号">
                </div>
                </li>
                <li>
                <div class="myorder-div">
                <input type="text" placeholder="备用联系电话（选填）">
                </div>
                </li>
                <li>
                <div class="myorder-div">
                <input type="text" placeholder="请填写你的姓名">
                </div>
                </li>
            </ul>
            </div>
            <div class="login_container" >新增地址</div>
    </div>
</template>

<script>
export default {
  name: "account_editoraddress",
  data() {
    return {
      user_id: "",
      address: "",
      address_detail: "",
      name: "",
      phone: "",
      tag: "",
      poi_type: ""
    };
  },
  created() {
    let api28 = "https://elm.cangdu.org/v1/users/"+this.$store.state.usermsg.user_id+"/addresses/";
    this.$http({
      method:"post",
      url:api,
      data:{
      address: "",
      address_detail: "",
      name: "",
      phone: "",
      tag: "",
      poi_type: ""
      },
      withCredentials: true 
    }).then(res=>{

    })
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
.profile-1reTe {
  background-color: #fff;
  width: 100%;
  margin: 0.6rem 0;
}
.profile-1reTe ul li {
  height: 3rem;
  width: 100%;
  text-align: center;
}
.myorder-div {
  width: 9rem;
  height: 3rem;
  float: left;
  text-align: center;
}

/*表单*/
ul li {
  height: 3.1rem;
  width: 100%;
  line-height: 3.1rem;
}
.myorder-div input[type="text"] {
  display: block;
  width: 22rem;
  font-size: 0.9rem;
  margin: 0.4rem 0.4rem;
  padding: 0.5rem 0.3rem;
  background: #f0efef;
  border: 1px solid #ddd;
  border-radius: 0.4rem;
}
/* 确认button*/
.login_container {
  margin: 0 0.5rem 1rem;
  font-size: 1.1rem;
  color: #fff;
  background-color: #4cd964;
  padding: 0.7rem 0;
  border: 1px;
  border-radius: 0.15rem;
  text-align: center;
}
</style>

