<template>
  <div class="groupcity">
    <div v-for="(value,key,index) in groupCity" :key="key">
      <div class="wrap">
        <span class="sort" >{{key}}</span>
        <span v-if="index==0" class="sort" >(字母排序)</span>
      </div>
        <ul class="content">
          <li v-for="item in value" :key="item.id" class="type">
            <router-link :to="'/huntsite/'+item.id">{{item.name}} </router-link>
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
    let api = "https://elm.cangdu.org/v1/cities?type=group";
    //promise写法
    this.$http.get(api).then(data => {
      // console.log(data);
      this.data = data.data;
    });
  },
  computed: {
    groupCity() {
      let sortobj = {};
      for (let i = 65; i <= 90; i++) {
        if (this.data[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.data[String.fromCharCode(i)];
        }
      }
      return sortobj;
    }
  }
};
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.groupcity {
  border: 1px solid gainsboro;
  margin-top: 5%;
}
.wrap {
  border-bottom: 1px solid gainsboro;
  padding-left: 3%;
  height: 2rem;
  line-height: 2rem;
}
.content li {
  list-style-type: none;
  display: inline-block;
  text-align: center;
  width: 25%;
  height: 50%;
  padding: 2%;
  border-bottom: 1px solid gainsboro;
  border-right: 1px solid gainsboro;
  box-sizing: border-box;
  font: normal;
  font-size: 0.95rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.content li a{
  color: #333;
}
.sort{
  font-size: 0.8rem;
}
</style>

