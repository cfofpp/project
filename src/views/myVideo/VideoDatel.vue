<template>
<div class="videoDatel">
  <div class="head">
    <div @click="back" class="detail"><i class="el-icon-arrow-left"></i>视频详情</div>
    <div class="recommt">相关推荐</div>
  </div>
  <div class="content">
    <!-- 左边 -->
    <left class="leftBox" :id="this.$route.params.vid" :video="video" />
    <!-- 右边 -->
    <right class="rightBox" :id="this.$route.params.vid" />
  </div>
</div>
</template>

<script>
import Left from './detail/Left.vue'
import Right from '@/views/myVideo/detail/Right'
export default {
  components: {
    Left,
    Right
  },
  data() {
    return {
      video: {}
    }
  },
  created() {
    this.getVideoDetail()
  },
  methods: {
    //获取视频信息
    async getVideoDetail() {
      let id = this.$route.params.vid
      const res = await this.$http.get(`/video/detail?id=${id}`)
      console.log(res);
      this.video = res.data.data
    },
  back(){
    this.$router.go(-1)
  }
  },
  //监听路由变化刷新页面数据
  watch:{
      $route(val) {
        this.getVideoDetail()
      }
  }
}
</script>

<style lang="less" scoped>
.videoDatel {
  padding: 20px;
  padding-top: 0;
}

.head {
  display: flex;
  line-height: 60px;
  width: 100%;
  font-size: 17px;
  font-weight: bold;
  // padding-left: 20px;
}

.detail {
  width: 65%;
  text-align: left;
}

.content {
  display: flex;
  text-align: left;
  // padding: 25px;
  // align-items: center;
}

.content .leftBox,
.content .rightBox {
  // font-size: 17px;
  // font-weight: bold;
}

.content .leftBox {
  width: 60%;
}

.content .rightBox {
  width: 40%;
}
</style>
