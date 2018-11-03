<template>
    <div class="botfix">
        <div class="xuanzebtn">
            <router-link to="/Aaa">
                <img v-if="$store.state.botchoice.waimai" src="../../assets/imga/饿了么1.png" alt="">
                <img v-else src="../../assets/imga/饿了么(1).png" alt="">
            <p>外卖</p></router-link>
        </div>
        <div class="xuanzebtn">
            <router-link to="/seatch">
                <img v-if="$store.state.botchoice.sousuo" src="../../assets/imga/指南针1.png" alt="">
                <img v-else src="../../assets/imga/指南针.png" alt="">
            </router-link>
            <p>搜索</p>
        </div>
        <div class="xuanzebtn">
            <router-link to="/info_data">
                <img v-if="$store.state.botchoice.dingdan" src="../../assets/imga/订单1.png" alt="">
                <img v-else src="../../assets/imga/订单.png" alt="">
            </router-link>
            <p>订单</p>
        </div>
        <div class="xuanzebtn">
            <router-link to="/myele">
                <img v-if="$store.state.botchoice.mine" src="../../assets/imga/我的1.png" alt="">
                <img v-else src="../../assets/imga/我的.png" alt="">
            </router-link>
            <p>我的</p>
        </div>
    </div>
</template>
<script>
export default {
  name: "bot"
};
</script>
<style>
.botfix {
  width: 100%;
  padding: 0.1rem;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
}
.xuanzebtn {
  width: 25%;
  text-align: center;
}
.xuanzebtn img {
  width: 25%;
}
.xuanzebtn p {
  text-align: center;
  font-size: 0.5rem;
}
.xuanzebtn>a{
    color: #333;
}
</style>
