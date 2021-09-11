<template>
  <div class="songs">
      <cat-tar-bar @tagsClick="tagClick" class="tar" :arr="arr"></cat-tar-bar>
      <recommend-song class="recommend" :recommendList='recommendList'/>
  </div>
</template>

<script>
import CatTarBar from '@/commen/TarBarCat/CatTarBar'
import RecommendSong from '../../../components/RecommendSong.vue'
export default {
    components:{
        CatTarBar,
        RecommendSong
    },
    data(){
        return{
            arr:[],
            recommendList:[],
            def:'华语'
        }
    },
    created(){
        this.getTags()
        this.getSongsListByTag(this.def)
    },
    methods:{
        //获取标签列表
       async getTags(){
         const res = await this.$http.get('/playlist/highquality/tags')
        //  this.arr
        console.log(res.data.tags);
        for(let i=0;i<res.data.tags.length;i++){
              if(i<9){
                  this.arr.push(res.data.tags[i].name)
              }else{
                  break;
              }
          }
        },
        //通过标签获取歌单列表
       async getSongsListByTag(val){
          const res = await this.$http.get(`/top/playlist/highquality?cat=${val}`)
          console.log(res);
          this.recommendList=res.data.playlists
        },
        //子传父 发送当前点击的歌曲标签
        tagClick(val){
            console.log(val);
            //将子组件传过来的标签再次发送请求获取数据
            this.getSongsListByTag(val)
        }
    }
}
</script>

<style scoped>
.tar{
    width: 100%;
}
.recommend{
    padding: 20px;
}
</style>