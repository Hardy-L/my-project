<template>
<div class="warp">
 <div class="title">
     <div class="left tong">
         <div @click="dianji1">分类</div>
         </div>     
     <div class="center tong">
        <div @click="dianji2"> 排序</div>
         </div>
     <div class="right tong">
        <div @click="dianji3"> 筛选</div>
         </div>
 </div>
 <!-- ---------------------------------- -->
 <div class="down">
 <div class="down-left">
 <div v-show="value1">
     <div v-for="(down,index) in data8" :key="index">

      <div class="pandu" v-if="index==0">
         <div class="left-left" @click="dianji4(index)">
              <span class="wen">{{down.name}}</span>
              <span class="shu">{{down.count}}</span>
              <span>></span>
             </div>
      </div>
          <div class="panduan" v-else-if="index==4">
        <div class="left-left" @click="dianji4(index)">
             <img class="tu" :src="'https://fuss10.elemecdn.com/'+down.image_url+'.jpeg'">
              <span class="wen">{{down.name}}</span>
              <span class="shu">{{down.count}}</span>
              <span>></span>
             </div>
      </div>
           <div class="panduan" v-else-if="index==7">
        <div class="left-left" @click="dianji4(index)">
             <img class="tu" :src="'//elm.cangdu.org/img/default.jpg'">
              <span class="wen">{{down.name}}</span>
              <span class="shu">{{down.count}}</span>
              <span>></span>
             </div>
      </div>



         <div class="panduan" v-else>
         
         <div class="left-left" @click="dianji4(index)">
             <img class="tu" :src="'https://fuss10.elemecdn.com/'+down.image_url+'.png'">
              <span class="wen">{{down.name}}</span>
              <span class="shu">{{down.count}}</span>
              <span>></span>
             
           </div>
          
       </div>


     </div>
   
 </div>
 <!-- ---------------------------------- -->
 <div v-show="value2">
     <div v-for="item in imgs" :key="item.id" class="paixu">
         <div @click="dianjia1(item.id)" class="paixu2">
           <img :src="item.src" alt=""> <span class="wen">{{item.title}}</span>
           </div>
         </div>
     
 </div>
 <!-- ---------------------------------- -->
 <div v-show="value3">
     <div class="shaixuan">
         <div class="peisong">配送方式</div>
         <div class="fengniao" @click="huantu">
           
           <div class="wen" v-for="(item,index) in data9" :key="index">
             <span v-if="huantudata">
           <img class="tu tum" src="@/assets/蜂鸟.png" alt="">
           </span>
           <span v-else>
             <img class="tu tum" src="@/assets/对号.png" alt="">
           </span>
            <span>{{item.text}}</span></div>
            </div>
         <div class="peisong">配送方式>商家属性可以多选</div>
         <div class="huodong" v-for="(huodong,index) in data10" :key="index">
              <div @click="huantu2(index)">
              <span v-if="valuehe[index].valueb">
             <span class="kuang" :style="{'color':'#'+huodong.icon_color}">
               {{huodong.icon_name}}
               </span>
              </span>
               <span v-else>
             <img class="kuang2" src="@/assets/对号.png" alt="">
           </span>                                        
             <span class="hdzi">{{huodong.name}}</span>
           </div>
         </div>
        
     </div>
      <div class="queding">
        <button class="clickbtn2" @click="qingkbtn">清空</button>
        <button class="clickbtn" @click="quedingbtn">确定</button>
        </div>
 </div>
 </div>
<!-- ---------------------------------- -->
 <div class="down-right">
       <div v-show="value4">
         <div class="scoll">
           <div v-for="(right,index) in arr" :key="index">
           <div class="left-right" @click="updaMsg(index)">
              <router-link to="/elecontenter">
            <span class="wen">{{right.name}}</span>
            <span class="shu2">{{right.count}}</span>
              </router-link>
         </div>
        </div>
      </div>
  </div>
  
 </div>
 </div>
 </div>
