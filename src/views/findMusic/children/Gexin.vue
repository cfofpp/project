<template>
<div class="geixin">
    <!-- 轮播图 -->
    <swiper :swiperList="swiperList" />
    <!-- 推荐歌单 -->
    <div class="recommend">
        <div class="title">
            <div>推荐歌单</div>
            <i class="el-icon-arrow-right"></i>
        </div>
        <div class="recommendSongBox">
            <recommend-song :recommendList="recommendList" />
        </div>
    </div>
</div>
</template>

<script>
import Swiper from '@/components/swiper/Swiper'
import RecommendSong from '../../../components/RecommendSong.vue'
export default {
    data() {
        return {
            swiperList: [],
            recommendList: []
        }
    },
    components: {
        Swiper,
        RecommendSong
    },
    //页面创建后获取数据
    created() {
        this.getFindSwiper()
        this.getRecommendList()
    },
    mounted() {

    },
    methods: {
        //获取轮播图
        async getFindSwiper() {
            const res = await this.$http.get("/banner")
            console.log(res.data.banners);
            this.swiperList = res.data.banners
            console.log(res);

        },
        //获取推荐歌单
        async getRecommendList() {
            //生成随机数
            const num = (Math.random() * 100).toFixed(0);
            await this.$http.get(`/top/playlist?offset=${num}&limit=20`).then(res => {
                console.log(res.data.playlists);
                this.recommendList = res.data.playlists
            })
        },

    }
}
</script>

<style scoped>
.recommend {
    padding: 20px;
    overflow-y: hidden;
}

.recommend .title {
    font-size: 20px;
    /* font-weight: bold; */
    display: flex;
    align-items: center;
    line-height: 40px;
}

.title div {
    margin-right: 10px;
}
</style>
