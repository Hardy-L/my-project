<template>
    <div class="info-members">
     <!-- 头部 -->
      <div class="hand">
        <!-- 返回 -->
  <span class="el-icon-arrow-left" @click="$router.back(-1)"></span>
    <div class="title_head">  
      <span class="title_text">会员中心</span>
    </div>
    </div>
    <!-- content -->
    <p style="line-height:1.7rem">为账户{{username}}购买会员</p>
    <div class="profile-1reTe">
        <ul>
          <router-link to="/vipDescription">
        <li>
            <div class="myorder-div">
               <span>会员特权</span>
            </div>
            <div class="right">
              <span>会员说明</span>
            <img  src="../../../assets/右箭头.png" alt="">
            </div>
            </li>
          </router-link>
          
           <li style="height:6rem" >
            <div class="myorder-div">
                <img src="../../../assets/省.png" alt="">
            </div>
            <div class="spanp">
              <h4>减免配送费</h4>
              <p>每月减免30单，每日可减免3单，每单最高减4元</p>
              <p>蜂鸟专送专享</p>
            </div>
            <span></span>
            </li>

            <li style="height:6rem" >
            <div class="myorder-div">
                <img src="../../../assets/减免配送.png" alt="">
            </div>
            <div class="spanp">
              <h4>减免配送费</h4>
              <p>每月减免30单，每日可减免3单，每单最高减4元</p>
              <p>蜂鸟专送专享</p>
            </div>
            <span></span>
            </li>
        </ul>
        </div>

        <!-- 开通会员-->
         <div class="profile-1reTe">
          <ul>
            <li>开通会员</li>
            <li>
              <div class="myorder-div">
              <span>1个月</span>
              <span>¥20</span>
              </div>
              <div class="span">
                <router-link to="/payment">
                <div class="apply_vip_buy_right">购买</div>
                </router-link>
              </div>
              </li>
          </ul>
        </div>


        <div class="profile-1reTe">
          <ul>
            <router-link to="/vipuseCart">
            <li>
            <div class="myorder-div">
               <span>兑换会员</span>
            </div>
            <div class="right">
              <span>使用卡号免密</span>
            <img  src="../../../assets/右箭头.png" alt="">
            </div>
            </li>
              </router-link>
          </ul>
        </div>
        <!-- 兑换会员 -->
        <div class="profile-1reTe">
          <ul>
            <router-link to="/vipinvoiceRecord">
            <li>
              <div class="myorder-div">
               <span>购买记录</span>
            </div>
            <div class="right">
              <span>开发票</span>
            <img  src="../../../assets/右箭头.png" alt="">
            </div>
              </li>
              </router-link>
          </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "info_members",
  data() {
    return {
      username: "leiyu"
    };
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
.info-members p {
  font-size: 0.8rem;
  color: #666;
  /* line-height: 1rem; */
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
.el-icon-arrow-right {
  float: right;
  line-height: 6rem;
  text-decoration-line: none;
  font-weight: bold;
  color: #999;
  font-weight: bold;
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
/*profile-1reTe */
.profile-1reTe {
  background-color: #fff;
  width: 100%;
  margin: 0.6rem 0;
}
.profile-1reTe ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  width: 100%;
  border-bottom: 0.01rem solid rgb(218, 198, 198);
}
.right {
  margin-right: 0.5rem;
}
.right img {
  width: 1rem;
  margin-top: 1rem;
}
.right span {
  color: #999;
  font-size: 0.9rem;
  line-height: 2rem;
}
.myorder-div img {
  width: 2.8rem;
  margin-left: 1rem;
}

.myorder-div span {
  display: inline-block;
  color: rgb(84, 79, 79);
  margin-left: 0.5rem;
  font-size: 1.1rem;
}

.spanp {
  height: 4rem;
  border: 1rem soliid red;
}
.apply_vip_buy_right{
    border: .05rem solid #f60;
    border-radius: .2rem;
    line-height: 1.2rem;
    height: 1.2rem;
    width: 2.6rem;
    text-align: center;
    font-size: .6rem;
    color: #f60;
    margin-right:0.5rem; 
}
</style>

