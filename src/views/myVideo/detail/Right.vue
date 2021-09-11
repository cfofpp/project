<template>
<div class="right">
  <div class="box">
    <!-- 推荐视频列表 -->
    <recomment-video-item :recommentVideo="recommentVideo" />
  </div>
</div>
</template>

<script>
import RecommentVideoItem from '@/views/myVideo/detail/childern/RecommentVideoItem'
export default {
  components: {
    RecommentVideoItem
  },
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
      recommentVideo: []
    }
  },
  created() {
    this.getRecomment();
  },
  methods: {
    async getRecomment() {
      const res = await this.$http.get(`/related/allvideo?id=${this.id}`)
      console.log(res);
      this.recommentVideo = res.data.data
    }
  },
  //监听路由变化刷新页面数据
  watch: {
    $route(val) {
       this.getRecomment();
    }
  }
}
</script>

<style lang="less" scoped>

</style>
