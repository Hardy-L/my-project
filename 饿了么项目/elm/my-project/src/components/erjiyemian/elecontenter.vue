<template>
    <div class="warp">
       <div class="title">
           <titleaaa :title="$route.params.value"></titleaaa>
       </div>
       <div class="down">
           <pulldown :cli="updaMsg" :cli2="updaMsg2"/>
       </div>
       <div class="content">
           <merchantlist :cli="cont" :cli2="aaa"/>
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
    data(){
        return {
            // 随意写的数字,用于让子组件监听到更新
            cont:{},
            // 路由
            rout:"",
            getId:1,
            ogg:"快餐便当/简餐",
            aaa:"",
        }
    },
    created(){
        var a = this.$route.params.value
        this.rout = a
    },
    components:{
        titleaaa,
        pulldown,
        merchantlist,
        wode
    },
    methods:{
        updaMsg(el){
            console.log(typeof el)
            if (typeof el == "number"){
                this.getId = el
            }else{
                this.ogg=el
            }


            var a ={
                el:this.ogg,
                id:this.getId
            }
            this.cont=a
            console.log("aaa"+a)
        },
        updaMsg2(lc){
            console.log(lc+"qqqqqqqqqqqqqqqqq")
            this.aaa=lc;
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