<template>
<div>
    <!-- 歌单详情 -->
    <div class="songsDateil">
        <div class="imgbox">
            <img :src="this.obj.imgUrl" alt="">
        </div>
        <div class="wordbox">
            <div class="title">
                <span class="songs">歌单</span>
                {{this.obj.songsName}}
            </div>
            <div class="userbox">
                <img :src="obj.headImg" alt="">
                <div class="name">{{this.obj.nickname}}</div>
                <div class="createTime">{{this.obj.createTime | formatData}}创建</div>
            </div>
            <div class="btn">
                <el-button type="danger" class="el-icon-caret-right" round>播放全部</el-button>
                <el-button disabled class="el-icon-folder-add" round>收藏({{this.obj.count}})</el-button>
                <el-button class="el-icon-share" round>分享({{this.obj.trackCount}})</el-button>
                <el-button class="el-icon-download" round>下载全部</el-button>
            </div>
            <div class="tagBOX">标签 : <span class="tag" v-for="(item,index) in this.obj.tag" :key='index'>{{item}}/</span></div>
            <div class="songSum">
                <div class="song">歌曲 : {{this.obj.trackCount}}</div>
                <div>播放 : {{this.obj.playCount}}</div>
            </div>
            <div class="dateil">简介 : {{this.obj.description}}</div>
        </div>
    </div>
    <!-- 歌曲列表 -->
    <songs-list-commen :playlist='playlist' />
</div>
</template>

<script>
import songsListCommen from '../../commen/songListCommen/songsListCommen'
import {
    getSongListDetail
} from '../../nextwork/geXing.js'
export default {
    components: {
        songsListCommen
    },
    data() {
        return {
            id: null,
            playlist: {},
            //默认值
            obj: {
                imgUrl: "../../../assets/images/geXing/星星.png",
                headImg: "../../../assets/默认头像.png",
                songsName: "加载中...",
                nickname: '加载中',
                headImg: '../../../assets/默认头像.png',
                createTime: 999999999,
                count: 999,
                trackCount: 999,
                playCount: 999,
                description: ".....",
                tag: ["华语", "流行", "夜晚"],
            }
        }
    },
    filters: {
        //过滤时间
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
    created() {
        // console.log(this.$route.params.id);
        //点击歌单传过来的id
        this.id = this.$route.params.id
        this.getSongListDetail(this.id)
    },
    methods: {
        //根据穿过来的id加载页面发送网络请求
        //  const res= await this.$http.get(`/playlist/detail?id${id}`)
        async getSongListDetail(id) {
            await getSongListDetail(id).then(res => {
                console.log(res);
                //获取到数据后将数据传给obj
                this.obj = res
                //将歌单传给歌曲列表
                this.playlist = res.playlist
            })
        },
    },
    watch: {
        //通过上面给obj赋值进行监听
        obj(val) {
            //监听页面数据加载，加载成功赋值动态数据
            this.obj.imgUrl = val.playlist.coverImgUrl
            this.obj.songsName = val.playlist.name
            this.obj.headImg = val.playlist.creator.avatarUrl
            this.obj.nickname = val.playlist.creator.nickname
            this.obj.createTime = val.playlist.createTime
            this.obj.count = val.playlist.commentCount
            this.obj.trackCount = val.playlist.trackCount
            this.obj.tag = val.playlist.tags
            this.obj.playCount = val.playlist.playCount
            this.obj.description = val.playlist.description
        }
    }

}
</script>

<style scoped>
.songsDateil {
    font-size: 13px;
    padding: 20px;
    display: flex;
    text-align: left;
    height: 200px;
    /* background-color: gray; */
}

.wordbox {
    padding-top: 5px;
    margin-left: 20px;
}

.tagBOX {
    font-size: 13px;
    margin-top: 20PX;
}

.wordbox .title {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
}

.tag {
    font-size: 13px;
    color: skyblue;
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

.el-avatar {
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

.btn button {
    height: 35px;
    padding-bottom: 10;
}

.songSum {
    display: flex;
    font-size: 13px;
    line-height: 50px;
}

.songSum .song {
    margin-right: 10px;
}

.dateil {
    /* font-size: 13px; */
    color: #201E1E;
    margin-top: -10px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    line-height: 13px;
    overflow: hidden;
    -webkit-line-clamp: 1;
    opacity: 0.75;
}

.dateil:hover {
    -webkit-line-clamp: 0;
    line-height: 14px;
    overflow: visible;
    opacity: 1;
}
</style>
