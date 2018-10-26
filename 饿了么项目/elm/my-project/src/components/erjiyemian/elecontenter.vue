<template>
    <div class="warp">
       <div class="title">
           <titleaaa/>
       </div>
       <div class="down">
           <!-- <pulldown :cli="updaMsg"/> -->
            <pulldown  :cli="updata"/>
       </div>
       <div class="content">
           <!-- <merchantlist :cli="cont"/> -->

           <merchantlist  :cli="aaa"/>
       </div>
        <div class="buttom">
           <wode/>
       </div>
      
    </div>
</template>
<script>
// 引入组件导航栏
import titleaaa from "@/components/elecontent/titleaaa"
// 引入组件下拉菜单
import pulldown from "@/components/elecontent/pulldown"
// 引入商家列表
import merchantlist from "@/components/elecontent/merchantlist"
// 引入下面的菜单栏
import wode from "@/components/elecontent/wode"
   export default {
    name:"elecontenter",
    // data(){
    //     return {
    //         // 随意写的数字,用于让子组件监听到更新
    //         cont:""
    //     }
    // },
    data(){
        return {
            aaa:3  //随意写个数字可以改变就行
        }
    },
    components:{
        titleaaa,
        pulldown,
        merchantlist,
        wode
    },
    // methods:{
    //     updaMsg(el){
    //         this.cont=el
    //     }
    // }
    methods:{
        updata(a){
            this.aaa=a
            console.log("我走了")
        }
    }
   } 
</script>
<style scoped>

   .title{
       width: 100%;
       height: 2.3rem;
       position:fixed;
       top: 0;
       left: 0;
       z-index: 3;
   } 
   
   .down{
       width: 100%;
       margin-top: 2.3rem;
       height: 3.2rem;
       position:fixed;
       top: 0;
       left: 0;
       z-index: 3;
   }
   .content{
       margin-top: 5.5rem;
   }
</style>