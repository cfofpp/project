<template>
<div class="bottomBox">
  <template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="歌曲列表" name="first">
        <keep-alive>
          <songs-list :playlist="playlist" />
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane :label="'评论'+(comment.total)" name="second">
        <!-- 发送 -->
        <comment-send :num="comment.commentCount" />
        <!-- 评论列表 -->
        <comment :comment="comment" />
      </el-tab-pane>
      <el-tab-pane label="收藏者" name="third">
        <!-- <shou-cang></shou-cang> -->
      </el-tab-pane>
    </el-tabs>
  </template>
</div>
</template>

<script>
import CommentSend from '@/commen/comment/children/CommentSend'
import Comment from '@/commen/comment/Comment'
const SongsList = () => import('@/components/songList/SongsList')
// import {getSongListDetail} from '../../nextwork/geXing'
export default {
  components: {
    SongsList,
    CommentSend,
    Comment
  },
  props: {
    playlist: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data() {
    return {
      activeName: 'first',
      //评论数据
      comment:{}
    }
  },
  created() {
    //   console.dir(this.playlist);
    this.getSongsComment()
    console.log(this.comment);
  },
  mounted() {
    //  this.getSongListDetail()
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    //获取歌单评论
   async getSongsComment(){
        const res = await this.$http.get(`/comment/playlist?id=${this.playlist.id}`)
        // console.log(res);
        this.comment=res.data
    }
  }
}
</script>

<style scoped>
.bottomBox {
  width: 100%;
  overflow: hidden;
  font-size: 20px;
  /* float: left; */
}

.el-tabs /deep/ .el-tabs__nav {
  margin-left: 40px;
}

.el-tabs /deep/ .el-tabs__active-bar {
  background-color: #c62f2f;
  height: 4px;
}

.el-tabs /deep/ .el-tabs__item.is-active {
  color: #c62f2f;
}

.el-tabs /deep/ .el-tabs__nav-wrap::after {
  height: 1px;
  color: var(--color-line);
}

.el-tabs /deep/.el-tabs__item {
  border: 0;
}

.el-tabs /deep/.el-tabs__item:hover {
  color: black;
}

.el-tabs /deep/ .el-tabs__header {
  margin: 0;
}
</style>
