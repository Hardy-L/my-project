<template>
<div>
    <div class="warp">
        <div class="body">
            <div class="body-top">
            <elecontent></elecontent>
            </div>
            <div class="body-bottom">
             <merchantlist></merchantlist>
             <wode></wode> 
            </div>
        </div>
   </div>
</div>
</template>
<script>
//引入外卖页面
import elecontent from "@/components/elecontent/elecontent";
// 引入搜索页面
import seatch from "@/components/elecontent/seatch";
//引入订单页面
import orderfrom from "@/components/elecontent/orderfrom";
//引入我的页面
import myele from "@/components/elecontent/myele";
// 商家页面
import merchantlist from "@/components/elecontent/merchantlist";
// 引入我的页面
import wode from "@/components/elecontent/wode";
export default {
  name: "aaa",
  components: {
    elecontent,
    seatch,
    orderfrom,
    myele,
    merchantlist,
    wode
  },
  created() {
    var botchoice = {
      waimai: true,
      sousuo: false,
      dingdan: false,
      mine: false
    };
    this.$store.commit("changebotchoice", botchoice);
  }
};
</script>
<style scoped>
</style>