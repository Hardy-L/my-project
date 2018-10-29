<template>
    <div class="myorder_text">
     <!-- 头部 -->
      <div class="hand">
        <!-- 返回 -->
  <span class="el-icon-arrow-left" @click="$router.back(-1)"></span>
    <div class="title_head">  
      <span class="title_text">{{title}}</span>
    </div>
    </div>
    <!-- content部分 -->
    <div class="content-div">
          <div class="scroll">
            <p>{{text[tapo]}}</p>
            </div>
      </div>
    
    </div>
</template>

<script>
export default {
  name: "myorder_text",
  data() {
    return {
      title: "",
      tapo: "",
      data: "",
      datas: [],
      text: ""
    };
  },
  created() {
    this.title = this.$route.params.title;
    this.tapo = this.$route.params.tapo;
    console.log(this.tapo);
    let api33 = "https://elm.cangdu.org/v3/profile/explain";
    this.$http.get(api33).then(data => {
      this.data = data.data;

      for (let k in this.data) {
        // console.log(this.data[k]);
        this.datas.push(this.data[k]);
      }

      // console.log(this.datas);
      this.datas.splice(24, 1);
      let data1 = [];

      for (let i = 0; i <= this.datas.length; i++) {
        if (i % 2 == 0) {
          data1.push(this.datas[i]);
        }
      }
      console.log(data1);
      data1.splice(9, 2);
      data1.splice(21, 1);
      this.text = data1;
      console.log(this.text);
    });
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
.info-data {
  background-color: rgb(236, 236, 236);
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
.content-div{
   height: 30rem;
   overflow: scroll;
}
.content-div::-webkit-scrollbar {
  display: none;
}
.content-div p{
  text-align: justify;
  text-justify: inter-ideograph;
  font-size: 1.25rem;
  color:darkgoldenrod;
  line-height: 2rem;
}
</style>

