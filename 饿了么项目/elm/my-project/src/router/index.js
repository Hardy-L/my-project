import Vue from 'vue'
import Router from 'vue-router'
import Huntsite from '../components/elm/huntsite'
import Home from '../components/elm/home'
import Store from '../components/elm/store'
import elecontent from "../components/elecontent/elecontent";
import seatch from "../components/elecontent/seatch";
import orderfrom from "../components/elecontent/orderfrom";
import myele from "../components/elecontent/myele";
import merchantlist from "../components/elecontent/merchantlist";
import titleaaa from "../components/elecontent/titleaaa";
import slide from "../components/elecontent/slide";
import Aaa from "../components/elecontent/aaa";
import elecontenter from "@/components/erjiyemian/elecontenter";
Vue.use(Router)

export default new Router({
  routes: [
    {
       path:'/',
       component:Home
    },
    {
      path:'/home',
      component:Home
    },
    {
      path: '/huntsite/:id?',
      component: Huntsite
    },{
      path:'/store',
      component:Store
    }
    // , {
    //   path: "/",
    //   component:Aaa
    // }
    ,
    {
      path: "/Aaa",
      component:Aaa
    },
    {
      path: "/elecontent",
      // name: "elecontent",
      component: elecontent
    },
    {
      path: "/seatch",
      // name: "seatch",
      component: seatch
    },
    {
      path: "/orderfrom", //跳转地址
      // name: "orderfrom",
      component: orderfrom
    },
    {
      path: "/myele",
      // name: "myele",
      component: myele
    },
    {
      path: "/merchantlist",
      // name: "merchantlist",
      component: merchantlist
    },
    {
      path: "/titleaaa",
      // name: "titleaaa",
      component: titleaaa
    },
    {
      path: "/slide",
      // name: "slide",
      component: slide
    },
    {
      path: "/elecontenter",
      name: "elecontenter",
      component: elecontenter
    }
  ]
})
