<template>
    <div class="exchange">
     <!-- 头部 -->
      <div class="hand">
        <!-- 返回 -->
  <span class="el-icon-arrow-left" @click="$router.back(-1)"></span>
    <div class="title_head">  
      <span class="title_text">兑换红包</span>
    </div>
    </div>
    <form class="exchange_code">
    <input  type="text" placeholder="请输入兑换码" class="exchange_input"> 
    <div class="input_container captcha_code_container">
    <input type="text" placeholder="验证码" maxlength="4"> 
    <div class="img_change_img">
        <img style=""> 
        <div class="change_img">
        <p>看不清</p> 
        <p>换一张</p>
        </div>
        </div>
        </div>
        </form>
        <div class="determine">兑换</div>
    </div>
</template>

<script>
export default {
  name: "exchange"
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
.exchange {
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
/* content内容*/
.exchange_code {
    margin-top: .7rem;
    padding: 0 .5rem;
}
.exchange_code .exchange_input {
    width: 100%;
    font-size: 1rem;
    color: #666;
    padding: 1rem .4rem;
    border-radius: .15rem;
}
.captcha_code_container {
    height: 2.2rem;
    display: -ms-flexbox;
    display: flex;
    margin-top: .7rem;
}
.captcha_code_container input {
    font-size: 1rem;
    color: #666;
    padding: 1.3rem;
    border-radius: .15rem;
    -ms-flex: 3;
    flex: 3;
}
.captcha_code_container .img_change_img {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex: 2;
    flex: 2;
    margin-left: .3rem;
    background-color: #fff;
    padding: 1.3rem;
    border-radius: .15rem;
}
.captcha_code_container .img_change_img img {
    width: 3.5rem;
    height: 1.5rem;
    margin: .2rem;
}
.captcha_code_container .img_change_img .change_img {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: "column";
    flex-direction: "column";
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 2rem;
    -ms-flex-pack: center;
    justify-content: center;
}
.captcha_code_container .img_change_img .change_img p {
    font-size: .55rem;
    color: #666;
}
.captcha_code_container .img_change_img .change_img p:nth-of-type(2) {
    color: #3b95e9;
    margin-top: .2rem;
}
.withdrawal {
    margin: 6rem 0.5rem 1rem 0.5rem;
    font-size: 1.1rem;
    color: #fff;
    background-color: #c5c7c5;
    padding: 1rem 0;
    border: 1px;
    border-radius: 0.15rem;
    text-align: center;
}
.determine {
    background-color: #ccc;
    font-size: 1.1rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 2.2rem;
    border-radius: .2rem;
    margin-top: .7rem;
}
</style>

