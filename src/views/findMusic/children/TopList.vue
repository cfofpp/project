<template>
  <div class="toplist">
      <div class="title">官方榜</div>
      <!-- 榜单分类 -->
      <top-list-item :topList='topList.slice(0,6)'/>
      <div class="title">全球版</div>
       <top-list-item :topList='topList.slice(6,27)'/>
  </div>
</template>

<script>
import TopListItem from '@/components/find/children/TopListItem'
export default {
    components:{
        TopListItem
    },
    data(){
        return{
            topList:[]
        }
    },
    created(){
        this.getTopList()
    },
    methods:{
       async getTopList(){
         const res = await this.$http.get('/toplist')
         console.log(res);
         this.topList=res.data.list
        }
    }
}
</script>

<style scoped>
.toplist{
    text-align: left;
    padding: 15px 25px 15px 25px;
}
.toplist .title{

    font-weight: bold;
    font-size: 18px;
}
</style>