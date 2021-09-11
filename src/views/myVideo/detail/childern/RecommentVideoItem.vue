<template>
<div class="box">
  <div class="item" @click="VideoClick(item.vid)"  v-for="(item,index) in recommentVideo" :key="index">
    <div class="img">
      <img :src="item.coverUrl" alt="">
      <div class="playCount">{{item.durationms | playNums}}</div>
      <div class="time">{{item.playTime | toHHmmss}}</div>
    </div>
    <div class="contentBox">
      <div class="title">{{item.title}}</div>
      <div class="name">by {{item.creator[0].userName}}</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    recommentVideo: {
      type: Array,
      default () {
        return []
      }
    }
  },
  created() {
    console.log(this.recommentVideo);
  },
  methods:{
    //点击推荐视频携带id跳转刷新页面
    VideoClick(vid){
     this.$router.push({path:`/home/videoDatel/${vid}`})
    }
  },
   filters: {
    //视频时长
    toHHmmss(data) {
      var s;
      var minutes = parseInt((data % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = (data % (1000 * 60)) / 1000;
      s = (minutes < 10 ? ('0' + minutes) : minutes) + ':' + (seconds < 10 ? ('0' + seconds.toFixed(0)) : seconds.toFixed(0));
      return s;
    },
    //转化单位万
     playNums(num) {
            return num < 10000 ? num : (num / 1000).toFixed(1) + '万'
        }
  }
}
</script>

<style lang="less" scoped>
.box {
  padding-left: 40px;
}

.item {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.item:hover{
  cursor: pointer;
}
.item .img img {
  width: 170px;
  height: 100px;
  border: 1px solid ghostwhite;
  border-radius: 7px;
}
.img{
  position: relative;
    color: white;
    font-size: 13px;
}
.img .playCount{
  position: absolute;
  right: 5px;
  top: 10px;
}
.img .time{
  position: absolute;
  right: 5px;
  bottom: 10px;
}
.contentBox{

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 10px;
}
.contentBox .title {
  line-height: 20px;
display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;
overflow: hidden;
  font-size: 13px;
}
.name{
  color: #676767;
  font-size: 12px;
}
</style>
