<template>
<div class="comment">
  <div class="hotBox">
    <div class="hot" v-if="comment.hotComments">精彩评论</div>
    <!-- 评论列表 -->
    <!-- 遍历评论数组，将对象传给组件 -->
    <comment-item  :hot="item" v-for="(item,index) in comment.hotComments" :key="index"/>
  </div>
  <div class="newBox">
    <div class="new" v-if=" comment.comments">最新评论</div>
    <comment-item :hot="item" v-for="(item,index) in comment.comments" :key="index"/>
  </div>
</div>
</template>

<script>
import CommentItem from '@/commen/comment/children/CommentItem'
export default {
  props:{
    comment:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components: {
    CommentItem
  }
}
</script>

<style lang="less" scoped>
.comment {
  margin-top: 30px;
}

.hot,
.new {
  font-weight: 600;
  font-size: 14px;
}

.hotBox {
  margin-bottom: 50px;
}
</style>
