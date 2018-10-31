<template>
    <div class="vipuseCart">
     <!-- 头部 -->
      <div class="hand">
        <!-- 返回 -->
  <span class="el-icon-arrow-left" @click="$router.back(-1)"></span>
    <div class="title_head">  
      <span class="title_text">兑换会员</span>
    </div>
    </div>
     <p class="buy_for">成功兑换后将关联到当前帐号： <span>leiyu</span></p>
    <form class="form_style"><input type="text" name="cartNumber" maxlength="10" placeholder="请输入10位卡号"> <input type="text" name="passWord" maxlength="6" placeholder="请输入6位卡密"></form>

    <p class="determine">兑换</p>

    <div class="Binding">
      <h3>——温馨提示——</h3> 
      <p>新兑换的会员服务，权益以「会员说明」为准。</p> 
      <p>月卡：<b>30次</b>减免配送费。</p> <p>季卡：<b>90次</b>减免配送费。</p> <p>年卡：<b>360</b>次减免配送费。</p> <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
    </div>
    </div>
</template>

<script>
export default {
  name: "vipuseCart"
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
/* content*/
.buy_for {
    font-size: .6rem;
    color: #666;
    line-height: 2rem;
    padding-left: .7rem;
}
.buy_for span {
    font-weight: 700;
}
.form_style {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
}
.form_style input {
    border-bottom: 1px solid #f5f5f5;
    height: 2rem;
    font-size: .8rem;
    color: #999;
    padding-left: 1rem;
}
.Binding {
    margin-top: 1rem;
    text-align: center;
}
.determine {
    background-color: #ccc;
    font-size: 0.9rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 2.5rem;
    border-radius: .2rem;
    margin-top: .7rem;
    font-weight: 700;
}
.Binding b, .Binding p {
    font-size: .5rem;
    color: #aaa;
    line-height: .8rem;
}
.Binding b, .Binding p {
    font-size: .5rem;
    color: #aaa;
    line-height: .8rem;
}
</style>

