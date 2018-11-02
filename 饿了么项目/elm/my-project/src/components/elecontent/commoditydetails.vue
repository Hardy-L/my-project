<template>
    
</template>
<script>
    // 接口11
    export default {
  // name: "elecontent"
  data: () => ({
    data: []
  }),
  created() {
    // 接口  5
    var api5 = "https://elm.cangdu.org/v2/index_entry";
    var _this = this;
    this.$axios.get(api5).then(data => {
      // params: {
      //     shopid: this.id
      //   }
        // console.log(shopid)
      //关闭加载提示
      // loadingInstance1.close();
      // 成功后的回调
      console.log("成功了....");
      //展示所有商店名
      // console.log(data);
      _this.data = data.data;
      // console.log(_this.data);
    });
   
  },
  components: {
    merchantlist,
  },
  

};
</script>
<style scoped>
    
</style>