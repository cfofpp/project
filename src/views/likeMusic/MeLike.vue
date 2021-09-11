<template>
  <div class="like">
      <like-head v-if="likeDataList" :likeDataList="likeDataList"/>
    
      <!-- <songs-and-p :playlist="playlist"/> -->
      <songs-list-commen  :playlist="playlist"/>
  </div>
</template>

<script>
import songsListCommen from '@/commen/songListCommen/songsListCommen'
const LikeHead = ()=>import('@/views/likeMusic/children/LikeHead')
// const SongsAndP = ()=>import('@/components/songsandpinglun/SongsAndP')
import {getSongListDetail} from '../../nextwork/geXing'
export default {
    components:{
        LikeHead,
        songsListCommen
    },
    data(){
        return{
            likeDataList:[],
            //歌曲列表
            playlist:{},
            //歌单列表id
            // id:null
        }
    },
  created(){
       this.getLike()   
    //    this.getSongListDetailfun(this.id)
  },
  mounted(){
     
  },
    methods:{
      async  getLike(){
          //等待数据获取后再展示 通过userID获取
     const res = await this.$http.get(`user/playlist?uid=${this.$store.state.profile.userId}`)
            console.log(res);
            //获取简介
            this.likeDataList=res.data.playlist
           let id=res.data.playlist[0].id
         
        //获取id
         const ress  = await  getSongListDetail(id)
                console.log(ress.playlist);
                this.playlist=ress.playlist
                console.log(ress.playlist)
    },
    //获取歌曲
    //   getSongListDetailfun(id){
    //         if (id) return;
         
    //             // console.log(this.playlist.tracks);
        
    //     }
    }
    
}
</script>

<style scoped>

</style>