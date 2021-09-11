<template>
<div class="head">
  <div class="left-box">
    <div class="img">
      <img src="../assets/logo.png" alt="">
    </div>
  </div>
  <div class="right-box">
    <div class="box-left">
      <div class="arrow-left" @click="goPre">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="arrow-right" @click="goNext">
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <div class="box-center">
      <input type="text" ref="inpu" @input="searchWord" @blur="hid" @focus="sele" @keydown.13="search" v-model="input" placeholder="搜索">
      <i class="el-icon-search dd"></i>
      <div class="litenSong">
        <i class="el-icon-microphone"></i>
      </div>
      <select-h class="sel" v-show="isShow" />
    </div>

    <!-- 点击显示隐藏退出按钮 -->
    <div class="box-right" @click="showBackfun">
      <div class="userHead">
        <img :src="user.avatarUrl" alt="">
      </div>
      <div class="uname">{{user.nickname}}</div>
      <div class="btIcon"><i class="el-icon-arrow-down"></i></div>
      <div class="vip">开通VIP</div>
      <back-login v-show="showBack" class="backLogin" />
    </div>

  </div>
</div>
</template>

<script>
import SelectH from '@/components/SelectH'
import BackLogin from '@/components/selectBack/BackLogin'
import {
  getHotWordSongs
} from '../nextwork/geXing.js'
// import {
//   debounce
// } from '../nextwork/utile'
 //搜索设置防抖函数
 function debounce(fn,time){
    let timeout
     return function(){
         clearTimeout(timeout)
        timeout=setTimeout(()=>{
            fn.apply(this,arguments)
        //  console.log(fn);
        },time)
     }
 };
export default {
  components: {
    BackLogin,
    SelectH
  },
  data() {
    return {
      input: '',
      user: {},
      showBack: false,
      isShow: false
    }
  },
  methods: {
    searchWord : debounce(function () {
      console.log("发送请求");
    }, 1000)
    //搜索输入时获取数据
    
,
    //回车搜索
    search() {
      //  const val =  await getHotWordSongs(JSON.stringify(this.input))
      //  console.log(val);
      this.isShow = false
      // console.log(this.$refs.inpu);
      this.$router.push(`/detail/${this.input}`)
    },
    showBackfun() {
      this.showBack = !this.showBack
    },
    //控制路由上下跳转
    goPre() {
      this.$router.go(-1)
      //    console.log("sss");
    },
    goNext() {
      this.$router.go(+1)
    },
    //显示
    sele() {
      this.isShow = true

    },
    //隐藏热门列表
    hid() {
      setTimeout(() => this.isShow = false, 500)
    }
  },
  created() {
    this.user = this.$store.state.profile
  },

}
</script>

<style scoped>
.head {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  /* padding-left: 20px; */
  background-color: #EC4141;
}

.left-box .img {
  display: flex;
  align-items: center;
}

.left-box .img img {
  height: 30px;
}

.left-box {
  padding-left: 10px;
}

.right-box {
  display: flex;
  align-items: center;
  margin-left: 70px;

}

.btIcon {
  margin-left: 10px;
}

.box-left {
  margin-right: 20px;
}

.right-box .box-left {
  display: flex;
}

.arrow-left,
.arrow-right {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 11px;
  width: 27px;
  height: 27px;
  line-height: 60px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.07);
}

.box-center input {
  line-height: 30px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.07);
  color: white;
  border: 0;
  width: 130px;
  padding: 0 30px;
  outline: 0;
}

.box-center {
  height: 30px;
  position: relative;
  display: flex;
}

.dd {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translate(0, -50%);
}

.box-center input::-webkit-input-placeholder {
  color: gainsboro;
  font-size: 10px;
}

.litenSong {
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  line-height: 60px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.07);
}

.userHead {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
}

.userHead img {
  border-radius: 50%;
  height: 30px;
  width: 30px;
}

.box-right {
  position: relative;
  padding-left: 100px;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ghostwhite;
}

.backLogin {
  border-radius: 10px;
  position: absolute;
  z-index: 999;
  left: 100px;
  top: 125%;
}

.uname:hover {
  color: gainsboro;
}

.vip {
  margin-left: 10px;
}

.sel {
  position: absolute;
  z-index: 999;
  top: 30px;
  right: 0px;
}
</style>
