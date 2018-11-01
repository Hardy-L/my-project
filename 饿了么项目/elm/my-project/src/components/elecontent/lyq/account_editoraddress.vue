<template>
    <div class="account_editoraddress">
     <!-- 头部 -->
      <div class="hand">
        <!-- 返回 -->
<span class="el-icon-arrow-left" @click="$router.back(-1)"></span>    
<div class="title_head">  
      <span class="title_text">编辑地址</span>
    </div>
    <div class="title_right">  
      <span class="title_text" @click="dianji()">{{bianji}}</span>
    </div>
    </div>
    <div class="addlist">
      <ul>
        <li v-for="(item,index) in data" :key="index">
        <div>
          <h4>{{item.address}}</h4>
        <p><span>{{item.phone}}</span></p>
        <p>{{item.id}}</p>
        </div>
        <span style="float:right;line-height:3rem;"  v-show="edd"  @click="delt(item.id,index)">X</span>
        </li>

        <router-link  to="/account_newaddress">
            <li style="width: 100%;background:#fff">
                <div class="myorder-div">
                <span>新增地址</span>
                </div>
                <span class="el-icon-arrow-right" id="arrow-right"></span>
                </li>
                </router-link>
      </ul>
    </div>
  
    </div>
</template>

<script>
export default {
  name: "account_editoraddress",
  data() {
    return {
      data: [],
      bianji: "编辑",
      address_id: "",
      edd: true
    };
  },
  created() {
    let api28 =
      "https://elm.cangdu.org/v1/users/" +
      this.$store.state.usermsg.id +
      "/addresses";
    this.$http.get(api28).then(res => {
      this.data = res.data;
      console.log("api28", this.data);
      if (res.data.status) {
        alert("添加成功");
        localStorage.setItem("dddata", JSON.stringify(this.data));
      }
    });
  },
  methods: {
    dianji() {
      this.bianji = "完成";
      this.edd = !this.edd;
    },
    delt(q, w) {
      let api29 =
        "https://elm.cangdu.org/v1/users/" +
        this.$store.state.usermsg.id +
        "/addresses/" +
        q +
        "";
      this.$http.delete(api29).then(res => {
        console.log(res.data);
        this.data.splice(w,1);
      });
    }
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
.account_editoraddress {
  background-color: rgb(236, 236, 236);
}
.hand {
  text-align: center;
  background-color: #3190e8;
  border-bottom: 0.01rem ridge rgb(201, 187, 187);
  display: flex;
  justify-content: space-between;
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
  height: 2.8rem;
  line-height: 3rem;
  margin-left: 2.2rem;
}
.title_right {
  width: 5rem;
  line-height: 3rem;
}
.title_text {
  font-size: 1.1rem;
  color: rgb(255, 255, 255);
  font-weight: bold;
}
.el-icon-arrow-right#arrow-right {
  color: rgb(84, 79, 79);
  line-height: 3rem;
  float: right;
  margin: 0 0.4rem;
}
.addlist {
  /* background: #eaf39b; */
  height: 3.5rem;
  margin-top: 0.5rem;
}
.addlist ul li {
  border-bottom: 1px solid #d9d9d9;
  padding: 0.4rem;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
ul > li:nth-child(1) {
  background: #fff8c3;
}
.address li p {
  line-height: 0.9rem;
  font-size: 0.8rem;
  color: #333;
}
.addlist p span {
  display: inline-block;
  font-size: 0.8rem;
  color: #333;
}
.myorder-div {
  width: 9rem;
  height: 3rem;
  float: left;
}

.myorder-div span {
  display: inline-block;
  color: rgb(29, 29, 28);
  font-size: 1.2rem;
  line-height: 3rem;
  margin-left: 0.5rem;
}
</style>

