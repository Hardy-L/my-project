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
          <h4 class="bh4">搜索历史</h4>
          <ul class="bottom" v-if="show">
            <li v-for="item in arr1" :key="item.id">
              <router-link to="/Aaa">
              <h4>{{item.name}}</h4>
              <p>{{item.address}}</p>
              </router-link>
            </li>
          </ul>
          <footer class="footer" @click="footer()" v-show="show">清空所有</footer>
      </div>
      <ul class="details">
        <li v-for="(item,index) in datas" :key="index">
          <router-link @click.native="loc(index)" to="/Aaa">
          <h4>{{item.name}}</h4>
          <p>{{item.address}}</p>
        </router-link>
        </li>
       
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
      arr: [],
      arr1: [],
      name: "",
      id: "",
      show:false
    };
  },
  created() {
    if(!this.$store.state.sousuo){
      this.show=false;
    }else{
      this.show=true;
    }
    this.id = this.$route.params.id;
    let api = "https://elm.cangdu.org/v1/cities/" + this.$route.params.id;
    this.$http.get(api).then(res => {
      this.data = res.data;
    });
    if (localStorage.getItem("obj")) {
      this.arr1 = JSON.parse(localStorage.getItem("obj"));
    }
  },
  methods: {
    submit() {
      this.$store.commit("changesousuo",this.name)
      let url =
        "https://elm.cangdu.org/v1/pois?city_id=" +
        this.id +
        "&keyword=" +
        this.name;
      this.$http.get(url).then(res => {
        // console.log(res.data);
        this.datas = res.data;
        this.$store.commit("cityid", this.id);
        console.log('id',this.id);
      });
    },
    loc(id) {
      this.arr = this.arr1;
      for (var i = 0; i < this.arr.length; i++) {
        if (this.arr[i].address == this.datas[id].address) {
          return;
        }
      }
      this.arr.push(this.datas[id]);
      localStorage.setItem("obj", JSON.stringify(this.arr));
    },
    footer() {
      localStorage.clear();
      this.show = false;
      this.$store.commit("changesousuo","")
    }
  }
};
</script>
<style scoped>
.huntsite {
  background: #f5f5f5;
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
  font-size: 0.9rem;
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
  font-size: 0.9rem;
}
.bottom {
  background: #fff;
}
.bh4 {
  /* border: 1px solid red; */
  padding-left: 0.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
}
.bottom li {
  height: 3.5rem;
  padding-top: 0.6rem;
  color: #333;
  border-bottom: 1px solid #e4e4e4;
}
.bottom p {
  margin-left: 1rem;
  font-size: 0.8rem;
  color: #999;
  margin-top: 0.5rem;
}
.bottom h4 {
  margin-left: 1rem;
  font-size: 0.8rem;
  padding: 1%;
}
.footer {
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  line-height: 2.8rem;
  background-color: #fff;
}
.details {
  position: absolute;
  left: 0;
  top: 9.3rem;
  width: 100%;
  border-top: 1px solid #e4e4e4;
}
.details li {
  background-color: #fff;
  height: 3.5rem;
  padding-top: 0.6rem;
  color: #333;
  border-bottom: 1px solid #e4e4e4;
}
.details p {
  margin-left: 1rem;
  font-size: 0.8rem;
  color: #999;
  margin-top: 0.5rem;
}
.details h4 {
  margin-left: 1rem;
  font-size: 0.8rem;
  padding: 1%;
}
.details a {
  text-emphasis: none;
  color: #333;
}
</style>