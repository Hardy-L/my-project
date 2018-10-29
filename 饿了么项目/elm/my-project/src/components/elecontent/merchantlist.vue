<template>
<!--  商品列表-->
    <div>
        <!-- <titleaaa></titleaaa> -->
         <p class="fujin">附近商家</p>
       <div class="merchant-list">
        <p v-for="mls in data6" :key="mls.id" class="merchant-list-single">
         
          <router-link :to="{name:'store',params:{id:mls.id}}"><!-- btns(mls.id) -->
              <div class="flex">
                <img :src="'https://elm.cangdu.org/img/'+mls.image_path" alt="" class="flex-left">
                <div class="flex-right">
              <div class="flex-right-top mutual">
                <div class="flex-right-top-left"><span class="pinpai">品牌</span>
                <strong class="shoppingname">{{mls.name}}</strong>
                </div>
                <div class="flex-right-top-right">保准票</div>
              </div>
              <div class="flex-right-content mutual">
                <div class="flex-right-content-left">
                  <div class="block">
                       <span class="star"><el-rate v-model="mls.rating" disabled show-score text-color="#ff9900" score-template="{value}">
                   </el-rate></span>
                       <span class="yueshou">月售{{mls.recent_order_num}}单</span>
                   </div>
                </div>
                <div class="flex-right-content-right">
                 <span class="fengniao">蜂鸟专送</span> 
                 <span class="zhunshi">准时达</span>
                  </div>
              </div>
              <div class="flex-right-bottom mutual">
                <div class="flex-right-content-left">¥{{mls.float_minimum_order_amount}}起送/配送费约¥{{mls.float_delivery_fee}}</div>
                <div class="flex-right-tocontentp-right">
                  <span class="gongli">{{mls.distance}}/</span>
                  <span class="time">{{mls.order_lead_time}}</span>
                </div>
              </div>
              </div>
             </div>
            </router-link>
             </p>
             </div>
             <!-- <router-view></router-view> -->
             </div>
</template>
<script>
// import titleaaa from "./titleaaa";
export default {
  name: "merchantlist",
  data: () => ({
    data6: [],
    data6b: [],
    data6c: [],
    value5: 3.7,
    id: "",
    suoyouxinxi: [],
    sbdata: '',
    data: [],
    aaa:[]
  }),
  // 设置属性,便于监听这个属性是否更新
  props: ["cli", "cli2"],
  watch: {
    cli(news, olds) {
      this.data6 = this.data6b;
      this.id = news.id;
      this.data6 = this.data6.filter(function(val) {
        return val.category == news.el;
      });
    },
    cli2(news2, olds2) {

      var _this = this;
      _this.data6 = _this.data6b;
      var arrId = [];
      var storeMsg = [];
      var newArr;
       // 所有数据
      _this.data6.forEach((value, index) => {
        // console.log(value)
        for (var items of value.supports) {
          // console.log(items)
            news2.forEach(element => {

          if (items.name ==  element) {
            // console.log(123)
            //  console.log(this.sbdata)
            arrId.push(index);
           
             
           }
            
             
          });
       
        }  
          newArr=Array.from(new Set(arrId));
         console.log(newArr)
      });
      newArr.forEach(function(value) {
            storeMsg.push(_this.data6[value]);
             });
        console.log(storeMsg)
        _this.data6=storeMsg;
      
    },
    data6(news) {
      console.log(news);
    },
    id() {
      var _this = this;
      var api6 = "https://elm.cangdu.org/shopping/restaurants";

      this.$http
        .get(api6, {
          params: {
            latitude: 31.22967,
            longitude: 121.4762,
            limit: 100,
            order_by: _this.id
          }
        })
        .then(function(data) {
          //关闭加载提示
          // loadingInstance1.close();
          // 成功后的回调
          console.log("成功了....");
          //展示所有商店名
          console.log(data);
          _this.data6 = data.data;
          
          console.log(_this.data6);
          _this.data6b = data.data;
        });
    }
  },
  created() {
    // 接口 6
    var _this = this;
    var api6 = "https://elm.cangdu.org/shopping/restaurants";

    this.$http
      .get(api6, {
        params: {
          latitude: 31.22967,
          longitude: 121.4762,
          limit: 20,
          order_by: _this.id
        }
      })
      .then(function(data) {
        //关闭加载提示
        // loadingInstance1.close();
        // 成功后的回调
        console.log("成功了....");
        //展示所有商店名
        _this.data6 = data.data;
        console.log(_this.data6);
        _this.data6b = data.data;
        
        _this.suoyouxinxi = _this.data6b[0].supports[1].name;
        console.log("所有信息" + _this.suoyouxinxi);
      });
  }
};
</script>
<style scoped>
.flex {
  overflow: hidden;
  /* border:1px solid red; */
}
.merchant-list {
  margin: 0.8rem 0.8rem 0 0.4rem;
}
.flex-left {
  float: left;
  width: 20%;
  padding: 1%;
  /* border:1px solid blue; */
}
.flex-right {
  float: right;
  width: 76%;
}
.mutual {
  overflow: hidden;
  /* border:1px solid blueviolet; */
}
.flex-right-top-left {
  float: left;
}
.flex-right-top-right {
  float: right;
  color: gray;
  font-size: 0.1rem;
}
.pinpai {
  color: black;
  /* border: 1px solid black; */
  background-color: yellow;
  font-size: 0.1rem;
  border-radius: 0.3rem;
  padding: 0 0.3rem;
  margin: 0 0.8rem 0 0;
}
.shoppingname {
  color: black;
  font-size: 0.5em;
}
.flex-right-content {
  margin: 0.3rem 0;
}
flex-right-content-left {
  float: left;
}
flex-right-content-right {
  float: right;
}
.star {
  float: left;
}
.yueshou {
  float: left;
  color: rgb(68, 65, 65);
  font-size: 0.06em;
}
.fengniao {
  background-color: rgba(0, 26, 255, 0.952);
  color: white;
  font-size: 0.06rem;
}
.zhunshi {
  border: 0.1rem solid rgba(0, 17, 255, 0.884);
  color: rgba(0, 26, 255, 0.952);
  font-size: 0.06rem;
}
.fujin {
  margin: 0.4rem;
  font-size: 1rem;
  color: gray;
}
.flex-right-content-left {
  float: left;
  color: rgb(68, 65, 65);
  font-size: 0.06rem;
}
.flex-right-content-right {
  float: right;
}
.gongli {
  color: rgb(68, 65, 65);
  font-size: 0.06rem;
}
.time {
  color: rgba(0, 26, 255, 0.952);
  font-size: 0.06rem;
}
</style>
<style>
<style > .el-rate__item {
  width: 0.001rem;
}
.el-rate__icon {
  font-size: 0.001rem;
  margin: 0;
}
.el-rate__text {
  font-size: 0.001rem;
}
</style>
