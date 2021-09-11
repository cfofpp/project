<template>
<div class="likeHead" >
    <div class="imgbox" v-if="likeDataList">
        <img :src="headImg" alt="">
        <!-- <img v-if="likeDataList" :src="likeDataList[0].coverImgUrl" alt=""> -->
    </div>
    <div class="wordbox">
        <div class="title"  v-if="likeDataList">
            <span class="songs">歌单</span>
            {{this.songsName}}
        </div>
        <div class="userbox" >
            <img :src="headImg" alt="">
            <div class="name">{{this.nickname}}</div>
            <div class="createTime">{{this.createTime | formatData}}创建</div>
        </div>
        <div class="btn">
            <el-button type="danger" class="el-icon-caret-right" round>播放全部</el-button>
            <el-button  disabled class="el-icon-folder-add" round>收藏({{this.count}})</el-button>
            <el-button  class="el-icon-share" round>分享({{this.count}})</el-button>
            <el-button  class="el-icon-download" round>下载全部</el-button>
        </div>
        <div class="songSum" v-if="likeDataList">
            <div class="song">歌曲 : {{this.trackCount}}</div>
            <div>播放 : {{this.playCount}}</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            imgUrl:"../../../assets/images/geXing/星星.png",
            headImg:"../../../assets/默认头像.png",
            songsName:"加载中...",
            nickname:'加载中',
            headImg:'../../../assets/默认头像.png',
            createTime:999999999,
            count:999,
            trackCount:999,
            playCount:999

        }
    },
    props: {
        likeDataList: {
            type: Array,
            default () {
                return []
            }
        }
    },
    created(){
        console.log(this.likeDataList);
    },
    filters: {
        formatData(time) {
            let date = new Date(time);
            let y = date.getFullYear();
            let MM = date.getMonth() + 1;
            MM = MM < 10 ? ('0' + MM) : MM;
            let d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            let h = date.getHours();
            h = h < 10 ? ('0' + h) : h;
            return y + '-' + MM + '-' + d + ' ' + h;
        }
    },
    computed:{
        wacthcoverImgUrl(){
            return this.likeDataList
        }
    },
    watch:{
        wacthcoverImgUrl(val){
            this.songsName=val[0].name
            this.headImg=val[0].creator.avatarUrl
            this.nickname=val[0].creator.nickname
            this.createTime=val[0].createTime
            this.count=val[0].subscribedCount
            this.trackCount=val[0].trackCount
            this.playCount=val[0].playCount
        }
    }
}
</script>

<style scoped>
.likeHead {
    padding: 20px;
    display: flex;
    text-align: left;
    height: 200px;
    /* background-color: gray; */
}

.wordbox {
    padding-top: 20px;
    margin-left: 20px;
}

.wordbox .title {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
}

.wordbox .title .songs {
    display: inline-block;
    font-size: 12px;
    border-radius: 5px;
    line-height: 17px;
    font-weight: normal;
    color: red;
    padding: 1px 2px 1px 2px;
    border: 1px solid red;
}

.userbox {
    display: flex;
    align-items: center;
    font-size: 13px;
    margin-top: 10px;
    display: flex;
}

.userbox .name {
    color: skyblue;
}

.userbox div {
    padding-left: 10px;
}

.imgbox img {
    border-radius: 10px;
    width: 180px;
    height: 180px;
}
.el-avatar{
    border-radius: 10px;
    width: 180px;
    height: 180px;
}
.userbox img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
}

.btn {
    margin-top: 10px;
}
.btn button{
    height: 35px;
    padding-bottom: 15px;
}
.songSum{
    display: flex;
    font-size: 13px;
    line-height: 50px;
}
.songSum  .song{
    margin-right: 10px;
}
</style>
