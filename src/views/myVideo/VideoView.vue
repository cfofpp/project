<template>
<div class="video">
    <video-head />
    <video-tags @tagsClick="tagsClick" class="tags" :arr='arr' />
    <video-list-item :videoList="videoList" />
</div>
</template>

<script>
import VideoTags from '@/views/myVideo/children/VideoTags'
import VideoHead from './VideoHead.vue'
import VideoListItem from '../../components/videoList/VideoListItem.vue'
export default {
    components: {
        VideoHead,
        VideoTags,
        VideoListItem
    },
    data() {
        return {
            arr: [],
            //默认获取视频列表的id
            defid: 58100,
            videoList:[]
        }
    },
    created() {
        //获取标签
        this.getVideoTags()
        //获取视频列表
        this.getVideoList(this.defid)
    },
    methods: {
        //获取视频标签列表
        async getVideoTags() {
            const res = await this.$http.get("/video/group/list")
            console.log(res.data.data);
            //通过slice截取数组
            this.arr = res.data.data.slice(0, 10)
        },
        //获取视频列表数据
        //获取token验证已经登录
        async getVideoList(id) {
            // window.localStorage.getItem("getP")
            // let token = this.$store.state.token
          const res = await this.$http.get(`/video/group`,{params:{id:id}})
          this.videoList=res.data.datas
          console.log(this.videoList);
        },
        //$emit传过来的id
        tagsClick(id) {
            this.getVideoList(id)
        }
    }
}
</script>

<style scoped>
.tags {
    width: 100%;
}
</style>
