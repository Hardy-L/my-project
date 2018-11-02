<template>
    <div class="clealj">
        <div class="hand">
        <!-- 返回 -->
  <router-link class="el-icon-arrow-left" to="/myele"></router-link>
    <div class="title_head">  
      <span class="title_text">我的积分</span>
    </div>
    </div>
    <!-- 余额模块 -->
    <div class="cleal_content">
        <div class="current">
            <p>当前余额</p>
            <!-- 余额说明 -->
            <div class="explain">
                <img src="../../../assets/wenhao.png" alt="">
               <span>当前积分</span>
               </div>     
               <div class="sp">
            <span>0</span>
            <b>分</b>
            </div>
            <div class="withdrawal"  @click="vanish()">积分兑换商品</div>
        </div>
    </div>
    <!-- 弹框 -->
    <!-- <div class="tip_text_container" v-show="!van"><div class="tip_icon">
      <span>!</span> 
      </div> 
      <p class="tip_text">快去下单赚取大量积分吧</p> <div class="confrim"  @click="vanish()">确认</div>
      </div> -->

    <p>最近30天积分记录</p>
    <div class="no_log">
        <img src="../../../assets/wujilu.png" alt="">
        <p>最近30天积分记录</p>
        <span>快去下单赚取大量积分吧</span>
        </div>      


    </div>
</template>

<script>
export default {
  name: "clealj",
  data(){
    return{
      van:true
    }
  },
  methods:{
    vanish(){
      this.van = !this.van
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
.clealj {
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
/*当前余额积分*/
.current {
  width: 22.5rem;
  height: 10rem;
  background-color: #fff;
  border-radius: 0.3rem;
  margin: 0 auto;
  overflow: hidden;
  /* border: 1px solid black; */
}
.current > p {
  color: rgb(71, 71, 71);
  font-size: 0.9rem;
  text-align: center;
  margin: 0.8rem 10rem 0.3rem 0.6rem;
  float: left;
}
/*积分说明*/
.explain {
  float: right;
  margin: 0.8rem 0.6rem;
  color: #3190e8;
  font-size: 0.8rem;
  /* border: 0.1rem solid red; */
}
.explain img {
  width: 0.8rem;
  margin-right: 0.1rem;
}
.sp {
  float: left;
}
.cleal_content {
  background-color: #3190e8;
  padding: 0.5rem 0;
}
.sp {
  margin-left: 0.5rem;
  float: left;
}
.sp b {
  color: blank;
  font-size: 0.8rem;
}
.sp span {
  color: black;
  font-size: 3rem;
}
.withdrawal {
  margin: 6rem 0.5rem 1rem 0.5rem;
  font-size: 1.1rem;
  color: #fff;
  background-color: red;
  padding: 1rem 0;
  border: 1px;
  border-radius: 0.15rem;
  text-align: center;
}
.clealj > p {
  font-size: 0.5 rem;
  color: #999;
  line-height: 2rem;
  padding-left: 0.5rem;
}
.no_log {
  text-align: center;
  margin-top: 1rem;
  color: gray;
  font-size: 0.7rem;
}
.no_log p {
  padding: 1rem 0;
  font-size: 1rem;
}
.no_log img {
  padding-top: 2rem;
  width: 12rem;
}
/*弹框*/
.tip_text_container {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-direction: column;
  flex-direction: column;
}
.tip_text_container {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -10rem;
  margin-left: -9rem;
  width: 12rem;
  animation: tipMove 0.4s;
  background-color: #fff;
  padding: 2rem 3rem 0;
  border: 1px;
  border-radius: 0.25rem;
}
.tip_text_container .tip_icon {
  width: 4rem;
  height: 4rem;
  border: 0.15rem solid #f8cb86;
  border-radius: 50%;
  text-align: center;
}
.tip_text_container .tip_text {
  font-size: 0.9rem;
  color: #333;
  line-height: 0.9rem;
  text-align: center;
  margin-top: 0.8rem;
  padding: 0 0.4rem;
}

.tip_text_container .tip_icon span {
  font-size: 4rem;
  line-height: 4rem;
  color: #f8cb86;
}
.tip_text_container .confrim {
  font-size: 0.9rem;
  color: #fff;
  font-weight: bold;
  margin-top: 0.8rem;
  background-color: #4cd964;
  width: 18rem;
  height: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
  border: 1px;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
</style>
