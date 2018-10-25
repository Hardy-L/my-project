<template>
    <div class="myorder_two">
     <!-- 头部 -->
      <div class="hand">
        <!-- 返回 -->
  <router-link class="el-icon-arrow-left" to="/myele"></router-link>
    <div class="title_head">  
      <span class="title_text">下载</span>
    </div>
    </div>
    <div class="dowload_container">
        <div class="down_img">
            <img src="../../../assets/elmlogo.jpg" alt="">
           
        </div>
        <p>下载饿了么APP</p>
        <div class="determine" @click="open">下载</div>
    </div>
    </div>
</template>

<script>
export default {
  name: "myorder_two",
  methods: {
    open() {
      this.$alert("IOS用户请前往AppStore下载","",  {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
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
/*头部 */
p,
span {
  font-family: Helvetica Neue, Tahoma, Arial;
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
/* 图片logo*/
.dowload_container {
  text-align: center;
  font-family: Microsoft Yahei;
  /* border: 0.1rem solid red; */
  margin-top: 1rem;
}
.dowload_container img {
  border-radius: 1rem;
  width: 11rem;
  color: #fff;
}
.dowload_container p {
  color: rgb(84, 79, 79);
  font-size: 1.2rem;
  text-align: center;
  margin: 0.4rem 0;
}
.determine {
  background-color: #4cd964;
  font-size: 1.1rem;
  color: #fff;
  text-align: center;
  margin: 0 0.7rem;
  line-height: 2.5rem;
  border-radius: 0.2rem;
  margin-top: 0.5rem;
}
</style>

