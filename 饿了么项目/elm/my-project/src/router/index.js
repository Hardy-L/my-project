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
import Myorder_text from '../components/elecontent/lyq/myorder_text'
/*账户信息 */
import Login_account from '../components/elecontent/lyq/login_account'
import Account_newaddress from '../components/elecontent/lyq/account_newaddress'
import Account_username from '../components/elecontent/lyq/account_username'
import Account_loginpassword from '../components/elecontent/lyq/account_loginpassword'
import Account_editoraddress from '../components/elecontent/lyq/account_editoraddress'
import VipDescription from '../components/elecontent/lyq/vipDescription'
import VipinvoiceRecord from '../components/elecontent/lyq/vipinvoiceRecord'
import VipuseCart from '../components/elecontent/lyq/vipuseCart'
import Payment from '../components/elecontent/lyq/payment'
import useCart from '../components/elecontent/lyq/useCart'
import Shops from "../components/elm/shops.vue";
import Shopsafe from "../components/elm/shopsafe.vue";
import Deta from '../components/elm/deta.vue'
// >>>>>>> 84b04fe8ec37ef69eea6705845d13c4d565668bb
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    }, {
      path: '/elecontenter',
      component: elecontenter,
      name:'elecontenter'
    },
    {
      path: '/huntsite/:id?',
      component: Huntsite
    }, {
      path: '/store/:id?',
      name: 'store',
      component: Store
    },
    {
      path: "/Aaa",
      name:'Aaa',
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
      name: "myele",
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
    }, {
      path: "/login_account",
      component: Login_account
    }, {
      path: "/account_newaddress",
      component: Account_newaddress
    }, {
      path: "/account_username",
      component: Account_username
    }, {
      path: "/account_loginpassword",
      component: Account_loginpassword
    },{
      path:"/account_editoraddress",
      component:Account_editoraddress
    },{
      path:'/vipuseCart',
      component:VipuseCart
    },{
      path:'/vipDescription',
      component:VipDescription
    },{
      path:'/vipinvoiceRecord',
      component:VipinvoiceRecord
    },{
      path:"/myorder_text",
      component:Myorder_text,
      name:"Myorder_text"
    },{
      path:"/payment",
      component:Payment
    },{
      path:"/useCart",
      component:useCart
    },
    {
      path:'/shops/:id?',
      name:'shops',
      component:Shops
    },{
      path:'/shopsafe',
      component:Shopsafe
    },{
      path:'/deta',
      name:'deta',
      component:Deta
    }

  ]
})
