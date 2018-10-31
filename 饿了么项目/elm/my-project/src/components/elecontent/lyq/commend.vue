<template>
    <div class="commend">
     <!-- 头部 -->
      <div class="hand">
        <!-- 返回 -->
  <span class="el-icon-arrow-left" @click="$router.back(-1)"></span>
    <div class="title_head">  
      <span class="title_text">推荐有奖</span>
    </div>
    </div>
    <div class="activity_banner">
        <img style="width:100%" src="../../../assets/activity.png" alt="">
    </div>
    <div class="invite_firend">
        <div @click="vanish()" class="invite_firend_style"><img  src="../../../assets/微信logo.png"> <p >邀请微信好友</p></div>
         <div class="invite_firend_style" @click="vanish()">
             <img src="../../../assets/QQloge.png"> <p>邀请QQ好友</p></div> <div  class="invite_firend_style" @click="vanish()"><img src="../../../assets/面对面.png"><p>面对面邀请</p></div></div>

    <section class="invite_num"><div class="invite_num_style"><p>累计收益</p> <p><span>0</span>元</p></div> <div class="invite_num_style invite_people"><p>成功邀请</p> <p><span>0</span>人</p></div></section>

    <p class="income_detail">-收益明细-</p>

    <section class="incom_tips"><img src="../../../assets/手机.png"> <p>还不赶紧去邀请好友</p></section>
     <!-- 弹框 -->
    <div class="tip_text_container" v-show="!van"><div class="tip_icon">
      <span>!</span> 
      </div> 
      <p class="tip_text">请在饿了么APP中打开</p> <div class="confrim"  @click="vanish()">确认</div>
      </div>
    </div>
</template>

<script>
export default {
  name: "commend",
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
.commend {
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
.invite_firend {
    display: -ms-flexbox;
    display: flex;
    padding: 1rem 0;
    background-color: #fff;
}
.invite_firend .invite_firend_style {
    -ms-flex: 1;
    flex: 1;
    text-align: center;
    margin:1rem 0;
}
.invite_firend .invite_firend_style img {
    width: 3.5rem;
    height: 3.5rem;
}
.invite_firend .invite_firend_style p {
    font-size: .8rem;
    color: #333;
}
.invite_num {
    display: -ms-flexbox;
    display: flex;
    margin-top: 1rem;
    font-size: .5rem;
    color: #666;
}
.invite_num .invite_num_style {
    -ms-flex: 1;
    flex: 1;
    text-align: center;
}
.invite_num .invite_num_style p {
    color: #666;
}
.invite_num .invite_num_style span {
    font-size: .8rem;
    color: #ff5633;
    font-weight: 700;
}
.invite_num .invite_people {
    border-left: .025rem solid #ddd;
}
.invite_num .invite_people span {
    font-size: .8rem;
    color: #666;
    font-weight: 700;
}
.page p, .page span {
    font-family: Helvetica Neue,Tahoma,Arial;
}
.incom_tips, .income_detail {
    text-align: center;
    margin-top: 1rem;
}
.incom_tips img {
    width: 2rem;
    height: 2.2rem;
}
.incom_tips p {
    font-size: .8rem;
    color: #999;
}
.page p, .page span[data-v-1859df90] {
    font-family: Helvetica Neue,Tahoma,Arial;
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

