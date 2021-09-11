<template>
<div class="left" v-if="video">
  <!-- 视频播放器 -->
  <div class="video">
    <video :src="url" controls="controls">
    </video>
  </div>
  <!-- 用户头像名称 -->
  <div class="user">
    <img v-if="video.creator.avatarUrl" :src="video.creator.avatarUrl" alt="">
    <div class="name">{{video.creator.nickname}}</div>
    <el-button class="btn" size="small" round>关注</el-button>
  </div>
  <div class="title">{{video.title}}</div>
  <div class="playCount">发布：{{video.publishTime | formatData}} 播放：{{video.durationms}}次</div>
  <div class="tags">
    <div class="tag" v-for="(item,index) in video.videoGroup" :key="index">{{item.name}}</div>
  </div>
  <el-row class="row">
    <el-button size="medium" round>赞({{video.durationms}})</el-button>
    <el-button size="medium" round>收藏({{video.subscribeCount}})</el-button>
    <el-button size="medium" round>分享({{video.shareCount}})</el-button>
  </el-row>
  <!-- 发送 -->
  <comment-send :num="video.commentCount" />
  <!-- 评论列表 -->
  <comment :comment="comment" />
</div>
</template>

<script>
import CommentSend from '../../../commen/comment/children/CommentSend.vue'
import Comment from '@/commen/comment/Comment'
export default {
  components: {
    CommentSend,
    Comment
  },
  props: {
    video: {
      type: Object,
      default () {
        return {}
      }
    },
    id: {
      type: String
    }
  },
  data() {
    return {
      url: '',
      comment: {}
    }
  },
  created() {
    this.getVideoUrl()
    this.getComment()
  },
  methods: {
    // 获取视频链接
    async getVideoUrl() {
      const res = await this.$http.get(`/video/url?id=${this.id}`)
      // console.log(res);
      this.url = res.data.urls[0].url
    },
    //获取该视频评论
    async getComment() {
      const res = await this.$http.get(`/comment/video?id=${this.id}`)
      console.log(res);
      this.comment = res.data
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
      return y + '-' + MM + '-' + d;
    }
  },
  //监听路由变化刷新页面数据
  watch: {
    $route(val) {
      this.getVideoUrl()
      this.getComment()
    }
  }
}
</script>

<style lang="less" scoped>
.video {
  width: 100%;
}

.video video {
  width: 100%;
  // height: 400px;
}

.user {
  position: relative;
  margin: 10px 0 10px 0;
  display: flex;
  align-items: center;

  .name {
    padding-left: 10px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
}

.btn {
  position: absolute;
  right: 0;
}

.title {
  margin-top: 15px;
  line-height: 30px;
  font-weight: bold;
  font-size: 20px;
}

.playCount {
  font-size: 13px;
  color: gainsboro;
  line-height: 30px;
}

.tags {
  line-height: 22px;
  display: flex;
  align-items: center;
  font-size: 12px;

  .tag {
    // height: 19px;
    padding: 1px 2px 1px 2px;
    line-height: 19px;
    margin-right: 5px;
    border-radius: 20px;
    background-color: #F7F7F7;
  }
}

.row {
  line-height: 80px;
}
</style>
