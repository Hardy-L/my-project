<template>
  <div class="huntsite">
      <header>
         <a href="#/home">&lt;</a>
         <a href="#/home">{{data.name}}</a>
         <a href="#/home">切换城市</a>
      </header>
      <div class="huntsite_contet">
        <input type="search" placeholder="请输入学校、商务楼、地址" class="input1" value="" v-model="name">
        <br>
       <input type="submit" value="提交" class="input2" @click="submit()">
      </div>
      <div class="huntsite_bottom">
          搜索历史
      </div>
      <ul class="details">
        <router-link to="/store">
        <li v-for="item in datas" :key="item.id">
          <h4>{{item.name}}</h4>
          <p>{{item.address}}</p>
        </li>
        </router-link>
      </ul>
  </div>
</template>
<script>
export default {
  name: "huntsite",
  data() {
    return {
      data: [],
      datas: [],
      name: "",
      id: ""
    };
  },
  created() {
    this.id = this.$route.params.id;
    let api = "https://elm.cangdu.org/v1/cities/" + this.$route.params.id;
    this.$http.get(api).then(res => {
      this.data = res.data;
    });
  },
  methods: {
    submit() {
      let url =
        "https://elm.cangdu.org/v1/pois?city_id=" +
        this.id +
        "&keyword=" +
        this.name;
      this.$http.get(url).then(res => {
        console.log(res.data);
        this.datas = res.data;
      });
    }
  }
};
</script>
 <style scoped>
.huntsite {
  background:#f5f5f5;
  width: 100%;
  margin-top: 3rem;
}
header {
  height: 2.4rem;
  color: white;
  text-align: center;
  background: #3190e8;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header a {
  text-decoration: none;
  color: white;
  margin: 0 3%;
  font-size: .9rem;
}
.huntsite_contet {
  text-align: center;
  margin-top: 3%;
  background-color: #fff;
  height: 5.5rem;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  padding-top: 2%;
}
.input1 {
  border: 1px solid #e4e4e4;
  padding: 2%;
  color: #333;
  border-radius: 0.5rem;
  margin-bottom: 2%;
  width: 80%;
  font-size: 0.8rem;
}
.input2 {
  background-color: #3190e8;
  width: 80%;
  color: white;
  margin-bottom: 4%;
  border-radius: 0.5rem;
  padding: 2%;
  font-size: 0.8rem;
}
.huntsite_bottom {
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  padding: 1.5% 0 1.5% 2%;
  font-size: 0.9rem;
}
.details {
  position: absolute;
  left: 0;
  top:9.3rem;
  width: 100%;
  border-top: 1px solid #e4e4e4;
}
.details li {
  background-color: #fff;
  height: 3.5rem;
  padding-top: .6rem;
  color: #333;
  border-bottom: 1px solid #e4e4e4;
}
.details p{
  margin-left: 1rem;
  font-size: .8rem;
  color: #999;
  margin-top: .5rem;
}
.details h4{
  margin-left:1rem; 
  font-size: .8rem;
  padding: 1%
}
</style>