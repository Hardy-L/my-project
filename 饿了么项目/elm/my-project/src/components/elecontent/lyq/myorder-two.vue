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
        <div class="determine" @click="vanish()">下载</div>
    </div>
     <!-- 弹框 -->
    <div class="tip_text_container" v-show="!van"><div class="tip_icon">
      <span>!</span> 
      </div> 
      <p class="tip_text">IOS用户请前往AppStore下载</p> <div class="confrim"  @click="vanish()">确认</div>
      </div>
    </div>
</template>

<script>
export default {
  name: "myorder_two",
  data(){
    return{
      van:true
    }
  },
  methods: {
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

