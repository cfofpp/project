<template>
<div class="videoItem">
  <div @click="videoDatel(item)" v-for="(item,index) in videoList" :key="index" class="item">
      <div class="playCount">
          <img src="../../assets/images/playV.png" alt="">
          <div >{{item.data.playTime | playNums}}</div>
      </div>
      <div class="play">
          <img src="../../assets/images/play.png" alt="">
      </div>
    <img :src="item.data.coverUrl" alt="">
    <div class="title">{{item.data.title}}</div>
    <div class="name">by&nbsp;{{item.data.creator.nickname}}</div>
     <div class="songsTime">{{item.data.durationms | toHHmmss}}</div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    videoList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data() {
    return {

    }
  },
  methods: {
    //点击跳转视频详情页并且传送视频id
      videoDatel(data){
          const vid=data.data.vid
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

<style scoped>
.videoItem {
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
  align-content: flex-start;
}

.item {
    position: relative;
  width: 260px;
  margin-right: 20px;
  margin-bottom: 60px;
  height: 160px;
  border-radius: 7px;
  background-color: blanchedalmond;
}
.item:hover .play{
    display: block;
    cursor: pointer;
}
.item img {
  width: 100%;
  height: 100%;
  border-radius: 7px;
}

.item .title {
  padding-left: 5px;
  text-align: left;
  margin-top: 10px;
  line-height: 14px;
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

}

.item .name {
  padding-left: 5px;
  line-height: 25px;
  text-align: left;
  font-size: 10px;
  color: rgba(0, 0, 0, .3);
}
.item .songsTime{
    position: absolute;
    right: 10px;
    bottom: 15px;
    font-size: 13px;
    color: white;
}
.item .playCount{
    position: absolute;
    display: flex;
    align-items: center;
    right: 10px;
    top: 10px;
    font-size: 13px;
    color: white;
}
.item .playCount img{
    width: 18px;
    height: 18px;
}
.item .play{
    position: absolute;
    display: none;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.item .play img{
    width: 40px;
    height: 40px;
}
.item:nth-child(3n+0) {
  margin-right: 0;
}
</style>
