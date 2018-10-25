<template>
  <!--  搜索页面-->
  <!-- <router-link class="el-icon-arrow-left" to="/pulldown">
  
  搜索
  </router-link> -->
  <div>
    <pulldown />
  </div>
</template>
<script>
  import pulldown from './pulldown'
  export default {
    name: "seatch",
    components: {
      pulldown
    }
  }
</script>
<style>
  /*  */
</style>