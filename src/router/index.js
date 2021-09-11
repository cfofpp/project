import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = ()=>import('../views/Login.vue')
const Home = ()=>import("@/views/Home")
const FindPage = ()=>import('@/views/findMusic/FindPage')
const Gexin =()=>import("@/views/findMusic/children/Gexin")
const MessageLogin = ()=>import("@/MessageLogin")
const MeLike = ()=>import("@/views/likeMusic/MeLike")
const VideoView  = ()=>import("@/views/myVideo/VideoView")
const SongsDateil = ()=>import("../views/songsDateil/SongsDateil.vue")
const Detail =()=>import('../views/search/Detail.vue')
const SongsD =()=>import('../views/findMusic/children/SongsD.vue')
const TopList =()=>import('../views/findMusic/children/TopList.vue')
const VideoDatel =()=>import('@/views/myVideo/VideoDatel') 
Vue.use(VueRouter)

const routes = [
    {
    path:'/',
    component: Login,
  },
  {
    path:'/login',
    component: Login,
  },
  {
    path:'/messageLogin',
    component:MessageLogin
  },
  {
    path:'/home',
    component: Home,
    redirect: '/home/findPage/gexin',
    children: [{
      path:'/',
      redirect:'/findPage'
    },
    // 视频
    {
      path:'videoView',
      component:VideoView
    },
    //视频详情
    {
      path:'videoDatel/:vid',
      component:VideoDatel
    },
    {
      path:"/songsDateil/:id",
      component:SongsDateil
    },
    {
      path:'/detail/:val',
      component:Detail
    },
    {
      path:"meLike",
      component:MeLike
    },{
      path: 'findPage',
      component: FindPage,
      children: [
        {
          path:'/',
          redirect:'/gexin'
        },
        {
        path:'gexin',
        component: Gexin,
      },
      //排行榜
    { 
      path:'topList',
      component:TopList
    },
      {
        path:'songsD',
        component: SongsD,
      }
    ]
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
