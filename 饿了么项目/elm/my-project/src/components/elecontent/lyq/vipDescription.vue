<template>
    <div class="vipDescription">
     <!-- 头部 -->
      <div class="hand">
        <!-- 返回 -->
  <span class="el-icon-arrow-left" @click="$router.back(-1)"></span>
    <div class="title_head">  
      <span class="title_text">我的优惠</span>
    </div>
    </div>
    <div class="markdown">
      <div class="p1">
         <p >尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化:购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。 注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。</p>
      </div>

     <h3 id="q1-">Q1: 特权介绍</h3>
      <ul>
        <li >身份标识：饿了么会员服务有效期内，享有专属皇冠标识。</li> 
         <li>减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。</li> 
          <li>更多特权，敬请期待！</li>
            </ul> 
            
             <h3 id="q2-">Q2: 资费介绍</h3> 
             <ul>
                <li>饿了么会员卡：20元</li>
                    </ul>
                     <h3 id="q3-">Q3: 使用说明</h3> 
                     <p>当用户满足以下任一条件，会员服务自动失效：</p>
                     <ol>
                        <li>自绑定之日起超过31天；</li> 
                        <li>在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</li>
                        </ol> 
                      
                        <h3  id="q4-">Q4: 购卡说明</h3> 
                        <ul><li>在线购买：饿了么App&gt;我的&gt;饿了么会员卡</li></ul> <h3 id="q5-">Q5: 温馨提示</h3> <ul><li>用户在当前会员服务失效前，无法购买新卡。</li> <li>请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</li>
                        </ul>
                        </div>
    </div>
</template>

<script>
export default {
  name: "vipDescription"
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
.markdown{
  background: #fff;
  padding: 1rem 0.8rem;
}
.markdown h3 {
  margin-top: 0.666667rem;
  margin-bottom: 0.2rem;
  font-size: 0.7rem;
  font-weight: 600;
  color: #333;
}
.p1{
  width: 17rem;
  margin: 0 auto;
}
.markdown p {
  margin: 0;
  list-style: none;
  font-style: normal;
  text-decoration: none;
  font-size: 1rem;
  line-height: 1.2rem;
  border: none;
  color: #333;
  font-weight: 400;
  font-family: Microsoft Yahei;
}
</style>

