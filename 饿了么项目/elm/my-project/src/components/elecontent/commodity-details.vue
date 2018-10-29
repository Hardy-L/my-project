<template>
<div>
<router-link to="/seatch"  class="el-icon-search">
 <p v-for="item in data6"  :key='item.id'></p>
 </router-link>
  <p class="log-in">
     <span>{{item.title}}</span>
     </p>
   </div>
</template>
<script>
export default {
  name: "titleaaa",
  data: () => ({
    data6: []
  }),
  created() {
    // 接口 6
    var api6 = "/api/shopping/restaurants";
    var _this = this;
    this.$http.get(api6).then(data => {
      //关闭加载提示
      // loadingInstance1.close();
      // 成功后的回调
      console.log("成功了....");
      //展示所有商店名
      console.log(data);
      _this.data = data.data;
      console.log(_this.data);
    });
  }
};
</script>
<style scoped>
.el-icon-search{
  border:15rem solid blue;
}
</style>