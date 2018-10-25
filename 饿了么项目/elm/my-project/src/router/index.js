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
/* 雷雨晴*/
import Login from '../components/elecontent/lyq/login'
import Cleal from '../components/elecontent/lyq/cleal'
import Clealy from '../components/elecontent/lyq/clealy'
import Clealj from '../components/elecontent/lyq/clealj'
import Infodata from '../components/elecontent/lyq/info-data'
import Infointegral from '../components/elecontent/lyq/info-integral'
import Infomembers from '../components/elecontent/lyq/info-members'
import Myorder from '../components/elecontent/lyq/myorder'
import Myorder_two from '../components/elecontent/lyq/myorder-two'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },{
      path:'/elecontenter',
      component:elecontenter
    },
    {
      path: '/huntsite/:id?',
      component: Huntsite
    }, {
      path: '/store',
      component: Store
    },
    {
      path: "/Aaa",
      component: Aaa
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
    }, {
      path: '/login',
      component: Login
    }, {
      path: '/cleal',
      component: Cleal
    }, {
      path: '/clealy',
      component: Clealy
    }, {
      path: '/info_data',
      component: Infodata
    }, {
      path: '/info_integral',
      component: Infointegral
    }, {
      path: '/info_members',
      component: Infomembers
    }, {
      path: '/clealj',
      component: Clealj
    }, {
      path: '/myorder_two',
      component: Myorder_two
    }, {
      path: '/myorder',
      component: Myorder
    }
  ]
})
