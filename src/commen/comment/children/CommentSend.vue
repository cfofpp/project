<template>
<div class="send">
  <!-- <div class="count">评论 <span>({{num}})</span></div> -->
  <div class="content">
    <el-input type="textarea" rows='3' v-model="textarea" maxlength="120" show-word-limit>
    </el-input>
    <div class="sendBtn"><el-button size='small' round>评论</el-button></div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    num: {
      type: Number
    }
  },
  data() {
    return {
      textarea: ''
    }
  }
}
</script>

<style lang="less" scoped>
.send {
  margin-top: 40px;
  padding: 0 20px 0 20px;

  .count {
    font-weight: bold;
    text-align: left;
    font-size: 20px;
    margin-bottom: 30px;

    span {
      font-weight: normal;
      font-size: 14px;
    }
  }
}
.sendBtn{
  margin-top: 10px;
  text-align: right;
}
</style>
