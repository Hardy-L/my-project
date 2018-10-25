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
          <div class="pandu" v-else-if="index==4">
        <div class="left-left" @click="dianji4(index)">
             <img class="tu" :src="'https://fuss10.elemecdn.com/'+down.image_url+'.jpeg'">
              <span class="wen">{{down.name}}</span>
              <span class="shu">{{down.count}}</span>
             </div>
      </div>
           <div class="pandu" v-else-if="index==7">
        <div class="left-left" @click="dianji4(index)">
             <img class="tu" :src="'//elm.cangdu.org/img/default.jpg'">
              <span class="wen">{{down.name}}</span>
              <span class="shu">{{down.count}}</span>
             </div>
      </div>



         <div class="panduan" v-else>
         <div class="left-left" @click="dianji4(index)">
             <img class="tu" :src="'https://fuss10.elemecdn.com/'+down.image_url+'.png'">
              <span class="wen">{{down.name}}</span>
              <span class="shu">{{down.count}}</span>
             </div>
       </div>


     </div>
   
 </div>
 <!-- ---------------------------------- -->
 <div v-show="value2">
     <div>
         <div v-if="1">智能排序</div>
         <div v-if="1"><span class="tu"></span> <span class="wen">餐饮便当</span></div>
     </div>
 </div>
 <!-- ---------------------------------- -->
 <div v-show="value3">
     <div>
         <div v-if="1">可达六十精神亢奋了</div>
         <div v-if="1"><span class="tu"></span> <span class="wen">餐饮便当</span></div>
     </div>
 </div>
 </div>
<!-- ---------------------------------- -->
 <div class="down-right">
       <div v-show="value4">
           <div v-for="(right,index) in arr" :key="index">
           <div class="left-right">
                    <span class="wen">{{right.name}}</span>
         <span class="shu">{{right.count}}</span>
         </div>
        </div>
  </div>
  
 </div>
 </div>
 </div>
</div>
</template>
<script>
export default {
  data: () => ({
    value1: false,
    value2: false,
    value3: false,
    value4: false,
    data8:[],
    arr:[]
  }),
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
      this.value2 = false;
      this.value2 = this.value4 = false;
    },
    dianji4: function(a) {
      this.value4 = false; 
      this.value4 = !this.value4;
      console.log(a);
      this.arr=this.data8[a].sub_categories;
      console.log(this.arr)
    }
  },
  created(){
      var _this = this;

    // 接口8
    const api8="https://elm.cangdu.org/shopping/v2/restaurant/category"
      this.$http.get(api8).then(data=>{
       _this.data8=data.data;
       console.log("获取到数据")
       console.log(_this.data8)
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
  background-color: rgb(201, 201, 204);
  border-left: 0.1rem solid gray;
  border-right: 0.1rem solid gray;
  width: 49%;
  float: left;
  border: 1px solid red;
  /* opacity: 2; */
}
.left-right {
  background-color: #fff;
  border-left: 0.1rem solid gray;
  border-right: 0.1rem solid gray;
  width: 49.5%;
  float: right;
  font-size: 0.5rem;
  border: 1px solid royalblue;
  padding: 1rem 0;
}
.yiguo,
.left-left {
  margin: 1.4rem 0;
}
.tu{
    width: 1rem;
}
</style>