</template>
<script>
import img01 from "@/assets/双向箭头.png";
import img02 from "@/assets/地址.png";
import img03 from "@/assets/火.png";
import img04 from "@/assets/金额.png";
import img05 from "@/assets/时间.png";
import img06 from "@/assets/pingfen.png";

export default {
  data: () => ({
    value1: false,
    value2: false,
    value3: false,
    value4: false,
    data8: [],
    data9:[],
    data10:[],//10接口
    arr: [],
    name1: [],//选择商品
    name2: [],// 排序
    valuehe:[{valueb:true,count:0},
   { valueb:true,count:0},
    {valueb:true,count:0},
    {valueb:true,count:0},
    {valueb:true,count:0},
    {valueb:true,count:0},],
   huantudata:true,
    imgs:[
       {
          title: "智能排序",
          src: img01,
          id: 0
        },
         {
          title: "距离最近",
          src: img02,
          id: 1
        },
         {
          title: "销量最高",
          src: img03,
          id: 2
        },
         {
          title: "起送价最低",
          src: img04,
          id: 3
        },
         {
          title: "配送速度最快",
          src: img05,
          id: 4
        },
         {
          title: "评分最高",
          src: img06,
          id: 5
        },
    ],
    id:[],
    blname:[],
  }),
  // 设置属性,让我可以调用父组件的方法,致使其他页面方便监听
  props: ["cli","cli2"],
  methods: {
    dianji1: function() {
      this.value1 = !this.value1;
      this.value2 = false;
      this.value3 = false;
      this.value4 = false;
    },
    dianji2: function() {
      this.value2 = !this.value2;
      this.value1 = this.value4 = false;
      this.value3 = false;
    },
    dianji3: function() {
      this.value3 = !this.value3;
      this.value2 =this.value1= false;
      this.value2 = this.value4 = false;
    },
    dianji4: function(a) {
      this.value4 = false;
      this.value4 = !this.value4;
      this.arr = this.data8[a].sub_categories;
      this.name1 = this.data8[a].name;
    },
    // 点击我,我调用父组件传过来的方法
    updaMsg(b) {
      this.name2 = this.arr[b].name;
      this.value1 = false;
      this.value2 = false;
      this.value3 = false;
      this.value4 = false;
    },
    dianjia1(c){
     this.id=this.imgs[c].id
    //  console.log(this.id)
     this.cli(c);
      this.value1 = false;
      this.value2 = false;
      this.value3 = false;
      this.value4 = false;
    },
    huantu(){
      this.huantudata=!this.huantudata
    },
    huantu2(aaa){
      // this.idimg=aaa;
    this.valuehe[aaa].valueb=!this.valuehe[aaa].valueb
    // console.log(this.data10[aaa].name)
    this.valuehe[aaa].count+=1
    if(this.valuehe[aaa].count%2 == 1){
      this.blname.push(this.data10[aaa].name);
    }else{
      var a;
      var _this =this
      this.blname.forEach(function(val,ind){
        if(val == _this.data10[aaa].name){
          a = ind 
          console.log("..............."+val)
        }
       
      })
      this.blname.splice(a,1)
      // console.log(this.blname)
      
    }
    // console.log(this.blname)
    },
    quedingbtn(){
      console.log(this.blname)
      this.cli2(this.blname)
       this.value1 = false;
      this.value2 = false;
      this.value3 = false;
      this.value4 = false;
    },
    qingkbtn(){
     this.valuehe[0].valueb=true;
     this.valuehe[1].valueb=true;
     this.valuehe[2].valueb=true;
     this.valuehe[3].valueb=true;
     this.valuehe[4].valueb=true;
     this.valuehe[5].valueb=true;
     this.blname=null;
    }
  },
  watch: {
    name2() {
      var a = this.name1 + "/" + this.name2;
      // var b = this.id;
      
      this.cli(a);
    }
    
  },
  created() {
    var _this = this;

    // 接口8
    const api8 = "/api/shopping/v2/restaurant/category";
    this.$http.get(api8).then(data => {
      _this.data8 = data.data;
      console.log("获取到数据");
      console.log(_this.data8);
    });
    // 接口9
    const api9="/api/shopping/v1/restaurants/delivery_modes";
    this.$http.get(api9).then(data=>{
     _this.data9=data.data;
     console.log("data9"+_this.data9)
    });
    // 接口10//商家属性活动列表
    const api10="/api/shopping/v1/restaurants/activity_attributes";
    this.$http.get(api10).then(data=>{
      _this.data10=data.data;
      console.log("data10"+_this.data10)
      console.log("颜色"+_this.data10[2].icon_color)
    })
  }
};
</script>
<style scoped>
.warp {
  background-color: #fff;
}
.title {
  display: flex;
  border-bottom: 1px solid gray;
}
.tong {
  width: 33%;
  text-align: center;
  padding: 0.3rem 0;
  margin: 0.6rem 0;
}
.down {
  background-color: #fff;
}
.down-left {
  background-color: #ededed;
  /* border-left: 0.1rem solid gray; */
  /* border-right: 0.1rem solid gray; */
  width: 50%;
  float: left;
  /* border: 1px solid red; */
  /* opacity: 2; */
}
.down-right {
  overflow: hidden;
  width: 50%;
}
.scoll {
  /* border:1px solid red; */
  height: 23.3rem;
  width: 100%;
  overflow: scroll;
}
.scoll::-webkit-scrollbar {
  display: none;
}
.left-right {
  background-color: #fff;
  /* border-left: 0.1rem solid gray; */
  /* border-right: 0.1rem solid gray; */
  width: 100%;
  float: right;
  font-size: 0.5rem;
  border-bottom: 1px solid #ededed;
  padding: 1.25rem 0;
}
.yiguo,
.left-left {
  margin: 1.4rem 0;
  font-size: 0.8rem;
}
.tu {
  width: 1rem;
}
.shu {
  margin-left: 3.5rem;
  border: 1px solid #e4e4e4;
  background-color: #e4e4e4;
  border-radius: 0.4rem;
}
.shu2 {
  color: black;
  margin-right: 1rem;
}
.down-right .wen {
  padding-left: 0.5rem;
  color: black;
}
.panduan {

  padding-left: 0.5rem;
  /* border-bottom:1rem solid white; */
}
.paixu{
  width:200%;
  padding: 1.3rem;
  font-size: 1rem;
  /* border:0.2rem solid red; */
  background-color: #e4e4e4;
}
.paixu2{
  width:100%;
  margin-left: 0.2rem;
}
.paixu img{
width: 1.5rem;
}
.xuanzhuan>img{
  transform: rotateZ(-90deg)
}
.shaixuan{
  width: 200%;
  background-color:#fff;
 overflow: hidden;
}
.huodong{
  float: left;
  width: 30%;
  border: 0.05rem solid #e4e4e4;
  padding: 0.4rem 0;
  margin: 1rem 0.2rem;
}
.kuang{
  margin:0 0.2rem 0 0.2rem;
  border: 0.1rem solid;
  border-radius: 0.2rem;
  font-size: 0.6rem;
}
.kuang2{
  /* margin:0 0.2rem 0 0.2rem; */
  border-radius: 0.2rem;
  font-size: 0.6rem;
  width:0.8rem;
}
.hdzi{
  font-size: 0.6rem;
}
.peisong{
  margin: 1rem 0.6rem;
}
.tum{
  margin-left: 0.5rem;
}
.queding{
  width: 200%;
  border: 1px solid red;
  background-color:#e4e4e4;
  font-size: 2rem;
  /* float: right; */
  overflow: hidden;
}
.clickbtn{
  height: 3rem;
  width: 46%;
  border-radius:1rem; 
  background-color: rgb(44, 218, 116);
  float: right;
  margin-right: 0.6rem;
}
</style>