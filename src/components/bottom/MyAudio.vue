<template>
<div class="audio">
    <div class="left" v-if="$store.state.currentXinxi">
        <img
        :src="headImg" alt="">
        <div v-if="this.$store.state.currentXinxi" class="name">
            <div>{{this.songName}}</div>
            <div>{{this.authorName}}</div>
        </div>
    </div>
    <!-- <audio v-if="this.$store.state.currentUrl" autoplay controls loop :src="this.$store.state.currentUrl">
    </audio> -->
    <audio :src="musicUrl" autoplay controls loop/>
    <div class="right">
        <img src="../../assets/images/geXing/音量.png" alt="">
        <el-slider v-model="value1"></el-slider>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            //默认值
            url: "http://m801.music.126.net/20210706183917/b4c3f7354ec8b82331b2c4c7bb7150b3/jdymusic/obj/w5zDlMODwrDDiGjCn8Ky/2104534168/88ed/3fa3/829b/db45ac96181ab977256870aa0cf84168.mp3",
            value1: 0,
            headImg:"../../assets/images/touxiang.jpg",
            musicUrl:"../../assets/audio/horse.mp3",
            songName:'未知',
            authorName:'未知'
        }
    },
    created(){
        console.log(this.$store.state.currentXinxi);
    },
    computed:{
        getNameData(){
            return this.$store.state.currentXinxi
        },
        getAudioData(){
            return this.$store.state.currentUrl
        },
    },
    watch:{
        //监听vuex数据变化
        getNameData(val){
           console.log(val);
            this.songName=val.name
            // if(val.artists[0].img1v1Url){
            //     this.headImg=val.artists[0].img1v1Url
            // }else{
            //     this.headImg=val.al.picUrl
            // }
            //使用try cacth抛出异常
           try{
               this.headImg=val.al.picUrl==null?val.artists[0].img1v1Url:val.al.picUrl
           }catch(err){
               console.log(err);
           }
          //因为获取地址不一样通过三元判断
        //   if(val.artists[0].name){
        //       this.authorName=val.artists[0].name
        //   }else{
        //       this.authorName=val.ar[0].name
        //   }
          try{
               this.authorName=val.ar[0].name==null?val.artists[0].name:val.ar[0].name
          }catch(err){
              console.log(err);
          }
        },
        getAudioData(val){
            this.musicUrl=val
        }
    }
}
</script>

<style scoped>
.audio {
    /* padding: 10px 0 10px 0; */
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* position: relative; */
}

audio {
    height: 40px;
    width: 500px;
    /* background-color: white; */
    /* color: white; */
}

.left {
    /* position: absolute; */
    /* left: 20px; */
    font-size: 14px;
    width: 160px;
    padding-left: 10px;
    display: flex;
    text-align: left;
    align-items: center;
    /* justify-content: center; */
}

.left .name>div {
    white-space: nowrap;
    margin-left: 10px;
    line-height: 30px;
}

.el-slider {
    width: 100px;
}

.left img {
    width: 50px;
    height: 50px;
    border-radius: 7px;
}

.right {
    display: flex;
    align-items: center;
    padding-right: 15px;
}

.right img {
    padding-right: 10px;
    width: 30px;
    height: 30px;
}
</style>
