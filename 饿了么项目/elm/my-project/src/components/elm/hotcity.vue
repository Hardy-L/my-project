<template>
    <div class="hotcity">
     <div class="content">
        <h4>热门城市</h4>
        <ul class="content_top">
            <li v-for="item in data" :key="item.id">
                <router-link :to="'/huntsite/'+item.id">{{item.name}}</router-link>
            </li>
        </ul>
     </div>
    </div>
</template>
<script>
export default {
  data: () => ({
    data: []
  }),
  created() {
    let api = "https://elm.cangdu.org/v1/cities?type=hot";
    //promise写法
    this.$http.get(api).then(res => {
    //   console.log(res.data);
      this.data = res.data;
    });
  }
};
</script>
<style>
.content {
  margin-top: 5%;
}
.content h4 {
  border-top: 1.2px solid gainsboro;
  height: 2.2rem;
  line-height: 2.2rem;
  color: #666;
  font-size: 0.9rem;
  padding-left: 3%;
}
.content_top {
  border: 0.5px solid gainsboro;
  overflow: hidden;
  height: 5rem;
  line-height: 2.6rem;
}
.content_top li {
  list-style-type: none;
  float: left;
  text-align: center;
  width: 25%;
  height: 50%;
  border-bottom: 1px solid gainsboro;
  border-right: 1px solid gainsboro;
  box-sizing: border-box;
  font: normal;
  font-size: 1rem;
}
.content a{
    color: #3190e8;
}
</style>
