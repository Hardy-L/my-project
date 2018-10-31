<template>
    <div class="vipinvoiceRecord">
     <!-- 头部 -->
      <div class="hand">
        <!-- 返回 -->
  <span class="el-icon-arrow-left" @click="$router.back(-1)"></span>
    <div class="title_head">  
      <span class="title_text">购买记录</span>
    </div>
    </div>
    <section data-v-028681ee="" class="invoice_contianer"><img  src="../../../assets/无积分记录.png"> 
    <p data-v-028681ee="">没有购买记录</p></section>
    </div>
</template>

<script>
import wode from "../wode";
export default {
  name: "vipinvoiceRecord"
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
.vipinvoiceRecord {
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
.invoice_contianer {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-align: center;
    align-items: center;
}
.invoice_contianer img {
    width: 11rem;
    height: 7rem;
    margin-top: 5rem;
}
.invoice_contianer p {
    font-size: 1rem;
    color: #999;
    margin-top: .8rem;
}
</style>

