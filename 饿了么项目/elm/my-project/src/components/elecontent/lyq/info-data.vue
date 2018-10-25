<template>
    <div class="info-data">
     <!-- 头部 -->
      <div class="hand">
        <!-- 返回 -->
  <router-link class="el-icon-arrow-left" to="/Aaa"></router-link>
    <div class="title_head">  
      <span class="title_text">我的订单</span>
    </div>
    </div>
    <wode></wode>
    </div>
</template>

<script>
import wode from "../wode";
export default {
  name: "info_data",
  components: {
    wode
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
.info-data {
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
</style>

