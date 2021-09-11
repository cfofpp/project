<template>
<div class="item">
  <img :src="hot.user.avatarUrl" alt="">
  <div class="box">
    <div class="name">{{hot.user.nickname}}：<span>{{hot.content}}</span></div>
    <div class="time">{{hot.time | formatData}}</div>
  </div>
</div>
</template>

<script>
export default {
props:{
  hot:{
    type:Object,
    default(){
      return {}
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
            let m = date.getMinutes()
            m = m < 10 ? ('0' + m) : m
            return y + '-' + MM + '-' + d + ' ' + h+':'+m;
        }
    },
}
</script>

<style lang="less" scoped>
.item {
  padding: 20px 0 20px 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gainsboro;
}

.item img {
  width: 40px;
  height: 40px;
}
.item .box{
  margin-left: 15px;
  .time{
    color: #9F9FBF;
  }
}
.item .box .name,.time{
  font-size: 13px;
  line-height: 25px;
  // display: flex;
  // flex-wrap: nowrap;
}
.name {
  color: #67B7DF;
  span{
    color: #676767;
  }
}
</style>
