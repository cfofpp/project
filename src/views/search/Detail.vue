<template>
<div class="detail">
    <div class="title">找到{{songs.songCount}}首单曲</div>
    <ul class="nav">
        <li :class="{active:currentIndex==index}" @click="itemClick(index)" v-for="(item,index) in arr" :key="index">{{item}}</li>
    </ul>
    <song-all-list :playlist="songs" />
</div>
</template>

<script>
import {
    getHotWordSongs
} from '../../nextwork/geXing.js'
import SongAllList from '@/views/search/SongAllList'
export default {
    components: {
        SongAllList
    },
    data() {
        return {
            arr: ['单曲', '歌手', '专辑', '视频'],
            currentIndex: 0,
            hotWord: '',
            songs: {}
        }
    },
    created() {
        // console.log(this.$route.params.val);
        //路由传过来的搜索词
        this.hotWord = this.$route.params.val
        this.getHotWordSongs(this.hotWord)
    },
    //获取路由传参
    computed:{
        watchWord(){
            return this.$route.params.val
        }
    },
    //监听路由参数变化，变化之后刷新页面数据
    watch:{
        watchWord(val){
            this.hotWord=val
            this.getHotWordSongs(this.hotWord)
        }
    },
    methods: {
        //根据热词获取匹配歌曲
        async getHotWordSongs(val) {
            const {result: res} = await getHotWordSongs(val)
            this.songs = res
        },
        //点击添加样式
        itemClick(i) {
            this.currentIndex = i
        }
    }
}
</script>

<style scoped>
.detail {
    text-align: left;
    padding: 30px;
}

.title {
    font-weight: bold;
}

.nav {
    display: flex;
    /* flex-wrap: nowrap; */
    margin-top: 50px;
}

.nav li {
    margin-right: 30px;
}

.active {
    font-weight: bold;
    padding-bottom: 17px;
    border-bottom: 3px solid #EC4141;
}
</style>
